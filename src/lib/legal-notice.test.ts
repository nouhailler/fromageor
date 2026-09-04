import { describe, expect, it } from 'vitest'
import {
  LEGAL_NOTICE_VERSION,
  USES_GEOLOCATION,
  legalPublisher,
  legalShortWarning,
  legalTitle,
  legalSections,
} from './legal-notice'

/** Chaque paragraphe du texte de limitation de responsabilité fourni par
 *  l'éditeur. Le test ci-dessous vérifie qu'ils sont tous présents, au mot
 *  près : réorganiser les sections reste possible, en perdre un non. */
const LIABILITY_PARAGRAPHS = [
  "Cette application est proposée à titre informatif, documentaire, éducatif et/ou pratique selon sa finalité. Elle est destinée à fournir à l'utilisateur des informations, données, outils ou fonctionnalités destinés à faciliter son utilisation.",
  "L'éditeur s'efforce de fournir des informations aussi fiables, pertinentes et actualisées que possible. Toutefois, aucune garantie ne peut être donnée quant à l'exactitude, l'exhaustivité, l'actualité ou la pertinence des informations présentées.",
  "Certaines informations peuvent provenir de sources externes ou être générées, calculées ou interprétées automatiquement. Des erreurs, omissions, imprécisions ou incohérences peuvent donc subsister.",
  "L'utilisateur reconnaît utiliser l'application sous sa propre responsabilité et demeure seul responsable de l'utilisation qu'il fait des informations et fonctionnalités proposées.",
  "L'application ne doit pas être considérée comme une source unique ou définitive d'information lorsqu'une décision importante, professionnelle, financière, médicale, juridique, scientifique, géographique ou liée à la sécurité est concernée.",
  "Lorsque cela est nécessaire, l'utilisateur doit vérifier les informations auprès de sources officielles, de documents de référence ou d'un professionnel qualifié.",
  "Malgré les efforts déployés pour assurer le bon fonctionnement de l'application, l'éditeur ne garantit pas que celle-ci sera disponible en permanence, exempte d'erreurs ou compatible avec tous les appareils, systèmes d'exploitation, navigateurs, réseaux ou configurations.",
  "Des interruptions, ralentissements, pertes de connexion, erreurs techniques ou indisponibilités temporaires peuvent notamment survenir.",
  "Les résultats, calculs, estimations, localisations, statistiques, recommandations ou autres données produits par l'application sont fournis à titre indicatif, sauf indication contraire explicite.",
  "L'utilisateur doit apprécier leur pertinence en fonction de son propre contexte et procéder aux vérifications nécessaires avant toute utilisation susceptible d'entraîner des conséquences importantes.",
  "Dans les limites autorisées par la réglementation applicable, l'éditeur ne saurait être tenu responsable des dommages, pertes, préjudices ou conséquences résultant directement ou indirectement de l'utilisation, de l'impossibilité d'utiliser ou de l'interprétation des informations ou fonctionnalités proposées par l'application.",
  "Cette limitation concerne notamment, lorsque cela est applicable, les erreurs ou omissions dans les informations, les dysfonctionnements techniques, les interruptions de service, les pertes de données, les problèmes de connexion, les incompatibilités matérielles ou logicielles et les décisions prises par l'utilisateur sur la base des informations fournies.",
  "Lorsque l'application utilise ou référence des données provenant de sources externes, celles-ci peuvent évoluer, devenir indisponibles ou être modifiées indépendamment de l'éditeur. L'éditeur ne garantit donc pas la disponibilité permanente ni l'exactitude des contenus provenant de ces sources.",
  "Les fonctionnalités, contenus, données et services proposés par l'application peuvent être modifiés, mis à jour, suspendus ou supprimés à tout moment afin d'assurer son évolution et sa maintenance.",
  "L'utilisation de l'application implique que l'utilisateur a pris connaissance du présent avertissement et accepte les conditions d'utilisation applicables à l'application.",
]

function allParagraphs(usesGeolocation?: boolean): string[] {
  return legalSections(usesGeolocation).flatMap((s) => s.paragraphs)
}

describe('legalSections', () => {
  it('expose les huit sections de fond attendues, dans l\'ordre', () => {
    expect(legalSections(false).map((s) => s.id)).toEqual([
      'avertissement',
      'limitation',
      'utilisation',
      'exactitude',
      'disponibilite',
      'donnees',
      'sources',
      'evolution',
      'donnees-personnelles',
    ])
  })

  it('reprend chaque paragraphe de la limitation de responsabilité, une seule fois', () => {
    const paragraphs = allParagraphs(false)
    for (const expected of LIABILITY_PARAGRAPHS) {
      expect(paragraphs.filter((p) => p === expected)).toHaveLength(1)
    }
  })

  it('reprend l\'avertissement court à l\'identique dans la section Avertissement', () => {
    const section = legalSections(false).find((s) => s.id === 'avertissement')
    expect(section?.paragraphs).toEqual(legalShortWarning())
  })

  it('ajoute la section « Précision de la localisation » quand l\'application utilise le GPS', () => {
    const sections = legalSections(true)
    expect(sections.map((s) => s.id)).toContain('localisation')
    const gps = sections.find((s) => s.id === 'localisation')
    expect(gps?.title).toBe('Précision de la localisation')
    expect(gps?.paragraphs[0]).toContain('dépendent notamment du GPS')
    // Juste après « Données et résultats », dont elle précise un cas particulier.
    const ids = sections.map((s) => s.id)
    expect(ids.indexOf('localisation')).toBe(ids.indexOf('donnees') + 1)
  })

  it('omet la section GPS quand l\'application n\'utilise pas la localisation', () => {
    const sections = legalSections(false)
    expect(sections.map((s) => s.id)).not.toContain('localisation')
    expect(allParagraphs(false).join(' ')).not.toContain('unique moyen d\'orientation')
  })

  it('suit le drapeau du projet par défaut — aujourd\'hui sans géolocalisation', () => {
    expect(USES_GEOLOCATION).toBe(false)
    expect(legalSections().map((s) => s.id)).not.toContain('localisation')
  })

  it('ne mentionne aucune donnée personnelle collectée', () => {
    const privacy = legalSections(false).find((s) => s.id === 'donnees-personnelles')
    expect(privacy?.paragraphs[0]).toContain('ne collecte aucune donnée personnelle')
  })
})

describe('legalTitle / legalPublisher', () => {
  it('porte le titre des mentions, dans les deux langues', () => {
    expect(legalTitle('fr')).toBe('⚠️ Information importante')
    expect(legalTitle('en')).toBe('⚠️ Important information')
    expect(LEGAL_NOTICE_VERSION).toBe('1.0')
  })

  it('renseigne l\'identité de l\'éditeur', () => {
    expect(legalPublisher.name).toBe('Swinux')
    expect(legalPublisher.email).toBe('contact@swinux.ch')
    expect(legalPublisher.address).toBe('Canton de Vaud, Suisse')
  })
})

describe('legalSections (anglais)', () => {
  it('traduit les huit sections sans en perdre ni en dupliquer', () => {
    const fr = legalSections(false, 'fr')
    const en = legalSections(false, 'en')
    expect(en.map((s) => s.id)).toEqual(fr.map((s) => s.id))
    en.forEach((section, i) => {
      expect(section.paragraphs.length).toBe(fr[i].paragraphs.length)
      expect(section.paragraphs.every((p) => p.trim().length > 0)).toBe(true)
    })
  })
})
