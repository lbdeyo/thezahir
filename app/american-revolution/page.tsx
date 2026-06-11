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
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          The American Revolution
        </h1>

        <div className="max-w-3xl text-lg text-neutral-300">
          <div className="rounded-lg border border-white/10 bg-black p-6 mb-8">
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
            <p className="text-lg font-semibold text-white mb-4">
              Zahir Nights
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white mb-4">
              Staged reading of <i>The American Revolution</i>
              <br />
              by Kirk Wood Bromley
            </p>
            <p className="text-neutral-300 mb-4">
              <strong className="text-white">
                Sunday, Nov. 1 at 5:30 p.m.
              </strong>{" "}
              (Rain date: Nov. 2)
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
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                737-226-1454
              </a>
            </p>
            <p className="text-neutral-300">
              Admission: Free (suggested donation)
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About the Play
          </h2>
          <p className="mb-8">
            The Zahir presents <i>The American Revolution</i>, a verse play by
            Kirk Wood Bromley. Join this hilarious and historical patriotic
            parade that follows General George Washington on his quest to defeat
            the British Empire and secure independence. Along the way, he
            confronts Redcoats, Tories, Hessian mercenaries, mutinying generals,
            a bankrupt Congress, spies, and Benedict Arnold. He is joined by the
            world&apos;s most incompetent and endearing troop of new recruits:
            The Rebel Mess. These rambunctious Yankees tumble through the
            colonies chasing freedom, dodging bullets, making song, and
            discovering what it means to be an American.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About the Playwright
          </h2>
          <p className="mb-8">
            Kirk Wood Bromley, aka &ldquo;Shakespeare on mushrooms&rdquo; (LA
            Weekly) and &ldquo;the beloved bard of downtown theater&rdquo; (The
            New Yorker), has been writing verse plays since 1990, and in that
            time his work has been produced by Aaron Beall (Nada, NYC), Ben
            Yalom (FoolsFury, SF), Bad Epitaph (Cleveland), Sacred Fools (LA),
            Wesleyan, Kenyon, Mizzou, Inverse Theater (of which he is Artistic
            Director), and more. Bromley and/or Inverse have won numerous
            awards, including Best Downtown Theater Company (NY Press 2001), the
            Berrilla Kerr Foundation Playwriting Award (2001), three NY Fringe
            Festival Excellence Awards (2002, 2003, 2009), and the first Caffe
            Cino Award (NY Innovative Theatre Awards 2005). While he has been
            compared to Shakespeare (NY Magazine, Time Out NY, OffOffOff.com,
            the Cleveland Scene), Stoppard (The Village Voice), and Van Gogh
            (NYTheatre.com), his writing &ldquo;speaks directly to its
            audience&apos;s concerns and in its dialect&rdquo; (American Theatre
            Magazine). More about him, his theater company, and his band (The
            Good Hard) can be found at{" "}
            <a
              href="https://kirkwoodbromley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#e6ad06] hover:underline"
            >
              kirkwoodbromley.com
            </a>
            .
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About the French Legation
          </h2>
          <p className="mb-8">
            One of the oldest houses in Austin, the French Legation opened in
            1841 as a home and diplomatic outpost for the French charg&eacute;
            d&apos;affaires to the Republic of Texas, Alphonse Dubois, after
            France recognized the Republic of Texas as a sovereign nation. The
            site tells the story of Texas&apos; settlement and the growth of one
            of the capital city&apos;s most vibrant neighborhoods.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About The Zahir
          </h2>
          <p>
            Led by artistic director and award-winning playwright L.B. Deyo, The
            Zahir&apos;s mission is to create obsession-worthy theater that
            draws people out of isolation and back into conversation. Learn more
            at{" "}
            <a
              href="https://the-zahir.org"
              className="font-semibold text-[#e6ad06] hover:underline"
            >
              the-zahir.org
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
