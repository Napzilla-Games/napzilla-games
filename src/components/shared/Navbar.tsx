"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "The Traveller", href: "#the-traveller" },
  { label: "The Journey", href: "#the-journey" },
  { label: "The Destination", href: "#the-destination" },
  { label: "Napzilla Games", href: "#napzilla-games" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 md:px-12 md:pt-8 lg:px-16">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Napzilla Games home"
          onClick={closeMenu}
          className="group relative z-50 inline-flex cursor-pointer items-center"
        >
          <Image
            src="/art/napzilla-logo.png"
            alt="Napzilla Games"
            width={150}
            height={48}
            priority
            className="h-auto w-28 transition-all duration-500 ease-out group-hover:opacity-85 md:w-16"
          />
        </Link>

        {/* Menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="group relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/5 active:scale-95"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            {/* Top line */}
            <span
              className={`absolute h-px w-5 bg-white/85 transition-all duration-500 ease-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5 group-hover:w-6"
              }`}
            />

            {/* Bottom line */}
            <span
              className={`absolute h-px w-5 bg-white/65 transition-all duration-500 ease-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5 group-hover:w-6"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Navigation panel */}
      <div
        id="navigation-menu"
        className={`fixed inset-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Desktop right sidebar */}
        <nav
          aria-label="Main navigation"
          className={`absolute right-0 top-0 hidden h-screen w-100 max-w-[90vw] bg-black/20 px-10 py-32 backdrop-blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:block lg:w-112.5 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex cursor-pointer items-center justify-between py-5 font-main text-xl tracking-wide text-white transition-all duration-500 hover:pl-2"
                >
                  <span>{item.label}</span>
                </Link>

                {index < navigation.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="block h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile full-screen menu */}
        <nav
          aria-label="Mobile navigation"
          className={`absolute inset-0 h-screen w-screen bg-black/20 px-8 py-32 backdrop-blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex cursor-pointer items-center justify-between py-5 font-main text-lg tracking-wide text-white transition-all duration-500 hover:pl-2"
                >
                  <span>{item.label}</span>
                </Link>

                {index < navigation.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="block h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
