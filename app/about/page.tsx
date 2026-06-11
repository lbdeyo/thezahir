import { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About | THE ZAHIR",
  description:
    "In Jorge Luis Borges's short story The Zahir, an ordinary object becomes an overwhelming force—a metaphor for obsession, attention, and the narrowing of the human world.",
  openGraph: {
    title: "About | THE ZAHIR",
    description:
      "In Jorge Luis Borges's short story The Zahir, an ordinary object becomes an overwhelming force—a metaphor for obsession, attention, and the narrowing of the human world.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "About | THE ZAHIR",
    description:
      "In Jorge Luis Borges's short story The Zahir, an ordinary object becomes an overwhelming force—a metaphor for obsession, attention, and the narrowing of the human world.",
    images: siteTwitterImages,
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          About The Zahir
        </h1>
        <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
          <p>
            In Jorge Luis Borges&apos;s short story{" "}
            <a
              href="https://sffaudiomediacan.s3.amazonaws.com/pdfs/TheZahirByJorgeLuisBorgesTranslatedByDudleyFitts.pdf"
              className="font-semibold text-[#e6ad06] hover:underline"
            >
              <i>The Zahir</i>
            </a>
            , an ordinary object becomes an overwhelming force—captivating,
            dazzling, and ultimately consuming. The more one contemplates it,
            the smaller the universe becomes. It is a metaphor for obsession,
            attention, and the narrowing of the human world.
          </p>
          <p>
            We chose the name because each of us confronts a modern Zahir: the
            screens, feeds, and digital currents that demand our attention
            while quietly shrinking our sense of one another. In an age
            defined by noise, loneliness, and misinformation, the act of
            gathering for a story has become radical.
          </p>
          <p>
            The Zahir was founded to counter that contraction. Through
            theater, film, and other dramatic arts, we strive to break the
            spell—to create work that draws people back into the present, back
            into community, and back into conversation. We believe that
            storytelling is still one of the most powerful tools for widening
            perception and renewing human connection.
          </p>
          <p className="font-bold text-white">
            The Zahir's mission is to create obsession-worthy theater that
            draws people out of isolation and back into conversation.
          </p>
          <p>
            We are committed to producing original work, paying artists
            fairly, and building a sustainable creative home in Austin. Though
            newly formed, our vision is long-term: to become a place where
            artists can take risks, audiences can wrestle with new ideas, and
            everyone involved can feel a little less alone.
          </p>
          <p>This is the beginning of that work.</p>
        </div>
        <div className="max-w-3xl mt-10">
          <Image
            src="/img/borges.jpg"
            alt="Jorge Luis Borges"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </main>
    </div>
  );
}
