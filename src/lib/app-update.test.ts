import { describe, expect, it, vi } from 'vitest'
import {
  MIN_RELOAD_INTERVAL_MS,
  RELOAD_NOTICE_MS,
  UPDATE_CHECK_INTERVAL_MS,
  planReload,
  startUpdateChecks,
  type UpdateCheckHost,
  type VisibilityHost,
} from './app-update'

/** Fenêtre et document factices : on veut vérifier le câblage des écouteurs
 *  sans dépendre d'un vrai navigateur ni d'horloge réelle. */
function fakeHosts(visibilityState: DocumentVisibilityState = 'visible') {
  const winListeners = new Map<string, Set<() => void>>()
  const docListeners = new Map<string, Set<() => void>>()
  const intervals = new Map<number, { fn: () => void; ms: number }>()
  let nextId = 1

  const add = (map: Map<string, Set<() => void>>) => (type: string, fn: () => void) => {
    if (!map.has(type)) map.set(type, new Set())
    map.get(type)!.add(fn)
  }
  const remove = (map: Map<string, Set<() => void>>) => (type: string, fn: () => void) => {
    map.get(type)?.delete(fn)
  }

  const win: UpdateCheckHost = {
    setInterval: (fn, ms) => {
      const id = nextId++
      intervals.set(id, { fn, ms })
      return id
    },
    clearInterval: (id) => {
      intervals.delete(id)
    },
    addEventListener: add(winListeners),
    removeEventListener: remove(winListeners),
  }

  const doc = {
    visibilityState,
    addEventListener: add(docListeners),
    removeEventListener: remove(docListeners),
  } as VisibilityHost & { visibilityState: DocumentVisibilityState }

  return {
    win,
    doc,
    intervals,
    fireWindow: (type: string) => winListeners.get(type)?.forEach((fn) => fn()),
    fireDocument: (type: string) => docListeners.get(type)?.forEach((fn) => fn()),
    countWindow: (type: string) => winListeners.get(type)?.size ?? 0,
    countDocument: (type: string) => docListeners.get(type)?.size ?? 0,
  }
}

describe('startUpdateChecks', () => {
  it('programme une vérification périodique à l’intervalle par défaut', () => {
    const check = vi.fn()
    const hosts = fakeHosts()

    startUpdateChecks(check, { win: hosts.win, doc: hosts.doc })

    const [entry] = [...hosts.intervals.values()]
    expect(entry.ms).toBe(UPDATE_CHECK_INTERVAL_MS)
    entry.fn()
    expect(check).toHaveBeenCalledTimes(1)
  })

  it('vérifie au retour au premier plan, mais pas quand l’onglet passe en arrière-plan', () => {
    const check = vi.fn()
    const hosts = fakeHosts('hidden')

    startUpdateChecks(check, { win: hosts.win, doc: hosts.doc })

    hosts.fireDocument('visibilitychange')
    expect(check).not.toHaveBeenCalled()

    hosts.doc.visibilityState = 'visible'
    hosts.fireDocument('visibilitychange')
    expect(check).toHaveBeenCalledTimes(1)
  })

  it('vérifie au retour du réseau', () => {
    const check = vi.fn()
    const hosts = fakeHosts()

    startUpdateChecks(check, { win: hosts.win, doc: hosts.doc })
    hosts.fireWindow('online')

    expect(check).toHaveBeenCalledTimes(1)
  })

  it('retire minuterie et écouteurs à l’arrêt', () => {
    const hosts = fakeHosts()

    const stop = startUpdateChecks(vi.fn(), { win: hosts.win, doc: hosts.doc })
    expect(hosts.intervals.size).toBe(1)
    expect(hosts.countDocument('visibilitychange')).toBe(1)
    expect(hosts.countWindow('online')).toBe(1)

    stop()
    expect(hosts.intervals.size).toBe(0)
    expect(hosts.countDocument('visibilitychange')).toBe(0)
    expect(hosts.countWindow('online')).toBe(0)
  })
})

describe('planReload', () => {
  const NOW = 1_700_000_000_000

  it('laisse le bandeau s’afficher avant de recharger un onglet actif', () => {
    expect(planReload({ visible: true, lastReloadAt: null, now: NOW })).toEqual({
      kind: 'after',
      ms: RELOAD_NOTICE_MS,
    })
  })

  it('recharge immédiatement quand l’onglet est en arrière-plan', () => {
    expect(planReload({ visible: false, lastReloadAt: null, now: NOW })).toEqual({ kind: 'now' })
  })

  it('ignore une seconde mise à jour trop rapprochée — signe d’une boucle', () => {
    expect(
      planReload({ visible: true, lastReloadAt: NOW - 1000, now: NOW }),
    ).toEqual({ kind: 'skip', reason: 'too-soon' })
  })

  it('applique de nouveau une mise à jour passé le délai de garde', () => {
    expect(
      planReload({ visible: true, lastReloadAt: NOW - MIN_RELOAD_INTERVAL_MS - 1, now: NOW }),
    ).toEqual({ kind: 'after', ms: RELOAD_NOTICE_MS })
  })

  it('accepte des délais sur mesure', () => {
    expect(
      planReload({
        visible: true,
        lastReloadAt: NOW - 2000,
        now: NOW,
        noticeMs: 1500,
        minIntervalMs: 1000,
      }),
    ).toEqual({ kind: 'after', ms: 1500 })
  })
})
