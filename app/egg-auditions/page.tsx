import type { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "THE EGG Auditions | THE ZAHIR",
  description:
    "Audition information for THE EGG—Sunday, June 21st at Central Christian Church, ATX Theatre Room 220.",
  openGraph: {
    title: "THE EGG Auditions | THE ZAHIR",
    description:
      "Audition information for THE EGG—Sunday, June 21st at Central Christian Church, ATX Theatre Room 220.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "THE EGG Auditions | THE ZAHIR",
    description:
      "Audition information for THE EGG—Sunday, June 21st at Central Christian Church, ATX Theatre Room 220.",
    images: siteTwitterImages,
  },
};

function Divider() {
  return (
    <hr
      className="my-8 border-0 border-t border-black/40"
      aria-hidden="true"
    />
  );
}

export default function EggAuditionsPage() {
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
              THE EGG Auditions
            </h1>

            <div className="max-w-3xl font-['Baskerville'] text-black text-lg sm:text-xl leading-relaxed">
              <p className="text-2xl sm:text-3xl display-heading">
                Sunday, June 21st
              </p>
              <p className="mt-2 text-xl sm:text-2xl">1:00pm - 4:00pm</p>

              <Divider />

              <p className="font-semibold">Central Christian Church</p>
              <p className="mt-2">ATX Theatre [Room 220]</p>
              <p className="mt-2">1110 Guadalupe St, 78701</p>

              <Divider />

              <p>
                Seeking Actors with talents including, but not limited to:
              </p>
              <p className="mt-4">
                Mime, Dance, Movement, Existential Dread, Intensity,
                Incorrigibility, Insanity
              </p>

              <Divider />

              <p>
                To RSVP, email{" "}
                <a
                  href="mailto:davidritch.creative@outlook.com"
                  className="text-[#490f0f] hover:underline transition-all font-bold"
                >
                  davidritch.creative@outlook.com
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
