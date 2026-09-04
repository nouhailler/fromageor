export interface CheeseAccords {
  vin?: string
  biere?: string
  cidre?: string
  whisky?: string
  pain?: string
}

export interface CheeseNutrition {
  energie?: string
  proteines?: string
  lipides?: string
  calcium?: string
}

export interface CheeseImage {
  url: string
  width: number
  height: number
  /** Human-readable "Author, License" line, e.g. "Pierre-Yves Beaudouin, CC BY-SA 4.0". */
  credit: string
  /** Link to the Wikimedia Commons file page, for full attribution/license details. */
  creditUrl: string
}

/** Photo du *pays* du fromage, pas du fromage : les banques d'images
 *  généralistes n'ont pas de photo du claousou, mais elles ont des photos de
 *  l'Aubrac. Affichée dans la section « Localisation » de la fiche, légendée
 *  comme le lieu — voir cheeses-terroir.ts. */
export interface CheeseTerroir {
  url: string
  width: number
  height: number
  /** Lieu réellement photographié, ex. « Bastelica ». */
  lieu: string
  /** Ligne « Auteur, Banque », ex. « Eugène, Pexels ». */
  credit: string
  /** Lien vers la page de la photo, pour l'attribution complète. */
  creditUrl: string
}

export interface CheeseWikipedia {
  url: string
  extract: string
}

/** English translation of a fiche's narrative fields — everything else
 *  (dept, race, famille, forme, saison…) stays French: those are matched by
 *  business logic (accords.ts, decoupe.ts, season.ts) and shown as-is in
 *  both languages, the way an English text keeps "Savoie" or "AOP" untouched.
 *  Populated per-cheese as a translation pass is done; absent fields fall
 *  back to the French value (see CheeseDetailScreen). */
export interface CheeseTranslation {
  histoire?: string
  anecdote?: string
  fabrication?: string
  conservation?: string
  service?: string
  notes?: string[]
  accords?: CheeseAccords
}

export interface Cheese {
  id: string
  nom: string
  alt: string[]
  dept: string
  commune: string
  lait: string
  race: string
  famille: string
  croute: string
  texture: string
  forme: string
  poids: string
  dim: string
  affinage: string
  mg: string
  saison: string
  intensite: 1 | 2 | 3 | 4 | 5
  aop: boolean
  prix: string
  dispo: string
  color: string
  notes: string[]
  accords: CheeseAccords
  histoire: string
  anecdote?: string
  fabrication?: string
  conservation?: string
  service?: string
  nutrition: CheeseNutrition
  galerie: string[]
  /** Fallback normalized [x, y] position (0-100) on the France silhouette, used
   *  only when no entry exists in FR_XY for this cheese id. */
  map: [number, number]
  /** Which region this cheese belongs to — see regions.ts. */
  regionId: string
  /** Titulaire de la marque, quand le nom du fromage est une marque
   *  commerciale déposée et non une appellation. Renseigné seulement quand une
   *  source le dit : la fiche affiche alors un repère « Marque », pour ne pas
   *  laisser croire à un signe officiel. Voir EXTRA_FIELD_FIXES dans
   *  cheeses-extra.ts pour les entrées du jeu généré. */
  marque?: string
  /** Optional hero photo sourced from Wikimedia Commons — see scripts/enrich-wikipedia.mjs. */
  image?: CheeseImage
  /** Optional photo of the cheese's *place*, shown next to the map — never as
   *  the cheese itself. See cheeses-terroir.ts. */
  terroir?: CheeseTerroir
  /** Optional short summary + article link sourced from Wikipedia — see scripts/enrich-wikipedia.mjs. */
  wikipedia?: CheeseWikipedia
  /** Optional extra photos (beyond `image`) from the same Wikimedia Commons
   *  category, shown in the gallery thumbnails with generic captions since
   *  they aren't guaranteed to match any specific `galerie` label — see
   *  scripts/enrich-wikipedia.mjs. */
  galleryImages?: CheeseImage[]
  /** English translation of the narrative fields, when done — see
   *  CheeseTranslation. */
  en?: CheeseTranslation
}

export interface Region {
  id: string
  name: string
}
