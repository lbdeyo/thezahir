import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | THE ZAHIR",
};

export default function Support() {
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
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Why We Exist
            </h1>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir creates bold, intelligent, conversation-driven theater
              and storytelling in Austin. In a culture that often discourages
              real dialogue, we make work that brings people together—stories
              that challenge certainty, ignite curiosity, and linger long after
              the lights go down.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Zahir Artistic Director L.B. Deyo&apos;s debut play{" "}
              <i>Apprehension</i> premiered at Hyde Park Theatre to sold-out
              audiences and critical praise. Building on that momentum, we are
              developing a slate of new work that includes <i>Oversight</i>, a
              remount of <i>Apprehension</i>, microdramas, workshops, and public
              conversations.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              We believe stories matter. Especially now.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Why Your Support Matters Now
            </h2>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir is at a turning point. After a successful first
              production, we are laying the foundation that will shape the next
              decade of our work. Early support allows us to:
            </p>
            <ul className="text-2xl text-black mb-6 font-medium font-['Baskerville'] list-disc list-inside space-y-2">
              <li>Develop new plays</li>
              <li>Pay actors and artists fairly</li>
              <li>Secure rehearsal and performance space</li>
              <li>Fund workshops and readings</li>
              <li>
                Build the infrastructure of a sustainable arts organization
              </li>
            </ul>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              This is the moment when a new company either takes root or fades
              away. Your gift helps ensure The Zahir becomes a lasting cultural
              home in Austin.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              What You Help Us Create
            </h2>

            <h3 className="text-2xl sm:text-3xl text-black mb-3 mt-6 font-semibold font-['Baskerville']">
              New Plays & Productions
            </h3>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Including Oversight, a fast-paced political thriller about AI and
              national security, and a full remount of Apprehension.
            </p>

            <h3 className="text-2xl sm:text-3xl text-black mb-3 mt-6 font-semibold font-['Baskerville']">
              Readings & Workshops
            </h3>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Critical early development that shapes our plays and supports
              collaboration.
            </p>

            <h3 className="text-2xl sm:text-3xl text-black mb-3 mt-6 font-semibold font-['Baskerville']">
              Microdramas & Digital Storytelling
            </h3>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Short-form experiments that expand how theater reaches audiences.
            </p>

            <h3 className="text-2xl sm:text-3xl text-black mb-3 mt-6 font-semibold font-['Baskerville']">
              Public Conversations
            </h3>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Talks, podcast episodes, and events that extend the ideas behind
              our work and invite people into the conversation.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Your Impact
            </h2>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Every contribution makes a tangible difference.
            </p>
            <ul className="text-2xl text-black mb-6 font-medium font-['Baskerville'] list-disc list-inside space-y-2">
              <li>$25 — Scripts, printing, production materials</li>
              <li>$100 — Supports an actor for one rehearsal</li>
              <li>$250 — Funds a table reading or development session</li>
              <li>$500 — Pays for a week of rehearsal space</li>
              <li>$1,000 — Supports a staged reading or workshop</li>
              <li>
                $2,500+ — Helps produce a full production or develop a new play
              </li>
            </ul>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Your support fuels bold new storytelling and strengthens
              Austin&apos;s arts community.
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-black mb-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Join Us
            </h2>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              Supporting The Zahir means helping build a creative home where
              artists and audiences come together to think more deeply, feel
              more fully, and engage with stories that matter.
            </p>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              If you believe in the power of thoughtful, daring theater, we
              invite you to stand with us as we build The Zahir&apos;s future.
            </p>
            <div className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              <Link
                href="/donate"
                className="font-bold hover:underline transition-all text-[#490f0f]"
              >
                → Donate to The Zahir
              </Link>
            </div>
            <div className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              <Link
                href="/founding-donors-circle"
                className="font-bold hover:underline transition-all text-[#490f0f]"
              >
                → Join the Founding Donors Circle
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
