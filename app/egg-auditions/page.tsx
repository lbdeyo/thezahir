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

export default function EggAuditionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          THE EGG Auditions
        </h1>

        <p className="max-w-3xl text-lg text-neutral-300">
          Auditions are now closed.
        </p>
      </main>
    </div>
  );
}
