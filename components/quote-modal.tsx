"use client";

import { useState, useEffect } from "react";
import { X, Phone, Mail, Building, FileText, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function QuoteModal({ isOpen, onClose, serviceName }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    // Info de l'agence
    agencyName: "",
    address: "",
    postalCode: "",
    city: "",
    // Info du contact référent
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Votre demande
    software: "",
    needs: ""
  });

  // Empêcher le scroll de la page de fond quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function pour restaurer le scroll
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Devis demandé:", formData);
    alert("Votre demande de devis a été envoyée. Nous vous recontacterons rapidement.");
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-start justify-center p-4 pt-8 pb-8">
        <Card 
          className="w-full max-w-4xl h-auto bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 bg-gradient-to-r from-accentGreen/10 to-accentGold/10 border-b border-accentGreen/20">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Demander un devis
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-red-100 hover:text-red-600"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Info de l'agence */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-accentGreen/20">
                <Building className="h-5 w-5 text-accentGreen" />
                <h3 className="text-lg font-semibold text-gray-800">Informations de l'agence</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label htmlFor="agencyName" className="text-sm font-medium text-gray-700">
                    Nom de l'agence *
                  </label>
                  <Input
                    id="agencyName"
                    name="agencyName"
                    value={formData.agencyName}
                    onChange={handleInputChange}
                    placeholder="Ex: Agence Immobilière Martin"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Adresse *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Ex: 123 Rue de la Paix"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="postalCode" className="text-sm font-medium text-gray-700">
                    Code postal *
                  </label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Ex: 75001"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">
                    Ville *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Ex: Paris"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Info du contact référent */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-accentGreen/20">
                <Users className="h-5 w-5 text-accentGreen" />
                <h3 className="text-lg font-semibold text-gray-800">Contact référent</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    Prénom *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Ex: Jean"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Nom *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Ex: Dupont"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean.dupont@agence.fr"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01 23 45 67 89"
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Votre demande */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-accentGreen/20">
                <FileText className="h-5 w-5 text-accentGreen" />
                <h3 className="text-lg font-semibold text-gray-800">Votre demande</h3>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="software" className="text-sm font-medium text-gray-700">
                    Logiciel actuellement utilisé *
                  </label>
                  <Input
                    id="software"
                    name="software"
                    value={formData.software}
                    onChange={handleInputChange}
                    placeholder="Ex: Gestion Locative Pro, Logicimmo, etc."
                    required
                    className="border-2 border-gray-200 focus:border-accentGreen focus:ring-2 focus:ring-accentGreen/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="needs" className="text-sm font-medium text-gray-700">
                    Description de vos besoins *
                  </label>
                  <textarea
                    id="needs"
                    name="needs"
                    value={formData.needs}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accentGreen/20 focus:border-accentGreen"
                    placeholder="Décrivez votre projet, vos besoins spécifiques, le nombre de copropriétés concernées, vos objectifs..."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1 h-12 sm:h-12 py-4 sm:py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-0"
              >
                Envoyer ma demande
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose} 
                className="flex-1 h-12 sm:h-12 py-4 sm:py-3 border-2 border-gray-300 hover:border-gray-400"
              >
                Annuler
              </Button>
            </div>

            {/* Note de confidentialité */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
              <Shield className="h-4 w-4 text-accentGreen" />
              <span>Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers.</span>
            </div>
          </form>
        </CardContent>
        </Card>
      </div>
    </div>
  );
}
