import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Licensing | THE ZAHIR",
  description:
    "License original plays by The Zahir, including Apprehension and Oversight by L.B. Deyo. Reasonable fees, synopses, press materials, and EPKs.",
  openGraph: {
    title: "Licensing | THE ZAHIR",
    description:
      "License original plays by The Zahir, including Apprehension and Oversight by L.B. Deyo. Reasonable fees, synopses, press materials, and EPKs.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensing | THE ZAHIR",
    description:
      "License original plays by The Zahir, including Apprehension and Oversight by L.B. Deyo. Reasonable fees, synopses, press materials, and EPKs.",
    images: siteTwitterImages,
  },
};

const plays = [
  {
    title: "Apprehension",
    author: "L.B. Deyo",
    note: "Winner — Outstanding Original Script, Austin Theatre Critics Awards 2025–2026",
    synopsis:
      "A paranoid psychological thriller about Joe Dempsey, a man tormented by memory lapses and gnawing doubts about his own past. During a period of emotional collapse, Joe begins to suspect that his wife and friends are not who they seem to be. As his grasp on reality wavers, he struggles to determine whether he\u2019s uncovering a horrific truth or falling prey to delusion. Set in a world of shifting loyalties, buried traumas, and eerie disappearances, Apprehension explores the line between paranoia and insight.",
    quotes: [
      {
        text: "Absolutely taut\u2026 Like Sartre on speed.",
        attribution: "Brian Paul Scipione, CTX Live Theatre",
      },
    ],
    epkHref: "/docs/apprehension-epk.pdf",
    image: {
      src: "/img/apprehension/reading3-big-gang.jpg",
      alt: "Apprehension — table read",
      width: 1366,
      height: 768,
    },
  },
  {
    title: "Oversight",
    author: "L.B. Deyo",
    note: "Winner — Outstanding Original Script, Austin Theatre Critics Awards 2025–2026",
    synopsis:
      "A secret commission. A ticking clock. A decision that can\u2019t be undone. Oversight is a fast-paced political and psychological thriller that traps its audience inside a closed committee hearing as lawmakers confront a consequential threat at the intersection of artificial intelligence and national security.",
    quotes: [
      {
        text: "Philosophical, political, deeply human and unnervingly timely\u2026 an ambitious and provocative and well written work that lingers long after the curtain falls.",
        attribution: "Elise Krentzel, Sun News Austin",
      },
      {
        text: "Oversight is the very first production of the Zahir\u2026 and the company couldn\u2019t have hoped for a more powerful and engrossing debut.",
        attribution: "Brian Paul Scipione, CTX Live Theatre",
      },
    ],
    epkHref: "/docs/oversight-epk.pdf",
    image: {
      src: "/img/oversight/oversight-pic-new.jpg",
      alt: "Oversight — production photo",
      width: 1080,
      height: 566,
    },
  },
];

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Licensing
        </h1>

        <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mb-12">
          <p>
            The Zahir licenses its original plays for production by theaters,
            schools, and other organizations. Fees are reasonable and scaled to
            your venue and production.
          </p>
          <p>
            Each title below includes a synopsis, selected press quotes, and an
            electronic press kit (EPK) with additional materials.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {plays.map((play) => (
            <article
              key={play.title}
              className="rounded-lg border border-white/10 bg-black p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                <i>{play.title}</i>
              </h2>
              <p className="text-neutral-400 mb-1">By {play.author}</p>
              <p className="text-sm text-[#e6ad06] font-semibold mb-6">
                {play.note}
              </p>

              <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start mb-8">
                <div className="w-full sm:w-2/5 shrink-0 mb-6 sm:mb-0">
                  <Image
                    src={play.image.src}
                    alt={play.image.alt}
                    width={play.image.width}
                    height={play.image.height}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="sm:flex-1 min-w-0">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                    Synopsis
                  </h3>
                  <p className="text-lg text-neutral-300">{play.synopsis}</p>
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                Press
              </h3>
              <div className="space-y-4 mb-8">
                {play.quotes.map((quote) => (
                  <blockquote
                    key={quote.attribution}
                    className="border-l-2 border-[#e6ad06]/60 pl-4 text-base italic leading-relaxed text-neutral-400"
                  >
                    &ldquo;{quote.text}&rdquo;
                    <footer className="mt-3 not-italic text-sm text-neutral-500">
                      — {quote.attribution}
                    </footer>
                  </blockquote>
                ))}
              </div>

              <a
                href={play.epkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
              >
                Download EPK
              </a>
            </article>
          ))}
        </div>

        <section className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Get in touch
          </h2>
          <div className="space-y-5 text-lg text-neutral-300">
            <p>
              To inquire about licensing a Zahir play, please{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                contact us
              </Link>
              . Include the title you&apos;re interested in, your organization,
              and any proposed production dates or venue details. We&apos;ll
              respond with availability, terms, and fee information.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
