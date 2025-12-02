import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Subscription price IDs (monthly membership tiers - Live Mode)
const SUBSCRIPTION_PRICE_IDS = [
  "price_1SZzqwDPFz6EvGtX59K3i39M", // Friend - $5/mo
  "price_1SZztVDPFz6EvGtXpRo59YuH", // Supporter - $10/mo
  "price_1SZzuiDPFz6EvGtXYESbd263", // Patron - $25/mo
  "price_1SZzvNDPFz6EvGtXP9Oj7yiW", // Champion - $50/mo
  "price_1SZzvpDPFz6EvGtXtxEB39Fo", // Producer Circle - $100/mo
];

// Custom adjustable donation price ID (Live Mode)
const CUSTOM_DONATION_PRICE_ID = "price_1Sa06yDPFz6EvGtXw9IY9cob";

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe key is configured
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

    // Determine if this is a subscription or one-time payment
    const isSubscription = SUBSCRIPTION_PRICE_IDS.includes(priceId);
    const isCustomDonation = priceId === CUSTOM_DONATION_PRICE_ID;

    // Build session parameters
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: isSubscription ? "subscription" : "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      metadata: metadata,
    };

    // For custom adjustable donations, set the custom amount if provided
    if (isCustomDonation && metadata.customAmount) {
      const customAmount = parseFloat(metadata.customAmount);
      if (customAmount >= 5) {
        // Override the price with a custom amount
        sessionParams.line_items = [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Custom Donation",
              },
              unit_amount: Math.round(customAmount * 100), // Convert to cents
            },
            quantity: 1,
          },
        ];
      }
    }

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create(sessionParams);

    // Return the session URL as JSON (do NOT use NextResponse.redirect)
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

