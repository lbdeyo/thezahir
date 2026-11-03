"use client";

import Navigation from "../components/Navigation";
import { Suspense } from "react";
import {
  CustomDonation,
  DonationStatusAlert,
  FoundingDonorOptions,
  MonthlyMemberships,
  OneTimeDonations,
} from "../components/DonationOptions";

const FOUNDING_DONORS = [
  "Aneesa Sheikh",
  "Leonard Hough and Jeanie Ockenden",
  "Christina Howe",
  "Noah and Jen Masterson",
  "Joe and Bev Hanlon",
  "Anonymous",
  "Eric Graham",
  "William Deyo",
  "Debbie Deyo-Howe",
  "Stephanie and Russ Deyo",
  "John and Nancy Masterson",
  "Jason Neulander",
  "Elizabeth and Rick Bowerman",
];

function DonateContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />
      <DonationStatusAlert />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Support The Zahir
          </h1>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>Help us create meaningful theater and storytelling</p>
            <p>
              The Zahir Productions is a 501(c)(3) tax-exempt organization. All
              donations are tax-deductible to the full extent permitted by law.
            </p>
          </div>
        </section>

        <MonthlyMemberships />
        <OneTimeDonations />
        <CustomDonation />

        {/* Founding Donors Circle */}
        <section id="founding-donors-circle">
          <FoundingDonorOptions />

          <h3 className="text-2xl font-bold text-white mb-4">
            Why Your Gift Matters
          </h3>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mb-10">
            <p>
              The Zahir is a new Austin-based nonprofit dedicated to bold,
              conversation-driven storytelling. As we develop our next slate of
              plays, including <i>Oversight</i> and a remount of{" "}
              <i>Apprehension</i>, Founding Donors help us:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Fund readings, workshops, and rehearsals</li>
              <li>Pay artists fairly</li>
              <li>Build the infrastructure of a lasting arts organization</li>
            </ul>
            <p>
              Your support now has outsize impact. You&apos;re helping establish
              an institution at its very beginning.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Founding Donor Benefits
          </h3>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mb-10">
            <p>All Founding Donors receive:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Recognition on our website</li>
              <li>Early access to tickets</li>
              <li>Behind-the-scenes updates</li>
              <li>Program acknowledgment for major productions</li>
            </ul>
            <p>Higher giving simply deepens your impact.</p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Be Part of the Beginning
          </h3>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mb-12">
            <p>
              The Zahir is built on the belief that stories matter: stories that
              challenge certainty, spark conversation, and bring people
              together.
            </p>
            <p>
              By joining the Founding Donors Circle, you&apos;re helping create
              a new home for this work in Austin.
            </p>
            <p>Thank you for helping us build The Zahir.</p>
          </div>

          {/* Founding Donors Section */}
          <div className="rounded-lg border border-white/10 bg-black p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Zahir&apos;s Founding Donors Circle
            </h3>
            <p className="text-lg text-neutral-300 mb-8">
              We offer our eternal thanks to the following supporters who have
              helped launch The Zahir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FOUNDING_DONORS.map((name) => (
                <div
                  key={name}
                  className="flex items-center text-lg text-neutral-300"
                >
                  <svg
                    className="w-5 h-5 mr-3 shrink-0"
                    fill="#e6ad06"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Support The Zahir
        </h1>
      </main>
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
