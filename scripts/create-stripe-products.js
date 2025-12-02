/**
 * Script to create all required Stripe products and prices in test mode
 * Run with: node scripts/create-stripe-products.js
 * 
 * Make sure your .env.local has STRIPE_SECRET_KEY set to your test key
 */

const fs = require('fs');
const path = require('path');
const Stripe = require('stripe');

// Read .env.local file
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) {
    throw new Error('.env.local file not found');
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      env[match[1].trim()] = match[2].trim();
    }
  });
  
  return env;
}

const env = loadEnv();

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Monthly Membership Tiers
const membershipTiers = [
  {
    name: 'Friend of the Zahir',
    description: 'Support our mission with a monthly contribution',
    price: 500, // $5.00 in cents
    priceId: 'price_1SZzvIDPFz6EvGtXKVXKcEAv',
  },
  {
    name: 'Supporter of The Zahir',
    description: 'Help us create meaningful theater and storytelling',
    price: 1000, // $10.00 in cents
    priceId: 'price_1SZzvqDPFz6EvGtXUOcmWYxF',
  },
  {
    name: 'Patron of The Zahir',
    description: 'Sustain our artistic endeavors with your generous support',
    price: 2500, // $25.00 in cents
    priceId: 'price_1SZzwyDPFz6EvGtXv5CBvN42',
  },
  {
    name: 'Champion of The Zahir',
    description: 'Make a significant impact on our creative projects',
    price: 5000, // $50.00 in cents
    priceId: 'price_1SZzxDDPFz6EvGtXAqfq9pYX',
  },
  {
    name: 'Producer Circle',
    description: 'Join our exclusive circle of major supporters',
    price: 10000, // $100.00 in cents
    priceId: 'price_1SZzvpDPFz6EvGtXtxEB39Fo',
  },
];

// One-Time Donations
const oneTimeDonations = [
  {
    name: 'One-time Donation - $25',
    description: 'One-time contribution to support our work',
    price: 2500, // $25.00 in cents
    priceId: 'price_1Sa00IDPFz6EvGtXu5s0eTXy',
  },
  {
    name: 'One-time Donation - $50',
    description: 'One-time contribution to support our work',
    price: 5000, // $50.00 in cents
    priceId: 'price_1Sa00vDPFz6EvGtX4rfNTebc',
  },
  {
    name: 'One-time Donation - $100',
    description: 'One-time contribution to support our work',
    price: 10000, // $100.00 in cents
    priceId: 'price_1Sa01HDPFz6EvGtXJdOXyDsY',
  },
];

// Custom Donation (this one is special - it's used for custom amounts)
const customDonation = {
  name: 'Custom One-time Donation',
  description: 'Custom amount donation',
  price: 500, // Minimum $5.00 in cents (this is just a placeholder)
  priceId: 'price_1Sa06yDPFz6EvGtXw9IY9cob',
};

const createdPrices = [];

async function createProductAndPrice(tier, isRecurring = false) {
  try {
    // Check if price already exists
    try {
      const existingPrice = await stripe.prices.retrieve(tier.priceId);
      console.log(`✓ Price ${tier.priceId} already exists: ${tier.name}`);
      createdPrices.push({
        name: tier.name,
        expectedId: tier.priceId,
        actualId: tier.priceId,
        match: true,
      });
      return existingPrice;
    } catch (error) {
      // Price doesn't exist, create it
    }

    // Create product
    const product = await stripe.products.create({
      name: tier.name,
      description: tier.description,
    });

    console.log(`✓ Created product: ${tier.name} (${product.id})`);

    // Create price (Stripe auto-generates the ID)
    const priceParams = {
      product: product.id,
      unit_amount: tier.price,
      currency: 'usd',
    };

    if (isRecurring) {
      priceParams.recurring = {
        interval: 'month',
      };
    }

    const price = await stripe.prices.create(priceParams);
    
    const matches = price.id === tier.priceId;
    console.log(`✓ Created price: ${tier.name}`);
    console.log(`  Expected ID: ${tier.priceId}`);
    console.log(`  Actual ID:   ${price.id}`);
    console.log(`  ${matches ? '✓ IDs match!' : '⚠️  IDs do NOT match - code needs update'}`);
    
    createdPrices.push({
      name: tier.name,
      expectedId: tier.priceId,
      actualId: price.id,
      match: matches,
    });

    return price;
  } catch (error) {
    console.error(`✗ Error creating ${tier.name}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Creating Stripe products and prices in TEST mode...\n');
  console.log('Make sure STRIPE_SECRET_KEY in .env.local is your TEST key!\n');

  if (!env.STRIPE_SECRET_KEY) {
    console.error('❌ Error: STRIPE_SECRET_KEY not found in .env.local');
    process.exit(1);
  }

  if (!env.STRIPE_SECRET_KEY.startsWith('sk_test_')) {
    console.warn('⚠️  Warning: Your key starts with', env.STRIPE_SECRET_KEY.substring(0, 8));
    console.warn('   Make sure you\'re using a TEST key (sk_test_...) not a LIVE key!\n');
  }

  try {
    // Create membership tiers (recurring)
    console.log('Creating Monthly Membership Tiers...\n');
    for (const tier of membershipTiers) {
      await createProductAndPrice(tier, true);
    }

    console.log('\nCreating One-Time Donations...\n');
    for (const donation of oneTimeDonations) {
      await createProductAndPrice(donation, false);
    }

    console.log('\nCreating Custom Donation...\n');
    await createProductAndPrice(customDonation, false);

    console.log('\n✅ Done!\n');
    
    // Save price mapping to file
    const mappingPath = path.join(__dirname, '..', 'stripe-price-mapping.json');
    fs.writeFileSync(mappingPath, JSON.stringify(createdPrices, null, 2));
    console.log(`📝 Price mapping saved to: ${mappingPath}\n`);
    
    // Show summary
    const mismatches = createdPrices.filter(p => !p.match);
    if (mismatches.length > 0) {
      console.log('⚠️  WARNING: Some price IDs don\'t match!\n');
      console.log('The following prices were created with different IDs:');
      mismatches.forEach(p => {
        console.log(`  - ${p.name}`);
        console.log(`    Expected: ${p.expectedId}`);
        console.log(`    Actual:   ${p.actualId}\n`);
      });
      console.log('You\'ll need to update the price IDs in your code.');
      console.log('Files to update:');
      console.log('  - app/donate/page.tsx');
      console.log('  - app/api/checkout/route.ts\n');
    } else {
      console.log('✅ All price IDs match! You\'re good to go.\n');
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();

