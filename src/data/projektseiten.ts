/* Inhalte der beiden Projekt-Unterseiten.

   Übernommen vom bisherigen Auftritt (Branch main, src/data/projekte.ts),
   Wortlaut unverändert. Nur diese zwei Projekte haben eine eigene Seite —
   die anderen Karten führen weiterhin auf die Projekte-Übersicht.

   Bewusst NICHT mitgenommen: der Abschnitt „Ergebnisse". Dort standen auf
   main überall „XX"-Platzhalter; erfundene Zahlen kommen nicht auf die
   Seite. Sobald echte Werte vorliegen, lässt sich der Block ergänzen.

   /projekte/dmk-bau und /projekte/hepa-baut behalten damit ihre bisherigen
   Adressen — dmk-bau steht laut Search Console auf Position 8,7 und wäre
   sonst eine Weiterleitung. */

export interface Keyfact {
  label: string;
  wert: string;
}

export interface Leistung {
  titel: string;
  text: string;
}

export interface Leistungsseite {
  name: string;
  url: string;
  /** Dateiname in src/assets/projekte/hepa */
  bild: string;
  beschreibung: string;
  punkte: string[];
  hinweis?: { titel: string; schritte: string[] };
}

export interface Projektseite {
  slug: string;
  name: string;
  art: 'website' | 'video';
  eyebrow: string;
  titel: string;
  /** Fett gesetzte Stellen stehen in **Sternchen**, wie auf main */
  einleitung: string;
  keyfacts: Keyfact[];
  leistungen: Leistung[];
  domain?: string;
  liveUrl?: string;
  /** Video: Dateinamen in src/assets/projekte/dmkbau */
  videos?: string[];
  drehbild?: string;
  /** Website: Screenshot in src/assets/projekte/hepa */
  screenshot?: string;
  webFeatures?: string[];
  leistungsseiten?: Leistungsseite[];
  stadtStruktur?: {
    zentrum: string;
    radiusKm: number;
    leistungen: string[];
    staedte: string[];
    weitere: number;
    keywords: string[];
  };
}

