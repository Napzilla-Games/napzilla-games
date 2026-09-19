import React from "react";

interface HeroArtworkProps {
  /**
   * Optional custom artwork node. If not provided, the restrained
   * vector landscape placeholder ("The Falling") is displayed.
   * This makes replacing the artwork with a painted raster asset or shader trivial.
   */
  children?: React.ReactNode;
  className?: string;
}

/**
 * HeroArtwork
 *
 * Modular container for the hero visual environment.
 * Currently renders a restrained, layered Hudson River School inspired
 * placeholder composition titled "The Falling".
 *
 * Composition Layers (receding from viewer to horizon):
 * 1. Sky & Dawn/Dusk Atmospheric Glow (warm golden-hour light #BF9924 & #F2DC9B)
 * 2. Distant Misty Mountain Ridges (#A67C49 & #93A6BF)
 * 3. The Valley Amphitheatre & Landor's Cottage with gentle window light
 * 4. Meandering Water Basin reflecting sky hues
 * 5. Midground Forest Groves & Slopes (#2E3323, #593F1E)
 * 6. The Descending Footpath (#A67C49, #805D2B)
 * 7. High Overlook Crest with craggy natural rocks & framing beech tree boughs
 * 8. Cinematic Edge Vignettes
 *
 * TO REPLACE WITH FINAL PAINTED ARTWORK:
 * Either pass custom JSX (e.g. `<Image src="..." />` or a `<canvas />`) as children,
 * or replace the internal `PlaceholderLandscape` SVG with the production asset.
 */
