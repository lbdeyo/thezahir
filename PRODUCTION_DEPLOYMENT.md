# Production Deployment Guide

This guide walks you through deploying the Stripe donation system to production.

## Prerequisites

✅ You've successfully tested everything in test mode locally  
✅ Your code is committed to git  
✅ You have a Vercel account (or your hosting platform)

---

## Step 1: Create Products in Stripe Live Mode

The products you created in test mode don't automatically exist in live mode. You need to create them again.

### Option A: Use the Script (Recommended)

1. **Switch to Live Mode in Stripe Dashboard:**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com)
   - Toggle to **"Live mode"** (top right)

2. **Update your `.env.local` temporarily:**
   - Get your **Live** secret key from Stripe Dashboard > Developers > API keys
   - Update `STRIPE_SECRET_KEY` in `.env.local` to your live key (starts with `sk_live_...`)

3. **Run the creation script:**
   ```bash
   node scripts/create-stripe-products.js
   ```

4. **Update your code with the new live price IDs:**
   - The script will create a `stripe-price-mapping.json` file
   - Update `app/donate/page.tsx` and `app/api/checkout/route.ts` with the new live price IDs
   - **OR** keep separate price IDs for test/live and use environment variables (more advanced)

5. **Switch back to test key in `.env.local`** (for local development)

### Option B: Create Manually in Stripe Dashboard

1. Go to [Stripe Dashboard > Products](https://dashboard.stripe.com/products) (in **Live mode**)
2. Create each product manually with the same names and prices
3. Copy the price IDs and update your code

---

## Step 2: Get Your Live API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Make sure you're in **"Live mode"** (toggle in top right)
3. Navigate to **Developers > API keys**
4. Copy your **Live Secret key** (starts with `sk_live_...`)
   - ⚠️ **Keep this secure!** Never commit it to git.

---

## Step 3: Set Up Production Webhook

1. **Get your production URL:**
   - If using Vercel: `https://your-domain.vercel.app`
   - If using custom domain: `https://yourdomain.com`

2. **Create webhook endpoint in Stripe:**
   - Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks) (in **Live mode**)
   - Click **"Add endpoint"**
   - Enter URL: `https://your-domain.vercel.app/api/webhooks/stripe`
   - Select events to listen to:
     - `checkout.session.completed`
     - `invoice.payment_succeeded`
     - `customer.subscription.deleted`
     - `invoice.payment_failed`
   - Click **"Add endpoint"**
   - **Copy the "Signing secret"** (starts with `whsec_`) - you'll need this for Vercel

---

## Step 4: Deploy to Vercel

### 4.1 Push Code to Git

```bash
git add .
git commit -m "Add Stripe donation system - ready for production"
git push
```

### 4.2 Deploy to Vercel

If your project isn't already connected to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..." > Project**
3. Import your Git repository
4. Configure project settings (Next.js should be auto-detected)
5. Click **"Deploy"**

### 4.3 Add Environment Variables

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings > Environment Variables**
3. Add the following variables:

   ```
   STRIPE_SECRET_KEY = sk_live_YOUR_LIVE_SECRET_KEY
   STRIPE_WEBHOOK_SECRET = whsec_YOUR_WEBHOOK_SECRET
   ```

4. **Important:** 
   - Select **"Production"** environment (and optionally "Preview" and "Development" if you want)
   - Click **"Save"**

### 4.4 Redeploy

After adding environment variables:

1. Go to **Deployments** tab
2. Find your latest deployment
3. Click the **"..."** menu (three dots)
4. Click **"Redeploy"**

Or push a new commit to trigger automatic deployment.

---

## Step 5: Verify Deployment

1. **Check your live site:**
   - Visit `https://your-domain.vercel.app/donate`
   - Verify the page loads correctly

2. **Test a small live transaction:**
   - ⚠️ **Use a real card with a small amount** (e.g., $5)
   - Complete a test donation
   - Verify you're redirected back correctly
   - Check Stripe Dashboard > Payments to see the transaction

3. **Test webhook:**
   - Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
   - Click on your webhook endpoint
   - Go to **"Recent deliveries"** tab
   - You should see events from your test transaction
   - Click on an event to verify it returned `200 OK`

---

## Step 6: Update Success/Cancel URLs (Optional)

If you want custom success/cancel pages instead of the donate page:

1. Update `app/lib/startCheckout.ts`:
   ```typescript
   successUrl: `${baseUrl}/donate/success`,
   cancelUrl: `${baseUrl}/donate/cancel`,
   ```

2. Create success and cancel pages if needed

---

## Important Notes

### Security

- ✅ Never commit `.env.local` to git (already in `.gitignore`)
- ✅ Never commit live API keys
- ✅ Use different keys for test and production
- ✅ Rotate keys if compromised

### Testing

- Always test thoroughly in **test mode** before going live
- Start with a small real transaction to verify everything works
- Monitor Stripe Dashboard for any issues

### Price IDs

- **Test mode** and **Live mode** have different price IDs
- You'll need to maintain separate price IDs or use environment variables
- The script creates products in whichever mode your API key is set to

---

## Troubleshooting

### Issue: "No such price" in production

**Solution:** Make sure you created the products in **Live mode** and updated the price IDs in your code.

### Issue: Webhook not receiving events

**Solution:**
- Verify webhook URL is correct in Stripe Dashboard
- Check that `STRIPE_WEBHOOK_SECRET` is set correctly in Vercel
- Check Vercel function logs for errors
- Test webhook endpoint manually if needed

### Issue: Environment variables not working

**Solution:**
- Make sure you selected the correct environment (Production) when adding variables
- Redeploy after adding environment variables
- Check Vercel logs to verify variables are loaded

---

## Next Steps After Deployment

1. **Monitor transactions** in Stripe Dashboard
2. **Set up email notifications** (optional - via Stripe or your own system)
3. **Add analytics** to track donation metrics
4. **Consider adding a thank you page** for completed donations
5. **Set up subscription management** for users to cancel/modify subscriptions

---

**You're all set!** 🎉

Your Stripe donation system is now live and ready to accept real donations and memberships.

