// Identité de la version installée : d'où vient ce build et quand il a été
// fait. Les constantes sont injectées par Vite (voir `define` dans
// vite.config.ts et src/build-info.d.ts) ; le formatage est ici, testé.
import { type Lang } from './i18n/lang'

/** Date du build de la version en cours d'exécution (ISO 8601, UTC). */
export const BUILD_TIME: string = __BUILD_TIME__

/** Commit git court du build, ou 'inconnu'. */
export const BUILD_COMMIT: string = __BUILD_COMMIT__

const MINUTE = 60 * 1000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** Étiquette de version, dérivée de la date du build : `2026.08.20-1712`.
 *  Croissante et comparable d'un déploiement à l'autre, sans numéro à
 *  incrémenter à la main. */
export function buildVersionLabel(iso: string = BUILD_TIME, lang: Lang = 'fr'): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return lang === 'en' ? 'unknown' : 'inconnue'
  return (
    `${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}` +
    `-${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}`
  )
}

/** Date du build en millisecondes, `NaN` si elle est illisible. */
export function buildTimeMs(iso: string = BUILD_TIME): number {
  return new Date(iso).getTime()
}

/** Date lisible, dans le fuseau de l'appareil : `20/08/2026 à 19:12`
 *  (`20/08/2026 at 19:12` in English — day/month order kept, no US-style
 *  month/day ambiguity). */
export function formatBuildDate(iso: string = BUILD_TIME, timeZone?: string, lang: Lang = 'fr'): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return lang === 'en' ? 'unknown date' : 'date inconnue'
  const locale = lang === 'en' ? 'en-GB' : 'fr-FR'
  const day = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone,
  }).format(date)
  const time = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
  }).format(date)
  return lang === 'en' ? `${day} at ${time}` : `${day} à ${time}`
}

/** Ancienneté en clair : « à l'instant », « il y a 5 minutes », « il y a
 *  3 heures », « il y a 2 jours ». Volontairement grossier — la précision
 *  utile ici est l'ordre de grandeur. */
export function formatRelative(at: number, now: number = Date.now(), lang: Lang = 'fr'): string {
  const elapsed = now - at
  if (!Number.isFinite(elapsed)) return lang === 'en' ? 'unknown date' : 'date inconnue'
  // Une horloge d'appareil en avance sur celle du serveur de build ne doit
  // pas produire « il y a -3 minutes ».
  if (elapsed < MINUTE) return lang === 'en' ? 'just now' : "à l'instant"
  if (elapsed < HOUR) {
    const minutes = Math.floor(elapsed / MINUTE)
    return lang === 'en' ? `${minutes} minute${minutes > 1 ? 's' : ''} ago` : `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`
  }
  if (elapsed < DAY) {
    const hours = Math.floor(elapsed / HOUR)
    return lang === 'en' ? `${hours} hour${hours > 1 ? 's' : ''} ago` : `il y a ${hours} heure${hours > 1 ? 's' : ''}`
  }
  const days = Math.floor(elapsed / DAY)
  return lang === 'en' ? `${days} day${days > 1 ? 's' : ''} ago` : `il y a ${days} jour${days > 1 ? 's' : ''}`
}
