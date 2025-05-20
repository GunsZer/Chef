# La Cité Suchard - Site Web

Site web de la Cité Suchard, un espace culturel unique à Neuchâtel.

## Technologies utilisées

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer

## Prérequis

- Node.js 18 ou supérieur
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd cite-suchard
```

2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env.local` à la racine du projet avec les variables suivantes :
```
CONTACT_EMAIL_USER=votre_email@gmail.com
CONTACT_EMAIL_PASS=votre_mot_de_passe
CONTACT_EMAIL_TO=destinataire@exemple.com
```

## Développement

Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Optimisation des images

Pour optimiser les images :
```bash
npm run optimize-images
```

## Tests

Lancer les tests :
```bash
npm test
```

## Build et déploiement

1. Construire le projet :
```bash
npm run build
```

2. Lancer le serveur de production :
```bash
npm start
```

## Structure du projet

```
cite-suchard/
├── public/
│   └── images/
│       ├── gallery/
│       └── events/
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
├── scripts/
└── tests/
```

## Déploiement

Le site peut être déployé sur :
- Vercel (recommandé pour Next.js)
- Netlify
- AWS Amplify
- Tout autre service supportant Next.js

## Licence

[Votre licence] 