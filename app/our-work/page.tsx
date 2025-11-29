import { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Our Work | THE ZAHIR",
};

export default function OurWork() {
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
            <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']" style={{ fontWeight: 800, fontStyle: 'normal' }}>
              Our Work
            </h1>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir creates original theater, film, and storytelling
              projects designed to spark conversation in an age that often
              discourages it. We focus on new work—bold, intimate, and alive to
              the anxieties and possibilities of modern life.
            </p>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              Our projects begin with a simple belief: that stories can pull
              people back into the world. At a time when screens and feeds
              narrow our attention, we make work that widens it. Our productions
              invite audiences to gather, sit together in the dark, and
              experience something shared—something that lingers long after the
              final moment.
            </p>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              As a newly founded company, we are actively developing our first
              slate of productions. These include original plays, short films,
              and mixed-media storytelling experiments that explore connection,
              perception, and the strangeness of being alive right now. Each
              project aims to provoke reflection, curiosity, and real
              conversation—not just among audiences, but among collaborators and
              communities.
            </p>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              Upcoming announcements will appear here as we grow. We invite you
              to follow along as The Zahir&apos;s inaugural work takes shape.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
