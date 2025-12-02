# Testing Stripe Donations Without Real Money

## Quick Start: Test Mode Setup

### 1. Get Your Test API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. **Toggle "Test mode"** (switch in the top right corner - it should say "Test mode")
3. Navigate to **Developers > API keys**
4. Copy your **Test secret key** (starts with `sk_test_...`)

### 2. Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
# Use TEST keys (starts with sk_test_)
STRIPE_SECRET_KEY=sk_test_YOUR_TEST_SECRET_KEY_HERE

# For local webhook testing (see step 4 below)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE
```

### 3. Test Card Numbers

When testing checkout, use these **fake card numbers** (no real money is charged):

| Card Number | Result | Use Case |
|------------|--------|----------|
| `4242 4242 4242 4242` | ✅ Success | Test successful payments |
| `4000 0000 0000 0002` | ❌ Decline | Test declined payments |
| `4000 0025 0000 3155` | ✅ Requires 3D Secure | Test authentication flow |

**For all test cards:**
- **Expiry:** Any future date (e.g., `12/34`)
- **CVC:** Any 3 digits (e.g., `123`)
- **ZIP:** Any 5 digits (e.g., `12345`)

### 4. Test the Donation Page

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/donate`

3. Click any membership tier or donation button

4. In the Stripe Checkout form:
   - Use test card: `4242 4242 4242 4242`
   - Expiry: `12/34`
   - CVC: `123`
   - ZIP: `12345`

5. Complete the checkout - **no real money will be charged!**

### 5. Test Webhooks Locally (Optional)

To test webhook events locally:

1. **Install Stripe CLI:**
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe
   
   # Or download from: https://github.com/stripe/stripe-cli/releases
   ```

2. **Login to Stripe CLI:**
   ```bash
   stripe login
   ```

3. **Forward webhooks to your local server:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
   
   This will output a webhook secret (starts with `whsec_`). Update your `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_FROM_CLI
   ```

4. **Trigger test events:**
   ```bash
   # In a new terminal, trigger test events:
   stripe trigger checkout.session.completed
   stripe trigger invoice.payment_succeeded
   ```

5. Check your server console for logged event data.

### 6. View Test Data in Stripe Dashboard

All test transactions appear in your Stripe Dashboard:
- Go to **Payments** to see test payments
- Go to **Customers** to see test customers
- Go to **Subscriptions** to see test subscriptions

**Important:** Make sure you're in **Test mode** (toggle in top right) to see test data.

---

## Testing Different Scenarios

### Test Successful Subscription
1. Use card: `4242 4242 4242 4242`
2. Click any membership tier (e.g., "Friend of the Zahir - $5/mo")
3. Complete checkout
4. Check Stripe Dashboard > Subscriptions to see the active subscription

### Test One-Time Donation
1. Use card: `4242 4242 4242 4242`
2. Click a one-time donation button (e.g., "Donate $25")
3. Complete checkout
4. Check Stripe Dashboard > Payments to see the payment

### Test Custom Donation
1. Enter an amount (e.g., `50`) in the custom donation field
2. Click "Donate"
3. Use card: `4242 4242 4242 4242`
4. Complete checkout

### Test Declined Payment
1. Use card: `4000 0000 0000 0002`
2. Try to complete checkout
3. You should see a decline error (no charge is made)

---

## Switching Between Test and Live Mode

### For Development/Testing:
- Use `sk_test_...` keys
- Toggle Stripe Dashboard to "Test mode"
- Use test card numbers

### For Production:
- Use `sk_live_...` keys
- Toggle Stripe Dashboard to "Live mode"
- Real cards will be charged

**⚠️ Important:** Never use live keys in development or commit them to git!

---

## Common Test Cards Reference

Stripe provides many test cards for different scenarios:

| Card Number | Scenario |
|------------|----------|
| `4242 4242 4242 4242` | Visa - Success |
| `5555 5555 5555 4444` | Mastercard - Success |
| `4000 0000 0000 0002` | Card declined |
| `4000 0025 0000 3155` | Requires 3D Secure authentication |
| `4000 0000 0000 9995` | Insufficient funds |
| `4000 0000 0000 3220` | 3D Secure authentication required |

Full list: https://stripe.com/docs/testing

---

## Troubleshooting

### "Invalid API Key"
- Make sure you're using a **test** key (`sk_test_...`)
- Verify the key is copied correctly (no extra spaces)

### "No such price"
- Make sure your price IDs match exactly
- Verify you're using test mode price IDs (they're the same in test/live mode)

### Webhook not working
- Make sure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- Check that `STRIPE_WEBHOOK_SECRET` in `.env.local` matches the secret from Stripe CLI

### Can't see test data
- Make sure Stripe Dashboard is in **Test mode** (toggle in top right)
- Test mode and Live mode have separate data

---

## Ready to Go Live?

When you're ready to accept real payments:

1. Switch Stripe Dashboard to **Live mode**
2. Get your **Live** API keys (starts with `sk_live_...`)
3. Update environment variables in production (Vercel)
4. Create a webhook endpoint pointing to your production URL
5. Test with a small real transaction first!

---

**Remember:** Test mode is completely free and safe - no real money is ever charged! 💳✨

