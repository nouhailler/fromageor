# Contexte de reprise

Note de passage de relais entre sessions. Ce qui est **à faire**, ce qui est
**déjà fait**, et les pièges rencontrés. Le fonctionnement du projet lui-même
est documenté dans [README.md](README.md) — ce fichier ne le répète pas.

Dernière mise à jour : **24/08/2026**, après le branchement de la découpe sur
les fiches et l'ouverture du guide de découpe. Base à **216 fiches, 13 régions** : **la métropole est complète.**

---

## ✅ Ce qui vient d'être fait

**Chaque fiche affiche sa méthode de découpe.** L'écran Découpe existait depuis
le handoff et n'avait jamais bougé : six méthodes statiques, sans aucun lien
avec la base. `decoupeMatchFor()` (`src/lib/decoupe.ts`) déduit maintenant, de
`forme` — appuyée par `famille`, `poids` et le texte *Comment le servir* —
laquelle des six concerne un fromage, et la fiche l'affiche sous « Comment le
servir » **en disant de quel champ elle vient**. Les règles sont dans le README
(« Méthode de découpe d'une fiche ») ; ce qui suit est ce qu'il faut savoir
avant d'y toucher.

**Vingt fiches n'ont volontairement pas de méthode** : fromages frais, fromages
forts, cancoillotte, brocciu, caillebotte, tome fraîche de l'Aubrac, et le
halbran dont la forme n'est pas renseignée. Ils se mangent à la cuillère ou se
tartinent — leur inventer un geste serait pire que de se taire. La liste est
figée par un test, comme celle des fiches sans anecdote.

**L'écran Découpe se sert du même classement**, et ses listes d'exemples ne
sont plus écrites à la main. Elles l'étaient depuis le handoff, et trois des
dix-huit noms contredisaient les fiches : le saint-marcellin et le
saint-félicien illustraient « ronds » et « brie » alors que leur texte de
service dit la cuillère, et le brillat-savarin était rangé dans « brie » alors
que c'est un petit cylindre de 200 g. `decoupeGroups()` range maintenant la
base sous les six méthodes ; l'écran montre trois noms — **les AOP d'abord,
faute d'un meilleur signe de notoriété dans les données**, puis l'ordre
alphabétique — et le compte des autres. Un test interdit qu'un fromage soit
cité sous une méthode que sa fiche contredit. La capture
`docs/screenshots/decoupe.png` est régénérée.

**Chaque méthode s'ouvre maintenant sur son guide.** `DecoupeMethodScreen`
donne le principe, le pourquoi, les quatre temps du geste — dessinés par
`DecoupeStepDiagram` —, ce qu'il faut éviter, la particularité de la famille,
et la liste complète des fromages concernés, chaque nom ouvrant sa fiche. La
fiche y mène par un bouton « Comment découper ce fromage ? », et le retour
ramène à la fiche : c'est à quoi sert `state.decoupeFrom`, l'écran Découpe
étant *sous* la fiche dans la pile (z-18 contre z-20).

⚠️ **Le texte du guide n'est pas une donnée**, et c'est la seule prose du
projet dans ce cas. `src/lib/decoupe-guide.ts` contient des consignes de
service écrites pour l'application, pas des faits sourcés — d'où sa place dans
`src/lib/` et non dans `src/data/`, et le soin à ne rien y affirmer sur un
fromage nommé. La règle « ne jamais écrire une fiche sur une intuition » vaut
pour les fiches ; celle-ci vaut ici : **ne jamais faire passer une consigne de
service pour un fait de terroir.**

**Deux règles de classement à ne pas défaire** : c'est le **poids** qui sépare
la grande meule (achetée à la coupe, servie « à la pointe ») du petit rond
coupé en parts, et non le mot « meule » de la forme — sans quoi la tomme
d'Annot (0,6 kg) se couperait comme un comté. Et le texte **« Comment le
servir » l'emporte sur la forme** quand il parle de cuillère : l'époisses est
un « Disque », mais personne ne le coupe en parts.

**Les Pays de la Loire sont en place, et c'était la dernière région
métropolitaine.** 9 fiches dans `src/data/cheeses-pays-de-la-loire.ts`, dont
le Curé Nantais déplacé depuis la Bretagne — Pornic est en Loire-Atlantique,
quoi qu'en dise la Bretagne historique. C'était une fiche écrite à la main,
donc un vrai déplacement de fichier et non un `EXTRA_REGION_OVERRIDES` ; le
test breton passe de 12 à 11.

**Cette région est atypique et il faut le savoir avant d'y toucher** : aucune
AOP, presque aucun fromage fermier, et **huit fiches sur neuf portent un nom de
marque**. Ce n'est pas un défaut de recherche. Le lait ligérien allait
traditionnellement au beurre — l'article du Curé Nantais le dit sans détour —
et ce qui reste vient de l'industrie : le port-salut des trappistes
d'Entrammes, vendu en 1957 à l'agroalimentaire, a servi de modèle à toute la
filière des « fromages d'abbaye », et la Mayenne et la Sarthe abritent les
usines de Bel, Lactalis et Savencia. Le champ `marque` sert exactement à ça, et
un test vérifie que seul le halbran s'en passe.

Trois candidats écartés, la raison notée en tête de fichier : le **crémet
d'Anjou** (« spécialité crémière » — crème fouettée et blancs en neige, pas de
coagulation, même raisonnement que la caillebotte), le **gourmelin** (une
phrase d'article, ni département ni lait, et les deux portails Bretagne et
Pays de la Loire sans trancher) et le **babybel** (fabriqué à Évron et
Sablé-sur-Sarthe, mais rangé dans aucune catégorie départementale — marque
nationale dont le lait vient de tout l'Ouest).

Deux points à ne pas refaire : le **port-salut et l'entrammes sont le même
fromage** — l'article « Entrammes (fromage) » redirige sur celui de la marque
Port-Salut, d'où une fiche unique et « Entrammes » en nom alternatif. Et le
**halbran** n'a pas d'article propre : il est décrit dans celui de la mizotte,
comme la pigouille et le couhé-vérac le sont dans « Chèvre du Poitou ». Il
restera sans résumé Wikipédia, c'est normal.

**La passe éditoriale sur le jeu généré est faite.** Le handoff n'avait rempli
`anecdote` / `fabrication` / `conservation` / `service` que sur 12 de ses 50
fiches ; les 38 autres sont complétées par `EXTRA_EDITORIAL`, dans
`src/data/cheeses-extra.ts`, recollé dans `dataset.ts` par-dessus l'entrée
générée — jamais dans `cheeses.ts`, que `import-cheeses` réécrit. Le recollage
ne comble que ce qui manque : un texte du handoff reste prioritaire, et un
test refuse toute collision. Résultat : **toutes les 208 fiches** de la base
ont désormais fabrication, conservation et service.

Restent **18 fiches sans anecdote**, et seulement sans ce champ-là — 43 fiches
incomplètes avant, 18 après. C'est délibéré : une anecdote est un fait, et ces
dix-huit-là n'ont pas de source où le prendre : douze entrées générées sans
article Wikipédia propre — dont la tomme d'Abondance, qui n'en a plus depuis
qu'on lui a retiré celui d'un autre fromage —, le pavin dont l'article tient
en une phrase déjà reprise dans son histoire, et cinq fiches provençales à
l'article de deux phrases. La liste est figée par un test, pour qu'elle ne
s'allonge pas en silence.

**Les trois problèmes de données repérés pendant cette passe sont corrigés.**

**La tomme d'Abondance ne porte plus le résumé et la photo de la tomme de
Savoie.** La cause n'était pas l'appariement mais sa persistance : le garde-fou
`titleMatchesCheeseName`, ajouté après coup pour le Vieux-Lille, rejette bien
*Tomme de Savoie*, mais `enrichCheese` retournait la fiche **inchangée**
lorsqu'aucun article n'était trouvé — le mauvais appariement survivait donc à
tout ré-enrichissement. Le script efface désormais `wikipedia`, `image` et
`galleryImages` dans ce cas, comme le faisait déjà `enrich-wikipedia-extra.mjs`.
À retenir : **resserrer le filtre ne suffit pas à nettoyer le passé**, il faut
relancer `npm run enrich-wikipedia -- --force --id <fromage>`.

**Le `famille` du pavin est corrigé** en « Pâte molle à croûte lavée ». Il
perd du même coup son badge « Bio », qui était déduit de la famille erronée —
c'est normal, ce badge est indicatif et se calcule depuis la famille et
l'intensité.

**Les quatre marques commerciales du jeu généré sont signalées comme telles**
par un nouveau champ `marque` sur le type `Cheese` : Carré d'Aurillac (Les
Fromageries occitanes), Pavé d'Affinois (Fromagerie Guilloteau), Rochebaron
(Savencia) et Bouton de Culotte (Capriferme). La fiche affiche un repère
« Marque » et la ligne « Nom déposé, et non une appellation ». Deux fiches
écrites à la main le portent aussi, celles dont le texte nomme déjà le
titulaire : la Taupinette et la Feuille du Limousin. La Trappe d'Échourgnac et
le Pur Brebis de Belloc s'en passent — leur prose dit qu'il s'agit de marques,
mais aucune source ne dit de qui.

