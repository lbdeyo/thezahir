"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { startCheckout } from "../lib/startCheckout";

const MEMBERSHIP_TIERS = [
  {
    name: "Friend of the Zahir",
    price: "$5",
    priceId: "price_1SZzqwDPFz6EvGtX59K3i39M",
    description: "Support our mission with a monthly contribution",
    paymentLink: "https://share-na2.hsforms.com/1vu1HM6rRRj2KijLox0ojCQ41ngya",
  },
  {
    name: "Supporter of The Zahir",
    price: "$10",
    priceId: "price_1SZztVDPFz6EvGtXpRo59YuH",
    description: "Help us create meaningful theater and storytelling",
    paymentLink: "https://share-na2.hsforms.com/1bzHh2MZ8QM6QJMKqKzbAZQ41ngya",
  },
  {
    name: "Patron of The Zahir",
    price: "$25",
    priceId: "price_1SZzuiDPFz6EvGtXYESbd263",
    description: "Sustain our artistic endeavors with your generous support",
    paymentLink: "https://share-na2.hsforms.com/1V88b1LFXQ4e6HlYSgsp_kA41ngya",
  },
  {
    name: "Champion of The Zahir",
    price: "$50",
    priceId: "price_1SZzvNDPFz6EvGtXP9Oj7yiW",
    description: "Make a significant impact on our creative projects",
    paymentLink: "https://share-na2.hsforms.com/13Hb7dLFETouzVG1mdxOGVQ41ngya",
  },
  {
    name: "Producer Circle",
    price: "$100",
    priceId: "price_1SZzvpDPFz6EvGtXtxEB39Fo",
    description: "Join our exclusive circle of major supporters",
    paymentLink: "https://share-na2.hsforms.com/1QX8kkO8JR4WWEPaPnpTisw41ngya",
  },
];

const ONE_TIME_DONATIONS = [
  {
    amount: "$25",
    priceId: "price_1Sa00IDPFz6EvGtXu5s0eTXy",
    paymentLink: "https://share-na2.hsforms.com/1tXiU9w7wRDaS9XYWqI_A8Q41ngya",
  },
  {
    amount: "$50",
    priceId: "price_1Sa00vDPFz6EvGtX4rfNTebc",
    paymentLink: "https://share-na2.hsforms.com/1mAcbUptcSE-7hbbTEreLNw41ngya",
  },
  {
    amount: "$100",
    priceId: "price_1Sa01HDPFz6EvGtXJdOXyDsY",
    paymentLink: "https://share-na2.hsforms.com/18-d73wuwSDeTRmr3HKiv6A41ngya",
  },
];

const CUSTOM_DONATION_PRICE_ID = "price_1Sa06yDPFz6EvGtXw9IY9cob";

const FOUNDING_DONOR_TIERS = [
  {
    amount: "$250",
    amountValue: 250,
    label: "Give $250",
    tier: "Founding Donor (Entry Level)",
    paymentLink: "https://share-na2.hsforms.com/1CpJYp-IMSbmwstGz-Z3JWg41ngya",
  },
  {
    amount: "$500",
    amountValue: 500,
    label: "Give $500",
    tier: "Founding Donor",
    paymentLink: "https://share-na2.hsforms.com/19Dck0buoTOu-RHiHkXYLSA41ngya",
  },
  {
    amount: "$1,000",
    amountValue: 1000,
    label: "Give $1,000",
    tier: "Founding Donor",
    paymentLink: "https://share-na2.hsforms.com/1CuU3_M3WTS6LOp3ZufMEsg41ngya",
  },
  {
    amount: "$2,500",
    amountValue: 2500,
    label: "Give $2,500",
    tier: "Leadership Founding Donor",
    paymentLink: "https://share-na2.hsforms.com/1BmSo2WuZSBOqajIHqTo70Q41ngya",
  },
];

function beginCheckout(
  priceId: string,
  returnPath: string,
  metadata?: Record<string, string>,
) {
  const baseUrl = window.location.origin;
  return startCheckout(
    priceId,
    metadata,
    `${baseUrl}${returnPath}?success=true`,
    `${baseUrl}${returnPath}?canceled=true`,
  );
}

export function DonationStatusAlert() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      alert("Thank you for your donation! Your payment was successful.");
    } else if (searchParams.get("canceled") === "true") {
      alert(
        "Your donation was canceled. Please try again if you'd like to support us.",
      );
    }
  }, [searchParams]);

  return null;
}

