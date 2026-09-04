import { useAppState } from '../../state/AppStateContext'
import { useLanguage } from '../../state/LanguageContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import { LEGAL_NOTICE_VERSION } from '../../lib/legal-notice'
import { resetAcknowledged } from '../../lib/legal-storage'
import { LiabilityNotice } from './LiabilityNotice'
import styles from './LegalScreen.module.css'

/** Écran Mentions légales, accessible en permanence depuis le menu latéral.
 *  Suit le motif des autres écrans secondaires (Accords, Découpe…). */
export function LegalScreen() {
  const { actions } = useAppState()
  const { t } = useLanguage()

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeLegal}>
        <OverlayEyebrow>{t('legal.version', { v: LEGAL_NOTICE_VERSION })}</OverlayEyebrow>
        <OverlayTitle>{t('drawer.legal')}</OverlayTitle>
      </OverlayHeader>

      <div className={styles.content}>
        <LiabilityNotice />

        {/* Rejouer le premier lancement pendant le développement. Le test
            est évalué à la compilation : le bouton et le code de
            réinitialisation disparaissent du bundle de production. */}
        {import.meta.env.DEV && (
          <button
            type="button"
            className={styles.devReset}
            onClick={() => {
              resetAcknowledged()
              window.location.reload()
            }}
          >
            Réinitialiser les mentions légales (dév.)
          </button>
        )}
      </div>
    </OverlayScreen>
  )
}
