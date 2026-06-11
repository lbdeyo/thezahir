import { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";
import Navigation from "../components/Navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | THE ZAHIR",
  description:
    "The Zahir creates bold, intelligent, conversation-driven theater and storytelling in Austin—and your support helps this new company take root and thrive.",
  openGraph: {
    title: "Support | THE ZAHIR",
    description:
      "The Zahir creates bold, intelligent, conversation-driven theater and storytelling in Austin—and your support helps this new company take root and thrive.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Support | THE ZAHIR",
    description:
      "The Zahir creates bold, intelligent, conversation-driven theater and storytelling in Austin—and your support helps this new company take root and thrive.",
    images: siteTwitterImages,
  },
};

export default function Support() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Why We Exist
          </h1>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              The Zahir creates bold, intelligent, conversation-driven theater
              and storytelling in Austin. In a culture that often discourages
              real dialogue, we make work that brings people together—stories
              that challenge certainty, ignite curiosity, and linger long after
              the lights go down.
            </p>
            <p>
              Zahir Artistic Director L.B. Deyo&apos;s debut play{" "}
              <i>Apprehension</i> premiered at Hyde Park Theatre to sold-out
              audiences and critical praise. Building on that momentum, we are
              developing a slate of new work that includes <i>Oversight</i>, a
              remount of <i>Apprehension</i>, microdramas, workshops, and public
              conversations.
            </p>
            <p>We believe stories matter. Especially now.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Why Your Support Matters Now
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              The Zahir is at a turning point. After a successful first
              production, we are laying the foundation that will shape the next
              decade of our work. Early support allows us to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Develop new plays</li>
              <li>Pay actors and artists fairly</li>
              <li>Secure rehearsal and performance space</li>
              <li>Fund workshops and readings</li>
              <li>
                Build the infrastructure of a sustainable arts organization
              </li>
            </ul>
            <p>
              This is the moment when a new company either takes root or fades
              away. Your gift helps ensure The Zahir becomes a lasting cultural
              home in Austin.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            What You Help Us Create
          </h2>

          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-3 mt-6">
              New Plays & Productions
            </h3>
            <p className="text-lg text-neutral-300 mb-5">
              Including <i>Oversight</i>, a fast-paced political thriller about
              AI and national security, and a full remount of{" "}
              <i>Apprehension</i>.
            </p>

            <h3 className="text-2xl font-bold text-white mb-3 mt-6">
              Readings & Workshops
            </h3>
            <p className="text-lg text-neutral-300 mb-5">
              Critical early development that shapes our plays and supports
              collaboration.
            </p>

            <h3 className="text-2xl font-bold text-white mb-3 mt-6">
              Microdramas & Digital Storytelling
            </h3>
            <p className="text-lg text-neutral-300 mb-5">
              Short-form experiments that expand how theater reaches audiences.
            </p>

            <h3 className="text-2xl font-bold text-white mb-3 mt-6">
              Public Conversations
            </h3>
            <p className="text-lg text-neutral-300 mb-5">
              Talks, podcast episodes, and events that extend the ideas behind
              our work and invite people into the conversation.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Your Impact
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>Every contribution makes a tangible difference.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>$25 Scripts, printing, production materials</li>
              <li>$100 Supports an actor for one rehearsal</li>
              <li>$250 Funds a table reading or development session</li>
              <li>$500 Pays for a week of rehearsal space</li>
              <li>$1,000 Supports a staged reading or workshop</li>
              <li>
                $2,500+ Helps produce a full production or develop a new play
              </li>
            </ul>
            <p>
              Your support fuels bold new storytelling and strengthens
              Austin&apos;s arts community.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Join Us
          </h2>
          <div className="max-w-3xl space-y-5 text-lg text-neutral-300">
            <p>
              Supporting The Zahir means helping build a creative home where
              artists and audiences come together to think more deeply, feel
              more fully, and engage with stories that matter.
            </p>
            <p>
              If you believe in the power of thoughtful, daring theater, we
              invite you to stand with us as we build The Zahir&apos;s future.
            </p>
            <div className="text-lg">
              <Link
                href="/donate"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                → Donate to The Zahir
              </Link>
            </div>
            <div className="text-lg">
              <Link
                href="/donate#founding-donors-circle"
                className="font-semibold text-[#e6ad06] hover:underline"
              >
                → Join the Founding Donors Circle
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
