// Contenu et réglages du système d'information légale de l'application.
//
// Tout ce qui change d'une application à l'autre vit ici : les textes, la
// version, l'identité de l'éditeur et le drapeau `usesGeolocation`. Les
// composants de src/components/legal/ ne contiennent aucun texte juridique,
// ce qui permet de transposer le système à une autre PWA en ne reprenant
// que ce fichier.
//
// English translation lives alongside as `{ fr, en }` pairs — this is legal
// content, and like the French original it is not a final validated legal
// text: see DOCUMENTATION_SPEC.md §30, "à valider" applies to both languages.
import { type Lang } from './i18n/lang'

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

interface Bi {
  fr: string
  en: string
}
interface SectionRaw {
  id: string
  title: Bi
  paragraphs: Bi[]
}

const SHORT_WARNING_RAW: Bi[] = [
  {
    fr: "Cette application est fournie à titre informatif et pratique. Malgré les précautions prises lors de son développement, elle peut contenir des erreurs, des imprécisions ou présenter des limitations techniques.",
    en: 'This application is provided for informational and practical purposes. Despite the care taken in its development, it may contain errors, inaccuracies, or have technical limitations.',
  },
  {
    fr: "L'utilisation de cette application se fait sous votre responsabilité. Les informations, résultats, données ou recommandations fournis par l'application ne doivent pas être considérés comme infaillibles.",
    en: 'Use of this application is at your own responsibility. The information, results, data or recommendations it provides should not be considered infallible.',
  },
  {
    fr: "Pour toute information importante ou décision susceptible d'avoir des conséquences, vérifiez les données auprès de sources fiables et officielles ou auprès d'un professionnel compétent.",
    en: 'For any important information or decision with potential consequences, verify the data against reliable, official sources or with a qualified professional.',
  },
  {
    fr: "En utilisant cette application, vous reconnaissez avoir pris connaissance de cet avertissement.",
    en: 'By using this application, you acknowledge that you have read and understood this notice.',
  },
]

const GPS_SECTION_RAW: SectionRaw = {
  id: 'localisation',
  title: { fr: 'Précision de la localisation', en: 'Location accuracy' },
  paragraphs: [
    {
      fr: "Les informations de localisation, distances, parcours, altitudes et autres données géographiques fournies par l'application dépendent notamment du GPS, du réseau, du matériel utilisé, des conditions météorologiques et environnementales ainsi que des performances du téléphone.",
      en: "Location information, distances, routes, altitudes and other geographic data provided by the application depend in particular on GPS, network conditions, the device used, weather and environmental conditions, and phone performance.",
    },
    {
      fr: "Ces données peuvent être imprécises, incomplètes ou comporter des erreurs.",
      en: 'This data may be inaccurate, incomplete, or contain errors.',
    },
    {
      fr: "L'application ne doit pas être utilisée comme unique moyen d'orientation ou de navigation dans une situation présentant un risque pour la sécurité des personnes.",
      en: 'The application must not be used as the sole means of orientation or navigation in a situation posing a risk to personal safety.',
    },
    {
      fr: "L'utilisateur reste responsable de son itinéraire, de ses déplacements et des décisions prises sur le terrain.",
      en: 'The user remains responsible for their route, their movements, and decisions made in the field.',
    },
  ],
}

/** Les huit sections de fond, dans l'ordre d'affichage. La section
 *  « Précision de la localisation » n'en fait pas partie : elle est ajoutée
 *  conditionnellement par `legalSections()`. */
