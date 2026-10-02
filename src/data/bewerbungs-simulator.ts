/* Bewerbungs-Simulator — Texte, Fragen und Rückruf.

   Landingpage für Anzeigen (Idee Iwo, 01.10.2026): Der Betriebsinhaber
   klickt sich selbst durch eine Bewerbung, wie wir sie für seine Stellen
   bauen — als wäre er der Geselle, den er sucht. Am Ende sieht er, was
   bei ihm ankommen würde, und kann sich zurückrufen lassen.

   Im Simulator wird nichts gesendet. Erst das Rückruf-Formular am Ende
   ist echt und läuft über Web3Forms wie alle anderen Formulare.

   Die Aussagen stützen sich auf die Meistermagnet-Seite: „unter einer
   Minute, ohne Anschreiben, ohne Lebenslauf" und „Vorauswahl nach
   Erfahrung, Führerschein, Wohnort und Verfügbarkeit". Die Zeit am Ende
   wird gemessen, nicht behauptet. */

export const hero = {
  eyebrow: 'Bewerbungs-Simulator',
  titelVorn: 'Bewerben Sie sich in ',
  titelKursiv: '60 Sekunden',
  titelHinten: '.',
  lead: 'So fühlt sich eine Bewerbung an, wie wir sie für Ihre offenen Stellen bauen: auf dem Handy, ohne Anschreiben, ohne Lebenslauf. Probieren Sie es selbst aus — als wären Sie der Geselle, den Sie gerade suchen.',
  punkte: ['Dauert unter einer Minute', 'Im Simulator wird nichts gesendet', 'Am Ende sehen Sie, was bei Ihnen ankäme'],
};

/** Die Stellenanzeige im Simulator — ein ausgedachter Betrieb. */
export const anzeige = {
  betrieb: 'Ihr Betrieb',
  stelle: 'Geselle (m/w/d) in Vollzeit',
  vorteile: ['Fester Ansprechpartner', 'Moderne Fahrzeuge', 'Arbeit in der Region'],
  knopf: 'Jetzt in 60 Sekunden bewerben',
  hinweis: 'Ohne Anschreiben · ohne Lebenslauf',
};

export interface Frage {
  schluessel: string;
  frage: string;
  /** Bezeichnung in der Bewerbungs-Übersicht am Ende */
  feld: string;
  antworten: { text: string; /** führt zur Absage */ absage?: boolean }[];
}

/* Reihenfolge = Reihenfolge im Simulator. Die Führerschein-Frage ist das
   Muss-Kriterium: Wer „Nein" wählt, sieht die Absage — so wird die
   Vorauswahl erlebbar. */
export const fragen: Frage[] = [
  {
    schluessel: 'beruf',
    frage: 'Welchen Beruf hast du gelernt?',
    feld: 'Beruf',
    antworten: [
      { text: 'Anlagenmechaniker SHK' },
      { text: 'Elektroniker' },
      { text: 'Maler und Lackierer' },
      { text: 'Anderer Handwerksberuf' },
    ],
  },
  {
    schluessel: 'erfahrung',
    frage: 'Wie viele Jahre Berufserfahrung hast du?',
    feld: 'Erfahrung',
    antworten: [
      { text: 'unter 3 Jahre' },
      { text: '3 bis 5 Jahre' },
      { text: '5 bis 10 Jahre' },
      { text: 'über 10 Jahre' },
    ],
  },
  {
    schluessel: 'fuehrerschein',
    frage: 'Hast du einen Führerschein Klasse B?',
    feld: 'Führerschein B',
    antworten: [{ text: 'Ja' }, { text: 'Nein', absage: true }],
  },
  {
    schluessel: 'start',
    frage: 'Ab wann könntest du anfangen?',
    feld: 'Start',
    antworten: [{ text: 'Sofort' }, { text: 'In 1 bis 3 Monaten' }, { text: 'Später' }],
  },
  {
    schluessel: 'weg',
    frage: 'Wie weit wohnst du vom Betrieb entfernt?',
    feld: 'Anfahrt',
    antworten: [{ text: 'Bis 15 km' }, { text: '15 bis 30 km' }, { text: 'Weiter weg' }],
  },
];

export const absage = {
  titel: 'Schade!',
  text: 'Für diese Stelle ist der Führerschein Pflicht. Danke trotzdem für dein Interesse.',
  erklaerung:
    'So sortiert das Formular aus, bevor es bei Ihnen klingelt: Wer ein Muss-Kriterium nicht erfüllt, bekommt gleich eine freundliche Absage.',
  zurueck: 'Anders antworten',
};

export const kontakt = {
  frage: 'Wie erreichen wir dich?',
  name: 'Max Mustermann',
  telefon: '0151 2345678',
  hinweis: 'Im Simulator vorausgefüllt — gesendet wird nichts.',
  knopf: 'Bewerbung absenden',
};

export const fertig = {
  titel: 'Geschafft!',
  textVorn: 'Deine Bewerbung ist da. Du hast ',
  textHinten: ' gebraucht.',
  nochmal: 'Nochmal von vorn',
};

/* Rechts bzw. darunter: was beim Betrieb ankommt, und der Rückruf. */
export const ankunft = {
  eyebrow: 'Das landet bei Ihnen',
  titel: 'Neue Bewerbung',
  passt: 'Passt zu Ihren Kriterien',
  leer: 'Klicken Sie sich links durch — hier sehen Sie live, was bei Ihnen ankommt.',
  leerMobil: 'Klicken Sie sich oben durch — hier sehen Sie, was bei Ihnen ankommt.',
};

export const rueckruf = {
  titelVorn: 'Und jetzt ',
  titelKursiv: 'für Ihren Betrieb',
  titelHinten: '.',
  lead: 'Genau so bekommen Ihre offenen Stellen Bewerbungen — vorsortiert, aufs Handy, in unter einer Minute. Hinterlassen Sie Name und Nummer, wir rufen Sie zurück.',
  knopf: 'Rückruf anfordern',
};

export const warum = {
  eyebrow: 'Warum das funktioniert',
  titelVorn: 'Gute Leute bewerben sich ',
  titelKursiv: 'nicht gern',
  titelHinten: '',
  punkte: [
    {
      titel: 'Kein Anschreiben, kein Lebenslauf',
      text: 'Wer gerade auf der Baustelle steht, schreibt keine Bewerbung. Ein paar Fragen auf dem Handy beantwortet er in der Pause.',
    },
    {
      titel: 'Vorauswahl nach Ihren Kriterien',
      text: 'Erfahrung, Führerschein, Wohnort, Verfügbarkeit — wer nicht passt, bekommt gleich eine freundliche Absage. Bei Ihnen landen nur die, mit denen sich ein Gespräch lohnt.',
    },
    {
      titel: 'Teil des Meistermagneten',
      text: 'Das Formular ist der letzte Schritt. Davor stehen ein Drehtag in Ihrem Betrieb und Anzeigen bei den Leuten, die Sie wollen.',
    },
  ],
  link: 'Mehr zum Meistermagneten',
};
