const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "244639378";
const HUBSPOT_REGION = process.env.HUBSPOT_REGION ?? "na2";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.the-zahir.org";

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  subscribeToMailingList: boolean;
};

async function getCollectedFormsToken(): Promise<number> {
  const response = await fetch(
    `https://forms-${HUBSPOT_REGION}.hscollectedforms.net/collected-forms/v1/config/json?portalId=${HUBSPOT_PORTAL_ID}&utk=`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load HubSpot collected-forms config (${response.status})`
    );
  }

  const data = (await response.json()) as { token?: number };
  if (typeof data.token !== "number") {
    throw new Error("HubSpot collected-forms token missing from config");
  }

  return data.token;
}

export async function submitContactFormToHubSpot(
  submission: ContactSubmission
): Promise<void> {
  const token = await getCollectedFormsToken();
  const fields = [
    {
      name: "email",
      value: submission.email,
      label: "Email",
      type: "email",
    },
    {
      name: "name",
      value: submission.name,
      label: "Name",
      type: "text",
    },
    {
      name: "message",
      value: submission.message,
      label: "Message",
      type: "textarea",
    },
  ];

  const contactFields: Record<string, string> = {
    email: submission.email,
    name: submission.name,
    message: submission.message,
  };

  if (submission.subscribeToMailingList) {
    fields.push({
      name: "newsletter_subscriber",
      value: "true",
      label: "Newsletter",
      type: "hidden",
    });
    contactFields.newsletter_subscriber = "true";
  }

  const response = await fetch(
    `https://forms-${HUBSPOT_REGION}.hscollectedforms.net/collected-forms/submit/form`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        portalId: Number(HUBSPOT_PORTAL_ID),
        formSelectorId: "contact-form",
        formSelectorClasses: "max-w-3xl space-y-6",
        pageUrl: `${SITE_URL}/contact`,
        pageTitle: "Contact | THE ZAHIR",
        token,
        type: "SCRAPED",
        version: "1.0",
        fields,
        contactFields,
      }),
    }
  );

  if (!response.ok && response.status !== 204) {
    const errorText = await response.text();
    throw new Error(
      `HubSpot submission failed (${response.status}): ${errorText}`
    );
  }
}
