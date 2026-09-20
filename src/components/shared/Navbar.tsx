"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "The Journey", href: "#the-journey" },
  { label: "The Cottage", href: "#the-cottage" },
  { label: "The Journal", href: "#the-journal" },
  { label: "Napzilla", href: "#napzilla" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 md:px-12 md:pt-8 lg:px-16">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Napzilla Games home"
            onClick={closeMenu}
            className="
              group relative z-50
              inline-flex items-center
              cursor-pointer
            "
          >
            <Image
              src="/art/napzilla-logo.png"
              alt="Napzilla Games"
              width={150}
              height={48}
              priority
              className="
                h-auto w-28
                transition-all duration-500 ease-out
                group-hover:opacity-85
                md:w-16
              "
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-11">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      group relative
                      inline-flex items-center
                      cursor-pointer
                      py-2
                      font-serif
                      text-lg
                      tracking-wide
                      text-white/85
                      transition-colors
                      duration-500
                      hover:text-white
                    
                    "
                  >
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="
              group relative z-50
              flex h-11 w-11
              cursor-pointer
              items-center justify-center
              rounded-full
              text-white
              transition-all duration-300
              hover:bg-white/5
              active:scale-95
              md:hidden
            "
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`
                  absolute
                  h-px
                  w-5
                  bg-white/85
                  transition-all
                  duration-500
                  ease-out
                  ${isOpen ? "rotate-45" : "-translate-y-1.5 group-hover:w-6"}
                `}
              />

              <span
                className={`
                  absolute
                  h-px
                  w-5
                  bg-white/65
                  transition-all
                  duration-500
                  ease-out
                  ${isOpen ? "-rotate-45" : "translate-y-1.5 group-hover:w-6"}
                `}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isOpen
                ? "mt-5 max-h-125 opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <nav
            aria-label="Mobile navigation"
            className="
              rounded-2xl
              bg-black/20
              px-6
              py-5
              backdrop-blur-md
            "
          >
            <ul className="flex flex-col">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      group
                      flex
                      cursor-pointer
                      items-center
                      justify-between
                      py-4
                      font-serif
                      text-sm
                      tracking-wide
                      text-white/80
                      transition-all
                      duration-500
                      hover:pl-2
                      hover:text-white
                    "
                  >
                    <span>{item.label}</span>

                    <span
                      aria-hidden="true"
                      className="
                        translate-x-1.5
                        text-xs
                        text-landor-light/60
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    >
                      ✦
                    </span>
                  </Link>
                  {index < navigation.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        block
                        h-px
                        w-full
                        bg-linear-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                      "
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
