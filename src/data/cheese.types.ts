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
}

export interface Region {
  id: string
  name: string
}
