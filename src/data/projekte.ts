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
import hepaSanierung from '../assets/projekte/hepa/hepa-sanierung.png';
import hepaRenovierung from '../assets/projekte/hepa/hepa-renovierung.png';
import hepaWasserschaden from '../assets/projekte/hepa/hepa-wasserschaden.png';
import websiteJhoch2 from '../assets/projekte/website-jhoch2-wasserschaden.png';
import websiteBadenBatterie from '../assets/projekte/website-badenbatterie.png';
import websitePannach from '../assets/projekte/website-pannach-messtechnik.png';
import drehDmk from '../assets/projekte/video-dreh-dmk-bau.jpg';
import dmkPreview2 from '../assets/projekte/dmkbau/dmkbau-preview2.webp';
import drehSaan1 from '../assets/projekte/video-dreh-saan-wasserstrahl-1.jpg';
import drehSaan2 from '../assets/projekte/video-dreh-saan-wasserstrahl-2.jpg';
import drehSaan3 from '../assets/projekte/video-dreh-saan-wasserstrahl-3.jpg';
import drehRaumkonzept from '../assets/projekte/video-dreh-raum-konzept.jpg';
import drehAlpha1 from '../assets/projekte/video-dreh-alpha-gruppe-1.jpg';
import drehLaserWolf from '../assets/projekte/video-dreh-laser-wolf.jpg';
import drehWio from '../assets/projekte/content-dreh-wio.jpg';
import senPreview from '../assets/projekte/sen/sen-preview.jpg';
import senContent1 from '../assets/projekte/sen/sen-content-1.jpg';
import senVideo1 from '../assets/projekte/sen/sen-clip-1.mov';
import senVideo2 from '../assets/projekte/sen/sen-clip-2.mov';
import dmkVideo1 from '../assets/projekte/dmkbau/DMK-SM-01-5Handwerker_1.mp4';
import dmkVideo2 from '../assets/projekte/dmkbau/DMK-SM-03-BadScheissHandwerker_1.mp4';
import dmkVideo3 from '../assets/projekte/dmkbau/DMK-SM-04-5Sterne100Bewertungen_1.mp4';
import saanVideo1 from '../assets/projekte/saan/SAAN-RecruitingAD-01.mp4';
import saanVideo2 from '../assets/projekte/saan/SAAN-RecruitingAD-02.mp4';
import saanVideo3 from '../assets/projekte/saan/SAAN-RecruitingAD-03.mp4';
import websiteZehner from '../assets/projekte/zehner-website.png';
import pulseStartseite from '../assets/projekte/pulsevending/pulse-vending-startseite.png';
import pulseKonfigurator from '../assets/projekte/pulsevending/pulse-vending-konfigurator.png';
import pulseShop from '../assets/projekte/pulsevending/pulse-vending-shop.png';
import pulseStandortanalyse from '../assets/projekte/pulsevending/pulse-vending-standortanalyse.png';
import websiteWeinmacher from '../assets/projekte/weinmacher/weinmacher-startseite.png';
import websiteMemoria from '../assets/projekte/memoria/memoria-startseite.png';

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

/** eine der Leistungs-Landingpages (z. B. Sanierung), optional mit Screenshot */
export interface Leistungsseite {
  name: string;
  beschreibung: string;
  punkte: string[];
  bild?: ImageMetadata;
  /** Live-URL dieser Leistungsseite (für Browser-Label + Verlinkung) */
  url?: string;
  /** hervorgehobenes Modul, z. B. Erste-Hilfe bei Wasserschäden */
  highlight?: { titel: string; schritte: string[] };
}

/** visuelle Sitemap für lokales SEO: Startseite → Leistungen → Städte */
export interface StadtStruktur {
  zentrum: string;
  radiusKm: number;
  leistungen: string[];
  staedte: string[];
  /** ungefähre Zahl weiterer Städte-Seiten pro Leistung */
  weitere: number;
  /** Beispiel-Keywords einer Städte-Landingpage */
  keywords: string[];
}

