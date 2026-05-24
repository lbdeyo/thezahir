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
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
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
          />
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
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.95)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] text-black mb-4 pt-4 display-heading"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Tickets
            </h1>

            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville'] max-w-3xl">
              Reserve your seats for The Zahir&apos;s productions in Austin.
            </p>

            <div className="bg-black text-[#ada173] p-6 rounded-lg mb-6">
              <p className="text-2xl text-[#ada173] font-medium font-['Baskerville'] mb-2">
                The Zahir&apos;s inaugural production:
              </p>
              <h2 className="text-6xl sm:text-7xl lg:text-[5.5rem] text-[#ada173] mb-4 display-heading">
                Oversight
              </h2>

              <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start mb-6">
                <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
                  <a
                    href="https://oversight-play.com"
                    className="block rounded overflow-hidden hover:opacity-95 transition-opacity"
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
                  <p className="text-2xl text-[#ada173] font-medium font-['Baskerville'] mb-4">
                    <strong>
                      <strong>July 30–August 22, 2026</strong>
                      <br />
                      Hyde Park Theatre
                      <br />
                      511 W. 43rd St, Austin, TX
                    </strong>
                  </p>
                  <p className="text-xl sm:text-2xl text-[#ada173] font-medium font-['Baskerville']">
                    Thursdays, Fridays, and Saturdays at 7:30 PM. A tense,
                    fast-paced political and psychological thriller by L.B.
                    Deyo.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href="https://tickets.atxtheatre.org/events/oversight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ada173] text-black font-bold px-8 py-4 rounded-lg text-2xl font-['Baskerville'] border-2 border-transparent hover:bg-black hover:text-[#ada173] hover:border-[#ada173] transition-colors shadow-lg text-center"
                >
                  Get Tickets
                </a>
                <a
                  href="https://oversight-play.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold hover:underline transition-all text-[#E6AD06] font-['Baskerville'] text-center sm:text-left"
                >
                  Oversight-Play.com
                </a>
              </div>
            </div>

            <p className="text-2xl text-black font-medium font-['Baskerville'] max-w-3xl">
              For group sales, accessibility questions, or other ticket
              inquiries, please reach out through our{" "}
              <Link
                href="/contact"
                className="text-[#490f0f] hover:underline transition-all font-bold"
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
