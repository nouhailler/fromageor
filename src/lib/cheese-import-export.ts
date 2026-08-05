// Runtime import/export of the cheese database. Imported records are
// validated against the shape documented in cheese-schema.ts, then persisted
// to localStorage as an overlay merged on top of the built-in CHEESES/REGIONS
// (see state/useCheeseDatabase.ts) — nothing here mutates the bundled data.
import type { Cheese, CheeseAccords, CheeseImage, CheeseNutrition, CheeseWikipedia, Region } from '../data/cheese.types'

export const IMPORT_CHEESES_KEY = 'fromages-import-cheeses'
export const IMPORT_REGIONS_KEY = 'fromages-import-regions'

// ---- localStorage read/write ---------------------------------------------

export function loadImportedCheeses(): Cheese[] {
  try {
    const raw = JSON.parse(localStorage.getItem(IMPORT_CHEESES_KEY) || '[]')
    return Array.isArray(raw) ? (raw as Cheese[]) : []
  } catch {
    return []
  }
}

export function saveImportedCheeses(cheeses: Cheese[]): void {
  try {
    localStorage.setItem(IMPORT_CHEESES_KEY, JSON.stringify(cheeses))
  } catch {
    // storage unavailable — state stays in memory for this session
  }
}

export function loadImportedRegions(): Region[] {
  try {
    const raw = JSON.parse(localStorage.getItem(IMPORT_REGIONS_KEY) || '[]')
    return Array.isArray(raw) ? (raw as Region[]) : []
  } catch {
    return []
  }
}

export function saveImportedRegions(regions: Region[]): void {
  try {
    localStorage.setItem(IMPORT_REGIONS_KEY, JSON.stringify(regions))
  } catch {
    // storage unavailable — state stays in memory for this session
  }
}

// ---- merge (built-in ⊕ imported, upsert by id) ----------------------------

export function mergeCheeses(base: Cheese[], imported: Cheese[]): Cheese[] {
  if (!imported.length) return base
  const byId = new Map(base.map((c) => [c.id, c]))
  imported.forEach((c) => byId.set(c.id, c))
  return [...byId.values()]
}

export function mergeRegions(base: Region[], imported: Region[]): Region[] {
  if (!imported.length) return base
  const byId = new Map(base.map((r) => [r.id, r]))
  imported.forEach((r) => byId.set(r.id, r))
  return [...byId.values()]
}

// ---- validation ------------------------------------------------------------

export interface ValidationError {
  index: number
  id: string | null
  errors: string[]
}

export interface ValidationResult {
  valid: Cheese[]
  invalid: ValidationError[]
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}
function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}
function isString(v: unknown): v is string {
  return typeof v === 'string'
}
function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === 'string')
}

const REQUIRED_STRING_FIELDS = [
  'nom', 'dept', 'commune', 'lait', 'race', 'famille', 'croute', 'texture',
  'forme', 'poids', 'dim', 'affinage', 'mg', 'saison', 'prix', 'dispo',
  'color', 'histoire',
] as const

const OPTIONAL_STRING_FIELDS = ['anecdote', 'fabrication', 'conservation', 'service'] as const

function pickAccords(raw: unknown): CheeseAccords {
  const out: CheeseAccords = {}
  if (!isPlainObject(raw)) return out
  for (const key of ['vin', 'biere', 'cidre', 'whisky', 'pain'] as const) {
    const v = raw[key]
    if (typeof v === 'string') out[key] = v
  }
  return out
}

function pickNutrition(raw: unknown): CheeseNutrition {
  const out: CheeseNutrition = {}
  if (!isPlainObject(raw)) return out
  for (const key of ['energie', 'proteines', 'lipides', 'calcium'] as const) {
    const v = raw[key]
    if (typeof v === 'string') out[key] = v
  }
  return out
}

function isCheeseImage(raw: unknown): raw is CheeseImage {
  return (
    isPlainObject(raw) &&
    isNonEmptyString(raw.url) &&
    typeof raw.width === 'number' &&
    typeof raw.height === 'number' &&
    isNonEmptyString(raw.credit) &&
    isNonEmptyString(raw.creditUrl)
  )
}

function isCheeseWikipedia(raw: unknown): raw is CheeseWikipedia {
  return isPlainObject(raw) && isNonEmptyString(raw.url) && isNonEmptyString(raw.extract)
}

/** Validates one raw JSON record against the Cheese schema. `defaultRegionId`
 *  fills `regionId` when the record omits it (wrapped import format). */
