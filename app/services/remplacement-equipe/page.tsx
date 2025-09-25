"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { 
  Users, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Briefcase,
  GraduationCap,
  Headphones
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

export default function RemplacementEquipePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const benefits = [
    {
      icon: Zap,
      title: "Intervention rapide",
      description: "Remplacement sous 24-48h pour les urgences"
    },
    {
      icon: Shield,
      title: "Expertise garantie",
      description: "Professionnels qualifiés et expérimentés"
    },
    {
      icon: Briefcase,
      title: "Flexibilité",
      description: "Solutions temporaires ou long terme"
    },
    {
      icon: GraduationCap,
      title: "Formation incluse",
      description: "Formation de votre équipe permanente"
    }
  ];

  const scenarios = [
    {
      icon: Clock,
      title: "Urgences",
      description: "Arrêt maladie, démission, congé imprévu"
    },
    {
      icon: Users,
      title: "Pics d'activité",
      description: "Surcharge temporaire, projets spéciaux"
    },
    {
      icon: Briefcase,
      title: "Transitions",
      description: "Remplacement en attendant recrutement"
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Accompagnement pendant formation équipe"
    }
  ];

  const features = [
    "Personnel qualifié et expérimenté",
    "Intervention sous 24-48h pour les urgences",
    "Formation rapide aux outils et processus",
    "Intégration complète à votre équipe",
    "Respect de la confidentialité",
    "Suivi et reporting réguliers",
    "Possibilité de prolongation",
    "Formation de votre équipe permanente"
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
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  Remplacement d&apos;Équipe
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Personnel comptable temporaire et formation. Nous vous proposons 
                des solutions de remplacement rapides et qualifiées pour assurer 
                la continuité de vos services.
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
                    <span className="font-medium">Intervention sous 24-48h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Personnel qualifié et expérimenté</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Solutions flexibles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Formation incluse</span>
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
              Pourquoi choisir notre service de remplacement ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre expertise garantit une continuité de service 
              sans interruption pour vos copropriétés
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

      {/* Scenarios Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Situations où nous intervenons
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nous nous adaptons à tous vos besoins de remplacement 
              et de renfort temporaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => {
              const IconComponent = scenario.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{scenario.description}</p>
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
                Ce qui est inclus dans notre service
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
                  <span className="text-sm">Intervention rapide garantie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Personnel qualifié</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Formation rapide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Suivi et reporting</span>
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
            Besoin d&apos;un remplacement urgent ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès maintenant pour une intervention rapide 
            et qualifiée de votre équipe temporaire
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
        serviceName="Remplacement d'Équipe"
      />
    </div>
  );
}
