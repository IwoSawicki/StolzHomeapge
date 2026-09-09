/* Inhalte der Startseite – Texte 1:1 aus design/STARTSEITE.dc.html.
   Nichts hier ist erfunden oder umformuliert. */

export interface Kundenlogo {
  name: string;
  datei: string;
  /** Breite des Slots und maximale Bildhöhe wie in der Vorlage */
  slotBreite: number;
  maxHoehe: number;
}

/* Reihenfolge und Maße exakt aus dem Marquee der Vorlage */
export const kundenlogos: Kundenlogo[] = [
  { name: 'NKN PV & Elektrik', datei: 'nkn-pv-elektrik-mono.png', slotBreite: 130, maxHoehe: 46 },
  { name: 'DMK Bau', datei: 'dmk-bau-mono.png', slotBreite: 150, maxHoehe: 44 },
  { name: 'HePa Baut', datei: 'hepa-baut-mono.png', slotBreite: 160, maxHoehe: 42 },
  { name: 'HePa Solar', datei: 'hepa-solar-mono.png', slotBreite: 150, maxHoehe: 38 },
  { name: 'Fahrschule Messing', datei: 'messing-fahrschule-mono.png', slotBreite: 62, maxHoehe: 50 },
  {
    name: 'Memoria Tierbestattung',
    datei: 'tierbestattung-memoria-mono.png',
    slotBreite: 110,
    maxHoehe: 48,
  },
];

export interface Projekt {
  eyebrow: string;
  titel: string;
  text: string;
  domain: string;
  /** Dateiname in src/assets/projekte – fehlt er, wird die Platzhalterfläche gezeigt */
  screenshot?: string;
  screenshotAlt?: string;
  /** Foto statt Webseiten-Screenshot: wird ohne Browser-Rahmen gezeigt */
  foto?: string;
  fotoAlt?: string;
  /** Bildausschnitt für das Foto (object-position) */
  fotoPosition?: string;
  href: string;
  /** Eigene Unterseite. Nur DMK Bau und HePa Baut haben eine — nur dort
      steht deshalb „Projekt ansehen" unter der Karte. */
  seite?: string;
  /** Steht nur auf /projekte, nicht auf der Startseite. Dort bleiben es die
      vier Projekte der Vorlage. */
  nurProjekteseite?: boolean;
}

