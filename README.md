# CV interactif — Victor Travers · V10.9

**Site public :** https://victortravers79-hash.github.io/cv-interactif/

Version **V10.9**, destinée à permettre aux recruteurs de découvrir les expériences professionnelles de Victor Travers (marketing, droit des assurances, souscription, sinistres, veille et IA).

## Expérience recruteur

- La page d'accueil annonce explicitement la recherche d'un poste en **marketing dans l'assurance dès le 1er janvier 2027**, avec accès direct à l'email et au téléphone.
- Les coordonnées du profil restent visibles sur mobile. Le bouton chatbot centré devient plus compact pendant le défilement et propose des liens vers les réalisations associées à chaque réponse lorsque le backend les fournit.
- Navigation au clavier améliorée : lien d'évitement, repères de focus et accès direct aux fiches par le fragment `#projet-ID`.


- La page d'accueil propose deux grandes cartes cliquables : **« Voir mes Expériences et Projets »** et **« Sélectionner vos critères »**.
- Les deux modes sont de véritables vues distinctes : un seul parcours est affiché à la fois, avec **« Changer de mode d'exploration »** pour revenir à l'accueil.
- Le parcours libre commence par un **choix intermédiaire de quatre thématiques**, sous forme de cartes. Une fois la thématique choisie, seules ses réalisations sont présentées (respectivement 5, 4, 2 et 3), sous forme de cartes visuelles avec icône, entreprise et contexte, titre complet, description contextualisée et accès à la fiche détaillée. Aucun tag, pastille de mots-clés ou indicateur chiffré isolé.
- Le parcours par critères propose la sélection de compétences techniques (sans soft skills), puis exactement **trois cartes personnalisées** pour mettre en valeur les expériences pertinentes.
- Les liens `#realisations` et `#selectionArea` ouvrent les parcours correspondants ; `#theme-marketing`, `#theme-risques`, `#theme-droit` et `#theme-innovation` ouvrent directement une thématique. Le retour vers les quatre choix et la navigation arrière sont pris en charge.
- Fiches fondées sur les expériences et réalisations documentées, leurs méthodes, leurs résultats et leurs limites, y compris le mémoire de Master en droit des assurances.
- Bouton facultatif « Une question sur mon parcours ? » ouvrant un chatbot IA.
- Réponses rédigées à la première personne, dans un ton factuel, avec indication explicite dans l'interface qu'elles sont générées par une IA.
- Photos, CV PDF et coordonnées de contact.

Les quatre cartes de thématiques affichent désormais des **illustrations SVG neutres et locales** en bandeau, sans logos ni texte dans les visuels. Leurs titres, descriptions et liens d'exploration restent inchangés. Les images sont décoratives et n'ajoutent aucune information factuelle.

- Les quatre formations sont **visibles directement sur la page d’accueil**, avec leurs intitulés, établissements et dates. Le résumé est sur deux colonnes sur ordinateur et une colonne sur mobile, sans créer un troisième choix principal.
- Chaque formation présente désormais **des matières issues des programmes publics** et **leur apport contextualisé au parcours professionnel dans l'assurance**. L’accueil reste synthétique ; la vue Formation explique le cursus et donne un lien vers la page officielle IFPASS/Université de Poitiers/IUT. Les maquettes ont pu évoluer depuis les années de formation ; aucune compétence de management ou de décision non attestée n’est revendiquée.
- Rubrique **Formation** accessible depuis le menu (ordinateur et mobile) et depuis la mention « Double Bac+5 » du profil, sans créer un troisième choix principal sur l'accueil.
- Présentation chronologique de **4 formations** avec leurs noms officiels, établissements et années : DUT GEA (IUT de Niort, 2016–2018), Licence de droit des assurances (Pôle Universitaire de Niort, 2018–2021), Master de droit des assurances (Pôle Universitaire de Niort, 2021–2023) et titre RNCP Bac+5 « Management du Marketing et de la Relation Client en Assurance » (IFPASS & ICD Business School, 2024–2026).
- Accès direct à l'étude de cas du mémoire de Master depuis la formation (fragment `#memoire`), avec retour vers la thématique droit. Le titre RNCP est distingué des diplômes universitaires.

- **Aperçu LinkedIn :** métadonnées Open Graph et image PNG 1200 × 630 hébergée dans `assets/og-victor-travers.png`. Un rafraîchissement LinkedIn Post Inspector peut être nécessaire lors du premier partage.

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
