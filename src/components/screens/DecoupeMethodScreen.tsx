import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import { decoupeGuide } from '../../lib/decoupe-guide'
import { DecoupeStepDiagram } from '../icons/DecoupeSteps'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayEyebrow } from '../layout/OverlayHeader'
import styles from './DecoupeMethodScreen.module.css'

export function DecoupeMethodScreen() {
  const { state, actions } = useAppState()
  const { decoupeMethods } = useCollections()
  const { t, lang } = useLanguage()
  const group = decoupeMethods.find((g) => g.method.id === state.decoupeMethod)

  if (!group) return null
  const { method, items } = group
  const guide = decoupeGuide(method.id, lang)

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeDecoupeMethod}>
        <OverlayEyebrow>{t('drawer.decoupe')}</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.bannerDiagram}>
            <method.Diagram />
          </div>
          <h1 className={styles.bannerTitle}>{method.shape}</h1>
        </div>

        <p className={styles.principe}>{guide.principe}</p>

        <h2 className={styles.sectionTitle}>{t('decoupe.why')}</h2>
        <p className={styles.paragraph}>{guide.pourquoi}</p>

        <h2 className={styles.sectionTitle}>{t('decoupe.stepByStep')}</h2>
        {/* Les quatre schémas suivent les quatre étapes, dans l'ordre : la
            forme, la lame, le premier coup, les parts. */}
        <div className={`scrollx ${styles.strip}`}>
          {guide.etapes.map((etape, i) => (
            <div key={etape.titre} className={styles.stripStep}>
              <div className={styles.stripDiagram}>
                <DecoupeStepDiagram method={method.id} step={i} />
              </div>
              <div className={styles.stripNumber}>{i + 1}</div>
              <div className={styles.stripLabel}>{etape.titre}</div>
            </div>
          ))}
        </div>

        <ol className={styles.etapes}>
          {guide.etapes.map((etape, i) => (
            <li key={etape.titre} className={styles.etape}>
              <div className={styles.etapeNumber}>{i + 1}</div>
              <div>
                <div className={styles.etapeTitre}>{etape.titre}</div>
                <div className={styles.etapeTexte}>{etape.texte}</div>
              </div>
            </li>
          ))}
        </ol>

        <h2 className={styles.sectionTitle}>{t('decoupe.avoid')}</h2>
        <ul className={styles.eviter}>
          {guide.eviter.map((ligne) => (
            <li key={ligne} className={styles.eviterItem}>
              {ligne}
            </li>
          ))}
        </ul>

        <div className={styles.particularite}>
          <div className={styles.particulariteTitre}>{guide.particularite.titre}</div>
          <div className={styles.particulariteTexte}>{guide.particularite.texte}</div>
        </div>

        <h2 className={styles.sectionTitle}>
          {t('decoupe.concernedCheeses')}
          <span className={styles.count}>{items.length}</span>
        </h2>
        <p className={styles.listeNote}>{t('decoupe.concernedNote')}</p>
        <div className={styles.cheeses}>
          {items.map((c) => (
            <button
              type="button"
              key={c.id}
              className={styles.cheese}
              onClick={() => actions.openCheese(c.id)}
            >
              {c.nom}
              {c.aop && <span className={styles.aop}>{t('common.aopBadge')}</span>}
            </button>
          ))}
        </div>
      </div>
    </OverlayScreen>
  )
}