export const projekte: Projekt[] = [
  {
    eyebrow: 'HEPA Baut · Sanierung',
    /* Der Titel nennt jetzt das Besondere statt der Absicht. Die Zahlen
       decken sich mit dem Text darunter: rund 150 Städteseiten je Leistung,
       über 450 insgesamt. „Leistungen" statt „Gewerke", weil Sanierung,
       Renovierung und Wasserschaden Leistungen desselben Betriebs sind. */
    titel: 'Webseite mit über 450 Ortsseiten für drei Leistungen',
    text: 'Altbau- und Badsanierung, Renovierung, Wasserschaden — vorher liefen die drei ineinander. Jetzt: eine eigene Startseite je Leistung plus rund 150 Städteseiten pro Leistung im 30-Kilometer-Umkreis, über 450 Seiten insgesamt. Kontaktformular, Rückruf und Click-to-Call auf jeder Seite.',
    domain: 'hepa-baut.de',
    screenshot: 'hepa-baut-startseite.png',
    screenshotAlt: 'Startseite von HePa Baut mit den drei getrennten Leistungsbereichen',
    href: '/projekte',
    seite: '/projekte/hepa-baut',
  },
  {
    eyebrow: 'Jhoch2 · Wasserschadensanierung',
    titel: 'Marke und Auftritt von Grund auf',
    text: 'Logo, Farben, Schriften, Visitenkarten und Aufkleber für die Trocknungsgeräte — dazu ein Foto- und Videodreh mit dem ganzen Team. Auf der Webseite eigene Seiten für Versicherungen und Hausverwaltungen, plus Google Ads für die Auftragsgewinnung.',
    domain: 'jhoch2.de',
    screenshot: 'jhoch2-startseite.png',
    screenshotAlt: 'Startseite von Jhoch2 Wasserschadensanierung',
    href: '/projekte',
  },
  {
    eyebrow: 'NKN & PV Elektrik · Elektro und Photovoltaik',
    titel: 'Der komplette Auftritt aus einer Hand',
    text: 'Logo, Farben, Schriften, Webseite — dazu Flyer und Visitenkarten.',
    domain: 'nkn-pv.de',
    screenshot: 'nkn-pv-elektrik-startseite.png',
    screenshotAlt: 'Startseite von NKN & PV Elektrik',
    href: '/projekte',
  },
  {
    eyebrow: 'DMK Bau · Bauunternehmen',
    titel: 'Kampagnen für Kundengewinnung und neue Fachkräfte im Bau',
    text: 'Bezahlte Kampagnen für zwei Ziele: Anfragen von Inhabern und Bewerbungen von Fachkräften. Über 100.000 Aufrufe innerhalb der ersten Wochen — bei einem Betrieb, den in der Region ohnehin jeder kennt.',
    domain: 'dmk-bau.de',
    /* Kein Webseiten-Screenshot, sondern ein Foto vom Dreh im Betrieb —
       passend dazu, dass es bei DMK um Kampagnen ging, nicht um eine Seite.
       Das Bild ist hochformatig, der Ausschnitt sitzt deshalb auf der
       Bürozeile mit dem Firmenschild. */
    foto: 'dmk-fotoshooting-platzhalter.jpg',
    fotoAlt: 'Foto- und Videodreh im Betrieb von DMK Bau',
    fotoPosition: '50% 42%',
    href: '/projekte',
    seite: '/projekte/dmk-bau',
  },

  /* --- Nur auf /projekte -------------------------------------------------
     Texte unverändert aus dem bisherigen Auftritt (Branch main). Die
     Screenshots liegen als verkleinerte WebP-Kopien bei; die Originale
     bleiben auf main. */
  {
    eyebrow: 'Zehner Immobilien · Immobilienvermittlung',
    titel: 'Neue Website mit klarer Positionierung',
    text: 'Neue Website mit klarer Positionierung für mehr Verkäufer-Anfragen.',
    domain: 'zehner-immobilien.de',
    screenshot: 'zehner-immobilien-startseite.webp',
    screenshotAlt: 'Startseite von Zehner Immobilien',
    href: '/projekte',
    nurProjekteseite: true,
  },
  {
    eyebrow: 'Nieder-Ramstädter Weinmacher · Weinbau',
    titel: 'Weine, Events und Verleih an einem Ort',
    text: 'Neuer Auftritt für den Wein aus dem Frankensteiner Land — Weine, Events und Verleih an einem Ort.',
    domain: 'weinmacher-muehltal.de',
    screenshot: 'weinmacher-startseite.webp',
    screenshotAlt: 'Startseite der Nieder-Ramstädter Weinmacher',
    href: '/projekte',
    nurProjekteseite: true,
  },
  {
    eyebrow: 'Tierbestattung Memoria · Tierbestattung',
    titel: 'Eine Website für einen würdevollen Abschied',
    text: 'Website für einen würdevollen Abschied — Leistungen, Preise und Urnen ruhig und klar aufbereitet.',
    domain: 'tierbestattung-memoria.de',
    screenshot: 'tierbestattung-memoria-startseite.webp',
    screenshotAlt: 'Startseite von Tierbestattung Memoria',
    href: '/projekte',
    nurProjekteseite: true,
  },
  {
    eyebrow: 'Pulse Vending · Snackautomaten',
    titel: 'Performance Marketing für den bundesweiten Verkauf',
    text: 'Performance Marketing für den bundesweiten Verkauf von Snackautomaten.',
    domain: 'pulse-vending.de',
    screenshot: 'pulse-vending-startseite.webp',
    screenshotAlt: 'Startseite von Pulse Vending',
    href: '/projekte',
    nurProjekteseite: true,
  },
];

export interface Branche {
  /* Lange Komposita tragen weiche Trennstriche (U+00AD): auf dem Handy
     stehen zwei Kacheln nebeneinander, „Landschaftsbau" passt dort sonst
     nicht in die Zeile und schob die Seite seitlich hinaus. Das Zeichen ist
     unsichtbar, solange das Wort in die Zeile passt. */
  name: string;
  sub: string;
  href: string;
  /** Bild fehlt noch (design/README.md, Offene Punkte Nr. 2) */
  platzhalter: string;
}

