import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Disable body parsing for webhook route (required for signature verification)
export const runtime = "nodejs";

export const dynamic = "force-dynamic";

// In-memory set of processed event IDs for this instance only.
// For production dedupe across invocations, use Vercel KV or a database.
const processedEventIds = new Set<string>();

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey) {
    console.error("STRIPE_WEBHOOK: STRIPE_SECRET_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK: STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);

  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      console.error("STRIPE_WEBHOOK: Missing stripe-signature header");
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    if (!body) {
      console.error("STRIPE_WEBHOOK: Empty request body");
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const error = err as Error;
      console.error("STRIPE_WEBHOOK: Signature verification failed:", error.message);
      return NextResponse.json(
        { error: `Webhook Error: ${error.message}` },
        { status: 400 }
      );
    }

    // Idempotency: skip if we've already processed this event (in this instance)
    if (processedEventIds.has(event.id)) {
      console.log("STRIPE_WEBHOOK: Duplicate event ignored (idempotency)", {
        eventId: event.id,
        eventType: event.type,
      });
      return NextResponse.json({ received: true, duplicate: true }, { status: 200 });
    }
    processedEventIds.add(event.id);

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as Stripe.Checkout.Session;
          const donationType = (session.metadata?.donation_type as string) ?? "unknown";

          // Diagnostic log for every charge path
          console.log("STRIPE_WEBHOOK: checkout.session.completed", {
            eventId: event.id,
            sessionId: session.id,
            mode: session.mode,
            donation_type: donationType,
            amount_total: session.amount_total,
            customer_id: session.customer,
            payment_intent: session.payment_intent,
            subscription: session.subscription,
            metadata: session.metadata,
          });

          if (session.mode === "payment") {
            // ONE-TIME DONATION: Record only. Do NOT create subscription, invoice item, or any follow-up PaymentIntent.
            console.log("STRIPE_WEBHOOK: One-time payment completed; no follow-up charge will be created", {
              sessionId: session.id,
              donation_type: donationType,
            });
            // TODO: Update database (e.g. record one-time donation), send confirmation email. Do NOT charge again.
            break;
          }

          if (session.mode === "subscription") {
            // RECURRING: Record subscription ID for your records.
            console.log("STRIPE_WEBHOOK: Subscription checkout completed", {
              sessionId: session.id,
              subscriptionId: session.subscription,
              donation_type: donationType,
            });
            // TODO: Update database with subscription id, link to customer. Invoices will fire separately.
            break;
          }

          console.log("STRIPE_WEBHOOK: checkout.session.completed other mode", {
            sessionId: session.id,
            mode: session.mode,
          });
          break;
        }

        case "invoice.payment_succeeded": {
          const invoice = event.data.object as Stripe.Invoice;
          const inv = invoice as unknown as { subscription?: string | { id: string }; customer?: string | { id: string } };
          const sub = inv.subscription;
          const subscriptionId =
            typeof sub === "string" ? sub : (sub as Stripe.Subscription | null)?.id ?? null;

          console.log("STRIPE_WEBHOOK: invoice.payment_succeeded", {
            eventId: event.id,
            invoiceId: invoice.id,
            customerId: inv.customer,
            subscriptionId,
            amountPaid: invoice.amount_paid,
            billingReason: invoice.billing_reason,
          });

          // Only subscriptions produce invoices. One-time payments do not.
          if (!subscriptionId) {
            console.log("STRIPE_WEBHOOK: Invoice has no subscription (expected for one-time); no action", {
              invoiceId: invoice.id,
            });
          }
          break;
        }

        case "customer.subscription.deleted": {
          const subscription = event.data.object as Stripe.Subscription;
          console.log("STRIPE_WEBHOOK: customer.subscription.deleted", {
            eventId: event.id,
            subscriptionId: subscription.id,
            customerId: subscription.customer,
          });
          break;
        }

        case "invoice.payment_failed": {
          const failedInvoice = event.data.object as Stripe.Invoice;
          const inv = failedInvoice as unknown as { subscription?: string | { id: string }; customer?: string | { id: string } };
          const sub = inv.subscription;
          const failedSubscriptionId =
            typeof sub === "string" ? sub : (sub as Stripe.Subscription | null)?.id ?? null;
          console.log("STRIPE_WEBHOOK: invoice.payment_failed", {
            eventId: event.id,
            invoiceId: failedInvoice.id,
            customerId: inv.customer,
            subscriptionId: failedSubscriptionId,
            attemptCount: failedInvoice.attempt_count,
          });
          break;
        }

        default:
          console.log("STRIPE_WEBHOOK: Unhandled event type", {
            eventId: event.id,
            eventType: event.type,
          });
      }
    } catch (eventError) {
      console.error("STRIPE_WEBHOOK: Error processing event", {
        eventId: event.id,
        eventType: event.type,
        error: eventError,
      });
      return NextResponse.json(
        {
          received: true,
          warning: "Event processed but handler encountered an error",
          eventType: event.type,
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("STRIPE_WEBHOOK: Handler error", errorMessage, error);
    return NextResponse.json(
      { error: "Webhook handler failed", details: errorMessage },
      { status: 500 }
    );
  }
}
