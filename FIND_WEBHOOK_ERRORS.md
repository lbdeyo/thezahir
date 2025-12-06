# How to Find Webhook Error Details

You have multiple ways to see what's causing the webhook failures:

## Option 1: Check Vercel Function Logs (Easiest)

This shows you exactly what errors your webhook endpoint is returning:

1. Go to **Vercel Dashboard** → https://vercel.com/dashboard
2. Click on your project (the-zahir)
3. Go to **Deployments** tab
4. Click on your **latest deployment** (should show "Ready" status)
5. Click on the **Functions** tab
6. Find and click on `/api/webhooks/stripe`
7. You'll see logs showing:
   - All webhook requests received
   - Any error messages (like "Webhook signature verification failed" or "Server configuration error")
   - Console.log output from the webhook handler

**This will immediately show you what's wrong!**

## Option 2: Check Stripe Webhook Details

To see the error in Stripe Dashboard:

1. Make sure you're in **Live mode** (toggle in top right of Stripe Dashboard)
2. Go to **Developers** → **Webhooks** (in the left sidebar)
3. You should see a list/webhook endpoint table
4. **Click on the endpoint URL** `https://the-zahir.org/api/webhooks/stripe` (click on the URL itself or the row)
5. This will open the endpoint details page
6. You should now see tabs: **Overview**, **Event deliveries**, **Logs**, **Health**
7. Click on **"Event deliveries"** tab
8. You'll see a list of all failed webhook attempts
9. Click on any failed event to see the error response

## Option 3: Quick Check - Verify Webhook Secret

The most common issue is webhook secret mismatch. Do this quickly:

1. In Stripe Dashboard → **Developers** → **Webhooks**
2. Click on your endpoint: `https://the-zahir.org/api/webhooks/stripe`
3. Find the **"Signing secret"** section
4. Click the **eye icon** 👁️ to reveal it
5. Copy the entire secret (starts with `whsec_`)
6. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
7. Find `STRIPE_WEBHOOK_SECRET`
8. Click the three dots (⋯) → **Edit**
9. **Delete the old value** and paste the new one from Stripe
10. Make sure **Production** is checked
11. Click **Save**
12. Go to **Deployments** → Latest → Click "⋯" → **Redeploy**

## What to Look For

When checking logs or error messages, look for:

- ❌ **"Webhook signature verification failed"** → Secret mismatch (most common!)
- ❌ **"Server configuration error"** → Missing environment variables
- ❌ **"Missing stripe-signature header"** → Configuration issue
- ❌ **500 errors** → Code error (check Vercel logs)

## Recommended: Check Vercel Logs First

Vercel logs are usually easier to read and will show you the exact error message from your webhook code. Start there!

