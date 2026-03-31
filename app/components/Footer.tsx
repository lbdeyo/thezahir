import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="px-4 sm:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="min-w-0 flex-1">
              <p className="text-[#ada173] font-['Baskerville'] text-base text-left">
                © {new Date().getFullYear()} The Zahir. Original theater, film,
                and storytelling. The Zahir Productions is a 501(c)(3) tax-exempt
                organization. EIN: 41-2685482
              </p>
              <p className="text-[#ada173] font-['Baskerville'] text-sm text-left opacity-80"></p>
            </div>
            <div className="flex shrink-0 sm:justify-end">
              <a
                href="https://www.atxtheatre.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block opacity-90 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ada173] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                aria-label="ATX Theatre (opens in a new tab)"
              >
                <Image
                  src="/img/atx-theatre-bug.png"
                  alt="ATX Theatre"
                  width={144}
                  height={144}
                  className="h-28 w-28 sm:h-32 sm:w-32"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
