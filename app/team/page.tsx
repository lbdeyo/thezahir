import { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Team | THE ZAHIR",
};

export default function Team() {
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
              The Team
            </h1>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir is a small company with an ambitious mission, guided by
              artists and collaborators who believe deeply in the power of live
              storytelling. Our team brings together creative, organizational,
              and practical experience shaped by years of work in Austin’s arts
              community.
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 mt-8 font-['Baskerville']">
              Staff
            </h2>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              L.B. Deyo, Artistic Director
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 mt-8 font-['Baskerville']">
              Board of Directors
            </h2>
            <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
              L.B. Deyo, President
            </p>
            <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
              Noah Masterson, Treasurer
            </p>
            <p className="text-xl text-black mb-6 font-medium font-['Baskerville']">
              Chad Nichols, Secretary
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
