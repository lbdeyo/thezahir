import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work | THE ZAHIR",
  description:
    "The Zahir creates original theater, film, and storytelling projects designed to spark conversation in an age that often discourages it.",
  openGraph: {
    title: "Our Work | THE ZAHIR",
    description:
      "The Zahir creates original theater, film, and storytelling projects designed to spark conversation in an age that often discourages it.",
    images: [
      {
        url: "/img/og/our-work-og.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | THE ZAHIR",
    description:
      "The Zahir creates original theater, film, and storytelling projects designed to spark conversation in an age that often discourages it.",
    images: ["/img/og/our-work-og.jpg"],
  },
};

export default function OurWork() {
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
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 display-heading"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Our Work
            </h1>
            <div className="bg-black text-[#ada173] p-6 rounded-lg mb-6">
              <p className="text-2xl text-[#ada173] font-medium font-['Baskerville'] mb-2">
                The Zahir is very proud to announce its inaugural production:
                L.B. Deyo&apos;s{" "}
              </p>
              <h2 className="text-6xl sm:text-7xl font-bold text-[#ada173] mb-2 display-heading">
                Oversight
              </h2>

              <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
                <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
                  <a
                    href="https://oversight-play.com"
                    className="block rounded overflow-hidden border border-[#ada173] hover:opacity-95 transition-opacity"
                    aria-label="Oversight — The new play from The Zahir, July 30–August 22, 2026"
                  >
                    <Image
                      src="/img/oversight/Oversight-dates-1.jpg"
                      alt="Oversight — The new play from The Zahir, July 30–August 22, 2026"
                      width={1200}
                      height={630}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                </div>
                <div className="sm:w-1/2 min-w-0">
                  <p className="text-2xl text-[#ada173] font-medium font-['Baskerville']">
                    <strong>
                      July 30–August 22, 2026<br></br> Hyde Park Theatre
                    </strong>
                    <br></br> A tense, fast-paced political and psychological
                    thriller.{" "}
                    <a
                      href="https://oversight-play.com"
                      className="font-bold hover:underline transition-all text-[#E6AD06]"
                    >
                      Oversight-Play.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir creates original theater, film, and storytelling
              projects designed to spark conversation in an age that often
              discourages it. We focus on new work—bold, intimate, and alive to
              the anxieties and possibilities of modern life.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Our projects begin with a simple belief: that stories can pull
              people back into the world. At a time when screens and feeds
              narrow our attention, we make work that widens it. Our productions
              invite audiences to gather, sit together in the dark, and
              experience something shared—something that lingers long after the
              final moment.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              As a newly founded company, we are building our first slate of
              productions. These include original plays, short films, and
              mixed-media storytelling experiments that explore connection,
              perception, and the strangeness of being alive right now.
            </p>
            <div className="bg-black text-[#ada173] p-6 rounded-lg mb-6">
              <p className="text-2xl text-[#ada173] font-medium font-['Baskerville'] mb-2">
                We&apos;re in early development on Noah Masterson&apos;s play{" "}
              </p>
              <h2 className="text-6xl sm:text-7xl font-semibold text-[#ada173] mb-6 display-heading">
                The Egg
              </h2>
              <div className="mb-6 flex flex-col sm:flex-row sm:gap-8 sm:items-start">
                <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
                  <Image
                    src="/img/the-egg/egg-preview.jpg"
                    alt="The Egg"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover rounded border"
                    style={{ borderColor: "#ada173" }}
                  />
                </div>
                <div className="sm:w-1/2 min-w-0">
                  <p className="text-2xl text-[#ada173] font-medium font-['Baskerville']">
                    A surreal, darkly comic exploration of belief,
                    responsibility, and transformation. A reading is planned for
                    2026. Learn more at{" "}
                    <i>
                      <a
                        href="https://theegg.noahmasterson.com"
                        className="font-bold hover:underline transition-all text-[#E6AD06]"
                      >
                        The Egg&apos;s website.
                      </a>
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              We also plan to bring{" "}
              <a
                href="https://apprehensionplay.com"
                className="font-bold hover:underline transition-all text-[#490f0f]"
              >
                <i>Apprehension</i>
              </a>
              , the critically acclaimed paranoid thriller, back to the stage
              within the next twelve months.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Upcoming announcements will appear here as these projects move
              forward. We invite you to follow along as The Zahir&apos;s
              inaugural work takes shape.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
