# Contexte de reprise

Note de passage de relais entre sessions. Ce qui est **à faire**, ce qui est
**déjà fait**, et les pièges rencontrés. Le fonctionnement du projet lui-même
est documenté dans [README.md](README.md) — ce fichier ne le répète pas.

Dernière mise à jour : **21/08/2026**, après l'ajout de la Nouvelle-Aquitaine
et le rattachement du bleu de Gex. Base à **189 fiches, 11 régions**.

---

## ✅ Ce qui vient d'être fait

**Le bleu de Gex est passé en Bourgogne-Franche-Comté**, par une entrée dans
`EXTRA_REGION_OVERRIDES` (`src/data/cheeses-extra.ts`), comme le bleu des
Causses et le laguiole avant lui. Une nuance que la note précédente escamotait :
l'aire de l'AOP est **à cheval sur deux régions** — le pays de Gex et le
Haut-Bugey sont dans l'Ain, donc en Auvergne-Rhône-Alpes. On a tranché pour la
Bourgogne-Franche-Comté parce que les fruitières et les deux noms d'usage
(Haut-Jura, Septmoncel) y sont ; le commentaire du code le dit.

**La Nouvelle-Aquitaine est en place**, 19 fiches dans
`src/data/cheeses-nouvelle-aquitaine.ts` : ossau-iraty et chabichou du Poitou
sous AOP, mothais sur feuille reconnu en appellation d'origine le 21 novembre
2024, plus laruns, anneau du Vic-Bilh, Belloc, amou, trappe d'Échourgnac, bonde
de Gâtine, taupinette, jonchée, tricorne de Marans, feuille du Limousin,
chabis, carré du Poitou, tomme de Rilhac, caillebotte, pigouille et
couhé-vérac. Trois n'ont pas de résumé Wikipédia, toutes les trois à raison :
la caillebotte parce que l'article la définit comme un lait caillé et non un
fromage (voir règle 3), la pigouille et le couhé-vérac parce qu'ils n'ont pas
d'article propre — ils sont décrits dans « Chèvre du Poitou », qui leur a servi
de source. Le filtre a d'ailleurs bien refusé de rattacher au couhé-vérac
l'article de la commune de Couhé.

**Trois textes d'interface devenus faux ont été corrigés** : le pied du tiroir
affiche le compte réel de fiches et de régions au lieu de « Données de
démonstration — lot 1 », l'écran Appellations dit maintenant que Label Rouge et
Bio sont *déduits* de la famille et de l'intensité, et le code mort
`regions.length <= 1` a été retiré (avec la classe CSS devenue orpheline).

**`DOCUMENTATION_SPEC.md` est déposée à la racine**, avec un § 0 bis qui dit
honnêtement où en est la doc du projet : tout tient dans le README, et FAQ,
dépannage, changelog et support restent à écrire. `CLAUDE.md` la référence.

**La question ouverte sur l'ossau-iraty est tranchée** : l'aire AOP ne mord sur
les Hautes-Pyrénées que par **trois communes** (Arbéost, Arrens-Marsous,
Ferrières). Il est néo-aquitain, pas occitan. Un test le fige.

---

## 🎯 À faire — par ordre d'intérêt décroissant

### 1. Les deux régions métropolitaines manquantes

**Provence-Alpes-Côte d'Azur** (Banon AOP, brousse du Rove AOP, tomme d'Arles)
et **Pays de la Loire** (curé nantais, crémet, Port-Salut, Timanoix). Le moule
est stable : `src/data/cheeses-nouvelle-aquitaine.ts` est le dernier exemple en
date, et le README dit quels quatre fichiers brancher.

Attention pour PACA : le picodon et le saint-félicien du jeu généré sont donnés
« vallée du Rhône, Drôme/Ardèche », donc Auvergne-Rhône-Alpes — c'est correct,
ne pas les rapatrier. En revanche la **tomme du Champsaur** (`tomme-champsaur`,
Hautes-Alpes 05) est rangée en Auvergne-Rhône-Alpes et devrait rejoindre PACA :
même correctif d'une ligne dans `EXTRA_REGION_OVERRIDES`, à faire au moment où
la région existera.

### 2. Complétude des fiches existantes

Au 21/08 : photo sur **120/189**, résumé Wikipédia sur **138/189**, et
**38 fiches** sans `fabrication` / `conservation` / `service` / `anecdote`. Le
déficit se concentre sur les 50 fiches du handoff généré
(Auvergne-Rhône-Alpes), qui n'ont jamais eu de passe éditoriale. C'est du
rattrapage, pas du développement.

### 3. La doc qui manque

`DOCUMENTATION_SPEC.md` demande une FAQ, un guide de dépannage, un changelog
utilisateur, les limites connues et les procédures de support. Aucun des cinq
n'existe : tout est dans le README, qui est un document de développeur. C'est
le principal écart au standard qu'on vient de se donner.

### 4. Politique de confidentialité

Délibérément non créée, l'application ne collectant rien. La section « Données
personnelles » des mentions légales en tient lieu et sert de point d'accroche
si un compte, une mesure d'audience ou un formulaire apparaissait.

