# Fromages de France

Application mobile (PWA) de découverte des fromages français. Ce lot couvre la région **Auvergne-Rhône-Alpes** (50 fromages) et pose l'ossature UI/données pour ajouter d'autres régions ensuite.

Réimplémentation en React + Vite + TypeScript d'un handoff de design haute-fidélité (design system **Organic** : Caprasimo/Figtree, palette terracotta/sauge/crème), fidèle aux couleurs, typographies, espacements et à la logique métier du prototype de référence.

## Écrans

Accueil · Fiche détaillée · Recherche · Carte de France · Favoris multi-listes · Accords mets & boissons · Découpe · Calendrier des saisons · Appellations · Encyclopédie · Menu latéral (drawer).

## Stack

- React 19 + Vite + TypeScript
- CSS Modules + jetons du design system Organic (`src/styles/tokens.css`)
- `lucide-react` pour les icônes standards, icônes/diagrammes SVG portés à l'identique du handoff pour les glyphes propres au design
- PWA (`vite-plugin-pwa`), polices Caprasimo/Figtree self-hostées (`@fontsource/*`)
- Vitest pour les tests de la logique métier (`src/lib/`)

## Démarrer

```bash
npm install
npm run dev        # serveur de dev
npm run build       # build de production (+ typecheck)
npm run typecheck
npm run test         # tests unitaires (Vitest)
npm run import-cheeses  # régénère src/data/{cheeses,fr-map}.ts depuis un dossier de handoff (voir scripts/import-cheeses.mjs)
npm run fetch-cheese-images  # régénère src/data/cheese-images.ts depuis Wikipedia/Wikimedia Commons (voir scripts/fetch-cheese-images.mjs)
```

## Données

`src/data/cheeses.ts` et `src/data/fr-map.ts` sont générés automatiquement depuis les fichiers `cheeses.js` / `fr-map.js` du dossier de handoff de design via `scripts/import-cheeses.mjs` — voir ce script pour ajouter une nouvelle région.

## Images des fromages

`src/data/cheese-images.ts` associe à chaque fromage (par `id`) une photo trouvée automatiquement via l'API Wikipedia (page summary), avec l'attribution (auteur/licence) récupérée sur Wikimedia Commons. Généré par `scripts/fetch-cheese-images.mjs` :

```bash
npm run fetch-cheese-images                       # tous les fromages
node scripts/fetch-cheese-images.mjs --only reblochon,beaufort  # un sous-ensemble
node scripts/fetch-cheese-images.mjs --dry         # test sans écrire le fichier
```

L'image (si trouvée) et son crédit s'affichent sur la fiche détaillée (`CheeseDetailScreen`) ; sans entrée, l'écran retombe sur le placeholder habituel. Ce script nécessite un accès réseau sortant vers `*.wikipedia.org` / `*.wikimedia.org`, bloqué par défaut dans cet environnement de développement sandboxé — à lancer depuis un environnement/une session avec accès réseau complet.

## Logique métier

Portée fidèlement dans `src/lib/` depuis le prototype de référence : parsing des saisons (`season.ts`), suggestions d'accords (`accords.ts`), appellations (`appellations.ts`), recherche plein texte (`search.ts`), favoris multi-listes avec migration (`favorites-storage.ts`).

## Import / Export de la base de fromages

Un écran dédié (accessible depuis le menu latéral) permet de sauvegarder et d'étendre la base de fromages depuis l'interface :

- **Export** du jeu de données actif au format JSON, ou téléchargement d'un exemple de gabarit pré-rempli.
- **Import** JSON (collé ou depuis un fichier), avec validation champ par champ avant application.
- Les données importées sont stockées dans une surcouche `localStorage`, fusionnée par-dessus les données intégrées (upsert par `id`) sans jamais modifier le jeu de données embarqué — voir `useCheeseDatabase`.
- Accepte un simple tableau de fromages ou un objet `{ region?, cheeses[] }`, ce qui permet à un import d'enregistrer une nouvelle région.
- Schéma et validation : `src/lib/cheese-schema.ts`, `src/lib/cheese-import-export.ts` (testés).

## Déploiement

Le site est déployé sur Netlify : [fromageor.netlify.app](https://fromageor.netlify.app). La configuration (commande de build, dossier de publication, en-têtes de cache) se trouve dans `netlify.toml`.
