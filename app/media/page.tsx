import type { Metadata } from "next";
import Link from "next/link";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Media | THE ZAHIR",
  description:
    "Media contact, press coverage, awards, videos, and electronic press kits for The Zahir.",
  openGraph: {
    title: "Media | THE ZAHIR",
    description:
      "Media contact, press coverage, awards, videos, and electronic press kits for The Zahir.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Media | THE ZAHIR",
    description:
      "Media contact, press coverage, awards, videos, and electronic press kits for The Zahir.",
    images: siteTwitterImages,
  },
};

type PressItem = {
  title: string;
  outlet: string;
  href: string;
  blurb: string;
  via?: string;
  quoted?: boolean;
};

const pressGroups: {
  heading: string;
  italic?: boolean;
  note?: string;
  year: string;
  items: PressItem[];
}[] = [
  {
    heading: "Oversight",
    italic: true,
    note: "The Zahir",
    year: "2026",
    items: [
      {
        title: "Review #3 of 3: OVERSIGHT by LB Deyo, The Zahir",
        outlet: "CTX Live Theatre",
        href: "https://ctxlivetheatre.com/reviews/20260814-review-3-of-3-oversight-by-lb-deyo-the-za/",
        blurb:
          "The company couldn’t have hoped for a more powerful and engrossing debut.",
      },
      {
        title: "Review #2 of 3: Oversight by The Zahir",
        outlet: "CTX Live Theatre",
        href: "https://www.ctxlivetheatre.com/reviews/20260810-review-2-of-3-oversight-by-the-zahir/",
        blurb:
          "Expectations soared for Oversight, and the audiences crowding Hyde Park Theatre have not been disappointed.",
      },
      {
        title: "Review #1 of 3: Oversight by LB Deyo, The Zahir",
        outlet: "CTX Live Theatre",
        href: "https://ctxlivetheatre.com/reviews/20260807-review-1-of-3-oversight-by-lb-deyo-the-za/",
        blurb:
          "Deyo’s extremely well-crafted script tantalizes by revealing the topic of this urgent consultation slowly and stepwise, knotting the plot twists about us.",
      },
      {
        title: "Review: OVERSIGHT at Hyde Park Theatre",
        outlet: "BroadwayWorld",
        href: "https://www.broadwayworld.com/austin/article/Review-OVERSIGHT-at-Hyde-Park-Theatre-20260801",
        blurb:
          "A timely and thought-provoking new work that lingers long after the hearing has ended.",
      },
      {
        title: "Oversight: Who Should Decide AI’s Future?",
        outlet: "Sun News Austin",
        href: "https://sunnewsaustin.com/2026/07/31/oversight-who-should-decide-ais-future/",
        blurb:
          "Philosophical, political, deeply human and unnervingly timely… an ambitious and provocative and well written work that lingers long after the curtain falls.",
      },
      {
        title: "Michael Barnes on Oversight",
        outlet: "Austin American-Statesman",
        href: "https://www.facebook.com/share/p/1BS2Qyk9fk/",
        via: "Facebook",
        blurb:
          "OVERSIGHT is an impeccable intellectual thriller given an impeccable staging by The Zahir at Hyde Park Theatre. Everybody in America should see it.",
      },
    ],
  },
  {
    heading: "Apprehension",
    italic: true,
    note: "Holi Shamoli Productions",
    year: "2025",
    items: [
      {
        title: "Review: APPREHENSION by L.B. Deyo, Holi Shamoli Productions, Austin",
        outlet: "CTX Live Theatre",
        href: "https://ctxlivetheatre.com/reviews/20251030-review-apprehension-by-lb-deyo-holi-shamo/",
        blurb:
          "In a world obsessed with remakes and reboots, Apprehension stands out as an authentically original work.",
      },
      {
        title: "Missing Thread: Apprehension",
        outlet: "Sun News Austin",
        href: "https://sunnewsaustin.com/2025/10/13/missing-thread-apprehension/",
        quoted: false,
        blurb:
          "A psychological thriller about a man unraveling in real time, whose grasp on reality wavers as the people around him may or may not be who they seem.",
      },
      {
        title:
          "Apprehension is a psychological thriller that’s also kind of a dark comedy",
        outlet: "KUT",
        href: "https://www.kut.org/life-arts/2025-09-29/thats-one-of-the-most-intense-kinds-of-anxiety-apprehension-is-a-psychological-thriller-thats-also-kind-of-a-dark-comedy",
        quoted: false,
        blurb:
          "Playwright L.B. Deyo and producer Christopher Shea talk about paranoia, anxiety, and the making of Deyo’s first script.",
      },
      {
        title: "Interview with L.B. Deyo, Playwright, about APPREHENSION",
        outlet: "CTX Live Theatre",
        href: "https://ctxlivetheatre.com/news/20250929-interview-with-lb-deyo-playwright-about-a/",
        blurb: "Absolutely taut… Like Sartre on speed.",
      },
    ],
  },
];

