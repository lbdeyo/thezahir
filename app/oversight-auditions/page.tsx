import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Oversight Auditions | THE ZAHIR",
  description:
    "Audition information for Oversight, The Zahir’s inaugural production—a political and psychological thriller by L.B. Deyo.",
  openGraph: {
    title: "Oversight Auditions | THE ZAHIR",
    description:
      "Audition information for Oversight, The Zahir’s inaugural production—a political and psychological thriller by L.B. Deyo.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Oversight Auditions | THE ZAHIR",
    description:
      "Audition information for Oversight, The Zahir’s inaugural production—a political and psychological thriller by L.B. Deyo.",
    images: siteTwitterImages,
  },
};

export default function OversightAuditionsPage() {
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
              Oversight Auditions
            </h1>

            <div className="max-w-3xl flow-root font-['Baskerville'] text-black text-lg sm:text-xl leading-relaxed">
              <div className="mx-auto mb-4 max-w-xs sm:mx-0 sm:mb-2 sm:ml-4 sm:float-right sm:max-w-sm">
                <a
                  href="https://oversight-play.com"
                  className="block rounded overflow-hidden hover:opacity-95 transition-opacity"
                  aria-label="Oversight — The new play from The Zahir, July 30–August 22, 2026"
                >
                  <Image
                    src="/img/oversight/Oversight-dates-30.jpg"
                    alt="Oversight — The new play from The Zahir, July 30–August 22, 2026"
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </a>
              </div>
              <p className="mb-6">
                The Zahir is casting{" "}
                <Link
                  href="https://oversight-play.com"
                  className="text-[#490f0f] hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em>Oversight</em>
                </Link>
                , a tense political and psychological thriller by L.B. Deyo.
                Rehearsals run June 29-July 29, 2026. Production runs{" "}
                <strong>July 30-August 22, 2026</strong> at Hyde Park Theatre in
                Austin.
              </p>
              <h2 className="mb-4 text-2xl sm:text-4xl lg:text-5xl display-heading">
                Open Roles
              </h2>
              <ul className="mb-6 list-disc list-outside marker:text-black pl-6 sm:pl-7 space-y-4">
                <li>
                  <strong>General Stossen</strong> (60s). Chairman of the Joint
                  Chiefs. Gruff, blunt, and pragmatic.{" "}
                  <a
                    className="text-[#490f0f] hover:underline transition-all font-bold"
                    href="/docs/oversight-stossen-sides.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download sides
                  </a>
                  .
                </li>
                <li>
                  <strong>Ofelia Cromwell</strong> (Female, 40s-70s). The
                  stenographer. Patriotic and proud of her long service.{" "}
                  <a
                    className="text-[#490f0f] hover:underline transition-all font-bold"
                    href="/docs/oversight-ofelia-cromwell-sides.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download sides
                  </a>
                  .
                </li>
              </ul>
              <h2 className="mb-4 text-2xl sm:text-4xl lg:text-5xl display-heading">
                Instructions
              </h2>
              <p className="mb-6">
                Please submit a video audition, using the highlighted portions
                of the sides, to{" "}
                <a
                  href="mailto:lb@the-zahir.org"
                  className="text-[#490f0f] hover:underline transition-all font-bold"
                >
                  lb@the-zahir.org
                </a>
                . Please include a headshot and resume.
              </p>
              <p>
                For general questions in the meantime, please reach out through
                our{" "}
                <Link
                  href="/contact"
                  className="text-[#490f0f] hover:underline transition-all"
                >
                  contact page
                </Link>
                . More about the play is at{" "}
                <a
                  href="https://oversight-play.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#490f0f] hover:underline transition-all"
                >
                  Oversight-Play.com
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
