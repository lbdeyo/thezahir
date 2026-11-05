import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Home | THE ZAHIR",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Hero — the company's voice */}
        <section className="pt-8 sm:pt-10 pb-12 sm:pb-16">
          <h1 className="text-[1.62rem] sm:text-[2.7rem] lg:text-[3.24rem] font-bold tracking-tight leading-[1.08] max-w-2xl">
            A dramatic arts company promoting{" "}
            <span className="text-[#e6ad06]">conversation</span> in a
            disconnected age.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Original theater, film, and storytelling — Austin, TX
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block font-semibold text-[#e6ad06] hover:underline"
          >
            About The Zahir →
          </Link>
        </section>

        {/* Now playing */}
        <section className="pb-16 sm:pb-24">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] whitespace-nowrap">
              Now playing
            </h2>
            <div className="h-px flex-1 bg-[#e6ad06]/40" />
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-lg border border-white/10 bg-black">
              <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto">
                <Image
                  src="/img/the-egg/beau-paul.jpg"
                  alt="THE EGG"
                  fill
                  className="object-cover object-[30%_center]"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
              <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-center gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  By Noah Masterson
                </p>
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  THE EGG
                </h3>
                <p className="text-neutral-300">
                  October 29 – November 21 · The Rosette
                </p>
                <p className="text-base leading-relaxed text-neutral-400">
                  THE EGG is a one-of-a-kind theatrical experience featuring
                  freakish birdpeople, illegal surgery, and out-of-control
                  technology.
                </p>
                <blockquote className="border-l-[3px] border-[#e6ad06] pl-4">
                  <p className="text-lg italic leading-snug text-white">
                    &ldquo;What could be a cold and terrifying dystopia is still
                    unnerving, but fairly hilarious in how the characters lean
                    into the constant unexpected turns of Masterson&apos;s
                    script.&rdquo;
                  </p>
                  <footer className="mt-3 text-sm text-neutral-400">
                    — Cat McCarrey,{" "}
                    <a
                      href="https://www.austinchronicle.com/arts/arts-reviews/technological-nightmares/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic hover:text-[#e6ad06]"
                    >
                      The Austin Chronicle
                    </a>
                  </footer>
                </blockquote>
                <a
                  href="https://the-egg-play.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
                >
                  Learn more
                </a>
                <Link
                  href="/our-work"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  See all our work →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-lg border border-white/10 bg-black">
              <div className="md:col-span-3 relative aspect-square md:aspect-auto md:min-h-[360px]">
                <Image
                  src="/img/minotaur/minotaur-reading.jpg"
                  alt="A bronze bull, artwork for the staged reading of The Minotaur"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
              <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-center gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Staged reading · By L.B. Deyo
                </p>
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  The Minotaur
                </h3>
                <p className="text-neutral-300">
                  November 11 · 8:00 PM · Found Sound
                </p>
                <p className="text-base leading-relaxed text-neutral-400">
                  The Zahir will host a staged reading, directed by Elizabeth V.
                  Newman of Filigree Theatre, of L.B. Deyo&apos;s new play.
                  Scheduled to appear are Brent Werzner, Ryan Bradley and Meg
                  Hobgood. Produced by Maggie Meador.
                </p>
                <a
                  href="https://tickets.atxtheatre.org/events/minotaur-staged-reading-11-11-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
                >
                  Get tickets
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vote */}
        <section className="pb-16 sm:pb-24">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] whitespace-nowrap">
              Vote
            </h2>
            <div className="h-px flex-1 bg-[#e6ad06]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-lg border border-white/10 bg-black">
            <div className="md:col-span-3 relative aspect-[16/9] md:aspect-auto md:min-h-[320px]">
              <Image
                src="/img/oversight/oversight-pic-new.jpg"
                alt="The cast of Oversight seated around a hearing table"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-center gap-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                BroadwayWorld Austin Awards
              </p>
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Oversight
              </h3>
              <p className="text-neutral-300">
                Voting open through December 31
              </p>
              <p className="text-base leading-relaxed text-neutral-400">
                The Zahir&apos;s inaugural production is nominated for Best
                Play and more. Cast your vote.
              </p>
              <a
                href="https://www.broadwayworld.com/austin/awards/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
              >
                Vote now
              </a>
            </div>
          </div>
        </section>

        {/* News */}
        <section className="pb-16 sm:pb-24">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] whitespace-nowrap">
              News
            </h2>
            <div className="h-px flex-1 bg-[#e6ad06]/40" />
          </div>
          <ul className="space-y-5">
            <li className="text-lg text-neutral-300">
              GivingTuesday is December 1. Help us raise $5,000 for original
              theater.{" "}
              <Link
                href="/giving-tuesday"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Learn more
              </Link>
              .
            </li>
            <li className="text-lg text-neutral-300">
              Coming in March 2027: L.B. Deyo&apos;s <i>The Minotaur</i>.{" "}
              <a
                href="https://minotaur-play.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Learn more
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Our work */}
        <section className="pb-16 sm:pb-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Our work
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              The Zahir creates original theater, film, and storytelling
              projects that bring people together for meaningful conversation.
              At a time defined by noise, loneliness, and misinformation, our
              work invites audiences to pause, reflect, and speak with one
              another.
            </p>
            <p>
              We make theater and media that challenges, provokes, and opens
              space for conversation — new stories told through theater, film,
              and other dramatic arts, with an emphasis on connection in an
              increasingly disconnected world.{" "}
              <Link
                href="/our-work"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Learn more
              </Link>
              .
            </p>
          </div>
        </section>

        {/* About */}
        <section className="pb-20 sm:pb-28">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About The Zahir
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-8 items-start">
            <div className="space-y-5 text-lg text-neutral-300">
              <p>
                In Jorge Luis Borges&apos;s{" "}
                <a
                  href="https://sffaudiomediacan.s3.amazonaws.com/pdfs/TheZahirByJorgeLuisBorgesTranslatedByDudleyFitts.pdf"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  short story of the same name
                </a>
                , the Zahir is an object that consumes the mind. The more one
                contemplates it, the smaller one&apos;s world becomes, until
                the universe has contracted to the size of a small coin. The
                Zahir is fascinating, dazzling, and a curse.
              </p>
              <p>
                We chose the name because each of us confronts a modern Zahir:
                screens, feeds, and devices that capture attention but
                diminish connection. Through theater and storytelling, we
                strive to break the curse through work that brings people back
                into the world, toward each other, toward conversation.{" "}
                <Link
                  href="/about"
                  className="font-semibold text-[#e6ad06] hover:underline"
                >
                  Read more
                </Link>
                .
              </p>
            </div>
            <Image
              src="/img/borges.jpg"
              alt="Jorge Luis Borges"
              width={240}
              height={320}
              className="w-full sm:w-[220px] h-auto rounded-lg grayscale"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
