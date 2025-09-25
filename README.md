# Migr Immo - Site Immobilier

Un site web moderne pour une agence immobilière, construit avec Next.js 15, TypeScript, Tailwind CSS et shadcn/ui.

## 🏠 Fonctionnalités

- **Page d'accueil moderne** avec section hero et recherche
- **Galerie de biens** en vedette avec cartes interactives
- **Section services** (achat, vente, location)
- **Contact** avec informations de l'agence
- **Design responsive** optimisé mobile/desktop
- **Animations fluides** avec Framer Motion
- **Icônes modernes** avec Lucide React

## 🛠️ Technologies

- **Next.js 15** (App Router)
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants UI
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes

## 🚀 Installation et Démarrage

1. **Cloner le projet** :
```bash
git clone [url-du-repo]
cd migr_immo
```

2. **Installer les dépendances** :
```bash
npm install
```

3. **Lancer le serveur de développement** :
```bash
npm run dev
```

4. **Ouvrir dans le navigateur** :
```
http://localhost:3000
```

## 📁 Structure du Projet

```
migr_immo/
├── app/                    # Pages et layouts Next.js
│   ├── globals.css        # Styles globaux et variables CSS
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   └── ui/               # Composants shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/                  # Utilitaires
│   └── utils.ts          # Fonctions utilitaires
├── public/               # Assets statiques
└── tailwind.config.ts    # Configuration Tailwind
```

## 🎨 Design System

Le projet utilise un design system cohérent avec :
- **Couleurs** : Palette neutre avec accents primaires
- **Typographie** : Inter (texte) + Space Grotesk (titres)
- **Espacement** : Grille 8px
- **Animations** : Transitions fluides 160-320ms

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile First** : Optimisé pour mobile
- **Breakpoints** : sm, md, lg, xl
- **Navigation adaptative** : Menu hamburger sur mobile

## 🔧 Commandes Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur :
- **Vercel** (recommandé)
- **Netlify**
- **AWS Amplify**
- **Tout hébergeur Node.js**

## 📞 Contact

Pour toute question sur le projet :
- **Email** : contact@migrimmo.fr
- **Téléphone** : 01 23 45 67 89

---

**Développé avec ❤️ pour Migr Immo**