⚠️ **Une marque évoque souvent un lieu où le fromage n'est pas fabriqué.**
Trois `commune` sur quatre étaient fausses : le Carré d'Aurillac n'a jamais
été produit à Aurillac mais à Saint-Flour, le Rochebaron doit son nom à un
château de Bas-en-Basset alors qu'il se fabrique à Beauzac et
Saint-Pal-de-Mons, et le Pavé d'Affinois vient de Pélussin — dans la **Loire**,
là où le handoff disait l'Isère. Vérifier la `commune` et le `dept` en même
temps que la marque.

Ces corrections passent par un cinquième recollage, `EXTRA_FIELD_FIXES` dans
`src/data/cheeses-extra.ts`, pour la même raison que les autres :
`import-cheeses` réécrit `cheeses.ts`.

**Provence-Alpes-Côte d'Azur est en place**, 19 fiches dans
`src/data/cheeses-provence-alpes-cote-azur.ts`, plus la tomme du Champsaur
rapatriée depuis le jeu généré — soit 20 fromages pour la région. Deux AOP :
le **banon** (AOC le 23 juillet 2003, première appellation fromagère de la
région) et la **brousse du Rove** (AOC le 31 mai 2018), toutes deux vérifiées
dans la liste officielle des AOC et AOP laitières françaises. Le reste :
tomme de Provence, tomme d'Annot, tomme de l'Ubaye, bleu du Queyras, bleu du
Dévoluy, persillé du col Bayard, aiguille d'Orcières, saint-laurent, chèvre du
Mont-Ventoux, poivre d'âne, chèvre des Alpilles, tomme d'Arles — et cinq
**fromages forts**, cachaille, cachat, brous, coussignous et bosson macéré,
que la région compte en plus grand nombre que toute autre. Les 19 ont trouvé
leur article Wikipédia ; 11 ont une photo.

