// Projektdaten für die Projekte-Sektion, /projekte und die Unterseiten
// /projekte/[slug].
// Aufbau pro Projekt:
//   ziel        → Meta-Zeile der Karte (Kundengewinnung/Recruiting);
//                 fehlt es, zeigt die Karte Website/Video-Content
//   kategorien  → Leistungs-Pills auf der Kachel
//   details     → Inhalte der Unterseite; Projekte OHNE details bekommen
//                 keine Unterseite und ihre Karte ist nicht verlinkt
//
// HINWEIS: Texte, Keyfacts und Ergebnis-Zahlen sind VORSCHLÄGE bzw.
// Platzhalter („XX") — bitte von Iwo prüfen und befüllen. Für die neuen
// Projekte (Baden Batterie, Pannach, Alpha Gruppe, Laser-Wolf, WIO)
// liefert Iwo noch Background — Beschreibungen dort sind erste Vorschläge.
import type { ImageMetadata } from 'astro';
import stech from '../assets/projekt-s-tech-fahrzeugbau.png';
import saanStill from '../assets/projekt-saan-wasserstrahl.png';
import raumkonzeptStill from '../assets/projekt-raum-konzept.png';
import websiteHepa from '../assets/projekte/website-hepabaut.png';
import websiteJhoch2 from '../assets/projekte/website-jhoch2-wasserschaden.png';
import websiteBadenBatterie from '../assets/projekte/website-badenbatterie.png';
import websitePannach from '../assets/projekte/website-pannach-messtechnik.png';
import drehDmk from '../assets/projekte/video-dreh-dmk-bau.jpg';
import drehSaan1 from '../assets/projekte/video-dreh-saan-wasserstrahl-1.jpg';
import drehSaan2 from '../assets/projekte/video-dreh-saan-wasserstrahl-2.jpg';
import drehSaan3 from '../assets/projekte/video-dreh-saan-wasserstrahl-3.jpg';
import drehRaumkonzept from '../assets/projekte/video-dreh-raum-konzept.jpg';
import drehAlpha1 from '../assets/projekte/video-dreh-alpha-gruppe-1.jpg';
import drehLaserWolf from '../assets/projekte/video-dreh-laser-wolf.jpg';
import drehWio from '../assets/projekte/content-dreh-wio.jpg';
import dmkVideo1 from '../assets/projekte/dmkbau/DMK-SM-01-5Handwerker_1.mp4';
import dmkVideo2 from '../assets/projekte/dmkbau/DMK-SM-03-BadScheissHandwerker_1.mp4';
import dmkVideo3 from '../assets/projekte/dmkbau/DMK-SM-04-5Sterne100Bewertungen_1.mp4';

export interface Keyfact {
  label: string;
  wert: string;
}

export interface Leistungspunkt {
  titel: string;
  text: string;
}

export interface Ergebnis {
  wert: string;
  label: string;
}

export interface ProjektDetails {
  keyfacts: Keyfact[];
  einleitung: string;
  leistungen: Leistungspunkt[];
  /** nur Websites: Seitenstruktur */
  sitemap?: string[];
  /** nur Videos: Bilder vom Dreh */
  drehbilder?: ImageMetadata[];
  /** nur Videos: echte Hochkant-Clips (9:16), autoplay/muted/loop */
  videos?: string[];
  ergebnisse: Ergebnis[];
}

export interface Projekt {
  slug: string;
  name: string;
  art: 'website' | 'video';
  /** nur bei art=website */
  domain?: string;
  /** Kachel-Bild (Website-Screenshot bzw. Video-Still/Dreh-Foto) */
  bild?: ImageMetadata;
  beschreibung: string;
  /** Meta-Zeile der Karte, z. B. „Kundengewinnung & Recruiting" */
  ziel?: string;
  kategorien: string[];
  details?: ProjektDetails;
}

