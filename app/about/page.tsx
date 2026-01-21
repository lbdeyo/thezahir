import { Metadata } from "next";
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
    images: [
      {
        url: "/img/og/about-og.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | THE ZAHIR",
    description:
      "In Jorge Luis Borges's short story The Zahir, an ordinary object becomes an overwhelming force—a metaphor for obsession, attention, and the narrowing of the human world.",
    images: ["/img/og/about-og.jpg"],
  },
};

export default function About() {
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
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 display-heading"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              About The Zahir
            </h1>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              In Jorge Luis Borges&apos;s short story{" "}
              <a
                href="https://sffaudiomediacan.s3.amazonaws.com/pdfs/TheZahirByJorgeLuisBorgesTranslatedByDudleyFitts.pdf"
                className="font-bold hover:underline transition-all text-[#490f0f]"
              >
                <i>The Zahir</i>
              </a>
              , an ordinary object becomes an overwhelming force—captivating,
              dazzling, and ultimately consuming. The more one contemplates it,
              the smaller the universe becomes. It is a metaphor for obsession,
              attention, and the narrowing of the human world.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              We chose the name because each of us confronts a modern Zahir: the
              screens, feeds, and digital currents that demand our attention
              while quietly shrinking our sense of one another. In an age
              defined by noise, loneliness, and misinformation, the act of
              gathering for a story has become radical.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir was founded to counter that contraction. Through
              theater, film, and other dramatic arts, we strive to break the
              spell—to create work that draws people back into the present, back
              into community, and back into conversation. We believe that
              storytelling is still one of the most powerful tools for widening
              perception and renewing human connection.
            </p>
            <p className="text-2xl text-black mb-6 font-bold font-['Baskerville']">
              The Zahir's mission is to create obsession-worthy theater that
              draws people out of isolation and back into conversation.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              We are committed to producing original work, paying artists
              fairly, and building a sustainable creative home in Austin. Though
              newly formed, our vision is long-term: to become a place where
              artists can take risks, audiences can wrestle with new ideas, and
              everyone involved can feel a little less alone.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              This is the beginning of that work.
            </p>
            <div className="w-full mb-6">
              <Image
                src="/img/borges.jpg"
                alt="Jorge Luis Borges"
                width={1200}
                height={1200}
                className="w-full h-auto object-cover rounded"
                priority
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
