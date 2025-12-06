# Webhook Troubleshooting Guide

If you're getting webhook failures from Stripe, follow these steps to diagnose and fix the issue.

## Quick Verification Checklist

### 1. Verify Environment Variables in Vercel

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Confirm you see these two variables listed:
   - `STRIPE_SECRET_KEY` 
   - `STRIPE_WEBHOOK_SECRET`
3. Make sure both are enabled for **Production** environment (check the checkboxes)
4. **Note:** Vercel hides the actual values for security - this is normal!

### 2. Verify Webhook Secret Matches

The webhook secret in Vercel must match the one in Stripe:

1. Go to **Stripe Dashboard** → **Developers** → **Webhooks** (in **Live mode**)
2. Click on your webhook endpoint for `https://the-zahir.org/api/webhooks/stripe`
3. Click **"Reveal"** next to the **"Signing secret"** (starts with `whsec_`)
4. Copy the entire secret
5. Go back to **Vercel Dashboard** → **Settings** → **Environment Variables**
6. If `STRIPE_WEBHOOK_SECRET` exists, click the three dots (⋯) → **Edit**
   - Paste the signing secret from Stripe
   - Ensure **Production** is checked
   - Click **Save**
7. If `STRIPE_WEBHOOK_SECRET` doesn't exist, click **Add New** and create it

### 3. Verify Webhook Endpoint URL

1. Go to **Stripe Dashboard** → **Developers** → **Webhooks** (in **Live mode**)
2. Click on your webhook endpoint
3. Verify the URL is: `https://the-zahir.org/api/webhooks/stripe`
   - **Important:** Make sure it's using your custom domain (`the-zahir.org`), not a Vercel preview URL
4. If the URL is wrong, click **"Update endpoint"** and fix it

### 4. Verify Required Events Are Selected

1. In **Stripe Dashboard** → **Webhooks** → Your endpoint
2. Scroll to **"Events to send"**
3. Ensure these events are selected:
   - ✅ `checkout.session.completed`
   - ✅ `invoice.payment_succeeded`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.payment_failed`

### 5. Check Vercel Function Logs

After deploying, check for errors:

1. Go to **Vercel Dashboard** → Your Project → **Deployments**
2. Click on your latest deployment
3. Go to the **Functions** tab
4. Click on `/api/webhooks/stripe`
5. Check the logs for any errors

Look for errors like:
- ❌ "STRIPE_SECRET_KEY environment variable is not set"
- ❌ "STRIPE_WEBHOOK_SECRET environment variable is not set"
- ❌ "Webhook signature verification failed"

### 6. Test the Webhook After Deployment

1. **Redeploy your app:**
   - Push these webhook fixes to trigger a new deployment, OR
   - Go to Vercel Dashboard → Deployments → Click "⋯" on latest → **Redeploy**

2. **Wait for deployment to complete** (2-3 minutes)

3. **Check Stripe webhook deliveries:**
   - Go to **Stripe Dashboard** → **Webhooks** → Your endpoint
   - Click **"Recent deliveries"** tab
   - Look at the most recent events
   - They should show **200 OK** responses with `{"received": true}`

4. **Trigger a test event** (optional):
   - You can make a small test donation on your live site
   - Or wait for Stripe to retry failed events automatically

## Common Issues & Solutions

### Issue: "Server configuration error" in logs

**Cause:** Environment variables are missing or not set for Production environment.

**Solution:**
1. Go to Vercel → Settings → Environment Variables
2. Verify `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` exist
3. Make sure both have the **Production** checkbox checked
4. If missing, add them:
   - Get `STRIPE_SECRET_KEY` from Stripe Dashboard → Developers → API keys (Live mode)
   - Get `STRIPE_WEBHOOK_SECRET` from Stripe Dashboard → Webhooks → Your endpoint → Signing secret
5. **Redeploy** after adding/updating variables

### Issue: "Webhook signature verification failed"

**Cause:** The webhook secret in Vercel doesn't match the one in Stripe.

**Solution:**
1. Go to Stripe Dashboard → Webhooks → Your endpoint
2. Copy the **Signing secret** (reveal it if hidden)
3. Go to Vercel → Settings → Environment Variables
4. Update `STRIPE_WEBHOOK_SECRET` with the exact secret from Stripe
5. **Redeploy** after updating

### Issue: Webhook endpoint URL mismatch

**Cause:** Stripe is trying to send to the wrong URL.

**Solution:**
1. Go to Stripe Dashboard → Webhooks → Your endpoint
2. Click **"Update endpoint"**
3. Set URL to: `https://the-zahir.org/api/webhooks/stripe`
4. Make sure it's your custom domain, not a Vercel preview URL
5. Save changes

### Issue: Still getting failures after fixes

**Next steps:**
1. Check Vercel function logs for specific error messages
2. Verify you're checking webhooks in **Live mode** (not Test mode) in Stripe Dashboard
3. Make sure you redeployed after making changes
4. Wait a few minutes for Stripe to retry failed events

## After Fixing

Once webhooks start working:
- ✅ Events in Stripe Dashboard will show **200 OK** status
- ✅ You'll see console logs in Vercel function logs for each event
- ✅ Stripe will stop sending failure emails

The webhook route now includes better error logging, so check Vercel logs if issues persist.