export const projekte: Projekt[] = [
  // ——— Startseiten-Projekte (Reihenfolge = Vorgabe Iwo) ———
  {
    slug: 'dmk-bau',
    name: 'DMK Bau',
    art: 'video',
    bild: drehDmk,
    beschreibung: 'Kampagnen für Kundengewinnung und neue Fachkräfte im Bau.',
    ziel: 'Kundengewinnung & Recruiting',
    kategorien: ['Social Media Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Bau' },
        { label: 'Leistung', wert: 'Social Media Ads' },
        { label: 'Plattformen', wert: 'Instagram · Facebook' },
        { label: 'Zeitraum', wert: 'laufend' },
      ],
      einleitung:
        'DMK Bau wollte beides: neue Aufträge und neue Leute. Wir haben eine Kampagnen-Strecke aufgebaut, die Bauherren überzeugt und gleichzeitig zeigt, warum sich eine Bewerbung bei DMK lohnt.',
      leistungen: [
        { titel: 'Kampagnen-Konzept', text: 'Getrennte Botschaften für Auftraggeber und Bewerber — ein gemeinsamer Auftritt.' },
        { titel: 'Dreh vor Ort', text: 'Baustellen, Team und Ergebnisse authentisch eingefangen.' },
        { titel: 'Ads-Setup', text: 'Zielgruppen und Budgets pro Ziel getrennt gesteuert.' },
        { titel: 'Monatliche Auswertung', text: 'Was bringt Anfragen, was bringt Bewerbungen — schwarz auf weiß.' },
      ],
      drehbilder: [drehDmk],
      videos: [dmkVideo1, dmkVideo2, dmkVideo3],
      ergebnisse: [
        { wert: 'XX', label: 'Projektanfragen' },
        { wert: 'XX', label: 'Bewerbungen' },
        { wert: 'XX €', label: 'Kosten pro Ergebnis' },
      ],
    },
  },
  {
    slug: 'hepa-baut',
    name: 'HEPA Baut',
    art: 'website',
    domain: 'hepabaut.de',
    bild: websiteHepa,
    beschreibung: 'Website-Relaunch mit Fokus auf planbare Projektanfragen.',
    ziel: 'Kundengewinnung',
    kategorien: ['Webseite', 'SEO'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Bau & Sanierung' },
        { label: 'Leistungen', wert: 'Webseite · SEO' },
        { label: 'Zeitraum', wert: 'XX Wochen' },
        { label: 'Status', wert: 'Live' },
      ],
      einleitung:
        'HEPA Baut wollte weg von Empfehlungs-Zufall hin zu planbaren Projektanfragen. Der neue Auftritt zeigt Leistungen und Referenzen klar — und wird bei lokalen Suchen gefunden.',
      leistungen: [
        { titel: 'Relaunch von Grund auf', text: 'Neue Struktur, neues Design, klare Leistungsseiten.' },
        { titel: 'Referenzen, die verkaufen', text: 'Projekte mit Bildern und Fakten statt Floskeln.' },
        { titel: 'SEO-Grundlagen', text: 'Saubere Technik und lokale Suchbegriffe für Sanierung & Renovierung.' },
        { titel: 'Messbarkeit', text: 'Jede Anfrage nachvollziehbar — monatliche Auswertung inklusive.' },
      ],
      sitemap: ['Startseite', 'Sanierung', 'Renovierung', 'Wasserschäden', 'Über uns', 'Kontakt'],
      ergebnisse: [
        { wert: 'XX', label: 'Projektanfragen pro Monat' },
        { wert: 'Top XX', label: 'lokale Google-Platzierung' },
        { wert: 'XX %', label: 'mehr Website-Besucher' },
      ],
    },
  },
  {
    slug: 'jhoch2-wasserschaden',
    name: 'Jhoch2 Wasserschaden',
    art: 'website',
    domain: 'jhoch2-wasserschaden.de',
    bild: websiteJhoch2,
    beschreibung: 'Website für schnelle Notfall-Anfragen bei Wasserschäden.',
    ziel: 'Kundengewinnung',
    kategorien: ['Webseite', 'SEO', 'Google Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Wasserschadensanierung' },
        { label: 'Leistungen', wert: 'Webseite · SEO · Google Ads' },
        { label: 'Zeitraum', wert: 'XX Wochen' },
        { label: 'Status', wert: 'Live' },
      ],
      einleitung:
        'Bei einem Wasserschaden zählt Geschwindigkeit — auch auf der Website. Der Auftritt von Jhoch2 führt Betroffene in wenigen Klicks zur Notfall-Anfrage, und Google Ads fängt die dringenden Suchen ab.',
      leistungen: [
        { titel: 'Notfall-Strecke', text: 'Telefonnummer und Anfrage immer einen Daumen entfernt — auch mobil.' },
        { titel: 'Vertrauen in Sekunden', text: 'Ablauf, Referenzen und Versicherungs-Infos klar erklärt.' },
        { titel: 'Google Ads für Notfälle', text: 'Kampagnen auf „Wasserschaden + Ort" — genau dann sichtbar, wenn es brennt.' },
        { titel: 'SEO & Messbarkeit', text: 'Lokale Sichtbarkeit organisch aufgebaut, Anrufe und Anfragen sauber getrackt.' },
      ],
      sitemap: ['Startseite', 'Leckortung', 'Trocknung', 'Sanierung', 'Ablauf & Versicherung', 'Kontakt'],
      ergebnisse: [
        { wert: 'XX', label: 'Notfall-Anfragen pro Monat' },
        { wert: 'XX €', label: 'Kosten pro Anfrage' },
        { wert: 'XX %', label: 'Anrufe direkt über die Website' },
      ],
    },
  },
  {
    slug: 'saan-wasserstrahl',
    name: 'SAAN Wasserstrahl',
    art: 'video',
    bild: drehSaan1,
    beschreibung: 'Mehr qualifizierte Mitarbeiter-Anfragen für Wasserstrahlschneidarbeiten.',
    ziel: 'Recruiting',
    kategorien: ['Social Media Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Wasserstrahlschneiden' },
        { label: 'Leistung', wert: 'Social Media Ads' },
        { label: 'Plattformen', wert: 'Instagram · Facebook' },
        { label: 'Zeitraum', wert: 'laufend' },
      ],
      einleitung:
        'SAAN suchte Verstärkung fürs Team — in einem Nischenhandwerk, das kaum jemand kennt. Die Kampagne zeigt den Beruf ehrlich und macht neugierig: Wer sich bewirbt, weiß schon, worauf er sich freut.',
      leistungen: [
        { titel: 'Konzept & Skript', text: 'Der Betrieb und das Team im Mittelpunkt — nahbar statt Hochglanz.' },
        { titel: 'Dreh vor Ort', text: 'Echte Einblicke in Halle, Maschinen und Alltag.' },
        { titel: 'Schnitt & Formate', text: 'Kurze Clips für Story und Feed, auf die Zielgruppe zugeschnitten.' },
        { titel: 'Laufende Optimierung', text: 'Creatives und Zielgruppen werden monatlich nachgeschärft.' },
      ],
      drehbilder: [drehSaan1, drehSaan2, drehSaan3],
      ergebnisse: [
        { wert: 'XX', label: 'Bewerbungen' },
        { wert: 'XX.XXX', label: 'erreichte Personen' },
        { wert: 'XX €', label: 'Kosten pro Bewerbung' },
      ],
    },
  },
  {
    slug: 's-tech-fahrzeugbau',
    name: 'S-Tech Fahrzeugbau',
    art: 'video',
    bild: stech,
    beschreibung: 'Recruiting-Videos, die technische Fachkräfte wirklich erreichen.',
    ziel: 'Recruiting',
    kategorien: ['Social Media Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Fahrzeugbau' },
        { label: 'Leistung', wert: 'Social Media Ads' },
        { label: 'Plattformen', wert: 'Instagram · Facebook' },
        { label: 'Zeitraum', wert: 'laufend' },
      ],
      einleitung:
        'S-Tech suchte Monteure für Kran-Sonderaufbauten — ein Profil, das über Stellenanzeigen kaum zu erreichen ist. Wir haben Recruiting-Videos direkt im Betrieb gedreht und als Kampagne gezielt in der Region ausgespielt.',
      leistungen: [
        { titel: 'Konzept & Skript', text: 'Botschaften, die Fachkräfte ernst nehmen — echte Einblicke statt Stock-Material.' },
        { titel: 'Dreh vor Ort', text: 'Ein Drehtag im Betrieb, das Team im Mittelpunkt.' },
        { titel: 'Schnitt & Postproduktion', text: 'Formate für Feed und Story, untertitelt und auf Hook optimiert.' },
        { titel: 'Kampagnen-Setup', text: 'Zielgruppen, Budgets und laufende Optimierung — Bewerbungen landen direkt im Postfach.' },
      ],
      drehbilder: [stech],
      ergebnisse: [
        { wert: 'XX', label: 'qualifizierte Bewerbungen' },
        { wert: 'XX.XXX', label: 'erreichte Personen in der Region' },
        { wert: 'XX €', label: 'Kosten pro Bewerbung' },
      ],
    },
  },
  {
    slug: 'raum-konzept',
    name: 'raum.Konzept',
    art: 'video',
    bild: drehRaumkonzept,
    beschreibung: 'Content für mehr Projektanfragen und passende Bewerbungen.',
    ziel: 'Kundengewinnung & Recruiting',
    kategorien: ['Social Media Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Innenausbau' },
        { label: 'Leistung', wert: 'Social Media Ads' },
        { label: 'Plattformen', wert: 'Instagram · Facebook' },
        { label: 'Zeitraum', wert: 'laufend' },
      ],
      einleitung:
        'raum.Konzept plant und baut hochwertige Innenräume — der Content zeigt beides: fertige Projekte für Auftraggeber und den Arbeitsalltag für künftige Kollegen. Eine Content-Strecke, zwei Ziele.',
      leistungen: [
        { titel: 'Content-Strategie', text: 'Ein Plan für Kundengewinnung und Recruiting — abgestimmt statt doppelt.' },
        { titel: 'Dreh & Foto vor Ort', text: 'Projekte und Team regelmäßig begleitet, mit gemeinsamer Planung.' },
        { titel: 'Schnitt & Veröffentlichung', text: 'Beiträge und Clips kommen fertig geplant in den Kanal.' },
        { titel: 'Auswertung', text: 'Monatlicher Blick auf Reichweite, Anfragen und Bewerbungen.' },
      ],
      drehbilder: [drehRaumkonzept, raumkonzeptStill],
      ergebnisse: [
        { wert: 'XX', label: 'Projektanfragen' },
        { wert: 'XX', label: 'Bewerbungen' },
        { wert: 'XX.XXX', label: 'erreichte Personen' },
      ],
    },
  },

  // ——— weitere Projekte (nur /projekte) ———
  {
    slug: 'zehner-immobilien',
    name: 'Zehner Immobilien',
    art: 'website',
    domain: 'zehner-immobilien.de',
    beschreibung: 'Neue Website mit klarer Positionierung für mehr Verkäufer-Anfragen.',
    ziel: 'Kundengewinnung',
    kategorien: ['Webseite', 'SEO'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Immobilien' },
        { label: 'Leistungen', wert: 'Webseite · SEO' },
        { label: 'Zeitraum', wert: 'XX Wochen' },
        { label: 'Status', wert: 'Live' },
      ],
      einleitung:
        'Zehner Immobilien brauchte einen Auftritt, der Eigentümer beim Verkauf abholt: klare Positionierung, verständliche Leistungen und ein direkter Weg zur Anfrage. Wir haben Struktur, Design und Inhalte komplett neu aufgebaut.',
      leistungen: [
        { titel: 'Positionierung & Struktur', text: 'Klare Botschaft für Verkäufer statt Bauchladen — jede Seite mit einem Ziel.' },
        { titel: 'Design & Umsetzung', text: 'Moderner, schneller Auftritt, der auf jedem Gerät überzeugt.' },
        { titel: 'SEO-Grundlagen', text: 'Saubere Technik, lokale Suchbegriffe und Inhalte, die bei Google gefunden werden.' },
        { titel: 'Anfrage-Strecke', text: 'Kontaktwege ohne Umwege — vom ersten Klick bis zur Bewertungsanfrage.' },
      ],
      sitemap: ['Startseite', 'Leistungen', 'Immobilie verkaufen', 'Über uns', 'Referenzen', 'Kontakt'],
      ergebnisse: [
        { wert: 'XX', label: 'Anfragen pro Monat' },
        { wert: 'Top XX', label: 'Google-Platzierung lokal' },
        { wert: 'XX %', label: 'schnellere Ladezeit' },
      ],
    },
  },
  {
    slug: 'nkn-pv-elektrik',
    name: 'NKN PV Elektrik',
    art: 'website',
    domain: 'nkn-pv-elektrik.de',
    beschreibung: 'Neuer Auftritt für Photovoltaik & Elektrotechnik mit lokaler Sichtbarkeit.',
    ziel: 'Kundengewinnung',
    kategorien: ['Webseite', 'SEO'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Photovoltaik & Elektro' },
        { label: 'Leistungen', wert: 'Webseite · SEO' },
        { label: 'Zeitraum', wert: 'XX Wochen' },
        { label: 'Status', wert: 'Live' },
      ],
      einleitung:
        'NKN installiert Photovoltaik und Elektrotechnik — die alte Website hat davon wenig erzählt. Der neue Auftritt erklärt die Leistungen verständlich und sorgt dafür, dass NKN bei lokalen Suchen gefunden wird.',
      leistungen: [
        { titel: 'Leistungsseiten mit Substanz', text: 'PV, Speicher, Wallbox, Elektro — jede Leistung verständlich erklärt.' },
        { titel: 'Lokales SEO', text: 'Sichtbar in den Orten, in denen NKN wirklich arbeitet.' },
        { titel: 'Vertrauen aufbauen', text: 'Referenzen, Zertifikate und Team-Vorstellung an den richtigen Stellen.' },
        { titel: 'Anfrage-Formulare', text: 'Kurze Formulare mit den richtigen Vorab-Fragen — spart beiden Seiten Zeit.' },
      ],
      sitemap: ['Startseite', 'Photovoltaik', 'Elektrotechnik', 'Referenzen', 'Über uns', 'Kontakt'],
      ergebnisse: [
        { wert: 'XX', label: 'Anfragen pro Monat' },
        { wert: 'Top XX', label: 'lokale Google-Platzierung' },
        { wert: 'XX %', label: 'mehr Sichtbarkeit' },
      ],
    },
  },

  // ——— neue Projekte (Background von Iwo folgt; Beschreibungen =
  //     erste Vorschläge, noch KEINE Unterseiten) ———
  {
    slug: 'baden-batterie',
    name: 'Baden Batterie',
    art: 'website',
    domain: 'badenbatterie.de',
    bild: websiteBadenBatterie,
    beschreibung: 'Neuer Web-Auftritt für den Experten für Industriebatterien & Notlicht-Anlagen.',
    kategorien: ['Webseite'],
  },
  {
    slug: 'pannach-messtechnik',
    name: 'Pannach Messtechnik',
    art: 'website',
    bild: websitePannach,
    beschreibung: 'Neue Website für den Spezialisten für Abwasser-Messtechnik.',
    kategorien: ['Webseite'],
  },
  {
    slug: 'alpha-gruppe',
    name: 'Alpha Gruppe',
    art: 'video',
    bild: drehAlpha1,
    beschreibung: 'Video-Content direkt von der Baustelle.',
    kategorien: ['Video-Content'],
  },
  {
    slug: 'laser-wolf',
    name: 'Laser-Wolf',
    art: 'video',
    bild: drehLaserWolf,
    beschreibung: 'Video-Kampagne für industrielle Laserreinigung.',
    kategorien: ['Video-Content'],
  },
  {
    slug: 'wio',
    name: 'WIO',
    art: 'video',
    bild: drehWio,
    beschreibung: 'Foto- und Video-Content für die Gastronomie.',
    kategorien: ['Video-Content'],
  },
];

/** die 6 Projekte der Startseiten-Sektion (Reihenfolge = Vorgabe Iwo) */
export const startseitenProjekte = projekte.slice(0, 6);
