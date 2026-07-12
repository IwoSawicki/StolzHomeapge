// Projektdaten für die Projekte-Sektion und /projekte.
// Kategorien: Webseite · Google Ads · SEO · Social Media Ads · Recruiting
// HINWEIS: Badges und Kurzbeschreibungen sind erste Vorschläge — bitte von
// Iwo prüfen/korrigieren. Screenshots der Websites folgen (BrowserMockup
// zeigt bis dahin die Domain als gestalteten Platzhalter).
import type { ImageMetadata } from 'astro';
import stech from '../assets/projekt-s-tech-fahrzeugbau.png';
import saan from '../assets/projekt-saan-wasserstrahl.png';
import raumkonzept from '../assets/projekt-raum-konzept.png';

export interface Projekt {
  name: string;
  art: 'website' | 'video';
  /** nur bei art=website */
  domain?: string;
  /** Video-Standbild bzw. später Website-Screenshot */
  bild?: ImageMetadata;
  beschreibung: string;
  kategorien: string[];
}

export const projekte: Projekt[] = [
  {
    name: 'Zehner Immobilien',
    art: 'website',
    domain: 'zehner-immobilien.de',
    beschreibung: 'Neue Website mit klarer Positionierung für mehr Verkäufer-Anfragen.',
    kategorien: ['Webseite', 'SEO'],
  },
  {
    name: 'S-Tech Fahrzeugbau',
    art: 'video',
    bild: stech,
    beschreibung: 'Recruiting-Videos, die technische Fachkräfte wirklich erreichen.',
    kategorien: ['Recruiting', 'Social Media Ads'],
  },
  {
    name: 'HEPA Baut',
    art: 'website',
    domain: 'hepabaut.de',
    beschreibung: 'Website-Relaunch mit Fokus auf planbare Projektanfragen.',
    kategorien: ['Webseite', 'Google Ads'],
  },
  {
    name: 'SAAN Wasserstrahl',
    art: 'video',
    bild: saan,
    beschreibung: 'Mehr qualifizierte Mitarbeiter-Anfragen für Wasserstrahlschneidarbeiten.',
    kategorien: ['Recruiting'],
  },
  {
    name: 'NKN PV Elektrik',
    art: 'website',
    domain: 'nkn-pv-elektrik.de',
    beschreibung: 'Neuer Auftritt für Photovoltaik & Elektrotechnik mit lokaler Sichtbarkeit.',
    kategorien: ['Webseite', 'SEO'],
  },
  {
    name: 'raum.Konzept',
    art: 'video',
    bild: raumkonzept,
    beschreibung: 'Content für mehr Projektanfragen und passende Bewerbungen.',
    kategorien: ['Kundengewinnung', 'Recruiting'],
  },
  {
    name: 'Jhoch2 Wasserschaden',
    art: 'website',
    domain: 'jhoch2-wasserschaden.de',
    beschreibung: 'Website für schnelle Notfall-Anfragen bei Wasserschäden.',
    kategorien: ['Webseite', 'Google Ads'],
  },
  {
    name: 'DMK Bau',
    art: 'video',
    beschreibung: 'Kampagnen für Kundengewinnung und neue Fachkräfte im Bau.',
    kategorien: ['Social Media Ads', 'Recruiting'],
  },
];

/** die 6 Projekte für die Startseiten-Sektion (3 Websites, 3 Videos) */
export const startseitenProjekte = projekte.slice(0, 6);