export interface ProjektDetails {
  keyfacts: Keyfact[];
  einleitung: string;
  leistungen: Leistungspunkt[];
  /** nur Websites: Seitenstruktur (einfache Pills) */
  sitemap?: string[];
  /** optionaler Direktlink zur Live-Seite (sonst aus domain abgeleitet) */
  liveUrl?: string;
  /** Feature-Checkliste „Was die Seite kann" */
  webFeatures?: string[];
  /** ausführliche Vorstellung der einzelnen Leistungsseiten */
  leistungsseiten?: Leistungsseite[];
  /** visuelle Städte-/SEO-Struktur (ersetzt die einfache sitemap-Anzeige) */
  stadtStruktur?: StadtStruktur;
  /** zusätzliche Screenshots mit Bildunterschrift (Zielseiten, Module …) */
  galerie?: { bild: ImageMetadata; titel: string; text: string }[];
  /** Überschrift über der Galerie (Default: „Wohin die Kampagnen führen") */
  galerieTitel?: string;
  /** Recruiting: Vorqualifizierung der Bewerber (z. B. Meta Lead-Formular) */
  qualifizierung?: { titel: string; text: string; kriterien: string[] };
  /** optionales Kundenzitat */
  zitat?: { text: string; autor: string };
  /** nur Videos: Bilder vom Dreh */
  drehbilder?: ImageMetadata[];
  /** nur Videos: echte Hochkant-Clips (9:16), autoplay/muted/loop */
  videos?: string[];
  ergebnisse: Ergebnis[];
}

export type Bereich = 'kundengewinnung' | 'recruiting' | 'gastronomie';

export interface Projekt {
  slug: string;
  name: string;
  art: 'website' | 'video';
  /** Filter-Bereiche auf /projekte. Fehlt es, wird aus `ziel` abgeleitet
   *  (Kundengewinnung/Recruiting). Gastro-Projekte explizit taggen. */
  bereiche?: Bereich[];
  /** nur bei art=website */
  domain?: string;
  /** Kachel-Bild (Website-Screenshot bzw. Video-Still/Dreh-Foto) */
  bild?: ImageMetadata;
  beschreibung: string;
  /** Meta-Zeile der Karte, z. B. „Kundengewinnung & Recruiting" */
  ziel?: string;
  kategorien: string[];
  /** true = Unterseite fertig befüllt (verlinkt); sonst „Bald mehr" im Grid */
  bereit?: boolean;
  /** true = Projekt wird nirgends angezeigt (Daten bleiben erhalten).
   *  Zum Wieder-Einblenden einfach den Flag entfernen. */
  versteckt?: boolean;
  details?: ProjektDetails;
}

