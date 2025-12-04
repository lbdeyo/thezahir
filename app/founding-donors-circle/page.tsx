"use client";

import Navigation from "../components/Navigation";
import { useEffect, Suspense } from "react";
import { startCheckout } from "../lib/startCheckout";
import { useSearchParams } from "next/navigation";

// Custom Donation Price ID (Live Mode) - same as used on donate page
const CUSTOM_DONATION_PRICE_ID = "price_1Sa06yDPFz6EvGtXw9IY9cob";

const FOUNDING_DONOR_TIERS = [
  {
    amount: "$250",
    amountValue: 250,
    label: "Give $250",
    tier: "Founding Donor (Entry Level)",
  },
  {
    amount: "$500",
    amountValue: 500,
    label: "Give $500",
    tier: "Founding Donor",
  },
  {
    amount: "$1,000",
    amountValue: 1000,
    label: "Give $1,000",
    tier: "Founding Donor",
  },
  {
    amount: "$2,500",
    amountValue: 2500,
    label: "Give $2,500",
    tier: "Leadership Founding Donor",
  },
];

function FoundingDonorsCircleContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show success or cancel message based on URL params
    if (searchParams.get("success") === "true") {
      alert(
        "Thank you for joining the Founding Donors Circle! Your payment was successful."
      );
    } else if (searchParams.get("canceled") === "true") {
      alert(
        "Your donation was canceled. Please try again if you'd like to join the Founding Donors Circle."
      );
    }
  }, [searchParams]);

  const handleDonation = (amount: number) => {
    const baseUrl = window.location.origin;
    startCheckout(
      CUSTOM_DONATION_PRICE_ID,
      {
        customAmount: amount.toString(),
      },
      `${baseUrl}/founding-donors-circle?success=true`,
      `${baseUrl}/founding-donors-circle?canceled=true`
    );
  };

  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      {/* Vertical border lines - extend full height of page including footer */}
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
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Founding Donors Circle
            </h1>
            <p className="text-2xl text-black mb-6 font-bold font-['Baskerville'] mt-4">
              Help launch a new home for bold, intelligent storytelling
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Join the Founding Donors Circle by making a gift of $250 or more.
              Your support at this early stage plays a direct role in building
              The Zahir&apos;s future.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-6 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Join the Circle
            </h2>

            {/* Donation Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {FOUNDING_DONOR_TIERS.map((tier) => (
                <button
                  key={tier.amountValue}
                  onClick={() => handleDonation(tier.amountValue)}
                  className="bg-black text-[#ada173] border-2 border-[#ada173] px-8 py-6 rounded font-semibold hover:bg-white hover:text-black transition-colors font-['Baskerville'] text-left"
                >
                  <div className="text-xl font-bold mb-1">{tier.label}</div>
                  <div className="text-base font-bold">— {tier.tier}</div>
                </button>
              ))}
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Why Your Gift Matters
            </h2>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir is a new Austin-based nonprofit dedicated to bold,
              conversation-driven storytelling. As we develop our next slate of
              plays—including Oversight and a remount of Apprehension—Founding
              Donors help us:
            </p>
            <ul className="text-2xl text-black mb-6 font-medium font-['Baskerville'] list-disc list-inside space-y-2">
              <li>Fund readings, workshops, and rehearsals</li>
              <li>Pay artists fairly</li>
              <li>Build the infrastructure of a lasting arts organization</li>
            </ul>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Your support now has outsize impact. You&apos;re helping establish
              an institution at its very beginning.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Founding Donor Benefits
            </h2>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              All Founding Donors receive:
            </p>
            <ul className="text-2xl text-black mb-6 font-medium font-['Baskerville'] list-disc list-inside space-y-2">
              <li>Recognition on our website</li>
              <li>Early access to tickets</li>
              <li>Behind-the-scenes updates</li>
              <li>Program acknowledgment for major productions</li>
            </ul>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Higher giving simply deepens your impact.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Be Part of the Beginning
            </h2>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir is built on the belief that stories matter—stories that
              challenge certainty, spark conversation, and bring people
              together.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              By joining the Founding Donors Circle, you&apos;re helping create
              a new home for this work in Austin.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Thank you for helping us build The Zahir.
            </p>
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
              Founding Donors Circle
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function FoundingDonorsCircle() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <FoundingDonorsCircleContent />
    </Suspense>
  );
}
