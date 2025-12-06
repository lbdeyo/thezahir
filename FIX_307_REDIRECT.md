# Fix 307 Redirect Error - Webhook Failing

## The Problem

Your webhook is failing with **HTTP 307** redirect error. Here's what's happening:

1. Stripe sends webhook to: `https://the-zahir.org/api/webhooks/stripe` (no www)
2. Your domain redirects to: `https://www.the-zahir.org/api/webhooks/stripe` (with www)
3. Stripe doesn't follow redirects → treats it as failure ❌

## The Solution

Update your Stripe webhook endpoint URL to use the version that **doesn't redirect** (usually the `www` version).

### Step 1: Check Which Version Works

Test which URL works directly (doesn't redirect):

1. Open a new browser tab
2. Try: `https://the-zahir.org/api/webhooks/stripe`
   - If it redirects, note where it redirects to
3. Try: `https://www.the-zahir.org/api/webhooks/stripe`
   - If this doesn't redirect, use this one!

### Step 2: Update Stripe Webhook URL

1. In Stripe Dashboard, you're already on the webhook endpoint page
2. Look for an **"Edit destination"** button (top right of the page)
3. Click it
4. Update the **Endpoint URL** to: `https://www.the-zahir.org/api/webhooks/stripe`
   - Use whichever version doesn't redirect (usually the www version)
5. Click **Save**

### Step 3: Test

After updating:
1. The old failed events won't change (they're history)
2. Wait for a new webhook event, OR
3. Make a small test donation to trigger a new webhook
4. Check if new events show **200 OK** instead of **307 ERR**

## Alternative: Configure Domain to Not Redirect

If you want to keep using `https://the-zahir.org/api/webhooks/stripe` (without www):

1. Configure your Vercel domain settings to not redirect for API routes
2. Or set up both versions of the domain to work

But the easiest fix is just updating Stripe to use the www version!

