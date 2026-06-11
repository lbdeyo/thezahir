import Image from "next/image";
import MailingListForm from "./MailingListForm";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-white font-semibold mb-3">
              Join our mailing list
            </h2>
            <MailingListForm />
          </div>
          <div className="flex shrink-0 sm:justify-end">
            <a
              href="https://www.atxtheatre.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6ad06] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
              aria-label="ATX Theatre (opens in a new tab)"
            >
              <Image
                src="/img/atx-theatre-bug.png"
                alt="ATX Theatre"
                width={144}
                height={144}
                className="h-24 w-24 sm:h-28 sm:w-28"
              />
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} The Zahir. Original theater, film, and
          storytelling. The Zahir Productions is a 501(c)(3) tax-exempt
          organization. EIN: 41-2685482
        </p>
      </div>
    </footer>
  );
}