const kits: {
  title: string;
  italic?: boolean;
  author: string;
  href: string;
}[] = [
  {
    title: "Apprehension",
    italic: true,
    author: "L.B. Deyo",
    href: "/docs/apprehension-epk.pdf",
  },
  {
    title: "Oversight",
    italic: true,
    author: "L.B. Deyo",
    href: "/docs/oversight-epk.pdf",
  },
  {
    title: "THE EGG",
    author: "Noah Masterson",
    href: "/docs/the-egg-epk.pdf",
  },
];

const forthcomingKits = [
  { title: "The American Revolution", author: "Kirk Wood Bromley" },
  { title: "The Minotaur", author: "L.B. Deyo" },
];

const videos = [
  {
    title: "Oversight — promo",
    credit: "Directed by Eric Graham",
    src: "https://www.youtube.com/embed/qSPlg1qkSA4",
  },
  {
    title: "THE EGG — campaign announcement",
    credit: "By Noah Masterson",
    src: "https://www.youtube.com/embed/e5HnMOaWHGc",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6ad06] whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px flex-1 bg-[#e6ad06]/40" />
    </div>
  );
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Media
        </h1>

        <section className="mb-16">
          <SectionLabel>Media contact</SectionLabel>
          <div className="max-w-3xl text-lg text-neutral-300 space-y-1">
            <p className="text-white font-semibold">L.B. Deyo</p>
            <p>Artistic Director</p>
            <p>
              <a
                href="mailto:lb@the-zahir.org"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                lb@the-zahir.org
              </a>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <SectionLabel>Press highlights</SectionLabel>
          <div className="space-y-12 max-w-3xl">
            {pressGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                  {group.italic ? <i>{group.heading}</i> : group.heading}
                </h3>
                {group.note ? (
                  <p className="text-neutral-400 mb-4">{group.note}</p>
                ) : (
                  <div className="mb-4" />
                )}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  {group.year}
                </p>
                <ul className="space-y-8 text-lg text-neutral-300">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#e6ad06] hover:underline"
                      >
                        &ldquo;{item.title}&rdquo;
                      </a>{" "}
                      ({item.outlet}
                      {item.via ? `, ${item.via}` : null})
                      <p className="mt-2 text-base italic leading-relaxed text-neutral-400">
                        {item.quoted === false
                          ? item.blurb
                          : `\u201C${item.blurb}\u201D`}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionLabel>Awards</SectionLabel>
          <div className="max-w-3xl text-lg text-neutral-300 space-y-5">
            <p>
              Outstanding Original Script,{" "}
              <a
                href="https://www.austinchronicle.com/arts/the-winners-of-the-2025-2026-austin-theatre-critics-awards/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                Austin Theatre Critics Awards 2025–2026
              </a>
              : <i>Apprehension</i> by L.B. Deyo (Holi Shamoli Productions).
            </p>
          </div>
        </section>

        <section className="mb-16">
          <SectionLabel>Electronic press kits</SectionLabel>
          <p className="text-lg text-neutral-300 mb-8 max-w-3xl">
            Synopses, photos, and additional materials. For production rights,
            see{" "}
            <Link
              href="/licensing"
              className="font-semibold text-[#e6ad06] hover:underline"
            >
              Licensing
            </Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {kits.map((kit) => (
              <article
                key={kit.title}
                className="rounded-lg border border-white/10 bg-black p-6 sm:p-8"
              >
                <h3 className="text-2xl font-bold tracking-tight mb-1">
                  {kit.italic ? <i>{kit.title}</i> : kit.title}
                </h3>
                <p className="text-neutral-400 mb-5">By {kit.author}</p>
                <a
                  href={kit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors"
                >
                  Download EPK
                </a>
              </article>
            ))}
          </div>
          <ul className="max-w-3xl space-y-3 text-lg text-neutral-300">
            {forthcomingKits.map((kit) => (
              <li key={kit.title}>
                <i>{kit.title}</i> by {kit.author}{" "}
                <span className="text-neutral-500">— coming soon</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <SectionLabel>Video</SectionLabel>
          <div className="grid grid-cols-1 gap-8">
            {videos.map((video) => (
              <article key={video.src}>
                <h3 className="text-2xl font-bold tracking-tight mb-1">
                  {video.title}
                </h3>
                <p className="text-neutral-400 mb-4">{video.credit}</p>
                <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>About The Zahir</SectionLabel>
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
              increasingly disconnected world.
            </p>
            <p className="font-bold text-white">
              Mission: To create obsession-worthy theater that draws people out
              of isolation and back into conversation.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
