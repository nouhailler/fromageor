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

Node **>= 22.12** est requis (jsdom 30, utilisé par les tests, en dépend ; un `.nvmrc` est fourni) :

```bash
nvm use            # Node 22
npm install
npm run dev        # serveur de dev
npm run build       # build de production (+ typecheck)
npm run typecheck
npm run test         # tests unitaires (Vitest)
npm run import-cheeses  # régénère src/data/{cheeses,fr-map}.ts depuis un dossier de handoff (voir scripts/import-cheeses.mjs)
npm run enrich-wikipedia  # enrichit src/data/cheeses.ts avec photo + résumé Wikipédia (voir scripts/enrich-wikipedia.mjs)
```

## Données

`src/data/cheeses.ts` et `src/data/fr-map.ts` sont générés automatiquement depuis les fichiers `cheeses.js` / `fr-map.js` du dossier de handoff de design via `scripts/import-cheeses.mjs` — voir ce script pour ajouter une nouvelle région.

### Enrichissement Wikipédia (photo + résumé)

`scripts/enrich-wikipedia.mjs` complète chaque fromage avec un champ `image` (photo + crédit, sourcée sur Wikimedia Commons) et un champ `wikipedia` (résumé + lien), tous deux optionnels sur le type `Cheese`. Il interroge l'API de Wikipédia en français par nom (puis noms alternatifs, puis `<nom> (fromage)`, puis une recherche plein texte en dernier recours), et rejette les correspondances qui ne sont pas réellement des articles de fromage (pages d'homonymie, communes du même nom, etc.).

- **Ré-exécuter après un import** : `import-cheeses.mjs` régénère `cheeses.ts` depuis le handoff et efface donc cet enrichissement — relancer `npm run enrich-wikipedia` ensuite.
- Idempotent : ne re-télécharge pas les fromages déjà enrichis (`--force` pour tout re-télécharger, `--id <id>` pour un seul fromage).
- Les photos restent hébergées sur `upload.wikimedia.org` (pas de copie locale) ; l'écran Fiche affiche le crédit (auteur + licence) en lien vers la page Commons du fichier.

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
