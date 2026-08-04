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
```

## Données

`src/data/cheeses.ts` et `src/data/fr-map.ts` sont générés automatiquement depuis les fichiers `cheeses.js` / `fr-map.js` du dossier de handoff de design via `scripts/import-cheeses.mjs` — voir ce script pour ajouter une nouvelle région.

## Logique métier

Portée fidèlement dans `src/lib/` depuis le prototype de référence : parsing des saisons (`season.ts`), suggestions d'accords (`accords.ts`), appellations (`appellations.ts`), recherche plein texte (`search.ts`), favoris multi-listes avec migration (`favorites-storage.ts`).
