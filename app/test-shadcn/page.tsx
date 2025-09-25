"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle, 
  AlertCircle, 
  Info, 
  XCircle,
  Heart,
  Star,
  Settings
} from "lucide-react";

export default function TestShadcnPage() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">
          Test des composants Shadcn/UI
        </h1>

        {/* Test des boutons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Test des boutons
            </CardTitle>
            <CardDescription>
              Vérification des différentes variantes de boutons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Bouton par défaut</Button>
              <Button variant="secondary">Bouton secondaire</Button>
              <Button variant="secondary">Bouton outline</Button>
              <Button variant="ghost">Bouton ghost</Button>
              <Button variant="destructive">Bouton destructif</Button>
              <Button disabled>Bouton désactivé</Button>
              {isLoading ? (
                <Button disabled>Chargement...</Button>
              ) : (
                <Button onClick={handleButtonClick}>Test loading</Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Test des inputs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Test des inputs</CardTitle>
            <CardDescription>
              Vérification des champs de saisie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Input normal</label>
                <Input 
                  placeholder="Tapez quelque chose..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Valeur: "{inputValue}"
                </p>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Input désactivé</label>
                <Input placeholder="Désactivé" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test des cards avec icônes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Succès</CardTitle>
              <CardDescription>Opération réussie</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Info className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Information</CardTitle>
              <CardDescription>Informations importantes</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-lg">Attention</CardTitle>
              <CardDescription>Attention requise</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">Erreur</CardTitle>
              <CardDescription>Une erreur s'est produite</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Test des couleurs du thème */}
        <Card>
          <CardHeader>
            <CardTitle>Test des couleurs du thème</CardTitle>
            <CardDescription>
              Vérification des variables CSS personnalisées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-16 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">Primary</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-medium">Secondary</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-medium">Accent</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Muted</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">État du test :</h3>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">Si vous voyez cette page avec tous les styles, Shadcn/UI fonctionne correctement !</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bouton de retour */}
        <div className="text-center mt-8">
          <Button asChild>
            <a href="/">Retour à l'accueil</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
