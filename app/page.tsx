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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-2xl">
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

        {/* Current production */}
        <section className="pb-16 sm:pb-24">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] whitespace-nowrap">
              Coming this summer
            </h2>
            <div className="h-px flex-1 bg-[#e6ad06]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-lg border border-white/10">
            <div className="relative md:col-span-3 aspect-video md:aspect-auto md:min-h-[340px]">
              <Image
                src="/img/oversight/oversight-home-card.jpg"
                alt="Oversight — a congressional hearing scene"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="md:col-span-2 bg-black p-8 sm:p-10 flex flex-col justify-center gap-4">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Oversight
              </h3>
              <p className="text-neutral-300">
                July 30 – August 22 · Hyde Park Theatre, Austin
              </p>
              <a
                href="https://tickets.atxtheatre.org/events/oversight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
              >
                Get Tickets
              </a>
              <a
                href="https://www.youtube.com/watch?v=qSPlg1qkSA4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Watch the announcement →
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
              Zahir Artistic Director wins Austin Theatre Critics Award for
              Outstanding Original Script for Holi Shamoli&apos;s 2025
              production of <i>Apprehension</i>.
            </li>
            <li className="text-lg text-neutral-300">
              Zahir Nights presents a free staged reading of{" "}
              <i>The American Revolution</i> by Kirk Wood Bromley at the French
              Legation.{" "}
              <Link
                href="/american-revolution"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Learn more
              </Link>
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