const BASE_SECTIONS_RAW: SectionRaw[] = [
  {
    id: 'avertissement',
    title: { fr: 'Avertissement', en: 'Notice' },
    paragraphs: SHORT_WARNING_RAW,
  },
  {
    id: 'limitation',
    title: { fr: 'Limitation de responsabilité', en: 'Limitation of liability' },
    paragraphs: [
      {
        fr: "Cette application est proposée à titre informatif, documentaire, éducatif et/ou pratique selon sa finalité. Elle est destinée à fournir à l'utilisateur des informations, données, outils ou fonctionnalités destinés à faciliter son utilisation.",
        en: 'This application is offered for informational, documentary, educational and/or practical purposes, depending on its intended use. It is designed to provide the user with information, data, tools or features intended to facilitate its use.',
      },
      {
        fr: "Dans les limites autorisées par la réglementation applicable, l'éditeur ne saurait être tenu responsable des dommages, pertes, préjudices ou conséquences résultant directement ou indirectement de l'utilisation, de l'impossibilité d'utiliser ou de l'interprétation des informations ou fonctionnalités proposées par l'application.",
        en: 'To the extent permitted by applicable law, the publisher cannot be held liable for damages, losses, harm or consequences resulting directly or indirectly from the use, inability to use, or interpretation of the information or features offered by the application.',
      },
      {
        fr: "Cette limitation concerne notamment, lorsque cela est applicable, les erreurs ou omissions dans les informations, les dysfonctionnements techniques, les interruptions de service, les pertes de données, les problèmes de connexion, les incompatibilités matérielles ou logicielles et les décisions prises par l'utilisateur sur la base des informations fournies.",
        en: 'This limitation covers, where applicable, errors or omissions in the information, technical malfunctions, service interruptions, data loss, connectivity issues, hardware or software incompatibilities, and decisions made by the user based on the information provided.',
      },
    ],
  },
  {
    id: 'utilisation',
    title: { fr: "Utilisation de l'application", en: 'Use of the application' },
    paragraphs: [
      {
        fr: "L'utilisateur reconnaît utiliser l'application sous sa propre responsabilité et demeure seul responsable de l'utilisation qu'il fait des informations et fonctionnalités proposées.",
        en: 'The user acknowledges using the application at their own responsibility and remains solely responsible for how they use the information and features it offers.',
      },
      {
        fr: "L'application ne doit pas être considérée comme une source unique ou définitive d'information lorsqu'une décision importante, professionnelle, financière, médicale, juridique, scientifique, géographique ou liée à la sécurité est concernée.",
        en: 'The application should not be treated as a sole or definitive source of information when an important professional, financial, medical, legal, scientific, geographic or safety-related decision is at stake.',
      },
      {
        fr: "Lorsque cela est nécessaire, l'utilisateur doit vérifier les informations auprès de sources officielles, de documents de référence ou d'un professionnel qualifié.",
        en: 'Where necessary, the user must verify information against official sources, reference documents, or a qualified professional.',
      },
      {
        fr: "L'utilisation de l'application implique que l'utilisateur a pris connaissance du présent avertissement et accepte les conditions d'utilisation applicables à l'application.",
        en: 'Use of the application implies that the user has read this notice and accepts the terms of use applicable to the application.',
      },
    ],
  },
  {
    id: 'exactitude',
    title: { fr: 'Exactitude des informations', en: 'Accuracy of information' },
    paragraphs: [
      {
        fr: "L'éditeur s'efforce de fournir des informations aussi fiables, pertinentes et actualisées que possible. Toutefois, aucune garantie ne peut être donnée quant à l'exactitude, l'exhaustivité, l'actualité ou la pertinence des informations présentées.",
        en: 'The publisher strives to provide information that is as reliable, relevant and up to date as possible. However, no guarantee can be given as to the accuracy, completeness, timeliness or relevance of the information presented.',
      },
      {
        fr: "Certaines informations peuvent provenir de sources externes ou être générées, calculées ou interprétées automatiquement. Des erreurs, omissions, imprécisions ou incohérences peuvent donc subsister.",
        en: 'Some information may come from external sources or be automatically generated, calculated or interpreted. Errors, omissions, inaccuracies or inconsistencies may therefore remain.',
      },
    ],
  },
  {
    id: 'disponibilite',
    title: { fr: 'Dysfonctionnements et disponibilité', en: 'Malfunctions and availability' },
    paragraphs: [
      {
        fr: "Malgré les efforts déployés pour assurer le bon fonctionnement de l'application, l'éditeur ne garantit pas que celle-ci sera disponible en permanence, exempte d'erreurs ou compatible avec tous les appareils, systèmes d'exploitation, navigateurs, réseaux ou configurations.",
        en: 'Despite efforts to ensure the application runs smoothly, the publisher does not guarantee that it will be permanently available, error-free, or compatible with every device, operating system, browser, network or configuration.',
      },
      {
        fr: "Des interruptions, ralentissements, pertes de connexion, erreurs techniques ou indisponibilités temporaires peuvent notamment survenir.",
        en: 'Interruptions, slowdowns, connection loss, technical errors or temporary unavailability may in particular occur.',
      },
    ],
  },
  {
    id: 'donnees',
    title: { fr: 'Données et résultats', en: 'Data and results' },
    paragraphs: [
      {
        fr: "Les résultats, calculs, estimations, localisations, statistiques, recommandations ou autres données produits par l'application sont fournis à titre indicatif, sauf indication contraire explicite.",
        en: 'Results, calculations, estimates, locations, statistics, recommendations or other data produced by the application are provided for guidance only, unless explicitly stated otherwise.',
      },
      {
        fr: "L'utilisateur doit apprécier leur pertinence en fonction de son propre contexte et procéder aux vérifications nécessaires avant toute utilisation susceptible d'entraîner des conséquences importantes.",
        en: 'The user must assess their relevance in light of their own context and carry out the necessary checks before any use likely to have significant consequences.',
      },
      {
        fr: "La carte de France présentée dans l'application est une illustration stylisée : les repères y situent approximativement l'origine des fromages et ne constituent ni une position géographique exacte ni un outil de navigation.",
        en: "The map of France shown in the application is a stylised illustration: its markers give only the approximate origin of each cheese, and are neither an exact geographic position nor a navigation tool.",
      },
    ],
  },
  {
    id: 'sources',
    title: { fr: 'Sources externes', en: 'External sources' },
    paragraphs: [
      {
        fr: "Lorsque l'application utilise ou référence des données provenant de sources externes, celles-ci peuvent évoluer, devenir indisponibles ou être modifiées indépendamment de l'éditeur. L'éditeur ne garantit donc pas la disponibilité permanente ni l'exactitude des contenus provenant de ces sources.",
        en: 'When the application uses or references data from external sources, that data may change, become unavailable, or be modified independently of the publisher. The publisher therefore does not guarantee the permanent availability or accuracy of content from these sources.',
      },
      {
        fr: "Une partie des photographies et des résumés descriptifs provient de Wikipédia et de Wikimedia Commons, sous les licences propres à ces plateformes, indiquées sur chaque fiche concernée.",
        en: 'Some photographs and descriptive summaries come from Wikipedia and Wikimedia Commons, under those platforms\' own licenses, indicated on each relevant entry.',
      },
    ],
  },
  {
    id: 'evolution',
    title: { fr: "Évolution de l'application", en: 'Application changes' },
    paragraphs: [
      {
        fr: "Les fonctionnalités, contenus, données et services proposés par l'application peuvent être modifiés, mis à jour, suspendus ou supprimés à tout moment afin d'assurer son évolution et sa maintenance.",
        en: 'The features, content, data and services offered by the application may be modified, updated, suspended or removed at any time to ensure its ongoing development and maintenance.',
      },
      {
        fr: "L'application se met à jour automatiquement lorsqu'une nouvelle version est déployée ; les mentions ci-dessus s'appliquent à la version installée sur l'appareil.",
        en: 'The application updates itself automatically whenever a new version is deployed; the notices above apply to the version installed on the device.',
      },
    ],
  },
]

