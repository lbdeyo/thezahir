import { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
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
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | THE ZAHIR",
    description:
      "The Zahir creates original theater, film, and storytelling projects designed to spark conversation in an age that often discourages it.",
    images: siteTwitterImages,
  },
};

export default function OurWork() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Our Work
        </h1>

        <div className="rounded-lg border border-white/10 overflow-hidden bg-black p-6 sm:p-8 mb-8">
          <p className="text-lg text-neutral-300 mb-2">
            The Zahir is very proud to announce its inaugural production:
            L.B. Deyo&apos;s{" "}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Oversight
          </h2>

          <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
            <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
              <a
                href="https://oversight-play.com"
                className="block rounded-lg overflow-hidden hover:opacity-95 transition-opacity"
                aria-label="Oversight — The new play from The Zahir, July 30–August 22, 2026"
              >
                <Image
                  src="/img/oversight/Oversight-dates-30.jpg"
                  alt="Oversight — The new play from The Zahir, July 30–August 22, 2026"
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            <div className="sm:w-1/2 min-w-0">
              <p className="text-lg text-neutral-300">
                <strong>
                  July 30–August 22, 2026<br></br> Hyde Park Theatre
                </strong>
                <br></br> A tense, fast-paced political and psychological
                thriller.{" "}
                <a
                  href="https://oversight-play.com"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  Oversight-Play.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-neutral-300 mb-5 max-w-3xl">
          The Zahir creates original theater, film, and storytelling
          projects designed to spark conversation in an age that often
          discourages it. We focus on new work—bold, intimate, and alive to
          the anxieties and possibilities of modern life.
        </p>
        <p className="text-lg text-neutral-300 mb-5 max-w-3xl">
          Our projects begin with a simple belief: that stories can pull
          people back into the world. At a time when screens and feeds
          narrow our attention, we make work that widens it. Our productions
          invite audiences to gather, sit together in the dark, and
          experience something shared—something that lingers long after the
          final moment.
        </p>
        <p className="text-lg text-neutral-300 mb-8 max-w-3xl">
          As a newly founded company, we are building our first slate of
          productions. These include original plays, short films, and
          mixed-media storytelling experiments that explore connection,
          perception, and the strangeness of being alive right now.
        </p>
        <div className="rounded-lg border border-white/10 overflow-hidden bg-black p-6 sm:p-8 mb-8">
          <p className="text-lg text-neutral-300 mb-2">
            We&apos;re in early development on Noah Masterson&apos;s
            play{" "}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
            The Egg
          </h2>
          <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
            <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
              <Image
                src="/img/the-egg/white-egg.png"
                alt="The Egg"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="sm:w-1/2 min-w-0">
              <p className="text-lg text-neutral-300">
                <strong>October 29 - November 21, 2026</strong> <br></br>
                <strong>The Rosette</strong> <br></br> A surreal dark
                comedy. <br></br>
                <i>
                  <a
                    href="https://the-egg-play.com"
                    className="font-semibold text-[#e6ad06] hover:underline"
                  >
                    The-Egg-Play.com
                  </a>
                </i>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 overflow-hidden bg-black p-6 sm:p-8 mb-8">
          <p className="text-lg text-neutral-300 mb-2">
            Announcing{" "}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
            The Zahir Nights
          </h2>
          <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
            <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0 flex justify-center sm:justify-start">
              <Image
                src="/img/zahir-nights/zahir-nights-logo.jpg"
                alt="The Zahir Nights"
                width={1000}
                height={1000}
                unoptimized
                className="w-3/4 max-w-full h-auto object-cover rounded-lg overflow-hidden"
              />
            </div>
            <div className="sm:w-1/2 min-w-0">
              <p className="text-lg text-neutral-300">
                A series of benefit performances featuring short plays,
                monologues, and other entertainment. <br></br>Up next: a
                free staged reading of <i>The American Revolution</i> by
                Kirk Wood Bromley, Sunday, Nov. 1 at the French Legation.{" "}
                <a
                  href="/american-revolution"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  Learn more
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-neutral-300 mb-5 max-w-3xl hidden">
          We also plan to bring{" "}
          <a
            href="https://apprehensionplay.com"
            className="font-semibold text-[#e6ad06] hover:underline"
          >
            <i>Apprehension</i>
          </a>
          , the critically acclaimed paranoid thriller, back to the stage
          within the next twelve months.
        </p>
        <p className="text-lg text-neutral-300 mb-5 max-w-3xl">
          Upcoming announcements will appear here as these projects move
          forward. We invite you to follow along as The Zahir&apos;s
          inaugural work takes shape.
        </p>
      </main>
    </div>
  );
}
