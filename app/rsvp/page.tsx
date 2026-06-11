import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "R.S.V.P. | THE ZAHIR",
  robots: "noindex, nofollow",
};

export default function RsvpPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          R.S.V.P.
        </h1>
        <Script
          src="https://js-na2.hsforms.net/forms/embed/244639378.js"
          strategy="afterInteractive"
        />
        <div className="rounded-lg border border-white/10 overflow-hidden bg-white/5 p-4 sm:p-6">
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="7d448c69-ce15-451c-84b8-4dc6ce413019"
            data-portal-id="244639378"
          />
        </div>
      </main>
    </div>
  );
}
