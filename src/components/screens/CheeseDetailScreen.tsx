import { useMemo } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Heart } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
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
  const cheese = state.selected ? byId.get(state.selected) : undefined

  const fav = useMemo(
    () => (cheese ? lists.some((l) => l.ids.includes(cheese.id)) : false),
    [lists, cheese],
  )

  if (!cheese) return null
  const c = cheese

  const gallery = (c.galerie || []).map((label, i) => ({ id: `ph-${c.id}-${i}`, label }))
  const hero = gallery[0] ?? { id: `ph-${c.id}-0`, label: 'Vue entière' }
  // Real extra photos (from the same Commons category as the hero) aren't
  // guaranteed to match any particular `galerie` label (coupe, plateau...),
  // so when available they replace the placeholder thumbs with generic
  // captions instead of claiming a specific match.
  type Thumb = { id: string; label: string; src?: string; creditUrl?: string }
  const thumbs: Thumb[] = (c.galleryImages || []).length > 0
    ? (c.galleryImages || []).map((img, i) => ({
        id: `ph-${c.id}-${i + 1}`,
        label: `Photo ${i + 2}`,
        src: img.url,
        creditUrl: img.creditUrl,
      }))
    : gallery.slice(1)

  const spec: [string, string | undefined][] = [
    ['Noms alternatifs', (c.alt || []).join(' · ')],
    ['Région', regionName(c.regionId)],
    ['Département', c.dept],
    ['Commune', c.commune],
    ['Type de lait', c.lait],
    ['Race animale', c.race],
    ['Famille', c.famille],
    ['Croûte', c.croute],
    ['Texture', c.texture],
    ['Forme', c.forme],
    ['Poids', c.poids],
    ['Dimensions', c.dim],
    ['Affinage', c.affinage],
    ['Matière grasse', c.mg],
    ['Saison idéale', c.saison],
    ['Couleur', c.color],
  ]
  const specRows = spec.filter((r): r is [string, string] => !!r[1])

  const a = c.accords || {}
  const accordRows = (
    [
      ['Vins', a.vin],
      ['Bières', a.biere],
      ['Cidres', a.cidre],
      ['Whiskies', a.whisky],
      ['Pains', a.pain],
    ] as [string, string | undefined][]
  ).filter((r): r is [string, string] => !!r[1])

  // Aucune fiche ne porte sa méthode de découpe : elle se déduit de la forme
  // (voir decoupeMatchFor). Absente pour les fromages qui ne se coupent pas.
  const decoupe = decoupeMatchFor(c)
  const decoupeBasis = decoupe
    ? {
        // Espaces insécables : le guillemet fermant ne doit pas tomber seul
        // à la ligne suivante.
        forme: `la forme («\u00a0${c.forme}\u00a0»)`,
        famille: `la famille («\u00a0${c.famille}\u00a0»)`,
        service: 'le service, à la cuillère',
      }[decoupe.basis]
    : ''

  const n = c.nutrition || {}
  const nutritionCells = (
    [
      ['Énergie', n.energie],
      ['Protéines', n.proteines],
      ['Lipides', n.lipides],
      ['Calcium', n.calcium],
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
            Photo : {c.image.credit}
          </a>
        )}
        <button
          type="button"
          className={`${styles.circleButton} ${styles.backButton}`}
          onClick={actions.closeCheese}
          aria-label="Retour"
        >
          <ChevronLeft size={22} strokeWidth={2.75} />
        </button>
        <button
          type="button"
          className={`${styles.circleButton} ${styles.favButton}`}
          onClick={() => actions.openSheet(c.id)}
          aria-label="Ajouter aux favoris"
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
          {thumbs.map((t) => (
            <div key={t.id} className={styles.thumb}>
              <div className={styles.thumbImage}>
                <ImagePlaceholder id={t.id} label={t.label} src={t.src} style={{ width: '100%', height: '100%' }} />
              </div>
              {t.creditUrl ? (
                <a href={t.creditUrl} target="_blank" rel="noreferrer" className={styles.thumbLabel}>
                  {t.label}
                </a>
              ) : (
                <span className={styles.thumbLabel}>{t.label}</span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.badgeRow}>
          {c.aop && (
            <LabelBadge bg="var(--color-accent-2-200)" fg="var(--color-accent-2-700)" size="md">
              AOP
            </LabelBadge>
          )}
          {c.marque && (
            <LabelBadge bg="var(--color-neutral-200)" fg="var(--color-neutral-800)" size="md">
              Marque
            </LabelBadge>
          )}
          <LabelBadge bg="var(--color-accent-200)" fg="var(--color-accent-700)" size="md">
            {regionName(c.regionId)}
          </LabelBadge>
        </div>
        <h1 className={styles.name}>{c.nom}</h1>
        {(c.alt || []).length > 0 && <div className={styles.altNames}>{c.alt.join(' · ')}</div>}
        <div className={styles.location}>
          {c.dept} · {c.commune}
        </div>
        {/* Un nom déposé n'est pas une appellation : le dire ici évite qu'une
            marque industrielle se lise comme un fromage de terroir protégé. */}
        {c.marque && (
          <div className={styles.marqueNote}>
            Nom déposé, et non une appellation — marque de {c.marque}.
          </div>
        )}

        <div className={styles.intensityCard}>
          <div className={styles.intensityRow}>
            <span className={styles.intensityLabel}>Intensité</span>
            <span className={styles.intensityValue}>{c.intensityLabel}</span>
          </div>
          <div className={styles.intensityTrack}>
            <div className={styles.intensityFill} style={{ width: `${(c.intensite / 5) * 100}%` }} />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Notes aromatiques</h2>
        <div className={styles.noteChips}>
          {(c.notes || []).map((note) => (
            <span key={note} className={styles.noteChip}>
              {note}
            </span>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Carte d'identité</h2>
        <div className={styles.specCard}>
          {specRows.map(([k, v]) => (
            <div key={k} className={styles.specRow}>
              <span className={styles.specKey}>{k}</span>
              <span className={styles.specValue}>{v}</span>
            </div>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Localisation</h2>
        <div className={styles.locationCard}>
          <FranceMap className={styles.locationMap} highlight={{ x: c.x, y: c.y }} outlineStrokeWidth={0.8} />
          <div>
            <div className={styles.locationCommune}>{c.commune}</div>
            <div className={styles.locationMeta}>{c.dept}</div>
            <div className={styles.locationMeta}>{regionName(c.regionId)}</div>
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
              alt={`Paysage de ${c.terroir.lieu}`}
              loading="lazy"
            />
            <figcaption className={styles.terroirCaption}>
              <span className={styles.terroirLieu}>{c.terroir.lieu}</span>
              <span className={styles.terroirNote}>
                Le pays du fromage, et non le fromage lui-même.
              </span>
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
            <h2 className={styles.sectionTitle}>Accords</h2>
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
            <h2 className={styles.sectionTitle}>Valeurs nutritionnelles</h2>
            <div className={styles.nutritionHint}>pour 100 g</div>
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

        <h2 className={styles.sectionTitle}>Histoire</h2>
        <p className={styles.paragraph}>{c.histoire}</p>

        {c.wikipedia && (
          <div className={styles.wikipediaCard}>
            <p className={styles.wikipediaExtract}>{c.wikipedia.extract}</p>
            <a href={c.wikipedia.url} target="_blank" rel="noreferrer" className={styles.wikipediaLink}>
              Lire l'article sur Wikipédia
              <ExternalLink size={14} strokeWidth={2.5} />
            </a>
          </div>
        )}

        {c.anecdote && (
          <div className={styles.anecdote}>
            <div className={styles.anecdoteIcon}>
              <LightbulbIcon size={20} />
            </div>
            <div>
              <div className={styles.anecdoteKicker}>Le saviez-vous</div>
              <div className={styles.anecdoteText}>{c.anecdote}</div>
            </div>
          </div>
        )}

        {c.fabrication && (
          <>
            <h2 className={styles.sectionTitle}>Fabrication</h2>
            <p className={styles.paragraph}>{c.fabrication}</p>
          </>
        )}

        {(c.conservation || c.service) && (
          <div className={styles.infoCards}>
            {c.conservation && (
              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>Conservation</div>
                <div className={styles.infoCardValue}>{c.conservation}</div>
              </div>
            )}
            {c.service && (
              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>Comment le servir</div>
                <div className={styles.infoCardValue}>{c.service}</div>
              </div>
            )}
          </div>
        )}

        {decoupe && (
          <>
            <h2 className={`${styles.sectionTitle} ${styles.decoupeTitle}`}>Découpe</h2>
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
                <div className={styles.decoupeNote}>
                  Méthode déduite de {decoupeBasis}, à titre indicatif.
                </div>
                <div className={styles.decoupeOpen}>
                  <ShearsIcon size={15} />
                  Comment découper ce fromage ?
                  <ChevronRight size={15} strokeWidth={2.75} />
                </div>
              </div>
            </button>
          </>
        )}

        <div className={styles.priceRow}>
          <div className={styles.priceCard} style={{ background: 'var(--color-accent-700)' }}>
            <div className={styles.priceCardKicker}>Prix moyen</div>
            <div className={styles.priceCardValue}>{c.prix}</div>
          </div>
          <div className={styles.priceCard} style={{ background: 'var(--color-accent-2-700)' }}>
            <div className={styles.priceCardKicker}>Disponibilité</div>
            <div className={styles.priceCardValue}>{c.dispo}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
