"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShimmerButton } from "@/components/effects/ShimmerButton";
import { NumberTicker } from "@/components/effects/NumberTicker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Calculator, RefreshCw, Shield, FileCheck, ArrowRight, CheckCircle, Quote, BarChart3, Award, Lock, Clock, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MagicBento from "@/components/effects/MagicBento";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";
import { Squares } from "@/components/backgrounds/CanvasStrokeStyle";
import QuoteModal from "@/components/quote-modal";

import { DotGrid } from "@/components/backgrounds/DotGrids";

// Fonction pour le scroll fluide vers une section
const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Composant pour les éléments de confiance discrets
const TrustElement: React.FC<{
  icon: React.ComponentType<any>;
  text: string;
  delay?: number;
}> = ({ icon: Icon, text, delay = 0 }) => {
  return (
    <div 
      className="flex items-center gap-2 text-sm text-muted-foreground"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-3 h-3 text-primary/70" />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Contenu statique des services (icônes et textes)
  const services = [
    { icon: RefreshCw, title: "Migration Express", description: "Transitions rapides et sécurisées entre logiciels de gestion", href: "/services/migration-express" },
    { icon: Building2, title: "Intégration de Biens", description: "Prise en charge complète de nouvelles copropriétés", href: "/services/integration-biens" },
    { icon: Calculator, title: "Services Comptables", description: "Comptabilité sur mesure et gestion financière", href: "/services/services-comptables" },
    { icon: Users, title: "Remplacement d&apos;Équipe", description: "Personnel comptable temporaire et formation", href: "/services/remplacement-equipe" },
    { icon: FileCheck, title: "Externalisation Complète", description: "Délégation totale de la gestion comptable", href: "/services/externalisation-complete" },
    { icon: Shield, title: "Audit & Garantie", description: "Contrôles, audits et gestion des fonds de garantie", href: "/services/audit-garantie" },
  ];

  const steps = [
    { k: 1, title: "Diagnostic", text: "Audit rapide de votre situation et de vos outils" },
    { k: 2, title: "Plan d'action", text: "Roadmap claire, délais et responsabilités" },
    { k: 3, title: "Exécution", text: "Migrations, saisies, paramétrages et contrôles" },
    { k: 4, title: "Transmission", text: "Formation et documentation opérationnelle" },
  ];

  const stats = [
    { value: "10+", label: "années d'expertise" },
    { value: "0%", label: "perte de données" },
    { value: "24-48h", label: "délai d'intervention" },
    { value: "100%", label: "conformité" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

        {/* HÉRO — section avec fond animé */}
        <SectionBackground variant="hero" className="relative overflow-clip min-h-screen">

          <div className="container mx-auto px-4 py-20 md:py-28 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 w-full max-w-7xl">
            {/* Bloc titre + CTA */}
            <div>
              <h1 className="font-heading text-4xl leading-tight md:text-6xl font-bold text-foreground">
                Accélérez votre <span className="text-primary bg-gradient-to-r from-accentGreen to-accentGold bg-clip-text text-transparent">gestion immobilière</span> avec une équipe experte
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-xl">
                Migrations sans rupture, comptabilité sur mesure et audits rigoureux. Nous livrons des résultats concrets, vite et bien.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="h-12 px-8 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0"
                >
                  <Link href="/contact" aria-label="Nous contacter">
                    <span className="relative z-10 inline-flex items-center">
                      Nous contacter
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    {/* Effet de shimmer doré */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  </Link>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => smoothScrollToSection('services')}
                  className="h-12 px-8 group relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 border-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <span className="relative z-10 inline-flex items-center font-medium">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  {/* Effet de shimmer au survol */}
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                </Button>
              </div>

              {/* Labels de confiance discrets */}
              <div className="mt-10 flex flex-wrap gap-6">
                <TrustElement 
                  icon={Award} 
                  text="10+ ans d'expérience" 
                  delay={0}
                />
                <TrustElement 
                  icon={Shield} 
                  text="Conformité garantie" 
                  delay={150}
                />
                <TrustElement 
                  icon={Lock} 
                  text="Discrétion absolue" 
                  delay={300}
                />
              </div>
            </div>

            {/* Visuel — image hero */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border shadow-sm">
                <img 
                  src="/hero_section.png" 
                  alt="Équipe professionnelle discutant autour d'une table avec des documents de gestion immobilière"
                  className="w-full h-auto object-cover"
                  
                />
                {/* Plaque métriques superposée */}
                <div className="pointer-events-none absolute bottom-4 right-4 grid gap-2 rounded-xl border bg-background/80 p-4 backdrop-blur">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="font-heading text-2xl text-white font-bold text-foreground">
                          <NumberTicker value={parseInt(s.value)} suffix={/\+$/.test(s.value) ? "+" : s.value.endsWith("%") ? "%" : ""} />
                        </div>
                        <div className="text-xs text-white text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo de scroll animé */}
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-8 border-2 border-muted-foreground/50 rounded-full flex items-center justify-center">
              <svg 
                className="w-3 h-3 text-muted-foreground/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* SERVICES — bento grid full-width avec effets */}
      <section id="services" className="relative w-full py-16">
        <div className="absolute inset-0 z-0">
          <Squares 
            speed={0.2} 
            squareSize={83}
            direction='diagonal'
            borderColor='rgba(134, 112, 39, 0.65)'
            hoverFillColor='rgba(124, 255, 142, 0.1)'
          />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Des services pensés pour l&apos;efficacité</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">De la migration à l&apos;externalisation complète, nous construisons un accompagnement de bout en bout.</p>
            </div>
          </div>
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="57, 83, 45"
          />
        </div>
      </section>

      {/* PROCESS — étapes avec badges */}
      <section className="relative w-full">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <DotGrid
            dotSize={6}
            gap={25}
            baseColor="#e0e0e0"
            activeColor="#7cff8e"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-black">Notre méthode, sans surprise</h2>
              <p className="text-black/80 mt-3 max-w-2xl mx-auto">Une exécution claire, documentée et contrôlée, à chaque étape.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.k} className="relative text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-black font-bold border border-black/20 shadow-lg">
                    {s.k}
                  </div>
                  <h3 className="text-lg font-semibold text-black">{s.title}</h3>
                  <p className="text-sm text-black/70 mt-1">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES — design premium avec effets visuels */}
      <section className="relative w-full py-20 bg-gradient-to-br from-background via-background/95 to-accentGreen/5">
        {/* Fond décoratif subtil */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accentGreen/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accentGold/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* En-tête avec badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Témoignages clients
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ils nous font <span className="text-accentGreen">confiance</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des syndics et groupes immobiliers partout en France nous font confiance pour leurs projets les plus sensibles.
            </p>
          </div>

          {/* Grille de témoignages avec effets */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Marie Dubois",
                role: "Directrice, Syndic Immobilier Paris",
                content: "Migration express réalisée en 48h sans interruption de service. L'équipe Migr a su gérer la transition avec une précision chirurgicale. Nous avons gagné un temps précieux sur nos opérations quotidiennes.",
                rating: 5,
                highlight: "Migration express"
              },
              {
                name: "Jean-Pierre Martin",
                role: "Gérant, Groupe Immobilier Lyon",
                content: "Externalisation complète de notre comptabilité. Résultat : 40% de réduction des coûts et une conformité parfaite. L'accompagnement personnalisé fait toute la différence.",
                rating: 5,
                highlight: "40% d'économies"
              },
              {
                name: "Sophie Laurent",
                role: "Responsable, Copropriétés Marseille",
                content: "Formation de notre équipe et audit de nos processus. Nous avons maintenant des procédures claires et une équipe autonome. Merci pour votre expertise !",
                rating: 5,
                highlight: "Formation complète"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                  <CardHeader className="pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accentGreen/20 to-accentGold/20 flex items-center justify-center shadow-md">
                          <span className="text-accentGreen font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-accentGold text-accentGold" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Badge highlight - directement collé au témoignage */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accentGreen/10 text-accentGreen text-xs font-medium mb-0">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {testimonial.highlight}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-accentGreen/20" />
                      <p className="text-muted-foreground leading-relaxed pl-4 italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CardContent>
                  
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Statistiques de confiance */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-accentGreen/10 to-accentGold/10 border border-accentGreen/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accentGreen">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction client</div>
              </div>
              <div className="w-px h-12 bg-muted-foreground/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accentGold">150+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="w-px h-12 bg-muted-foreground/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accentGreen">10 ans</div>
                <div className="text-sm text-muted-foreground">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL — contraste fort */}
      <SectionBackground variant="cta" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl border bg-primary text-primary-foreground">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="p-10 md:p-14 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Prêt à accélérer votre gestion ?</h2>
                <p className="mt-3 opacity-90 max-w-xl">Obtenez un devis gratuit et une feuille de route concrète en moins de 48h.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="h-12 px-8 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0"
                  >
                    <span className="relative z-10 inline-flex items-center">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    {/* Effet de shimmer doré */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    asChild
                    className="h-12 px-8 group relative overflow-hidden bg-gradient-to-r from-primary-foreground/5 to-primary-foreground/10 hover:from-primary-foreground/10 hover:to-primary-foreground/15 border-primary-foreground/20 hover:border-primary-foreground/30 transition-all duration-300"
                  >
                    <Link href="/faq">
                      <span className="relative z-10 inline-flex items-center font-medium">
                        Nous contacter
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                      {/* Effet de shimmer au survol */}
                      <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-auto rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img 
                    src="/dashboard.png" 
                    alt="Dashboard Migr - Interface de gestion comptable pour copropriétés"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName="Devis général"
      />
    </div>
  );
}
