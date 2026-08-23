import { NextRequest, NextResponse } from "next/server";
import { submitContactFormToHubSpot } from "@/app/lib/hubspot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, subscribeToMailingList, hubspotUtk, pageUri } =
      body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    try {
      await submitContactFormToHubSpot({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        subscribeToMailingList: Boolean(subscribeToMailingList),
        hubspotUtk:
          typeof hubspotUtk === "string" && hubspotUtk.trim()
            ? hubspotUtk.trim()
            : undefined,
        pageUri:
          typeof pageUri === "string" && pageUri.trim()
            ? pageUri.trim()
            : undefined,
      });
    } catch (hubspotError) {
      console.error("HubSpot contact submission failed:", hubspotError);
      return NextResponse.json(
        { error: "Failed to deliver contact message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to submit form: ${errorMessage}` },
      { status: 500 }
    );
  }
}
