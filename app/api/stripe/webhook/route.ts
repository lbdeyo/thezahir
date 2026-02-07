/**
 * Stripe webhook: donation notifications and idempotent email sending.
 * Uses raw body for signature verification. No DB; in-memory dedupe by event id.
 *
 * Setup:
 * 1. Stripe Dashboard > Developers > Webhooks > Add endpoint
 * 2. URL: https://your-domain.com/api/stripe/webhook
 * 3. Events: checkout.session.completed, invoice.paid, customer.subscription.deleted, invoice.payment_failed
 * 4. Copy signing secret to STRIPE_WEBHOOK_SECRET (and STRIPE_SECRET_KEY for API calls).
 *
 * Local testing:
 *   stripe listen --forward-to localhost:3000/api/stripe/webhook
 *   stripe trigger checkout.session.completed
 *   stripe trigger invoice.paid
 */

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import {
  sendDonorThankYou,
  sendAdminDonationNotification,
  sendAdminFailureNotification,
  type DonationEmailPayload,
} from "@/app/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// In-memory dedupe: prevents double-processing only within same serverless instance.
// Stripe retries may hit different instances, so we include event_id in email subject/headers
// so recipients can dedupe. For production at scale, consider Vercel KV or similar.
const processedEventIds = new Set<string>();

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

function formatAmount(cents: number, currency: string): string {
  const value = (cents / 100).toFixed(2);
  return value;
}

async function buildDonorPayloadFromSession(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  eventId: string,
  amountCents: number,
  currency: string,
  isRecurring: boolean,
  tier: string | null
): Promise<DonationEmailPayload> {
  const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id ?? null;
  let email = session.customer_details?.email ?? session.customer_email ?? "";
  let name = session.customer_details?.name ?? null;

  if (!email && customerId) {
    try {
      const customer = await stripe.customers.retrieve(customerId);
      if (!customer.deleted && customer.email) {
        email = customer.email;
        name = name ?? customer.name ?? null;
      }
    } catch (e) {
      console.warn("Webhook: could not retrieve customer", customerId, e);
    }
  }

  let last4: string | null = null;
  let brand: string | null = null;
  const paymentIntentId = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;
  if (paymentIntentId && !isRecurring) {
    try {
      const pi = await stripe.paymentIntents.retrieve(paymentIntentId, {
        expand: ["charges.data.payment_method_details"],
      });
      const charge = pi.charges?.data?.[0];
      const pm = charge?.payment_method_details as { card?: { last4?: string; brand?: string } } | undefined;
      if (pm?.card) {
        last4 = pm.card.last4 ?? null;
        brand = pm.card.brand ?? null;
      }
    } catch (e) {
      console.warn("Webhook: could not retrieve payment intent for last4/brand", e);
    }
  }

  const createdAt = session.created
    ? new Date(session.created * 1000).toISOString()
    : new Date().toISOString();

  return {
    donorEmail: email,
    donorName: name,
    amountFormatted: formatAmount(amountCents, currency),
    amountCents,
    currency,
    isRecurring,
    tier,
    stripeSessionId: session.id,
    stripeInvoiceId: null,
    stripeCustomerId: customerId,
    createdAt,
    eventId,
    last4: last4 ?? undefined,
    brand: brand ?? undefined,
  };
}

async function getPortalReturnUrl(): Promise<string> {
  const url = process.env.SITE_URL ?? process.env.VERCEL_URL;
  if (url) return url.startsWith("http") ? url : `https://${url}`;
  return "https://www.the-zahir.org/donate";
}

async function handleCheckoutSessionCompleted(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  eventId: string
): Promise<void> {
  const metadata = session.metadata ?? {};
  const donationType = (metadata.donation_type as string) ?? (session.mode === "subscription" ? "monthly" : "one_time");
  const tier = (metadata.tier as string) ?? null;
  const isRecurring = session.mode === "subscription";

  const amountCents = session.amount_total ?? 0;
  const currency = (session.currency ?? "usd").toLowerCase();

  const payload = await buildDonorPayloadFromSession(
    stripe,
    session,
    eventId,
    amountCents,
    currency,
    isRecurring,
    tier
  );

  if (isRecurring && payload.stripeCustomerId) {
    try {
      const returnUrl = await getPortalReturnUrl();
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: payload.stripeCustomerId,
        return_url: returnUrl.endsWith("/donate") ? returnUrl : `${returnUrl}/donate`,
      });
      payload.manageDonationUrl = portalSession.url;
    } catch (e) {
      console.warn("Webhook: could not create portal session for donor email", e);
    }
  }

  if (!payload.donorEmail) {
    console.warn("Webhook: checkout.session.completed missing donor email", { sessionId: session.id, eventId });
    payload.donorEmail = "unknown@unknown"; // still send admin
  }

  await sendAdminDonationNotification(
    payload,
    isRecurring ? "subscription_created" : "one_time"
  );

  if (payload.donorEmail && payload.donorEmail !== "unknown@unknown") {
    await sendDonorThankYou(payload);
  }
}

