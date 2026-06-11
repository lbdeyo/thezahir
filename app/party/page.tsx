import type { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gala Benefit | THE ZAHIR",
  description:
    "Step into an evening of elegant delights, live music, and conversation at The Zahir's Inaugural Gala Benefit at Hyde Park Theatre in Austin.",
  openGraph: {
    title: "Gala Benefit | THE ZAHIR",
    description:
      "Step into an evening of elegant delights, live music, and conversation at The Zahir's Inaugural Gala Benefit at Hyde Park Theatre in Austin.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gala Benefit | THE ZAHIR",
    description:
      "Step into an evening of elegant delights, live music, and conversation at The Zahir's Inaugural Gala Benefit at Hyde Park Theatre in Austin.",
    images: siteTwitterImages,
  },
};

export default function Party() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          <em>Join us</em> for The Zahir&apos;s Inaugural Gala Benefit
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-300 mb-8">
          Tuesday, January 6, 2026 • Hyde Park Theatre • Austin, TX
        </h2>
        <div className="mb-10">
          <a
            href="https://www.eventbrite.com/e/the-zahirs-inaugural-benefit-gala-tickets-1977771996281?aff=oddtdtcreator&fbclid=IwY2xjawOsYR5leHRuA2FlbQIxMABicmlkETFPWklFSFNKVWlydkJ6T3lTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHklYHM9esJABBZEkqD08nmUmSMfkIkknacNxEaD78VbMutNONCoi4VBt1H6d_aem_fFznBueuXb9eV7M9eGwvZQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
          >
            Get Tickets
          </a>
        </div>
        <p className="max-w-3xl text-lg text-neutral-300 mb-12">
          Step into an evening of elegant delights, where the clink of champagne
          glasses mingles with lively conversation and laughter. Enjoy
          handcrafted refreshments and delectable bites as you mingle with
          friends and creators in the warm, inviting atmosphere of Hyde Park
          Theatre. Attire: dressy, but not necessarily formal.
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          The Program
        </h2>
        <ul className="max-w-3xl text-lg text-neutral-300 space-y-4 mb-10">
          <li className="flex items-center space-x-3">
            <em>7:00 PM</em> - Reception
          </li>
          <li className="flex items-center space-x-3">
            <em>7:30-9:00 PM</em> - Entertainment
          </li>
          <li className="flex items-center space-x-3">
            <Image
              src="/img/company/lauraderamo-headshot.jpg"
              alt="Laura D'Eramo"
              width={75}
              height={75}
              className="w-[75px] h-[75px] aspect-square object-cover rounded-full border border-white/10 shrink-0"
            />
            <span>
              &quot;Antony&apos;s Funeral Oration&quot; by Laura D&apos;Eramo
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Image
              src="/img/company/chad-portrait.jpg"
              alt="Chad Nichols"
              width={75}
              height={75}
              className="w-[75px] h-[75px] aspect-square object-cover rounded-full border border-white/10 shrink-0"
            />
            <span>Live music by Chad Nichols</span>
          </li>
          <li className="flex items-center space-x-3">
            <Image
              src="/img/company/hope-irish.jpg"
              alt="Hope Irish"
              width={75}
              height={75}
              className="w-[75px] h-[75px] aspect-square object-cover rounded-full border border-white/10 shrink-0"
            />
            <span>Live music by Hope Irish</span>
          </li>
          <li className="flex items-center space-x-3">
            <Image
              src="/img/company/RachelWestHeadshot.jpg"
              alt="Rachel West"
              width={75}
              height={75}
              className="w-[75px] h-[75px] aspect-square object-cover rounded-full border border-white/10 shrink-0"
            />
            <span>Live music by Rachel West</span>
          </li>
          <li className="flex items-center space-x-3">
            <Image
              src="/img/company/jessica-cohen-portrait.jpg"
              alt="Jessica Cohen"
              width={75}
              height={75}
              className="w-[75px] h-[75px] aspect-square object-cover rounded-full border border-white/10 shrink-0"
            />
            <span>
              An <em>Apprehension</em> monologue, and live music, by Jessica
              Cohen
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Image
              src="/img/company/lb-portrait.jpg"
              alt="L.B. Deyo"
              width={75}
              height={75}
              className="w-[75px] h-[75px] aspect-square object-cover rounded-full border border-white/10 shrink-0"
            />
            <span>A speech and moderated discussion by L.B. Deyo</span>
          </li>
          <li className="flex items-center space-x-3">
            <em>9:00 PM</em> - Cocktails &amp; conversation
          </li>
        </ul>
        <Image
          src="/img/party1/champagne-coin.jpg"
          alt="Party"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-lg border border-white/10"
        />
      </main>
    </div>
  );
}
