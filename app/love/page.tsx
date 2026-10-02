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
  { label: "Austin Playhouse", href: "https://www.austinplayhouse.com/" },
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
  {
    label: "Summer Break Theatre",
    href: "https://www.summerbreaktheatre.com/productions",
  },
  { label: "TALA", href: "https://talarts.org/" },
  { label: "to the stage!", href: "https://tothestage.substack.com/" },
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
              Review: <em>The Making of a Great Moment</em>
            </p>
            <p>
              Mixing the right cast and crew with the right script can be a
              little like pairing nitric acid with glycerine. This month at{" "}
              <a
                href="https://www.hydeparktheatre.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Hyde Park Theatre
              </a>
              , Lee Eddy and Jeff Mills are performing Peter Sinn
              Nachtrieb&apos;s <em>The Making of a Great Moment</em>, and the
              resulting detonation can be heard and felt for many miles in
              every direction. Get ready to laugh so hard you can&apos;t
              breathe.
            </p>
          </div>
          <div className="mb-10 space-y-5 text-lg text-neutral-300">
            <p>
              Review: <em>She Kills Monsters</em>, by Qui Nguyen (
              <a
                href="https://www.stedwards.edu/academics/centers-institutes-arts/mary-moody-northen-theatre"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Mary Moody Northen Theatre
              </a>
              )
            </p>
            <p>
              What a delight. Marcus McQuirter directs St. Edward&apos;s student
              actors through this fast-paced and delicious work of highbrow
              geekery about grief, coming of age, and the healing power of
              Dungeons and Dragons. With standout performances from the two
              leads (Victoria Turner and Harper Schreiner-Brown) and from a
              stellar supporting cast (especially Aldo Hernandez Huerta as the
              horny and lazy demon Orcus) this show had audiences cheering and
              clapping from start to finish. The props, lights, costumes,
              puppets, and fight choreography further elevated{" "}
              <em>Monsters</em> into an over-the-top spectacle with a ridiculous
              B-movie vibe (complete with a post-credits scene). Loved it!
            </p>
          </div>
          <div className="mb-10 space-y-5 text-lg text-neutral-300">
            <p>
              Review: <em>Seared</em> by Theresa Rebeck (
              <a
                href="https://www.austinplayhouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Austin Playhouse
              </a>
              )
            </p>
            <p>
              Funny, tense, fast-moving and sharply written, <em>Seared</em> is
              a thoroughly entertaining delight. The performances are
              outstanding, the direction is expert, and the fact that
              they&apos;re cooking onstage adds a multisensory layer of fun.
              Don&apos;t miss it. It runs through June 28th at Austin Playhouse.
            </p>
          </div>
          <div className="space-y-5 text-lg text-neutral-300">
            <p>
              Review: <em>Wakey, Wakey</em> by Will Eno (
              <a
                href="https://www.hydeparktheatre.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Hyde Park Theatre
              </a>
              )
            </p>
            <p>
              It&apos;s one thing to entertain an audience. It&apos;s something
              else to mesmerize them, to transport them into a quasi-mystical
              state. Will Eno&apos;s script was the perfect complement to the
              gently bold performance of the great Ken Webster. And Rebecca
              Robinson, as always, was irresistible. This run is over, but if
              we&apos;re all very pushy we can make them bring it back again in
              the future.
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
