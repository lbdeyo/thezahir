# How to Get to Stripe Dashboard Webhooks

## Direct Links

1. **Stripe Dashboard:** https://dashboard.stripe.com
   - Log in with your Stripe account
   - Look for "Developers" in the left sidebar

2. **Direct link to Webhooks (after login):** 
   - https://dashboard.stripe.com/webhooks
   - Make sure you're in **Live mode** (toggle at top right)

## What You Should See

When you're on the correct Stripe Dashboard, the left sidebar should have:

- Payments
- Customers  
- Products
- Subscriptions
- **Developers** ← Click here!
- Settings
- etc.

After clicking "Developers", you'll see:
- API keys
- **Webhooks** ← Click here!
- Events
- Logs
- etc.

## Quick Test

If you see a sidebar with:
- ❌ "Home", "Balances", "Transactions" → This is NOT Stripe Dashboard
- ❌ "Deployments", "Settings", "Team" → This is Vercel, not Stripe
- ✅ "Payments", "Customers", "Developers" → This IS Stripe Dashboard!

## Alternative: Check Vercel Logs Instead

If you're having trouble finding the Stripe webhooks, you can check Vercel logs instead:

1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Go to Deployments → Latest deployment
4. Click Functions tab
5. Click `/api/webhooks/stripe`
6. View the error logs there!

Both will show you the errors, but Vercel logs are actually easier to read!

