import type { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Oversight Auditions | THE ZAHIR",
  description:
    "Audition information for Oversight, The Zahir’s inaugural production—a political and psychological thriller by L.B. Deyo.",
  openGraph: {
    title: "Oversight Auditions | THE ZAHIR",
    description:
      "Audition information for Oversight, The Zahir’s inaugural production—a political and psychological thriller by L.B. Deyo.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Oversight Auditions | THE ZAHIR",
    description:
      "Audition information for Oversight, The Zahir’s inaugural production—a political and psychological thriller by L.B. Deyo.",
    images: siteTwitterImages,
  },
};

export default function OversightAuditionsPage() {
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
              Oversight Auditions
            </h1>

            <p className="max-w-3xl font-['Baskerville'] text-black text-lg sm:text-xl leading-relaxed">
              Auditions are now closed.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
