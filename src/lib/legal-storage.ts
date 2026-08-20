// Mémorisation locale de la prise de connaissance des mentions légales.
//
// Même mécanisme que les favoris (lib/favorites-storage.ts) : localStorage
// direct, chaque accès protégé, aucune donnée personnelle — seulement un
// drapeau et le numéro de version accepté.

import { LEGAL_NOTICE_VERSION } from './legal-notice'

export const ACKNOWLEDGED_KEY = 'legal_notice_acknowledged'
export const ACKNOWLEDGED_VERSION_KEY = 'legal_notice_acknowledged_version'

function read(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    // Stockage indisponible (navigation privée stricte) : on se comporte
    // comme si rien n'avait été accepté.
    return null
  }
}

/** L'utilisateur a-t-il déjà validé l'avertissement, quelle qu'en soit la
 *  version ? */
export function getAcknowledged(): boolean {
  return read(ACKNOWLEDGED_KEY) === 'true'
}

/** Version des mentions validée, ou `null` si aucune. */
export function getAcknowledgedVersion(): string | null {
  return read(ACKNOWLEDGED_VERSION_KEY)
}

/** Enregistre la validation, avec la version en vigueur. */
export function setAcknowledged(value: boolean = true): void {
  try {
    if (!value) {
      resetAcknowledged()
      return
    }
    localStorage.setItem(ACKNOWLEDGED_KEY, 'true')
    localStorage.setItem(ACKNOWLEDGED_VERSION_KEY, LEGAL_NOTICE_VERSION)
  } catch {
    // Stockage plein ou refusé : l'avertissement réapparaîtra au prochain
    // lancement, ce qui reste préférable à un plantage.
  }
}

/** Efface la validation. Sert au bouton de réinitialisation de développement
 *  et aux tests. */
export function resetAcknowledged(): void {
  try {
    localStorage.removeItem(ACKNOWLEDGED_KEY)
    localStorage.removeItem(ACKNOWLEDGED_VERSION_KEY)
  } catch {
    // rien à faire : sans stockage, il n'y avait rien à effacer
  }
}

/** Faut-il afficher l'avertissement de premier lancement ?
 *
 *  Volontairement indépendant de la version pour cette première mise en
 *  œuvre : une modification mineure des textes ne doit pas re-solliciter
 *  tout le monde. Le jour où une modification importante le justifie,
 *  comparer `getAcknowledgedVersion()` à la version attendue suffit — la
 *  version acceptée est déjà stockée, sans migration à prévoir. */
export function needsAcknowledgement(): boolean {
  return !getAcknowledged()
}
