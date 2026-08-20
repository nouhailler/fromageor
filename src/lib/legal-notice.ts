// Contenu et réglages du système d'information légale de l'application.
//
// Tout ce qui change d'une application à l'autre vit ici : les textes, la
// version, l'identité de l'éditeur et le drapeau `usesGeolocation`. Les
// composants de src/components/legal/ ne contiennent aucun texte juridique,
// ce qui permet de transposer le système à une autre PWA en ne reprenant
// que ce fichier.

/** Version des mentions. À incrémenter lors d'une modification importante du
 *  contenu légal — voir `needsAcknowledgement` dans lib/legal-storage.ts pour
 *  la politique de réaffichage (volontairement conservatrice aujourd'hui). */
export const LEGAL_NOTICE_VERSION = '1.0'

/** Passer à `true` si l'application se met à utiliser le GPS, la
 *  géolocalisation, un calcul d'itinéraire, des distances ou des altitudes :
 *  la section « Précision de la localisation » apparaît alors d'elle-même
 *  dans les mentions. Aujourd'hui la carte de France est une silhouette SVG
 *  décorative, sans position réelle ni navigation. */
export const USES_GEOLOCATION = false

export interface LegalSection {
  id: string
  title: string
  /** Paragraphes affichés dans l'ordre. */
  paragraphs: string[]
}

export interface LegalPublisher {
  name: string
  email: string
  /** Hébergeur, tel que documenté dans netlify.toml / README. */
  host: string
  /** Adresse postale de l'éditeur. */
  address: string
  /** Date de dernière mise à jour des mentions, format JJ/MM/AAAA. */
  updatedAt: string
}

const SHORT_WARNING = [
  "Cette application est fournie à titre informatif et pratique. Malgré les précautions prises lors de son développement, elle peut contenir des erreurs, des imprécisions ou présenter des limitations techniques.",
  "L'utilisation de cette application se fait sous votre responsabilité. Les informations, résultats, données ou recommandations fournis par l'application ne doivent pas être considérés comme infaillibles.",
  "Pour toute information importante ou décision susceptible d'avoir des conséquences, vérifiez les données auprès de sources fiables et officielles ou auprès d'un professionnel compétent.",
  "En utilisant cette application, vous reconnaissez avoir pris connaissance de cet avertissement.",
]

const GPS_SECTION: LegalSection = {
  id: 'localisation',
  title: 'Précision de la localisation',
  paragraphs: [
    "Les informations de localisation, distances, parcours, altitudes et autres données géographiques fournies par l'application dépendent notamment du GPS, du réseau, du matériel utilisé, des conditions météorologiques et environnementales ainsi que des performances du téléphone.",
    "Ces données peuvent être imprécises, incomplètes ou comporter des erreurs.",
    "L'application ne doit pas être utilisée comme unique moyen d'orientation ou de navigation dans une situation présentant un risque pour la sécurité des personnes.",
    "L'utilisateur reste responsable de son itinéraire, de ses déplacements et des décisions prises sur le terrain.",
  ],
}

/** Les huit sections de fond, dans l'ordre d'affichage. La section
 *  « Précision de la localisation » n'en fait pas partie : elle est ajoutée
 *  conditionnellement par `legalSections()`. */