**La tomme du Champsaur est passée en PACA**, par une entrée dans
`EXTRA_REGION_OVERRIDES` (`src/data/cheeses-extra.ts`) : le Champsaur est dans
les Hautes-Alpes, et le handoff la rangeait en Auvergne-Rhône-Alpes faute d'y
avoir la région. C'est le correctif que la note précédente annonçait.

**L'aire du banon est à cheval sur deux régions**, comme le bleu de Gex : sur
les 179 communes du cahier des charges, 144 sont en PACA (111 dans les
Alpes-de-Haute-Provence, 33 dans les Hautes-Alpes) mais 21 sont dans la Drôme,
donc en Auvergne-Rhône-Alpes. On a tranché pour PACA — le village qui donne
son nom au fromage y est, et 144 communes sur 179 aussi. La liste des AOP
laitières donne d'ailleurs le Var au lieu de la Drôme ; c'est la liste de
communes de l'article, qui suit le cahier des charges, qui fait foi.

**Le picodon et le saint-félicien n'ont pas bougé** : ils sont bien
drômois/ardéchois, donc en Auvergne-Rhône-Alpes, comme la note précédente le
demandait.

---

## 🎯 À faire — par ordre d'intérêt décroissant

### 1. Il n'y a plus de région à ajouter

Les treize régions métropolitaines sont couvertes, et un test le verrouille :
`REGIONS` doit en compter treize, et aucune ne doit être vide. **L'outre-mer
n'est pas prévu** — la seule catégorie Wikipédia qui existe est « Fromage de
La Réunion », et rien n'a été décidé sur le sujet.

Si une région devait tout de même être ajoutée, le moule est stable :
`src/data/cheeses-pays-de-la-loire.ts` est le dernier exemple en date, et le
README dit quels quatre fichiers brancher — plus le test de région dans
`dataset.test.ts`, qui en fait cinq.

### 2. Le guide de découpe peut aller plus loin

Trois pistes, par ordre d'intérêt :

- **Animer les quatre temps.** Ils sont dessinés mais figés :
  `DecoupeStepDiagram` rend l'étape demandée, une transition entre les quatre
  serait un ajout purement visuel, sans nouvelle donnée.
- **Descendre sous la famille.** Les six méthodes couvrent les 196 fiches
  classées, mais une pyramide et une bûche partagent aujourd'hui le même guide
  alors que le geste diffère (tranches dans la hauteur contre rondelles). Un
  deuxième niveau, par forme plutôt que par famille, tiendrait dans la même
  mécanique : `decoupeMatchFor` renvoie déjà le champ qui a décidé.
- **Le cas des carrés.** « Cœurs coulants & carrés » réunit deux gestes sous un
  nom : la calotte et la cuillère pour les coulants, les bandes parallèles pour
  les carrés. Les schémas montrent le premier, la particularité décrit le
  second. Scinder la méthode se ferait dans `decoupeDefs()` et
  `decoupeMatchFor()`, mais changerait les six identifiants figés par les tests.

### 3. Complétude des fiches existantes

