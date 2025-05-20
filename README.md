# Chef Falafel - Site Vitrine

Un site vitrine moderne et responsive pour un restaurant de street food végétarienne, développé avec Next.js et Tailwind CSS.

## Fonctionnalités

- Design moderne et responsive
- Animations fluides
- Galerie d'images interactive
- Formulaire de contact
- Section témoignages clients
- Menu interactif
- Optimisé pour les performances

## Technologies utilisées

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion (pour les animations)

## Prérequis

- Node.js 14.x ou supérieur
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/chef-falafel.git
cd chef-falafel
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez vos variables d'environnement :
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_api
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Production

Pour construire l'application pour la production :

```bash
npm run build
# ou
yarn build
```

Pour démarrer le serveur de production :

```bash
npm run start
# ou
yarn start
```

## Structure du projet

```
chef-falafel/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   ├── pages/          # Pages Next.js
│   ├── styles/         # Styles globaux
│   └── utils/          # Utilitaires
├── .env.local          # Variables d'environnement
├── next.config.js      # Configuration Next.js
├── tailwind.config.js  # Configuration Tailwind
└── package.json        # Dépendances
```

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans `src/styles/globals.css` :

```css
:root {
  --color-primary: #2C5530;    /* Vert foncé */
  --color-secondary: #D4A017;  /* Jaune moutarde */
  --color-accent: #8B4513;     /* Brun terreux */
}
```

### Images

Placez vos images dans le dossier `public/` :
- `public/logo.png` : Logo du restaurant
- `public/hero-falafel.jpg` : Image principale
- `public/menu/` : Images des plats
- `public/gallery/` : Images de la galerie
- `public/testimonials/` : Photos des clients

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 