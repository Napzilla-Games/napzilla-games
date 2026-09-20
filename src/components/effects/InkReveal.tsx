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
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRevealed(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {children}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[100]"
        style={{
          clipPath: revealed
            ? "circle(150% at 50% 42%)"
            : "circle(0% at 50% 42%)",
          backgroundColor: "#11110D",
          transition: `clip-path ${duration}ms cubic-bezier(0.77, 0, 0.175, 1)`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[101]"
        style={{
          clipPath: revealed
            ? "circle(150% at 50% 42%)"
            : "circle(0% at 50% 42%)",
          backgroundColor: "#11110D",
          opacity: revealed ? 0 : 1,
          transition: `
            clip-path ${duration}ms cubic-bezier(0.77, 0, 0.175, 1),
            opacity 500ms ease ${duration * 0.7}ms
          `,
        }}
      />
    </div>
  );
}
