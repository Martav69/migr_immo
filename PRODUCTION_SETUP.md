# Guide de Configuration Production - Resend

## Configuration actuelle (Développement)

Votre application est maintenant configurée avec Resend pour l'envoi d'emails. Voici ce qui a été mis en place :

### 1. Service Email (`lib/email-service.ts`)
- Service centralisé pour l'envoi d'emails
- Templates HTML professionnels pour les emails
- Gestion des emails de contact et de devis
- Emails de confirmation automatiques

### 2. API Routes
- `/api/contact` - Traitement du formulaire de contact
- `/api/quote` - Traitement du formulaire de devis
- Validation des données côté serveur
- Gestion d'erreurs robuste

### 3. Interface utilisateur
- Feedback visuel en temps réel
- États de chargement
- Messages de succès/erreur
- Validation côté client

## Configuration pour la Production

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Clé API Resend (remplacez par votre vraie clé)
RESEND_API_KEY=re_DAkb2m3A_GC1N3nbwQC5C1B9fZruyoEnR
```

### 2. Configuration Vercel (Recommandé)

1. **Connectez votre projet à Vercel**
2. **Ajoutez la variable d'environnement :**
   - Allez dans Settings > Environment Variables
   - Ajoutez : `RESEND_API_KEY` avec votre clé de production
   - Sélectionnez "Production" et "Preview"

### 3. Configuration du domaine d'envoi

**IMPORTANT :** Pour la production, vous devez configurer un domaine vérifié dans Resend.

#### Étapes :
1. Connectez-vous à [Resend Dashboard](https://resend.com/domains)
2. Ajoutez votre domaine (ex: `migr-immobilier.fr`)
3. Suivez les instructions DNS pour vérifier le domaine
4. Une fois vérifié, mettez à jour l'email d'envoi dans `lib/email-service.ts`

### 4. Modifications nécessaires pour la production

#### Dans `lib/email-service.ts`, ligne 85 et 105 :

```typescript
// Remplacer cette ligne :
to: ['contact@migr-immobilier.fr'], // À remplacer par l'email de production

// Par :
to: ['votre-email@migr-immobilier.fr'], // Email de réception des demandes
```

#### Dans `lib/email-service.ts`, ligne 87 et 107 :

```typescript
// Remplacer cette ligne :
from: 'contact@migr-immobilier.fr',

// Par (une fois le domaine vérifié) :
from: 'noreply@migr-immobilier.fr', // Ou contact@migr-immobilier.fr
```

### 5. Test en production

1. **Testez les formulaires :**
   - Formulaire de contact (`/contact`)
   - Modal de devis (bouton "Demander un devis")

2. **Vérifiez les emails :**
   - Email reçu par votre équipe
   - Email de confirmation envoyé au client

### 6. Monitoring et logs

- Les erreurs sont loggées dans la console du serveur
- Vérifiez les logs Vercel en cas de problème
- Surveillez les métriques Resend dans le dashboard

### 7. Sécurité

- La clé API est stockée côté serveur uniquement
- Validation stricte des données d'entrée
- Protection contre les attaques par injection
- Rate limiting recommandé (à implémenter si nécessaire)

## Coûts Resend

- **Gratuit :** 3 000 emails/mois
- **Payant :** À partir de 20$/mois pour 50 000 emails
- **Prix :** 0.40$ pour 1 000 emails supplémentaires

## Support

En cas de problème :
1. Vérifiez les logs Vercel
2. Consultez le dashboard Resend
3. Testez avec l'API Resend directement
4. Vérifiez la configuration DNS du domaine

## Prochaines étapes recommandées

1. **Configurer un domaine vérifié** (priorité haute)
2. **Tester en production** avec de vrais emails
3. **Configurer des webhooks Resend** pour le monitoring
4. **Implémenter un rate limiting** si nécessaire
5. **Ajouter des métriques** de conversion des formulaires