export function MonthlyMemberships({
  returnPath = "/donate",
}: {
  returnPath?: string;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
        Monthly Membership Tiers
      </h2>
      <p className="text-lg text-neutral-300 mb-8 max-w-3xl">
        Join our community of supporters with a recurring monthly donation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEMBERSHIP_TIERS.map((tier) => (
          <div
            key={tier.priceId}
            className="rounded-lg border border-white/10 bg-black p-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
            <p className="text-3xl font-bold text-white mb-3">
              {tier.price}
              <span className="text-lg font-normal text-neutral-300">
                /month
              </span>
            </p>
            <p className="text-neutral-300 mb-5">{tier.description}</p>
            <button
              onClick={() => {
                if (tier.paymentLink) {
                  window.location.href = tier.paymentLink;
                } else {
                  beginCheckout(tier.priceId, returnPath);
                }
              }}
              className="w-full bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OneTimeDonations({
  returnPath = "/donate",
}: {
  returnPath?: string;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
        One-Time Donations
      </h2>
      <p className="text-lg text-neutral-300 mb-8 max-w-3xl">
        Make a one-time contribution to support our work
      </p>

      <div className="flex flex-wrap gap-4">
        {ONE_TIME_DONATIONS.map((donation) => (
          <button
            key={donation.priceId}
            onClick={() => {
              if (donation.paymentLink) {
                window.location.href = donation.paymentLink;
              } else {
                beginCheckout(donation.priceId, returnPath);
              }
            }}
            className="bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
          >
            Donate {donation.amount}
          </button>
        ))}
      </div>
    </section>
  );
}

export function CustomDonation({
  returnPath = "/donate",
}: {
  returnPath?: string;
}) {
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCustomDonation = async () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount < 5) {
      alert("Please enter a minimum donation of $5");
      return;
    }

    setIsProcessing(true);
    try {
      await beginCheckout(CUSTOM_DONATION_PRICE_ID, returnPath, {
        customAmount: amount.toString(),
      });
    } catch (error) {
      console.error("Error starting custom donation:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
        Custom Donation Amount
      </h2>
      <p className="text-lg text-neutral-300 mb-6 max-w-3xl">
        Enter any amount you&apos;d like to donate (minimum $5)
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md">
        <div className="flex-1">
          <label htmlFor="customAmount" className="sr-only">
            Custom donation amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-semibold">
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
              className="w-full pl-8 pr-4 py-3 bg-transparent border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e6ad06] focus:ring-1 focus:ring-[#e6ad06]"
            />
          </div>
        </div>
        <button
          onClick={handleCustomDonation}
          disabled={isProcessing || !customAmount}
          className="bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? "Processing..." : "Donate"}
        </button>
      </div>
    </section>
  );
}

export function FoundingDonorOptions({
  returnPath = "/donate",
}: {
  returnPath?: string;
}) {
  const [foundingCustomAmount, setFoundingCustomAmount] = useState("");
  const [isFoundingProcessing, setIsFoundingProcessing] = useState(false);

  const handleFoundingCustomDonation = async () => {
    const amount = parseFloat(foundingCustomAmount);
    if (isNaN(amount) || amount < 250) {
      alert(
        "Please enter a minimum donation of $250 to join the Founding Donors Circle",
      );
      return;
    }

    setIsFoundingProcessing(true);
    try {
      await beginCheckout(CUSTOM_DONATION_PRICE_ID, returnPath, {
        customAmount: amount.toString(),
      });
    } catch (error) {
      console.error("Error starting custom donation:", error);
    } finally {
      setIsFoundingProcessing(false);
    }
  };

  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
        Founding Donors Circle
      </h2>
      <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mb-8">
        <p className="font-semibold text-white">
          Help launch a new home for bold, intelligent storytelling
        </p>
        <p>
          Join the Founding Donors Circle by making a gift of $250 or more.
          Your support at this early stage plays a direct role in building The
          Zahir&apos;s future.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">Join the Circle</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {FOUNDING_DONOR_TIERS.map((tier) => (
          <button
            key={tier.amountValue}
            onClick={() => {
              if (tier.paymentLink) {
                window.location.href = tier.paymentLink;
              } else {
                beginCheckout(CUSTOM_DONATION_PRICE_ID, returnPath, {
                  customAmount: tier.amountValue.toString(),
                });
              }
            }}
            className="rounded-lg border border-[#e6ad06]/60 bg-black p-6 text-left hover:bg-white/5 transition-colors"
          >
            <div className="text-xl font-bold text-white mb-1">{tier.label}</div>
            <div className="text-neutral-300"> {tier.tier}</div>
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-6 mb-12">
        <h3 className="text-2xl font-bold text-white mb-4">
          Custom Donation Amount
        </h3>
        <p className="text-lg text-neutral-300 mb-6">
          Enter any amount you&apos;d like to donate (minimum $250 for Founding
          Donor&apos;s Circle)
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
          <div className="flex-1">
            <label htmlFor="foundingCustomAmount" className="sr-only">
              Custom donation amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-semibold">
                $
              </span>
              <input
                id="foundingCustomAmount"
                type="number"
                min="250"
                step="0.01"
                value={foundingCustomAmount}
                onChange={(e) => setFoundingCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 bg-transparent border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e6ad06] focus:ring-1 focus:ring-[#e6ad06]"
              />
            </div>
          </div>
          <button
            onClick={handleFoundingCustomDonation}
            disabled={isFoundingProcessing || !foundingCustomAmount}
            className="bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFoundingProcessing ? "Processing..." : "Donate"}
          </button>
        </div>
      </div>
    </>
  );
}