const BASE_SECTIONS: LegalSection[] = [
  {
    id: 'avertissement',
    title: 'Avertissement',
    paragraphs: SHORT_WARNING,
  },
  {
    id: 'limitation',
    title: 'Limitation de responsabilité',
    paragraphs: [
      "Cette application est proposée à titre informatif, documentaire, éducatif et/ou pratique selon sa finalité. Elle est destinée à fournir à l'utilisateur des informations, données, outils ou fonctionnalités destinés à faciliter son utilisation.",
      "Dans les limites autorisées par la réglementation applicable, l'éditeur ne saurait être tenu responsable des dommages, pertes, préjudices ou conséquences résultant directement ou indirectement de l'utilisation, de l'impossibilité d'utiliser ou de l'interprétation des informations ou fonctionnalités proposées par l'application.",
      "Cette limitation concerne notamment, lorsque cela est applicable, les erreurs ou omissions dans les informations, les dysfonctionnements techniques, les interruptions de service, les pertes de données, les problèmes de connexion, les incompatibilités matérielles ou logicielles et les décisions prises par l'utilisateur sur la base des informations fournies.",
    ],
  },
  {
    id: 'utilisation',
    title: "Utilisation de l'application",
    paragraphs: [
      "L'utilisateur reconnaît utiliser l'application sous sa propre responsabilité et demeure seul responsable de l'utilisation qu'il fait des informations et fonctionnalités proposées.",
      "L'application ne doit pas être considérée comme une source unique ou définitive d'information lorsqu'une décision importante, professionnelle, financière, médicale, juridique, scientifique, géographique ou liée à la sécurité est concernée.",
      "Lorsque cela est nécessaire, l'utilisateur doit vérifier les informations auprès de sources officielles, de documents de référence ou d'un professionnel qualifié.",
      "L'utilisation de l'application implique que l'utilisateur a pris connaissance du présent avertissement et accepte les conditions d'utilisation applicables à l'application.",
    ],
  },
  {
    id: 'exactitude',
    title: 'Exactitude des informations',
    paragraphs: [
      "L'éditeur s'efforce de fournir des informations aussi fiables, pertinentes et actualisées que possible. Toutefois, aucune garantie ne peut être donnée quant à l'exactitude, l'exhaustivité, l'actualité ou la pertinence des informations présentées.",
      "Certaines informations peuvent provenir de sources externes ou être générées, calculées ou interprétées automatiquement. Des erreurs, omissions, imprécisions ou incohérences peuvent donc subsister.",
    ],
  },
  {
    id: 'disponibilite',
    title: 'Dysfonctionnements et disponibilité',
    paragraphs: [
      "Malgré les efforts déployés pour assurer le bon fonctionnement de l'application, l'éditeur ne garantit pas que celle-ci sera disponible en permanence, exempte d'erreurs ou compatible avec tous les appareils, systèmes d'exploitation, navigateurs, réseaux ou configurations.",
      "Des interruptions, ralentissements, pertes de connexion, erreurs techniques ou indisponibilités temporaires peuvent notamment survenir.",
    ],
  },
  {
    id: 'donnees',
    title: 'Données et résultats',
    paragraphs: [
      "Les résultats, calculs, estimations, localisations, statistiques, recommandations ou autres données produits par l'application sont fournis à titre indicatif, sauf indication contraire explicite.",
      "L'utilisateur doit apprécier leur pertinence en fonction de son propre contexte et procéder aux vérifications nécessaires avant toute utilisation susceptible d'entraîner des conséquences importantes.",
      "La carte de France présentée dans l'application est une illustration stylisée : les repères y situent approximativement l'origine des fromages et ne constituent ni une position géographique exacte ni un outil de navigation.",
    ],
  },
  {
    id: 'sources',
    title: 'Sources externes',
    paragraphs: [
      "Lorsque l'application utilise ou référence des données provenant de sources externes, celles-ci peuvent évoluer, devenir indisponibles ou être modifiées indépendamment de l'éditeur. L'éditeur ne garantit donc pas la disponibilité permanente ni l'exactitude des contenus provenant de ces sources.",
      "Une partie des photographies et des résumés descriptifs provient de Wikipédia et de Wikimedia Commons, sous les licences propres à ces plateformes, indiquées sur chaque fiche concernée.",
    ],
  },
  {
    id: 'evolution',
    title: "Évolution de l'application",
    paragraphs: [
      "Les fonctionnalités, contenus, données et services proposés par l'application peuvent être modifiés, mis à jour, suspendus ou supprimés à tout moment afin d'assurer son évolution et sa maintenance.",
      "L'application se met à jour automatiquement lorsqu'une nouvelle version est déployée ; les mentions ci-dessus s'appliquent à la version installée sur l'appareil.",
    ],
  },
]

/** Ce que l'application stocke sur l'appareil — aucune donnée personnelle,
 *  aucun compte, aucun serveur. Sert de socle à une politique de
 *  confidentialité complète, à ajouter ici le jour où elle devient
 *  nécessaire (compte, analytics, formulaire…). */
const PRIVACY_SECTION: LegalSection = {
  id: 'donnees-personnelles',
  title: 'Données personnelles',
  paragraphs: [
    "Cette application ne collecte aucune donnée personnelle : ni compte, ni nom, ni adresse e-mail, ni localisation. Aucune donnée n'est transmise à un serveur de l'éditeur.",
    "Les seules informations enregistrées le sont localement sur l'appareil, dans le stockage du navigateur : vos listes de favoris, les fromages que vous avez importés et la validation du présent avertissement. Elles disparaissent si vous effacez les données du site.",
    "L'application n'utilise pas de cookie publicitaire ni de mesure d'audience.",
  ],
}

export const legalPublisher: LegalPublisher = {
  name: 'Swinux',
  email: 'contact@swinux.ch',
  host: 'Netlify',
  address: 'Canton de Vaud, Suisse',
  updatedAt: '20/08/2026',
}

/** Contenu centralisé, référencé par tous les composants légaux. */
export const legalNotice = {
  title: '⚠️ Information importante',
  /** Paragraphes de l'avertissement court (modale de premier lancement). */
  shortWarning: SHORT_WARNING,
  /** Sections de fond, hors localisation. */
  sections: BASE_SECTIONS,
  /** Section ajoutée seulement si l'application utilise le GPS. */
  gpsWarning: GPS_SECTION,
  privacy: PRIVACY_SECTION,
  publisher: legalPublisher,
  version: LEGAL_NOTICE_VERSION,
  usesGeolocation: USES_GEOLOCATION,
}

/** Sections des mentions complètes, dans l'ordre d'affichage. La section
 *  « Précision de la localisation » n'apparaît que si l'application utilise
 *  réellement des données de localisation. */
export function legalSections(usesGeolocation: boolean = USES_GEOLOCATION): LegalSection[] {
  const sections = [...BASE_SECTIONS]
  if (usesGeolocation) {
    // Juste après « Données et résultats », dont elle précise un cas
    // particulier.
    const at = sections.findIndex((s) => s.id === 'donnees') + 1
    sections.splice(at, 0, GPS_SECTION)
  }
  sections.push(PRIVACY_SECTION)
  return sections
}