export function validateCheeseRecord(
  raw: unknown,
  index: number,
  defaultRegionId?: string,
): { ok: true; cheese: Cheese } | { ok: false; error: ValidationError } {
  const errors: string[] = []
  if (!isPlainObject(raw)) {
    return { ok: false, error: { index, id: null, errors: ['doit être un objet JSON'] } }
  }
  const id = isNonEmptyString(raw.id) ? raw.id : null
  if (!id) errors.push('"id" manquant ou vide')

  for (const field of REQUIRED_STRING_FIELDS) {
    if (!isNonEmptyString(raw[field])) errors.push(`"${field}" manquant ou vide`)
  }

  const intensite = raw.intensite
  if (!(typeof intensite === 'number' && Number.isInteger(intensite) && intensite >= 1 && intensite <= 5)) {
    errors.push('"intensite" doit être un entier entre 1 et 5')
  }

  if (typeof raw.aop !== 'boolean') errors.push('"aop" doit être un booléen (true/false)')

  if (!isStringArray(raw.notes) || raw.notes.length === 0) {
    errors.push('"notes" doit être un tableau de chaînes non vide')
  }

  if (!isPlainObject(raw.accords)) errors.push('"accords" doit être un objet')

  if (!isPlainObject(raw.nutrition)) errors.push('"nutrition" doit être un objet')

  if (!isStringArray(raw.galerie) || raw.galerie.length === 0) {
    errors.push('"galerie" doit être un tableau de chaînes non vide')
  }

  const rawMap = raw.map
  let mapTuple: [number, number] | null = null
  if (
    Array.isArray(rawMap) &&
    rawMap.length === 2 &&
    typeof rawMap[0] === 'number' &&
    typeof rawMap[1] === 'number' &&
    rawMap.every((n) => n >= 0 && n <= 100)
  ) {
    mapTuple = [rawMap[0], rawMap[1]]
  } else {
    errors.push('"map" doit être un tableau [x, y] avec x et y entre 0 et 100')
  }

  const regionId = isNonEmptyString(raw.regionId) ? raw.regionId : defaultRegionId
  if (!regionId) errors.push('"regionId" manquant et aucune région par défaut fournie')

  const alt = raw.alt === undefined ? [] : raw.alt
  if (!isStringArray(alt)) errors.push('"alt" doit être un tableau de chaînes')

  for (const field of OPTIONAL_STRING_FIELDS) {
    if (raw[field] !== undefined && !isString(raw[field])) errors.push(`"${field}" doit être une chaîne`)
  }

  if (raw.image !== undefined && !isCheeseImage(raw.image)) {
    errors.push('"image" doit être un objet { url, width, height, credit, creditUrl }')
  }
  if (raw.wikipedia !== undefined && !isCheeseWikipedia(raw.wikipedia)) {
    errors.push('"wikipedia" doit être un objet { url, extract }')
  }

  if (errors.length > 0) {
    return { ok: false, error: { index, id, errors } }
  }

  const cheese: Cheese = {
    id: id!,
    nom: raw.nom as string,
    alt: alt as string[],
    dept: raw.dept as string,
    commune: raw.commune as string,
    lait: raw.lait as string,
    race: raw.race as string,
    famille: raw.famille as string,
    croute: raw.croute as string,
    texture: raw.texture as string,
    forme: raw.forme as string,
    poids: raw.poids as string,
    dim: raw.dim as string,
    affinage: raw.affinage as string,
    mg: raw.mg as string,
    saison: raw.saison as string,
    intensite: intensite as 1 | 2 | 3 | 4 | 5,
    aop: raw.aop as boolean,
    prix: raw.prix as string,
    dispo: raw.dispo as string,
    color: raw.color as string,
    notes: raw.notes as string[],
    accords: pickAccords(raw.accords),
    histoire: raw.histoire as string,
    anecdote: isString(raw.anecdote) ? raw.anecdote : undefined,
    fabrication: isString(raw.fabrication) ? raw.fabrication : undefined,
    conservation: isString(raw.conservation) ? raw.conservation : undefined,
    service: isString(raw.service) ? raw.service : undefined,
    nutrition: pickNutrition(raw.nutrition),
    galerie: raw.galerie as string[],
    map: mapTuple!,
    regionId: regionId as string,
    image: isCheeseImage(raw.image) ? raw.image : undefined,
    wikipedia: isCheeseWikipedia(raw.wikipedia) ? raw.wikipedia : undefined,
  }
  return { ok: true, cheese }
}

// ---- top-level payload parsing ---------------------------------------------

export interface ParsedImportPayload {
  region?: Region
  records: unknown[]
}

/** Accepts either a bare `Cheese[]` array or `{ region?, cheeses: [] }`. */
export function parseImportPayload(text: string): ParsedImportPayload {
  let json: unknown
  try {
    json = JSON.parse(text)
  } catch {
    throw new Error('JSON invalide : le texte fourni ne peut pas être analysé.')
  }
  if (Array.isArray(json)) {
    return { records: json }
  }
  if (isPlainObject(json) && Array.isArray(json.cheeses)) {
    let region: Region | undefined
    if (json.region !== undefined) {
      const r = json.region
      if (isPlainObject(r) && isNonEmptyString(r.id) && isNonEmptyString(r.name)) {
        region = { id: r.id, name: r.name }
      } else {
        throw new Error('"region" doit être un objet { "id": string, "name": string }.')
      }
    }
    return { region, records: json.cheeses }
  }
  throw new Error(
    'Format non reconnu : attendu un tableau de fromages, ou un objet { "region"?: {...}, "cheeses": [...] }.',
  )
}

export function validateImportPayload(payload: ParsedImportPayload): ValidationResult {
  const valid: Cheese[] = []
  const invalid: ValidationError[] = []
  payload.records.forEach((raw, index) => {
    const result = validateCheeseRecord(raw, index, payload.region?.id)
    if (result.ok) valid.push(result.cheese)
    else invalid.push(result.error)
  })
  return { valid, invalid }
}

// ---- export -----------------------------------------------------------------

export interface ExportPayload {
  exportedAt: string
  regions: Region[]
  cheeses: Cheese[]
}

export function buildExportPayload(cheeses: Cheese[], regions: Region[]): ExportPayload {
  return { exportedAt: new Date().toISOString(), regions, cheeses }
}

export function exportPayloadToJson(payload: ExportPayload): string {
  return JSON.stringify(payload, null, 2)
}
