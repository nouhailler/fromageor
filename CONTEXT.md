# Contexte de reprise

Note de passage de relais entre sessions. Ce qui est **à faire**, ce qui est
**déjà fait**, et les pièges rencontrés. Le fonctionnement du projet lui-même
est documenté dans [README.md](README.md) — ce fichier ne le répète pas.

Dernière mise à jour : **20/08/2026**, après l'ajout de l'Occitanie
(commit `4f7c717`). Base à **170 fiches, 10 régions**.

---

## 🎯 À faire demain — passer en revue la liste de fromages

Croiser la liste ci-dessous avec la base et écrire les fiches manquantes qui
résistent à la vérification. **Le croisement automatique a déjà été fait**
(recherche plein texte sur `ALL_CHEESES`), voici son résultat.

### Déjà dans la base — rien à faire

| Fromage de la liste | État |
| --- | --- |
| Roquefort | ✔ Occitanie, AOP, ajouté le 20/08 |
| Laguiole | ✔ Occitanie (rapatrié d'Auvergne-Rhône-Alpes) |
| Bleu des Causses | ✔ Occitanie (rapatrié d'Auvergne-Rhône-Alpes) |
| Pélardon | ✔ Occitanie, AOP |
| Rocamadour | ✔ Occitanie, AOP — `Cabécou` est déjà un de ses noms alternatifs |
| Tomme des Pyrénées | ✔ Occitanie, IGP |
| Bethmale | ✔ Occitanie |
| Moulis | ✔ Occitanie |
| Tome fraîche de l'Aubrac | ✔ Occitanie |
| Pérail | ✔ Occitanie, IGP |
| Bleu de Gex | ✔ dans la base — **mais mal rattaché**, voir ci-dessous |

### Absents de la base — candidats à instruire

| Fromage | Première chose à vérifier |
| --- | --- |
| **Ossau-Iraty** | AOP majoritairement **Pyrénées-Atlantiques (64)**, donc Nouvelle-Aquitaine. Vérifier l'étendue réelle de l'aire en Hautes-Pyrénées avant de le ranger en Occitanie — sinon il attend l'arrivée de la Nouvelle-Aquitaine |
| **Rogallais** (Ariège) | Existence et orthographe à confirmer sur une source vérifiable |
| **Cabécou de Livernon** (Lot) | Distinct du Rocamadour AOP, ou simple appellation locale du même palet ? Risque de doublon |
| **Cabécou du Bleu** | Nom non identifié — probable coquille de transcription, à élucider avant toute fiche |
| **Recaoutou / Tome de Lozère** | Deux noms pour un même fromage ? Vérifier lequel est le nom d'usage |
| **Écu du Pays de Sault** (Aude) | À confirmer ; le pays de Sault est bien audois |
| **Clavière** (Lozère) | À confirmer |
| **Tomme de brebis des Pyrénées** | L'IGP Tomme des Pyrénées couvre déjà vache, brebis et mixte. Trancher : fiche distincte, ou nom alternatif greffé sur la fiche existante (qui est aujourd'hui décrite au lait de vache) |

### Correction à faire au passage

`bleu-gex` est rattaché à **`auvergne-rhone-alpes`** alors que l'AOP Bleu de
Gex Haut-Jura est de l'Ain et du Jura, donc de **Bourgogne-Franche-Comté**.
Même nature d'erreur que le bleu des Causses et le laguiole, et même correctif :
une entrée dans `EXTRA_REGION_OVERRIDES` (`src/data/cheeses-extra.ts`), qui est
déjà couverte par un test.

Ce fromage n'a rien à voir avec l'Occitanie : la liste le signalait elle-même
comme limitrophe.

---

## ⚠️ Deux règles apprises hier, à ne pas réapprendre

**1. Ne pas écrire une fiche sur une intuition.** Le « Rogeret des Cévennes »
avait été écrit comme lozérien ; la seule source vérifiable le donne
**ardéchois**, donc en Auvergne-Rhône-Alpes. Il a été retiré plutôt que rangé
au hasard. Même vigilance pour les six candidats ci-dessus : `npm run
enrich-wikipedia-extra` sert autant de garde-fou factuel que de source de
photos, et le résumé Wikipédia doit être **lu** avant d'être gardé.

Deux erreurs ont été rattrapées comme ça le 20/08 : le Cathare se fabrique en
Haute-Garonne (et non dans l'Aude comme écrit), et le Pérail porte une IGP.

**2. Se méfier des noms alternatifs génériques.** L'alias nu `Bonneval` sur la
Trappe de Bonneval a suffi pour que le script apparie un **Bleu de
Bonneval-sur-Arc** savoyard, sans rapport. L'appariement accepte un
recoupement d'un seul mot quand le nom n'en compte qu'un — c'est voulu. Un
`alt` doit donc être un vrai nom du fromage, jamais le seul nom du village.

---

## 🗺️ Coordonnées sur la carte

`FR_XY` contient de vraies coordonnées projetées, mais **pas la projection**.
Pour l'Occitanie, un modèle quadratique a été ajusté par moindres carrés sur
une centaine de repères déjà placés — résidu médian 0,5 unité (~5 km) — puis
chaque point vérifié point-dans-polygone contre `franceOutline.ts`. Placer un
point à vue donne des écarts bien plus grands.

Le script d'ajustement n'a pas été conservé (jetable). Le refaire prend une
dizaine de minutes : lire `map`/`commune` des fiches existantes, poser les
lon/lat connues, ajuster `[1, u, v, u², v², uv]` avec `u = lon − 3` et
`v = lat − 46,5` (centrer, sinon la matrice normale est mal conditionnée).

**Piège** : la silhouette n'a que 47 points pour toute la France. Près des
frontières, une position exacte peut faire déborder la pastille (rayon 2,6) du
tracé — les trois fromages du Couserans sont volontairement remontés de
1,3 unité pour cette raison, ce qui est noté en tête de leur fichier.

---

## 📋 Le reste du chantier, après cette liste

Par ordre d'intérêt décroissant :

1. **Les trois régions manquantes** — Nouvelle-Aquitaine (Ossau-Iraty),
   Provence-Alpes-Côte d'Azur (Banon), Pays de la Loire. L'historique avance
   une ou deux régions par commit ; le moule est stable, voir
   `src/data/cheeses-occitanie.ts` comme dernier exemple en date.
2. **Complétude des fiches existantes** — au 20/08 : photo sur 109/170,
   résumé Wikipédia sur 122/170, et 38 fiches sans `fabrication` /
   `conservation` / `service` / `anecdote`. C'est du rattrapage, pas du
   développement.
3. **Deux textes devenus faux** — le tiroir annonce « Données de démonstration
   — lot 1 » et l'écran Appellations parle de « ce jeu de démonstration » ;
   avec 170 fiches et 10 régions, ce n'est plus vrai. Accessoirement,
   `{regions.length <= 1 && « Autres régions à venir… »}` dans `Drawer.tsx`
   est du code mort depuis la deuxième région.
4. **Politique de confidentialité** — délibérément non créée, l'application ne
   collectant rien. La section « Données personnelles » des mentions légales
   en tient lieu et sert de point d'accroche si un compte, une mesure
   d'audience ou un formulaire apparaissait.

---

## ✅ Avant de considérer une étape finie

```bash
npm test && npm run lint && npm run typecheck && npm run build
```

Node **22** est requis (`.nvmrc`) : sous Node 20, jsdom casse au démarrage de
vitest avec `webidl.util.markAsUncloneable is not a function`.

Les captures se régénèrent avec `scripts/screenshots.mjs`, dont Playwright
n'est pas une dépendance du projet — voir la section « Logo & icônes » du
README.
