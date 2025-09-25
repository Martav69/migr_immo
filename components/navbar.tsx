"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// Données des services
const services = [
  {
    title: "Migration Express",
    description: "Transitions rapides entre logiciels",
    href: "/services/migration-express"
  },
  {
    title: "Intégration de Biens", 
    description: "Prise en charge de nouvelles copropriétés",
    href: "/services/integration-biens"
  },
  {
    title: "Services Comptables",
    description: "Comptabilité sur mesure",
    href: "/services/services-comptables"
  },
  {
    title: "Remplacement d'Équipe",
    description: "Personnel comptable temporaire", 
    href: "/services/remplacement-equipe"
  },
  {
    title: "Externalisation Complète",
    description: "Délégation totale",
    href: "/services/externalisation-complete"
  },
  {
    title: "Audit & Garantie",
    description: "Contrôles et conformité",
    href: "/services/audit-garantie"
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cleanup du timeout au démontage du composant
  useEffect(() => {
    return () => {
      if (servicesTimeout) {
        clearTimeout(servicesTimeout);
      }
    };
  }, [servicesTimeout]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-accentGreen to-accentGold rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-heading text-xl font-bold text-ink">Migr</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-ink hover:text-accentGreen transition-colors font-medium"
            >
              Accueil
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                // Annuler le timeout s'il existe
                if (servicesTimeout) {
                  clearTimeout(servicesTimeout);
                  setServicesTimeout(null);
                }
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                // Délai de 300ms avant de fermer le dropdown
                const timeout = setTimeout(() => {
                  setIsServicesOpen(false);
                }, 300);
                setServicesTimeout(timeout);
              }}
            >
              <button className="flex items-center space-x-1 text-ink hover:text-accentGreen transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-xl z-50"
                  onMouseEnter={() => {
                    // Annuler le timeout s'il existe
                    if (servicesTimeout) {
                      clearTimeout(servicesTimeout);
                      setServicesTimeout(null);
                    }
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    // Délai de 300ms avant de fermer le dropdown
                    const timeout = setTimeout(() => {
                      setIsServicesOpen(false);
                    }, 300);
                    setServicesTimeout(timeout);
                  }}
                >
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-muted mb-3">
                      Nos Services Professionnels
                    </h3>
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block p-3 rounded-lg hover:bg-accentGreen/10 transition-all duration-200 group"
                        >
                          <div className="font-medium text-sm text-ink group-hover:text-accentGreen">
                            {service.title}
                          </div>
                          <div className="text-xs text-muted mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/faq" 
              className="text-ink hover:text-accentGreen transition-colors font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden md:flex items-center">
            <Button 
              asChild
              className="h-10 px-6 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0"
            >
              <Link href="/contact" aria-label="Nous contacter">
                <span className="relative z-10 inline-flex items-center">
                  Contact
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                {/* Effet de shimmer doré */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden h-10 w-10 p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-ink hover:text-accentGreen transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-ink">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-muted hover:text-accentGreen transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/faq" 
                className="text-ink hover:text-accentGreen transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <Button 
                asChild
                className="w-full h-10 px-6 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact" aria-label="Nous contacter">
                  <span className="relative z-10 inline-flex items-center">
                    Contact
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  {/* Effet de shimmer doré */}
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                </Link>
              </Button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
