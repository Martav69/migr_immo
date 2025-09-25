import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-8">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">1. Éditeur du site</h2>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p><strong>Raison sociale :</strong> [À MODIFIER - Nom de votre société]</p>
                <p><strong>Forme juridique :</strong> [À MODIFIER - SARL, SAS, etc.]</p>
                <p><strong>Capital social :</strong> [À MODIFIER - Montant du capital]</p>
                <p><strong>Siège social :</strong> [À MODIFIER - Adresse complète]</p>
                <p><strong>RCS :</strong> [À MODIFIER - Ville et numéro RCS]</p>
                <p><strong>SIRET :</strong> [À MODIFIER - Numéro SIRET]</p>
                <p><strong>Code APE/NAF :</strong> [À MODIFIER - Code d'activité]</p>
                <p><strong>TVA intracommunautaire :</strong> [À MODIFIER - Numéro TVA]</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">2. Directeur de publication</h2>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p><strong>Nom :</strong> [À MODIFIER - Nom du directeur de publication]</p>
                <p><strong>Qualité :</strong> [À MODIFIER - Président, Gérant, etc.]</p>
                <p><strong>Email :</strong> [À MODIFIER - contact@migr.fr]</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">3. Hébergement du site</h2>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p><strong>Hébergeur :</strong> [À MODIFIER - Nom de l'hébergeur, ex: Vercel Inc.]</p>
                <p><strong>Adresse :</strong> [À MODIFIER - Adresse de l'hébergeur]</p>
                <p><strong>Téléphone :</strong> [À MODIFIER - Téléphone de l'hébergeur]</p>
                <p><strong>Site web :</strong> [À MODIFIER - Site web de l'hébergeur]</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">4. Objet du site</h2>
              <p className="mb-4">
                Le présent site a pour objet de présenter les services de [À MODIFIER - Nom de votre société] 
                dans le domaine de la gestion immobilière et des services comptables pour syndics.
              </p>
              <p className="mb-4">
                Les services proposés comprennent notamment :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Migration de logiciels de gestion immobilière</li>
                <li>Intégration de nouveaux biens</li>
                <li>Services comptables sur mesure</li>
                <li>Audit et fonds de garantie</li>
                <li>Formation et accompagnement</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">5. Propriété intellectuelle</h2>
              <p className="mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">6. Responsabilité</h2>
              <p className="mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                vouloir le signaler par email, à l'adresse [À MODIFIER - contact@migr.fr], en décrivant le 
                problème de la manière la plus précise possible.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">7. Liens hypertextes</h2>
              <p className="mb-4">
                Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en 
                cliquant sur ces liens, il sortira du site [À MODIFIER - migr.fr]. Ce dernier n'a pas de 
                contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, 
                être responsable de leur contenu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">8. Cookies</h2>
              <p className="mb-4">
                Le site [À MODIFIER - migr.fr] peut être amené à vous demander l'acceptation des cookies 
                pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur 
                votre disque dur par le serveur du site que vous visitez.
              </p>
              <p className="mb-4">
                Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier 
                texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties 
                de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">9. Droit applicable</h2>
              <p className="mb-4">
                Tout litige en relation avec l'utilisation du site [À MODIFIER - migr.fr] est soumis au 
                droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents 
                de [À MODIFIER - Ville de votre tribunal compétent].
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">10. Contact</h2>
              <p className="mb-4">
                Pour toute question relative aux présentes mentions légales :
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p><strong>Email :</strong> [À MODIFIER - contact@migr.fr]</p>
                <p><strong>Téléphone :</strong> [À MODIFIER - 01 23 45 67 89]</p>
                <p><strong>Adresse :</strong> [À MODIFIER - Adresse complète]</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">11. Médiation</h2>
              <p className="mb-4">
                Conformément aux dispositions de l'article L. 616-1 du Code de la consommation concernant 
                le règlement amiable des litiges, [À MODIFIER - Nom de votre société] adhère au service du 
                médiateur de la consommation dont les coordonnées figurent sur le site : 
                <a href="https://www.mediation-consommation.org" className="text-accentGreen hover:underline ml-1">
                  www.mediation-consommation.org
                </a>
              </p>
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

LIGNE 12-20 : Modifier les informations de votre société
- Remplacer [À MODIFIER - Nom de votre société] par le nom exact de votre entreprise
- Remplacer [À MODIFIER - SARL, SAS, etc.] par votre forme juridique
- Remplacer [À MODIFIER - Montant du capital] par votre capital social
- Remplacer [À MODIFIER - Adresse complète] par votre adresse complète
- Remplacer [À MODIFIER - Ville et numéro RCS] par votre RCS (ex: "Paris B 123 456 789")
- Remplacer [À MODIFIER - Numéro SIRET] par votre numéro SIRET
- Remplacer [À MODIFIER - Code d'activité] par votre code APE/NAF
- Remplacer [À MODIFIER - Numéro TVA] par votre numéro de TVA intracommunautaire

LIGNE 25-28 : Modifier le directeur de publication
- Remplacer [À MODIFIER - Nom du directeur de publication] par le nom du responsable
- Remplacer [À MODIFIER - Président, Gérant, etc.] par sa qualité
- Remplacer [À MODIFIER - contact@migr.fr] par votre email de contact

LIGNE 33-37 : Modifier les informations d'hébergement
- Remplacer [À MODIFIER - Nom de l'hébergeur, ex: Vercel Inc.] par votre hébergeur
- Remplacer [À MODIFIER - Adresse de l'hébergeur] par l'adresse de l'hébergeur
- Remplacer [À MODIFIER - Téléphone de l'hébergeur] par le téléphone de l'hébergeur
- Remplacer [À MODIFIER - Site web de l'hébergeur] par le site web de l'hébergeur

LIGNE 42 : Modifier l'objet du site
- Remplacer [À MODIFIER - Nom de votre société] par le nom de votre entreprise

LIGNE 67 : Modifier l'email de contact
- Remplacer [À MODIFIER - contact@migr.fr] par votre email de contact

LIGNE 75 : Modifier le nom de domaine
- Remplacer [À MODIFIER - migr.fr] par votre nom de domaine

LIGNE 85 : Modifier le nom de domaine
- Remplacer [À MODIFIER - migr.fr] par votre nom de domaine

LIGNE 92 : Modifier le nom de domaine
- Remplacer [À MODIFIER - migr.fr] par votre nom de domaine

LIGNE 99 : Modifier la juridiction compétente
- Remplacer [À MODIFIER - Ville de votre tribunal compétent] par votre ville

LIGNE 107-109 : Modifier les informations de contact finales
- Remplacer [À MODIFIER - contact@migr.fr] par votre email de contact
- Remplacer [À MODIFIER - 01 23 45 67 89] par votre numéro de téléphone
- Remplacer [À MODIFIER - Adresse complète] par votre adresse complète

LIGNE 118 : Modifier le nom de votre société
- Remplacer [À MODIFIER - Nom de votre société] par le nom de votre entreprise

=== NOTES IMPORTANTES ===
- Cette page respecte les obligations légales françaises pour un site vitrine
- Toutes les informations obligatoires sont présentes
- Les champs à personnaliser sont clairement identifiés
- La structure est conforme aux exigences légales françaises
- N'oubliez pas de mettre à jour la date de dernière mise à jour
*/

