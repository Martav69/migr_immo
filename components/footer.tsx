import Link from "next/link";
import { Container } from "@/components/Container";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Tous les services disponibles
  const services = [
    { title: "Migration Express", href: "/services/migration-express", description: "Transitions rapides" },
    { title: "Intégration de Biens", href: "/services/integration-biens", description: "Onboarding copro" },
    { title: "Services Comptables", href: "/services/services-comptables", description: "Comptabilité sur mesure" },
    { title: "Remplacement d'Équipe", href: "/services/remplacement-equipe", description: "Renfort comptable" },
    { title: "Externalisation Complète", href: "/services/externalisation-complete", description: "Délégation totale" },
    { title: "Audit & Garantie", href: "/services/audit-garantie", description: "Contrôles & conformité" },
  ];

  const quickLinks = [
    { title: "Contact", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "Mentions légales", href: "/legal" },
    { title: "Confidentialité", href: "/privacy" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-background/95 to-accentGreen/5 border-t border-border/50">
      {/* Fond décoratif subtil */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accentGreen/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accentGold/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 py-8 lg:py-10">
          {/* Section principale */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
            {/* Brand et description - GAUCHE */}
            <div className="lg:col-span-4 space-y-3">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accentGreen to-accentGold text-white font-serif font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  M
                </div>
                <span className="font-serif font-bold text-2xl text-foreground group-hover:text-accentGreen transition-colors duration-300">
                  Migr
                </span>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed text-base max-w-md">
                Expert en services comptables pour syndics. Migration, externalisation et accompagnement sur mesure depuis 10 ans.
              </p>

              {/* Informations de contact avec icônes */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-5 h-5 text-accentGreen" />
                  <span className="font-medium">01 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5 text-accentGreen" />
                  <span className="font-medium">contact@migr.fr</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <MapPin className="w-5 h-5 text-accentGreen" />
                  <span className="font-medium">Paris, Lyon, Marseille</span>
                </div>
              </div>
            </div>

            {/* Services - liste simple - MILIEU */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-heading text-lg font-bold text-foreground">Nos services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium hover:translate-x-1 transform inline-block"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liens rapides et informations - DROITE */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-heading text-lg font-bold text-foreground">Navigation</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium hover:translate-x-1 transform inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Séparateur avec effet */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-accentGreen to-accentGold rounded-full" />
            </div>
          </div>

          {/* Bas de page */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              © {currentYear} Migr. Tous droits réservés.
            </div>
            
            {/* Liens légaux compacts */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/legal" className="hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Confidentialité
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}