"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { CheckCircle, Shield, Clock, Database } from "lucide-react";

const softwareLogos = [
  { name: "Logiciel A", placeholder: "LA" },
  { name: "Logiciel B", placeholder: "LB" },
  { name: "Logiciel C", placeholder: "LC" },
  { name: "Logiciel D", placeholder: "LD" },
];

const kpiCards = [
  {
    icon: Database,
    value: "0%",
    label: "Perte de données",
    description: "Migration sécurisée garantie"
  },
  {
    icon: Clock,
    value: "24h",
    label: "Délai de départ",
    description: "Intervention rapide"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Conformité",
    description: "Respect des obligations"
  },
  {
    icon: CheckCircle,
    value: "10+",
    label: "Années d'expérience",
    description: "Expertise reconnue"
  }
];

export function Outcomes() {
  return (
    <section className="py-20 lg:py-24">
      <Container size="xl">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-medium mb-4">
            Nos résultats
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-ink mb-4">
            Logiciels maîtrisés, résultats garantis
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Nous maîtrisons les principaux logiciels du marché et garantissons des performances optimales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logiciels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif font-bold text-ink mb-4">
                Logiciels de gestion maîtrisés
              </h3>
              <p className="text-muted mb-6">
                Notre équipe est certifiée sur les principales solutions du marché pour garantir une migration ou une prise en main optimale.
              </p>
            </div>

            {/* Grille de logos (placeholders) */}
            <div className="grid grid-cols-2 gap-4">
              {softwareLogos.map((software, index) => (
                <motion.div
                  key={software.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center h-16 bg-surface border border-border rounded-xl hover:border-accentGreen/30 transition-colors"
                >
                  <span className="text-sm font-medium text-muted">{software.placeholder}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-sm text-muted">
              Et bien d&apos;autres solutions selon vos besoins spécifiques
            </div>
          </motion.div>

          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {kpiCards.map((kpi, index) => {
              const IconComponent = kpi.icon;
              
              return (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl hover:shadow-soft transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accentGreen/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-accentGreen" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-serif font-bold text-ink">{kpi.value}</span>
                      <span className="text-sm font-medium text-accentGreen">{kpi.label}</span>
                    </div>
                    <p className="text-sm text-muted">{kpi.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
