// Logique de la mise à jour automatique, isolée des API du navigateur pour
// rester testable. Le câblage réel (service worker, rechargement) est dans
// src/pwa.ts.
//
// Rappel du fonctionnement : le service worker est généré en `autoUpdate`
// (skipWaiting + clientsClaim). Une nouvelle version s'active donc seule dès
// qu'elle est téléchargée et prend la main sur l'onglet. Sans rechargement de
// la page, l'utilisateur continuerait pourtant de voir l'ancienne interface,
// déjà chargée en mémoire : c'est ce rechargement que ce module cadence.

/** Une nouvelle version de fromages n'a rien d'urgent : une vérification par
 *  demi-heure suffit, complétée par un contrôle à chaque retour au premier
 *  plan et à chaque reconnexion — les deux moments où une app installée a le
 *  plus de chances d'avoir manqué un déploiement. */
export const UPDATE_CHECK_INTERVAL_MS = 30 * 60 * 1000

/** Laps de temps pendant lequel le bandeau reste visible avant le
 *  rechargement, pour que la coupure ne surprenne pas. */
export const RELOAD_NOTICE_MS = 4000

/** Garde-fou anti-boucle : deux rechargements de mise à jour rapprochés
 *  signalent un déploiement cassé plutôt qu'une vraie nouveauté. Passé ce
 *  délai, une seconde mise à jour dans la même session reste appliquée — une
 *  app laissée ouverte toute la journée doit pouvoir suivre plusieurs
 *  déploiements. */
export const MIN_RELOAD_INTERVAL_MS = 10 * 60 * 1000

/** Clé de session portant l'horodatage du dernier rechargement de mise à jour. */
export const LAST_RELOAD_KEY = 'fromages-maj-rechargee-le'

/** Clé locale portant l'horodatage de la dernière vérification aboutie.
 *  Contrairement au rechargement, elle survit à la fermeture de l'app : elle
 *  sert à montrer à l'utilisateur que les contrôles ont bien lieu. */
export const LAST_CHECK_KEY = 'fromages-maj-verifiee-le'

interface Listenable {
  addEventListener(type: string, handler: () => void): void
  removeEventListener(type: string, handler: () => void): void
}

export interface UpdateCheckHost extends Listenable {
  setInterval(handler: () => void, ms: number): number
  clearInterval(id: number): void
}

export interface VisibilityHost extends Listenable {
  readonly visibilityState: DocumentVisibilityState
}

export interface UpdateCheckOptions {
  win: UpdateCheckHost
  doc: VisibilityHost
  intervalMs?: number
}

/** Déclenche `check` périodiquement, au retour au premier plan et au retour
 *  du réseau. Renvoie la fonction d'arrêt (listeners et minuterie compris). */
export function startUpdateChecks(
  check: () => void,
  { win, doc, intervalMs = UPDATE_CHECK_INTERVAL_MS }: UpdateCheckOptions,
): () => void {
  const onVisible = () => {
    if (doc.visibilityState === 'visible') check()
  }
  const timer = win.setInterval(check, intervalMs)
  doc.addEventListener('visibilitychange', onVisible)
  win.addEventListener('online', check)

  return () => {
    win.clearInterval(timer)
    doc.removeEventListener('visibilitychange', onVisible)
    win.removeEventListener('online', check)
  }
}

export type ReloadPlan =
  /** Ne rien faire : un rechargement vient d'avoir lieu, c'est probablement
   *  une boucle plutôt qu'une nouvelle version. */
  | { kind: 'skip'; reason: 'too-soon' }
  /** Recharger tout de suite — personne ne regarde l'écran. */
  | { kind: 'now' }
  /** Laisser le bandeau s'afficher, puis recharger. */
  | { kind: 'after'; ms: number }

export interface ReloadContext {
  /** L'onglet est-il au premier plan ? */
  visible: boolean
  /** Horodatage du dernier rechargement de mise à jour, `null` si aucun. */
  lastReloadAt: number | null
  now: number
  noticeMs?: number
  minIntervalMs?: number
}

/** Décide quoi faire quand une nouvelle version vient de s'activer. */
export function planReload({
  visible,
  lastReloadAt,
  now,
  noticeMs = RELOAD_NOTICE_MS,
  minIntervalMs = MIN_RELOAD_INTERVAL_MS,
}: ReloadContext): ReloadPlan {
  if (lastReloadAt !== null && now - lastReloadAt < minIntervalMs) {
    return { kind: 'skip', reason: 'too-soon' }
  }
  if (!visible) return { kind: 'now' }
  return { kind: 'after', ms: noticeMs }
}

/** Issue d'une vérification déclenchée à la main depuis l'écran
 *  Import / Export. */
export type UpdateCheckResult =
  /** Une nouvelle version a été trouvée : le rechargement suit. */
  | 'update-found'
  /** Le serveur n'a rien de plus récent. */
  | 'up-to-date'
  /** Appareil hors ligne : rien à vérifier. */
  | 'offline'
  /** Pas de service worker (mode développement, navigation privée stricte,
   *  navigateur sans support) : il n'y a pas de mise à jour à chercher. */
  | 'unsupported'
  /** Le serveur n'a pas répondu correctement. */
  | 'error'

/** Le strict nécessaire d'un ServiceWorkerRegistration, pour pouvoir tester
 *  la décision sans navigateur. */
export interface UpdatableRegistration {
  readonly installing: unknown | null
  readonly waiting: unknown | null
  update(): Promise<unknown>
}

export interface ManualCheckContext {
  registration: UpdatableRegistration | null
  online: boolean
  /** Une nouvelle version a-t-elle déjà pris la main pendant la session ?
   *  `registration.update()` peut résoudre après que le nouveau worker s'est
   *  activé (skipWaiting) : `installing` et `waiting` sont alors déjà vides,
   *  et ce drapeau est la seule trace de la mise à jour. */
  alreadySeen: boolean
}

/** Vérifie s'il existe une version plus récente et dit ce qu'il en est.
 *  Ne recharge rien : le rechargement reste piloté par `onNeedReload`. */
export async function runUpdateCheck({
  registration,
  online,
  alreadySeen,
}: ManualCheckContext): Promise<UpdateCheckResult> {
  if (!registration) return 'unsupported'
  if (!online) return 'offline'
  try {
    await registration.update()
  } catch {
    return 'error'
  }
  if (alreadySeen || registration.installing || registration.waiting) return 'update-found'
  return 'up-to-date'
}
