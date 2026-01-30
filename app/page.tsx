import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import PhotoSlider from "./components/PhotoSlider";
import GiveGabButton from "./components/GiveGabButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | THE ZAHIR",
};

export default function Home() {
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
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 display-heading"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              A dramatic arts company
            </h1>
            <p className="text-2xl sm:text-3xl text-black mb-4 sm:mb-6 font-semibold font-['Baskerville']">
              Promoting conversation in a disconnected age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <div className="flex-1 min-w-0 bg-black rounded-lg border-2 border-black/30 p-4 sm:px-8 sm:py-6 text-white flex items-center justify-center text-center">
                <p className="text-2xl sm:text-3xl text-white font-medium font-['Baskerville']">
                  Alert:{" "}
                  <a
                    href="/our-work"
                    className="font-bold hover:underline transition-all text-[#E6AD06]"
                  >
                    Oversight
                  </a>{" "}
                  is coming.{" "}
                </p>
              </div>
              <div className="flex-1 min-w-0 px-4 sm:px-6 py-4 bg-black/20 rounded-lg border-2 border-black/30">
                <h2 className="text-2xl sm:text-3xl text-black mb-1 font-bold font-['Baskerville']">
                  Amplify Austin Day Early Giving is here.
                </h2>
                <p className="text-xl sm:text-2xl text-black mb-4 font-medium font-['Baskerville']">
                  Every gift helps us turn new theater into lived experience.
                </p>
                <GiveGabButton />
              </div>
            </div>

            <div className="mb-6 hidden">
              <a
                href="/party"
                className="block bg-black text-[#ada173] font-bold px-8 py-4 rounded-lg text-2xl text-center font-['Baskerville'] border-2 border-transparent hover:bg-[#ada173] hover:text-black hover:border-black transition-colors shadow-lg"
                style={{ letterSpacing: "0.02em" }}
              >
                {" "}
                Join us for{" "}
                <span style={{ color: "white" }}>
                  The Zahir&apos;s Inaugural Gala Benefit{" "}
                </span>
                <br />
                January 6, 2026 at Hyde Park Theatre
              </a>
            </div>
            <PhotoSlider />
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir creates original theater, film, and storytelling
              projects that bring people together for meaningful conversation.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              At a time defined by noise, loneliness, and misinformation, our
              work invites audiences to pause, reflect, and speak with one
              another.
            </p>
          </div>
          <div
            className="px-4 sm:px-12 py-6"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#ada173] mb-6 font-['Baskerville']">
              Our work
            </h2>
            <p className="text-2xl text-[#ada173] mb-6 font-medium font-['Baskerville']">
              We make theater and media that challenges, provokes, and opens
              space for conversation. We focus on new stories told through
              theater, film, and other dramatic arts, with an emphasis on
              connection in an increasingly disconnected world.
            </p>
            <p className="text-2xl text-[#ada173] mb-6 font-medium font-['Baskerville']">
              Our inaugural production, <i>Oversight</i>, runs July 30–August
              22, 2026 at Hyde Park Theatre. We are also developing other
              projects and collaborations; upcoming announcements will appear
              here.{" "}
              <a
                href="/our-work"
                className="hover:underline font-bold text-[#E6AD06]"
              >
                Learn more.
              </a>
            </p>
          </div>
          <div
            className="px-4 sm:px-12 py-6 pb-16"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-black font-['Baskerville'] mb-6">
              About The Zahir
            </h2>
            <div className="float-none sm:float-right ml-0 sm:ml-6 mb-6 w-full sm:w-auto">
              <Image
                src="/img/borges.jpg"
                alt="Jorge Luis Borges"
                width={240}
                height={320}
                className="w-full sm:max-w-[240px] sm:h-auto"
              />
            </div>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              In Jorge Luis Borges&apos;s{" "}
              <a
                href="https://sffaudiomediacan.s3.amazonaws.com/pdfs/TheZahirByJorgeLuisBorgesTranslatedByDudleyFitts.pdf"
                className="font-bold hover:underline transition-all text-[#490f0f]"
              >
                short story of the same name
              </a>
              , the Zahir is an object that consumes the mind. The more one
              contemplates it, the smaller one&apos;s world becomes, until the
              universe has contracted to the size of a small coin. The Zahir is
              fascinating, dazzling, and a curse.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              We chose the name because each of us confronts a modern Zahir:
              screens, feeds, and devices that capture attention but diminish
              connection. Through theater and storytelling, we strive to break
              the curse through work that brings people back into the world,
              toward each other, toward conversation.{" "}
              <a
                href="/about"
                className="hover:underline font-bold text-[#490f0f]"
              >
                Read more.
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
