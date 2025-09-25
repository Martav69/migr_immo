"use client";

import { AnimatedBackground, FloatingParticles } from "./AnimatedBackground";

// Composant pour les arrière-plans de sections avec animations subtiles
export function SectionBackground({ 
  variant = "none",
  children,
  className = "",
  id
}: {
  variant?: "none" | "hero" | "services" | "process" | "cta" | "credibility";
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const backgroundConfig = {
    none: null,
    hero: {
      type: "gradient" as const,
      intensity: "subtle" as const,
      particles: true
    },
    services: null,
    process: {
      type: "dots" as const,
      intensity: "medium" as const,
      particles: true
    },
    cta: {
      type: "waves" as const,
      intensity: "medium" as const,
      particles: true
    },
    credibility: {
      type: "geometric" as const,
      intensity: "subtle" as const,
      particles: false
    }
  };

  const config = backgroundConfig[variant];

  return (
    <section id={id} className={`relative ${className}`}>
      {config && (
        <>
          <AnimatedBackground 
            variant={config.type} 
            intensity={config.intensity}
            className="z-0"
          />
          {config.particles && (
            <FloatingParticles 
              count={variant === "hero" ? 30 : 15}
              color={variant === "cta" ? "var(--accent-gold)" : "var(--accent-green)"}
              className="z-0"
            />
          )}
        </>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
