const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "244639378";
const HUBSPOT_CONTACT_FORM_ID = process.env.HUBSPOT_CONTACT_FORM_ID;
const HUBSPOT_FIELD_MESSAGE =
  process.env.HUBSPOT_FIELD_MESSAGE ?? "message";
const HUBSPOT_FIELD_MAILING_LIST = process.env.HUBSPOT_FIELD_MAILING_LIST;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.the-zahir.org";

const HUBSPOT_FORMS_API =
  "https://api.hsforms.com/submissions/v3/integration/submit";

type HubSpotField = { name: string; value: string };

type SubmissionContext = {
  hubspotUtk?: string;
  pageUri?: string;
  pageName?: string;
};

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

function buildSubmissionContext(
  context: SubmissionContext = {}
): Record<string, string> {
  const submissionContext: Record<string, string> = {
    pageUri: context.pageUri ?? `${SITE_URL}/contact`,
    pageName: context.pageName ?? "Contact | THE ZAHIR",
  };

  if (context.hubspotUtk) {
    submissionContext.hutk = context.hubspotUtk;
  }

  return submissionContext;
}

async function submitToHubSpotForm(
  fields: HubSpotField[],
  context: SubmissionContext = {}
): Promise<void> {
  if (!HUBSPOT_CONTACT_FORM_ID) {
    throw new Error(
      "HUBSPOT_CONTACT_FORM_ID is not configured. Create a native HubSpot contact form and set its GUID in environment variables."
    );
  }

  const response = await fetch(
    `${HUBSPOT_FORMS_API}/${HUBSPOT_PORTAL_ID}/${HUBSPOT_CONTACT_FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: buildSubmissionContext(context),
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HubSpot form submission failed (${response.status}): ${errorText}`
    );
  }
}

function appendMailingListField(
  fields: HubSpotField[],
  subscribeToMailingList: boolean
): void {
  if (subscribeToMailingList && HUBSPOT_FIELD_MAILING_LIST) {
    fields.push({ name: HUBSPOT_FIELD_MAILING_LIST, value: "true" });
  }
}

export async function submitContactFormToHubSpot(
  submission: ContactSubmission
): Promise<void> {
  const { firstname, lastname } = splitName(submission.name);
  const fields: HubSpotField[] = [
    { name: "email", value: submission.email },
    { name: "firstname", value: firstname },
  ];

  if (lastname) {
    fields.push({ name: "lastname", value: lastname });
  }

  fields.push({ name: HUBSPOT_FIELD_MESSAGE, value: submission.message });
  appendMailingListField(fields, submission.subscribeToMailingList);

  await submitToHubSpotForm(fields, {
    hubspotUtk: submission.hubspotUtk,
    pageUri: submission.pageUri,
    pageName: "Contact | THE ZAHIR",
  });
}

export async function submitFooterMailingListToHubSpot(
  email: string,
  pageUri?: string
): Promise<void> {
  const fields: HubSpotField[] = [
    { name: "email", value: email },
    { name: "firstname", value: "Mailing list" },
    { name: "lastname", value: "Signup" },
    {
      name: HUBSPOT_FIELD_MESSAGE,
      value: "Signed up via website footer.",
    },
  ];

  appendMailingListField(fields, true);

  await submitToHubSpotForm(fields, {
    pageUri: pageUri ?? SITE_URL,
    pageName: "Mailing list signup | THE ZAHIR",
  });
}
