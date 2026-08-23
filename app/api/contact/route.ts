import { NextRequest, NextResponse } from "next/server";
import { submitContactFormToHubSpot } from "@/app/lib/hubspot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, subscribeToMailingList } = body;

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
      });
    } catch (hubspotError) {
      console.error("HubSpot contact submission failed:", hubspotError);
      return NextResponse.json(
        { error: "Failed to deliver contact message" },
        { status: 502 }
      );
    }

    let mailchimpSuccess = false;
    if (subscribeToMailingList && trimmedEmail) {
      try {
        const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
        const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;

        if (!mailchimpApiKey || !mailchimpAudienceId) {
          console.error(
            "MailChimp API key or Audience ID not configured"
          );
        } else {
          const datacenter = mailchimpApiKey.split("-")[1];
          const mailchimpUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

          const authString = Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64");

          const mailchimpResponse = await fetch(mailchimpUrl, {
            method: "POST",
            headers: {
              Authorization: `Basic ${authString}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email_address: trimmedEmail,
              status: "subscribed",
              merge_fields: {
                FNAME: trimmedName.split(" ")[0] || "",
                LNAME: trimmedName.split(" ").slice(1).join(" ") || "",
              },
            }),
          });

          if (mailchimpResponse.ok) {
            mailchimpSuccess = true;
          } else {
            const errorData = await mailchimpResponse.json();
            if (errorData.title === "Member Exists") {
              mailchimpSuccess = true;
            } else {
              console.error("MailChimp error:", errorData);
            }
          }
        }
      } catch (mailchimpError) {
        console.error("MailChimp subscription error:", mailchimpError);
      }
    }

    return NextResponse.json({
      success: true,
      mailchimpSubscribed: subscribeToMailingList ? mailchimpSuccess : null,
    });
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
