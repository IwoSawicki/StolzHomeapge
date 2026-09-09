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
}

export const projekte: Projekt[] = [
  {
    eyebrow: 'HEPA Baut · Sanierung',
    titel: 'Eine Webseite, die drei Geschäfte sauber trennt',
    text: 'Altbau- und Badsanierung, Renovierung, Wasserschaden — vorher liefen die drei ineinander. Jetzt: eine eigene Startseite je Leistung plus rund 150 Städteseiten pro Leistung im 30-Kilometer-Umkreis, über 450 Seiten insgesamt. Kontaktformular, Rückruf und Click-to-Call auf jeder Seite.',
    domain: 'hepa-baut.de',
    screenshot: 'hepa-baut-startseite.png',
    screenshotAlt: 'Startseite von HePa Baut mit den drei getrennten Leistungsbereichen',
    href: '/projekte',
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
  },
];

export interface Branche {
  name: string;
  sub: string;
  href: string;
  /** Bild fehlt noch (design/README.md, Offene Punkte Nr. 2) */
  platzhalter: string;
}

export const branchen: Branche[] = [
  { name: 'SHK', sub: 'Sanitär, Heizung, Klima', href: '/branchen/shk', platzhalter: 'Bild SHK' },
  {
    name: 'Elektro',
    sub: 'Elektroinstallation und PV',
    href: '/branchen/elektro',
    platzhalter: 'Bild Elektro',
  },
  { name: 'Maler', sub: 'Maler und Lackierer', href: '/branchen/maler', platzhalter: 'Bild Maler' },
  {
    name: 'Schreiner',
    sub: 'Möbel und Innenausbau',
    href: '/branchen/schreiner',
    platzhalter: 'Bild Schreiner',
  },
  {
    name: 'Dachdecker',
    sub: 'Dach, Abdichtung, Spengler',
    href: '/branchen/dachdecker',
    platzhalter: 'Bild Dachdecker',
  },
  {
    name: 'Zimmerer',
    sub: 'Holzbau und Konstruktion',
    href: '/branchen/zimmerer',
    platzhalter: 'Bild Zimmerer',
  },
  {
    name: 'Fliesenleger',
    sub: 'Bad und Bodenbeläge',
    href: '/branchen/fliesenleger',
    platzhalter: 'Bild Fliesenleger',
  },
  {
    name: 'Garten- und Landschaftsbau',
    sub: 'Außenanlagen und Pflege',
    href: '/branchen/galabau',
    platzhalter: 'Bild GaLaBau',
  },
  {
    name: 'Bauunternehmen',
    sub: 'Roh- und Hochbau',
    href: '/branchen/bau',
    platzhalter: 'Bild Bauunternehmen',
  },
  {
    name: 'Metallbau',
    sub: 'Schlosserei und Stahlbau',
    href: '/branchen/metallbau',
    platzhalter: 'Bild Metallbau',
  },
  {
    name: 'Umzüge',
    sub: 'Umzug und Entrümpelung',
    href: '/branchen/umzuege',
    platzhalter: 'Bild Umzüge',
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
    ausschnitt: [0.27, 0.005, 0.42],
  },
  {
    text: 'Iwo hat eine beeindruckende Webseite für mich erstellt und hochwertige Werbefotos geschossen. Seine kreative Herangehensweise, professionelle Arbeit und effiziente Zusammenarbeit haben mich beeindruckt. Ich bin mit den Ergebnissen sehr zufrieden und kann Iwo wärmstens empfehlen!',
    name: 'Dariusz Krzyszton',
    betrieb: 'DMK Bau',
    foto: 'DarekDMK.webp',
    ausschnitt: [0.05, 0.04, 0.9],
  },
  {
    text: 'Sehr netter Kontakt! Die Design-Ideen und Lösungsvorschläge sind immer sehr gut.👍🏼\nMit so jemanden kann man gut zusammen arbeiten!',
    name: 'André Zehner',
    betrieb: 'Zehner Immobilien',
    foto: 'AndreZehner.jpg',
    ausschnitt: [0.155, 0.026, 0.55],
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
  /** Dateiname in src/assets/portraits – fehlt er, erscheint die Platzhalterfläche */
  portrait?: string;
  /** object-position wie in der Vorlage */
  position?: string;
}

export const team: Teammitglied[] = [
  {
    name: 'Timon',
    rolle: 'Foto- und Videoproduktion',
    portrait: 'timon.jpg',
    position: '55% 35%',
  },
  { name: 'Gintas', rolle: 'Schnitt und Bearbeitung', portrait: 'gintas.jpg', position: '50% 25%' },
  // Porträt fehlt noch (design/README.md, Offene Punkte Nr. 8)
  { name: 'Moritz', rolle: 'Bezahlte Werbung' },
];
