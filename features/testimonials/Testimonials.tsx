"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Migr nous a accompagnés lors de notre migration logicielle. Leur expertise et leur réactivité ont fait toute la différence. Aucune perte de données, une transition fluide.",
    author: "Marie Dubois",
    role: "Directrice, Syndic Immobilier Paris",
    company: "SI Paris"
  },
  {
    quote: "L'externalisation de notre comptabilité avec Migr nous permet de nous concentrer sur notre cœur de métier. Un service impeccable et une équipe à l'écoute.",
    author: "Jean-Pierre Martin",
    role: "Gérant, Gestion Patrimoine",
    company: "GP Conseil"
  },
  {
    quote: "En 10 ans de collaboration, Migr a toujours su s'adapter à nos besoins. Leur connaissance du secteur de la copropriété est remarquable.",
    author: "Sophie Laurent",
    role: "Syndic, Résidences du Parc",
    company: "RP Management"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-surface/30">
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
            Témoignages
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-ink mb-4">
            La confiance de nos clients
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Découvrez comment nous accompagnons les syndics dans leur transformation digitale.
          </p>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 bg-surface border border-border rounded-2xl hover:shadow-lift transition-all duration-300">
                {/* Icône de citation */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accentGold/60" />
                </div>

                {/* Citation */}
                <blockquote className="text-ink leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Auteur */}
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-ink">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                  <div className="text-xs text-accentGreen font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-accentGreen hover:text-accentGold transition-colors font-medium">
            Voir tous les témoignages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