---

## ⚠️ Règles apprises, à ne pas réapprendre

**1. Ne pas écrire une fiche sur une intuition.** Le « Rogeret des Cévennes »
avait été écrit comme lozérien ; la seule source vérifiable le donne
**ardéchois**. Il a été retiré plutôt que rangé au hasard.

La méthode qui marche, et qui a servi pour toute la Nouvelle-Aquitaine :
partir des **catégories** Wikipédia (`Catégorie:Fromage de <département>`)
plutôt que d'une liste de mémoire, puis lire l'article de chaque candidat
avant de décider. Elle a écarté quatre entrées qu'on aurait écrites de bonne
foi : l'**ardi gasna** (marque déposée apposée sur de l'ossau-iraty AOP, donc
un doublon), le **bleu des Basques** et le **gris du Périgord** (marques
industrielles), le **cabécou du Périgord** (déjà couvert par le rocamadour
occitan, dont « Cabécou » est un nom alternatif).

Elle a aussi corrigé deux fiches en cours d'écriture : la trappe d'Échourgnac
n'est plus fabriquée par les moniales depuis 1999 (elles achètent le fromage
et ne font que l'affiner à la liqueur de noix), et le Belloc a changé de mains
en juin 2021. Les deux fiches le disent.

**2. Se méfier des noms alternatifs génériques.** L'alias nu `Bonneval` sur la
Trappe de Bonneval a suffi pour que le script apparie un **Bleu de
Bonneval-sur-Arc** savoyard, sans rapport. Un `alt` doit être un vrai nom du
fromage, jamais le seul nom du village.

**3. Le filtre de pertinence de l'enrichissement juge le sujet grammatical.**
Il bloquait « est une marque de… », ce qui écartait **La Feuille du Limousin**
alors qu'il laissait passer « est *la* marque commerciale d'un fromage »
(Échourgnac, taupinette) — la tournure décidait, pas le fond. Corrigé par un
`CHEESE_BRAND_RE` qui rattrape les marques dont la phrase nomme un fromage.
Vérifié par un ré-enrichissement complet : aucune autre fiche n'a bougé.

En revanche la **caillebotte** reste sans résumé, et il ne faut pas y toucher :
sa première phrase la définit comme un « lait caillé », et l'article explique
qu'elle n'a pas droit à l'appellation de fromage faute d'égouttage. Élargir
`CHEESE_RE` pour l'attraper ferait entrer n'importe quel article de produit
laitier.

**4. Wikipédia exige un User-Agent avec contact.** Un UA générique fait
répondre « You are making too many requests » quel que soit le rythme. Le
script du projet a le bon UA ; un script jetable doit le recopier. Prévoir
aussi des `fetch failed` isolés : relancer `--id <fromage>` suffit.

---

## 🗺️ Coordonnées sur la carte

`FR_XY` contient de vraies coordonnées projetées, mais **pas la projection**.
Elle se réajuste par moindres carrés sur les repères déjà placés — voir le
README pour le principe, et l'en-tête de `cheeses-nouvelle-aquitaine.ts` pour
les chiffres du dernier ajustement.

Deux modèles ont servi. L'Occitanie a été placée avec un **quadratique** en
(lon, lat) ; la Nouvelle-Aquitaine avec une **projection conique conforme**
(parallèles 44°/49°, méridien 3° E) suivie d'une affine, ajustée sur 82
repères après élimination des résidus au-delà de 1,8 unité — médiane 0,51
unité, soit ~5 km. **Préférer la conique** pour les régions à venir : elle
reste juste hors de l'enveloppe des repères, là où le quadratique dérive. PACA
et les Pays de la Loire sont justement des coins encore vides.

Le script d'ajustement n'a pas été conservé (jetable). Le refaire prend une
dizaine de minutes : lire `map`/`commune` des fiches existantes, poser les
lon/lat connues, ajuster une base `[1, u, v]` où `(u, v)` est la projection
conique du point.

**Piège** : la silhouette n'a que 47 points pour toute la France. Près des
frontières et des estuaires, une position exacte peut faire déborder la
pastille (rayon 2,6) du tracé. Deux cas traités jusqu'ici, tous deux notés en
tête de leur fichier : les trois fromages du Couserans sont remontés de
1,3 unité, et deux repères néo-aquitains ont été pris à l'intérieur des terres
(la jonchée sur Surgères plutôt que Rochefort, le Belloc à l'est d'Urt). La
marge minimale au tracé est vérifiée à l'ajustement — viser 3 unités au moins.

---

## ✅ Avant de considérer une étape finie

```bash
npm test && npm run lint && npm run typecheck && npm run build
```

Node **22** est requis (`.nvmrc`) : sous Node 20, jsdom casse au démarrage de
vitest avec `webidl.util.markAsUncloneable is not a function`.

`npm run lint` sort 13 avertissements `only-export-components` sur les fichiers
d'icônes et deux contextes — ils préexistent, il n'y a pas d'erreur.

Les captures se régénèrent avec `scripts/screenshots.mjs`, dont Playwright
n'est pas une dépendance du projet — voir la section « Logo & icônes » du
README.
