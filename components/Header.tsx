"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";
import { Phone } from "lucide-react";

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Barre de progression du scroll
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Méthode", href: "#process" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Barre de progression du scroll */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accentGold to-accentGreen z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-surface font-serif font-bold text-lg">
                M
              </div>
              <span className="font-serif font-semibold text-ink">Migr</span>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-ink transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Téléphone */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="phone" 
                size="sm"
                className="hidden sm:flex"
              >
                <Phone className="size-3" />
                01 23 45 67 89
              </Button>
              
              {/* Menu mobile (simplifié) */}
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden"
              >
                Menu
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
