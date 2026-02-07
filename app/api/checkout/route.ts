import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Subscription price IDs (monthly membership tiers - Live Mode)
// ONLY these may be used with mode: "subscription". One-time must never use these.
const SUBSCRIPTION_PRICE_IDS = [
  "price_1SZzqwDPFz6EvGtX59K3i39M", // Friend - $5/mo
  "price_1SZztVDPFz6EvGtXpRo59YuH", // Supporter - $10/mo
  "price_1SZzuiDPFz6EvGtXYESbd263", // Patron - $25/mo
  "price_1SZzvNDPFz6EvGtXP9Oj7yiW", // Champion - $50/mo
  "price_1SZzvpDPFz6EvGtXtxEB39Fo", // Producer Circle - $100/mo
];

// One-time price IDs (fixed amounts). Only these + custom donation are allowed for mode: "payment".
const ONE_TIME_PRICE_IDS = [
  "price_1Sa00IDPFz6EvGtXu5s0eTXy", // $25 one-time
  "price_1Sa00vDPFz6EvGtX4rfNTebc", // $50 one-time
  "price_1Sa01HDPFz6EvGtXJdOXyDsY", // $100 one-time
];

// Custom adjustable donation price ID (Live Mode). Used with price_data override for custom amount.
const CUSTOM_DONATION_PRICE_ID = "price_1Sa06yDPFz6EvGtXw9IY9cob";

const ENV = process.env.VERCEL_ENV === "production" ? "prod" : "dev";

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not set");
      return NextResponse.json(
        { error: "Stripe secret key is not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { priceId, quantity = 1, successUrl, cancelUrl, metadata = {} } = body;

    if (!priceId || !successUrl || !cancelUrl) {
      return NextResponse.json(
        { error: "Missing required fields: priceId, successUrl, cancelUrl" },
        { status: 400 }
      );
    }

    const isSubscription = SUBSCRIPTION_PRICE_IDS.includes(priceId);
    const isCustomDonation = priceId === CUSTOM_DONATION_PRICE_ID;
    const isOneTimePrice = ONE_TIME_PRICE_IDS.includes(priceId);

    // Guard: subscription flow may ONLY use allowlisted subscription prices
    if (isSubscription) {
      const donationType = "monthly";
      const sessionParams = buildSubscriptionSessionParams(
        successUrl,
        cancelUrl,
        priceId,
        quantity,
        metadata,
        donationType
      );
      const session = await stripe.checkout.sessions.create(sessionParams);
      logChargeCreation("checkout_session", donationType, session.id, priceId, null, request);
      return NextResponse.json({ url: session.url });
    }

    // One-time flow: only allow known one-time prices or custom donation
    if (!isOneTimePrice && !isCustomDonation) {
      // Unknown price: fetch from Stripe and reject if it's recurring (safety guard)
      try {
        const price = await stripe.prices.retrieve(priceId);
        if (price.recurring) {
          console.error("Checkout guard: recurring price used for one-time flow", {
            priceId,
            path: request.nextUrl?.pathname,
          });
          return NextResponse.json(
            { error: "This price is for subscriptions. Use a one-time donation option." },
            { status: 400 }
          );
        }
      } catch (err) {
        console.error("Checkout: could not retrieve price", priceId, err);
        return NextResponse.json(
          { error: "Invalid price" },
          { status: 400 }
        );
      }
    }

    const donationType = "one_time";
    const sessionParams = buildOneTimeSessionParams(
      successUrl,
      cancelUrl,
      priceId,
      quantity,
      metadata,
      isCustomDonation,
      donationType
    );

    const session = await stripe.checkout.sessions.create(sessionParams);
    logChargeCreation("checkout_session", donationType, session.id, priceId, null, request);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to create checkout session: ${errorMessage}` },
      { status: 500 }
    );
  }
}

function buildSubscriptionSessionParams(
  successUrl: string,
  cancelUrl: string,
  priceId: string,
  quantity: number,
  metadata: Record<string, string>,
  donationType: string
): Stripe.Checkout.SessionCreateParams {
  return {
    mode: "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [{ price: priceId, quantity }],
    subscription_data: {
      metadata: {
        donation_type: donationType,
        source: "website",
        environment: ENV,
        ...metadata,
      },
    },
    metadata: {
      donation_type: donationType,
      source: "website",
      environment: ENV,
      ...metadata,
    },
  };
}

function buildOneTimeSessionParams(
  successUrl: string,
  cancelUrl: string,
  priceId: string,
  quantity: number,
  metadata: Record<string, string>,
  isCustomDonation: boolean,
  donationType: string
): Stripe.Checkout.SessionCreateParams {
  const base: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity,
      },
    ],
    metadata: {
      donation_type: donationType,
      source: "website",
      environment: ENV,
      ...metadata,
    },
    payment_intent_data: {
      metadata: {
        donation_type: donationType,
        source: "website",
        environment: ENV,
        ...metadata,
      },
      // Do NOT set setup_future_usage - one-time payments must not save card for off-session reuse
    },
  };

  if (isCustomDonation && metadata.customAmount) {
    const customAmount = parseFloat(metadata.customAmount);
    if (customAmount >= 5) {
      base.line_items = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Custom Donation",
            },
            unit_amount: Math.round(customAmount * 100),
            // no recurring - one-time only
          },
          quantity: 1,
        },
      ];
    }
  }

  if (isCustomDonation) {
    base.custom_fields = [
      {
        key: "public_name",
        label: { type: "custom", custom: "How shall we list your name(s)?" },
        type: "text",
        text: { maximum_length: 200 },
        optional: true,
      },
    ];
  }

  return base;
}

function logChargeCreation(
  kind: string,
  donationType: string,
  sessionId: string,
  priceId: string | null,
  customerId: string | null,
  request: NextRequest
) {
  console.log("[Stripe charge creation]", {
    kind,
    donation_type: donationType,
    session_id: sessionId,
    price_id: priceId,
    customer_id: customerId,
    path: request.nextUrl?.pathname ?? request.url,
    environment: ENV,
  });
}
