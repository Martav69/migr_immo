"use client";

import * as React from "react";

type NumberTickerProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

// Compteur discret qui incrémente jusqu'à value. Respecte prefers-reduced-motion
export function NumberTicker({ value, suffix = "", durationMs = 900, className }: NumberTickerProps) {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, durationMs]);
  return <span className={className}>{display}{suffix}</span>;
}


