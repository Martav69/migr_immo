"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { 
  RefreshCw, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Database,
  FileCheck,
  Users,
  Award

} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";
import Aurora from "@/components/backgrounds/Aurora";

export default function MigrationExpressPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const benefits = [
    {
      icon: Clock,
      title: "Migration rapide",
      description: "Transitions sécurisées en 2-6 semaines selon votre portefeuille"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Aucune perte de données, historique complet préservé"
    },
    {
      icon: Database,
      title: "Compatibilité totale",
      description: "Migration vers tous les logiciels du marché"
    },
    {
      icon: Users,
      title: "Formation incluse",
      description: "Formation de vos équipes aux nouveaux outils"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Audit initial",
      description: "Analyse complète de votre système actuel et de vos données"
    },
    {
      step: "2", 
      title: "Planification",
      description: "Élaboration d'un plan de migration personnalisé et sécurisé"
    },
    {
      step: "3",
      title: "Migration",
      description: "Transfert sécurisé de toutes vos données et documents"
    },
    {
      step: "4",
      title: "Validation",
      description: "Tests complets et validation de l'intégrité des données"
    },
    {
      step: "5",
      title: "Formation",
      description: "Formation de vos équipes et mise en production"
    }
  ];

  const features = [
    "Migration de tous types de données comptables",
    "Préservation de l'historique complet",
    "Conversion automatique des formats",
    "Tests de validation complets",
    "Formation personnalisée des équipes",
    "Support technique pendant 3 mois",
    "Documentation complète fournie",
    "Intervention d'urgence disponible"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Layout centré avec image */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#5EE1A9", "#B39849", "#5EE1A9"]}
            blend={0.5}
            amplitude={0.5}
            speed={0.3}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge de service */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-background/80 text-white text-sm font-medium mb-6 border border-white/30 backdrop-blur"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Service de Migration
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
            >
              Migration <span className="text-white font-bold drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}>Express</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-xl"
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)' }}
            >
              Transitions rapides et sécurisées entre logiciels de gestion immobilière. 
              <span className="text-accentGreen font-semibold drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}> Aucune perte de données</span>, 
              <span className="text-accentGold font-semibold drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}> formation incluse</span>.
            </motion.p>

            {/* Image principale */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative mb-6"
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-accentGreen/20 shadow-2xl">
                <Image 
                  src="/dashboard.png" 
                  alt="Interface de migration de données comptables - Migration Express Migr"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay avec métriques */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-background/80 backdrop-blur rounded-xl p-4 text-center border border-white/30">
                      <div className="text-2xl font-bold text-white">2-6</div>
                      <div className="text-xs text-white/80">semaines</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur rounded-xl p-4 text-center border border-white/30">
                      <div className="text-2xl font-bold text-white">0%</div>
                      <div className="text-xs text-white/80">perte données</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur rounded-xl p-4 text-center border border-white/30">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-white/80">sécurisé</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur rounded-xl p-4 text-center border border-white/30">
                      <div className="text-2xl font-bold text-white">3</div>
                      <div className="text-xs text-white/80">mois support</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
            >
              <Button 
                size="lg"
                onClick={() => setIsQuoteModalOpen(true)}
                className="h-14 px-10 group relative overflow-hidden bg-gradient-to-r from-accentGreen to-accentGold hover:from-accentGreen/90 hover:to-accentGold/90 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-accentGreen/25 transition-all duration-300 border-0 text-lg"
              >
                <span className="relative z-10 inline-flex items-center">
                  Demander un devis gratuit
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                asChild
                className="h-14 px-10 group relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 border-primary/20 hover:border-primary/30 transition-all duration-300 text-lg"
              >
                <Link href="/contact">
                  <span className="relative z-10 inline-flex items-center font-medium">
                    Nous contacter
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section avec fond décoratif */}
      <section className="relative w-full py-16 bg-gradient-to-br from-background via-background/95 to-accentGreen/5">
        {/* Fond décoratif subtil */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accentGreen/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accentGold/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* En-tête avec badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Pourquoi nous choisir
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Une expertise <span className="text-accentGreen">reconnue</span> pour vos migrations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Notre méthodologie éprouvée garantit une transition fluide et sécurisée 
              vers votre nouveau logiciel de gestion.
            </p>
          </div>

          {/* Grille de bénéfices avec effets */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <Card className="h-full border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-accentGreen/20 to-accentGold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <IconComponent className="h-8 w-8 text-accentGreen" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-accentGreen transition-colors duration-300">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                    
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline verticale */}
      <section className="py-16 bg-gradient-to-b from-background to-accentGreen/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accentGold/10 text-accentGold text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Notre méthode
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un processus <span className="text-accentGreen">éprouvé</span> en 5 étapes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche méthodique et sécurisée pour garantir le succès de votre migration.
            </p>
          </div>

          {/* Timeline verticale */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne verticale centrale */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accentGreen via-accentGold to-accentGreen"></div>
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-16 last:mb-0"
                >
                  {/* Point de la timeline */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accentGreen to-accentGold rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  {/* Contenu de l'étape */}
                  <div className="ml-8 flex-1">
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accentGreen/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accentGreen transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Icône spécifique à l'étape */}
                      <div className="mt-6 flex items-center gap-2 text-accentGreen">
                        {index === 0 && <Database className="w-5 h-5" />}
                        {index === 1 && <FileCheck className="w-5 h-5" />}
                        {index === 2 && <RefreshCw className="w-5 h-5" />}
                        {index === 3 && <Shield className="w-5 h-5" />}
                        {index === 4 && <Users className="w-5 h-5" />}
                        <span className="text-sm font-medium">
                          {index === 0 && "Analyse"}
                          {index === 1 && "Planification"}
                          {index === 2 && "Migration"}
                          {index === 3 && "Validation"}
                          {index === 4 && "Formation"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Grille unique */}
      <section className="py-16 bg-gradient-to-br from-accentGold/5 via-background to-accentGreen/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-medium mb-6">
              <FileCheck className="w-4 h-4 mr-2" />
              Fonctionnalités incluses
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tout ce dont vous avez besoin pour une <span className="text-accentGreen">migration réussie</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un service complet qui couvre tous les aspects de votre migration de données.
            </p>
          </div>

          {/* Grille de fonctionnalités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-accentGreen/20 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accentGreen/20 to-accentGold/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-accentGreen" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium leading-relaxed group-hover:text-accentGreen transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section garanties */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accentGreen/10 to-accentGold/10 rounded-3xl p-8 md:p-12 border border-accentGreen/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accentGreen to-accentGold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Nos garanties</h3>
                <p className="text-muted-foreground">Des engagements concrets pour votre tranquillité</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-12 h-12 bg-accentGreen/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accentGreen" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Migration sans interruption</div>
                    <div className="text-sm text-muted-foreground">Aucune perte de service</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-12 h-12 bg-accentGold/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-accentGold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Support technique 3 mois</div>
                    <div className="text-sm text-muted-foreground">Accompagnement inclus</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-12 h-12 bg-accentGreen/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-accentGreen" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Formation personnalisée</div>
                    <div className="text-sm text-muted-foreground">Équipes formées</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-12 h-12 bg-accentGold/20 rounded-xl flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-accentGold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Documentation complète</div>
                    <div className="text-sm text-muted-foreground">Guides détaillés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec design cohérent */}
      <SectionBackground variant="cta" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl border bg-primary text-primary-foreground">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="p-10 md:p-14 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Prêt à migrer vers un nouveau logiciel ?
                </h2>
                <p className="text-lg opacity-90 max-w-xl mb-6">
                  Contactez-nous dès aujourd'hui pour une consultation personnalisée 
                  et découvrez comment nous pouvons vous accompagner.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="h-12 px-8 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0"
                  >
                    <span className="relative z-10 inline-flex items-center">
                      Demander un devis gratuit
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    {/* Effet de shimmer doré */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    asChild
                    className="h-12 px-8 group relative overflow-hidden bg-gradient-to-r from-primary-foreground/5 to-primary-foreground/10 hover:from-primary-foreground/10 hover:to-primary-foreground/15 border-primary-foreground/20 hover:border-primary-foreground/30 transition-all duration-300"
                  >
                    <Link href="/contact">
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
                <div className="w-full h-auto rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-gradient-to-br from-primary-foreground/5 to-primary-foreground/10 backdrop-blur-sm">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Migration Express</h3>
                    <p className="text-sm opacity-80 mb-4">Transitions rapides et sécurisées</p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-primary-foreground/10 rounded-lg p-2">
                        <div className="font-bold">2-6 semaines</div>
                        <div className="opacity-70">Délai</div>
                      </div>
                      <div className="bg-primary-foreground/10 rounded-lg p-2">
                        <div className="font-bold">0% perte</div>
                        <div className="opacity-70">Données</div>
                      </div>
                    </div>
                  </div>
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
        serviceName="Migration Express"
      />
    </div>
  );
}
