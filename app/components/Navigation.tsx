"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [mailingListStatus, setMailingListStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMailingListSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailingListStatus("submitting");

    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMailingListStatus("success");
        setEmail("");
        // Reset success message after 3 seconds
        setTimeout(() => setMailingListStatus("idle"), 3000);
      } else {
        console.error("Mailing list subscription error:", data);
        setMailingListStatus("error");
        setTimeout(() => setMailingListStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Mailing list subscription error:", error);
      setMailingListStatus("error");
      setTimeout(() => setMailingListStatus("idle"), 3000);
    }
  };

  return (
    <header className="w-full">
      <div className="px-4 sm:px-8 mx-auto max-w-5xl">
        <div
          className={`w-full py-4 sm:py-6 ${
            isMenuOpen ? "bg-black" : "bg-black/80"
          }`}
          style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="px-4 sm:px-12">
            {/* Top row: Logo, Mailing List Form, Hamburger */}
            <div className="flex flex-row items-center justify-between gap-4">
              <Link href="/">
                <Image
                  src="/img/zahir-logo.svg"
                  alt="The Zahir logo"
                  width={130}
                  height={30}
                  priority
                  className="logo-tint cursor-pointer"
                />
              </Link>

              {/* Mailing List Form - Desktop */}
              <form
                onSubmit={handleMailingListSubmit}
                className="hidden sm:flex items-center gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Join our mailing list"
                  required
                  disabled={mailingListStatus === "submitting"}
                  className="px-3 py-1.5 bg-black border border-[#ada173] text-[#ada173] text-sm font-['Baskerville'] placeholder:text-[#ada173]/90 focus:outline-none focus:border-[#ada173] focus:ring-1 focus:ring-[#ada173] disabled:opacity-50"
                  style={{ minWidth: "180px" }}
                />
                <input
                  type="hidden"
                  name="newsletter_subscriber"
                  value="true"
                />

                <button
                  type="submit"
                  disabled={mailingListStatus === "submitting"}
                  className="px-3 py-1.5 bg-[#ada173] text-black text-sm font-semibold font-['Baskerville'] hover:bg-[#ada173]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mailingListStatus === "submitting"
                    ? "Subscribing..."
                    : mailingListStatus === "success"
                    ? "✓"
                    : "Subscribe"}
                </button>
              </form>

              {/* Hamburger button - mobile only */}
              <button
                onClick={toggleMenu}
                className="sm:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-[#ada173] transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-[#ada173] transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-[#ada173] transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden sm:flex gap-8 text-[#ada173] text-lg font-semibold font-['Baskerville'] mt-4">
              <Link href="/our-work" className="hover:underline">
                our work
              </Link>
              <Link href="/about" className="hover:underline">
                about
              </Link>
              <Link href="/support" className="hover:underline">
                support
              </Link>
              <Link href="/founding-donors-circle" className="hover:underline">
                founding donors
              </Link>
              <Link href="/contact" className="hover:underline">
                contact
              </Link>
              <Link href="/team" className="hover:underline">
                team
              </Link>
              <Link href="/donate" className="hover:underline">
                donate
              </Link>
            </nav>

            {/* Mobile navigation menu */}
            {isMenuOpen && (
              <div className="sm:hidden mt-4 pb-4">
                {/* Mailing List Form - Mobile */}
                <form
                  onSubmit={handleMailingListSubmit}
                  className="flex flex-col gap-2 mb-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    disabled={mailingListStatus === "submitting"}
                    className="w-full px-3 py-2 bg-black border border-[#ada173] text-[#ada173] text-base font-['Baskerville'] placeholder:text-[#ada173]/90 focus:outline-none focus:border-[#ada173] focus:ring-1 focus:ring-[#ada173] disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={mailingListStatus === "submitting"}
                    className="w-full px-4 py-2 bg-[#ada173] text-black text-base font-semibold font-['Baskerville'] hover:bg-[#ada173]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {mailingListStatus === "submitting"
                      ? "Subscribing..."
                      : mailingListStatus === "success"
                      ? "✓ Subscribed!"
                      : "Join Mailing List"}
                  </button>
                  {mailingListStatus === "error" && (
                    <p className="text-sm text-red-400 font-['Baskerville']">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>

                <nav className="flex flex-col gap-4 text-[#ada173] text-lg font-semibold font-['Baskerville']">
                  <Link
                    href="/our-work"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    our work
                  </Link>
                  <Link
                    href="/about"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    about
                  </Link>
                  <Link
                    href="/support"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    support
                  </Link>
                  <Link
                    href="/founding-donors-circle"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    founding donors
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    contact
                  </Link>
                  <Link
                    href="/team"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    team
                  </Link>
                  <Link
                    href="/donate"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    donate
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
