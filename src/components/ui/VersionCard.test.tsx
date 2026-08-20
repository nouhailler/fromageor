import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { VersionCard } from './VersionCard'
import { LAST_CHECK_KEY, type UpdateCheckResult } from '../../lib/app-update'
import { BUILD_COMMIT, buildVersionLabel, formatBuildDate } from '../../lib/app-version'

// Le câblage service worker n'existe pas sous jsdom : on remplace le module
// de branchement, la décision elle-même étant testée dans app-update.test.ts.
const checkForUpdate = vi.fn<() => Promise<UpdateCheckResult>>()

vi.mock('../../pwa', () => ({
  checkForUpdate: () => checkForUpdate(),
  readLastCheckAt: () => {
    const raw = localStorage.getItem('fromages-maj-verifiee-le')
    return raw ? Number(raw) : null
  },
}))

beforeEach(() => {
  localStorage.clear()
  checkForUpdate.mockReset()
})

describe('VersionCard', () => {
  it('affiche la version, sa date et le commit du build', () => {
    render(<VersionCard />)
    expect(screen.getByText(buildVersionLabel())).toBeInTheDocument()
    expect(screen.getByText(BUILD_COMMIT)).toBeInTheDocument()
    expect(screen.getByText(formatBuildDate())).toBeInTheDocument()
  })

  it('indique qu\'aucune vérification n\'a encore eu lieu sur cet appareil', () => {
    render(<VersionCard />)
    expect(screen.getByText('jamais depuis cet appareil')).toBeInTheDocument()
  })

  it('affiche l\'ancienneté de la dernière vérification enregistrée', () => {
    localStorage.setItem(LAST_CHECK_KEY, String(Date.now() - 5 * 60 * 1000))
    render(<VersionCard />)
    expect(screen.getByText('il y a 5 minutes')).toBeInTheDocument()
  })

  it('confirme que l\'application est à jour', async () => {
    checkForUpdate.mockResolvedValue('up-to-date')
    render(<VersionCard />)
    fireEvent.click(screen.getByRole('button', { name: /Rechercher une mise à jour/ }))
    expect(await screen.findByText('Vous avez déjà la dernière version.')).toBeInTheDocument()
    expect(checkForUpdate).toHaveBeenCalledTimes(1)
  })

  it('annonce une nouvelle version et le redémarrage à venir', async () => {
    checkForUpdate.mockResolvedValue('update-found')
    render(<VersionCard />)
    fireEvent.click(screen.getByRole('button', { name: /Rechercher une mise à jour/ }))
    expect(await screen.findByText(/Nouvelle version trouvée/)).toBeInTheDocument()
  })

  it('explique l\'absence de réseau plutôt que d\'échouer en silence', async () => {
    checkForUpdate.mockResolvedValue('offline')
    render(<VersionCard />)
    fireEvent.click(screen.getByRole('button', { name: /Rechercher une mise à jour/ }))
    expect(await screen.findByText(/Pas de connexion/)).toBeInTheDocument()
  })

  it('rapporte un échec de vérification', async () => {
    checkForUpdate.mockResolvedValue('error')
    render(<VersionCard />)
    fireEvent.click(screen.getByRole('button', { name: /Rechercher une mise à jour/ }))
    expect(await screen.findByText(/La vérification a échoué/)).toBeInTheDocument()
  })

  it('désactive le bouton pendant la recherche, puis le rend', async () => {
    let resolve: (value: UpdateCheckResult) => void = () => {}
    checkForUpdate.mockReturnValue(new Promise((r) => { resolve = r }))
    render(<VersionCard />)
    const button = screen.getByRole('button', { name: /Rechercher une mise à jour/ })

    fireEvent.click(button)
    expect(button).toBeDisabled()
    expect(screen.getByText('Recherche en cours…')).toBeInTheDocument()

    resolve('up-to-date')
    await waitFor(() => expect(button).toBeEnabled())
  })

  it('rafraîchit la date de vérification après un contrôle abouti', async () => {
    checkForUpdate.mockImplementation(async () => {
      localStorage.setItem(LAST_CHECK_KEY, String(Date.now()))
      return 'up-to-date'
    })
    render(<VersionCard />)
    expect(screen.getByText('jamais depuis cet appareil')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Rechercher une mise à jour/ }))
    expect(await screen.findByText("à l'instant")).toBeInTheDocument()
  })
})
