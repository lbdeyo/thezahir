import { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Love | THE ZAHIR",
  description:
    "Love is at the heart of The Zahir: connection, community, and the stories that bring us back to one another.",
  openGraph: {
    title: "Love | THE ZAHIR",
    description:
      "Love is at the heart of The Zahir: connection, community, and the stories that bring us back to one another.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love | THE ZAHIR",
    description:
      "Love is at the heart of The Zahir: connection, community, and the stories that bring us back to one another.",
  },
};

const LOVE_LINKS: { label: string; href: string }[] = [
  { label: "ATX Theatre", href: "https://www.atxtheatre.org/" },
  { label: "CTX Live Theatre", href: "https://ctxlivetheatre.com/" },
  { label: "Graham Reynolds", href: "https://www.grahamreynolds.com/" },
  { label: "Hyde Park Theatre", href: "https://www.hydeparktheatre.org/" },
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
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
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

        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-8 pt-4 display-heading"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Love
            </h1>
            <section className="max-w-3xl mb-10 font-['Baskerville'] text-black">
              <h2 className="text-2xl sm:text-3xl mb-3 display-heading">
                What we&apos;re watching
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-3">
                Review: <em>The Fire Raisers</em> from{" "}
                <a
                  href="https://hiddenroomtheatre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#490f0f] hover:underline transition-all"
                >
                  The Hidden Room
                </a>
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                If satire is a meal, Max Frisch&apos;s <em>The Fire Eaters</em>{" "}
                is a particularly hot and mouthwatering one. Director Beth Burns
                has taken Frisch&apos;s recipe and cooked up the perfect blend of
                delectability and presentation. The comedy savors of deep absurdist wit,
                the metaphor is irresistible, and the blend of music and light
                create a classical atmosphere. Among the standout performers
                from an outstanding cast were the charming one-man band Michael
                Ferstenfeld, the always-delightful Kelly Hasandras, and a
                wickedly confounded Robert Matney. Get there and see for
                yourself.
              </p>
            </section>
            <h2 className="text-2xl sm:text-3xl mb-4 display-heading text-black">
              Some of our very favorites
            </h2>
            <ul className="m-0 grid max-w-3xl list-none grid-cols-1 gap-3 p-0 font-medium font-['Baskerville'] text-lg text-black sm:grid-cols-2 sm:gap-x-10 sm:text-xl">
              {LOVE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#490f0f] hover:underline transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