async function handleInvoicePaid(stripe: Stripe, invoice: Stripe.Invoice, eventId: string): Promise<void> {
  const subscriptionId = typeof invoice.subscription === "string" ? invoice.subscription : invoice.subscription?.id;
  const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
  let email = invoice.customer_email ?? "";
  let name: string | null = null;

  if (customerId && !email) {
    try {
      const customer = await stripe.customers.retrieve(customerId);
      if (!customer.deleted && customer.email) {
        email = customer.email;
        name = customer.name ?? null;
      }
    } catch (e) {
      console.warn("Webhook: could not retrieve customer for invoice", e);
    }
  }

  const amountCents = invoice.amount_paid ?? 0;
  const currency = (invoice.currency ?? "usd").toLowerCase();

  let tier: string | null = null;
  if (subscriptionId) {
    try {
      const sub = await stripe.subscriptions.retrieve(subscriptionId);
      tier = (sub.metadata?.tier as string) ?? null;
    } catch (_) {
      /* ignore */
    }
  }

  const payload: DonationEmailPayload = {
    donorEmail: email || "unknown@unknown",
    donorName: name,
    amountFormatted: formatAmount(amountCents, currency),
    amountCents,
    currency,
    isRecurring: true,
    tier,
    stripeSessionId: null,
    stripeInvoiceId: invoice.id,
    stripeCustomerId: customerId ?? undefined,
    createdAt: invoice.status_transitions?.paid_at
      ? new Date(invoice.status_transitions.paid_at * 1000).toISOString()
      : new Date().toISOString(),
    eventId,
  };

  if (customerId) {
    try {
      const returnUrl = await getPortalReturnUrl();
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl.endsWith("/donate") ? returnUrl : `${returnUrl}/donate`,
      });
      payload.manageDonationUrl = portalSession.url;
    } catch (e) {
      console.warn("Webhook: could not create portal session for renewal email", e);
    }
  }

  await sendAdminDonationNotification(payload, "subscription_renewal");

  if (email && email !== "unknown@unknown") {
    await sendDonorThankYou(payload);
  }
}

async function handleSubscriptionDeleted(
  _stripe: Stripe,
  subscription: Stripe.Subscription,
  eventId: string
): Promise<void> {
  await sendAdminFailureNotification(eventId, "subscription_deleted", {
    customerId: typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id,
    subscriptionId: subscription.id,
  });
}

async function handleInvoicePaymentFailed(
  stripe: Stripe,
  invoice: Stripe.Invoice,
  eventId: string
): Promise<void> {
  let email: string | undefined;
  const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
  if (customerId) {
    try {
      const customer = await stripe.customers.retrieve(customerId);
      if (!customer.deleted && customer.email) email = customer.email;
    } catch (_) {
      /* ignore */
    }
  }

  await sendAdminFailureNotification(eventId, "payment_failed", {
    customerId: customerId ?? undefined,
    subscriptionId: typeof invoice.subscription === "string" ? invoice.subscription : invoice.subscription?.id,
    invoiceId: invoice.id,
    email,
  });
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  // Raw body required for signature verification (do not use request.json() first)
  let body: string;
  try {
    body = await request.text();
  } catch (e) {
    console.error("Webhook: failed to read body", e);
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    console.error("Webhook: missing stripe-signature header");
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = Stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook: signature verification failed", msg);
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  if (processedEventIds.has(event.id)) {
    console.log("Webhook: duplicate event ignored (idempotency)", { eventId: event.id, type: event.type });
    return NextResponse.json({ received: true, duplicate: true }, { status: 200 });
  }
  processedEventIds.add(event.id);

  const stripe = getStripe();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(stripe, session, event.id);
        break;
      }
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaid(stripe, invoice, event.id);
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(stripe, subscription, event.id);
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(stripe, invoice, event.id);
        break;
      }
      default:
        console.log("Webhook: unhandled event type", { eventId: event.id, type: event.type });
    }
  } catch (err) {
    console.error("Webhook: handler error", { eventId: event.id, type: event.type, error: err });
    return NextResponse.json(
      { received: true, warning: "Handler error", eventType: event.type },
      { status: 200 }
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
