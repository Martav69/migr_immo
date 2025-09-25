"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { 
  FileCheck, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Zap,
  Users,
  TrendingUp,
  Building2,
  Headphones
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

export default function ExternalisationCompletePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimisation des coûts",
      description: "Réduction significative des coûts de gestion"
    },
    {
      icon: Shield,
      title: "Expertise garantie",
      description: "Équipe spécialisée et expérimentée"
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Concentration sur votre cœur de métier"
    },
    {
      icon: Users,
      title: "Flexibilité",
      description: "Solutions adaptées à votre taille"
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Gestion comptable complète",
      description: "Toute la comptabilité de vos copropriétés"
    },
    {
      icon: Building2,
      title: "Administration des biens",
      description: "Gestion administrative et relationnel"
    },
    {
      icon: Users,
      title: "Support client",
      description: "Interface avec les copropriétaires"
    },
    {
      icon: FileCheck,
      title: "Conformité réglementaire",
      description: "Respect de toutes les obligations"
    }
  ];

  const features = [
    "Gestion comptable complète",
    "Administration des copropriétés",
    "Relation avec les copropriétaires",
    "Gestion des fonds de garantie",
    "Établissement des comptes annuels",
    "Préparation des budgets",
    "Suivi des charges et provisions",
    "Conseil et optimisation",
    "Reporting personnalisé",
    "Support technique dédié"
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
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  Externalisation Complète
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Délégation totale de la gestion comptable et administrative. 
                Nous prenons en charge l&apos;intégralité de la gestion de vos 
                copropriétés pour vous permettre de vous concentrer sur votre développement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">Nous contacter</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-medium">Délégation totale</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Expertise garantie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Équipe dédiée</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Optimisation des coûts</span>
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
              Pourquoi choisir l&apos;externalisation complète ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre expertise garantit une gestion optimale et rentable 
              de vos copropriétés
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
              Services inclus dans l&apos;externalisation
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Une prise en charge complète de tous vos besoins 
              de gestion immobilière
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
                Ce qui est inclus dans notre externalisation
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
              <Headphones className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Garanties incluses</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Équipe dédiée</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Support 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Reporting personnalisé</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Optimisation continue</span>
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
            Prêt à externaliser votre gestion ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd&apos;hui pour une délégation complète 
            et optimisée de vos copropriétés
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
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName="Externalisation Complète"
      />
    </div>
  );
}

