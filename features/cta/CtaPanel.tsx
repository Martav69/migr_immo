"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";
import { ArrowRight, Phone } from "lucide-react";

export function CtaPanel() {
  return (
    <section className="py-20 lg:py-24">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Panel principal avec grain et gradient */}
          <div className="relative bg-gradient-to-br from-accentGreen/90 via-accentGreen to-accentGreen/80 rounded-3xl p-8 lg:p-12 grain">
            {/* Glow interne subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-accentGold/10 via-transparent to-accentGold/5 rounded-3xl" />
            
            {/* Contenu */}
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Colonne gauche - Contenu */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-surface leading-tight">
                    Prêt à transformer votre gestion comptable ?
                  </h2>
                  <p className="text-lg text-surface/80 leading-relaxed max-w-lg">
                    Contactez-nous pour un diagnostic gratuit et découvrez comment optimiser vos processus comptables.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-surface text-ink hover:bg-surface/90 hover:shadow-lift"
                    showArrow
                  >
                    <Link href="/contact">Demander un devis</Link>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="border-surface/20 text-surface hover:bg-surface/10"
                    showPhone
                  >
                    <Phone className="size-3" />
                    01 23 45 67 89
                  </Button>
                </div>

                {/* Avantages rapides */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-surface/20">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-surface">24h</div>
                    <div className="text-xs text-surface/70">Délai réponse</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-surface">Gratuit</div>
                    <div className="text-xs text-surface/70">Diagnostic</div>
                  </div>
                </div>
              </motion.div>

              {/* Colonne droite - Art décoratif */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-64 lg:h-80">
                  {/* SVG art décoratif */}
                  <svg 
                    className="absolute inset-0 w-full h-full" 
                    viewBox="0 0 400 320" 
                    fill="none"
                  >
                    <defs>
                      <radialGradient id="ctaGradient" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="rgba(200,162,77,0.3)" />
                        <stop offset="50%" stopColor="rgba(200,162,77,0.1)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                      <linearGradient id="ctaLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Formes organiques */}
                    <ellipse cx="200" cy="160" rx="150" ry="100" fill="url(#ctaGradient)" />
                    
                    {/* Lignes décoratives */}
                    <path 
                      d="M50 100 Q150 80 250 120 T400 140" 
                      stroke="url(#ctaLine)" 
                      strokeWidth="2" 
                      fill="none" 
                      opacity="0.8"
                    />
                    <path 
                      d="M80 220 Q180 200 280 240 T400 260" 
                      stroke="url(#ctaLine)" 
                      strokeWidth="1.5" 
                      fill="none" 
                      opacity="0.6"
                    />
                    
                    {/* Points d'accent */}
                    <circle cx="120" cy="100" r="4" fill="rgba(255,255,255,0.8)" />
                    <circle cx="280" cy="200" r="3" fill="rgba(255,255,255,0.6)" />
                    <circle cx="320" cy="120" r="3.5" fill="rgba(255,255,255,0.7)" />
                  </svg>

                  {/* Éléments flottants */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 w-12 h-12 bg-surface/10 rounded-full flex items-center justify-center"
                  >
                    <div className="w-6 h-6 bg-surface/30 rounded-full" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-12 left-8 w-8 h-8 bg-surface/10 rounded-full flex items-center justify-center"
                  >
                    <div className="w-4 h-4 bg-surface/20 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
