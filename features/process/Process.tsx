"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const processSteps = [
  {
    number: "01",
    title: "Analyse & Diagnostic",
    description: "Évaluation de votre situation actuelle et identification des besoins spécifiques",
    duration: "1-2 jours"
  },
  {
    number: "02", 
    title: "Proposition & Planning",
    description: "Élaboration d'une solution sur mesure avec planning détaillé et livrables clés",
    duration: "2-3 jours"
  },
  {
    number: "03",
    title: "Mise en œuvre",
    description: "Exécution du projet avec suivi régulier et communication transparente",
    duration: "Selon projet"
  },
  {
    number: "04",
    title: "Suivi & Optimisation",
    description: "Accompagnement post-livraison et ajustements pour optimiser les résultats",
    duration: "Ongoing"
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-surface/30">
      <Container size="xl">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accentGold/10 text-accentGold text-sm font-medium mb-4">
            Notre méthode
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-ink mb-4">
            Un processus éprouvé en 4 étapes
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            De l&apos;analyse initiale à l&apos;optimisation continue, nous garantissons une approche structurée et transparente.
          </p>
        </motion.div>

        {/* Étapes du processus */}
        <div className="space-y-8 lg:space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Ligne de connexion (sauf pour la dernière étape) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-16 w-px h-24 bg-gradient-to-b from-accentGold/50 to-accentGreen/50" />
              )}

              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Numéro et informations temporelles */}
                <div className="flex-shrink-0 lg:w-48">
                  <div className="flex items-center gap-4">
                    {/* Badge numéro */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accentGold to-accentGreen text-surface font-serif font-bold text-lg">
                      {step.number}
                    </div>
                    
                    {/* Durée */}
                    <div className="lg:hidden">
                      <div className="text-sm font-medium text-accentGreen">{step.duration}</div>
                      <div className="text-xs text-muted">Durée estimée</div>
                    </div>
                  </div>
                  
                  {/* Durée desktop */}
                  <div className="hidden lg:block mt-4">
                    <div className="text-sm font-medium text-accentGreen">{step.duration}</div>
                    <div className="text-xs text-muted">Durée estimée</div>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-surface rounded-2xl border border-border shadow-soft">
            <div className="text-center sm:text-left">
              <div className="text-sm font-medium text-accentGreen mb-1">Livrables clés</div>
              <div className="text-xs text-muted">Rapport détaillé • Planning • Suivi qualité</div>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="text-center sm:text-left">
              <div className="text-sm font-medium text-accentGold mb-1">Engagement qualité</div>
              <div className="text-xs text-muted">Validation à chaque étape • Communication transparente</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
