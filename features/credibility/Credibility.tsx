"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const credibilityItems = [
  {
    number: "10+",
    label: "années d'expertise",
    description: "Accompagnement des syndics"
  },
  {
    number: "100%",
    label: "conformité réglementaire",
    description: "Respect des obligations légales"
  },
  {
    number: "24h",
    label: "délai de départ",
    description: "Intervention rapide garantie"
  }
];

export function Credibility() {
  return (
    <section className="py-12 bg-surface/30 border-y border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credibilityItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-accentGreen">
                {item.number}
              </div>
              <div className="text-sm font-medium text-ink">
                {item.label}
              </div>
              <div className="text-xs text-muted">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
