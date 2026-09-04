// Exact JSON shape accepted by the Import / Export screen. Mirrors
// src/data/cheese.types.ts field-for-field; kept as a separate module (not
// derived from the TS types) so the schema is explicit, human-readable, and
// safe to show verbatim in the UI and in docs.
import type { Cheese, Region } from '../data/cheese.types'

/** Shared shape for `image` and each entry of `galleryImages`. */
const CHEESE_IMAGE_JSON_SCHEMA = {
  type: 'object',
  required: ['url', 'width', 'height', 'credit', 'creditUrl'],
  properties: {
    url: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    credit: { type: 'string', description: 'Ex. "Pierre-Yves Beaudouin, CC BY-SA 4.0".' },
    creditUrl: { type: 'string', description: 'Lien vers la page du fichier (licence complète).' },
  },
  additionalProperties: false,
} as const

/** JSON Schema (2020-12) for a single cheese record. `regionId` is optional
 *  here (unlike the internal Cheese type) — the importer fills it in from
 *  the wrapping `region.id` when omitted. */
export const CHEESE_JSON_SCHEMA = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'Cheese',
  type: 'object',
  required: [
    'id', 'nom', 'dept', 'commune', 'lait', 'race', 'famille', 'croute',
    'texture', 'forme', 'poids', 'dim', 'affinage', 'mg', 'saison',
    'intensite', 'aop', 'prix', 'dispo', 'color', 'notes', 'accords',
    'histoire', 'nutrition', 'galerie', 'map',
  ],
  properties: {
    id: { type: 'string', minLength: 1, description: 'Identifiant unique, stable, kebab-case (ex. "chabichou-poitou").' },
    nom: { type: 'string', minLength: 1, description: 'Nom usuel.' },
    alt: { type: 'array', items: { type: 'string' }, default: [], description: 'Noms alternatifs / synonymes.' },
    dept: { type: 'string', description: 'Département(s), ex. "Vienne (86)".' },
    commune: { type: 'string', description: 'Commune ou terroir précis.' },
    lait: { type: 'string', description: 'Type de lait en toutes lettres, doit contenir "Vache", "Chèvre", "Brebis", "Mélange" ou "Bufflonne" pour être catégorisé correctement (ex. "Chèvre", "Vache (lait cru)").' },
    race: { type: 'string', description: 'Race(s) animale(s).' },
    famille: { type: 'string', description: 'Famille technologique, ex. "Pâte pressée non cuite".' },
    croute: { type: 'string' },
    texture: { type: 'string' },
    forme: { type: 'string' },
    poids: { type: 'string' },
    dim: { type: 'string' },
    affinage: { type: 'string' },
    mg: { type: 'string', description: 'Matière grasse, ex. "45 %".' },
    saison: {
      type: 'string',
      description:
        'Saison de consommation idéale. Doit contenir un ou deux mots parmi "Printemps", "Été", "Automne", "Hiver" (reliés par "→" pour une plage cyclique), ou "Toute l\'année". Du texte additionnel (parenthèses, dates) est toléré.',
    },
    intensite: { type: 'integer', minimum: 1, maximum: 5, description: '1 = doux … 5 = intense.' },
    aop: { type: 'boolean', description: 'Appellation d\'Origine Protégée réelle (signe officiel).' },
    prix: { type: 'string', description: 'Prix moyen indicatif, ex. "≈ 28 €/kg".' },
    dispo: { type: 'string', description: 'Disponibilité, ex. "Courante", "Saisonnière", "Rare".' },
    color: { type: 'string' },
    terroir: {
      type: 'object',
      required: ['url', 'width', 'height', 'lieu', 'credit', 'creditUrl'],
      properties: {
        url: { type: 'string' },
        width: { type: 'number' },
        height: { type: 'number' },
        lieu: { type: 'string', description: 'Lieu photographié, ex. "Bastelica".' },
        credit: { type: 'string', description: 'Ex. "Eugène, Pexels".' },
        creditUrl: { type: 'string' },
      },
      additionalProperties: false,
      description: 'Photo du pays du fromage, jamais du fromage lui-même : affichée près de la carte, légendée comme le lieu.',
    },
    marque: { type: 'string', description: 'Titulaire de la marque, si le nom est une marque commerciale et non une appellation (ex. "Fromagerie Guilloteau").' },
    notes: { type: 'array', items: { type: 'string' }, minItems: 1, description: 'Notes aromatiques (3-4 recommandées).' },
    accords: {
      type: 'object',
      description: 'Chaque champ est optionnel.',
      properties: {
        vin: { type: 'string' },
        biere: { type: 'string' },
        cidre: { type: 'string' },
        whisky: { type: 'string' },
        pain: { type: 'string' },
      },
      additionalProperties: false,
    },
    histoire: { type: 'string', description: 'Paragraphe historique.' },
    anecdote: { type: 'string', description: 'Optionnel — encart "Le saviez-vous".' },
    fabrication: { type: 'string', description: 'Optionnel.' },
    conservation: { type: 'string', description: 'Optionnel.' },
    service: { type: 'string', description: 'Optionnel.' },
    nutrition: {
      type: 'object',
      description: 'Pour 100 g. Chaque champ est optionnel.',
      properties: {
        energie: { type: 'string' },
        proteines: { type: 'string' },
        lipides: { type: 'string' },
        calcium: { type: 'string' },
      },
      additionalProperties: false,
    },
    galerie: { type: 'array', items: { type: 'string' }, minItems: 1, description: 'Libellés des photos de la galerie (pas de fichiers image).' },
    map: {
      type: 'array',
      items: { type: 'number', minimum: 0, maximum: 100 },
      minItems: 2,
      maxItems: 2,
      description: '[x, y] normalisés 0-100 sur la silhouette France, utilisé si l\'id est absent des coordonnées réelles.',
    },
    regionId: { type: 'string', description: 'Optionnel dans le fichier importé : hérite de `region.id` (format enveloppé) si omis.' },
    image: {
      ...CHEESE_IMAGE_JSON_SCHEMA,
      description: 'Optionnel — photo principale (généralement sourcée depuis Wikimedia Commons via scripts/enrich-wikipedia.mjs).',
    },
    wikipedia: {
      type: 'object',
      description: 'Optionnel — lien et résumé sourcés depuis Wikipédia.',
      required: ['url', 'extract'],
      properties: {
        url: { type: 'string' },
        extract: { type: 'string' },
      },
      additionalProperties: false,
    },
    galleryImages: {
      type: 'array',
      items: CHEESE_IMAGE_JSON_SCHEMA,
      description: 'Optionnel — photos supplémentaires (même origine que "image"), affichées dans les vignettes avec des libellés génériques.',
    },
  },
  additionalProperties: false,
} as const

