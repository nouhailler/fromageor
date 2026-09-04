// Dictionnaire plat des chaînes d'interface (hors contenu des fiches, hors
// mentions légales/decoupe-guide/encyclopedia — ceux-ci vivent dans leurs
// propres fichiers lang-aware, voir README §i18n). Une clé = un usage ; ne
// pas partager une clé entre deux contextes qui pourraient un jour diverger.
//
// {var} dans un texte est substitué par LanguageContext.t(key, vars).

export const STRINGS = {
  // -- commun --------------------------------------------------------------
  'common.back': { fr: 'Retour', en: 'Back' },
  'common.cancel': { fr: 'Annuler', en: 'Cancel' },
  'common.done': { fr: 'Terminé', en: 'Done' },
  'common.aopBadge': { fr: 'AOP', en: 'AOP' },

  // -- navigation (TabBar + Drawer) -----------------------------------------
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.map': { fr: 'Carte', en: 'Map' },
  'nav.search': { fr: 'Recherche', en: 'Search' },
  'nav.favorites': { fr: 'Favoris', en: 'Favorites' },

  // -- menu latéral ----------------------------------------------------------
  'drawer.openMenu': { fr: 'Ouvrir le menu', en: 'Open menu' },
  'drawer.closeMenu': { fr: 'Fermer le menu', en: 'Close menu' },
  'drawer.brandLine1': { fr: 'Fromages', en: 'Cheeses' },
  'drawer.brandLine2': { fr: 'de France', en: 'of France' },
  'drawer.fichesReferenced': { fr: '{n} fiches référencées', en: '{n} cheeses referenced' },
  'drawer.accords': { fr: 'Accords mets & boissons', en: 'Food & drink pairings' },
  'drawer.decoupe': { fr: 'Découpe', en: 'Cutting guide' },
  'drawer.calendar': { fr: 'Calendrier des saisons', en: 'Seasonal calendar' },
  'drawer.appellations': { fr: 'Appellations', en: 'Appellations' },
  'drawer.encyclopedia': { fr: 'Encyclopédie', en: 'Encyclopedia' },
  'drawer.importExport': { fr: 'Import / Export', en: 'Import / Export' },
  'drawer.legal': { fr: 'Mentions légales', en: 'Legal notice' },
  'drawer.documentation': { fr: 'Documentation', en: 'Documentation' },
  'drawer.about': { fr: 'À propos', en: 'About' },
  'drawer.regionsLabel': { fr: 'Régions', en: 'Regions' },
  'drawer.footer': {
    fr: 'Encyclopédie du terroir fromager français. {n} fiches, {r} régions.',
    en: 'Encyclopedia of French cheese terroir. {n} cheeses, {r} regions.',
  },
  'drawer.switchToFrench': { fr: 'Passer en français', en: 'Switch to French' },
  'drawer.switchToEnglish': { fr: 'Passer en anglais', en: 'Switch to English' },

  // -- accueil ---------------------------------------------------------------
  'home.overline': { fr: 'Encyclopédie du terroir', en: 'Encyclopedia of terroir' },
  'home.subtitleRegions': { fr: '{n} régions', en: '{n} regions' },
  'home.featured': { fr: 'À la une', en: 'Featured' },
  'home.discoverFiche': { fr: 'Découvrir la fiche', en: 'View entry' },
  'home.onMap': { fr: 'Sur la carte', en: 'On the map' },
  'home.exploreAll': { fr: 'Tout explorer →', en: 'Explore all →' },
  'home.mapAriaLabel': { fr: 'Voir la carte de France', en: 'View the map of France' },
  'home.accordsCtaTitle': { fr: 'Accords mets & boissons', en: 'Food & drink pairings' },
  'home.accordsCtaDesc': {
    fr: 'Vins, bières, cidres, miel… suggestions automatiques',
    en: 'Wines, beers, ciders, honey… automatic suggestions',
  },
  'home.inSeason': { fr: 'De saison', en: 'In season' },
  'home.toDiscover': { fr: 'À découvrir', en: 'To discover' },

  // -- recherche ---------------------------------------------------------------
  'search.title': { fr: 'Recherche', en: 'Search' },
  'search.placeholder': { fr: 'Nom, région, département…', en: 'Name, region, department…' },
  'search.resultCount': { fr: '{n} résultat(s)', en: '{n} result(s)' },

  // -- carte ---------------------------------------------------------------
  'map.title': { fr: 'Carte de France', en: 'Map of France' },

  // -- favoris ---------------------------------------------------------------
  'favorites.myLists': { fr: 'Mes listes', en: 'My lists' },
  'favorites.createList': { fr: 'Créer une liste', en: 'Create a list' },
  'favorites.createNewList': { fr: 'Créer une nouvelle liste', en: 'Create a new list' },
  'favorites.create': { fr: 'Créer', en: 'Create' },
  'favorites.createAndAdd': { fr: 'Créer et ajouter', en: 'Create and add' },
  'favorites.newListPlaceholder': { fr: 'Nom de la liste…', en: 'List name…' },
  'favorites.emptyTitle': { fr: 'Liste vide', en: 'Empty list' },
  'favorites.emptyHint': {
    fr: 'Ouvrez une fiche et touchez le cœur pour ajouter un fromage à cette liste.',
    en: 'Open a cheese entry and tap the heart to add it to this list.',
  },
  'favorites.deleteList': { fr: 'Supprimer la liste', en: 'Delete list' },
  'favorites.addToFavorites': { fr: 'Ajouter aux favoris', en: 'Add to favorites' },

  // -- accords ---------------------------------------------------------------
  'accords.eyebrow': { fr: 'Suggestions automatiques', en: 'Automatic suggestions' },

  // -- découpe ---------------------------------------------------------------
  'decoupe.listEyebrow': { fr: 'Bien couper chaque fromage', en: 'How to cut each cheese' },
  'decoupe.stepByStep': { fr: 'Le geste, pas à pas', en: 'Step by step' },
  'decoupe.more': { fr: '+ {n} autre(s)', en: '+{n} more' },
  'decoupe.why': { fr: 'Pourquoi ce geste', en: 'Why this method' },
  'decoupe.avoid': { fr: 'À éviter', en: 'What to avoid' },
  'decoupe.concernedCheeses': { fr: 'Les fromages concernés', en: 'Cheeses concerned' },
  'decoupe.concernedNote': {
    fr: "Chaque nom ouvre sa fiche. Ce sont exactement les fromages dont la fiche annonce cette méthode, déduite de leur forme.",
    en: 'Each name opens its entry. These are exactly the cheeses whose entry points to this method, inferred from their shape.',
  },

  // -- calendrier ---------------------------------------------------------------
  'calendar.eyebrow': { fr: 'Mois par mois', en: 'Month by month' },
  'calendar.thisMonth': { fr: 'Ce mois-ci', en: 'This month' },
  'calendar.countCheeses': { fr: '{n} fromages', en: '{n} cheeses' },

  // -- appellations ---------------------------------------------------------------
  'appellations.eyebrow': { fr: 'Signes de qualité', en: 'Quality marks' },
  'appellations.count': { fr: '{n} fromage(s)', en: '{n} cheese(s)' },
  'appellations.note': {
    fr: 'AOP et IGP correspondent aux signes officiels du fromage. Label Rouge et Bio sont déduits de sa famille et de son intensité, à titre indicatif : ils ne reflètent pas les certifications réellement détenues.',
    en: "AOP and IGP are the cheese's real official marks. Label Rouge and Organic are inferred from its family and intensity, for guidance only — they don't reflect certifications actually held.",
  },

  // -- encyclopédie ---------------------------------------------------------------
  'encyclopedia.eyebrow': { fr: 'Comprendre le fromage', en: 'Understanding cheese' },

  // -- fiche détaillée ---------------------------------------------------------------
  'cheeseDetail.photoCredit': { fr: 'Photo : {credit}', en: 'Photo: {credit}' },
  'cheeseDetail.photoN': { fr: 'Photo {n}', en: 'Photo {n}' },
  'cheeseDetail.marqueBadge': { fr: 'Marque', en: 'Brand' },
  'cheeseDetail.marqueNote': {
    fr: 'Nom déposé, et non une appellation — marque de {marque}.',
    en: 'Registered trademark, not an appellation — a brand of {marque}.',
  },
  'cheeseDetail.intensity': { fr: 'Intensité', en: 'Intensity' },
  'cheeseDetail.aromaNotes': { fr: 'Notes aromatiques', en: 'Aroma notes' },
  'cheeseDetail.identityCard': { fr: "Carte d'identité", en: 'At a glance' },
  'cheeseDetail.field.alt': { fr: 'Noms alternatifs', en: 'Alternative names' },
  'cheeseDetail.field.region': { fr: 'Région', en: 'Region' },
  'cheeseDetail.field.dept': { fr: 'Département', en: 'Department' },
  'cheeseDetail.field.commune': { fr: 'Commune', en: 'Commune' },
  'cheeseDetail.field.lait': { fr: 'Type de lait', en: 'Milk type' },
  'cheeseDetail.field.race': { fr: 'Race animale', en: 'Animal breed' },
  'cheeseDetail.field.famille': { fr: 'Famille', en: 'Family' },
  'cheeseDetail.field.croute': { fr: 'Croûte', en: 'Rind' },
  'cheeseDetail.field.texture': { fr: 'Texture', en: 'Texture' },
  'cheeseDetail.field.forme': { fr: 'Forme', en: 'Shape' },
  'cheeseDetail.field.poids': { fr: 'Poids', en: 'Weight' },
  'cheeseDetail.field.dim': { fr: 'Dimensions', en: 'Dimensions' },
  'cheeseDetail.field.affinage': { fr: 'Affinage', en: 'Ageing' },
  'cheeseDetail.field.mg': { fr: 'Matière grasse', en: 'Fat content' },
  'cheeseDetail.field.saison': { fr: 'Saison idéale', en: 'Best season' },
  'cheeseDetail.field.color': { fr: 'Couleur', en: 'Color' },
  'cheeseDetail.location': { fr: 'Localisation', en: 'Location' },
  'cheeseDetail.terroirNote': {
    fr: 'Le pays du fromage, et non le fromage lui-même.',
    en: "The cheese's home country, not the cheese itself.",
  },
  'cheeseDetail.terroirAlt': { fr: 'Paysage de {lieu}', en: 'Landscape of {lieu}' },
  'cheeseDetail.accordsTitle': { fr: 'Accords', en: 'Pairings' },
  'cheeseDetail.accord.vin': { fr: 'Vins', en: 'Wines' },
  'cheeseDetail.accord.biere': { fr: 'Bières', en: 'Beers' },
  'cheeseDetail.accord.cidre': { fr: 'Cidres', en: 'Ciders' },
  'cheeseDetail.accord.whisky': { fr: 'Whiskies', en: 'Whiskies' },
  'cheeseDetail.accord.pain': { fr: 'Pains', en: 'Breads' },
  'cheeseDetail.nutritionTitle': { fr: 'Valeurs nutritionnelles', en: 'Nutritional values' },
  'cheeseDetail.per100g': { fr: 'pour 100 g', en: 'per 100 g' },
  'cheeseDetail.nutrition.energie': { fr: 'Énergie', en: 'Energy' },
  'cheeseDetail.nutrition.proteines': { fr: 'Protéines', en: 'Protein' },
  'cheeseDetail.nutrition.lipides': { fr: 'Lipides', en: 'Fat' },
  'cheeseDetail.nutrition.calcium': { fr: 'Calcium', en: 'Calcium' },
  'cheeseDetail.history': { fr: 'Histoire', en: 'History' },
  'cheeseDetail.readOnWikipedia': { fr: "Lire l'article sur Wikipédia", en: 'Read the article on Wikipedia' },
  'cheeseDetail.didYouKnow': { fr: 'Le saviez-vous', en: 'Did you know' },
  'cheeseDetail.fabrication': { fr: 'Fabrication', en: "How it's made" },
  'cheeseDetail.conservation': { fr: 'Conservation', en: 'Storage' },
  'cheeseDetail.howToServe': { fr: 'Comment le servir', en: 'How to serve' },
  'cheeseDetail.decoupeTitle': { fr: 'Découpe', en: 'Cutting' },
  'cheeseDetail.decoupeOpenCta': { fr: 'Comment découper ce fromage ?', en: 'How to cut this cheese?' },
  'cheeseDetail.decoupeNote': {
    fr: 'Méthode déduite de {basis}, à titre indicatif.',
    en: 'Method inferred from {basis}, for guidance only.',
  },
  'cheeseDetail.decoupeBasis.forme': { fr: 'la forme (« {forme} »)', en: 'the shape ("{forme}")' },
  'cheeseDetail.decoupeBasis.famille': { fr: 'la famille (« {famille} »)', en: 'the family ("{famille}")' },
  'cheeseDetail.decoupeBasis.service': { fr: 'le service, à la cuillère', en: 'how it is served, by the spoon' },
  'cheeseDetail.avgPrice': { fr: 'Prix moyen', en: 'Average price' },
  'cheeseDetail.availability': { fr: 'Disponibilité', en: 'Availability' },

  // -- import / export ---------------------------------------------------------------
  'importExport.eyebrow': { fr: 'Base de données', en: 'Database' },
  'importExport.exportTitle': { fr: 'Exporter', en: 'Export' },
  'importExport.loadedHint': {
    fr: '{n} fromage(s) · {r} région(s) actuellement chargés.',
    en: '{n} cheese(s) · {r} region(s) currently loaded.',
  },
  'importExport.exportButton': { fr: 'Exporter la base (.json)', en: 'Export database (.json)' },
  'importExport.templateButton': { fr: 'Télécharger un gabarit', en: 'Download a template' },
  'importExport.importedDataTitle': { fr: 'Données importées', en: 'Imported data' },
  'importExport.importedHint': {
    fr: 'fromage(s) importé(s) localement (stockés sur cet appareil, ajoutés ou remplaçant des fiches existantes par id).',
    en: 'cheese(s) imported locally (stored on this device, added to or replacing existing entries by id).',
  },
  'importExport.resetImports': { fr: 'Réinitialiser les imports', en: 'Reset imports' },
  'importExport.importTitle': { fr: 'Importer', en: 'Import' },
  'importExport.importHint': {
    fr: 'Collez du JSON ci-dessous, ou choisissez un fichier. Format attendu détaillé plus bas.',
    en: 'Paste JSON below, or choose a file. Expected format detailed below.',
  },
  'importExport.chooseFile': { fr: 'Choisir un fichier…', en: 'Choose a file…' },
  'importExport.validate': { fr: 'Valider', en: 'Validate' },
  'importExport.validCount': {
    fr: '{n} fromage(s) valide(s), prêt(s) à importer.',
    en: '{n} valid cheese(s), ready to import.',
  },
  'importExport.invalidCount': { fr: '{n} entrée(s) invalide(s), ignorée(s) :', en: '{n} invalid item(s), ignored:' },
  'importExport.confirmImport': { fr: "Confirmer l'import ({n})", en: 'Confirm import ({n})' },
  'importExport.importedSuccess': {
    fr: '{n} fromage(s) importé(s) avec succès.',
    en: '{n} cheese(s) imported successfully.',
  },
  'importExport.formatTitle': { fr: 'Format attendu', en: 'Expected format' },
  'importExport.formatHint': {
    fr: 'Le fichier JSON doit être soit un tableau de fromages, soit un objet { "region"?: {...}, "cheeses": [...] }. Chaque fromage suit le schéma ci-dessous ; regionId hérite de region.id s\'il est omis. Importer un id déjà présent remplace la fiche existante ; un nouvel id l\'ajoute.',
    en: 'The JSON file must be either an array of cheeses, or an object { "region"?: {...}, "cheeses": [...] }. Each cheese follows the schema below; regionId inherits from region.id when omitted. Importing an existing id replaces that entry; a new id adds one.',
  },
  'importExport.table.field': { fr: 'Champ', en: 'Field' },
  'importExport.table.type': { fr: 'Type', en: 'Type' },
  'importExport.table.required': { fr: 'Requis', en: 'Required' },
  'importExport.table.description': { fr: 'Description', en: 'Description' },
  'importExport.yes': { fr: 'oui', en: 'yes' },
  'importExport.no': { fr: 'non', en: 'no' },

  // -- mentions légales (modale premier lancement + écran) --------------------
  'legal.seeDetails': { fr: 'Voir les détails', en: 'See details' },
  'legal.understood': { fr: 'J’ai compris', en: 'I understand' },
  'legal.backToWarning': { fr: "Revenir à l'avertissement", en: 'Back to warning' },
  'legal.publisher': { fr: 'Éditeur', en: 'Publisher' },
  'legal.contact': { fr: 'Contact', en: 'Contact' },
  'legal.address': { fr: 'Adresse', en: 'Address' },
  'legal.hosting': { fr: 'Hébergement', en: 'Hosting' },
  'legal.lastUpdate': { fr: 'Mise à jour', en: 'Last updated' },
  'legal.version': { fr: 'Version {v}', en: 'Version {v}' },

  // -- à propos ---------------------------------------------------------------
  'about.appName': { fr: 'Fromages de France', en: 'Cheeses of France' },
  'about.tagline': {
    fr: 'Encyclopédie du terroir fromager français',
    en: 'Encyclopedia of French cheese terroir',
  },
  'about.notesVersion': { fr: 'Notes de version', en: 'Release notes' },
  'about.authorTitle': { fr: 'Auteur', en: 'Author' },
  'about.portfolio': { fr: 'Portfolio', en: 'Portfolio' },
  'about.repo': { fr: 'Dépôt GitHub (README)', en: 'GitHub repository (README)' },
  'about.reportBug': { fr: 'Signaler un bug', en: 'Report a bug' },
  'about.supportTitle': { fr: 'Support', en: 'Support' },
  'about.contactSupport': { fr: 'Contacter le support', en: 'Contact support' },
  'about.supportHint': {
    fr: "Ouvre un e-mail pré-rempli avec la version, le build et le navigateur — vous le relisez et l'envoyez vous-même, rien n'est transmis automatiquement.",
    en: 'Opens a pre-filled email with the version, build and browser — you review and send it yourself, nothing is transmitted automatically.',
  },
  'about.legalTitle': { fr: 'Informations légales', en: 'Legal information' },
  'about.terms': { fr: "Conditions d'utilisation", en: 'Terms of use' },
  'about.privacy': { fr: 'Politique de confidentialité', en: 'Privacy policy' },
  'about.legalHint': {
    fr: "Les trois pointent aujourd'hui vers le même écran : l'application n'a qu'un seul document légal, qui couvre ces trois sujets — voir la note de fin de commande /apropos.",
    en: 'All three currently point to the same screen: the application has a single legal document covering these three topics — see the closing note of the /apropos command.',
  },
  'about.creditsTitle': { fr: 'Crédits', en: 'Credits' },
  'about.mailSubject': { fr: 'Fromages de France — support', en: 'Cheeses of France — support' },
  'about.mailDescribe': { fr: 'Décrivez votre problème ici :', en: 'Describe your issue here:' },
  'about.mailDiagnosticHeader': { fr: '--- Informations de diagnostic ---', en: '--- Diagnostic information ---' },
  'about.mailVersion': { fr: 'Version :', en: 'Version:' },
  'about.mailBuild': { fr: 'Build :', en: 'Build:' },
  'about.mailBrowser': { fr: 'Navigateur :', en: 'Browser:' },

  // -- carte de version ---------------------------------------------------------------
  'versionCard.title': { fr: "Version de l'application", en: 'App version' },
  'versionCard.version': { fr: 'Version', en: 'Version' },
  'versionCard.update': { fr: 'Mise à jour', en: 'Update' },
  'versionCard.check': { fr: 'Vérification', en: 'Check' },
  'versionCard.neverChecked': { fr: 'jamais depuis cet appareil', en: 'never from this device' },
  'versionCard.checkButton': { fr: 'Rechercher une mise à jour', en: 'Check for update' },
  'versionCard.hint': {
    fr: "L'application cherche d'elle-même une nouvelle version toutes les 30 minutes, à chaque retour au premier plan et à chaque reconnexion, puis redémarre pour l'appliquer.",
    en: 'The app checks for a new version by itself every 30 minutes, whenever it returns to the foreground, and whenever the network reconnects, then restarts to apply it.',
  },
  'versionCard.status.checking': { fr: 'Recherche en cours…', en: 'Checking…' },
  'versionCard.status.upToDate': { fr: 'Vous avez déjà la dernière version.', en: "You're already on the latest version." },
  'versionCard.status.updateFound': {
    fr: "Nouvelle version trouvée — l'application va redémarrer.",
    en: 'New version found — the app will restart.',
  },
  'versionCard.status.offline': { fr: 'Pas de connexion : impossible de vérifier.', en: 'No connection: unable to check.' },
  'versionCard.status.unsupported': {
    fr: "Les mises à jour automatiques ne sont pas actives ici (mode développement ou navigation privée).",
    en: 'Automatic updates are not active here (development mode or private browsing).',
  },
  'versionCard.status.error': { fr: 'La vérification a échoué. Réessayez plus tard.', en: 'The check failed. Try again later.' },

  // -- bandeau de mise à jour ---------------------------------------------------------------
  'updateNotice.title': { fr: 'Nouvelle version installée', en: 'New version installed' },
  'updateNotice.subtitle': { fr: "L'application redémarre…", en: 'The app is restarting…' },

  // -- app-version.ts (dates relatives) ---------------------------------------------------------------
  'time.justNow': { fr: "à l'instant", en: 'just now' },
  'time.minutesAgo': { fr: 'il y a {n} minute(s)', en: '{n} minute(s) ago' },
  'time.hoursAgo': { fr: 'il y a {n} heure(s)', en: '{n} hour(s) ago' },
  'time.daysAgo': { fr: 'il y a {n} jour(s)', en: '{n} day(s) ago' },
  'time.unknownDate': { fr: 'date inconnue', en: 'unknown date' },
  'time.unknownVersion': { fr: 'inconnue', en: 'unknown' },
  'time.at': { fr: '{day} à {time}', en: '{day} at {time}' },
} as const

export type StringKey = keyof typeof STRINGS
