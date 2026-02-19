import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "R.S.V.P. | THE ZAHIR",
  robots: "noindex, nofollow",
};

export default function RsvpPage() {
  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="w-full px-4 sm:px-8 pt-0 pb-12 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{ background: "rgba(173, 161, 115, 0.90)" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-6 pt-4 display-heading" style={{ fontWeight: 800, fontStyle: "normal" }}>
              R.S.V.P.
            </h1>
            <Script
              src="https://js-na2.hsforms.net/forms/embed/244639378.js"
              strategy="afterInteractive"
            />
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="7d448c69-ce15-451c-84b8-4dc6ce413019"
              data-portal-id="244639378"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
