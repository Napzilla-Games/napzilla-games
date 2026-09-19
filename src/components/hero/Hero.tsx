import React from "react";
import HeroArtwork from "./HeroArtwork";

interface HeroProps {
  /**
   * Optional replacement artwork node. When final painted artwork or a
   * custom shader/canvas is ready, it can be passed directly here or
   * configured within HeroArtwork.
   */
  artworkSlot?: React.ReactNode;
  className?: string;
}

/**
 * Hero Section — "The Falling"
 *
 * Embodies the design principle: "Observation Through Environment".
 * The visitor is placed as "the traveller" on a high promontory overlooking
 * the secluded amphitheatre of hills, the winding footpath, the tranquil water,
 * and Landor's Cottage resting quietly in the distance.
 *
 * Typography is restrained, literary, and integrated into the natural environment
 * rather than dominating it like conventional game marketing banners.
 */
export default function Hero({ artworkSlot, className = "" }: HeroProps) {
  return (
    <section
      aria-label="Landor's Cottage — The Falling"
      className={`relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-landor-earth-deep text-landor-warm ${className}`}
    >
      {/* 1. Modular Artwork / Environment Layer */}
      <HeroArtwork>{artworkSlot}</HeroArtwork>

      {/* 2. Top Subtle Masthead (Studio & Atmospheric Scene Cue) */}
      <header className="relative z-10 flex items-center justify-between w-full px-6 sm:px-10 md:px-16 pt-8 sm:pt-10 md:pt-12 select-none">
        {/* Understated Studio Mark */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-landor-warm/85 font-fell">
            Napzilla Games
          </span>
        </div>

        {/* Environmental Marker */}
        <div className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-landor-light/90 italic font-fell">
          Observation I &bull; The Valley
        </div>
      </header>

      {/* 3. Central Environmental Typography (Integrated Quietly into Horizon Space) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto my-auto py-12 pointer-events-none select-none">
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-landor-light/90 mb-3 font-fell">
          An Hudson River Valley Odyssey
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.18em] text-landor-warm drop-shadow-md font-fell leading-tight">
          Landor’s Cottage
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-landor-warm/90 italic max-w-lg mx-auto leading-relaxed font-fell drop-shadow-sm">
          “The road was strangely well kept... descending quietly into the
          amphitheatre below.”
        </p>
      </div>

      {/* 4. Bottom Descent Cue (Quiet Anticipation without Aggressive CTAs) */}
      <footer className="relative z-10 flex flex-col items-center pb-8 sm:pb-10 md:pb-14 px-6 pointer-events-none select-none">
        <div className="flex flex-col items-center gap-3 text-landor-warm/80">
          <span className="text-[10px] sm:text-xs tracking-[0.32em] uppercase font-fell text-landor-warm/75">
            The Descent
          </span>
          {/* Subtle vertical guiding trace line */}
          <div className="w-px h-10 sm:h-14 bg-gradient-to-b from-landor-light via-landor-warm/50 to-transparent opacity-75" />
        </div>
      </footer>
    </section>
  );
}
