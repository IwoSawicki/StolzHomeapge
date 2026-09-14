/* Texte der Seite /ueber-uns.

   ┌──────────────────────────────────────────────────────────────────┐
   │  Alles hier steht so, wie Iwo es erzählt hat (14.09.2026).       │
   │  Nichts ist ausgeschmückt, keine Jahreszahl ist hergeleitet:     │
   │  wo er ein Alter genannt hat und kein Jahr, steht das Alter.     │
   │  Offene Punkte am Ende der Datei.                                │
   └──────────────────────────────────────────────────────────────────┘ */

export const hero = {
  eyebrow: 'Über uns',
  titelVorn: 'Ich baue Webseiten, seit ich ',
  titelAkzent: 'fünfzehn',
  titelHinten: ' bin. Fotografiert habe ich schon ein Jahr später.',
  lead: 'Stolz Marketing gibt es seit Januar 2022. Ich führe den Betrieb als Einzelunternehmen an der Bergstraße — wer hier anruft, spricht mit mir.',
  bildAlt: 'Iwo Sawicki, Inhaber von Stolz Marketing',
};

/* --- Zeitstrahl ---------------------------------------------------------- */

export interface Station {
  /** Jahr oder Alter — steht als Marke über dem Eintrag */
  marke: string;
  titel: string;
  text: string;
}

export const zeitstrahlKopf = {
  eyebrow: 'Der Weg',
  titelVorn: 'Wie aus einem Hobby ein ',
  titelAkzent: 'Betrieb',
  titelHinten: ' wurde',
  lead: 'Kein Quereinstieg und keine Agenturkarriere. Ich habe früh angefangen und bin dabei geblieben.',
};

export const stationen: Station[] = [
  {
    marke: '2018 · mit 15',
    titel: 'Die erste Webseite',
    text: 'Angefangen habe ich aus Interesse, nicht als Geschäft. Webseiten zu bauen war das, was ich nach der Schule gemacht habe.',
  },
  {
    marke: 'mit 16',
    titel: 'Die erste Kamera',
    text: 'Gekauft als Hobby. Ein paar Monate später kam über einen Zufall der erste bezahlte Auftrag: ein Restaurant.',
  },
  {
    marke: 'mit 16 bis 18',
    titel: 'Fachabitur Informatik',
    text: 'Abgeschlossen als Klassenbester. Danach habe ich ein Informatikstudium angefangen.',
  },
  {
    marke: 'Januar 2022 · mit 18½',
    titel: 'Stolz Marketing gegründet',
    text: 'Aus den Aufträgen nebenher wurde ein Betrieb. Seitdem baue ich ihn hauptberuflich auf, von der Bergstraße aus.',
  },
  {
    marke: 'heute',
    titel: 'Über 50 abgeschlossene Projekte',
    text: 'Der Schwerpunkt liegt inzwischen auf Handwerksbetrieben in der Region — dort sehen wir die besten Ergebnisse.',
  },
];

/* --- Webseite und Kamera ------------------------------------------------- */

export const handwerke = {
  eyebrow: 'Was ich mache',
  titelVorn: 'Webseite und Kamera, ',
  titelAkzent: 'aus einer Hand',
  titelHinten: '',
  lead: 'Beides habe ich nie getrennt angeboten. Es war von Anfang an dieselbe Arbeit.',
  bloecke: [
    {
      titel: 'Es fing mit Restaurants an',
      text: 'Ich habe die Webseite gebaut und die Teller selbst fotografiert. Wer beides aus einer Hand bekommt, muss nicht erklären, warum die Bilder nicht zur Seite passen — es gibt keine zwei Dienstleister, zwischen denen etwas verlorengeht.',
    },
    {
      titel: 'Zwei Talente, die zusammengehören',
      text: 'Das Technische lag mir schon in der Schule, das Auge für Bilder kam mit der ersten Kamera dazu. Eine Webseite ist zur Hälfte Technik und zur Hälfte das, was man darauf sieht.',
    },
    {
      titel: 'Rund 15.000 € Technik',
      text: 'Kameras, Objektive, Licht, Ton. Das steht hier, weil ich es selbst benutze — nicht, weil es gemietet wird, wenn ein Kunde etwas bestellt.',
    },
  ],
};

/* --- Warum Handwerk, und warum hier -------------------------------------- */

export const haltung = {
  eyebrow: 'Warum Handwerk',
  titelVorn: 'Weil wir dort die ',
  titelAkzent: 'besten Ergebnisse',
  titelHinten: ' sehen',
  bloecke: [
    {
      titel: 'Die Zahlen haben entschieden',
      text: 'Wir haben in verschiedenen Branchen gearbeitet. Im Handwerk kam am zuverlässigsten etwas dabei heraus — deshalb ist daraus der Schwerpunkt geworden und nicht umgekehrt.',
    },
    {
      titel: 'Und weil es mich interessiert',
      text: 'Ich gehe gerne auf Baustellen und in Werkstätten. Wer einen Drehtag im Betrieb macht, merkt schnell, ob das Interesse echt ist — und die Bilder sehen danach anders aus.',
    },
    {
      titel: 'Aus der Region, in der Region',
      text: 'Ich komme von hier und sitze seit der Gründung 2022 an der Bergstraße. Zu einem Betrieb im Umkreis fahre ich hin, statt eine Videokonferenz anzusetzen.',
    },
  ],
};

/* --- Team ---------------------------------------------------------------- */

export const teamKopf = {
  eyebrow: 'Das Team',
  titelVorn: 'Ich entscheide mit Ihnen, ',
  titelAkzent: 'umgesetzt wird es zu viert',
  titelHinten: '',
  lead: 'Wofür Ihr Betrieb steht, welche Aufträge Sie wollen und woran wir messen, ob es funktioniert — das besprechen Sie mit mir. Für Kamera, Schnitt und bezahlte Werbung arbeite ich fest mit drei Freelancern zusammen.',
};

/* --- Abschluss ----------------------------------------------------------- */

export const abschluss = {
  titelVorn: 'Wenn Sie wissen wollen, ob das zu Ihrem Betrieb passt: ',
  titelMarker: 'rufen Sie an',
  titelMitte: ' oder schreiben Sie kurz, worum es geht. Das ',
  titelKursiv: 'Erstgespräch ist kostenlos',
  titelHinten: '.',
  lead: 'Eine Stunde, ohne Verpflichtung. Danach wissen Sie, wie Sie in Ihrer Region dastehen — auch wenn Sie sich gegen uns entscheiden.',
};

/* ┌────────────────────────────────────────────────────────────────────┐
   │  Offen, bevor die Seite live geht:                                 │
   │                                                                     │
   │  1. Läuft das Informatikstudium noch? Der Text sagt nur, dass es   │
   │     angefangen wurde — das stimmt in jedem Fall, klingt aber        │
   │     ungenau, wenn jemand nachfragt.                                 │
   │  2. „Klassenbester" steht drin, weil Iwo es gesagt hat. Auf einer   │
   │     Seite für Handwerksmeister kann das auch nach hinten losgehen.  │
   │     Ein Satz weniger, und es ist raus.                              │
   │  3. Bilder: die Technik-Fotos und das Reel („POV: you build an      │
   │     agency") liegen noch nicht im Repo. Solange sie fehlen, steht   │
   │     an ihrer Stelle die schraffierte Platzhalterfläche.             │
   │  4. „Über 50 abgeschlossene Projekte" deckt sich mit dem „50+" in   │
   │     der Kopfzeile. Wenn die eine Zahl steigt, muss die andere mit.  │
   └────────────────────────────────────────────────────────────────────┘ */