/** Top-level import payload: either a bare array of cheeses, or an object
 *  wrapping an optional new region alongside its cheeses. */
export const CHEESE_IMPORT_JSON_SCHEMA = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'CheeseImportPayload',
  anyOf: [
    { type: 'array', items: CHEESE_JSON_SCHEMA },
    {
      type: 'object',
      required: ['cheeses'],
      properties: {
        region: {
          type: 'object',
          required: ['id', 'name'],
          properties: {
            id: { type: 'string', minLength: 1, description: 'Identifiant kebab-case, ex. "nouvelle-aquitaine".' },
            name: { type: 'string', minLength: 1, description: 'Nom affiché, ex. "Nouvelle-Aquitaine".' },
          },
          additionalProperties: false,
        },
        cheeses: { type: 'array', items: CHEESE_JSON_SCHEMA },
      },
      additionalProperties: false,
    },
  ],
} as const

/** One fully-filled, valid example — used both as the downloadable
 *  "gabarit" and as a fixture in tests. */
export const EXAMPLE_CHEESE: Cheese = {
  id: 'chabichou-poitou',
  nom: 'Chabichou du Poitou',
  alt: [],
  dept: 'Vienne / Deux-Sèvres (86/79)',
  commune: 'Poitou',
  lait: 'Chèvre',
  race: 'Alpine, Saanen',
  famille: 'Pâte molle à croûte naturelle',
  croute: 'Naturelle, fine, fleurie',
  texture: 'Ferme, fondante',
  forme: 'Petit tronc-cône',
  poids: '120–150 g',
  dim: 'Ø 6 cm · h 6 cm',
  affinage: '10 jours minimum',
  mg: '45 %',
  saison: 'Printemps → Automne',
  intensite: 3,
  aop: true,
  prix: '≈ 35 €/kg',
  dispo: 'Courante',
  color: 'Blanc à ivoire',
  notes: ['Caprin', 'Noisette', 'Fleurs séchées'],
  accords: {
    vin: 'Sauvignon blanc de Touraine',
    biere: 'Blanche',
    cidre: 'Cidre sec',
    whisky: 'Lowlands léger',
    pain: 'Pain de campagne',
  },
  histoire: "Fromage de chèvre du Poitou, cité depuis le VIIIᵉ siècle, dont le nom viendrait de l'arabe « chebli » (petite chèvre) laissé par les invasions sarrasines.",
  anecdote: 'Sa forme de tronc-cône légèrement incurvée est due au démoulage manuel encore pratiqué par certains producteurs.',
  fabrication: "Caillé lactique moulé à la louche, égoutté puis affiné en hâloir.",
  conservation: 'Réfrigérateur, boîte aérée, 1–2 semaines.',
  service: "Nature à température ambiante, ou tiède sur toast.",
  nutrition: { energie: '290 kcal', proteines: '19 g', lipides: '22 g', calcium: '140 mg' },
  galerie: ['Vue entière', 'Coupe', 'Croûte fleurie', 'Plateau', 'Hâloir'],
  map: [40, 62],
  regionId: 'nouvelle-aquitaine',
}

