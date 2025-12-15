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
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Our Work
            </h1>
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
            <div className="bg-black text-white p-6 rounded-lg mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 font-['Baskerville']">
                We&apos;re currently in early development on two new plays:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-['Baskerville']">
                    <i>Oversight</i> by L.B. Deyo
                  </h3>
                  <Image
                    src="/img/oversight/oversight-preview.jpg"
                    alt="Oversight"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover rounded border"
                    style={{ borderColor: "#ada173" }}
                  />
                  <p className="text-2xl text-white font-medium font-['Baskerville'] mt-4">
                    A tense, fast-paced political and technological thriller
                    based on the{" "}
                    <a
                      href="https://ai-2027.com"
                      className="font-bold hover:underline transition-all text-[#E6AD06]"
                    >
                      A.I. 2027
                    </a>{" "}
                    paper. We plan a table reading for January 2026.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-['Baskerville']">
                    <i>The Egg</i> by Noah Masterson
                  </h3>
                  <Image
                    src="/img/the-egg/egg-preview.jpg"
                    alt="Oversight"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover rounded border"
                    style={{ borderColor: "#ada173" }}
                  />
                  <p className="text-2xl text-white font-medium font-['Baskerville'] mt-4">
                    A surreal, darkly comic exploration of belief,
                    responsibility, and transformation.A reading is planned for
                    2026. Learn more at{" "}
                    <i>
                      <a
                        href="https://theegg.noahmasterson.com"
                        className="font-bold hover:underline transition-all text-[#E6AD06]"
                      >
                        The Egg's website.
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
              forward. We invite you to follow along as The Zahir’s inaugural
              work takes shape.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
