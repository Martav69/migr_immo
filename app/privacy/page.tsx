import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-8">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">1. Responsable du traitement</h2>
              <p className="mb-4">
                Le responsable du traitement des données personnelles est :
              </p>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p><strong>Raison sociale :</strong> [À MODIFIER - Nom de votre société]</p>
                <p><strong>Forme juridique :</strong> [À MODIFIER - SARL, SAS, etc.]</p>
                <p><strong>Adresse :</strong> [À MODIFIER - Adresse complète]</p>
                <p><strong>Email :</strong> [À MODIFIER - contact@migr.fr]</p>
                <p><strong>Téléphone :</strong> [À MODIFIER - 01 23 45 67 89]</p>
                <p><strong>RCS :</strong> [À MODIFIER - Numéro RCS]</p>
                <p><strong>SIRET :</strong> [À MODIFIER - Numéro SIRET]</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">2. Données collectées</h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes via nos formulaires de contact :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Nom de l'entreprise</li>
                <li>Message libre</li>
                <li>Données de navigation (cookies techniques)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">3. Finalités du traitement</h2>
              <p className="mb-4">Vos données personnelles sont traitées pour :</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Vous fournir les informations sur nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">4. Base légale</h2>
              <p className="mb-4">
                Le traitement de vos données personnelles est basé sur :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Votre consentement</strong> pour l'envoi de communications commerciales</li>
                <li><strong>L'intérêt légitime</strong> pour répondre à vos demandes de contact</li>
                <li><strong>L'exécution de mesures précontractuelles</strong> (devis, informations)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">5. Durée de conservation</h2>
              <p className="mb-4">Vos données sont conservées :</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Données de prospection :</strong> 3 ans après la collecte</li>
                <li><strong>Cookies techniques :</strong> 13 mois maximum</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">6. Destinataires des données</h2>
              <p className="mb-4">
                Vos données personnelles peuvent être transmises à :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Les membres autorisés de notre équipe</li>
                <li>Nos prestataires techniques (hébergement, maintenance)</li>
                <li>Les autorités compétentes si requis par la loi</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">7. Vos droits</h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit d'effacement :</strong> supprimer vos données</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
              </ul>
              <p className="mb-4">
                Pour exercer ces droits, contactez-nous à : <strong>[À MODIFIER - contact@migr.fr]</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">8. Cookies et technologies similaires</h2>
              <p className="mb-4">
                Notre site utilise des cookies techniques nécessaires au fonctionnement du site.
                Nous utilisons également Plausible Analytics qui ne collecte pas de données personnelles.
              </p>
              <p className="mb-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">9. Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Chiffrement des données en transit (HTTPS)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel à la protection des données</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">10. Transferts internationaux</h2>
              <p className="mb-4">
                Vos données sont traitées au sein de l'Union Européenne. 
                En cas de transfert vers un pays tiers, nous nous assurons qu'il bénéficie d'une décision d'adéquation de la Commission européenne ou que des garanties appropriées sont mises en place.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">11. Réclamations</h2>
              <p className="mb-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
              </p>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>Site web : <a href="https://www.cnil.fr" className="text-accentGreen hover:underline">www.cnil.fr</a></p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">12. Modifications</h2>
              <p className="mb-4">
                Cette politique de confidentialité peut être modifiée à tout moment. 
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">13. Contact</h2>
              <p className="mb-4">
                Pour toute question relative à cette politique de confidentialité ou au traitement de vos données personnelles :
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p><strong>Email :</strong> [À MODIFIER - contact@migr.fr]</p>
                <p><strong>Téléphone :</strong> [À MODIFIER - 01 23 45 67 89]</p>
                <p><strong>Adresse :</strong> [À MODIFIER - Adresse complète]</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/*
=== INSTRUCTIONS POUR PERSONNALISER CETTE PAGE ===

LIGNE 15-21 : Modifier les informations de votre société
- Remplacer [À MODIFIER - Nom de votre société] par le nom exact de votre entreprise
- Remplacer [À MODIFIER - SARL, SAS, etc.] par votre forme juridique
- Remplacer [À MODIFIER - Adresse complète] par votre adresse complète
- Remplacer [À MODIFIER - contact@migr.fr] par votre email de contact
- Remplacer [À MODIFIER - 01 23 45 67 89] par votre numéro de téléphone
- Remplacer [À MODIFIER - Numéro RCS] par votre numéro RCS
- Remplacer [À MODIFIER - Numéro SIRET] par votre numéro SIRET

LIGNE 80 : Modifier l'email de contact pour l'exercice des droits
- Remplacer [À MODIFIER - contact@migr.fr] par votre email de contact

LIGNE 120-122 : Modifier les informations de contact finales
- Remplacer [À MODIFIER - contact@migr.fr] par votre email de contact
- Remplacer [À MODIFIER - 01 23 45 67 89] par votre numéro de téléphone
- Remplacer [À MODIFIER - Adresse complète] par votre adresse complète

=== NOTES IMPORTANTES ===
- Cette politique est conforme au RGPD pour un site vitrine avec formulaires de contact
- Aucune donnée sensible n'est collectée (pas de données de santé, financières, etc.)
- Les cookies utilisés sont uniquement techniques et pour l'analytics (Plausible)
- Aucun transfert de données vers des pays tiers non sécurisés
- Durées de conservation adaptées à un site vitrine B2B
*/
