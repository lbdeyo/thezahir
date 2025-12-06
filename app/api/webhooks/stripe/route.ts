import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Disable body parsing for webhook route (required for signature verification)
export const runtime = "nodejs";

// Route segment config to ensure raw body is available
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  // Validate environment variables
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey) {
    console.error("STRIPE_SECRET_KEY environment variable is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET environment variable is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);

  try {
    // Get raw body as text (required for signature verification)
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      console.error("Missing stripe-signature header");
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    if (!body) {
      console.error("Empty request body");
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const error = err as Error;
      console.error("Webhook signature verification failed:", error.message);
      return NextResponse.json(
        { error: `Webhook Error: ${error.message}` },
        { status: 400 }
      );
    }

    // Handle the event
    try {
      switch (event.type) {
        case "checkout.session.completed":
          const session = event.data.object as Stripe.Checkout.Session;
          console.log("Checkout session completed:", {
            sessionId: session.id,
            customerId: session.customer,
            amountTotal: session.amount_total,
            mode: session.mode,
            metadata: session.metadata,
          });
          // TODO: Update database, send confirmation email, etc.
          break;

        case "invoice.payment_succeeded":
          const invoice = event.data.object as Stripe.Invoice;
          const subscriptionId = (invoice as any).subscription && typeof (invoice as any).subscription === "string" 
            ? (invoice as any).subscription 
            : ((invoice as any).subscription as Stripe.Subscription | null)?.id || null;
          console.log("Invoice payment succeeded:", {
            invoiceId: invoice.id,
            customerId: invoice.customer,
            subscriptionId: subscriptionId,
            amountPaid: invoice.amount_paid,
          });
          // TODO: Update subscription status, send receipt, etc.
          break;

        case "customer.subscription.deleted":
          const subscription = event.data.object as Stripe.Subscription;
          console.log("Subscription deleted:", {
            subscriptionId: subscription.id,
            customerId: subscription.customer,
          });
          // TODO: Cancel membership, update database, etc.
          break;

        case "invoice.payment_failed":
          const failedInvoice = event.data.object as Stripe.Invoice;
          const failedSubscriptionId = (failedInvoice as any).subscription && typeof (failedInvoice as any).subscription === "string"
            ? (failedInvoice as any).subscription
            : ((failedInvoice as any).subscription as Stripe.Subscription | null)?.id || null;
          console.log("Invoice payment failed:", {
            invoiceId: failedInvoice.id,
            customerId: failedInvoice.customer,
            subscriptionId: failedSubscriptionId,
            attemptCount: failedInvoice.attempt_count,
          });
          // TODO: Notify user, update subscription status, etc.
          break;

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }
    } catch (eventError) {
      // Log the error but still return 200 to Stripe to prevent retries
      // for events that fail processing (vs. failing signature verification)
      console.error("Error processing webhook event:", eventError);
      return NextResponse.json(
        { 
          received: true, 
          warning: "Event processed but handler encountered an error",
          eventType: event.type 
        },
        { status: 200 }
      );
    }

    // Always return 200 for successfully received and verified webhooks
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Webhook handler error:", errorMessage, error);
    return NextResponse.json(
      { error: "Webhook handler failed", details: errorMessage },
      { status: 500 }
    );
  }
}

