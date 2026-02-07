# Stripe One-Time vs Recurring: Root Cause & Fix

## A) Repo audit summary

### Stripe usage
- **`app/api/checkout/route.ts`** – Only place that creates charges: `stripe.checkout.sessions.create()`. No `paymentIntents.create`, `invoices.create`, or `subscriptions.create` in the repo.
- **`app/api/webhooks/stripe/route.ts`** – Handles `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.deleted`, `invoice.payment_failed`. It only logs; it does not create any charges or subscriptions.

### Scheduling
- **No Vercel Cron** – No `vercel.json` cron, no `/api/cron/*` or `/api/scheduled/*` routes.
- **No other jobs** – No GitHub Actions or server scripts in the repo that create Stripe charges.

### Donate page behavior
- Donate page uses **HubSpot payment links** (`paymentLink`) for both membership tiers and one-time donations when present; **`startCheckout(priceId)`** is used only when `paymentLink` is missing (e.g. custom donation amount).
- So our Checkout API is used for: custom donation (and any flow that doesn’t use the HubSpot link).

---

## B) Root cause of repeat charges (in-repo vs external)

**In this repo we did not find any code that:**
- Creates a PaymentIntent off-session,
- Schedules or retries billing,
- Reuses a saved payment method to charge again.

So either:

1. **External system** – Repeat charges are coming from outside this app (e.g. Stripe Payment Links or Billing set up in the Dashboard, or another service like HubSpot) that may save cards and charge again. Those would not show as “Subscriptions” or “Invoices” in the way you expect if they use PaymentIntents directly.
2. **Misuse of our API** – A recurring price ID could have been sent to `/api/checkout` while the UI suggested “one-time”. Our previous logic used `mode: "payment"` for any price not in `SUBSCRIPTION_PRICE_IDS`; if Stripe accepted a recurring price in that context in some edge case, that could lead to confusion. We now **reject** recurring prices for the one-time flow.

**Guards added so one-time can never be charged again by this app:**
- One-time flow is **allowlisted** (one-time price IDs + custom donation only) and **validated** (unknown prices are fetched from Stripe; if recurring, we return 400).
- One-time sessions use **`mode: "payment"`** only; we never set **`setup_future_usage`** for payment mode, so we do not save the card for off-session reuse.
- Webhook **strict branching**: `session.mode === "payment"` is treated as one-time and we **do not** create any subscription, invoice item, or follow-up PaymentIntent.

---

## C) Patch summary

### 1. `app/api/checkout/route.ts`
- **One-time allowlist** – `ONE_TIME_PRICE_IDS` (fixed $25/$50/$100) and `CUSTOM_DONATION_PRICE_ID`. Only these (or custom amount via `price_data`) are allowed for `mode: "payment"`.
- **Subscription allowlist** – Only `SUBSCRIPTION_PRICE_IDS` get `mode: "subscription"`.
- **Recurring-price guard** – For any other price ID in the one-time path, we `stripe.prices.retrieve(priceId)` and **reject with 400** if `price.recurring` is set.
- **No future usage for one-time** – One-time sessions use `payment_intent_data.metadata` only; we do **not** set `setup_future_usage` (so the card is not saved for off-session reuse).
- **Metadata on every session** – `donation_type: "one_time" | "monthly"`, `source: "website"`, `environment: "prod" | "dev"`, plus any client `metadata`.
- **Logging** – Every checkout session creation is logged with `donation_type`, `session_id`, `price_id`, `path`, `environment`.

### 2. `app/api/webhooks/stripe/route.ts`
- **Strict branching** – `checkout.session.completed`:
  - **`mode === "payment"`** → Treated as one-time; log and optionally record; **do not** create subscription, invoice item, or any follow-up PaymentIntent.
  - **`mode === "subscription"`** → Treated as recurring; log and optionally store subscription id.
- **Idempotency** – Processed event IDs are kept in an in-memory `Set` so the same event is not processed twice in one instance. For production across many invocations, persist processed event IDs (e.g. Vercel KV or DB) and skip duplicates.
- **Diagnostics** – Logs include `eventId`, `sessionId`, `mode`, `donation_type` (from metadata), `amount_total`, `customer_id`, `payment_intent`, `subscription`.

---

## D) How to prove one-time vs subscription in the future

- **Checkout Session / PaymentIntent metadata** (in Stripe Dashboard):  
  `donation_type` = `one_time` or `monthly`, plus `source`, `environment`.
- **Server logs**:  
  `[Stripe charge creation]` and `STRIPE_WEBHOOK: checkout.session.completed` include `donation_type`, session id, and request path.

---

## E) Test plan

1. **One-time donation cannot be charged again**
   - Complete a one-time donation (fixed amount or custom) via `/api/checkout` (e.g. custom amount on donate page).
   - In Stripe Dashboard: confirm the Checkout Session has `mode: payment` and metadata `donation_type: one_time`. Confirm no Subscription is created and no Invoice for that payment.
   - Confirm there is no second charge for that customer unless they start a new checkout (e.g. subscription).

2. **Monthly subscription creates subscription and invoices**
   - Start checkout with a price ID in `SUBSCRIPTION_PRICE_IDS`.
   - Complete payment. In Stripe: confirm Session `mode: subscription`, a Subscription exists, and an Invoice is created. Metadata should show `donation_type: monthly`.
   - Confirm subsequent invoices appear under the subscription (e.g. next month), not as separate one-time PaymentIntents.

3. **Webhook retries do not duplicate side effects**
   - Send the same `checkout.session.completed` event (same `event.id`) to the webhook twice (e.g. replay from Stripe Dashboard).
   - Second request should be treated as duplicate (log “Duplicate event ignored (idempotency)”) and return 200 without creating any subscription or charge.

4. **Cron/job cannot charge unless subscription exists**
   - There is no cron or scheduled job in this repo that creates charges. If you add one later, it must only create a charge when a **subscription** record exists in your system (e.g. from `checkout.session.completed` with `mode === "subscription"`); it must never charge one-time donors again.

5. **Recurring price rejected for one-time path**
   - Call `POST /api/checkout` with a `priceId` that is a **recurring** price (e.g. one of `SUBSCRIPTION_PRICE_IDS` but sent without going through the subscription branch—e.g. by temporarily changing client to send that ID for “one-time”).  
   - Alternatively, use a recurring price ID that is not in `SUBSCRIPTION_PRICE_IDS`.  
   - API should respond **400** with message like “This price is for subscriptions. Use a one-time donation option.”
