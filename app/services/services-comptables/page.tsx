"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { 
  Calculator, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  FileText,
  TrendingUp,
  Zap,
  Users,
  BarChart3
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

export default function ServicesComptablesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const benefits = [
    {
      icon: Shield,
      title: "Conformité garantie",
      description: "Respect de toutes les obligations comptables et fiscales"
    },
    {
      icon: TrendingUp,
      title: "Optimisation financière",
      description: "Amélioration de la gestion financière et des coûts"
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Traitement rapide et respect des échéances"
    },
    {
      icon: Users,
      title: "Expertise dédiée",
      description: "Équipe spécialisée en comptabilité immobilière"
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Rapprochement bancaire",
      description: "Réconciliation complète des comptes bancaires"
    },
    {
      icon: BarChart3,
      title: "Établissement des comptes",
      description: "Préparation des comptes annuels et budgets"
    },
    {
      icon: Calculator,
      title: "Saisie des écritures",
      description: "Enregistrement des factures, recettes et dépenses"
    },
    {
      icon: TrendingUp,
      title: "Analyse financière",
      description: "Tableaux de bord et indicateurs de performance"
    }
  ];

  const features = [
    "Rapprochement bancaire mensuel",
    "Saisie de toutes les écritures comptables",
    "Établissement des comptes annuels",
    "Préparation des budgets prévisionnels",
    "Gestion des fonds de garantie",
    "Suivi des charges et provisions",
    "Rapports financiers personnalisés",
    "Conseil en optimisation fiscale"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  Services Comptables
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comptabilité sur mesure pour vos copropriétés. Nous vous proposons 
                des services comptables flexibles adaptés à vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/contact">Nous contacter</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-medium">Services flexibles et adaptables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">100% conforme aux réglementations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Équipe d&apos;experts dédiée</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Réactivité garantie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Pourquoi externaliser votre comptabilité ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre expertise garantit une gestion comptable rigoureuse 
              et conforme pour vos copropriétés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Nos services comptables
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Des solutions comptables complètes et personnalisées 
              pour tous vos besoins de gestion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ce qui est inclus dans nos services
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <BarChart3 className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Garanties incluses</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Conformité réglementaire</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Réactivité garantie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Rapports personnalisés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Conseil en optimisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Besoin de services comptables ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd&apos;hui pour une gestion comptable 
            rigoureuse et conforme de vos copropriétés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName="Services Comptables"
      />
    </div>
  );
}

