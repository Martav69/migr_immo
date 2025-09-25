"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";

// Composant pour les puces de statistiques
function StatChip({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-surface border border-border rounded-full px-4 py-2 shadow-soft"
    >
      <div className="text-lg font-bold text-ink">{number}</div>
      <div className="text-xs text-muted">{label}</div>
    </motion.div>
  );
}

// SVG art abstrait pour le hero
function HeroArt() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Gradient de fond subtil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-surface via-surface/95 to-surface/90" />
      
      {/* Éléments décoratifs SVG */}
      <svg 
        className="absolute inset-0 w-full h-full rounded-2xl" 
        viewBox="0 0 400 500" 
        fill="none"
      >
        {/* Gradient radial doux */}
        <defs>
          <radialGradient id="softGradient" cx="60%" cy="20%" r="60%">
            <stop offset="0%" stopColor="rgba(47,110,95,0.08)" />
            <stop offset="40%" stopColor="rgba(200,162,77,0.06)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-gold)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Forme organique avec gradient */}
        <ellipse cx="300" cy="150" rx="120" ry="80" fill="url(#softGradient)" />
        
        {/* Lignes dorées subtiles */}
        <path 
          d="M50 200 Q200 150 350 180 T400 250" 
          stroke="url(#goldLine)" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.7"
        />
        <path 
          d="M80 320 Q250 280 380 310" 
          stroke="url(#goldLine)" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.5"
        />
        
        {/* Points d'accent */}
        <circle cx="150" cy="120" r="3" fill="var(--accent-gold)" opacity="0.6" />
        <circle cx="280" cy="280" r="2" fill="var(--accent-green)" opacity="0.5" />
        <circle cx="320" cy="200" r="2.5" fill="var(--accent-gold)" opacity="0.4" />
      </svg>
      
      {/* Puces de statistiques flottantes */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="self-start"
        >
          <StatChip number="10+" label="ans d'expertise" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="self-end"
        >
          <StatChip number="100%" label="conformité" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="self-center"
        >
          <StatChip number="24h" label="délai départ" />
        </motion.div>
      </div>
    </div>
  );
}

// Indicateur de scroll
function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex flex-col items-center space-y-2 text-muted">
        <span className="text-xs font-medium">Faites défiler</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-6 border border-muted rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-muted rounded-full mt-1"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-bg overflow-hidden">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Colonne gauche - Contenu éditorial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-medium"
            >
              Services comptables pour syndics
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink leading-tight"
            >
              Expertise comptable{" "}
              <span className="text-accentGreen">sur mesure</span>{" "}
              pour votre gestion immobilière
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl"
            >
              Migration de logiciels, onboarding de biens, externalisation complète. 
              Nous accompagnons les syndics avec agilité et discrétion depuis 10 ans.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" showArrow>
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button variant="secondary" asChild size="lg">
                <Link href="#services">Découvrir nos services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Art et statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroArt />
          </motion.div>
        </div>
      </Container>

      {/* Indicateur de scroll */}
      <ScrollCue />
    </section>
  );
}