const alleProjekte: Projekt[] = [
  // ——— Startseiten-Projekte (Reihenfolge = Vorgabe Iwo) ———
  {
    slug: 'jhoch2-wasserschaden',
    bereit: true,
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
        'Bei einem Wasserschaden zählt Geschwindigkeit — auch auf der Website. Der Auftritt von Jhoch2 führt Betroffene **in wenigen Klicks zur Notfall-Anfrage**, und Google Ads fängt die dringenden Suchen ab.',
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
    slug: 'hepa-baut',
    bereit: true,
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
        { label: 'Umfang', wert: 'über 450 Seiten' },
        { label: 'Status', wert: 'Live' },
      ],
      einleitung:
        'HEPA Baut aus Weinheim saniert, renoviert und beseitigt Wasserschäden. Wir haben einen kompletten Website-Relaunch gebaut, der die drei Leistungen klar trennt — und über **hunderte lokale Landingpages** dafür sorgt, dass HEPA **in jeder Stadt im Umkreis** gefunden wird.',
      leistungen: [
        { titel: 'Drei klare Leistungswelten', text: 'Sanierung, Renovierung und Wasserschäden — jede mit eigener Startseite und eigenem Aufbau.' },
        { titel: 'Lokales SEO in großem Stil', text: 'Pro Leistung rund 150 Städte-Landingpages im 30-km-Umkreis um Weinheim, jede auf ihre Stadt optimiert.' },
        { titel: 'Auf die Anfrage optimiert', text: 'Klick-to-Call, Rückruf-Formular und Kontaktformular ganz oben — genau da, wo es zählt.' },
        { titel: 'Vertrauen sichtbar gemacht', text: 'Vorher-Nachher-Bilder, Referenzprojekte, Kundenzitate und ein FAQ-Bereich.' },
      ],
      liveUrl: 'https://hepabaut.de',
      webFeatures: [
        'Cleanes, klares Design',
        'Vorher-Nachher-Bilder',
        'Referenzprojekte',
        'FAQ-Bereich',
        'CTAs mit Kundenzitaten',
        '„Jetzt Rückruf erhalten"-Formular',
        'Kontaktformular ganz oben (Renovierung & Wasserschäden)',
        'Telefonnummer überall verlinkt (Klick-to-Call)',
        'Erste-Hilfe-Modul bei Wasserschäden',
      ],
      leistungsseiten: [
        {
          name: 'Sanierung',
          url: 'https://www.hepabaut.de/sanierung',
          bild: hepaSanierung,
          beschreibung: 'Die Sanierungs-Welt bündelt alle Leistungen rund um Altbau, Bad und Wohnung — mit Referenzen und klarem Weg zur Anfrage.',
          punkte: ['Eigene Startseite für den Bereich', 'Leistungen mit Vorher-Nachher-Belegen', 'FAQ und Kundenzitate', 'rund 150 Städte-Landingpages'],
        },
        {
          name: 'Renovierung',
          url: 'https://www.hepabaut.de/renovierung',
          bild: hepaRenovierung,
          beschreibung: 'Bei der Renovierung steht das Kontaktformular ganz oben — die Anfrage ist so leicht wie möglich gemacht.',
          punkte: ['Kontaktformular direkt im ersten Bildschirm', 'Leistungsübersicht mit Beispielen', 'Klick-to-Call in jeder Sektion', 'rund 150 Städte-Landingpages'],
        },
        {
          name: 'Wasserschäden',
          url: 'https://www.hepabaut.de/wasserschaden',
          bild: hepaWasserschaden,
          beschreibung: 'Im Notfall zählt jede Minute: Die Wasserschaden-Welt führt Betroffene sofort zur Hilfe — inklusive Erste-Hilfe-Modul.',
          punkte: ['Kontaktformular ganz oben', 'Soforthilfe-Hinweise', 'Ablauf & Versicherung erklärt', 'rund 150 Städte-Landingpages'],
          highlight: {
            titel: 'Erste Hilfe bei Wasserschaden — das ist jetzt zu tun',
            schritte: ['Wasserzufuhr stoppen', 'Strom abstellen', 'Schaden dokumentieren', 'Kontakt zu uns aufnehmen'],
          },
        },
      ],
      stadtStruktur: {
        zentrum: 'Weinheim',
        radiusKm: 30,
        leistungen: ['Sanierung', 'Renovierung', 'Wasserschäden'],
        staedte: ['Weinheim', 'Bensheim', 'Heidelberg', 'Mannheim'],
        weitere: 146,
        keywords: ['Handwerker aus Bensheim', 'Altbausanierung Bensheim', 'Badsanierung Bensheim', 'Wohnungssanierung Bensheim'],
      },
      sitemap: ['Startseite', 'Sanierung', 'Renovierung', 'Wasserschäden', 'Über uns', 'Kontakt'],
      ergebnisse: [
        { wert: 'XX', label: 'Projektanfragen pro Monat' },
        { wert: 'Top XX', label: 'lokale Google-Platzierung' },
        { wert: 'XX %', label: 'mehr Website-Besucher' },
      ],
    },
  },
  {
    slug: 'dmk-bau',
    bereit: true,
    name: 'DMK Bau',
    art: 'video',
    bild: dmkPreview2,
    beschreibung: 'Kampagnen, die Bauherren auf DMK aufmerksam machen.',
    ziel: 'Kundengewinnung',
    kategorien: ['Social Media Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Bau' },
        { label: 'Leistung', wert: 'Social Media Ads' },
        { label: 'Plattformen', wert: 'Instagram · Facebook' },
        { label: 'Zeitraum', wert: 'laufend' },
      ],
      einleitung:
        'DMK Bau wollte **mehr Anfragen von Bauherren**. Ich habe eine Kampagnen-Strecke aufgebaut, die zeigt, was der Betrieb wirklich kann — mit echten Aufnahmen von der Baustelle statt Hochglanz.',
      leistungen: [
        { titel: 'Kampagnen-Konzept', text: 'Klare Botschaften für Bauherren, die vor einer Entscheidung stehen.' },
        { titel: 'Dreh vor Ort', text: 'Baustellen, Team und Ergebnisse authentisch eingefangen.' },
        { titel: 'Ads-Setup', text: 'Zielgruppen und Budgets so gesteuert, dass sie auf Anfragen einzahlen.' },
        { titel: 'Monatliche Auswertung', text: 'Was bringt Anfragen und was nicht — schwarz auf weiß.' },
      ],
      drehbilder: [drehDmk],
      videos: [dmkVideo1, dmkVideo2, dmkVideo3],
      ergebnisse: [
        { wert: 'XX', label: 'Projektanfragen' },
        { wert: 'XX €', label: 'Kosten pro Anfrage' },
      ],
    },
  },
  {
    slug: 'zehner-immobilien',
    name: 'Zehner Immobilien',
    art: 'website',
    domain: 'zehner-immobilien.de',
    bild: websiteZehner,
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
  // ——— weitere Projekte ———
  {
    slug: 'saan-wasserstrahl',
    versteckt: true,
    bereit: true,
    name: 'SAAN Wasserstrahltechnik',
    art: 'video',
    bild: drehSaan1,
    beschreibung: 'Zehn neue Mitarbeiter in wenigen Wochen — trotz massivem Personalmangel.',
    ziel: 'Recruiting',
    kategorien: ['Social Media Ads', 'Recruiting'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Wasserstrahlschneiden' },
        { label: 'Ziel', wert: 'Recruiting' },
        { label: 'Kanal', wert: 'Meta Lead Ads' },
        { label: 'Ergebnis', wert: '10 Einstellungen' },
      ],
      einleitung:
        'SAAN suchte dringend Verstärkung für körperlich anspruchsvolle Arbeit — mitten im größten Personalmangel. Über eine Recruiting-Kampagne mit vorqualifizierten Bewerbern konnten wir in nur **wenigen Wochen** gleich **zehn Stellen besetzen**. Das Ergebnis hat selbst den Chef überrascht.',
      leistungen: [
        { titel: 'Recruiting-Videos vor Ort', text: 'Echte Einblicke in Halle, Maschinen und Team — nahbar statt Hochglanz.' },
        { titel: 'Meta Lead-Kampagne', text: 'Gezielt in der Region ausgespielt, mit Vorqualifizierung direkt im Formular.' },
        { titel: 'Leads direkt in Trello', text: 'Jeder Bewerber sichtbar im Board — SAAN behielt den vollen Überblick und konnte selbst nachfassen.' },
        { titel: 'Schnell live, schnell besetzt', text: 'In wenigen Wochen live — erste Bewerber schon nach einer Woche zum Probearbeiten eingeladen.' },
      ],
      qualifizierung: {
        titel: 'Vorqualifiziert statt Bewerber-Flut',
        text: 'Statt vieler unpassender Bewerbungen haben wir über ein Meta Lead-Formular direkt vorqualifiziert: Nur wer die wichtigsten Kriterien erfüllte, landete im Bewerber-Pool. Alle Leads liefen automatisch in ein Trello-Board — SAAN sah jederzeit, wo jeder Bewerber im Prozess steht, und konnte sofort weiterarbeiten.',
        kriterien: [
          'Gültiger Autoführerschein',
          'Gutes Deutsch',
          'Bereitschaft für körperlich anspruchsvolle Arbeit',
          'Vollzeit-Verfügbarkeit',
        ],
      },
      drehbilder: [drehSaan1, drehSaan2, drehSaan3],
      videos: [saanVideo1, saanVideo2, saanVideo3],
      ergebnisse: [
        { wert: '10', label: 'besetzte Stellen' },
        { wert: '< 1 Woche', label: 'bis zu den ersten Probearbeiten' },
        { wert: 'wenige Wochen', label: 'bis zur Vollbesetzung' },
      ],
    },
  },
  {
    slug: 's-tech-fahrzeugbau',
    versteckt: true,
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
    versteckt: true,
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
  {
    slug: 'pulse-vending',
    bereit: true,
    name: 'Pulse Vending',
    art: 'website',
    domain: 'pulse-vending.de',
    bild: pulseStartseite,
    beschreibung: 'Performance Marketing für den bundesweiten Verkauf von Snackautomaten.',
    ziel: 'Kundengewinnung',
    kategorien: ['Google Ads', 'Instagram Ads'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Vending / Automatenwirtschaft (B2B)' },
        { label: 'Leistung', wert: 'Performance Marketing' },
        { label: 'Plattformen', wert: 'Google Ads · Instagram' },
        { label: 'Zeitraum', wert: 'laufend' },
      ],
      einleitung:
        'Pulse Vending verkauft Snackautomaten an Gewerbekunden in ganz Deutschland — und will **skalieren**. Wir steuern das **Performance Marketing**: Google-Kampagnen, die kaufbereite Betreiber auf den Shop bringen, und Instagram Ads, die die Marke ins Feed der nächsten Kundengeneration holen.',
      leistungen: [
        {
          titel: 'Google Ads',
          text: 'Suchkampagnen auf kaufbereite Gewerbekunden — von „Snackautomat kaufen" bis zur Finanzierungsanfrage, laufend gesteuert.',
        },
        {
          titel: 'Conversion-Optimierung',
          text: 'Budgets und Keywords folgen dem, was messbar Anfragen bringt — nicht dem Bauchgefühl.',
        },
        {
          titel: 'Instagram Ads',
          text: 'Kreation und Kampagnenaufbau für die Social-Strecke — aktuell in Umsetzung.',
        },
        {
          titel: 'Enge Abstimmung',
          text: 'Kurze Wege, klares Reporting: Das Pulse-Team weiß jederzeit, was läuft und was es bringt.',
        },
      ],
      galerieTitel: 'Wohin die Kampagnen führen',
      galerie: [
        {
          bild: pulseKonfigurator,
          titel: 'Produktseite mit Konfigurator',
          text: 'Wer nach einem konkreten Automaten sucht, landet direkt beim Konfigurator — inklusive Gesamtpreis und Monatsrate.',
        },
        {
          bild: pulseShop,
          titel: 'Shop-Übersicht',
          text: 'Breitere Suchanfragen führen auf die Übersicht: Automaten, Komponenten und Zubehör auf einen Blick.',
        },
        {
          bild: pulseStandortanalyse,
          titel: 'Kostenlose Standortanalyse',
          text: 'Für alle, die noch am Anfang stehen: ein niedrigschwelliges Formular statt sofortigem Kaufdruck.',
        },
      ],
      zitat: {
        text: 'Wir sind mit der Zusammenarbeit sehr zufrieden und empfehlen STOLZ jedem weiter, der wachsen will.',
        autor: 'Henri Olbrich, Geschäftsführer, Pulse Vending (UPdrinks GmbH)',
      },
      // Bewusst KEINE Zahlen: Der Kunde möchte Budgets, ROAS und Leadzahlen
      // vor einer Veröffentlichung abstimmen.
      ergebnisse: [],
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
  {
    slug: 'baden-batterie',
    versteckt: true,
    name: 'Baden Batterie',
    art: 'website',
    domain: 'badenbatterie.de',
    bild: websiteBadenBatterie,
    beschreibung: 'Neuer Web-Auftritt für den Experten für Industriebatterien & Notlicht-Anlagen.',
    kategorien: ['Webseite'],
  },
  {
    slug: 'pannach-messtechnik',
    versteckt: true,
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
    slug: 'weinmacher-muehltal',
    name: 'Nieder-Ramstädter Weinmacher',
    art: 'website',
    domain: 'weinmacher-muehltal.de',
    bild: websiteWeinmacher,
    beschreibung: 'Neuer Auftritt für den Wein aus dem Frankensteiner Land — Weine, Events und Verleih an einem Ort.',
    ziel: 'Kundengewinnung',
    kategorien: ['Webseite'],
  },
  {
    slug: 'tierbestattung-memoria',
    name: 'Tierbestattung Memoria',
    art: 'website',
    domain: 'tierbestattung-memoria.de',
    bild: websiteMemoria,
    beschreibung: 'Website für einen würdevollen Abschied — Leistungen, Preise und Urnen ruhig und klar aufbereitet.',
    ziel: 'Kundengewinnung',
    kategorien: ['Webseite'],
  },
  {
    slug: 'laser-wolf',
    versteckt: true,
    name: 'Laser-Wolf',
    art: 'video',
    bild: drehLaserWolf,
    beschreibung: 'Video-Kampagne für industrielle Laserreinigung.',
    kategorien: ['Video-Content'],
  },
  {
    slug: 'wio',
    versteckt: true,
    name: 'WIO',
    art: 'video',
    bereiche: ['gastronomie'],
    bild: drehWio,
    beschreibung: 'Foto- und Video-Content für die Gastronomie.',
    kategorien: ['Video-Content'],
  },
  {
    slug: 'sen',
    versteckt: true,
    bereit: true,
    name: 'SEN',
    art: 'video',
    bereiche: ['gastronomie'],
    bild: senPreview,
    beschreibung: 'Monatliche Content-Betreuung für fünf asiatische Restaurants.',
    kategorien: ['Foto & Video', 'Social Media'],
    details: {
      keyfacts: [
        { label: 'Branche', wert: 'Gastronomie' },
        { label: 'Umfang', wert: '5 Restaurants' },
        { label: 'Leistung', wert: 'Foto & Video · Social Media' },
        { label: 'Betreuung', wert: 'monatlich' },
      ],
      einleitung:
        'SEN ist eine Kette aus fünf asiatischen Restaurants — jedes mit eigenem Konzept. Wir haben die komplette Content-Betreuung übernommen: **jeden Monat drei Locations** im Wechsel gefilmt und fotografiert, dazu Redaktionsplan und laufende Betreuung für jeden Standort.',
      leistungen: [
        { titel: 'Monatliche Content-Produktion', text: 'Drei Locations pro Monat in Rotation — Foto und Video direkt vor Ort.' },
        { titel: 'Konzept pro Restaurant', text: 'Jeder Standort mit eigener Bildsprache und eigenem Redaktionsplan.' },
        { titel: 'Post-Schedule & Betreuung', text: 'Feste Veröffentlichungspläne und laufende Betreuung aller Kanäle.' },
        { titel: 'Alles aus einer Hand', text: 'Von der Planung über den Dreh bis zum fertigen Post — ein Ansprechpartner für fünf Standorte.' },
      ],
      videos: [senVideo1, senVideo2],
      drehbilder: [senPreview, senContent1],
      ergebnisse: [
        { wert: '5', label: 'betreute Restaurants' },
        { wert: '3', label: 'Locations pro Monat' },
        { wert: 'monatlich', label: 'Foto- & Video-Content' },
      ],
    },
  },
];

/** öffentlich sichtbare Projekte — versteckte bleiben in den Daten,
 *  tauchen aber nirgends auf (Grids, Filter, Unterseiten, Sitemap, Zähler) */
export const projekte: Projekt[] = alleProjekte.filter((p) => !p.versteckt);

/** die 4 Projekte der Startseiten-Sektion (Reihenfolge = Vorgabe Iwo) */
export const startseitenProjekte = projekte.slice(0, 4);

/** Filter-Bereiche eines Projekts: explizit gesetzt, sonst aus `ziel`.
 *  DMK hat ziel „Kundengewinnung & Recruiting" -> erscheint bei beiden.
 *  Gastro-Projekte (WIO, SEN) sind explizit nur gastronomie. */
export function bereicheVon(p: Projekt): Bereich[] {
  if (p.bereiche && p.bereiche.length) return p.bereiche;
  const b: Bereich[] = [];
  if (p.ziel?.includes('Kundengewinnung')) b.push('kundengewinnung');
  if (p.ziel?.includes('Recruiting')) b.push('recruiting');
  return b;
}

/** Filter-Definition für /projekte (mit Zählern) */
export const projektBereiche: { key: Bereich | 'alle'; label: string }[] = [
  { key: 'alle', label: 'Alle' },
  { key: 'kundengewinnung', label: 'Kundengewinnung' },
  { key: 'recruiting', label: 'Recruiting' },
  { key: 'gastronomie', label: 'Gastronomie' },
];

export function bereichAnzahl(key: Bereich | 'alle'): number {
  if (key === 'alle') return projekte.length;
  return projekte.filter((p) => bereicheVon(p).includes(key)).length;
}
