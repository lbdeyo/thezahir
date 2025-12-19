import type { Metadata } from "next";
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
    images: [
      {
        url: "/img/og/party-og.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gala Benefit | THE ZAHIR",
    description:
      "Step into an evening of elegant delights, live music, and conversation at The Zahir's Inaugural Gala Benefit at Hyde Park Theatre in Austin.",
    images: ["/img/og/party-og.jpg"],
  },
};

export default function Party() {
  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      {/* Vertical border lines - extend full height of page including footer */}
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
          ></div>
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
          ></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 pb-12 relative">
          <div
            className="px-4 sm:px-12 pt-4 pb-6 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
            id="gradient-start"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-3 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Join us
            </h1>
            <p className="text-2xl sm:text-4xl pt-3 text-black mb-4 sm:mb-6 font-medium font-['Baskerville']">
              <strong>
                {" "}
                <em>For</em> The Zahir&apos;s Inaugural Gala Benefit
              </strong>
            </p>
          </div>
          <div
            className="px-4 sm:px-12 py-6"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#ada173] mb-6 font-['Baskerville']">
              Tuesday, January 6, 2026 • Hyde Park Theatre • Austin, TX
            </h2>
            <p className="text-2xl text-[#ada173] mb-6 font-medium font-['Baskerville']">
              Step into an evening of elegant delights, where the clink of
              champagne glasses mingles with lively conversation and laughter.
              Enjoy handcrafted refreshments and delectable bites as you mingle
              with friends and creators in the warm, inviting atmosphere of Hyde
              Park Theatre. The night will feature live music and special
              performances, offering a taste of the creative spirit behind The
              Zahir. You&apos;ll be part of an inspiring community dedicated to
              meaningful storytelling and dialogue. Raise a glass, savor the
              ambiance, and celebrate the launch of The Zahir in style.
            </p>
            <div className="flex justify-center mb-8">
              <a
                href="https://www.eventbrite.com/e/the-zahirs-inaugural-benefit-gala-tickets-1977771996281?aff=oddtdtcreator&fbclid=IwY2xjawOsYR5leHRuA2FlbQIxMABicmlkETFPWklFSFNKVWlydkJ6T3lTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHklYHM9esJABBZEkqD08nmUmSMfkIkknacNxEaD78VbMutNONCoi4VBt1H6d_aem_fFznBueuXb9eV7M9eGwvZQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ada173] text-black font-bold px-8 py-4 rounded-lg text-2xl font-['Baskerville'] border-2 border-transparent hover:bg-black hover:text-[#ada173] hover:border-[#ada173] transition-colors shadow-lg"
              >
                Get Tickets
              </a>
            </div>
            <Image
              src="/img/party1/champagne-coin.jpg"
              alt="Party"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div
            className="px-4 sm:px-12 pb-1 "
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          ></div>
        </main>
      </div>
    </div>
  );
}
