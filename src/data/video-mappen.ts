/* Videomappen — persönliche Seiten unter /videos/<name>, die Iwo einem
   möglichen Kunden per Mail schickt: ein paar Videos zum Durchklicken,
   mehr nicht.

   Wie /alle-projekte: noindex, nicht in der Sitemap, nirgends verlinkt.
   Wer den Link nicht hat, findet die Seite nicht.

   Neue Mappe: einen Eintrag unten ergänzen. Die Videos liegen als .mp4
   irgendwo unter src/assets/, das Standbild dazu heißt
   <dateiname>-standbild.jpg und liegt ebenfalls unter src/assets/ (der
   Ordner ist egal, gesucht wird nach dem Dateinamen). */

export interface MappenVideo {
  /** Dateiname der .mp4, ohne Ordner */
  datei: string;
  kunde: string;
  /** Kleine Marke auf dem Video */
  art: 'Recruiting' | 'Kundengewinnung';
  /** Ein, höchstens zwei kurze Sätze */
  text: string;
}

export interface VideoMappe {
  /** Adresse: /videos/<slug> */
  slug: string;
  /** Für den Seitentitel im Browser-Tab */
  fuer: string;
  eyebrow: string;
  titelVorn: string;
  titelKursiv: string;
  titelHinten: string;
  lead: string;
  videos: MappenVideo[];
}

/** Überschriften über den Videogruppen, Reihenfolge = Reihenfolge auf
    der Seite */
export const mappenGruppen: { art: MappenVideo['art']; titel: string }[] = [
  { art: 'Recruiting', titel: 'Recruiting' },
  { art: 'Kundengewinnung', titel: 'Kundengewinnung' },
];

/** Kontaktblock am Ende jeder Mappe */
export const mappenKontakt = {
  eyebrow: 'Ihr Ansprechpartner',
  titel: 'Fragen zu den Videos? Rufen Sie mich einfach an.',
  name: 'Iwo Sawicki',
  rolle: 'Inhaber Stolz Marketing',
};

export const videoMappen: VideoMappe[] = [
  {
    /* Für Lulay (06.10.2026). Iwo schickt den Link per Mail. Erst die
       drei Recruiting-Videos, dann zwei für die Kundengewinnung. Die
       Zahlen bei SAAN und DMK sind dieselben wie auf der
       Social-Media-Seite (geliefert von Iwo). */
    slug: 'lulay',
    fuer: 'Lulay',
    eyebrow: 'Für Lulay zusammengestellt',
    titelVorn: 'Ein paar ',
    titelKursiv: 'Videos',
    titelHinten: ' aus unserer Arbeit.',
    lead: 'Für Recruiting und Kundengewinnung, gedreht direkt in den Betrieben. Klicken Sie auf ein Video, es startet mit Ton.',
    videos: [
      {
        datei: 'SAAN-RecruitingAD-02.mp4',
        kunde: 'SAAN Wasserstrahltechnik',
        art: 'Recruiting',
        text: 'Monteure gesucht, gedreht auf echten Baustellen. Die Kampagne brachte zehn neue Mitarbeiter in wenigen Wochen.',
      },
      {
        datei: 'S-Tech-Recruiting-Hook-3.mp4',
        kunde: 'S-Tech Fahrzeugbau',
        art: 'Recruiting',
        text: 'Monteure und Mechatroniker für Kran-Sonderaufbauten. Der Einstieg sagt sofort, wer gesucht wird.',
      },
      {
        datei: 'S-Tech-Recruiting-Hook-2.mp4',
        kunde: 'S-Tech Fahrzeugbau',
        art: 'Recruiting',
        text: 'Zweiter Einstieg für dieselbe Kampagne: Werkstatt, Fahrzeuge und das Team nach Feierabend.',
      },
      {
        datei: 'raumKonzept-Kundengewinnung-FugenlosesBad.mp4',
        kunde: 'raum.Konzept',
        art: 'Kundengewinnung',
        text: 'Fugenlose Bäder, gezeigt an echten Projekten. Gemacht für Anfragen von Privatkunden.',
      },
      {
        datei: 'DMK-SM-01-5Handwerker_1.mp4',
        kunde: 'DMK Bau',
        art: 'Kundengewinnung',
        text: 'Sanierung aus einer Hand, gedreht auf der Baustelle. Über 100.000 Aufrufe in den ersten Wochen.',
      },
    ],
  },
];