export const projektseiten: Projektseite[] = [
  {
    slug: 'dmk-bau',
    name: 'DMK Bau',
    art: 'video',
    eyebrow: 'Kundengewinnung & Recruiting',
    titel: 'Kampagnen für Kundengewinnung und neue Fachkräfte im Bau',
    einleitung:
      'DMK Bau wollte beides: **neue Aufträge** und **neue Leute**. Wir haben eine Kampagnen-Strecke aufgebaut, die Bauherren überzeugt und gleichzeitig zeigt, warum sich eine Bewerbung bei DMK lohnt.',
    keyfacts: [
      { label: 'Branche', wert: 'Bau' },
      { label: 'Leistung', wert: 'Social Media Ads' },
      { label: 'Plattformen', wert: 'Instagram · Facebook' },
      { label: 'Zeitraum', wert: 'laufend' },
    ],
    leistungen: [
      {
        titel: 'Kampagnen-Konzept',
        text: 'Getrennte Botschaften für Auftraggeber und Bewerber — ein gemeinsamer Auftritt.',
      },
      {
        titel: 'Dreh vor Ort',
        text: 'Baustellen, Team und Ergebnisse authentisch eingefangen.',
      },
      {
        titel: 'Ads-Setup',
        text: 'Zielgruppen und Budgets pro Ziel getrennt gesteuert.',
      },
      {
        titel: 'Monatliche Auswertung',
        text: 'Was bringt Anfragen, was bringt Bewerbungen — schwarz auf weiß.',
      },
    ],
    drehbild: 'dreh-dmk-bau.webp',
    videos: [
      'DMK-SM-01-5Handwerker_1.mp4',
      'DMK-SM-03-BadScheissHandwerker_1.mp4',
      'DMK-SM-04-5Sterne100Bewertungen_1.mp4',
    ],
  },
  {
    slug: 'hepa-baut',
    name: 'HEPA Baut',
    art: 'website',
    eyebrow: 'Kundengewinnung',
    titel: 'Eine Webseite, die drei Geschäfte sauber trennt',
    einleitung:
      'HEPA Baut aus Weinheim saniert, renoviert und beseitigt Wasserschäden. Wir haben einen kompletten Website-Relaunch gebaut, der die drei Leistungen klar trennt — und über **hunderte lokale Landingpages** dafür sorgt, dass HEPA **in jeder Stadt im Umkreis** gefunden wird.',
    keyfacts: [
      { label: 'Branche', wert: 'Bau & Sanierung' },
      { label: 'Leistungen', wert: 'Webseite · SEO' },
      { label: 'Umfang', wert: 'über 150 Ortsseiten' },
      { label: 'Status', wert: 'Live' },
    ],
    leistungen: [
      {
        titel: 'Drei klare Leistungswelten',
        text: 'Sanierung, Renovierung und Wasserschäden — jede mit eigener Startseite und eigenem Aufbau.',
      },
      {
        titel: 'Lokales SEO in großem Stil',
        text: 'Über 150 Städte-Landingpages im 30-km-Umkreis um Weinheim, jede auf ihre Stadt optimiert.',
      },
      {
        titel: 'Auf die Anfrage optimiert',
        text: 'Klick-to-Call, Rückruf-Formular und Kontaktformular ganz oben — genau da, wo es zählt.',
      },
      {
        titel: 'Vertrauen sichtbar gemacht',
        text: 'Vorher-Nachher-Bilder, Referenzprojekte, Kundenzitate und ein FAQ-Bereich.',
      },
    ],
    domain: 'hepabaut.de',
    liveUrl: 'https://hepabaut.de',
    screenshot: 'website-hepabaut.webp',
    webFeatures: [
      'Cleanes, klares Design',
      'Vorher-Nachher-Bilder',
      'Referenzprojekte',
      'FAQ-Bereich',
      'CTAs mit Kundenzitaten',
      '„Jetzt Rückruf erhalten“-Formular',
      'Kontaktformular ganz oben (Renovierung & Wasserschäden)',
      'Telefonnummer überall verlinkt (Klick-to-Call)',
      'Erste-Hilfe-Modul bei Wasserschäden',
    ],
    leistungsseiten: [
      {
        name: 'Sanierung',
        url: 'https://www.hepabaut.de/sanierung',
        bild: 'sanierung.webp',
        beschreibung:
          'Die Sanierungs-Welt bündelt alle Leistungen rund um Altbau, Bad und Wohnung — mit Referenzen und klarem Weg zur Anfrage.',
        punkte: [
          'Eigene Startseite für den Bereich',
          'Leistungen mit Vorher-Nachher-Belegen',
          'FAQ und Kundenzitate',
          'eigene Städte-Landingpages',
        ],
      },
      {
        name: 'Renovierung',
        url: 'https://www.hepabaut.de/renovierung',
        bild: 'renovierung.webp',
        beschreibung:
          'Bei der Renovierung steht das Kontaktformular ganz oben — die Anfrage ist so leicht wie möglich gemacht.',
        punkte: [
          'Kontaktformular direkt im ersten Bildschirm',
          'Leistungsübersicht mit Beispielen',
          'Klick-to-Call in jeder Sektion',
          'eigene Städte-Landingpages',
        ],
      },
      {
        name: 'Wasserschäden',
        url: 'https://www.hepabaut.de/wasserschaden',
        bild: 'wasserschaden.webp',
        beschreibung:
          'Im Notfall zählt jede Minute: Die Wasserschaden-Welt führt Betroffene sofort zur Hilfe — inklusive Erste-Hilfe-Modul.',
        punkte: [
          'Kontaktformular ganz oben',
          'Soforthilfe-Hinweise',
          'Ablauf & Versicherung erklärt',
          'eigene Städte-Landingpages',
        ],
        hinweis: {
          titel: 'Erste Hilfe bei Wasserschaden — das ist jetzt zu tun',
          schritte: [
            'Wasserzufuhr stoppen',
            'Strom abstellen',
            'Schaden dokumentieren',
            'Kontakt zu uns aufnehmen',
          ],
        },
      },
    ],
    stadtStruktur: {
      zentrum: 'Weinheim',
      radiusKm: 30,
      leistungen: ['Sanierung', 'Renovierung', 'Wasserschäden'],
      staedte: ['Weinheim', 'Bensheim', 'Heidelberg', 'Mannheim'],
      weitere: 146,
      keywords: [
        'Handwerker aus Bensheim',
        'Altbausanierung Bensheim',
        'Badsanierung Bensheim',
        'Wohnungssanierung Bensheim',
      ],
    },
  },
];