Au 22/08 : photo sur **138/216**, résumé Wikipédia sur **163/216**. Le texte
n'est plus le point faible — les 216 fiches ont toutes fabrication,
conservation et service, et les 19 sans anecdote le sont faute de source, pas
faute de travail.

Ce qui reste, c'est **l'iconographie**, et elle a bien avancé : 78 fiches
n'avaient aucune image, il en reste **47**. Sept ont récupéré une vraie photo
du fromage (`cheeses-photos.ts`, Commons) et 24 une photo de leur pays
(`cheeses-terroir.ts`, Pexels).

**Le script d'enrichissement a un angle mort, et c'est lui qu'il faudrait
traiter** : il part de l'article Wikipédia, donc un fromage sans article
n'atteint jamais Commons — même quand Commons a sa photo. C'est ainsi que
l'affidélice, le sablé de Wissant, le menez-hom, le chabis et la tomme corse
étaient restés sans image alors qu'ils sont photographiés, cinq d'entre eux par
le projet WikiCheese. Une recherche directe de fichiers Commons les retrouve.
Elle n'a pas été automatisée parce qu'elle ramène aussi un Croque Monsieur, les
toiles de Gustave Caillebotte et la cathédrale de Coutances : le tri reste
manuel. Ces 27 ne sont pas des photos des fromages et
ne doivent jamais être présentées comme telles — voir la section dédiée du
README.

Le point à retenir pour la suite : **aucune banque d'images généraliste n'a de
photo des fromages manquants.** Un balayage Pexels des 78 fiches n'en a pas
trouvé une seule ; la recherche est floue et renvoie toujours quelque chose,
ce qui rend son compteur de résultats trompeur. Ce qu'elle a, c'est le terroir.
Et là encore, **l'appariement par mot-clé se trompe une fois sur deux** — le
palais Rohan de Bordeaux pour la tome du Pays de Rohan, Étretat pour le trèfle
du Perche, Dinant en Belgique pour la chèvre de la Woëvre. Chaque candidat doit
être regardé.
Les combler suppose une autre source d'images, avec la question de licence qui
va avec — c'est un choix de projet, pas une tâche mécanique.

### 4. La doc qui manquait — fait le 03/09/2026

`DOCUMENTATION_SPEC.md` demandait une FAQ, un guide de dépannage, un
changelog utilisateur, les limites connues et les procédures de support.
Les cinq sont maintenant dans le README (`/doc full`), avec en plus une
section « Mode hors connexion » repérée pendant l'audit — le service worker
précache l'application mais pas les photos distantes (Wikimedia/Pexels), ce
qui n'était documenté nulle part.

### 5. Politique de confidentialité

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
README pour le principe, et l'en-tête de
`cheeses-provence-alpes-cote-azur.ts` pour les chiffres du dernier ajustement.

Deux modèles ont servi. L'Occitanie a été placée avec un **quadratique** en
(lon, lat) ; la Nouvelle-Aquitaine puis PACA avec une **projection conique
conforme** (parallèles 44°/49°, méridien 3° E) suivie d'une affine. Le
dernier ajustement porte sur **119 repères** après élimination des résidus
au-delà de 1,8 unité — médiane 0,46 unité (~4,5 km), maximum 1,57. Il a servi
tel quel pour les Pays de la Loire, sans réajustement. **Préférer la conique**
si une région devait encore être placée : elle reste juste hors de l'enveloppe
des repères, là où le quadratique dérive.

Le script d'ajustement n'a pas été conservé (jetable). Le refaire prend une
dizaine de minutes : lire `map`/`commune` des fiches existantes, poser les
lon/lat connues, ajuster une base `[1, u, v]` où `(u, v)` est la projection
conique du point.

**Piège** : la silhouette n'a que 47 points pour toute la France. Près des
frontières et des estuaires, une position exacte peut faire déborder la
pastille (rayon 2,6) du tracé. Trois cas traités jusqu'ici, tous notés en tête
de leur fichier : les trois fromages du Couserans sont remontés de 1,3 unité,
deux repères néo-aquitains ont été pris à l'intérieur des terres (la jonchée
sur Surgères plutôt que Rochefort, le Belloc à l'est d'Urt), et **six repères
provençaux** sont reculés dans les terres. La marge minimale au tracé est
vérifiée à l'ajustement — viser 3 unités au moins.

La côte provençale est le pire cas rencontré : la silhouette la trace comme
une **corde droite** entre le delta du Rhône et Nice, qui passe au nord de
Marseille et de Toulon. Un repère posé au Rove ou à Signes tombe donc sur le
trait, voire dehors. La brousse du Rove est remontée au nord d'Aix, ce qui ne
lui laisse encore que 2,60 de marge — le minimum accepté, exactement le rayon
de la pastille. Ne pas s'étonner de ces décalages ni chercher à les
« corriger » vers la position réelle : c'est le tracé qui est faux, pas les
repères.

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
