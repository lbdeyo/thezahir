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
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Oversight Auditions
        </h1>

        <p className="max-w-3xl text-lg text-neutral-300">
          Auditions are now closed.
        </p>
      </main>
    </div>
  );
}
