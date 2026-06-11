import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Tickets | THE ZAHIR",
  description:
    "Get tickets for Oversight, The Zahir’s inaugural production—July 30–August 22, 2026 at Hyde Park Theatre in Austin.",
  openGraph: {
    title: "Tickets | THE ZAHIR",
    description:
      "Get tickets for Oversight, The Zahir’s inaugural production—July 30–August 22, 2026 at Hyde Park Theatre in Austin.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tickets | THE ZAHIR",
    description:
      "Get tickets for Oversight, The Zahir’s inaugural production—July 30–August 22, 2026 at Hyde Park Theatre in Austin.",
    images: siteTwitterImages,
  },
};

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Tickets
        </h1>

        <p className="text-lg text-neutral-300 mb-8 max-w-3xl">
          Reserve your seats for The Zahir&apos;s productions in Austin.
        </p>

        <div className="rounded-lg border border-white/10 bg-black p-6 sm:p-8 mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] mb-2">
            The Zahir&apos;s inaugural production:
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Oversight
          </h2>

          <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start mb-6">
            <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
              <a
                href="https://oversight-play.com"
                className="block rounded-lg border border-white/10 overflow-hidden hover:opacity-95 transition-opacity"
                aria-label="Oversight — The new play from The Zahir, July 30–August 22, 2026"
              >
                <Image
                  src="/img/oversight/Oversight-dates-30.jpg"
                  alt="Oversight — The new play from The Zahir, July 30–August 22, 2026"
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            <div className="sm:w-1/2 min-w-0">
              <p className="text-lg text-white font-bold mb-4">
                July 30–August 22, 2026
                <br />
                Hyde Park Theatre
                <br />
                511 W. 43rd St, Austin, TX
              </p>
              <p className="text-lg text-neutral-300">
                Thursdays, Fridays, and Saturdays at 7:30 PM. A tense,
                fast-paced political and psychological thriller by L.B. Deyo.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="https://tickets.atxtheatre.org/events/oversight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors text-center"
            >
              Get Tickets
            </a>
            <a
              href="https://oversight-play.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#e6ad06] hover:underline text-center sm:text-left"
            >
              Oversight-Play.com
            </a>
          </div>
        </div>

        <p className="text-lg text-neutral-300 max-w-3xl">
          For group sales, accessibility questions, or other ticket inquiries,
          please reach out through our{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#e6ad06] hover:underline"
          >
            contact page
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
