# CV interactif — Victor Travers · V10

**Site public :** https://victortravers79-hash.github.io/cv-interactif/

Version **V10**, destinée à permettre aux recruteurs de découvrir les expériences professionnelles de Victor Travers (marketing, droit des assurances, souscription, sinistres, veille et IA).

## Expérience recruteur

- Sélection multiple de compétences techniques (sans sélection des soft skills).
- Trois cartes de réalisations compactes, adaptées à la sélection, avec ouverture à la demande de fiches détaillées.
- Fiches fondées sur les expériences et réalisations documentées, leurs méthodes, leurs résultats et leurs limites, y compris le mémoire de Master en droit des assurances.
- Bouton facultatif « Une question sur mon parcours ? » ouvrant un chatbot IA.
- Réponses rédigées à la première personne, dans un ton factuel, avec indication explicite dans l'interface qu'elles sont générées par une IA.
- Photos, CV PDF et coordonnées de contact.

## Architecture

- **Site public :** GitHub Pages, branche `main`, dossier `/(root)`, fichier `index.html`.
- **Interface du chatbot :** fichiers `chatbot/chat.css`, `chatbot/chat.js` et `chatbot/config.js` sur GitHub Pages.
- **Service IA :** Cloudflare Workers AI, code dans `chatbot/backend/`, hébergé séparément.
- **Worker actuel :** https://victor-travers-cv-chatbot.izemjet29.workers.dev
- **Page de test indépendante :** `test-chatbot.html` (accessible par URL directe ; ce n'est pas une page privée au sens d'une authentification).

## Précautions

Les questions saisies dans le chatbot sont envoyées à Cloudflare pour générer les réponses. Le site ne conserve pas l'historique de conversation de façon persistante. Les informations sensibles ou confidentielles ne doivent pas être saisies.

Le chatbot s'appuie sur une base d'expériences documentées, mais ses réponses automatiques peuvent contenir des erreurs. Il ne doit pas inventer de résultats mesurés ni présenter des recommandations étudiées comme déjà mises en œuvre.

La configuration Cloudflare prévoit des limites de débit et utilise Workers Free. Le respect de l'offre gratuite et les quotas effectifs restent à suivre depuis le tableau de bord Cloudflare. Si l'IA est indisponible, les fiches du CV restent consultables.

Les photos et les coordonnées sont publiques. Le CV PDF est un document distinct à actualiser si nécessaire.

## Évolutions

Le dossier `chatbot/backend/` est versionné sur GitHub ; une modification de son code nécessite un déploiement Cloudflare. Les changements apportés à `index.html` et à `chatbot/chat.js` passent par GitHub Pages.
