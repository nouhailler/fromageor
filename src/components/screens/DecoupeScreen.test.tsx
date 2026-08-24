import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../../App'
import { setAcknowledged } from '../../lib/legal-storage'

beforeEach(() => {
  localStorage.clear()
  setAcknowledged(true)
})

function openDecoupe() {
  fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }))
  fireEvent.click(screen.getByRole('button', { name: /Découpe/ }))
}

/** Le bouton retour de la fiche et celui de l'écran superposé portent le même
 *  libellé. La fiche est rendue avant les écrans secondaires dans App, donc
 *  dans cet ordre dans le DOM. */
function backButtons() {
  return screen.getAllByRole('button', { name: 'Retour' })
}

describe('Écran Découpe', () => {
  it('ouvre une méthode depuis la liste et revient en arrière', () => {
    render(<App />)
    openDecoupe()

    // Les six méthodes, chacune ouvrable.
    expect(screen.getByRole('button', { name: /Camembert & petits ronds fleuris/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Roquefort & pâtes persillées/ })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Camembert & petits ronds fleuris/ }))

    expect(screen.getByRole('heading', { name: 'Camembert & petits ronds fleuris' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pourquoi ce geste' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Le geste, pas à pas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'À éviter' })).toBeInTheDocument()
    // Les quatre temps du geste, numérotés.
    for (const titre of ['La forme', 'La lame', 'Le premier coup', 'Les parts']) {
      expect(screen.getAllByText(titre).length).toBeGreaterThan(0)
    }

    fireEvent.click(backButtons()[0])
    expect(screen.getByRole('heading', { name: 'Découpe' })).toBeInTheDocument()
  })

  it('ouvre la fiche d’un fromage depuis la liste des concernés, et y revient', () => {
    render(<App />)
    openDecoupe()
    fireEvent.click(screen.getByRole('button', { name: /Camembert & petits ronds fleuris/ }))

    // Le compte annoncé est celui des noms cliquables.
    fireEvent.click(screen.getByRole('button', { name: 'Coulommiers' }))
    expect(screen.getByRole('heading', { name: 'Coulommiers' })).toBeInTheDocument()

    // La fiche se pose au-dessus de l'écran Découpe : la refermer le découvre.
    fireEvent.click(backButtons()[0])
    expect(screen.getByRole('heading', { name: 'Camembert & petits ronds fleuris' })).toBeInTheDocument()
  })

  it('mène de la fiche à sa méthode, et le retour ramène à la fiche', () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('button', { name: /Découvrir la fiche/ })[0])
    const nom = screen.getAllByRole('heading')[0].textContent

    fireEvent.click(screen.getByRole('button', { name: /Comment découper ce fromage/ }))
    expect(screen.getByRole('heading', { name: 'Pourquoi ce geste' })).toBeInTheDocument()
    // La fiche est fermée : l'écran Découpe est sous elle dans la pile.
    expect(screen.queryByRole('heading', { name: nom ?? '' })).not.toBeInTheDocument()

    fireEvent.click(backButtons()[0])
    expect(screen.getByRole('heading', { name: nom ?? '' })).toBeInTheDocument()
  })

  it('ne propose pas de découpe pour un fromage qui ne se coupe pas', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Recherche' }))
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'cancoillotte' } })
    fireEvent.click(screen.getByRole('button', { name: /Cancoillotte/ }))

    expect(screen.getByRole('heading', { name: 'Cancoillotte' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Découpe' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Comment découper ce fromage/ })).not.toBeInTheDocument()
  })
})
