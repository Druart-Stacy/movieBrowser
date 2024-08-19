# Movie Browser

## Introduction

Movie Browser est une application web permettant de découvrir des films. Utilisant l'API The Movie Database, l'application permet aux utilisateurs de parcourir et de visualiser les détails des films populaires.

## Fonctionnalités

- Utilisation de React pour la création de l'application.
- Gestion du routage avec `react-router-dom`.
- Chaque page de film est accessible via une URL directe.
- Composants réutilisables pour une structure de code propre et maintenable.
- Design fidèle au modèle Figma fourni.

## Prérequis

- Node.js
- npm ou yarn

## Installation

1. Clonez le dépôt :
   ```bash
   git clone git@github.com:Druart-Stacy/movieBrowser.git

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Configuration

1. Créez un compte sur [The Movie Database](https://www.themoviedb.org/) et obtenez une clé API.
2. Créez un fichier `.env` à la racine du projet et ajoutez votre clé API :
   ```plaintext
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

## Lancement de l'application

1. Démarrez l'application en mode développement :
   ```bash
   npm start
   ```
   L'application sera accessible sur `http://localhost:3000`.

## Déploiement

1. Construisez l'application pour la production :
   ```bash
   npm run build
   ```

2. Déployez l'application sur [Netlify](https://www.netlify.com/) ou [Vercel](https://vercel.com/). Suivez leurs guides de déploiement pour plus de détails.

## Contribution

Stacy Druart
## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

- Merci à [The Movie Database](https://www.themoviedb.org/) pour leur API gratuite et complète.
- Merci à la communauté open source pour les outils et les bibliothèques utilisés dans ce projet.

---

Ce fichier README devrait fournir une bonne base pour votre projet, couvrant les aspects essentiels de l'installation, de la configuration et du déploiement de l'application.
>>>>>>> origin/main
