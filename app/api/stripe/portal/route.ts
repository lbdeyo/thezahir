/**
 * Creates a Stripe Customer Portal session and returns the URL.
 * Use for "Manage your donation" link so customers can update payment method or cancel subscription.
 *
 * POST body: { customerId: string, returnUrl?: string }
 */

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const stripe = new Stripe(key);

  try {
    const body = await request.json();
    const { customerId, returnUrl } = body as { customerId?: string; returnUrl?: string };

    if (!customerId || typeof customerId !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid customerId" },
        { status: 400 }
      );
    }

    const baseUrl = request.nextUrl.origin;
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl ?? `${baseUrl}/donate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe portal error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to create portal session", details: message },
      { status: 500 }
    );
  }
}
