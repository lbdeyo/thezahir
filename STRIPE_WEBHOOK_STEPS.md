# Step-by-Step: How to Check Webhook Errors

## Website: Stripe Dashboard

Go to: **https://dashboard.stripe.com**

## Step-by-Step Instructions

### Step 1: Go to Stripe Dashboard
1. Open your web browser
2. Go to: **https://dashboard.stripe.com**
3. Log in if needed

### Step 2: Switch to Live Mode
1. Look at the top right of the Stripe Dashboard
2. Make sure the toggle says **"Live mode"** (not "Test mode")
3. If it says "Test mode", click it to switch to Live mode

### Step 3: Navigate to Webhooks
1. In the left sidebar, click **"Developers"**
2. Then click **"Webhooks"** (under Developers in the sidebar)

### Step 4: View Your Webhook Endpoint
1. You should see a list/table with your webhook endpoint
2. Look for the endpoint that shows: `https://the-zahir.org/api/webhooks/stripe`
3. **Click on that URL or click on the row** to open the endpoint details

### Step 5: View Event Deliveries
1. After clicking, you'll see a page with tabs at the top
2. Click on the **"Event deliveries"** tab
3. You'll see a list of all webhook attempts (all 49 failed ones)
4. Click on any failed event to see the error details

---

## Alternative: Check Vercel Logs Instead

This is actually easier! You can check Vercel logs to see the errors:

1. Go to: **https://vercel.com/dashboard**
2. Click on your project
3. Click **"Deployments"** tab
4. Click on your **latest deployment**
5. Click the **"Functions"** tab
6. Click on **`/api/webhooks/stripe`**
7. You'll see all the error logs there!

---

## Quick Summary

- **Stripe Dashboard:** https://dashboard.stripe.com
  - Developers → Webhooks → Click your endpoint → Event deliveries tab

- **Vercel Dashboard:** https://vercel.com/dashboard  
  - Your project → Deployments → Latest deployment → Functions → `/api/webhooks/stripe`

Both will show you the errors, but Vercel logs are usually clearer and easier to read!