export const EXAMPLE_REGION: Region = { id: 'nouvelle-aquitaine', name: 'Nouvelle-Aquitaine' }

export interface CheeseFieldDoc {
  key: string
  type: string
  required: boolean
  description: string
}

/** Flat, UI-friendly rendering of CHEESE_JSON_SCHEMA — same source of
 *  truth, one row per field, for the in-app "format attendu" table. Field
 *  `key`/`type` are the actual JSON keys (always French field names, e.g.
 *  "nom" not "name" — it's a data format, not UI text) — only `description`
 *  is translated. */
export const CHEESE_FIELD_DOCS: CheeseFieldDoc[] = [
  { key: 'id', type: 'string', required: true, description: 'Identifiant unique, stable, kebab-case.' },
  { key: 'nom', type: 'string', required: true, description: 'Nom usuel.' },
  { key: 'alt', type: 'string[]', required: false, description: 'Noms alternatifs / synonymes. Défaut : [].' },
  { key: 'dept', type: 'string', required: true, description: 'Département(s), ex. "Vienne (86)".' },
  { key: 'commune', type: 'string', required: true, description: 'Commune ou terroir précis.' },
  { key: 'lait', type: 'string', required: true, description: 'Doit contenir "Vache", "Chèvre", "Brebis", "Mélange" ou "Bufflonne".' },
  { key: 'race', type: 'string', required: true, description: 'Race(s) animale(s).' },
  { key: 'famille', type: 'string', required: true, description: 'Famille technologique, ex. "Pâte pressée non cuite".' },
  { key: 'croute', type: 'string', required: true, description: '' },
  { key: 'texture', type: 'string', required: true, description: '' },
  { key: 'forme', type: 'string', required: true, description: '' },
  { key: 'poids', type: 'string', required: true, description: '' },
  { key: 'dim', type: 'string', required: true, description: '' },
  { key: 'affinage', type: 'string', required: true, description: '' },
  { key: 'mg', type: 'string', required: true, description: 'Matière grasse, ex. "45 %".' },
  { key: 'saison', type: 'string', required: true, description: 'Contient "Printemps"/"Été"/"Automne"/"Hiver" (avec "→" pour une plage) ou "Toute l\'année".' },
  { key: 'intensite', type: 'integer (1-5)', required: true, description: '1 = doux … 5 = intense.' },
  { key: 'aop', type: 'boolean', required: true, description: 'AOP réelle (signe officiel).' },
  { key: 'prix', type: 'string', required: true, description: 'Ex. "≈ 28 €/kg".' },
  { key: 'dispo', type: 'string', required: true, description: 'Ex. "Courante", "Saisonnière", "Rare".' },
  { key: 'color', type: 'string', required: true, description: '' },
  { key: 'notes', type: 'string[]', required: true, description: 'Notes aromatiques (3-4 recommandées), non vide.' },
  { key: 'accords', type: '{ vin?, biere?, cidre?, whisky?, pain? }', required: true, description: 'Objet ; chaque champ est optionnel.' },
  { key: 'histoire', type: 'string', required: true, description: 'Paragraphe historique.' },
  { key: 'anecdote', type: 'string', required: false, description: 'Encart « Le saviez-vous ».' },
  { key: 'fabrication', type: 'string', required: false, description: '' },
  { key: 'conservation', type: 'string', required: false, description: '' },
  { key: 'service', type: 'string', required: false, description: '' },
  { key: 'nutrition', type: '{ energie?, proteines?, lipides?, calcium? }', required: true, description: 'Objet, pour 100 g ; chaque champ est optionnel.' },
  { key: 'galerie', type: 'string[]', required: true, description: 'Libellés des photos (pas de fichiers image), non vide.' },
  { key: 'map', type: '[number, number]', required: true, description: '[x, y] normalisés 0-100 sur la silhouette France.' },
  { key: 'regionId', type: 'string', required: false, description: 'Optionnel si le fichier fournit "region" (voir enveloppe) ou est fusionné dans une région existante.' },
  { key: 'image', type: '{ url, width, height, credit, creditUrl }', required: false, description: 'Photo principale (ex. Wikimedia Commons). Tous les sous-champs sont requis si l\'objet est présent.' },
  { key: 'wikipedia', type: '{ url, extract }', required: false, description: 'Lien et résumé Wikipédia.' },
  { key: 'galleryImages', type: '{ url, width, height, credit, creditUrl }[]', required: false, description: 'Photos supplémentaires pour les vignettes (libellés génériques, pas de correspondance garantie avec "galerie").' },
]

