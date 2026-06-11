import { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Love | THE ZAHIR",
  description:
    "Love is at the heart of The Zahir: connection, community, and the stories that bring us back to one another.",
  openGraph: {
    title: "Love | THE ZAHIR",
    description:
      "Love is at the heart of The Zahir: connection, community, and the stories that bring us back to one another.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Love | THE ZAHIR",
    description:
      "Love is at the heart of The Zahir: connection, community, and the stories that bring us back to one another.",
    images: siteTwitterImages,
  },
};

const LOVE_LINKS: { label: string; href: string }[] = [
  { label: "ATX Theatre", href: "https://www.atxtheatre.org/" },
  { label: "CTX Live Theatre", href: "https://ctxlivetheatre.com/" },
  { label: "Graham Reynolds", href: "https://www.grahamreynolds.com/" },
  { label: "Hyde Park Theatre", href: "https://www.hydeparktheatre.org/" },
  { label: "Inverse Theater", href: "https://inversetheater.org/" },
  { label: "Rude Mechs", href: "https://rudemechs.com/" },
  {
    label: "Salvage Vanguard Theater",
    href: "https://www.salvagevanguard.org/",
  },
  {
    label: "Ground Floor Theatre",
    href: "https://www.groundfloortheatre.org/",
  },
  {
    label: "Treasure Island Reimagined",
    href: "http://treasureislandreimagined.com/",
  },
  {
    label: "Bill McCullough Photography",
    href: "https://billmccullough.com/",
  },
  { label: "Golden Hornet", href: "https://www.goldenhornet.org/" },
  { label: "The Hideout", href: "https://hideouttheatre.com/" },
  { label: "Penfold Theatre", href: "https://www.penfoldtheatre.org/" },
  { label: "Austin Shakespeare", href: "https://www.austinshakespeare.org/" },
  { label: "Hidden Room", href: "https://hiddenroomtheatre.com/" },
  { label: "Merlin Works", href: "https://www.merlin-works.com/" },
  {
    label: "Austin Creative Alliance",
    href: "https://www.austincreativealliance.org/",
  },
  { label: "A3 Austin", href: "https://a3austin.org/" },
  { label: "Riches Art Gallery", href: "https://www.richesart.com/" },
  { label: "_OFCOLOR", href: "https://www.ofcolor.org/" },
  {
    label: "Mosaic Workshop",
    href: "https://www.themosaicworkshop.org/",
  },
  { label: "Austin Together", href: "https://www.austintogether.org/" },
  { label: "Imagine Art", href: "https://www.imagineart.net/" },
  { label: "ScriptWorks", href: "https://scriptworks.org/" },
  { label: "TALA", href: "https://talarts.org/" },
];

export default function Love() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Love
        </h1>
        <section className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            What we&apos;re watching
          </h2>
          <div className="mb-10 space-y-5 text-lg text-neutral-300">
            <p>
              Review: <em>Take Care of My Friend</em> by Kathleen Fletcher (
              <a
                href="https://www.filigreetheatre.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                The Filigree Theatre
              </a>
              )
            </p>
            <p>
              If you have tears, prepare to shed them. This is theater at
              its most naked, its most vulnerable, and its most honest.
              Playwright and star Kathleen Fletcher is the Virgil guiding us
              through her personal hell of mental illness. The sights and
              sounds are brutal, nightmarish. But the humor, charm, warmth
              and courage that have allowed her to survive are also our own
              port in the storm. Fletcher and her electrifying cast,
              including the always outstanding Rachel West (a Zahir Company
              member, to our great pride), ensure that there are laughs and
              joy along with the sorrow. Through April 25th at Hyde Park
              Theatre.
            </p>
          </div>
          <div className="space-y-5 text-lg text-neutral-300">
            <p>
              Review: <em>The Fire Raisers</em> from{" "}
              <a
                href="https://hiddenroomtheatre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                The Hidden Room
              </a>
            </p>
            <p>
              If satire is a meal, Max Frisch&apos;s{" "}
              <em>The Fire Eaters</em> is a particularly hot and
              mouthwatering one. Director Beth Burns has taken Frisch&apos;s
              recipe and cooked up the perfect blend of delectability and
              presentation. The comedy savors of deep absurdist wit, the
              metaphor is irresistible, and the blend of music and light
              create a classical atmosphere. Among the standout performers
              from an outstanding cast were the charming one-man band
              Michael Ferstenfeld, the always-delightful Kelly Hasandras,
              and a wickedly confounded Robert Matney. Get there and see for
              yourself.
            </p>
          </div>
        </section>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Some of our very favorites
        </h2>
        <ul className="m-0 grid max-w-3xl list-none grid-cols-1 gap-3 p-0 text-lg sm:grid-cols-2 sm:gap-x-10">
          {LOVE_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
