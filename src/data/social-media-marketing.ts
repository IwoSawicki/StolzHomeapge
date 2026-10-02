/* Social-Media-Marketing — Texte und Videos.

   ENTWURF (01.10.2026). Iwo baut Social Media als eigene Leistung aus
   und will die Seite später als Landingpage für eigene Anzeigen und als
   Referenzseite für Videoprojekte nutzen. Bisher steht nur der Hero nach
   seinem Vorbild (Createable: vier Hochkant-Videos, die sofort laufen).
   Die übrigen Inhalte liefert Iwo nach; bis dahin trägt die Seite
   noindex und ist im Footer ausgegraut.

   Zahlen in den Video-Marken nur, wenn sie belegt sind: die über
   100.000 Aufrufe der DMK-Kampagne stehen so schon auf der Startseite,
   die zehn neuen Mitarbeiter für SAAN standen so auf dem alten Auftritt
   (Iwos Text, Branch alter-auftritt, src/data/projekte.ts). Für die
   anderen Videos fehlen Zahlen — dort steht, was der Clip ist. */

export const hero = {
  eyebrow: 'Social-Media-Marketing',
  titelVorn: 'Videos, die ',
  titelKursiv: 'gesehen werden',
  titelHinten: '.',
  lead: 'Reels, Kampagnen und Anzeigen für Handwerksbetriebe und Dienstleister — gedreht bei Ihnen vor Ort, geschnitten fürs Handy und ausgespielt an die Leute, die Sie erreichen wollen.',
  knopf: 'Projekt anfragen',
};

export interface HeroVideo {
  /** Dateiname unter src/assets/… (Pfad steht in `ordner`) */
  datei: string;
  ordner: 'startseite' | 'projekte/dmkbau' | 'projekte/saan';
  /** Text in der Marke über dem Video */
  marke: string;
  /** Beschreibung für Screenreader */
  alt: string;
}

/* Reihenfolge = Reihenfolge im Hero, von links nach rechts.
   Der SAAN-Clip kommt aus dem alten Auftritt (Branch alter-auftritt) und
   ersetzt den Recruiting-Clip von DMK Bau, damit nicht drei von vier
   Videos vom selben Kunden sind (Wunsch Iwo, 02.10.2026). Von den drei
   SAAN-Clips steht der mit dem stärksten Einstieg hier: „Du willst
   arbeiten? Dann hör gut zu". */
export const heroVideos: HeroVideo[] = [
  {
    datei: 'DMK-SM-01-5Handwerker_1.mp4',
    ordner: 'projekte/dmkbau',
    marke: 'DMK Bau · über 100.000 Aufrufe in den ersten Wochen',
    alt: 'Kampagnenvideo für DMK Bau',
  },
  {
    datei: 'SAAN-RecruitingAD-01.mp4',
    ordner: 'projekte/saan',
    marke: 'SAAN · zehn neue Mitarbeiter in wenigen Wochen',
    alt: 'Recruiting-Video für SAAN Wasserstrahltechnik',
  },
  {
    datei: 'stolz-showreel.mp4',
    ordner: 'startseite',
    marke: 'Showreel · Dreh, Schnitt und Anzeigen aus einer Hand',
    alt: 'Showreel von Stolz Marketing',
  },
  {
    datei: 'DMK-SM-04-5Sterne100Bewertungen_1.mp4',
    ordner: 'projekte/dmkbau',
    marke: 'DMK Bau · Clip für die Kundengewinnung',
    alt: 'Video zur Kundengewinnung für DMK Bau',
  },
];

export const abschluss = {
  titelVorn: 'Sie haben die Geschichten. ',
  titelMarker: 'Wir bringen sie',
  titelMitte: ' aufs Handy Ihrer ',
  titelKursiv: 'Kunden',
  titelHinten: '.',
  lead: 'Eine Stunde, kostenlos, ohne Verpflichtung. Wir schauen uns an, was in Ihrem Betrieb steckt, und sagen Ihnen ehrlich, ob Social Media für Sie der richtige Weg ist.',
};