/* Auswahl der Gewerke, geprüft gegen die Aufnahmekriterien auf
   /kunden-gewinnen: Privatkunde entscheidet allein oder zu zweit,
   Auftragswert etwa 3.000 bis 30.000 €, wird lokal gesucht — und
   Fachkräftemangel, damit auch der Meistermagnet greift.

   Herausgeflogen: „Fliesenleger" (geht in Sanierung & Renovierung auf),
   „Zimmerer" (kommt meist über Architekt oder Bauunternehmen, kaum lokale
   Suche) und „Metallbau" (überwiegend B2B und Ausschreibung — genau das,
   was die Aufnahmekriterien ausschließen).

   Die beiden letzten Einträge stehen bewusst für den Meistermagneten:
   Industrie sucht keine Kunden über Google, aber sehr wohl Leute. */
export const branchen: Branche[] = [
  /* Reihenfolge der ersten sechs von Iwo vorgegeben — das sind die
     Gewerke, die auf der Startseite gezeigt werden (siehe
     SICHTBARE_BRANCHEN in BranchenGrid.astro). Die übrigen stehen
     bewusst weiter hier: sie beschreiben ebenfalls Zielkunden, und die
     Zahl lässt sich damit ohne Datenpflege wieder erhöhen. */
  {
    name: 'Sanierung & Renovierung',
    sub: 'Altbau, Bad, Wasserschaden',
    href: '/branchen/sanierung-renovierung',
    platzhalter: 'Bild Sanierung',
  },
  {
    name: 'Elektriker',
    sub: 'Elektroinstallation und PV',
    href: '/branchen/elektro',
    platzhalter: 'Bild Elektro',
  },
  { name: 'Maler', sub: 'Maler und Lackierer', href: '/branchen/maler', platzhalter: 'Bild Maler' },
  {
    name: 'SHK & Heizungsbau',
    sub: 'Sanitär, Heizung, Klima',
    href: '/branchen/shk',
    platzhalter: 'Bild SHK',
  },
  {
    name: 'Fenster & Türen',
    sub: 'Einbau, Austausch, Rollläden',
    href: '/branchen/fenster-tueren',
    platzhalter: 'Bild Fenster und Türen',
  },
  {
    name: 'Garten- und Landschaftsbau',
    sub: 'Außenanlagen und Pflege',
    href: '/branchen/galabau',
    platzhalter: 'Bild GaLaBau',
  },

  /* --- ab hier nicht auf der Startseite sichtbar --------------------- */
  {
    name: 'Dachdecker',
    sub: 'Dach, Abdichtung, Spengler',
    href: '/branchen/dachdecker',
    platzhalter: 'Bild Dachdecker',
  },
  {
    name: 'Schreiner',
    sub: 'Möbel und Innenausbau',
    href: '/branchen/schreiner',
    platzhalter: 'Bild Schreiner',
  },
  {
    name: 'Fassade & Dämmung',
    sub: 'Stuckateur und Wärmedämmung',
    href: '/branchen/fassade-daemmung',
    platzhalter: 'Bild Fassade',
  },
  {
    /* Untertitel zeigt bewusst aufs Privatkundengeschäft: über
       Ausschreibungen läuft nichts, was mit Suche zu gewinnen wäre. */
    name: 'Bauunternehmen',
    sub: 'Umbau, Anbau, Neubau',
    href: '/branchen/bau',
    platzhalter: 'Bild Bauunternehmen',
  },
  {
    name: 'Industrie- und Anlagenbau',
    sub: 'Montage, Wartung, Instandhaltung',
    href: '/branchen/industrie-anlagenbau',
    platzhalter: 'Bild Industrie- und Anlagenbau',
  },
  {
    name: 'Produktion & Fertigung',
    sub: 'Industriebetriebe und Zulieferer',
    href: '/branchen/produktion-fertigung',
    platzhalter: 'Bild Produktion und Fertigung',
  },
];

export interface Bewertung {
  text: string;
  name: string;
  betrieb: string;
  /** Dateiname in src/assets/testimonials */
  foto?: string;
  /**
   * Quadratischer Ausschnitt fürs Avatar, damit im 48er-Feld der Kopf steht
   * und nicht das ganze Bild: [x0, y0, Seitenlänge].
   * x0 und Seitenlänge sind Anteile der Bildbreite, y0 ein Anteil der Höhe.
   * So bleiben die Originale unangetastet und der Ausschnitt lässt sich mit
   * drei Zahlen nachjustieren.
   */
  ausschnitt?: [number, number, number];
}

