/* Navigation und Footer-Links.
   Ziele exakt wie in der Design-Vorlage (design/STARTSEITE.dc.html). Seiten,
   die es noch nicht gibt, sind in design/README.md unter „Offene Punkte"
   gelistet — die Links bleiben trotzdem wie in der Vorlage. */

export interface NavLink {
  label: string;
  href: string;
  /** Seite existiert noch nicht – im Footer ausgegraut statt verlinkt */
  nochNicht?: boolean;
  /** Kein Link, sondern öffnet das Einwilligungsbanner erneut */
  cookieSchalter?: boolean;
  /** Kleine Blase am Menüpunkt, z. B. die Anzahl der Projekte */
  badge?: string;
}

/** Hauptnavigation – Header (statisch, sticky und Burger-Menü) */
export const hauptnavigation: NavLink[] = [
  /* „50+" deckt sich mit der Zeile im Logo-Marquee („Über 50 Projekte für
     Handwerksbetriebe seit 2022") — keine zweite, abweichende Zahl. */
  { label: 'Projekte', href: '/projekte', badge: '50+' },
  { label: 'Kunden gewinnen', href: '/kunden-gewinnen' },
  { label: 'Mitarbeiter gewinnen', href: '/mitarbeiter-gewinnen' },
];

/* Ziel aller Erstgespräch-Buttons. Die Vorlage verlinkt hier /erstgespraech;
   diese Seite gibt es nicht, das Erstgespräch wird über die Kontaktseite
   angefragt (Entscheidung Iwo). */
export const erstgespraech: NavLink = {
  label: 'Kostenloses Erstgespräch',
  href: '/kontakt',
};

/** Footer-Spalte „Menü" */
export const footerMenue: NavLink[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Kunden gewinnen', href: '/kunden-gewinnen' },
  { label: 'Mitarbeiter gewinnen', href: '/mitarbeiter-gewinnen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns', nochNicht: true },
  { label: 'Kontakt', href: '/kontakt' },
];

/** Footer-Spalte „Tools" */
export const footerTools: NavLink[] = [
  { label: 'Vakanzkostenrechner', href: '/vakanzkostenrechner', nochNicht: true },
  { label: 'Website-Check', href: '/website-check', nochNicht: true },
  { label: 'Sichtbarkeits-Check', href: '/sichtbarkeits-check', nochNicht: true },
];

/** Footer-Spalte „Branchen" — die sechs wichtigsten.
    Ausgewählt nach Marktgröße und danach, wofür wir belegbar gearbeitet
    haben: DMK und HePa im Bau, NKN und HePa Solar bei Elektro und PV.
    Das vollständige Raster mit zwölf Gewerken steht auf der Startseite. */
export const footerBranchen: NavLink[] = [
  { label: 'SHK & Heizungsbau', href: '/branchen/shk', nochNicht: true },
  { label: 'Elektrotechnik', href: '/branchen/elektro', nochNicht: true },
  { label: 'Photovoltaik & Solar', href: '/branchen/photovoltaik', nochNicht: true },
  { label: 'Hoch- & Rohbau', href: '/branchen/bau', nochNicht: true },
  { label: 'Dachdecker', href: '/branchen/dachdecker', nochNicht: true },
  { label: 'Maler & Lackierer', href: '/branchen/maler', nochNicht: true },
];

/** Footer-Spalte „Leistungen vor Ort" — geplante Landingpages.

    Grundlage ist der Search-Console-Export vom 07.09.2026 (letzte drei
    Monate): 460 Impressionen auf Nicht-Marken-Suchen, davon null Klicks,
    weil die Startseite dort auf Position 10 bis 16 steht. Die sechs
    Begriffe mit dem meisten Volumen beziehungsweise der besten
    Ausgangsposition:

      webdesign bensheim + Varianten   ~200 Impr.   Ø Position 14
      webdesign heppenheim               63 Impr.   Ø Position  7,3
      seo (Bensheim, Hemsbach u. a.)     35 Impr.   Ø Position 10,3
      webseitenpflege / -betreuung       28 Impr.   Ø Position 16
      webdesign bergstraße               27 Impr.   Ø Position 10,5
      online marketing bensheim          17 Impr.   Ø Position 14

    Die Seiten gibt es noch NICHT. Die Einträge stehen bewusst schon hier,
    ausgegraut wie die übrigen offenen Seiten, als sichtbare Merkliste.
    Sobald eine Seite steht: `nochNicht` entfernen. */
export const footerStandorte: NavLink[] = [
  { label: 'Webdesign Bensheim', href: '/webdesign-bensheim', nochNicht: true },
  { label: 'Webdesign Heppenheim', href: '/webdesign-heppenheim', nochNicht: true },
  { label: 'Webdesign Bergstraße', href: '/webdesign-bergstrasse', nochNicht: true },
  { label: 'SEO Bensheim', href: '/seo-bensheim', nochNicht: true },
  { label: 'Online-Marketing Bensheim', href: '/online-marketing-bensheim', nochNicht: true },
  { label: 'Website-Betreuung Bensheim', href: '/website-betreuung-bensheim', nochNicht: true },
];

/* Footer-Spalte „Rechtliches". AGB stehen bewusst nicht drin: es gibt
   keine, und für ein Dienstleistungsgeschäft sind sie auch nicht
   vorgeschrieben (Entscheidung Iwo). */
export const footerRechtliches: NavLink[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'Cookie-Einstellungen', href: '#', cookieSchalter: true },
];

/* Die Vorlage verlinkt hier auf die nackten Portal-Startseiten; die echten
   Profile hat Iwo nachgereicht. YouTube ist entfallen, es gibt keinen Kanal. */
export const socialLinks: NavLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/stolz.marketing/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iwo-sawicki/' },
];

/** Kontaktdaten – Quelle: Vorlage und CLAUDE.md */
export const kontakt = {
  telefonAnzeige: '0178 4444 156',
  telefonLink: 'tel:+491784444156',
  email: 'iwo@stolz-marketing.de',
  ortZeile1: 'Gewerbegebiet Bensheim',
  ortZeile2: 'Deutschland',
  /* Google-Unternehmensprofil – Ziel der Trust-Zeile in den Heros */
  googleProfil: 'https://share.google/0GWPnrbiuxQtM4OO7',
};
