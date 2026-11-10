# Chatbot IA V10 — Projet CV interactif Victor Travers

## Statut

**Préparé et testé localement, PAS encore mis en ligne.** Le site public GitHub Pages reste inchangé tant que le service Cloudflare Workers AI n'est pas déployé et vérifié.

Le code source est conçu pour être ajouté à une branche séparée GitHub `feature/chatbot-v10` afin de ne pas altérer `main`.

## Contenu

- `src/worker.js` : serveur d'IA et contrôles de débit/format, CORS limité à ton domaine GitHub Pages, réponses à partir du parcours.
- `src/knowledge.js` : 14 expériences documentées, y compris le mémoire juridique enrichi (sans rapport AssessFirst).
- `wrangler.jsonc` : configuration Workers AI et deux limites de débit pour rester dans les quotas gratuits.
- `frontend/chat.css` : style discret du module de conversation.
- `frontend/chat.js` : interface avec suggestions, conversation, sources et mode démo.
- `frontend/chat.html` : bloc d'interface prévu pour être inséré dans le HTML existant.
- `frontend/config.js` : URL de service (`window.CV_CHAT_API`) vide tant que non déployé.
- `tests/worker.test.mjs` : tests simulés, **aucun crédit IA consommé**.

## Déployer sans rien payer (Windows, PowerShell)

1. Créer un compte sur https://dash.cloudflare.com/ et sélectionner **Workers Free**, sans paiement ni achat. Ne pas activer Workers Paid.
2. Télécharger ce dossier (ou utiliser les fichiers de la branche GitHub `feature/chatbot-v10`). Installer Node.js si nécessaire.
3. Ouvrir PowerShell dans le dossier contenant `wrangler.jsonc`.
4. Lancer `npx wrangler@latest login`, puis se connecter dans le navigateur.
5. Lancer `npx wrangler@latest deploy`. **Cette commande publie le Worker** et affiche une URL du type `https://victor-travers-cv-chatbot.<identifiant>.workers.dev`.
6. Transmettre cette URL dans la conversation ChatGPT (sans clé, mot de passe ou jeton). Nous pourrons alors mettre à jour `chatbot/config.js`, vérifier la connexion et décider ensemble de publier sur `main`.

Attention : **aucune exécution IA réelle** n'a été effectuée avant activation de ton compte. Le service Workers AI est gratuit jusqu'à **10 000 neurones par jour** sur Workers Free. Le quota étant partagé et réinitialisé quotidiennement, certaines réponses peuvent être refusées lorsque le quota est atteint. Aucun dépassement facturé tant que le compte n'est pas passé en plan payant. Consulter les conditions actuelles de Cloudflare.

## Respect de la vie privée et de la véracité

- Les faits transmis à l'IA correspondent aux expériences publiques du CV et aux résumés de projets, sans document privé, AssessFirst ni mémoire intégral.
- Les questions des recruteurs sont envoyées à Cloudflare pour génération de réponse ; pas d'historique permanent dans le site.
- Contrôle du débit par adresse IP (4/minute) et plafond supplémentaire par site (30/minute par zone Cloudflare, approximatif).
- CORS limite les navigateurs tiers mais **n'est pas une authentification** : le risque d'utilisation automatisée de l'endpoint public subsiste. Le plan gratuit limite cependant la consommation financière.
- Les réponses du modèle ne sont pas garanties exactes ; les projets et KPI doivent être vérifiés avant diffusion publique.
- En l'absence d'IA, le chatbot affiche distinctement un **aperçu guidé** et les trois cartes restent accessibles.

## Tests

`node --test tests/*.test.mjs`

La mise en ligne définitive sur GitHub Pages ne doit être faite qu'après validation du contenu, de la confidentialité et de l'expérience sur mobile.