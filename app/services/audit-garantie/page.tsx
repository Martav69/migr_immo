"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { 
  Shield, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Zap,
  Users,
  TrendingUp,
  Building2,
  Search,
  AlertTriangle,
  Headphones
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

export default function AuditGarantiePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const benefits = [
    {
      icon: Shield,
      title: "Conformité garantie",
      description: "Respect de toutes les obligations réglementaires"
    },
    {
      icon: Search,
      title: "Audit approfondi",
      description: "Contrôle complet de vos processus et comptes"
    },
    {
      icon: TrendingUp,
      title: "Optimisation",
      description: "Amélioration continue de vos processus"
    },
    {
      icon: Users,
      title: "Expertise reconnue",
      description: "Auditeurs spécialisés en immobilier"
    }
  ];

  const auditTypes = [
    {
      icon: FileText,
      title: "Audit comptable",
      description: "Contrôle de la comptabilité et des comptes"
    },
    {
      icon: Building2,
      title: "Audit des fonds de garantie",
      description: "Vérification de la gestion des fonds"
    },
    {
      icon: AlertTriangle,
      title: "Audit de conformité",
      description: "Respect des réglementations en vigueur"
    },
    {
      icon: TrendingUp,
      title: "Audit de processus",
      description: "Optimisation des procédures internes"
    }
  ];

  const features = [
    "Audit comptable complet",
    "Contrôle des fonds de garantie",
    "Vérification de conformité réglementaire",
    "Analyse des processus internes",
    "Rapport détaillé avec recommandations",
    "Plan d&apos;action personnalisé",
    "Suivi des corrections",
    "Formation des équipes",
    "Audit de suivi",
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  Audit & Garantie
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Contrôles, audits et gestion des fonds de garantie. Nous vous proposons 
                des audits complets pour garantir la conformité et l&apos;optimisation 
                de vos processus de gestion immobilière.
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
                    <span className="font-medium">Audits complets et approfondis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Conformité réglementaire garantie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Équipe d&apos;auditeurs spécialisés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Recommandations personnalisées</span>
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
              Pourquoi faire appel à nos services d&apos;audit ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre expertise garantit une évaluation rigoureuse 
              et des recommandations pertinentes
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

      {/* Audit Types Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Types d&apos;audit proposés
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Des audits spécialisés pour tous vos besoins 
              de contrôle et d&apos;optimisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditTypes.map((audit, index) => {
              const IconComponent = audit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{audit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{audit.description}</p>
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
                Ce qui est inclus dans nos audits
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
                  <span className="text-sm">Audit approfondi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Rapport détaillé</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Recommandations personnalisées</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Suivi des corrections</span>
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
            Besoin d&apos;un audit de conformité ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd&apos;hui pour un audit complet 
            et des recommandations personnalisées
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
        serviceName="Audit & Garantie"
      />
    </div>
  );
}
