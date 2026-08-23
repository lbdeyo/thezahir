const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "244639378";
const HUBSPOT_CONTACT_FORM_ID = process.env.HUBSPOT_CONTACT_FORM_ID;
const HUBSPOT_FIELD_MESSAGE =
  process.env.HUBSPOT_FIELD_MESSAGE ?? "message";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.the-zahir.org";

const HUBSPOT_FORMS_API =
  "https://api.hsforms.com/submissions/v3/integration/submit";

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  subscribeToMailingList: boolean;
  hubspotUtk?: string;
  pageUri?: string;
};

function splitName(fullName: string): { firstname: string; lastname: string } {
  const parts = fullName.trim().split(/\s+/);
  return {
    firstname: parts[0] ?? "",
    lastname: parts.slice(1).join(" "),
  };
}

export async function submitContactFormToHubSpot(
  submission: ContactSubmission
): Promise<void> {
  if (!HUBSPOT_CONTACT_FORM_ID) {
    throw new Error(
      "HUBSPOT_CONTACT_FORM_ID is not configured. Create a native HubSpot contact form and set its GUID in environment variables."
    );
  }

  const { firstname, lastname } = splitName(submission.name);
  const fields: Array<{ name: string; value: string }> = [
    { name: "email", value: submission.email },
    { name: "firstname", value: firstname },
  ];

  if (lastname) {
    fields.push({ name: "lastname", value: lastname });
  }

  fields.push({ name: HUBSPOT_FIELD_MESSAGE, value: submission.message });

  if (submission.subscribeToMailingList) {
    fields.push({ name: "newsletter_subscriber", value: "true" });
  }

  const context: Record<string, string> = {
    pageUri: submission.pageUri ?? `${SITE_URL}/contact`,
    pageName: "Contact | THE ZAHIR",
  };

  if (submission.hubspotUtk) {
    context.hutk = submission.hubspotUtk;
  }

  const response = await fetch(
    `${HUBSPOT_FORMS_API}/${HUBSPOT_PORTAL_ID}/${HUBSPOT_CONTACT_FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, context }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HubSpot form submission failed (${response.status}): ${errorText}`
    );
  }
}