/* Echte Google-Bewertungen aus der Vorlage – Wortlaut unverändert. */
export const bewertungen: Bewertung[] = [
  {
    text: 'Von Anfang an war die Kommunikation klar, professionell und auf den Punkt. Meine Vorstellungen wurden nicht nur umgesetzt, sondern noch besser in Szene gesetzt als ich es mir vorgestellt hatte.\n\nWer eine Agentur sucht, die mitdenkt und liefert, ist hier genau richtig. Klare Empfehlung!',
    name: 'Janne Tom Klüppelholz',
    betrieb: 'Fight Society Clothing',
    foto: 'JanneKlu.jpg',
    ausschnitt: [0.185, 0.0, 0.56],
  },
  {
    text: 'Iwo hat eine beeindruckende Webseite für mich erstellt und hochwertige Werbefotos geschossen. Seine kreative Herangehensweise, professionelle Arbeit und effiziente Zusammenarbeit haben mich beeindruckt. Ich bin mit den Ergebnissen sehr zufrieden und kann Iwo wärmstens empfehlen!',
    name: 'Dariusz Krzyszton',
    betrieb: 'DMK Bau',
    foto: 'DarekDMK.webp',
    ausschnitt: [0.01, 0.03, 0.98],
  },
  {
    text: 'Sehr netter Kontakt! Die Design-Ideen und Lösungsvorschläge sind immer sehr gut.👍🏼\nMit so jemanden kann man gut zusammen arbeiten!',
    name: 'André Zehner',
    betrieb: 'Zehner Immobilien',
    foto: 'AndreZehner.jpg',
    ausschnitt: [0.09, 0.03, 0.7],
  },
];

export interface Faq {
  frage: string;
  antwort: string;
}

/* ACHTUNG: laut design/README.md („Fidelity" und Offene Punkte Nr. 7) sind
   diese Texte Entwürfe und noch nicht freigegeben. */
export const faqs: Faq[] = [
  {
    frage: 'Was kostet eine neue Webseite?',
    antwort:
      'Das hängt vom Umfang ab. Nach einem kurzen Gespräch bekommen Sie ein Festpreisangebot — keine Stundenzettel, keine Nachträge.',
  },
  {
    frage: 'Wie lange dauert die Umsetzung?',
    antwort:
      'Von der Freigabe der Inhalte bis zum Livegang rechnen wir in der Regel mit vier bis sechs Wochen.',
  },
  {
    frage: 'Muss ich Texte und Bilder selbst liefern?',
    antwort:
      'Nein. Wir kommen zu Ihnen, fotografieren und filmen vor Ort und schreiben die Texte. Sie geben frei.',
  },
  {
    frage: 'Arbeiten Sie nur regional?',
    antwort:
      'Ja. Wir arbeiten mit Betrieben in Südhessen und an der Bergstraße — dort kennen wir den Markt und sind schnell vor Ort.',
  },
  {
    frage: 'Was passiert nach dem Livegang?',
    antwort:
      'Wir bleiben Ansprechpartner: Pflege, Änderungen, Auswertung der Anfragen. Sie bekommen keine Seite und dann Funkstille.',
  },
];

export interface Teammitglied {
  name: string;
  rolle: string;
  /** Art der Zusammenarbeit, steht vor der Rolle — z. B. „Freelancer".
      Bewusst dabei: die drei sind keine Angestellten, und das soll auf der
      Seite auch so stehen (Entscheidung Iwo). */
  art?: string;
  /** Dateiname in src/assets/portraits – fehlt er, erscheint die Platzhalterfläche */
  portrait?: string;
  /** object-position wie in der Vorlage */
  position?: string;
}

export const team: Teammitglied[] = [
  {
    name: 'Timon',
    art: 'Freelancer',
    rolle: 'Foto- und Videoproduktion',
    portrait: 'timon.jpg',
    position: '55% 35%',
  },
  {
    name: 'Gintas',
    art: 'Freelancer',
    rolle: 'Schnitt und Bearbeitung',
    portrait: 'gintas.jpg',
    position: '50% 25%',
  },
  {
    name: 'Moritz',
    art: 'Freelancer',
    rolle: 'Bezahlte Werbung',
    portrait: 'moritz.jpg',
    position: '47% 50%',
  },
];
