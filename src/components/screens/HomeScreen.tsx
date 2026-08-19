import { ArrowRight, ChevronRight } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { StickyHeader } from '../layout/StickyHeader'
import { CheeseAvatar } from '../ui/CheeseAvatar'
import { CheeseCard } from '../ui/CheeseCard'
import { FranceMap } from '../map/FranceMap'
import { GobletIcon } from '../icons/MiscIcons'
import styles from './HomeScreen.module.css'

export function HomeScreen() {
  const { actions } = useAppState()
  const { deco, featured, allDots, seasonName, seasonal, popular, regions } = useCollections()

  return (
    <div>
      <StickyHeader>
        <div className={styles.overline}>Encyclopédie du terroir</div>
        <h1 className={styles.title}>
          Fromages
          <br />
          de France
        </h1>
        <div className={styles.subtitle}>
          {deco.length} fromages · {regions.length === 1 ? regions[0].name : `${regions.length} régions`}
        </div>
      </StickyHeader>

      <div className={styles.content}>
        {featured.map((c) => (
          <button key={c.id} type="button" className={styles.featured} onClick={() => actions.openCheese(c.id)}>
            <div className={styles.featuredDecoration} />
            <div className={styles.featuredKicker}>À la une</div>
            <div className={styles.featuredHeader}>
              <CheeseAvatar
                initial={c.initial}
                size={66}
                fontSize={30}
                background="color-mix(in srgb, #fff 16%, transparent)"
                color="inherit"
              />
              <div>
                <div className={styles.featuredName}>{c.nom}</div>
                <div className={styles.featuredDept}>{c.dept}</div>
              </div>
            </div>
            <div className={styles.featuredNotes}>{c.notesStr}</div>
            <div className={styles.featuredLink}>
              Découvrir la fiche
              <ArrowRight size={16} strokeWidth={2.75} />
            </div>
          </button>
        ))}

        <div>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sur la carte</h2>
            <button type="button" className={styles.sectionLink} onClick={actions.goCarte}>
              Tout explorer →
            </button>
          </div>
          <button type="button" className={styles.mapCard} onClick={actions.goCarte} aria-label="Voir la carte de France">
            <FranceMap
              className={styles.mapSvg}
              dots={allDots.map((d) => ({ id: d.id, x: d.x, y: d.y, fill: d.fill }))}
            />
          </button>
        </div>

        <button type="button" className={styles.accordsCta} onClick={actions.openAccords}>
          <div className={styles.accordsCtaDecoration} />
          <div className={styles.accordsCtaIcon}>
            <GobletIcon size={26} />
          </div>
          <div className={styles.accordsCtaBody}>
            <div className={styles.accordsCtaTitle}>Accords mets &amp; boissons</div>
            <div className={styles.accordsCtaDesc}>Vins, bières, cidres, miel… suggestions automatiques</div>
          </div>
          <ChevronRight size={20} strokeWidth={2.75} style={{ flexShrink: 0 }} />
        </button>

        <div>
          <div className={styles.sectionHeaderTight}>
            <h2 className={styles.sectionTitle}>De saison</h2>
            <span className={styles.seasonLabel}>· {seasonName}</span>
          </div>
          <div className={`scrollx ${styles.carousel}`}>
            {seasonal.map((c) => (
              <button key={c.id} type="button" className={styles.seasonCard} onClick={() => actions.openCheese(c.id)}>
                <CheeseAvatar initial={c.initial} size={48} fontSize={22} />
                <div>
                  <div className={styles.seasonName}>{c.nom}</div>
                  <div className={styles.seasonMeta}>{c.laitLabel}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 12 }}>
            À découvrir
          </h2>
          <div className={styles.list}>
            {popular.map((c) => (
              <CheeseCard
                key={c.id}
                initial={c.initial}
                nom={c.nom}
                aop={c.aop}
                subtitle={`${c.dept} · ${c.laitLabel}`}
                onClick={() => actions.openCheese(c.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
