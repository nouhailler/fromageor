import { useEffect } from 'react'

/** Ferme une couche superposée sur Échap et sur le bouton retour d'Android.
 *
 *  Le reste de l'application ne touche pas à l'historique : une entrée n'est
 *  donc empilée que tant que la couche est ouverte, et elle est retirée à la
 *  fermeture. Le retour Android referme la couche au lieu de quitter la page,
 *  sans laisser d'entrée parasite derrière lui. */
export function useDismissOnBack(active: boolean, onDismiss: () => void): void {
  useEffect(() => {
    if (!active) return

    // Marqueur : au `popstate`, il permet de distinguer notre propre entrée
    // d'une navigation venue d'ailleurs.
    window.history.pushState({ legalOverlay: true }, '')
    let ourEntryStillThere = true

    const onPopState = () => {
      ourEntryStillThere = false
      onDismiss()
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onDismiss()
    }

    window.addEventListener('popstate', onPopState)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('popstate', onPopState)
      window.removeEventListener('keydown', onKeyDown)
      // Fermeture par un bouton plutôt que par le retour : l'entrée que nous
      // avions empilée est encore là, on la dépile pour laisser l'historique
      // tel qu'on l'a trouvé.
      if (ourEntryStillThere && window.history.state?.legalOverlay) window.history.back()
    }
  }, [active, onDismiss])
}
