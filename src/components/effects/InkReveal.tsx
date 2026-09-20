"use client";

import { useEffect, useState } from "react";

interface InkRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function InkReveal({
  children,
  duration = 1800,
  delay = 200,
  className = "",
}: InkRevealProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {children}

      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-100 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="ink-displacement"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.024"
              numOctaves="4"
              seed="17"
              result="noise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="13"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter
            id="ink-softness"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="0.15" />
          </filter>

          <mask
            id="ink-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100"
            height="100"
          >
            <rect width="100" height="100" fill="black" />

            <circle
              cx="50"
              cy="42"
              r={started ? 0 : 0}
              fill="white"
              filter="url(#ink-displacement)"
            >
              <animate
                attributeName="r"
                from="0"
                to="110"
                dur={`${duration}ms`}
                begin={started ? "0s" : "indefinite"}
                fill="freeze"
                calcMode="spline"
                keySplines="0.12 0.7 0.2 1"
              />
            </circle>
          </mask>
        </defs>

        <rect
          width="100"
          height="100"
          fill="#11110D"
          mask="url(#ink-mask)"
          filter="url(#ink-softness)"
        />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-101"
        style={{
          opacity: started ? 0 : 0.96,
          backgroundColor: "#11110D",
          transition: `opacity ${Math.max(500, duration * 0.3)}ms ease`,
          transitionDelay: `${duration * 0.72}ms`,
        }}
      />
    </div>
  );
}
