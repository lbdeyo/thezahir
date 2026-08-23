import { NextRequest, NextResponse } from "next/server";
import { submitFooterMailingListToHubSpot } from "@/app/lib/hubspot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, pageUri } = body;

    const trimmedEmail = typeof email === "string" ? email.trim() : "";

    if (!trimmedEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    try {
      await submitFooterMailingListToHubSpot(
        trimmedEmail,
        typeof pageUri === "string" && pageUri.trim()
          ? pageUri.trim()
          : undefined
      );
    } catch (hubspotError) {
      console.error("HubSpot mailing list submission failed:", hubspotError);
      return NextResponse.json(
        { error: "Failed to subscribe to mailing list" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailing list subscription error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to subscribe: ${errorMessage}` },
      { status: 500 }
    );
  }
}
