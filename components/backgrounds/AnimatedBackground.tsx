"use client";

import React, { useState, useEffect } from "react";

// Composant de fond animé avec des formes géométriques subtiles
export function AnimatedBackground({ 
  variant = "geometric", 
  className = "",
  intensity = "subtle" 
}: {
  variant?: "geometric" | "waves" | "dots" | "gradient";
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}) {
  const intensityClasses = {
    subtle: "opacity-30",
    medium: "opacity-50", 
    strong: "opacity-70"
  };

  if (variant === "geometric") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className={`absolute inset-0 ${intensityClasses[intensity]}`}>
          {/* Formes géométriques animées */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 400 400" 
            fill="none"
          >
            <defs>
              <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="var(--accent-gold)" stopOpacity="0.05" />
                <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Triangles animés */}
            <polygon 
              points="50,50 150,50 100,150" 
              fill="url(#geometricGradient)"
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <polygon 
              points="300,100 350,200 250,200" 
              fill="url(#geometricGradient)"
              className="animate-pulse"
              style={{ animationDuration: '3s', animationDelay: '1s' }}
            />
            <polygon 
              points="200,300 250,350 150,350" 
              fill="url(#geometricGradient)"
              className="animate-pulse"
              style={{ animationDuration: '5s', animationDelay: '2s' }}
            />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className={`absolute inset-0 ${intensityClasses[intensity]}`}>
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent-green) 1px, transparent 0)`,
                 backgroundSize: '20px 20px',
                 animation: 'float 20s ease-in-out infinite'
               }} />
        </div>
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
        `}</style>
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className={`absolute inset-0 ${intensityClasses[intensity]}`}>
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 400 200" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--accent-gold)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0,100 Q100,50 200,100 T400,100 L400,200 L0,200 Z" 
              fill="url(#waveGradient)"
              className="animate-pulse"
              style={{ animationDuration: '8s' }}
            />
            <path 
              d="M0,120 Q100,80 200,120 T400,120 L400,200 L0,200 Z" 
              fill="url(#waveGradient)"
              className="animate-pulse"
              style={{ animationDuration: '6s', animationDelay: '2s' }}
            />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div 
          className={`absolute inset-0 ${intensityClasses[intensity]}`}
          style={{
            background: `radial-gradient(ellipse at top, var(--accent-green) 0%, transparent 50%), 
                        radial-gradient(ellipse at bottom right, var(--accent-gold) 0%, transparent 50%)`,
            animation: 'gradientShift 15s ease-in-out infinite'
          }}
        />
        <style jsx>{`
          @keyframes gradientShift {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  return null;
}

// Composant de fond avec particules flottantes (côté client uniquement)
export function FloatingParticles({ 
  count = 20, 
  color = "var(--accent-green)",
  className = ""
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Générer les particules côté client uniquement
    const generatedParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2
    }));
    setParticles(generatedParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full opacity-30"
          style={{
            backgroundColor: color,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
