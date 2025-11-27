"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full px-4 sm:px-8 py-4 sm:py-6 ${
        isMenuOpen ? "bg-black" : "bg-black/80"
      }`}
      style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 sm:px-12">
        <div className="flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-8">
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

          {/* Desktop navigation */}
          <nav className="hidden sm:flex gap-8 text-[#ada173] text-xl font-semibold font-['Baskerville']">
            <Link href="/our-work" className="hover:underline">
              our work
            </Link>
            <Link href="/about" className="hover:underline">
              about
            </Link>
            {/* <a href="#" className="hover:underline">
              support
            </a> */}
            <Link href="/contact" className="hover:underline">
              contact
            </Link>
            <Link href="/team" className="hover:underline">
              team
            </Link>
            {/* <a href="#" className="hover:underline">
              donate
            </a> */}
          </nav>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <nav className="sm:hidden flex flex-col gap-4 mt-4 pb-4 text-[#ada173] text-xl font-semibold font-['Baskerville']">
            <Link href="/our-work" className="hover:underline" onClick={toggleMenu}>
              our work
            </Link>
            <Link href="/about" className="hover:underline" onClick={toggleMenu}>
              about
            </Link>
            {/* <a href="#" className="hover:underline" onClick={toggleMenu}>
              support
            </a> */}
            <Link href="/contact" className="hover:underline" onClick={toggleMenu}>
              contact
            </Link>
            <Link href="/team" className="hover:underline" onClick={toggleMenu}>
              team
            </Link>
            {/* <a href="#" className="hover:underline" onClick={toggleMenu}>
              donate
            </a> */}
          </nav>
        )}
      </div>
    </header>
  );
}
