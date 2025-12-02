/**
 * Script to check what price IDs exist in your live Stripe account
 * Make sure your .env.local has STRIPE_SECRET_KEY set to your LIVE key
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

async function checkPrices() {
  console.log('Checking prices in your Stripe account...\n');
  
  if (!env.STRIPE_SECRET_KEY) {
    console.error('❌ Error: STRIPE_SECRET_KEY not found in .env.local');
    process.exit(1);
  }

  const keyType = env.STRIPE_SECRET_KEY.startsWith('sk_live_') ? 'LIVE' : 
                  env.STRIPE_SECRET_KEY.startsWith('sk_test_') ? 'TEST' : 'UNKNOWN';
  
  console.log(`Mode: ${keyType}`);
  console.log(`Key starts with: ${env.STRIPE_SECRET_KEY.substring(0, 8)}...\n`);

  if (keyType !== 'LIVE') {
    console.warn('⚠️  Warning: You should use a LIVE key to check live mode prices!\n');
  }

  try {
    // Get all products
    const products = await stripe.products.list({ limit: 100 });
    
    console.log(`Found ${products.data.length} products:\n`);
    
    const priceInfo = [];
    
    for (const product of products.data) {
      // Get prices for this product
      const prices = await stripe.prices.list({
        product: product.id,
        limit: 100,
      });
      
      for (const price of prices.data) {
        const isRecurring = price.recurring ? `${price.recurring.interval}ly` : 'one-time';
        const amount = (price.unit_amount / 100).toFixed(2);
        
        priceInfo.push({
          productName: product.name,
          priceId: price.id,
          amount: `$${amount}`,
          type: isRecurring,
          currency: price.currency,
        });
        
        console.log(`Product: ${product.name}`);
        console.log(`  Price ID: ${price.id}`);
        console.log(`  Amount: $${amount} ${isRecurring}`);
        console.log(`  Currency: ${price.currency}`);
        console.log('');
      }
    }
    
    // Save to file
    const outputPath = path.join(__dirname, '..', 'live-prices-check.json');
    fs.writeFileSync(outputPath, JSON.stringify(priceInfo, null, 2));
    console.log(`\n✅ Price information saved to: ${outputPath}\n`);
    
    // Check against code
    console.log('Price IDs currently in your code:');
    console.log('  Friend: price_1Sa0jBDPFz6EvGtXjd7UpJ11');
    console.log('  Supporter: price_1Sa0jCDPFz6EvGtXhUG1IQTh');
    console.log('  Patron: price_1Sa0jCDPFz6EvGtXtRKkxrBk');
    console.log('  Champion: price_1Sa0jDDPFz6EvGtXJIegtQf2');
    console.log('  Producer Circle: price_1Sa0jEDPFz6EvGtXS5dqh2M6');
    console.log('\nCompare these with the Price IDs listed above.\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkPrices();

