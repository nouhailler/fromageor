import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FirstLaunchNotice } from './FirstLaunchNotice'
import { ACKNOWLEDGED_KEY, ACKNOWLEDGED_VERSION_KEY, setAcknowledged } from '../../lib/legal-storage'
import { LEGAL_NOTICE_VERSION } from '../../lib/legal-notice'

beforeEach(() => {
  localStorage.clear()
})

/** Remonte le composant, comme au lancement suivant de l'application : seul
 *  le stockage traverse. */
function relaunch() {
  const { unmount } = render(<FirstLaunchNotice />)
  return unmount
}

describe('FirstLaunchNotice', () => {
  it('affiche l\'avertissement à la première ouverture', () => {
    render(<FirstLaunchNotice />)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByRole('heading', { name: /Information importante/ })).toBeInTheDocument()
    expect(screen.getByText(/à titre informatif et pratique/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /J’ai compris/ })).toBeInTheDocument()
  })

  it('fait disparaître l\'avertissement au clic sur « J\'ai compris » et mémorise la validation', () => {
    render(<FirstLaunchNotice />)
    fireEvent.click(screen.getByRole('button', { name: /J’ai compris/ }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(localStorage.getItem(ACKNOWLEDGED_KEY)).toBe('true')
    expect(localStorage.getItem(ACKNOWLEDGED_VERSION_KEY)).toBe(LEGAL_NOTICE_VERSION)
  })

  it('ne réapparaît pas au rechargement une fois validé', () => {
    const unmount = relaunch()
    fireEvent.click(screen.getByRole('button', { name: /J’ai compris/ }))
    unmount()

    // Rechargement : nouveau montage, même stockage.
    relaunch()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('laisse arriver directement sur l\'écran principal quand la validation est déjà là', () => {
    setAcknowledged(true)
    const { container } = render(<FirstLaunchNotice />)
    expect(container).toBeEmptyDOMElement()
  })

  it('réapparaît si le stockage a été effacé', () => {
    const unmount = relaunch()
    fireEvent.click(screen.getByRole('button', { name: /J’ai compris/ }))
    unmount()

    localStorage.clear()
    relaunch()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('ouvre les mentions complètes depuis « Voir les détails » et revient en arrière', () => {
    render(<FirstLaunchNotice />)

    fireEvent.click(screen.getByRole('button', { name: 'Voir les détails' }))
    expect(screen.getByRole('heading', { name: 'Mentions légales' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Limitation de responsabilité' })).toBeInTheDocument()
    expect(screen.getByText(/Dans les limites autorisées par la réglementation applicable/)).toBeInTheDocument()
    // La validation reste possible depuis le détail, mais pas la re-navigation.
    expect(screen.queryByRole('button', { name: 'Voir les détails' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: "Revenir à l'avertissement" }))
    expect(screen.getByRole('heading', { name: /Information importante/ })).toBeInTheDocument()
  })

  it('referme le détail sur Échap sans valider l\'avertissement', () => {
    render(<FirstLaunchNotice />)

    fireEvent.click(screen.getByRole('button', { name: 'Voir les détails' }))
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.getByRole('heading', { name: /Information importante/ })).toBeInTheDocument()
    expect(localStorage.getItem(ACKNOWLEDGED_KEY)).toBeNull()
  })

  it('referme le détail sur le retour Android, sans quitter la modale', () => {
    render(<FirstLaunchNotice />)
    fireEvent.click(screen.getByRole('button', { name: 'Voir les détails' }))

    // jsdom ne déclenche pas `popstate` sur history.back() : on l'émet
    // nous-mêmes, comme le ferait le bouton retour du système.
    fireEvent(window, new PopStateEvent('popstate'))

    expect(screen.getByRole('heading', { name: /Information importante/ })).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('n\'est pas refermé par Échap tant que l\'avertissement n\'est pas validé', () => {
    render(<FirstLaunchNotice />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('donne le focus au bouton principal et le garde dans la modale', () => {
    render(<FirstLaunchNotice />)
    const primary = screen.getByRole('button', { name: /J’ai compris/ })
    expect(primary).toHaveFocus()

    // Le bouton principal est le dernier élément focalisable : la tabulation
    // repart au premier au lieu de sortir derrière la modale.
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(screen.getByRole('button', { name: 'Voir les détails' })).toHaveFocus()

    // Et en sens inverse depuis le premier élément.
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(primary).toHaveFocus()
  })
})
