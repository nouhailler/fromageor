import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { legalNotice } from '../../lib/legal-notice'
import { needsAcknowledgement, setAcknowledged } from '../../lib/legal-storage'
import { LiabilityNotice } from './LiabilityNotice'
import { useDismissOnBack } from './useDismissOnBack'
import styles from './FirstLaunchNotice.module.css'

/** Éléments focalisables d'une boîte de dialogue : suffisant ici, où la
 *  modale ne contient que des boutons et des liens. */
const FOCUSABLE = 'a[href], button:not([disabled])'

/** Avertissement affiché au tout premier lancement, tant que l'utilisateur
 *  n'a pas validé. La validation est mémorisée localement
 *  (lib/legal-storage.ts) : la modale ne réapparaît plus ensuite.
 *
 *  La modale est bloquante — on n'en sort que par « J'ai compris ». Seule la
 *  vue détaillée se referme sur Échap et sur le retour Android. */
export function FirstLaunchNotice() {
  // Lecture unique au montage : l'état du stockage ne change pas sous nos
  // pieds pendant la session.
  const [open, setOpen] = useState(() => needsAcknowledgement())
  const [detailsOpen, setDetailsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const primaryRef = useRef<HTMLButtonElement>(null)

  const closeDetails = useCallback(() => setDetailsOpen(false), [])
  useDismissOnBack(open && detailsOpen, closeDetails)

  // Le focus entre dans la modale à l'ouverture, puis y reste tant qu'elle
  // est affichée : rien derrière elle ne doit être atteignable au clavier.
  useEffect(() => {
    if (!open) return
    const dialog = dialogRef.current
    if (!dialog) return

    primaryRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const items = [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, detailsOpen])

  if (!open) return null

  function acknowledge() {
    setAcknowledged(true)
    setOpen(false)
  }

  return (
    <div className={styles.backdrop}>
      <div
        className={styles.dialog}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-notice-title"
      >
        {detailsOpen ? (
          <>
            <div className={styles.detailsHeader}>
              <button
                type="button"
                className={styles.backButton}
                onClick={closeDetails}
                aria-label="Revenir à l'avertissement"
              >
                <ChevronLeft size={21} strokeWidth={2.75} />
              </button>
              <h1 className={styles.detailsTitle} id="legal-notice-title">
                Mentions légales
              </h1>
            </div>
            <div className={`mainscroll ${styles.body}`}>
              <LiabilityNotice />
            </div>
          </>
        ) : (
          <div className={`mainscroll ${styles.body}`}>
            <h1 className={styles.title} id="legal-notice-title">
              {legalNotice.title}
            </h1>
            {legalNotice.shortWarning.map((paragraph, index) => (
              <p className={styles.paragraph} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <div className={styles.actions}>
          {!detailsOpen && (
            <button type="button" className={styles.secondary} onClick={() => setDetailsOpen(true)}>
              Voir les détails
            </button>
          )}
          <button type="button" className={styles.primary} onClick={acknowledge} ref={primaryRef}>
            J&rsquo;ai compris
          </button>
        </div>
      </div>
    </div>
  )
}
