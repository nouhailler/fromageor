# fromageor — contexte projet

PWA d'encyclopédie des fromages français. React + Vite + TypeScript.

- **Fonctionnement du projet** : [README.md](README.md) — architecture, données,
  scripts, écrans, déploiement.
- **Reprise de session** : [CONTEXT.md](CONTEXT.md) — ce qui reste à faire, et
  les pièges déjà rencontrés (à lire avant d'ajouter une région ou une fiche).
- **Documentation** : suivre [DOCUMENTATION_SPEC.md](DOCUMENTATION_SPEC.md).
  Une tâche n'est « done » que si la doc est à jour.

## Deux règles de fond sur les données

1. **Ne jamais écrire une fiche de fromage sur une intuition.** Partir des
   catégories Wikipédia du département, lire l'article de chaque candidat, et
   écarter ce qui n'est pas vérifiable ou qui double une fiche existante.
2. **Node 22 est requis** (`.nvmrc`) : sous Node 20, vitest casse au démarrage.

## Avant de conclure

```bash
npm test && npm run lint && npm run typecheck && npm run build
```
