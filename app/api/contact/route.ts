import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblvyvny";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, subscribeToMailingList } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // Submit to Formspree
    const formspreeFormData = new FormData();
    formspreeFormData.append("name", name);
    formspreeFormData.append("email", email);
    formspreeFormData.append("message", message);

    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formspreeFormData,
      headers: {
        Accept: "application/json",
      },
    });

    // Check if Formspree submission was successful
    let formspreeSuccess = false;
    if (
      formspreeResponse.ok ||
      formspreeResponse.status === 302 ||
      formspreeResponse.status === 200
    ) {
      formspreeSuccess = true;
    }

    // If user wants to subscribe to mailing list, add them to MailChimp
    let mailchimpSuccess = false;
    if (subscribeToMailingList && email) {
      try {
        const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
        const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;

        if (!mailchimpApiKey || !mailchimpAudienceId) {
          console.error(
            "MailChimp API key or Audience ID not configured"
          );
        } else {
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
              email_address: email,
              status: "subscribed",
              merge_fields: {
                FNAME: name.split(" ")[0] || "",
                LNAME: name.split(" ").slice(1).join(" ") || "",
              },
            }),
          });

          if (mailchimpResponse.ok) {
            mailchimpSuccess = true;
          } else {
            const errorData = await mailchimpResponse.json();
            // If email already exists, that's okay - we consider it a success
            if (errorData.title === "Member Exists") {
              mailchimpSuccess = true;
            } else {
              console.error("MailChimp error:", errorData);
            }
          }
        }
      } catch (mailchimpError) {
        console.error("MailChimp subscription error:", mailchimpError);
        // Don't fail the whole request if MailChimp fails
      }
    }

    // Return success if Formspree submission worked
    // (MailChimp failure doesn't fail the whole request)
    if (formspreeSuccess) {
      return NextResponse.json({
        success: true,
        mailchimpSubscribed: subscribeToMailingList ? mailchimpSuccess : null,
      });
    } else {
      const errorText = await formspreeResponse.text();
      return NextResponse.json(
        { error: "Failed to submit form", details: errorText },
        { status: formspreeResponse.status }
      );
    }
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

