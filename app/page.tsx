import Navigation from "./components/Navigation";
import CoinVideo from "./components/CoinVideo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical border lines - aligned with gradient edges (px-4 sm:px-8) */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-8 right-4 sm:right-8 pointer-events-none z-0">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-[#ada173]"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-[#ada173]"></div>
        </div>
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
            <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-semibold text-black mb-2 pt-4 font-['Baskerville']">
              A dramatic arts company
            </h1>
            <p className="text-xl sm:text-2xl text-black mb-6 sm:mb-8 font-medium font-['Baskerville']">
              Promoting conversation in a disconnected age
            </p>
            <CoinVideo />
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir creates original theater, film, and storytelling
              projects that bring people together for meaningful conversation.
            </p>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
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
            <p className="text-xl text-[#ada173] mb-6 font-medium font-['Baskerville']">
              We make theater and media that challenges, provokes, and opens
              space for conversation. We focus on new stories told through
              theater, film, and other dramatic arts, with an emphasis on
              connection in an increasingly disconnected world.
            </p>
            <p className="text-xl text-[#ada173] mb-6 font-medium font-['Baskerville']">
              As a newly founded company, we are actively developing our
              inaugural projects and collaborations. Upcoming announcements will
              appear here. Learn more.
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
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              In Jorge Luis Borges&apos;s{" "}
              <a
                href="https://sffaudiomediacan.s3.amazonaws.com/pdfs/TheZahirByJorgeLuisBorgesTranslatedByDudleyFitts.pdf"
                className="font-semibold hover:underline transition-all"
              >
                short story of the same name
              </a>
              , the Zahir is an object that consumes the mind. The more one
              contemplates it, the smaller one&apos;s world becomes, until the
              universe has contracted to the size of a small coin. The Zahir is
              fascinating, dazzling, and a curse.
            </p>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              We chose the name because each of us confronts a modern Zahir:
              screens, feeds, and devices that capture attention but diminish
              connection. Through theater and storytelling, we strive to break
              the curse through work that brings people back into the world,
              toward each other, toward conversation. Read more.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
