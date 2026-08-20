import { describe, expect, it } from 'vitest'
import {
  BUILD_COMMIT,
  BUILD_TIME,
  buildTimeMs,
  buildVersionLabel,
  formatBuildDate,
  formatRelative,
} from './app-version'

describe('constantes injectées au build', () => {
  it('expose une date de build lisible et un commit', () => {
    expect(Number.isNaN(buildTimeMs())).toBe(false)
    expect(new Date(BUILD_TIME).toISOString()).toBe(BUILD_TIME)
    expect(BUILD_COMMIT).toMatch(/^[0-9a-f]{7,40}$|^inconnu$/)
  })
})

describe('buildVersionLabel', () => {
  it('dérive une étiquette de la date du build', () => {
    expect(buildVersionLabel('2026-08-20T17:12:34.000Z')).toBe('2026.08.20-1712')
  })

  it('complète les nombres à un chiffre', () => {
    expect(buildVersionLabel('2026-01-05T04:07:00.000Z')).toBe('2026.01.05-0407')
  })

  it('reste croissante d\'un déploiement au suivant', () => {
    const older = buildVersionLabel('2026-08-20T17:12:00.000Z')
    const newer = buildVersionLabel('2026-08-20T17:40:00.000Z')
    expect(newer > older).toBe(true)
  })

  it('ne casse pas sur une date illisible', () => {
    expect(buildVersionLabel('pas une date')).toBe('inconnue')
  })
})

describe('formatBuildDate', () => {
  it('affiche jour et heure en français', () => {
    expect(formatBuildDate('2026-08-20T17:12:00.000Z', 'UTC')).toBe('20/08/2026 à 17:12')
  })

  it('suit le fuseau de l\'appareil', () => {
    expect(formatBuildDate('2026-08-20T17:12:00.000Z', 'Europe/Zurich')).toBe('20/08/2026 à 19:12')
  })

  it('ne casse pas sur une date illisible', () => {
    expect(formatBuildDate('pas une date')).toBe('date inconnue')
  })
})

describe('formatRelative', () => {
  const now = new Date('2026-08-20T12:00:00.000Z').getTime()
  const ago = (ms: number) => formatRelative(now - ms, now)

  it('dit « à l\'instant » sous la minute', () => {
    expect(ago(0)).toBe("à l'instant")
    expect(ago(59_000)).toBe("à l'instant")
  })

  it('compte en minutes, puis en heures, puis en jours', () => {
    expect(ago(60_000)).toBe('il y a 1 minute')
    expect(ago(5 * 60_000)).toBe('il y a 5 minutes')
    expect(ago(60 * 60_000)).toBe('il y a 1 heure')
    expect(ago(3 * 60 * 60_000)).toBe('il y a 3 heures')
    expect(ago(24 * 60 * 60_000)).toBe('il y a 1 jour')
    expect(ago(9 * 24 * 60 * 60_000)).toBe('il y a 9 jours')
  })

  it('ne produit pas de durée négative si l\'horloge de l\'appareil avance', () => {
    expect(formatRelative(now + 60_000, now)).toBe("à l'instant")
  })
})
