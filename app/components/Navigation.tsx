"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/our-work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/love", label: "love" },
  // { href: "/support", label: "support" }, // Temporarily hidden
  { href: "/contact", label: "contact" },
  { href: "/team", label: "team" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#0a0a0a] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <Link href="/" aria-label="The Zahir — home" className="shrink-0">
            {/* Full logo (hand + wordmark) tinted in the accent gold */}
            <span
              className="logo-accent w-[88px] sm:w-[104px]"
              role="img"
              aria-label="The Zahir logo"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-white/90 hover:text-[#e6ad06] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="rounded-full bg-[#e6ad06] px-5 py-1.5 text-[15px] font-semibold text-black hover:bg-white transition-colors"
            >
              donate
            </Link>
          </nav>

          {/* Hamburger button - mobile only */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#e6ad06] transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#e6ad06] transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#e6ad06] transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <nav className="sm:hidden flex flex-col gap-5 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-white/90 hover:text-[#e6ad06] transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="self-start rounded-full bg-[#e6ad06] px-6 py-2 text-lg font-semibold text-black hover:bg-white transition-colors"
              onClick={toggleMenu}
            >
              donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
