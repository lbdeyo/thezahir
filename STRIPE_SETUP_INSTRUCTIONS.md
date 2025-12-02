# Stripe Donation + Membership System Setup Instructions

This document provides step-by-step instructions for setting up and deploying the Stripe donation and membership system for The Zahir.

## Table of Contents
1. [Environment Variables](#environment-variables)
2. [Local Development Setup](#local-development-setup)
3. [Stripe Dashboard Configuration](#stripe-dashboard-configuration)
4. [Testing Webhooks Locally](#testing-webhooks-locally)
5. [Deploying to Vercel](#deploying-to-vercel)
6. [Verifying Webhook Route](#verifying-webhook-route)
7. [Troubleshooting](#troubleshooting)

---

## Environment Variables

### Required Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Stripe Secret Key (from Stripe Dashboard > Developers > API keys)
STRIPE_SECRET_KEY=sk_live_...  # Use sk_test_... for testing

# Stripe Webhook Secret (from Stripe Dashboard > Developers > Webhooks)
# You'll get this after creating the webhook endpoint
STRIPE_WEBHOOK_SECRET=whsec_...

# Optional: Publishable Key (not required for server-side operations)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

### Getting Your Stripe Keys

1. **Secret Key:**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com)
   - Navigate to **Developers > API keys**
   - Copy your **Secret key** (starts with `sk_live_` for production or `sk_test_` for testing)

2. **Webhook Secret:**
   - This will be provided after you create a webhook endpoint (see [Stripe Dashboard Configuration](#stripe-dashboard-configuration))

---

## Local Development Setup

### 1. Install Dependencies

The Stripe package has already been installed. If you need to reinstall:

```bash
npm install stripe
```

### 2. Set Up Environment Variables

1. Create `.env.local` in the project root
2. Add your Stripe keys (see [Environment Variables](#environment-variables))
3. **Important:** Never commit `.env.local` to git (it's already in `.gitignore`)

### 3. Start Development Server

```bash
npm run dev
```

### 4. Test the Donation Page

1. Navigate to `http://localhost:3000/donate`
2. Try clicking on different membership tiers and donation buttons
3. Use Stripe test mode cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Any future expiry date and any CVC

---

## Stripe Dashboard Configuration

### 1. Create Webhook Endpoint

**For Production (Vercel):**

1. Go to [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **"Add endpoint"**
3. Enter your production webhook URL:
   ```
   https://your-domain.vercel.app/api/webhooks/stripe
   ```
4. Select events to listen to:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
5. Click **"Add endpoint"**
6. **Copy the "Signing secret"** (starts with `whsec_`) - this is your `STRIPE_WEBHOOK_SECRET`

**For Local Testing:**

You'll use Stripe CLI (see [Testing Webhooks Locally](#testing-webhooks-locally)) instead of creating a webhook in the dashboard.

### 2. Verify Price IDs

Ensure all price IDs in your Stripe account match the ones in the code:

**Monthly Membership Tiers:**
- Friend - $5/mo: `price_1SZzvIDPFz6EvGtXKVXKcEAv`
- Supporter - $10/mo: `price_1SZzvqDPFz6EvGtXUOcmWYxF`
- Patron - $25/mo: `price_1SZzwyDPFz6EvGtXv5CBvN42`
- Champion - $50/mo: `price_1SZzxDDPFz6EvGtXAqfq9pYX`
- Producer Circle - $100/mo: `price_1SZzvpDPFz6EvGtXtxEB39Fo`

**One-Time Donations:**
- $25: `price_1Sa00IDPFz6EvGtXu5s0eTXy`
- $50: `price_1Sa00vDPFz6EvGtX4rfNTebc`
- $100: `price_1Sa01HDPFz6EvGtXJdOXyDsY`

**Custom Donation:**
- Custom: `price_1Sa06yDPFz6EvGtXw9IY9cob`

To verify:
1. Go to [Stripe Dashboard > Products](https://dashboard.stripe.com/products)
2. Check that each price ID matches

---

## Testing Webhooks Locally

### 1. Install Stripe CLI

**macOS (Homebrew):**
```bash
brew install stripe/stripe-cli/stripe
```

**Windows (Scoop):**
```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe
```

**Linux:**
```bash
# Download from https://github.com/stripe/stripe-cli/releases
```

### 2. Login to Stripe CLI

```bash
stripe login
```

This will open your browser to authenticate.

### 3. Forward Webhooks to Local Server

In a separate terminal, run:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will:
- Display a webhook signing secret (starts with `whsec_`)
- Forward all Stripe events to your local server
- Use this signing secret as your `STRIPE_WEBHOOK_SECRET` in `.env.local`

### 4. Trigger Test Events

In another terminal, trigger test events:

```bash
# Test checkout completion
stripe trigger checkout.session.completed

# Test subscription payment
stripe trigger invoice.payment_succeeded

# Test subscription cancellation
stripe trigger customer.subscription.deleted

# Test payment failure
stripe trigger invoice.payment_failed
```

Check your server console for the logged event data.

---

## Deploying to Vercel

### 1. Push Code to Git

```bash
git add .
git commit -m "Add Stripe donation and membership system"
git push
```

### 2. Deploy to Vercel

If not already connected:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your repository
3. Configure project settings

### 3. Add Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings > Environment Variables**
3. Add the following variables:

   ```
   STRIPE_SECRET_KEY = sk_live_... (your production secret key)
   STRIPE_WEBHOOK_SECRET = whsec_... (from webhook endpoint)
   ```

4. **Important:** Make sure to select the correct environment (Production, Preview, Development)
5. Click **"Save"**

### 4. Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**

Or trigger a new deployment by pushing a commit.

### 5. Update Webhook URL

1. Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Edit your webhook endpoint
3. Update the URL to your Vercel domain:
   ```
   https://your-domain.vercel.app/api/webhooks/stripe
   ```
4. Save changes

---

## Verifying Webhook Route

### 1. Check Raw Body Handling

The webhook route uses `request.text()` to get the raw body, which is required for signature verification. This is correctly implemented in `/app/api/webhooks/stripe/route.ts`.

### 2. Test Webhook Endpoint

**Using Stripe CLI (Local):**
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger checkout.session.completed
```

**Using Stripe Dashboard (Production):**
1. Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click on your webhook endpoint
3. Go to **"Recent deliveries"** tab
4. Click on a recent event
5. Check the response - should be `200 OK` with `{"received": true}`

### 3. Verify Event Handling

Check your server logs (or Vercel function logs) to ensure events are being logged:

```javascript
// Expected console.log output:
// "Checkout session completed: { sessionId: '...', ... }"
// "Invoice payment succeeded: { invoiceId: '...', ... }"
// etc.
```

---

## Troubleshooting

### Issue: "Missing stripe-signature header"

**Solution:** Ensure you're testing through Stripe CLI or have properly configured the webhook endpoint in Stripe Dashboard.

### Issue: "Webhook signature verification failed"

**Solution:** 
- Verify `STRIPE_WEBHOOK_SECRET` matches the signing secret from your webhook endpoint
- For local testing, use the secret from `stripe listen` command
- For production, use the secret from Stripe Dashboard webhook settings

### Issue: Checkout session not redirecting

**Solution:**
- Verify the checkout route returns JSON with `{ url: session.url }`
- Check browser console for errors
- Ensure `startCheckout` function is correctly calling the API

### Issue: Custom donation amount not working

**Solution:**
- Verify `metadata.customAmount` is being passed correctly
- Check that the amount is >= $5
- Ensure the custom donation price ID is correct

### Issue: Webhook events not being received

**Solution:**
- Verify webhook URL is correct in Stripe Dashboard
- Check Vercel function logs for errors
- Ensure `STRIPE_WEBHOOK_SECRET` is set correctly
- Test with Stripe CLI first to verify the route works

### Issue: "API version mismatch"

**Solution:** The code uses Stripe API version `2023-10-16`. If you see version errors, ensure your Stripe SDK is up to date:

```bash
npm update stripe
```

---

## Next Steps

After setup is complete, you may want to:

1. **Add Database Integration:** Store customer data, subscription status, and donation history
2. **Email Notifications:** Send confirmation emails when donations are received
3. **User Dashboard:** Allow users to manage their subscriptions
4. **Analytics:** Track donation metrics and membership growth
5. **Error Handling:** Add more robust error handling and user feedback

---

## Support

For Stripe-specific issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)

For Next.js App Router issues:
- [Next.js Documentation](https://nextjs.org/docs)

---

## Security Notes

⚠️ **Important Security Reminders:**

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use different keys for test and production** - Never use production keys in development
3. **Rotate keys if compromised** - Immediately regenerate keys in Stripe Dashboard
4. **Verify webhook signatures** - Always verify webhook signatures (already implemented)
5. **Use HTTPS in production** - Vercel provides this automatically

---

## File Structure

```
/app
  /api
    /checkout
      route.ts          # Checkout session creation
    /webhooks
      /stripe
        route.ts        # Webhook handler
  /donate
    page.tsx            # Donation page component
  /lib
    startCheckout.ts    # Helper function for checkout
```

---

**Setup Complete!** 🎉

Your Stripe donation and membership system is now ready. Test thoroughly in test mode before switching to live mode.

