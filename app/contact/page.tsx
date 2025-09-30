"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "06 95 05 85 81",
      description: "Du lundi au vendredi, 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@migr-immobilier.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      content: "France entière",
      description: "Support local et distant"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      content: "7j/7 pour les urgences",
      description: "Intervention sous 24-48h"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Design épuré et élégant */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        {/* Fond décoratif subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-accentGreen/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accentGreen/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accentGold/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-medium mb-4 border border-accentGreen/20"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactez notre équipe
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Parlons de votre <span className="text-accentGreen">projet</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Notre équipe d&apos;experts est à votre disposition pour répondre 
              à tous vos besoins de <span className="text-accentGreen font-semibold">gestion immobilière</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Formulaire de contact principal */}
      <section className="relative py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded-2xl shadow-2xl overflow-hidden">
               {/* Informations de contact - Gauche */}
               <div className="relative p-8 lg:p-10 overflow-hidden">
                 {/* Image de fond */}
                 <div className="absolute inset-0">
                   <Image 
                     src="/contact-test.png" 
                     alt="Équipe professionnelle Migr"
                     fill
                     className="object-cover"
                     priority
                   />
                 </div>
                 
                 {/* Contenu avec glassmorphism */}
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   viewport={{ once: true }}
                   className="relative z-10"
                 >
                   {/* Badge glassmorphism */}
                   <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white text-sm font-medium mb-6 border border-white/30 shadow-2xl">
                     <Phone className="w-4 h-4 mr-2" />
                     Contactez notre équipe
                   </div>
                   
                   <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-2xl">
                     Contactez-nous
                   </h2>
                   <p className="text-base text-white mb-8 leading-relaxed drop-shadow-xl">
                   Une question ? Besoin d'aide ? Remplissez le formulaire, nous vous répondons sous 24h.
                   </p>
                   
                   <div className="space-y-4">
                     {contactInfo.map((info, index) => {
                       const IconComponent = info.icon;
                       return (
                         <motion.div 
                           key={index} 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.4, delay: index * 0.1 }}
                           viewport={{ once: true }}
                           className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                         >
                           <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl backdrop-blur-xl">
                             <IconComponent className="h-5 w-5 text-white" />
                           </div>
                           <div>
                             <h4 className="font-semibold text-white text-base drop-shadow-2xl">{info.title}</h4>
                             <p className="text-white font-semibold text-base drop-shadow-2xl">{info.content}</p>
                           </div>
                         </motion.div>
                       );
                     })}
                   </div>
                 </motion.div>
               </div>

               {/* Formulaire de contact - Droite */}
               <div className="bg-gray-50 p-10 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                   <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="space-y-3">
                       <label htmlFor="name" className="text-sm font-semibold text-foreground">
                         Nom complet *
                       </label>
                       <Input
                         id="name"
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                         placeholder="Jean Dupont"
                         required
                         className="h-12 border-2 border-gray-200 rounded-xl focus:border-accentGreen focus:ring-4 focus:ring-accentGreen/10 transition-all duration-200 shadow-sm hover:shadow-md"
                       />
                     </div>

                     <div className="space-y-3">
                       <label htmlFor="email" className="text-sm font-semibold text-foreground">
                         Email *
                       </label>
                       <Input
                         id="email"
                         name="email"
                         type="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="jean.dupont@syndic.fr"
                         required
                         className="h-12 border-2 border-gray-200 rounded-xl focus:border-accentGreen focus:ring-4 focus:ring-accentGreen/10 transition-all duration-200 shadow-sm hover:shadow-md"
                       />
                     </div>

                     <div className="space-y-3">
                       <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                         Téléphone
                       </label>
                       <Input
                         id="phone"
                         name="phone"
                         type="tel"
                         value={formData.phone}
                         onChange={handleInputChange}
                         placeholder="06 12 34 56 78"
                         className="h-12 border-2 border-gray-200 rounded-xl focus:border-accentGreen focus:ring-4 focus:ring-accentGreen/10 transition-all duration-200 shadow-sm hover:shadow-md"
                       />
                     </div>

                     <div className="space-y-3">
                       <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                         Sujet *
                       </label>
                       <Input
                         id="subject"
                         name="subject"
                         value={formData.subject}
                         onChange={handleInputChange}
                         placeholder="Migration vers un nouveau logiciel de gestion"
                         required
                         className="h-12 border-2 border-gray-200 rounded-xl focus:border-accentGreen focus:ring-4 focus:ring-accentGreen/10 transition-all duration-200 shadow-sm hover:shadow-md"
                       />
                     </div>

                     <div className="space-y-3">
                       <label htmlFor="message" className="text-sm font-semibold text-foreground">
                         Message *
                       </label>
                       <textarea
                         id="message"
                         name="message"
                         value={formData.message}
                         onChange={handleInputChange}
                         rows={5}
                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-accentGreen focus:ring-4 focus:ring-accentGreen/10 transition-all duration-200 shadow-sm hover:shadow-md"
                         placeholder="Nous souhaitons migrer nos 150 copropriétés vers un nouveau logiciel. Nous avons besoin d'un accompagnement pour la transition des données comptables et la formation de notre équipe..."
                         required
                       />
                     </div>

                     {/* Messages de statut */}
                     {submitStatus === 'success' && (
                       <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                         <div className="flex items-center gap-2">
                           <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                             <span className="text-white text-sm">✓</span>
                           </div>
                           <span className="font-medium">Message envoyé avec succès !</span>
                         </div>
                         <p className="mt-2 text-sm">Nous vous recontacterons rapidement.</p>
                       </div>
                     )}

                     {submitStatus === 'error' && (
                       <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                         <div className="flex items-center gap-2">
                           <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                             <span className="text-white text-sm">✗</span>
                           </div>
                           <span className="font-medium">Erreur lors de l'envoi</span>
                         </div>
                         <p className="mt-2 text-sm">{errorMessage}</p>
                       </div>
                     )}

                     <Button 
                       type="submit" 
                       disabled={isSubmitting}
                       className="w-full h-16 bg-gradient-to-r from-accentGreen to-accentGold hover:from-accentGreen/90 hover:to-accentGold/90 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                       <span className="flex items-center justify-center gap-3">
                         {isSubmitting ? (
                           <>
                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                             Envoi en cours...
                           </>
                         ) : (
                           <>
                             Envoyer ma demande
                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                           </>
                         )}
                       </span>
                     </Button>

                     <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                       <Shield className="w-4 h-4 text-accentGreen" />
                       <span>Vos informations restent confidentielles, nous ne les partageons jamais.</span>
                     </div>
                   </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
