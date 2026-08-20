import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import App from '../../App'
import { setAcknowledged } from '../../lib/legal-storage'

beforeEach(() => {
  localStorage.clear()
  // L'avertissement de premier lancement est déjà validé : on teste ici
  // l'accès permanent aux mentions, depuis l'application normale.
  setAcknowledged(true)
})

describe('Accès aux mentions légales depuis le menu', () => {
  it('ouvre l\'écran Mentions légales et le referme', () => {
    render(<App />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Mentions légales' }))

    expect(screen.getByRole('heading', { name: 'Mentions légales' })).toBeInTheDocument()
    // Le menu se referme en ouvrant l'écran, comme les autres entrées.
    expect(screen.queryByRole('button', { name: 'Fermer le menu' })).not.toBeInTheDocument()

    // Les huit sections de fond, plus les données personnelles et l'éditeur.
    for (const title of [
      'Avertissement',
      'Limitation de responsabilité',
      "Utilisation de l'application",
      'Exactitude des informations',
      'Dysfonctionnements et disponibilité',
      'Données et résultats',
      'Sources externes',
      "Évolution de l'application",
      'Données personnelles',
      'Éditeur',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    // L'application n'utilise pas le GPS : la section de localisation est absente.
    expect(screen.queryByRole('heading', { name: 'Précision de la localisation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Retour' }))
    expect(screen.queryByRole('heading', { name: 'Mentions légales' })).not.toBeInTheDocument()
  })

  it('affiche l\'identité de l\'éditeur', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Mentions légales' }))

    expect(screen.getByText('Swinux')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'contact@swinux.ch' })).toHaveAttribute(
      'href',
      'mailto:contact@swinux.ch',
    )
    expect(screen.getByText('Canton de Vaud, Suisse')).toBeInTheDocument()
  })

  it('laisse l\'application intacte : les autres écrans du menu répondent toujours', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }))
    // « Accords » est aussi proposé depuis l'accueil : on vise l'entrée du menu.
    const menuEntries = screen.getAllByRole('button', { name: /Accords mets/ })
    fireEvent.click(menuEntries[menuEntries.length - 1])
    expect(screen.getByRole('heading', { name: /Accords/ })).toBeInTheDocument()
  })
})

describe('Premier lancement au sein de l\'application complète', () => {
  it('affiche l\'avertissement par-dessus l\'application, puis laisse la main', () => {
    localStorage.clear()
    render(<App />)

    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByRole('heading', { name: /Information importante/ })).toBeInTheDocument()

    fireEvent.click(within(dialog).getByRole('button', { name: /J’ai compris/ }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    // L'écran d'accueil est bien là derrière.
    expect(screen.getByRole('button', { name: 'Ouvrir le menu' })).toBeInTheDocument()
  })
})
