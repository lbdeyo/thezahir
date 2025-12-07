import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!mailchimpApiKey || !mailchimpAudienceId) {
      console.error("MailChimp API key or Audience ID not configured");
      return NextResponse.json(
        { error: "Mailing list service not configured" },
        { status: 500 }
      );
    }

    // Extract datacenter from API key (format: key-datacenter)
    const datacenter = mailchimpApiKey.split("-")[1];
    const mailchimpUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

    // MailChimp uses Basic auth with any username and API key as password
    const authString = Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64");

    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email.trim(),
        status: "subscribed",
      }),
    });

    if (mailchimpResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await mailchimpResponse.json();
      // If email already exists, that's okay - we consider it a success
      if (errorData.title === "Member Exists") {
        return NextResponse.json({ success: true });
      } else {
        console.error("MailChimp error:", errorData);
        return NextResponse.json(
          { error: "Failed to subscribe to mailing list" },
          { status: 500 }
        );
      }
    }
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

