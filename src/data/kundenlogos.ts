// Kunden-Logowand für die Startseite.
//
// LOGO EINFÜGEN:
//   1. Datei nach src/assets/kunden/ legen, am besten SVG oder PNG
//      mit transparentem Hintergrund (sprechender Name, z. B. hepa-baut.svg)
//   2. Hier oben importieren und beim passenden Kunden als `logo` eintragen
// Solange kein Logo hinterlegt ist, zeigt die Kachel den Namen als
// Wortmarke — die Wand wirkt also schon vollständig und wird Stück für
// Stück besser.
//
// AUFNAHME-REGEL: Hier stehen nur eigene Kunden. Aufträge, die über eine
// andere Agentur liefen (Dexsa Marketing, 100Marketing), sind bewusst
// NICHT dabei — dort gehört die Kundenbeziehung nicht uns. Falls eine
// dieser Agenturen die Nennung freigibt, kann der Kunde ergänzt werden.
import type { ImageMetadata } from 'astro';

export interface Kunde {
  name: string;
  /** optionale Logodatei; ohne Logo wird der Name als Wortmarke gezeigt */
  logo?: ImageMetadata;
}

export const kunden: Kunde[] = [
  { name: 'HEPA Baut' },
  { name: 'DMK Bau' },
  { name: 'Jhoch2' },
  { name: 'Pulse Vending' },
  { name: 'Zehner Immobilien' },
  { name: 'SAAN Wasserstrahltechnik' },
  { name: 'NKN PV Elektrik' },
  { name: 'Alpha Gruppe' },
  { name: 'S-Tech Fahrzeugbau' },
  { name: 'raum.Konzept' },
  { name: 'Baden Batterie' },
  { name: 'Pannach Messtechnik' },
  { name: 'Laser-Wolf' },
  { name: 'BO Architektur' },
  { name: 'Orion Bausysteme' },
  { name: 'RMS Holzverpackung' },
  { name: 'Kessler Schaugläser' },
  { name: 'Botech' },
  { name: 'Reber Bewässerung' },
  { name: 'Brenner Leihkocher' },
  { name: '10PM Eventtechnik' },
  { name: 'Skyvision' },
  { name: 'Messing Fahrschule' },
  { name: 'Blitz Immobilien' },
  { name: 'Rebland Marketing' },
  { name: 'Nieder-Ramstädter Weinmacher' },
  { name: 'Tierbestattung Memoria' },
  { name: 'Bruzzlstubb' },
  { name: 'Café Pape' },
  { name: 'Shiraz Darmstadt' },
  { name: 'Mercedes Catering' },
  { name: 'Dolce Vita' },
  { name: 'WIO' },
  { name: 'SEN' },
  { name: 'Tempel Fightschool' },
  { name: 'RS Academy' },
  { name: 'Acid Berlin' },
  { name: 'CDU Mühltal' },
  { name: 'FDP Baden-Württemberg' },
  { name: 'TEDx Paradeplatz' },
];
