/**
 * Donation notification emails via nodemailer SMTP.
 * Env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, ADMIN_EMAILS (comma-separated).
 */

import nodemailer from "nodemailer";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !from) {
    throw new Error("SMTP_HOST and SMTP_FROM are required");
  }

  return nodemailer.createTransport({
    host,
    port: port ? parseInt(port, 10) : 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: user && pass ? { user, pass } : undefined,
  });
}

export type DonationEmailPayload = {
  donorEmail: string;
  donorName: string | null;
  amountFormatted: string;
  amountCents: number;
  currency: string;
  isRecurring: boolean;
  tier: string | null;
  stripeSessionId?: string | null;
  stripeInvoiceId?: string | null;
  stripeCustomerId?: string | null;
  createdAt: string;
  eventId: string;
  last4?: string | null;
  brand?: string | null;
  /** When set, donor email will include "Manage your donation" link (Stripe Customer Portal). */
  manageDonationUrl?: string | null;
};

export async function sendDonorThankYou(payload: DonationEmailPayload): Promise<void> {
  const { donorEmail, donorName, amountFormatted, isRecurring, eventId, manageDonationUrl } = payload;
  const subject = `Thank you for your ${isRecurring ? "monthly support" : "donation"} | The Zahir`;
  const name = donorName || "there";

  const textLines = [
    `Hi ${name},`,
    "",
    isRecurring
      ? "Thank you for becoming a monthly supporter of The Zahir. Your recurring gift helps us create theater and storytelling that brings people into conversation."
      : "Thank you for your donation to The Zahir. Your gift helps us create theater and storytelling that brings people into conversation.",
    "",
    `Amount: $${amountFormatted}`,
    "",
  ];
  if (manageDonationUrl && isRecurring) {
    textLines.push("Manage your donation (update payment method or cancel): " + manageDonationUrl, "");
  }
  textLines.push("If you have any questions, reply to this email or visit our contact page.", "", "— The Zahir");
  const text = textLines.join("\n");

  const manageHtml =
    manageDonationUrl && isRecurring
      ? `<p><a href="${escapeHtml(manageDonationUrl)}">Manage your donation</a> (update payment method or cancel)</p>`
      : "";

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 20px;">
  <p>Hi ${escapeHtml(name)},</p>
  <p>${isRecurring ? "Thank you for becoming a monthly supporter of The Zahir. Your recurring gift helps us create theater and storytelling that brings people into conversation." : "Thank you for your donation to The Zahir. Your gift helps us create theater and storytelling that brings people into conversation."}</p>
  <p><strong>Amount: $${escapeHtml(amountFormatted)}</strong></p>
  ${manageHtml}
  <p>If you have any questions, reply to this email or visit our contact page.</p>
  <p>— The Zahir</p>
</body>
</html>`;

  const transport = getTransport();
  await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: donorEmail,
    subject,
    text,
    html,
    headers: { "X-Event-Id": eventId },
  });
}

export async function sendAdminDonationNotification(
  payload: DonationEmailPayload,
  kind: "one_time" | "subscription_created" | "subscription_renewal"
): Promise<void> {
  if (ADMIN_EMAILS.length === 0) return;

  const redactedEmail = redactEmail(payload.donorEmail);
  const subject = `[Donation] ${kind === "one_time" ? "One-time" : kind === "subscription_created" ? "New monthly" : "Renewal"} $${payload.amountFormatted} — ${redactedEmail} (${payload.eventId.slice(0, 20)}…)`;

  const stripeLinks: string[] = [];
  if (payload.stripeSessionId) {
    stripeLinks.push(`Session ID: ${payload.stripeSessionId}`);
  }
  if (payload.stripeInvoiceId) {
    stripeLinks.push(`Invoice: https://dashboard.stripe.com/invoices/${payload.stripeInvoiceId}`);
  }
  if (payload.stripeCustomerId) {
    stripeLinks.push(`Customer: https://dashboard.stripe.com/customers/${payload.stripeCustomerId}`);
  }

  const text = [
    `Type: ${kind}`,
    `Donor: ${payload.donorName || "—"} <${redactedEmail}>`,
    `Amount: $${payload.amountFormatted} ${payload.currency.toUpperCase()}`,
    `Tier: ${payload.tier ?? "—"}`,
    `Time: ${payload.createdAt}`,
    ...stripeLinks,
    `Event ID: ${payload.eventId}`,
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; max-width: 560px;">
  <p><strong>Type:</strong> ${escapeHtml(kind)}</p>
  <p><strong>Donor:</strong> ${escapeHtml(payload.donorName || "—")} &lt;${escapeHtml(redactedEmail)}&gt;</p>
  <p><strong>Amount:</strong> $${escapeHtml(payload.amountFormatted)} ${escapeHtml(payload.currency.toUpperCase())}</p>
  <p><strong>Tier:</strong> ${escapeHtml(payload.tier ?? "—")}</p>
  <p><strong>Time:</strong> ${escapeHtml(payload.createdAt)}</p>
  ${stripeLinks.length ? `<p>${stripeLinks.map((l) => { const url = l.split(" ").find((p) => p.startsWith("http")); return url ? `<a href="${url}">${escapeHtml(l)}</a>` : escapeHtml(l); }).join("<br>")}</p>` : ""}
  <p><small>Event ID: ${escapeHtml(payload.eventId)}</small></p>
</body>
</html>`;

  const transport = getTransport();
  await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: ADMIN_EMAILS,
    subject,
    text,
    html,
    headers: { "X-Event-Id": payload.eventId },
  });
}

export async function sendAdminFailureNotification(
  eventId: string,
  kind: "subscription_deleted" | "payment_failed",
  details: { customerId?: string; subscriptionId?: string; invoiceId?: string; email?: string }
): Promise<void> {
  if (ADMIN_EMAILS.length === 0) return;

  const subject = `[Stripe] ${kind} — ${eventId.slice(0, 24)}…`;
  const text = [
    `Event: ${kind}`,
    `Event ID: ${eventId}`,
    details.customerId && `Customer: https://dashboard.stripe.com/customers/${details.customerId}`,
    details.subscriptionId && `Subscription: https://dashboard.stripe.com/subscriptions/${details.subscriptionId}`,
    details.invoiceId && `Invoice: https://dashboard.stripe.com/invoices/${details.invoiceId}`,
    details.email && `Donor email: ${redactEmail(details.email)}`,
  ]
    .filter(Boolean)
    .join("\n");

  const transport = getTransport();
  await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: ADMIN_EMAILS,
    subject,
    text,
    headers: { "X-Event-Id": eventId },
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function redactEmail(email: string): string {
  const at = email.indexOf("@");
  if (at <= 0) return "***";
  const local = email.slice(0, at);
  const domain = email.slice(at);
  if (local.length <= 2) return local[0] + "***" + domain;
  return local.slice(0, 2) + "***" + domain;
}
