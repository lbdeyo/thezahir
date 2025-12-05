"use client";

import Navigation from "../components/Navigation";
import { useState, useEffect, Suspense } from "react";
import { startCheckout } from "../lib/startCheckout";
import { useSearchParams } from "next/navigation";

// Monthly Membership Tiers (Live Mode Price IDs)
const MEMBERSHIP_TIERS = [
  {
    name: "Friend of the Zahir",
    price: "$5",
    priceId: "price_1SZzqwDPFz6EvGtX59K3i39M",
    description: "Support our mission with a monthly contribution",
  },
  {
    name: "Supporter of The Zahir",
    price: "$10",
    priceId: "price_1SZztVDPFz6EvGtXpRo59YuH",
    description: "Help us create meaningful theater and storytelling",
  },
  {
    name: "Patron of The Zahir",
    price: "$25",
    priceId: "price_1SZzuiDPFz6EvGtXYESbd263",
    description: "Sustain our artistic endeavors with your generous support",
  },
  {
    name: "Champion of The Zahir",
    price: "$50",
    priceId: "price_1SZzvNDPFz6EvGtXP9Oj7yiW",
    description: "Make a significant impact on our creative projects",
  },
  {
    name: "Producer Circle",
    price: "$100",
    priceId: "price_1SZzvpDPFz6EvGtXtxEB39Fo",
    description: "Join our exclusive circle of major supporters",
  },
];

// Fixed One-Time Donations (Live Mode Price IDs)
const ONE_TIME_DONATIONS = [
  {
    amount: "$25",
    priceId: "price_1Sa00IDPFz6EvGtXu5s0eTXy",
  },
  {
    amount: "$50",
    priceId: "price_1Sa00vDPFz6EvGtX4rfNTebc",
  },
  {
    amount: "$100",
    priceId: "price_1Sa01HDPFz6EvGtXJdOXyDsY",
  },
];

// Custom Donation Price ID (Live Mode)
const CUSTOM_DONATION_PRICE_ID = "price_1Sa06yDPFz6EvGtXw9IY9cob";

function DonateContent() {
  const searchParams = useSearchParams();
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Show success or cancel message based on URL params
    if (searchParams.get("success") === "true") {
      alert("Thank you for your donation! Your payment was successful.");
    } else if (searchParams.get("canceled") === "true") {
      alert("Your donation was canceled. Please try again if you'd like to support us.");
    }
  }, [searchParams]);

  const handleCustomDonation = async () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount < 5) {
      alert("Please enter a minimum donation of $5");
      return;
    }

    setIsProcessing(true);
    try {
      await startCheckout(CUSTOM_DONATION_PRICE_ID, {
        customAmount: amount.toString(),
      });
    } catch (error) {
      console.error("Error starting custom donation:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      {/* Vertical border lines */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{ zIndex: 100 }}
      >
        <div className="max-w-5xl mx-auto h-full relative">
          <div
            className="absolute top-0 left-4 sm:left-8"
            style={{
              width: "1px",
              height: "100vh",
              backgroundColor: "#ada173",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          ></div>
          <div
            className="absolute top-0 right-4 sm:right-8"
            style={{
              width: "1px",
              height: "100vh",
              backgroundColor: "#ada173",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 pb-12 relative">
          <div
            className="px-4 sm:px-12 pt-4 pb-6 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Support The Zahir
            </h1>
            <p className="text-2xl sm:text-3xl text-black mb-6 sm:mb-8 font-medium font-['Baskerville']">
              Help us create meaningful theater and storytelling
            </p>
            <p className="text-xl sm:text-2xl text-black font-medium font-['Baskerville'] leading-relaxed">
              The Zahir Productions, Inc. is a Texas not-for-profit corporation. 
              Our application for 501(c)(3) tax-exempt status is pending with the 
              Internal Revenue Service. If our application is approved, all donations 
              made during the pendency period will be retroactively tax-deductible to 
              the full extent permitted by law.
            </p>
          </div>

          {/* Monthly Membership Tiers */}
          <div
            className="px-4 sm:px-12 py-6"
            style={{ background: "rgba(0,0,0,0.9)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#ada173] mb-6 font-['Baskerville']">
              Monthly Membership Tiers
            </h2>
            <p className="text-xl text-[#ada173] mb-8 font-medium font-['Baskerville']">
              Join our community of supporters with a recurring monthly donation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {MEMBERSHIP_TIERS.map((tier) => (
                <div
                  key={tier.priceId}
                  className="bg-black/90 border border-[#ada173]/40 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-[#ada173] mb-2 font-['Baskerville']">
                    {tier.name}
                  </h3>
                  <p className="text-3xl font-bold text-[#ada173] mb-3 font-['Baskerville']">
                    {tier.price}
                    <span className="text-lg font-normal">/month</span>
                  </p>
                  <p className="text-base text-[#ada173]/80 mb-4 font-['Baskerville']">
                    {tier.description}
                  </p>
                  <button
                    onClick={() => startCheckout(tier.priceId)}
                    className="w-full bg-[#ada173] text-black px-6 py-3 rounded font-semibold hover:bg-[#ada173]/80 transition-colors font-['Baskerville']"
                  >
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed One-Time Donations */}
          <div
            className="px-4 sm:px-12 py-6"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6 font-['Baskerville']">
              One-Time Donations
            </h2>
            <p className="text-xl text-black mb-8 font-medium font-['Baskerville']">
              Make a one-time contribution to support our work
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {ONE_TIME_DONATIONS.map((donation) => (
                <button
                  key={donation.priceId}
                  onClick={() => startCheckout(donation.priceId)}
                  className="bg-black text-[#ada173] border-2 border-[#ada173] px-8 py-4 rounded font-semibold hover:bg-white hover:text-black transition-colors font-['Baskerville']"
                >
                  Donate {donation.amount}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Donation */}
          <div
            className="px-4 sm:px-12 py-6"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#ada173] mb-6 font-['Baskerville']">
              Custom Donation Amount
            </h2>
            <p className="text-xl text-[#ada173] mb-6 font-medium font-['Baskerville']">
              Enter any amount you&apos;d like to donate (minimum $5)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="flex-1">
                <label htmlFor="customAmount" className="sr-only">
                  Custom donation amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ada173] font-semibold">
                    $
                  </span>
                  <input
                    id="customAmount"
                    type="number"
                    min="5"
                    step="0.01"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full bg-black border-2 border-[#ada173] text-[#ada173] px-8 py-4 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-[#ada173] font-['Baskerville']"
                  />
                </div>
              </div>
              <button
                onClick={handleCustomDonation}
                disabled={isProcessing || !customAmount}
                className="bg-[#ada173] text-black px-8 py-4 rounded font-semibold hover:bg-[#ada173]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-['Baskerville']"
              >
                {isProcessing ? "Processing..." : "Donate"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <Navigation />
        <main className="w-full px-4 sm:px-8 pt-0 pb-12 relative">
          <div
            className="px-4 sm:px-12 pt-4 pb-6 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Support The Zahir
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DonateContent />
    </Suspense>
  );
}