const DESC_EN: Record<string, string> = {
  id: 'Unique, stable identifier, kebab-case.',
  nom: 'Common name.',
  alt: 'Alternative names / synonyms. Default: [].',
  dept: 'Department(s), e.g. "Vienne (86)".',
  commune: 'Commune or precise locality.',
  lait: 'Must contain "Vache", "Chèvre", "Brebis", "Mélange" or "Bufflonne" (French milk-type words — matched by the app\'s logic).',
  race: 'Animal breed(s).',
  famille: 'Technological family, e.g. "Pâte pressée non cuite" (French cheesemaking term).',
  mg: 'Fat content, e.g. "45 %".',
  saison: 'Contains "Printemps"/"Été"/"Automne"/"Hiver" (with "→" for a range) or "Toute l\'année" — French season words, matched by the app\'s logic.',
  intensite: '1 = mild … 5 = intense.',
  aop: 'Real AOP designation (official mark).',
  prix: 'E.g. "≈ 28 €/kg".',
  dispo: 'E.g. "Courante", "Saisonnière", "Rare".',
  notes: 'Aroma notes (3-4 recommended), non-empty.',
  accords: 'Object; every field is optional.',
  histoire: 'History paragraph.',
  anecdote: '"Did you know" callout.',
  nutrition: 'Object, per 100 g; every field is optional.',
  galerie: 'Photo captions (not image files), non-empty.',
  map: '[x, y] normalized 0-100 on the France silhouette.',
  regionId: 'Optional if the file provides "region" (see envelope), or the entry is merged into an existing region.',
  image: 'Main photo (e.g. Wikimedia Commons). All sub-fields are required if the object is present.',
  wikipedia: 'Wikipedia link and summary.',
  galleryImages: 'Extra photos for thumbnails (generic captions, no guaranteed match with "galerie").',
}

export function cheeseFieldDocs(lang: 'fr' | 'en' = 'fr'): CheeseFieldDoc[] {
  if (lang !== 'en') return CHEESE_FIELD_DOCS
  return CHEESE_FIELD_DOCS.map((f) => ({ ...f, description: DESC_EN[f.key] ?? f.description }))
}
