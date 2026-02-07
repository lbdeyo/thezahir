# Stripe Webhook + Donation Emails (SMTP) – Setup

## Overview

- **Webhook:** `POST /api/stripe/webhook` – receives Stripe events, verifies signature, sends admin + donor emails via nodemailer SMTP.
- **Portal:** `POST /api/stripe/portal` – creates a Stripe Customer Portal session (for “Manage your donation” links).
- **Checkout:** Checkout sessions set `donation_type`, `tier`, `source` in metadata for emails.

No database: idempotency is in-memory per instance; event id is included in email headers/subject so recipients can dedupe if Stripe retries hit different instances.

---

## Env vars

### Stripe (existing)

- `STRIPE_SECRET_KEY` – Stripe secret key (live or test).
- `STRIPE_WEBHOOK_SECRET` – Signing secret for the webhook endpoint (from Stripe Dashboard).

### SMTP (nodemailer)

- `SMTP_HOST` – e.g. `smtp.example.com`
- `SMTP_PORT` – e.g. `587` (optional; default 587)
- `SMTP_USER` – SMTP auth user (optional if no auth)
- `SMTP_PASS` – SMTP auth password (optional)
- `SMTP_FROM` – From address for all emails, e.g. `donations@the-zahir.org`
- `SMTP_SECURE` – Set to `true` for port 465 (optional)

### Notifications

- `ADMIN_EMAILS` – Comma-separated list of addresses that receive admin notifications (new donation, renewal, failure, cancellation).
- `SITE_URL` – Full site URL for portal return link (e.g. `https://www.the-zahir.org`). Optional; falls back to `VERCEL_URL` or a default.

---

## Stripe Dashboard – Webhook

1. **Developers → Webhooks → Add endpoint**
2. **Endpoint URL:** `https://your-domain.com/api/stripe/webhook`
3. **Events to send:**
   - `checkout.session.completed`
   - `invoice.paid`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. **Add endpoint** → copy the **Signing secret** (starts with `whsec_`).
5. In Vercel (or your host), set `STRIPE_WEBHOOK_SECRET` to that value.

---

## Vercel

- Add all env vars above in Project → Settings → Environment Variables.
- Redeploy after changing secrets.

---

## Local testing (Stripe CLI)

1. Install: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks to your app:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   Copy the **webhook signing secret** printed (e.g. `whsec_...`) and set it as `STRIPE_WEBHOOK_SECRET` in `.env.local`.
4. Trigger test events:
   ```bash
   stripe trigger checkout.session.completed
   stripe trigger invoice.paid
   stripe trigger customer.subscription.deleted
   stripe trigger invoice.payment_failed
   ```
5. Run the app: `npm run dev` and ensure SMTP and ADMIN_EMAILS are set in `.env.local`.

---

## Idempotency (no DB)

- Processed event ids are kept in an in-memory `Set` per serverless instance, so the same event is not processed twice in the same instance.
- Stripe retries can hit different instances, so the same event might be processed more than once across the fleet. Each email includes the Stripe event id in the subject (admin) or in the `X-Event-Id` header so recipients can dedupe if needed.

---

## “Manage your donation” link

- For **subscription** donor emails, the webhook creates a Stripe Customer Portal session and inserts the URL into the thank-you email.
- You can also build a “Manage donation” button on the frontend that calls `POST /api/stripe/portal` with body `{ customerId: "cus_xxx", returnUrl?: "https://..." }` and redirects the user to the returned `url`.
