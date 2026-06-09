import type { Metadata } from "next";
import Image from "next/image";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "The American Revolution | THE ZAHIR",
  description:
    "Zahir Nights presents a staged reading of The American Revolution, a verse play by Kirk Wood Bromley—Sunday, Nov. 1 at the French Legation in Austin. Free admission.",
  openGraph: {
    title: "The American Revolution | THE ZAHIR",
    description:
      "Zahir Nights presents a staged reading of The American Revolution, a verse play by Kirk Wood Bromley—Sunday, Nov. 1 at the French Legation in Austin. Free admission.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "The American Revolution | THE ZAHIR",
    description:
      "Zahir Nights presents a staged reading of The American Revolution, a verse play by Kirk Wood Bromley—Sunday, Nov. 1 at the French Legation in Austin. Free admission.",
    images: siteTwitterImages,
  },
};

export default function AmericanRevolutionPage() {
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
          />
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
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.95)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] text-black mb-4 pt-4 display-heading"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              The American Revolution
            </h1>

            <div className="max-w-3xl font-['Baskerville'] text-black text-lg sm:text-xl leading-relaxed">
              <div className="bg-black text-[#ada173] p-6 rounded-lg mb-8">
                <div className="mb-4 flex justify-center sm:justify-start">
                  <Image
                    src="/img/zahir-nights/zahir-nights-logo.jpg"
                    alt="The Zahir Nights"
                    width={1000}
                    height={1000}
                    unoptimized
                    className="w-2/3 sm:w-1/2 max-w-full h-auto object-cover rounded overflow-hidden"
                  />
                </div>
                <p className="text-xl sm:text-2xl font-medium mb-4">
                  Zahir Nights
                </p>
                <p className="text-2xl sm:text-3xl font-medium mb-4">
                  Staged reading of <i>The American Revolution</i>
                  <br />
                  by Kirk Wood Bromley
                </p>
                <p className="text-xl sm:text-2xl font-medium mb-4">
                  <strong>Sunday, Nov. 1 at 5:30 p.m.</strong> (Rain date: Nov.
                  2)
                  <br />
                  French Legation State Historical Site
                  <br />
                  802 San Marcos Street
                  <br />
                  Austin, TX 78702
                  <br />
                  Parking lot located at 900 East 9th Street
                  <br />
                  <a
                    href="tel:737-226-1454"
                    className="font-bold hover:underline transition-all text-[#E6AD06]"
                  >
                    737-226-1454
                  </a>
                </p>
                <p className="text-xl sm:text-2xl font-medium">
                  Admission: Free (suggested donation)
                </p>
              </div>

              <h2 className="mb-4 text-2xl sm:text-4xl lg:text-5xl display-heading">
                About the Play
              </h2>
              <p className="mb-8">
                The Zahir presents <i>The American Revolution</i>, a verse play
                by Kirk Wood Bromley. Join this hilarious and historical
                patriotic parade that follows General George Washington on his
                quest to defeat the British Empire and secure independence.
                Along the way, he confronts Redcoats, Tories, Hessian
                mercenaries, mutinying generals, a bankrupt Congress, spies,
                and Benedict Arnold. He is joined by the world&apos;s most
                incompetent and endearing troop of new recruits: The Rebel
                Mess. These rambunctious Yankees tumble through the colonies
                chasing freedom, dodging bullets, making song, and discovering
                what it means to be an American.
              </p>

              <h2 className="mb-4 text-2xl sm:text-4xl lg:text-5xl display-heading">
                About the Playwright
              </h2>
              <p className="mb-8">
                Kirk Wood Bromley, aka &ldquo;Shakespeare on mushrooms&rdquo;
                (LA Weekly) and &ldquo;the beloved bard of downtown
                theater&rdquo; (The New Yorker), has been writing verse plays
                since 1990, and in that time his work has been produced by
                Aaron Beall (Nada, NYC), Ben Yalom (FoolsFury, SF), Bad Epitaph
                (Cleveland), Sacred Fools (LA), Wesleyan, Kenyon, Mizzou,
                Inverse Theater (of which he is Artistic Director), and more.
                Bromley and/or Inverse have won numerous awards, including Best
                Downtown Theater Company (NY Press 2001), the Berrilla Kerr
                Foundation Playwriting Award (2001), three NY Fringe Festival
                Excellence Awards (2002, 2003, 2009), and the first Caffe Cino
                Award (NY Innovative Theatre Awards 2005). While he has been
                compared to Shakespeare (NY Magazine, Time Out NY,
                OffOffOff.com, the Cleveland Scene), Stoppard (The Village
                Voice), and Van Gogh (NYTheatre.com), his writing &ldquo;speaks
                directly to its audience&apos;s concerns and in its
                dialect&rdquo; (American Theatre Magazine). More about him, his
                theater company, and his band (The Good Hard) can be found at{" "}
                <a
                  href="https://kirkwoodbromley.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#490f0f] hover:underline transition-all font-bold"
                >
                  kirkwoodbromley.com
                </a>
                .
              </p>

              <h2 className="mb-4 text-2xl sm:text-4xl lg:text-5xl display-heading">
                About the French Legation
              </h2>
              <p className="mb-8">
                One of the oldest houses in Austin, the French Legation opened
                in 1841 as a home and diplomatic outpost for the French
                charg&eacute; d&apos;affaires to the Republic of Texas,
                Alphonse Dubois, after France recognized the Republic of Texas
                as a sovereign nation. The site tells the story of Texas&apos;
                settlement and the growth of one of the capital city&apos;s
                most vibrant neighborhoods.
              </p>

              <h2 className="mb-4 text-2xl sm:text-4xl lg:text-5xl display-heading">
                About The Zahir
              </h2>
              <p>
                Led by artistic director and award-winning playwright L.B.
                Deyo, The Zahir&apos;s mission is to create obsession-worthy
                theater that draws people out of isolation and back into
                conversation. Learn more at{" "}
                <a
                  href="https://the-zahir.org"
                  className="text-[#490f0f] hover:underline transition-all font-bold"
                >
                  the-zahir.org
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
