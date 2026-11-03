import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";
import {
  CustomDonation,
  DonationStatusAlert,
  MonthlyMemberships,
  OneTimeDonations,
} from "../components/DonationOptions";

const description =
  "This GivingTuesday, help The Zahir Productions raise $5,000 to bring bold, original theater to Austin.";

export const metadata: Metadata = {
  title: "GivingTuesday | THE ZAHIR",
  description,
  openGraph: {
    title: "GivingTuesday | THE ZAHIR",
    description,
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "GivingTuesday | THE ZAHIR",
    description,
    images: siteTwitterImages,
  },
};

export default function GivingTuesday() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
            Great Theater Begins With You.
          </h1>
          <p className="max-w-3xl text-xl sm:text-2xl font-semibold text-white leading-snug">
            This GivingTuesday, help The Zahir Productions raise $5,000 to
            bring bold, original theater to Austin.
          </p>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mt-8">
            <p>
              At The Zahir, we believe theater should do more than entertain.
              It should surprise you, challenge you, move you, and leave you
              talking long after the curtain falls.
            </p>
            <p>
              We&apos;re building a theater company dedicated to original
              stories, ambitious productions, and unforgettable experiences.
              And we&apos;re just getting started.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Look What We&apos;ve Done Together.
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              In our first year, we&apos;ve brought an exciting range of
              theatrical experiences to Austin audiences.
            </p>
            <p>
              We produced <i>Oversight</i>, a provocative political thriller
              about artificial intelligence and the future of humanity, and{" "}
              <i>THE EGG</i>, an audacious dark comedy that defies easy
              categorization.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <figure>
              <Image
                src="/img/oversight/oversight-pic-new.jpg"
                alt="The cast of Oversight seated around a hearing table"
                width={1080}
                height={566}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-neutral-400">
                <i>Oversight</i>
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/img/the-egg/egg-stage.jpg"
                alt="A scene from THE EGG, with an actor onstage beside an iguana"
                width={1024}
                height={682}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-neutral-400">
                <i>THE EGG</i>
              </figcaption>
            </figure>
          </div>

          <div className="max-w-3xl space-y-5 text-lg text-neutral-300 mt-8">
            <p>
              We presented <i>Zahir Nights</i>, featuring two original short
              plays, and a staged reading of Kirk Wood Bromley&apos;s{" "}
              <i>The American Revolution</i>.
            </p>
            <p>
              Along the way, we&apos;ve earned enthusiastic reviews, award
              nominations, and sold-out performances. We&apos;ve collaborated
              with talented local actors, directors, designers, and technicians
              to bring ambitious new work to the stage.
            </p>
            <p>
              We&apos;re proud to be part of Austin&apos;s extraordinary theater
              community, bringing our own distinctive voice and vision to a
              city that celebrates bold, original work.
            </p>
            <p>Now we want to do more.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Help Us Raise $5,000 This GivingTuesday.
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              On December 1, we&apos;re joining the global GivingTuesday
              movement with a goal of raising $5,000 to support our future
              productions.
            </p>
            <p>Your gift will help us:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Produce original plays</strong>{" "}
                that audiences can&apos;t see anywhere else.
              </li>
              <li>
                <strong className="text-white">Pay local theater artists</strong>{" "}
                for the extraordinary work they do.
              </li>
              <li>
                <strong className="text-white">
                  Create ambitious productions
                </strong>{" "}
                with professional sets, costumes, lighting, and sound.
              </li>
              <li>
                <strong className="text-white">
                  Keep ticket prices accessible
                </strong>{" "}
                so more people can experience live theater.
              </li>
            </ul>
            <p>
              Every contribution, large or small, helps us put more
              extraordinary work onstage.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Be Part of What&apos;s Next.
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              Our next chapter is already taking shape, with new plays, new
              collaborations, and even bigger ambitions.
            </p>
            <p>
              The Zahir is an independent nonprofit theater company. What we
              have is a growing community of artists and audiences who believe
              that original theater matters.
            </p>
            <p>And with your help, we can keep making it.</p>
            <p className="font-bold text-white">
              Give $25. Give $50. Give $100. Give whatever you can.
            </p>
            <p>Help us reach $5,000 this GivingTuesday.</p>
          </div>

          <div className="mt-12">
            <OneTimeDonations returnPath="/giving-tuesday" />
            <CustomDonation returnPath="/giving-tuesday" />
            <MonthlyMemberships returnPath="/giving-tuesday" />
          </div>

          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p className="text-base italic text-neutral-400">
              The Zahir Productions is a 501(c)(3) nonprofit organization.
              Contributions are tax-deductible to the extent allowed by law.
            </p>
            <p className="font-bold text-white">
              Thank you for believing in original theater.
            </p>
          </div>
          <Suspense fallback={null}>
            <DonationStatusAlert />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