export default function HeroArtwork({
  children,
  className = "",
}: HeroArtworkProps) {
  if (children) {
    return (
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <PlaceholderLandscape />
      {/* Subtle atmospheric vignette & edge gradient to expand beyond viewport */}
      <div className="absolute inset-0 bg-gradient-to-b from-landor-primary/25 via-transparent to-landor-earth-deep/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-transparent via-transparent to-landor-primary/30" />
    </div>
  );
}

function PlaceholderLandscape() {
  return (
    <svg
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full object-cover"
    >
      <defs>
        {/* Sky gradient: soft slate atmosphere into warm golden ochre */}
        <linearGradient
          id="skyGrad"
          x1="960"
          y1="0"
          x2="960"
          y2="650"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7B8B9B" />
          <stop offset="25%" stopColor="#93A6BF" />
          <stop offset="60%" stopColor="#E4CCA0" />
          <stop offset="85%" stopColor="#F2DC9B" />
          <stop offset="100%" stopColor="#BF9924" stopOpacity="0.85" />
        </linearGradient>

        {/* Warm valley sun glow */}
        <radialGradient
          id="sunGlow"
          cx="980"
          cy="460"
          r="420"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F2DC9B" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#BF9924" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#BF9924" stopOpacity="0" />
        </radialGradient>

        {/* Water reflection gradient */}
        <linearGradient
          id="waterGrad"
          x1="750"
          y1="560"
          x2="1150"
          y2="700"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8095AA" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#BF9924" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#A4B4C4" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#5E7285" stopOpacity="0.9" />
        </linearGradient>

        {/* Distant ridge 1 */}
        <linearGradient
          id="distantRidgeGrad1"
          x1="960"
          y1="360"
          x2="960"
          y2="520"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#93A6BF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#805D2B" stopOpacity="0.4" />
        </linearGradient>

        {/* Distant ridge 2 */}
        <linearGradient
          id="distantRidgeGrad2"
          x1="960"
          y1="400"
          x2="960"
          y2="580"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#A67C49" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#593F1E" stopOpacity="0.5" />
        </linearGradient>

        {/* Valley floor mist */}
        <linearGradient
          id="valleyMistGrad"
          x1="960"
          y1="520"
          x2="960"
          y2="620"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#93A6BF" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#F2DC9B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#93A6BF" stopOpacity="0" />
        </linearGradient>

        {/* Overlook rock texture gradient */}
        <linearGradient
          id="rockGrad1"
          x1="150"
          y1="700"
          x2="400"
          y2="1080"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#593F1E" />
          <stop offset="40%" stopColor="#3A3222" />
          <stop offset="100%" stopColor="#2E3323" />
        </linearGradient>

        <linearGradient
          id="rockGrad2"
          x1="1700"
          y1="650"
          x2="1450"
          y2="1080"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#A67C49" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#593F1E" />
          <stop offset="100%" stopColor="#2E3323" />
        </linearGradient>

        {/* Path gradient */}
        <linearGradient
          id="pathGrad"
          x1="1400"
          y1="950"
          x2="920"
          y2="580"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#A67C49" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#805D2B" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#BF9924" stopOpacity="0.5" />
        </linearGradient>

        {/* Cottage window warm light */}
        <filter id="windowGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. SKY & DISTANT HORIZON */}
      <rect width="1920" height="1080" fill="url(#skyGrad)" />
      <circle cx="980" cy="460" r="420" fill="url(#sunGlow)" />

      {/* 2. ATMOSPHERIC DISTANT MOUNTAIN SILHOUETTES */}
      {/* Far mountain ridge */}
      <path
        d="M-50 490 Q280 410 580 430 T1180 420 Q1450 390 1720 440 T1980 480 L1980 620 L-50 620 Z"
        fill="url(#distantRidgeGrad1)"
      />
      {/* Second mountain tier */}
      <path
        d="M-50 515 Q340 460 720 480 Q1050 450 1380 490 Q1680 465 1980 520 L1980 660 L-50 660 Z"
        fill="url(#distantRidgeGrad2)"
      />

      {/* Soft atmospheric mist resting in valley trough */}
      <ellipse cx="980" cy="530" rx="700" ry="40" fill="url(#valleyMistGrad)" />

      {/* 3. VALLEY AMPHITHEATRE & RECEDING HILLS */}
      {/* Left amphitheatre hill */}
      <path
        d="M-50 540 Q250 510 520 570 T980 585 L980 720 L-50 720 Z"
        fill="#4A5237"
        opacity="0.8"
      />
      {/* Right amphitheatre hill slope */}
      <path
        d="M1980 535 Q1650 510 1320 565 Q1100 580 940 590 L940 730 L1980 730 Z"
        fill="#434B32"
        opacity="0.85"
      />

      {/* 4. WATER BASIN / SERENE RIVER BELOW */}
      {/* Meandering river through the valley floor */}
      <path
        d="M740 595 C820 590 890 605 930 615 C1010 635 1060 630 1140 645 C1220 660 1250 680 1280 705 C1200 715 1100 700 1020 685 C920 665 840 660 760 640 C700 625 680 610 740 595 Z"
        fill="url(#waterGrad)"
      />
      {/* Water shoreline accents */}
      <path
        d="M738 600 C818 595 888 610 928 620 C1008 640 1058 635 1138 650"
        stroke="#F2DC9B"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <path
        d="M762 642 C842 662 922 667 1022 687 C1102 702 1202 717 1282 707"
        stroke="#593F1E"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* 5. LANDOR'S COTTAGE (Nestled peacefully in the distance near the river bend) */}
      <g id="landors-cottage" transform="translate(860, 545)">
        {/* Cottage grassy knoll */}
        <ellipse cx="40" cy="45" rx="55" ry="14" fill="#3D452F" />

        {/* Cottage main structure */}
        <polygon points="15,40 15,28 35,14 62,14 75,26 75,40" fill="#593F1E" />
        {/* Roof slope (Dutch-gabled / dormer aesthetic) */}
        <polygon
          points="10,29 34,12 65,12 80,27 75,29 63,15 35,15 14,31"
          fill="#A67C49"
        />
        {/* Stone chimney */}
        <rect x="52" y="6" width="6" height="12" fill="#3A3222" />
        <rect x="51" y="5" width="8" height="2" fill="#593F1E" />
        {/* Subtle chimney smoke whisper */}
        <path
          d="M55 4 C54 -4 58 -10 56 -16 C54 -22 60 -28 58 -34"
          stroke="#F2DC9B"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="2 4"
        />
        {/* Veranda / porch shadow */}
        <rect
          x="18"
          y="32"
          width="24"
          height="8"
          fill="#2E3323"
          opacity="0.7"
        />
        <line
          x1="20"
          y1="32"
          x2="20"
          y2="40"
          stroke="#A67C49"
          strokeWidth="1"
        />
        <line
          x1="30"
          y1="32"
          x2="30"
          y2="40"
          stroke="#A67C49"
          strokeWidth="1"
        />
        <line
          x1="40"
          y1="32"
          x2="40"
          y2="40"
          stroke="#A67C49"
          strokeWidth="1"
        />

        {/* Warm lit window: quiet guidance & destination beacon */}
        <rect
          x="48"
          y="27"
          width="7"
          height="8"
          rx="1"
          fill="#BF9924"
          filter="url(#windowGlow)"
        />
        <rect x="49" y="28" width="5" height="6" rx="0.5" fill="#F2DC9B" />
        <line
          x1="51.5"
          y1="28"
          x2="51.5"
          y2="34"
          stroke="#593F1E"
          strokeWidth="0.6"
        />
        <line
          x1="49"
          y1="31"
          x2="54"
          y2="31"
          stroke="#593F1E"
          strokeWidth="0.6"
        />

        {/* Clustered trees around cottage */}
        <circle cx="8" cy="32" r="11" fill="#2E3323" />
        <circle cx="2" cy="36" r="8" fill="#3A422D" />
        <circle cx="84" cy="33" r="13" fill="#2E3323" />
        <circle cx="95" cy="37" r="9" fill="#3A422D" />
      </g>

      {/* 6. MIDGROUND FORESTS & SLOPING HILLS */}
      {/* Midground forest left */}
      <path
        d="M-50 630 C120 610 260 635 410 650 C550 665 670 655 770 680 L770 820 L-50 820 Z"
        fill="#323826"
      />
      {/* Midground tree clusters left */}
      <g fill="#2E3323">
        <circle cx="160" cy="620" r="35" />
        <circle cx="210" cy="615" r="42" />
        <circle cx="270" cy="625" r="38" />
        <circle cx="330" cy="635" r="45" />
        <circle cx="420" cy="640" r="32" />
        <circle cx="480" cy="650" r="28" />
        <circle cx="610" cy="660" r="24" />
        <circle cx="670" cy="665" r="22" />
      </g>

      {/* Midground hill right with forest canopy */}
      <path
        d="M1980 620 C1780 610 1620 635 1460 645 C1320 655 1200 670 1100 690 L1100 840 L1980 840 Z"
        fill="#2E3323"
      />
      <g fill="#262B1D">
        <circle cx="1800" cy="610" r="40" />
        <circle cx="1720" cy="615" r="45" />
        <circle cx="1640" cy="625" r="36" />
        <circle cx="1550" cy="630" r="40" />
        <circle cx="1470" cy="640" r="30" />
        <circle cx="1380" cy="650" r="26" />
        <circle cx="1260" cy="665" r="22" />
      </g>

      {/* 7. THE WINDING PATH / TRAIL ("The Falling" Descent) */}
      {/* Descending trail from high overlook down through the amphitheatre toward cottage */}
      <path
        d="M1520 1080 C1460 980 1380 920 1320 870 C1240 810 1190 820 1120 780 C1050 745 1040 710 980 675 C940 650 930 630 900 600"
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* Path highlight / tread line */}
      <path
        d="M1520 1080 C1460 980 1380 920 1320 870 C1240 810 1190 820 1120 780 C1050 745 1040 710 980 675 C940 650 930 630 900 600"
        fill="none"
        stroke="#F2DC9B"
        strokeWidth="2.5"
        strokeOpacity="0.4"
        strokeDasharray="14 10"
      />

      {/* 8. FOREGROUND HIGH OVERLOOK (Viewer's Standing Point / Crest) */}
      {/* Lower high ground terrace extending across bottom */}
      <path
        d="M-50 820 C180 810 380 830 580 870 C780 910 1020 930 1220 960 C1420 990 1700 970 1980 950 L1980 1090 L-50 1090 Z"
        fill="#262B1D"
      />

      {/* Left Foreground Crags & Natural Rock Outcroppings */}
      <path
        d="M-40 740 L80 770 L140 830 L110 880 L180 920 L240 980 L180 1080 L-50 1080 Z"
        fill="url(#rockGrad1)"
      />
      {/* Rock facet highlights */}
      <polygon
        points="60,775 130,830 95,870 30,820"
        fill="#593F1E"
        opacity="0.8"
      />
      <polygon
        points="120,840 170,920 120,950 80,880"
        fill="#805D2B"
        opacity="0.6"
      />
      <polygon
        points="165,925 230,980 170,1050 130,960"
        fill="#A67C49"
        opacity="0.45"
      />
      <line
        x1="80"
        y1="770"
        x2="140"
        y2="830"
        stroke="#A67C49"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="140"
        y1="830"
        x2="180"
        y2="920"
        stroke="#BF9924"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* Right Foreground Rock Formations Framing the Path */}
      <path
        d="M1980 780 L1820 810 L1740 860 L1680 930 L1610 970 L1580 1080 L1980 1080 Z"
        fill="url(#rockGrad2)"
      />
      {/* Rock facet planes right */}
      <polygon
        points="1810,815 1740,860 1770,920 1860,860"
        fill="#593F1E"
        opacity="0.9"
      />
      <polygon
        points="1735,865 1675,930 1710,990 1775,920"
        fill="#805D2B"
        opacity="0.75"
      />
      <polygon
        points="1670,935 1605,970 1620,1060 1700,995"
        fill="#593F1E"
        opacity="0.85"
      />
      <line
        x1="1820"
        y1="810"
        x2="1740"
        y2="860"
        stroke="#BF9924"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <line
        x1="1740"
        y1="860"
        x2="1680"
        y2="930"
        stroke="#A67C49"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* 9. OVERARCHING ANCIENT BEECH TREE BOUGHS (Hudson River School Framing) */}
      {/* Left framing tree trunk and branches reaching across upper frame */}
      <g id="framing-tree-left">
        {/* Main trunk base rising from left rocks */}
        <path
          d="M-30 880 C20 820 40 720 30 620 C20 500 -10 380 -5 260 C0 140 30 40 60 -40 L-60 -40 L-60 880 Z"
          fill="#1F2318"
        />
        {/* High overarching bough reaching inward */}
        <path
          d="M25 280 C90 260 180 250 290 280 C380 305 460 350 540 380 C480 395 390 350 300 320 C210 290 120 300 20 340 Z"
          fill="#262B1D"
        />
        <path
          d="M260 275 C340 220 440 180 560 170 C480 195 400 230 310 285 Z"
          fill="#262B1D"
        />
        <path
          d="M420 185 C510 130 640 100 780 110 C670 125 570 150 470 200 Z"
          fill="#2E3323"
        />

        {/* Foliage masses hanging gracefully like Durand's 'The Beeches' */}
        <g fill="#2E3323" opacity="0.95">
          <ellipse cx="140" cy="240" rx="90" ry="50" />
          <ellipse cx="280" cy="260" rx="110" ry="55" />
          <ellipse cx="420" cy="290" rx="100" ry="50" />
          <ellipse cx="540" cy="340" rx="85" ry="45" />
          <ellipse cx="460" cy="180" rx="95" ry="50" />
          <ellipse cx="620" cy="150" rx="110" ry="55" />
          <ellipse cx="740" cy="130" rx="90" ry="45" />
        </g>
        {/* Soft leaf highlights kissed by golden sky */}
        <g fill="#805D2B" opacity="0.45">
          <ellipse cx="260" cy="245" rx="70" ry="30" />
          <ellipse cx="440" cy="275" rx="75" ry="32" />
          <ellipse cx="580" cy="140" rx="80" ry="35" />
          <ellipse cx="700" cy="120" rx="60" ry="28" />
        </g>
        <g fill="#BF9924" opacity="0.25">
          <circle cx="310" cy="250" r="30" />
          <circle cx="490" cy="280" r="35" />
          <circle cx="640" cy="135" r="35" />
        </g>
      </g>

      {/* Right framing boughs (subtle upper-right canopy) */}
      <g id="framing-tree-right">
        <path
          d="M1950 -30 C1860 40 1780 110 1660 150 C1540 190 1420 180 1340 210 C1430 225 1560 210 1680 175 C1800 140 1890 80 1980 20 Z"
          fill="#262B1D"
        />
        <g fill="#2E3323" opacity="0.9">
          <ellipse cx="1780" cy="120" rx="100" ry="50" />
          <ellipse cx="1620" cy="165" rx="95" ry="48" />
          <ellipse cx="1470" cy="195" rx="85" ry="40" />
          <ellipse cx="1370" cy="215" rx="65" ry="32" />
        </g>
        <g fill="#A67C49" opacity="0.35">
          <ellipse cx="1600" cy="155" rx="65" ry="30" />
          <ellipse cx="1450" cy="188" rx="55" ry="25" />
        </g>
      </g>

      {/* 10. ATMOSPHERIC GROUND VEILS (Delicate Valley Mist in Folds) */}
      <ellipse
        cx="1060"
        cy="670"
        rx="320"
        ry="22"
        fill="#93A6BF"
        opacity="0.2"
      />
      <ellipse
        cx="620"
        cy="650"
        rx="260"
        ry="18"
        fill="#93A6BF"
        opacity="0.18"
      />
    </svg>
  );
}
