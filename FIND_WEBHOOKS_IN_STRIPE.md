# How to Find Webhooks in Stripe Dashboard

You're on the Stripe Dashboard! Here's how to get to Webhooks:

## Option 1: Scroll Down in Left Sidebar

1. Look at the **left sidebar** (the dark gray column)
2. **Scroll down** past "More"
3. You should see a section called **"Developers"**
4. Click on **"Developers"**
5. Then click on **"Webhooks"**

## Option 2: Use Direct Link

1. Click in your browser's address bar
2. Replace the current URL with: `https://dashboard.stripe.com/webhooks`
3. Press Enter
4. This will take you directly to the Webhooks page!

## Option 3: Check Under "More"

1. Click on **"More"** in the left sidebar (it has a dropdown arrow)
2. Look for **"Developers"** in the expanded menu
3. Click it, then click **"Webhooks"**

## What You'll See

Once you get to Webhooks:
1. You'll see your webhook endpoint: `https://the-zahir.org/api/webhooks/stripe`
2. Click on it to open the details
3. Click the **"Event deliveries"** tab to see the failed attempts

---

## Even Easier: Check Vercel Logs Instead!

If the Stripe navigation is confusing, just check Vercel logs:

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Go to: Deployments → Latest deployment → Functions tab
4. Click: `/api/webhooks/stripe`
5. View the error logs!

Both will show you the errors, but Vercel logs are clearer and easier to read!

