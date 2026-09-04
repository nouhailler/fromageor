import { useMemo } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Heart } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import { regionName } from '../../lib/region-lookup'
import { decoupeMatchFor } from '../../lib/decoupe'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { LabelBadge } from '../ui/LabelBadge'
import { FranceMap } from '../map/FranceMap'
import { LightbulbIcon, ShearsIcon } from '../icons/MiscIcons'
import styles from './CheeseDetailScreen.module.css'

export function CheeseDetailScreen() {
  const { state, actions, lists } = useAppState()
  const { byId } = useCollections()
  const { t, lang } = useLanguage()
  const cheese = state.selected ? byId.get(state.selected) : undefined

  const fav = useMemo(
    () => (cheese ? lists.some((l) => l.ids.includes(cheese.id)) : false),
    [lists, cheese],
  )

  if (!cheese) return null
  const c = cheese
  const en = lang === 'en'

  const gallery = (c.galerie || []).map((label, i) => ({ id: `ph-${c.id}-${i}`, label }))
  const hero = gallery[0] ?? { id: `ph-${c.id}-0`, label: en ? 'Full view' : 'Vue entière' }
  // Real extra photos (from the same Commons category as the hero) aren't
  // guaranteed to match any particular `galerie` label (coupe, plateau...),
  // so when available they replace the placeholder thumbs with generic
  // captions instead of claiming a specific match.
  type Thumb = { id: string; label: string; src?: string; creditUrl?: string }
  const thumbs: Thumb[] = (c.galleryImages || []).length > 0
    ? (c.galleryImages || []).map((img, i) => ({
        id: `ph-${c.id}-${i + 1}`,
        label: t('cheeseDetail.photoN', { n: i + 2 }),
        src: img.url,
        creditUrl: img.creditUrl,
      }))
    : gallery.slice(1)

  const spec: [string, string | undefined][] = [
    [t('cheeseDetail.field.alt'), (c.alt || []).join(' · ')],
    [t('cheeseDetail.field.region'), regionName(c.regionId, lang)],
    [t('cheeseDetail.field.dept'), c.dept],
    [t('cheeseDetail.field.commune'), c.commune],
    [t('cheeseDetail.field.lait'), c.lait],
    [t('cheeseDetail.field.race'), c.race],
    [t('cheeseDetail.field.famille'), c.famille],
    [t('cheeseDetail.field.croute'), c.croute],
    [t('cheeseDetail.field.texture'), c.texture],
    [t('cheeseDetail.field.forme'), c.forme],
    [t('cheeseDetail.field.poids'), c.poids],
    [t('cheeseDetail.field.dim'), c.dim],
    [t('cheeseDetail.field.affinage'), c.affinage],
    [t('cheeseDetail.field.mg'), c.mg],
    [t('cheeseDetail.field.saison'), c.saison],
    [t('cheeseDetail.field.color'), c.color],
  ]
  const specRows = spec.filter((r): r is [string, string] => !!r[1])

  const notes = (en ? c.en?.notes : undefined) ?? c.notes
  const a = (en ? c.en?.accords : undefined) ?? c.accords ?? {}
  const accordRows = (
    [
      [t('cheeseDetail.accord.vin'), a.vin],
      [t('cheeseDetail.accord.biere'), a.biere],
      [t('cheeseDetail.accord.cidre'), a.cidre],
      [t('cheeseDetail.accord.whisky'), a.whisky],
      [t('cheeseDetail.accord.pain'), a.pain],
    ] as [string, string | undefined][]
  ).filter((r): r is [string, string] => !!r[1])

  const histoire = (en ? c.en?.histoire : undefined) ?? c.histoire
  const anecdote = (en ? c.en?.anecdote : undefined) ?? c.anecdote
  const fabrication = (en ? c.en?.fabrication : undefined) ?? c.fabrication
  const conservation = (en ? c.en?.conservation : undefined) ?? c.conservation
  const service = (en ? c.en?.service : undefined) ?? c.service

  // Aucune fiche ne porte sa méthode de découpe : elle se déduit de la forme
  // (voir decoupeMatchFor), toujours depuis les champs français quel que
  // soit `lang` — seul le libellé retourné change de langue.
  const decoupe = decoupeMatchFor(c, lang)
  const decoupeBasis = decoupe
    ? {
        forme: t('cheeseDetail.decoupeBasis.forme', { forme: c.forme }),
        famille: t('cheeseDetail.decoupeBasis.famille', { famille: c.famille }),
        service: t('cheeseDetail.decoupeBasis.service'),
      }[decoupe.basis]
    : ''

  const n = c.nutrition || {}
  const nutritionCells = (
    [
      [t('cheeseDetail.nutrition.energie'), n.energie],
      [t('cheeseDetail.nutrition.proteines'), n.proteines],
      [t('cheeseDetail.nutrition.lipides'), n.lipides],
      [t('cheeseDetail.nutrition.calcium'), n.calcium],
    ] as [string, string | undefined][]
  ).filter((r): r is [string, string] => !!r[1])

  return (
    <div className={styles.screen}>
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <ImagePlaceholder id={hero.id} label={hero.label} src={c.image?.url} style={{ width: '100%', height: '100%' }} />
        </div>
        {c.image && (
          <a
            href={c.image.creditUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.imageCredit}
          >
            {t('cheeseDetail.photoCredit', { credit: c.image.credit })}
          </a>
        )}
        <button
          type="button"
          className={`${styles.circleButton} ${styles.backButton}`}
          onClick={actions.closeCheese}
          aria-label={t('common.back')}
        >
          <ChevronLeft size={22} strokeWidth={2.75} />
        </button>
        <button
          type="button"
          className={`${styles.circleButton} ${styles.favButton}`}
          onClick={() => actions.openSheet(c.id)}
          aria-label={t('favorites.addToFavorites')}
        >
          <Heart
            size={22}
            fill={fav ? 'var(--color-accent)' : 'none'}
            stroke={fav ? 'var(--color-accent)' : 'var(--color-text)'}
            strokeWidth={fav ? 2 : 2.75}
          />
        </button>
      </div>

      {thumbs.length > 0 && (
        <div className={`scrollx ${styles.thumbs}`}>
          {thumbs.map((thumb) => (
            <div key={thumb.id} className={styles.thumb}>
              <div className={styles.thumbImage}>
                <ImagePlaceholder id={thumb.id} label={thumb.label} src={thumb.src} style={{ width: '100%', height: '100%' }} />
              </div>
              {thumb.creditUrl ? (
                <a href={thumb.creditUrl} target="_blank" rel="noreferrer" className={styles.thumbLabel}>
                  {thumb.label}
                </a>
              ) : (
                <span className={styles.thumbLabel}>{thumb.label}</span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.badgeRow}>
          {c.aop && (
            <LabelBadge bg="var(--color-accent-2-200)" fg="var(--color-accent-2-700)" size="md">
              {t('common.aopBadge')}
            </LabelBadge>
          )}
          {c.marque && (
            <LabelBadge bg="var(--color-neutral-200)" fg="var(--color-neutral-800)" size="md">
              {t('cheeseDetail.marqueBadge')}
            </LabelBadge>
          )}
          <LabelBadge bg="var(--color-accent-200)" fg="var(--color-accent-700)" size="md">
            {regionName(c.regionId, lang)}
          </LabelBadge>
        </div>
        <h1 className={styles.name}>{c.nom}</h1>
        {(c.alt || []).length > 0 && <div className={styles.altNames}>{c.alt.join(' · ')}</div>}
        <div className={styles.location}>
          {c.dept} · {c.commune}
        </div>
        {/* Un nom déposé n'est pas une appellation : le dire ici évite qu'une
            marque industrielle se lise comme un fromage de terroir protégé. */}
        {c.marque && <div className={styles.marqueNote}>{t('cheeseDetail.marqueNote', { marque: c.marque })}</div>}

        <div className={styles.intensityCard}>
          <div className={styles.intensityRow}>
            <span className={styles.intensityLabel}>{t('cheeseDetail.intensity')}</span>
            <span className={styles.intensityValue}>{c.intensityLabel}</span>
          </div>
          <div className={styles.intensityTrack}>
            <div className={styles.intensityFill} style={{ width: `${(c.intensite / 5) * 100}%` }} />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>{t('cheeseDetail.aromaNotes')}</h2>
        <div className={styles.noteChips}>
          {(notes || []).map((note) => (
            <span key={note} className={styles.noteChip}>
              {note}
            </span>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>{t('cheeseDetail.identityCard')}</h2>
        <div className={styles.specCard}>
          {specRows.map(([k, v]) => (
            <div key={k} className={styles.specRow}>
              <span className={styles.specKey}>{k}</span>
              <span className={styles.specValue}>{v}</span>
            </div>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>{t('cheeseDetail.location')}</h2>
        <div className={styles.locationCard}>
          <FranceMap className={styles.locationMap} highlight={{ x: c.x, y: c.y }} outlineStrokeWidth={0.8} />
          <div>
            <div className={styles.locationCommune}>{c.commune}</div>
            <div className={styles.locationMeta}>{c.dept}</div>
            <div className={styles.locationMeta}>{regionName(c.regionId, lang)}</div>
          </div>
        </div>

        {/* Photo du pays, pas du fromage. Elle vit ici, sous la carte, et non
            en tête de fiche : la place du haut est celle du fromage, et une
            vue de village qui l'occuperait ferait une fausse promesse. */}
        {c.terroir && (
          <figure className={styles.terroir}>
            <img
              className={styles.terroirImage}
              src={c.terroir.url}
              width={c.terroir.width}
              height={c.terroir.height}
              alt={t('cheeseDetail.terroirAlt', { lieu: c.terroir.lieu })}
              loading="lazy"
            />
            <figcaption className={styles.terroirCaption}>
              <span className={styles.terroirLieu}>{c.terroir.lieu}</span>
              <span className={styles.terroirNote}>{t('cheeseDetail.terroirNote')}</span>
              <a
                href={c.terroir.creditUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.terroirCredit}
              >
                {c.terroir.credit}
              </a>
            </figcaption>
          </figure>
        )}

        {accordRows.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>{t('cheeseDetail.accordsTitle')}</h2>
            <div className={styles.accordsList}>
              {accordRows.map(([k, v]) => (
                <div key={k} className={styles.accordRow}>
                  <div className={styles.accordKey}>{k}</div>
                  <div className={styles.accordValue}>{v}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {nutritionCells.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>{t('cheeseDetail.nutritionTitle')}</h2>
            <div className={styles.nutritionHint}>{t('cheeseDetail.per100g')}</div>
            <div className={styles.nutritionGrid}>
              {nutritionCells.map(([k, v]) => (
                <div key={k} className={styles.nutritionCell}>
                  <div className={styles.nutritionValue}>{v}</div>
                  <div className={styles.nutritionLabel}>{k}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className={styles.sectionTitle}>{t('cheeseDetail.history')}</h2>
        <p className={styles.paragraph}>{histoire}</p>

        {c.wikipedia && (
          <div className={styles.wikipediaCard}>
            <p className={styles.wikipediaExtract}>{c.wikipedia.extract}</p>
            <a href={c.wikipedia.url} target="_blank" rel="noreferrer" className={styles.wikipediaLink}>
              {t('cheeseDetail.readOnWikipedia')}
              <ExternalLink size={14} strokeWidth={2.5} />
            </a>
          </div>
        )}

        {anecdote && (
          <div className={styles.anecdote}>
            <div className={styles.anecdoteIcon}>
              <LightbulbIcon size={20} />
            </div>
            <div>
              <div className={styles.anecdoteKicker}>{t('cheeseDetail.didYouKnow')}</div>
              <div className={styles.anecdoteText}>{anecdote}</div>
            </div>
          </div>
        )}

        {fabrication && (
          <>
            <h2 className={styles.sectionTitle}>{t('cheeseDetail.fabrication')}</h2>
            <p className={styles.paragraph}>{fabrication}</p>
          </>
        )}

        {(conservation || service) && (
          <div className={styles.infoCards}>
            {conservation && (
              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>{t('cheeseDetail.conservation')}</div>
                <div className={styles.infoCardValue}>{conservation}</div>
              </div>
            )}
            {service && (
              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>{t('cheeseDetail.howToServe')}</div>
                <div className={styles.infoCardValue}>{service}</div>
              </div>
            )}
          </div>
        )}

        {decoupe && (
          <>
            <h2 className={`${styles.sectionTitle} ${styles.decoupeTitle}`}>{t('cheeseDetail.decoupeTitle')}</h2>
            <button
              type="button"
              className={styles.decoupeCard}
              onClick={() => actions.openDecoupeMethodFromCheese(decoupe.method.id, c.id)}
            >
              <div className={styles.decoupeDiagram}>
                <decoupe.method.Diagram />
              </div>
              <div className={styles.decoupeBody}>
                <div className={styles.decoupeShape}>{decoupe.method.shape}</div>
                <div className={styles.decoupeRule}>{decoupe.method.rule}</div>
                <div className={styles.decoupeNote}>{t('cheeseDetail.decoupeNote', { basis: decoupeBasis })}</div>
                <div className={styles.decoupeOpen}>
                  <ShearsIcon size={15} />
                  {t('cheeseDetail.decoupeOpenCta')}
                  <ChevronRight size={15} strokeWidth={2.75} />
                </div>
              </div>
            </button>
          </>
        )}

        <div className={styles.priceRow}>
          <div className={styles.priceCard} style={{ background: 'var(--color-accent-700)' }}>
            <div className={styles.priceCardKicker}>{t('cheeseDetail.avgPrice')}</div>
            <div className={styles.priceCardValue}>{c.prix}</div>
          </div>
          <div className={styles.priceCard} style={{ background: 'var(--color-accent-2-700)' }}>
            <div className={styles.priceCardKicker}>{t('cheeseDetail.availability')}</div>
            <div className={styles.priceCardValue}>{c.dispo}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
