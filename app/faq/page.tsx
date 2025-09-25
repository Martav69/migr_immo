"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, HelpCircle, ArrowRight, Sparkles, MessageCircle, Clock, Shield, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { Button } from "@/components/ui/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quels sont vos domaines d'expertise ?",
    answer: "Nous nous spécialisons dans la gestion immobilière et la comptabilité de copropriétés. Nos services incluent la migration de logiciels, l'intégration de nouveaux biens, les services comptables sur mesure, le remplacement d'équipe, l'externalisation complète et les audits de conformité."
  },
  {
    question: "Combien de temps prend une migration de logiciel ?",
    answer: "La durée dépend de la complexité de votre portefeuille et du logiciel de destination. En moyenne, une migration complète prend entre 2 à 6 semaines. Nous proposons des solutions express pour les urgences et un accompagnement personnalisé tout au long du processus."
  },
  {
    question: "Travaillez-vous avec tous les logiciels de gestion ?",
    answer: "Oui, nous maîtrisons les principaux logiciels du marché : ImmoPro, ImmoWeb, ImmoGestion, Copropriétaires.com, et bien d'autres. Notre équipe se forme continuellement aux nouvelles technologies pour vous offrir les meilleures solutions."
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons sur toute la France. Nos équipes peuvent se déplacer sur site pour les audits et formations, ou travailler à distance pour les missions de comptabilité et migration. Nous nous adaptons à vos contraintes géographiques."
  },
  {
    question: "Comment garantissez-vous la confidentialité de nos données ?",
    answer: "La discrétion est notre priorité. Nous signons systématiquement des accords de confidentialité stricts, utilisons des protocoles de sécurité avancés et limitons l'accès aux données au strict minimum. Tous nos collaborateurs sont soumis à des clauses de confidentialité renforcées."
  },
  {
    question: "Proposez-vous des services d'urgence ?",
    answer: "Oui, nous disposons d'une équipe dédiée aux urgences pour les remplacements d'équipe, les migrations critiques ou les audits de conformité. Nous pouvons intervenir sous 24-48h selon la nature de votre demande."
  },
  {
    question: "Comment calculez-vous vos tarifs ?",
    answer: "Nos tarifs sont adaptés à la complexité et au volume de vos biens. Nous proposons des devis personnalisés basés sur le nombre de copropriétés, le type de service demandé et la durée de la mission. Contactez-nous pour un devis gratuit et sans engagement."
  },
  {
    question: "Formez-vous vos clients aux nouveaux outils ?",
    answer: "Absolument ! La formation de vos équipes fait partie intégrante de nos services. Nous proposons des sessions de formation personnalisées, de la documentation complète et un support technique pendant la période de transition."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section avec arrière-plan seamless */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        {/* Arrière-plan seamless avec formes géométriques */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accentGreen/5 via-background to-accentGold/5"></div>
          {/* Formes géométriques flottantes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-accentGreen/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accentGold/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accentGreen/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-accentGold/12 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Grille de points subtile */}
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(94, 225, 169, 0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-background/80 text-accentGreen text-sm font-medium mb-6 border border-accentGreen/30 backdrop-blur-sm shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Centre d'aide
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Questions <span className="text-accentGreen">Fréquentes</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Trouvez instantanément les réponses à vos questions sur nos services 
              de <span className="text-accentGreen font-semibold">gestion immobilière</span> et comptabilité.
            </motion.p>

            {/* Stats rapides */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-accentGreen/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-accentGreen" />
                </div>
                <span className="font-medium">8 questions essentielles</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-accentGold/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accentGold" />
                </div>
                <span className="font-medium">Réponses instantanées</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-accentGreen/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-accentGreen" />
                </div>
                <span className="font-medium">Informations fiables</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 px-4 bg-gradient-to-b from-background to-accentGreen/5">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tout ce que vous devez savoir
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des réponses claires et détaillées à vos questions les plus fréquentes
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-2 border-transparent hover:border-accentGreen/20 transition-all duration-300 hover:shadow-lg hover:shadow-accentGreen/10 bg-white/80 backdrop-blur-sm">
                  <CardHeader 
                    className="cursor-pointer hover:bg-accentGreen/5 transition-all duration-300 group"
                    onClick={() => toggleItem(index)}
                  >
                    <CardTitle className="flex items-center justify-between text-lg group-hover:text-accentGreen transition-colors">
                      <span className="pr-4">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="h-5 w-5 text-accentGreen flex-shrink-0" />
                      </motion.div>
                    </CardTitle>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0 pb-6">
                          <motion.p 
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-muted-foreground leading-relaxed text-base"
                          >
                            {item.answer}
                          </motion.p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        {/* Arrière-plan avec formes géométriques */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accentGold/5 via-background to-accentGreen/5"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-accentGold/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-accentGreen/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-background/80 text-accentGold text-sm font-medium mb-6 border border-accentGold/30 backdrop-blur-sm shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              Besoin d'aide personnalisée ?
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vous ne trouvez pas votre <span className="text-accentGreen">réponse</span> ?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d&apos;experts est à votre disposition pour répondre 
              à toutes vos questions spécifiques et vous accompagner dans vos projets.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="h-14 px-8 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0 text-lg"
              >
                <span className="relative z-10 inline-flex items-center">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Button>
              
              <Button 
                variant="outline"
                asChild
                className="h-14 px-8 group relative overflow-hidden border-2 border-accentGreen/30 hover:border-accentGreen/50 bg-background/80 hover:bg-accentGreen/5 transition-all duration-300 text-lg"
              >
                <a href="/contact">
                  <span className="relative z-10 inline-flex items-center">
                    Nous contacter
                    <MessageCircle className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </span>
                </a>
              </Button>
            </motion.div>

            {/* Informations de contact rapides */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accentGreen/10 flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-accentGreen" />
                </div>
                <span>contact@migr-immobilier.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accentGold/10 flex items-center justify-center">
                  <Clock className="w-3 h-3 text-accentGold" />
                </div>
                <span>Réponse sous 24h</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
