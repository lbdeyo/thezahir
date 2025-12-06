# Quick Webhook Fix - 100% Error Rate

Your webhook endpoint is showing 100% error rate. Here's how to fix it:

## Step 1: Check Error Details in Stripe

1. In Stripe Dashboard, click on your webhook endpoint: `https://the-zahir.org/api/webhooks/stripe`
2. Click the **"Recent deliveries"** tab
3. Click on one of the failed events
4. Look at the **"Response"** section - what error message do you see?

Common errors you might see:
- ❌ "Webhook signature verification failed" → Webhook secret mismatch
- ❌ "Server configuration error" → Missing environment variables
- ❌ "500 Internal Server Error" → Code error (check Vercel logs)
- ❌ Connection timeout → Endpoint not accessible

## Step 2: Most Likely Fix - Verify Webhook Secret

**This is the #1 cause of webhook failures:**

1. Go to **Stripe Dashboard** → **Developers** → **Webhooks** (Live mode)
2. Click on your endpoint: `https://the-zahir.org/api/webhooks/stripe`
3. Click **"Reveal"** next to **"Signing secret"** (starts with `whsec_`)
4. Copy the entire secret (including the `whsec_` prefix)
5. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
6. Find `STRIPE_WEBHOOK_SECRET` and click the three dots (⋯) → **Edit**
7. **Delete the old value completely** and paste the exact secret from Stripe
8. Make sure **Production** is checked
9. Click **Save**

## Step 3: Redeploy After Updating Secret

After updating the webhook secret, you MUST redeploy:

1. Go to **Vercel Dashboard** → Your Project → **Deployments**
2. Find your latest deployment
3. Click the **"..."** menu (three dots)
4. Click **"Redeploy"**
5. Wait 2-3 minutes for deployment to complete

## Step 4: Check Vercel Function Logs

If errors persist after updating the secret:

1. Go to **Vercel Dashboard** → Your Project → **Deployments**
2. Click on your latest deployment
3. Go to the **Functions** tab
4. Click on `/api/webhooks/stripe`
5. Check the logs for errors

Look for:
- "STRIPE_SECRET_KEY environment variable is not set"
- "STRIPE_WEBHOOK_SECRET environment variable is not set"
- "Webhook signature verification failed"
- Any other error messages

## Step 5: Test After Fix

After redeploying:

1. Wait for deployment to complete (2-3 minutes)
2. Go back to **Stripe Dashboard** → **Webhooks** → Your endpoint
3. Click **"Recent deliveries"** tab
4. New events should show **200 OK** status
5. The error rate should drop from 100% to 0%

## Quick Checklist

- [ ] Webhook secret in Vercel matches Stripe (most important!)
- [ ] Environment variables set for Production environment
- [ ] Redeployed after updating webhook secret
- [ ] Checked Vercel function logs for specific errors
- [ ] Webhook endpoint URL is `https://the-zahir.org/api/webhooks/stripe`

## If Still Failing

1. **Check the exact error in Stripe:**
   - Webhooks → Your endpoint → Recent deliveries → Click a failed event
   - Copy the exact error message from the Response section

2. **Check Vercel logs:**
   - Deployments → Latest → Functions → `/api/webhooks/stripe`
   - Look for error messages

3. **Verify deployment completed:**
   - Make sure the latest deployment shows "Ready" status
   - Check that it was deployed after you made the webhook secret update

The improved error handling in the webhook route will give you clear error messages - use those to diagnose the specific issue.

