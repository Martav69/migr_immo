"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import servicesData from "@/content/services.json";

interface Service {
  id: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  slug: string;
  size: "small" | "medium" | "large";
  color: string;
}

export function ServiceBento() {
  const services: Service[] = servicesData.services;

  // Configuration du grid responsive
  const getGridClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-6 row-span-4 lg:col-span-3 lg:row-span-2";
      case "medium":
        return "col-span-6 row-span-2 lg:col-span-2 lg:row-span-2";
      case "small":
      default:
        return "col-span-6 row-span-2 lg:col-span-2 lg:row-span-1";
    }
  };

  // Styles de contenu adaptatifs
  const getContentClasses = (size: string) => {
    switch (size) {
      case "large":
        return {
          title: "text-2xl lg:text-3xl",
          excerpt: "text-base lg:text-lg",
          padding: "p-6 lg:p-8"
        };
      case "medium":
        return {
          title: "text-xl lg:text-2xl",
          excerpt: "text-sm lg:text-base",
          padding: "p-5 lg:p-6"
        };
      case "small":
      default:
        return {
          title: "text-lg lg:text-xl",
          excerpt: "text-sm",
          padding: "p-4 lg:p-5"
        };
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24">
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
            Nos services
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-ink mb-4">
            Des solutions pensées pour l&apos;efficacité
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            De la migration à l&apos;externalisation complète, nous construisons un accompagnement de bout en bout.
          </p>
        </motion.div>

        {/* Grid Bento */}
        <div className="grid grid-cols-6 grid-rows-4 gap-4 lg:gap-6 min-h-[600px] lg:min-h-[500px]">
          {services.map((service, index) => {
            const gridClasses = getGridClasses(service.size);
            const contentClasses = getContentClasses(service.size);
            const isLarge = service.size === "large";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${gridClasses} group`}
              >
                <Link
                  href={service.slug}
                  className="block h-full gradient-border hover-lift rounded-2xl bg-surface border border-border transition-all duration-300 group-hover:shadow-lift"
                  aria-label={`Découvrir ${service.title}`}
                >
                  <div className={`h-full flex flex-col ${contentClasses.padding}`}>
                    {/* Eyebrow */}
                    <div className="mb-3">
                      <span className="text-xs font-medium text-accentGold uppercase tracking-wide">
                        {service.eyebrow}
                      </span>
                    </div>

                    {/* Contenu principal */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className={`font-serif font-bold text-ink mb-2 ${contentClasses.title}`}>
                          {service.title}
                        </h3>
                        <p className={`text-muted leading-relaxed ${contentClasses.excerpt}`}>
                          {service.excerpt}
                        </p>
                      </div>

                      {/* CTA pour les grandes cartes */}
                      {isLarge && (
                        <div className="mt-6 pt-4 border-t border-border group-hover:border-accentGold/30 transition-colors">
                          <div className="flex items-center text-accentGreen text-sm font-medium group-hover:text-accentGold transition-colors">
                            Découvrir
                            <ArrowRight className="ml-2 size-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center text-accentGreen hover:text-accentGold transition-colors font-medium"
          >
            Voir tous nos services
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
