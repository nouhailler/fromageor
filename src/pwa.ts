// Câblage de la mise à jour automatique sur les API du navigateur. La logique
// de décision — quand vérifier, quand recharger — est dans lib/app-update.ts,
// où elle est testée.
import { registerSW } from 'virtual:pwa-register'
import {
  LAST_CHECK_KEY,
  LAST_RELOAD_KEY,
  planReload,
  runUpdateCheck,
  startUpdateChecks,
  type ReloadPlan,
  type UpdateCheckResult,
} from './lib/app-update'

type UpdateListener = () => void

const listeners = new Set<UpdateListener>()
let updatePending = false
/** Une nouvelle version a-t-elle pris la main depuis le démarrage ? Distinct
 *  de `updatePending`, qui ne vaut que pour le bandeau : une mise à jour
 *  appliquée immédiatement, ou écartée par le garde-fou anti-boucle, ne
 *  l'allume pas mais compte bien comme une version trouvée. */
let updateSeen = false
let swRegistration: ServiceWorkerRegistration | null = null

/** Prévient l'interface qu'une nouvelle version vient de prendre la main et
 *  que la page va se recharger. Renvoie la fonction de désabonnement. */
export function subscribeToUpdateNotice(listener: UpdateListener): () => void {
  listeners.add(listener)
  // Une mise à jour arrivée avant le montage du composant ne doit pas passer
  // à la trappe.
  if (updatePending) listener()
  return () => listeners.delete(listener)
}

/** L'interface peut vouloir savoir, au montage, si l'attente est déjà en cours. */
export function isUpdatePending() {
  return updatePending
}

function announceUpdate() {
  updatePending = true
  for (const listener of listeners) listener()
}

/** Horodatage de la dernière vérification aboutie, `null` si aucune. */
export function readLastCheckAt(): number | null {
  try {
    const raw = localStorage.getItem(LAST_CHECK_KEY)
    if (!raw) return null
    const value = Number(raw)
    return Number.isFinite(value) ? value : null
  } catch {
    return null
  }
}

function markChecked() {
  try {
    localStorage.setItem(LAST_CHECK_KEY, String(Date.now()))
  } catch {
    // Stockage indisponible : on perd l'affichage « dernière vérification »,
    // pas la vérification elle-même.
  }
}

/** Vérification déclenchée par l'utilisateur depuis l'écran Import / Export.
 *  Le rechargement, lui, reste piloté par `onNeedReload`. */
export async function checkForUpdate(): Promise<UpdateCheckResult> {
  // Une demande explicite l'emporte sur le garde-fou anti-boucle : si une
  // version vient d'être installée, l'utilisateur qui appuie sur le bouton
  // veut la voir, pas se faire répondre « trop tôt ».
  try {
    sessionStorage.removeItem(LAST_RELOAD_KEY)
  } catch {
    // Sans sessionStorage, il n'y avait de toute façon pas de garde-fou.
  }
  const result = await runUpdateCheck({
    registration: swRegistration,
    online: navigator.onLine,
    alreadySeen: updateSeen,
  })
  if (result === 'up-to-date' || result === 'update-found') markChecked()
  return result
}

function readLastReloadAt(): number | null {
  try {
    const raw = sessionStorage.getItem(LAST_RELOAD_KEY)
    if (!raw) return null
    const value = Number(raw)
    return Number.isFinite(value) ? value : null
  } catch {
    // Stockage indisponible (navigation privée stricte) : on considère
    // qu'aucun rechargement n'a eu lieu.
    return null
  }
}

function markReloadedAndReload() {
  try {
    sessionStorage.setItem(LAST_RELOAD_KEY, String(Date.now()))
  } catch {
    // Le garde-fou anti-boucle saute, mais recharger reste préférable à
    // laisser une version périmée à l'écran.
  }
  window.location.reload()
}

function applyPlan(plan: ReloadPlan) {
  if (plan.kind === 'skip') return
  if (plan.kind === 'now') {
    markReloadedAndReload()
    return
  }
  announceUpdate()
  window.setTimeout(markReloadedAndReload, plan.ms)
}

/** Enregistre le service worker, programme les vérifications de mise à jour et
 *  recharge la page quand une nouvelle version prend la main. */
export function setupAutoUpdate() {
  registerSW({
    immediate: true,
    // Fourni, ce callback débranche le rechargement immédiat que
    // vite-plugin-pwa ferait sinon dès l'activation : le moment du
    // rechargement nous revient. Il n'est appelé que sur une vraie mise à
    // jour, jamais à la première installation du service worker.
    onNeedReload() {
      updateSeen = true
      applyPlan(
        planReload({
          visible: document.visibilityState === 'visible',
          lastReloadAt: readLastReloadAt(),
          now: Date.now(),
        }),
      )
    },
    onRegisteredSW(_swUrl, registration) {
      if (!registration) return
      swRegistration = registration
      startUpdateChecks(
        () => {
          registration
            .update()
            .then(markChecked)
            .catch(() => {
              // Hors ligne ou serveur injoignable : la prochaine vérification
              // réessaiera, inutile de bruiter la console.
            })
        },
        { win: window, doc: document },
      )
    },
  })
}