/** Ce que l'application stocke sur l'appareil — aucune donnée personnelle,
 *  aucun compte, aucun serveur. Sert de socle à une politique de
 *  confidentialité complète, à ajouter ici le jour où elle devient
 *  nécessaire (compte, analytics, formulaire…). */
const PRIVACY_SECTION_RAW: SectionRaw = {
  id: 'donnees-personnelles',
  title: { fr: 'Données personnelles', en: 'Personal data' },
  paragraphs: [
    {
      fr: "Cette application ne collecte aucune donnée personnelle : ni compte, ni nom, ni adresse e-mail, ni localisation. Aucune donnée n'est transmise à un serveur de l'éditeur.",
      en: "This application does not collect any personal data: no account, name, email address, or location. No data is transmitted to a server operated by the publisher.",
    },
    {
      fr: "Les seules informations enregistrées le sont localement sur l'appareil, dans le stockage du navigateur : vos listes de favoris, les fromages que vous avez importés et la validation du présent avertissement. Elles disparaissent si vous effacez les données du site.",
      en: "The only information stored is kept locally on the device, in the browser's storage: your favorites lists, the cheeses you have imported, and the acknowledgement of this notice. It disappears if you clear the site's browsing data.",
    },
    {
      fr: "L'application n'utilise pas de cookie publicitaire ni de mesure d'audience.",
      en: 'The application does not use advertising cookies or audience-measurement tools.',
    },
  ],
}

export const legalPublisher: LegalPublisher = {
  name: 'Swinux',
  email: 'contact@swinux.ch',
  host: 'Netlify',
  address: 'Canton de Vaud, Suisse',
  updatedAt: '20/08/2026',
}

function pickSection(s: SectionRaw, lang: Lang): LegalSection {
  return { id: s.id, title: s.title[lang], paragraphs: s.paragraphs.map((p) => p[lang]) }
}

export function legalTitle(lang: Lang = 'fr'): string {
  return lang === 'en' ? '⚠️ Important information' : '⚠️ Information importante'
}

export function legalShortWarning(lang: Lang = 'fr'): string[] {
  return SHORT_WARNING_RAW.map((p) => p[lang])
}

/** Sections des mentions complètes, dans l'ordre d'affichage. La section
 *  « Précision de la localisation » n'apparaît que si l'application utilise
 *  réellement des données de localisation. */
export function legalSections(
  usesGeolocation: boolean = USES_GEOLOCATION,
  lang: Lang = 'fr',
): LegalSection[] {
  const sections = BASE_SECTIONS_RAW.map((s) => pickSection(s, lang))
  if (usesGeolocation) {
    // Juste après « Données et résultats », dont elle précise un cas
    // particulier.
    const at = sections.findIndex((s) => s.id === 'donnees') + 1
    sections.splice(at, 0, pickSection(GPS_SECTION_RAW, lang))
  }
  sections.push(pickSection(PRIVACY_SECTION_RAW, lang))
  return sections
}
