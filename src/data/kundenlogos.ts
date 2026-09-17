/* Kunden-Logowand.

   Übernommen vom bisherigen Auftritt (Branch main). Reihenfolge und Namen
   unverändert.

   LOGO EINFÜGEN:
     1. Datei nach src/assets/kunden/ legen — am liebsten SVG oder PNG mit
        transparentem Hintergrund, sprechend benannt (z. B. hepa-baut.png)
     2. Hier beim passenden Kunden als `logo` eintragen (nur der Dateiname)
   Solange kein Logo hinterlegt ist, zeigt die Kachel den Namen als
   Wortmarke — die Wand wirkt also schon vollständig und wird Stück für
   Stück besser.

   AUFNAHME-REGEL (Stand 17.09.2026): Eigene Kunden, dazu die Betriebe,
   die als Freelancer für Dexsa Marketing betreut wurden — die Nennung
   hat Iwo am 17.09.2026 freigegeben. Sie stehen unten als eigener Block.

   NICHT dabei ist weiterhin, was über 100Marketing lief (Wundprofis):
   dafür liegt keine Freigabe vor. Wer den Eintrag ergänzen will, holt
   sie vorher ein. */

export interface Kunde {
  name: string;
  /** Dateiname in src/assets/kunden – ohne Logo steht der Name als Wortmarke */
  logo?: string;
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
  { name: 'Friedl Steinwerke' },
  { name: 'Bevo.com' },
  { name: 'Royal Grass' },
  { name: 'Strawberry Energy' },
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

  /* Als Freelancer für Dexsa Marketing betreut. Hier stehen die Namen der
     Betriebe, nicht die der Projekte: aus „ESN Messevideo" wird ESN, aus
     „Die Grünen — Bundeskongress" werden Die Grünen. */
  { name: 'Gauls Catering' },
  { name: 'Lareh Küchen' },
  { name: 'TeMo Service' },
  { name: 'Bianconero' },
  { name: 'Göhler Anlagentechnik' },
  { name: 'Zeller Present' },
  { name: 'Protektis' },
  { name: 'ESN' },
  { name: 'Die Grünen' },
];
