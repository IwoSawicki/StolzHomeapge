/* Navigation und Footer-Links.
   Ziele exakt wie in der Design-Vorlage (design/STARTSEITE.dc.html). Seiten,
   die es noch nicht gibt, sind in design/README.md unter „Offene Punkte"
   gelistet — die Links bleiben trotzdem wie in der Vorlage. */

export interface NavLink {
  label: string;
  href: string;
}

/** Hauptnavigation – Header (statisch, sticky und Burger-Menü) */
export const hauptnavigation: NavLink[] = [
  { label: 'Projekte', href: '/projekte' },
  { label: 'Kunden gewinnen', href: '/kunden-gewinnen' },
  { label: 'Mitarbeiter gewinnen', href: '/mitarbeiter-gewinnen' },
];

export const erstgespraech: NavLink = {
  label: 'Kostenloses Erstgespräch',
  href: '/erstgespraech',
};

/** Footer-Spalte „Menü" */
export const footerMenue: NavLink[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Kunden gewinnen', href: '/kunden-gewinnen' },
  { label: 'Mitarbeiter gewinnen', href: '/mitarbeiter-gewinnen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '#kontakt' },
];

/** Footer-Spalte „Tools" */
export const footerTools: NavLink[] = [
  { label: 'Vakanzkostenrechner', href: '/vakanzkostenrechner' },
  { label: 'Website-Check', href: '/website-check' },
  { label: 'Sichtbarkeits-Check', href: '/sichtbarkeits-check' },
];

/** Footer-Spalte „Branchen" */
export const footerBranchen: NavLink[] = [
  { label: 'SHK & Heizungsbau', href: '/branchen/shk' },
  { label: 'Elektrotechnik', href: '/branchen/elektro' },
  { label: 'Maler & Lackierer', href: '/branchen/maler' },
  { label: 'Schreiner & Tischler', href: '/branchen/schreiner' },
  { label: 'Dachdecker', href: '/branchen/dachdecker' },
  { label: 'Zimmerei & Holzbau', href: '/branchen/zimmerei' },
  { label: 'Garten- & Landschaftsbau', href: '/branchen/garten-landschaftsbau' },
  { label: 'Hoch- & Rohbau', href: '/branchen/bau' },
  { label: 'Fliesen- & Bodenleger', href: '/branchen/fliesenleger' },
  { label: 'Metall- & Schlosserbau', href: '/branchen/metallbau' },
  { label: 'Photovoltaik & Solar', href: '/branchen/photovoltaik' },
];

/** Footer-Spalte „Rechtliches" */
export const footerRechtliches: NavLink[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Cookie-Einstellungen', href: '/cookies' },
];

/* Die Vorlage verlinkt hier auf die nackten Portal-Startseiten
   (https://www.instagram.com/ usw.), hat also noch keine echten Profile
   hinterlegt. Instagram ist aus CLAUDE.md bekannt und deshalb gesetzt;
   LinkedIn und YouTube warten auf die richtigen URLs
   (siehe docs/ABWEICHUNGEN.md). */
export const socialLinks: NavLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/stolz.marketing/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
];

/** Kontaktdaten – Quelle: Vorlage und CLAUDE.md */
export const kontakt = {
  telefonAnzeige: '0178 4444 156',
  telefonLink: 'tel:+491784444156',
  email: 'iwo@stolz-marketing.de',
  ortZeile1: 'Gewerbegebiet Bensheim',
  ortZeile2: 'Deutschland',
};
