import { beforeEach, describe, expect, it } from 'vitest'
import {
  ACKNOWLEDGED_KEY,
  ACKNOWLEDGED_VERSION_KEY,
  getAcknowledged,
  getAcknowledgedVersion,
  needsAcknowledgement,
  resetAcknowledged,
  setAcknowledged,
} from './legal-storage'
import { LEGAL_NOTICE_VERSION } from './legal-notice'

beforeEach(() => {
  localStorage.clear()
})

describe('getAcknowledged / setAcknowledged', () => {
  it('considère qu\'un stockage vide vaut « pas encore validé »', () => {
    expect(getAcknowledged()).toBe(false)
    expect(needsAcknowledgement()).toBe(true)
  })

  it('enregistre la validation et la version en vigueur', () => {
    setAcknowledged(true)
    expect(localStorage.getItem(ACKNOWLEDGED_KEY)).toBe('true')
    expect(localStorage.getItem(ACKNOWLEDGED_VERSION_KEY)).toBe(LEGAL_NOTICE_VERSION)
    expect(getAcknowledged()).toBe(true)
    expect(getAcknowledgedVersion()).toBe(LEGAL_NOTICE_VERSION)
    expect(needsAcknowledgement()).toBe(false)
  })

  it('ne réclame plus rien après un « rechargement » (relecture du stockage)', () => {
    setAcknowledged(true)
    // Nouvelle lecture, comme au démarrage suivant : le stockage fait foi.
    expect(needsAcknowledgement()).toBe(false)
  })

  it('redemande la validation après effacement du stockage', () => {
    setAcknowledged(true)
    resetAcknowledged()
    expect(localStorage.getItem(ACKNOWLEDGED_KEY)).toBeNull()
    expect(localStorage.getItem(ACKNOWLEDGED_VERSION_KEY)).toBeNull()
    expect(needsAcknowledgement()).toBe(true)
  })

  it('traite une valeur inattendue comme une absence de validation', () => {
    localStorage.setItem(ACKNOWLEDGED_KEY, 'peut-être')
    expect(getAcknowledged()).toBe(false)
  })

  it('efface la validation quand on passe explicitement false', () => {
    setAcknowledged(true)
    setAcknowledged(false)
    expect(getAcknowledged()).toBe(false)
  })

  it('garde la version acceptée après une montée de version des mentions', () => {
    // Simule une validation faite sous une version antérieure : la version
    // stockée reste lisible, ce qui permettra un réaffichage ciblé le jour
    // où il sera décidé.
    localStorage.setItem(ACKNOWLEDGED_KEY, 'true')
    localStorage.setItem(ACKNOWLEDGED_VERSION_KEY, '0.9')
    expect(getAcknowledgedVersion()).toBe('0.9')
    // Politique actuelle : une version antérieure ne redéclenche pas la modale.
    expect(needsAcknowledgement()).toBe(false)
  })
})
