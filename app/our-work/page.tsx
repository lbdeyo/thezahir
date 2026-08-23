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
          As a newly founded company, we are building a slate of original
          plays, short films, and mixed-media storytelling experiments that
          explore connection, perception, and the strangeness of being alive
          right now.
        </p>

        <div className="rounded-lg border border-white/10 overflow-hidden bg-black p-6 sm:p-8 mb-8">
          <p className="text-lg text-neutral-300 mb-2">
            Coming this fall to The Rosette:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            THE EGG
          </h2>
          <p className="text-lg text-neutral-300 mb-6">By Noah Masterson</p>
          <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
            <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
              <Image
                src="/img/the-egg/white-egg.png"
                alt="THE EGG"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="sm:w-1/2 min-w-0 space-y-4 text-lg text-neutral-300">
              <p>
                <strong>
                  October 29–November 21, 2026
                  <br />
                  The Rosette
                </strong>
              </p>
              <p>
                THE EGG is a one-of-a-kind theatrical experience featuring
                freakish birdpeople, illegal surgery, and out-of-control
                technology.
              </p>
              <p>
                Information and tickets at{" "}
                <a
                  href="https://the-egg-play.com"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  the-egg-play.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 overflow-hidden bg-black p-6 sm:p-8 mb-8">
          <p className="text-lg text-neutral-300 mb-2">
            Zahir Nights presents a staged reading:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            The American Revolution
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            By Kirk Wood Bromley
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
            <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0 flex justify-center sm:justify-start">
              <Image
                src="/img/amrev/crispus-attucks-amrev.png"
                alt="The American Revolution — poster art"
                width={1288}
                height={1920}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="sm:w-1/2 min-w-0 space-y-4 text-lg text-neutral-300">
              <p>
                <strong>
                  Sunday, November 1, 2026, 5:30–7:30 p.m.
                  <br />
                  The French Legation
                  <br />
                  802 San Marcos St
                  <br />
                  Austin, TX 78702
                </strong>
              </p>
              <p>
                The Zahir presents a verse play by Kirk Wood Bromley—a
                hilarious patriotic parade following General George Washington
                and the rambunctious Rebel Mess through the colonies, from
                Redcoats and spies to Benedict Arnold and the fight for
                independence.
              </p>
              <p>
                <a
                  href="https://tickets.atxtheatre.org/events/the-american-revolution-11-1-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
                >
                  Get Tickets
                </a>
              </p>
              <p>
                <a
                  href="/american-revolution"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  Learn more →
                </a>
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
                monologues, and other entertainment.
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
        <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
          Upcoming announcements will appear here as these projects move
          forward.
        </p>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] whitespace-nowrap">
              Past shows
            </h2>
            <div className="h-px flex-1 bg-[#e6ad06]/40" />
          </div>

          <div className="rounded-lg border border-white/10 overflow-hidden bg-black p-6 sm:p-8">
            <p className="text-lg text-neutral-300 mb-2">
              The Zahir&apos;s inaugural production, by L.B. Deyo:
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Oversight
            </h3>

            <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start">
              <div className="w-full sm:w-1/2 shrink-0 mb-4 sm:mb-0">
                <a
                  href="https://oversight-play.com"
                  className="block rounded-lg overflow-hidden hover:opacity-95 transition-opacity"
                  aria-label="Oversight — The Zahir inaugural production, July 30–August 22, 2026"
                >
                  <Image
                    src="/img/oversight/oversight-pic-new.jpg"
                    alt="Oversight — production photo"
                    width={1080}
                    height={566}
                    className="w-full h-auto object-cover"
                  />
                </a>
              </div>
              <div className="sm:w-1/2 min-w-0 space-y-4 text-lg text-neutral-300">
                <p>
                  <strong>
                    Ran July 30–August 22, 2026
                    <br />
                    Hyde Park Theatre, Austin
                  </strong>
                </p>
                <p>
                  A tense, fast-paced political and psychological
                  thriller—the company&apos;s inaugural production.
                </p>
                <blockquote className="border-l-2 border-[#e6ad06]/60 pl-4 text-base italic leading-relaxed text-neutral-400">
                  &ldquo;OVERSIGHT is an impeccable intellectual thriller
                  given an impeccable staging by The Zahir at Hyde Park
                  Theatre. Everybody in America should see it. Austin writer
                  L.B. Deyo&apos;s play uncoils with the audacity of a
                  Hitchcock masterpiece. Marcus McQuirter directs a cast
                  flawless in every detail, who populate a setting as
                  inescapable as the terrifyingly timely narrative.&rdquo;
                  <footer className="mt-3 not-italic text-sm text-neutral-500">
                    — Michael Barnes, <i>Austin American-Statesman</i>
                  </footer>
                </blockquote>
                <p>
                  Learn more at{" "}
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
        </section>
      </main>
    </div>
  );
}
