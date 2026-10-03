/* Inhalte der Seite „Mitarbeiter gewinnen“ – Texte 1:1 aus dem Handoff
   BUILDmitarbeitergewinnen.md (Stand 02.09.2026). Nichts gekürzt, nichts
   umformuliert, nichts ergänzt.

   Verbindlich für diese Seite: kein Ortsname (Entscheidung 08.09.).
   Regionalität entsteht über „in Ihrer Region“, „die anderen im Ort“ und
   „im Umkreis“. */

/* --- Sektion 2 · Die Ausgangslage --------------------------------------- */

export const ausgangslageAbsaetze = [
  'Sie haben einen Job. Sie sind nicht unzufrieden genug, um zu kündigen, aber unzufrieden genug, um zuzuhören — mit den Wegen, mit der Planung, mit dem Chef oder damit, wie gearbeitet wird. Auf Jobportalen schauen diese Leute nicht. Sie sind abends auf dem Handy. Genau dort erreichen wir sie.',
  'Wenn man sie fragt, warum sie gewechselt sind, sagen fast alle: woanders gab es mehr Geld. Das ist der Grund, den man sagen kann. Der echte steht meistens darunter.',
];

export interface Wechselgrund {
  /** fett gesetzter erster Teil */
  titel: string;
  text: string;
}

export const wechselgruende: Wechselgrund[] = [
  {
    titel: 'Der Weg zur Baustelle.',
    text: 'Dreißig Kilometer statt siebzig sind bei fünf Tagen die Woche mehrere Lebensstunden.',
  },
  {
    titel: 'Der Chef.',
    text: 'Man verlässt selten den Betrieb. Man verlässt den Chef.',
  },
  {
    titel: 'Planbarkeit.',
    text: 'Morgens wissen, wo es hingeht. Material ist da. Überstunden werden gefragt, nicht angekündigt.',
  },
  {
    titel: 'Werkzeug und Fahrzeug.',
    text: 'Ein gepflegter Bulli und ordentliche Maschinen sind jeden Tag ein Zeichen.',
  },
  {
    titel: 'Das Team.',
    text: 'Wer im Trupp arbeitet, ist mit den Kollegen länger wach als mit der Familie.',
  },
  {
    titel: 'Sauber arbeiten dürfen.',
    text: 'Gute Handwerker leiden, wenn zu billig kalkuliert wurde und sie pfuschen müssen.',
  },
];

/* --- Sektion 3 · Das System --------------------------------------------- */

export const systemSchritte = [
  {
    titel: 'Meistermagnet-Positionierung',
    text: 'Wir finden zuerst heraus, was Ihren Betrieb ausmacht: die Kultur, wie bei Ihnen gearbeitet wird, welche Rolle Sie besetzen wollen und welcher Mensch dazu passt. Dazu bringen wir mit, warum Handwerker ihren Betrieb überhaupt wechseln — und das ist meistens nicht das Geld.',
    merksatz: 'Erst verstehen, dann werben.',
    hervorgehoben: false,
  },
  {
    titel: 'Betriebs-Einblick',
    text: 'Ein Drehtag bei Ihnen. Wir filmen den Job, das Team und den Betrieb so, wie er wirklich ist — nicht irgendeinen Handwerksbetrieb, sondern Ihren. Genau das zieht die Leute an, die zu Ihnen passen, und hält die anderen fern.',
    merksatz: 'Einfach mal zeigen, wie’s ist.',
    hervorgehoben: true,
  },
  {
    titel: 'Zielgenaue Ansprache',
    text: 'Anzeigen bei den Leuten, die Sie wollen — dort, wo sie abends unterwegs sind, nicht auf Stellenbörsen. Dazu eine Karriereseite und ein Bewerbungsformular, das unpassende Bewerbungen aussortiert, bevor sie bei Ihnen landen.',
    merksatz: 'Weniger Bewerbungen. Die richtigen.',
    hervorgehoben: false,
  },
];

/* --- Sektion 3b · Vorauswahl -------------------------------------------
   Vertieft Schritt 3 („ein Bewerbungsformular, das unpassende Bewerbungen
   aussortiert"). Neu, nicht aus der Vorlage — Aufbau nach einem Beispiel,
   das Iwo geliefert hat (Ablaufgrafik links, Text rechts). Die Aussagen
   stützen sich auf das, was die Seite schon sagt: Leistungsumfang
   („unter einer Minute, ohne Anschreiben, ohne Lebenslauf", „Vorauswahl
   nach Erfahrung, Führerschein, Wohnort und Verfügbarkeit") und FAQ. */

export const vorauswahl = {
  eyebrow: 'Vorauswahl',
  titelVorn: 'Aussortiert wird, ',
  titelKursiv: 'bevor Sie zum Hörer greifen',
  titelHinten: '.',
  absaetze: [
    'Ein voller Posteingang hilft Ihnen nicht, wenn die Hälfte nicht passt. Deshalb beantwortet jeder Bewerber zuerst ein paar kurze Fragen — auf dem Handy, ohne Anschreiben und ohne Lebenslauf.',
    'Gefragt wird nach dem, was für Sie zählt: Erfahrung, Führerschein, Wohnort, Verfügbarkeit. Wer ein Muss-Kriterium nicht erfüllt, bekommt gleich eine freundliche Absage. Bei Ihnen landen nur die, mit denen sich ein Gespräch lohnt.',
  ],
  punkte: [
    'In unter einer Minute auf dem Handy ausgefüllt',
    'Ohne Anschreiben, ohne Lebenslauf',
    'Die Fragen legen wir mit Ihnen fest',
  ],
  /* Verlinkung zum Bewerbungs-Simulator (Wunsch Iwo, 02.10.2026) */
  simulatorKnopf: 'Bewerbung ausprobieren',
  /* Beispielfragen in der Grafik. Du-Form, weil Bewerberformulare im
     Handwerk so angesprochen werden — die Seite selbst siezt. */
  /* Kopfzeile der Formular-Karten */
  marke: 'Schnellbewerbung',
  frage1: 'Hast du einen Führerschein Klasse B?',
  /* Zweig-Beschriftung auf dem Handy, wo die Wege untereinander stehen
     und „Ja"/„Nein" allein nicht mehr zeigen, worauf sie antworten */
  zweigJa: 'Führerschein: ja',
  zweigNein: 'Führerschein: nein',
  absageTitel: 'Schade!',
  absageText: 'Für diese Stelle ist der Führerschein Pflicht. Danke trotzdem für dein Interesse.',
  frage2: 'Wie viele Jahre Berufserfahrung hast du?',
  antworten2: ['unter 3 Jahre', '3 bis 5 Jahre', '5 bis 10 Jahre', 'über 10 Jahre'],
  /** welche Antwort im Bild gewählt ist (Index in antworten2) */
  gewaehlt2: 2,
};

export const systemNachsatz =
  'Die Reihenfolge ist kein Vorschlag. Einen Drehtag macht man einmal — wer ohne Schritt 1 filmt, bekommt schöne Bilder und kein Argument.';

/* --- Sektion 4 · Leistungsumfang ---------------------------------------- */

export const leistungsumfang = [
  {
    titel: 'Meistermagnet-Positionierung',
    punkte: [
      'Schriftliche Arbeitgeber-Positionierung Ihres Betriebs',
      'Die Kampagnenbotschaft, formuliert aus Ihren eigenen Antworten',
      'Beschreibung der Rolle: Qualifikation, Radius, Lebenssituation',
      'Einschätzung, wie schwer diese Stelle zu besetzen ist — bevor irgendetwas läuft',
    ],
  },
  {
    titel: 'Betriebs-Einblick',
    punkte: [
      'Ein Drehtag bei Ihnen im Betrieb',
      'Fotos und Videos von Ihrem Betrieb, Ihrem Team und Ihrem Arbeitsalltag',
      'Aufnahmen mit Kamera und im Handy-Stil — beides wird später gegeneinander getestet',
    ],
  },
  {
    titel: 'Zielgenaue Ansprache',
    punkte: [
      'Kampagne auf Instagram, Facebook und TikTok im Umkreis von rund 30 Kilometern',
      'Karriereseite als Landeplatz',
      'Bewerbungsformular fürs Handy — unter einer Minute, ohne Anschreiben, ohne Lebenslauf',
      'Automatische Vorauswahl nach Erfahrung, Führerschein, Wohnort und Verfügbarkeit',
      'Laufende Nachschärfung der Vorauswahl, wenn die Passung nicht stimmt',
    ],
  },
];

/* --- Sektion 5 · Vergleich ----------------------------------------------- */

export interface VergleichWeg {
  name: string;
  /** dritte Spalte: hervorgehoben, aber nicht flächig in Akzentfarbe */
  hervorgehoben?: boolean;
  werte: string[];
}

/** Zeilenbeschriftungen in der Reihenfolge der Tabelle */
export const vergleichZeilen = [
  'Wen es erreicht',
  'Womit geworben wird',
  'Was es kostet',
  'Was bleibt',
  'Aufwand für Sie',
];

export const vergleichWege: VergleichWeg[] = [
  {
    name: 'Stellenanzeige selbst schalten',
    werte: [
      'nur die, die gerade aktiv suchen',
      'Gehalt und Benefits',
      'Anzeigengebühr, oft ohne Ergebnis',
      'nichts',
      'Anzeige schreiben, Bewerbungen sichten',
    ],
  },
  {
    name: 'Personalvermittler',
    werte: [
      'Kandidaten aus einer fremden Datenbank',
      '—',
      'üblicherweise 20 bis 30 Prozent des Jahresgehalts, pro Kopf',
      'nichts — beim nächsten Mal von vorn',
      'Auswahlgespräche',
    ],
  },
  {
    name: 'Meistermagnet',
    hervorgehoben: true,
    werte: [
      'die, die einen Job haben, aber wechseln würden',
      'Alltag, Team, Wege, Qualitätsanspruch',
      'fester Monatsbetrag, unabhängig von der Anzahl',
      'Ihr eigenes Material und Ihre eigene Sichtbarkeit',
      'ein Drehtag, dann Kennenlerngespräche',
    ],
  },
];

/* --- Sektion 6 · Für welche Stellen das funktioniert --------------------- */

export interface Stufe {
  titel: string;
  text: string;
}

export const stufen: Stufe[] = [
  {
    titel: 'Kaufmännisch und Büro',
    text: 'Geht auch ohne Drehtag. Hier reicht oft eine gute Anzeige und die richtige Zielgruppe.',
  },
  {
    titel: 'Angelernte Kräfte',
    text: 'Ein Drehtag hilft deutlich. Wer den Arbeitsplatz zeigen kann, bekommt Leute, die wissen, worauf sie sich einlassen.',
  },
  {
    titel: 'Technische Nischen',
    text: 'Ein Drehtag ist hier praktisch Voraussetzung, weil die Zielgruppe klein ist und jede Ansprache sitzen muss.',
  },
  {
    titel: 'Gelernte Fachkräfte mit Zusatzanforderungen',
    text: 'Führerschein, Montagebereitschaft, bestimmte Qualifikation. Die anspruchsvollste Stufe. Ohne echtes Material vom Betrieb funktioniert das nicht.',
  },
];

/* --- Sektion 8 · FAQ ------------------------------------------------------ */

export const faqs = [
  {
    frage: 'Das sind doch am Ende alles nur Hüpfer.',
    antwort:
      'Wenn man mit Geld wirbt: ja. Wer über das Gehalt kommt, geht auch über das Gehalt. Deshalb werben wir nicht damit. Wir fragen Sie im ersten Gespräch, warum Ihre besten Leute damals gekommen und geblieben sind — und genau damit werben wir dann.',
  },
  {
    frage: 'Wir haben es schon über Stellenanzeigen versucht. Da kam nichts.',
    antwort:
      'Das liegt selten an der Anzeige. Wer einen Job hat, schaut nicht auf Stellenbörsen. Die Leute, die Sie meinen, erreichen Sie nur dort, wo sie abends ohnehin unterwegs sind — und nur mit etwas, das nach Ihrem Betrieb aussieht und nicht nach einer Anzeige.',
  },
  {
    frage: 'Muss ich wirklich einen Drehtag machen?',
    antwort:
      'Kommt auf die Stelle an. Für eine Bürokraft geht es meistens auch ohne. Für eine gelernte Fachkraft praktisch nicht — dann werben Sie wieder nur mit Worten, und die kann jeder schreiben. Wo Ihre Stelle liegt, sagen wir Ihnen im Erstgespräch.',
  },
  {
    frage: 'Führen Sie die Bewerbungsgespräche für mich?',
    antwort:
      'Nein. Wir sortieren automatisch vor, damit bei Ihnen nur ankommt, was passt — nach Erfahrung, Führerschein, Wohnort und Verfügbarkeit. Die Gespräche führen Sie selbst. Dafür kostet das System auch einen Bruchteil einer Vermittlung, und am Ende gehören Ihnen das Material und die Sichtbarkeit.',
  },
  {
    frage: 'Was, wenn zu viele unpassende Bewerbungen kommen?',
    antwort:
      'Dann schärfen wir die Vorauswahl im laufenden Betrieb nach. Dabei wird eine Anfrage teurer — das ist gewollt. Ziel sind nicht viele Bewerbungen, sondern wenige, mit denen ein Gespräch sich lohnt.',
  },
  {
    frage: 'Was kostet das?',
    antwort:
      'Das hängt davon ab, wie schwer die Stelle zu besetzen ist und wie viel Werbebudget dafür nötig ist. Beides steht nach dem Erstgespräch fest.',
  },
];

/* --- Sektion 9 · Abschluss ----------------------------------------------- */

/* Der Handoff schreibt „die Suche nach einem Dienstleister, dem man
   vertraut". Auf Wunsch von Iwo steht dort jetzt „der richtigen Agentur" —
   derselbe Anfang wie auf /kunden-gewinnen, damit beide Abschlüsse als Paar
   lesbar sind. Der Rest des Satzes ist unverändert. */
export const abschluss = {
  titelVorn: 'Wir wissen zu gut, dass die Suche nach der ',
  titelMarker: 'richtigen Agentur',
  titelMitte: ' mindestens genauso schwer ist wie die Suche nach ',
  titelKursiv: 'den richtigen Leuten',
  titelHinten: '.',
  lead: 'Im Erstgespräch finden wir gemeinsam heraus, ob wir Ihre Aufgabe annehmen können.',
};

/* --- Bewerber-Cockpit ---------------------------------------------------
   ENTWURF (03.10.2026, nur dev). Iwo will damit werben, dass wir eine
   eigene Software für den Bewerberprozess haben, und sie in den
   kommenden Monaten als Kunden-Dashboard bauen — zuerst für den
   Meistermagneten, später auch für Leads aus Google Ads und SEO.
   ACHTUNG vor dem Live-Gang: Die Texte sagen „unsere eigene Software".
   Live erst, wenn es sie gibt — sonst wäre das Werbung mit etwas, das
   noch nicht existiert.

   Alle Bewerber sind ausgedacht (Vorname, Initial) und als
   Beispieldaten gekennzeichnet. */

export const cockpit = {
  eyebrow: 'Eigene Software',
  titelVorn: 'Jeder Bewerber ',
  titelKursiv: 'auf einen Blick',
  titelHinten: '.',
  lead: 'Bewerbungen landen bei uns nicht in einem Postfach, sondern in unserem eigenen Bewerber-Cockpit: vorqualifiziert, nach Stand sortiert und mit allen Antworten aus dem Formular. Sie sehen jederzeit, wer neu ist, mit wem ein Gespräch ansteht und wer zur Probearbeit kommt.',
  punkte: [
    'Bewerbungen aus Instagram und Facebook laufen direkt ein',
    'Wer ein Muss-Kriterium nicht erfüllt, bekommt automatisch eine Absage',
    'Jeder Bewerber mit Stand, Antworten und Eingang — ohne Excel-Liste',
  ],
  hinweisMaus: 'Ziehen Sie einen Bewerber in die nächste Spalte — oder klicken Sie ihn an.',
  hinweisTouch: 'Tippen Sie einen Bewerber an, um ihn weiterzuschieben.',
  demo: 'Demo mit Beispieldaten',
  app: 'Bewerber-Cockpit',
  betrieb: 'Ihr Betrieb',
  stelle: 'Geselle (m/w/d) · Vollzeit',
  aussortiert: 'Automatisch abgesagt',
  kennzahlen: {
    gesamt: 'Bewerbungen',
    gesamtZusatz: 'letzte 7 Tage',
    passend: 'Passen zu Ihren Kriterien',
    abgesagt: 'Automatisch abgesagt',
    abgesagtZusatz: 'ohne Ihren Aufwand',
    eingestellt: 'Eingestellt',
  },
};

export const cockpitSpalten = [
  { id: 'neu', titel: 'Neu' },
  { id: 'kontaktiert', titel: 'Kontaktiert' },
  { id: 'gespraech', titel: 'Gespräch' },
  { id: 'probe', titel: 'Probearbeit' },
  { id: 'eingestellt', titel: 'Eingestellt' },
] as const;

export type CockpitSpalte = (typeof cockpitSpalten)[number]['id'];

export interface CockpitBewerber {
  id: string;
  name: string;
  beruf: string;
  erfahrung: string;
  fuehrerschein: boolean;
  anfahrt: string;
  start: string;
  quelle: 'Instagram' | 'Facebook';
  eingang: string;
  spalte: CockpitSpalte;
  /** Grund der automatischen Absage — dann steht der Bewerber nicht im Board */
  absage?: string;
}

export const cockpitBewerber: CockpitBewerber[] = [
  { id: 'b1', name: 'Lukas M.', beruf: 'Anlagenmechaniker SHK', erfahrung: '5–10 Jahre', fuehrerschein: true, anfahrt: '12 km', start: 'Sofort', quelle: 'Instagram', eingang: 'vor 2 Std.', spalte: 'neu' },
  { id: 'b2', name: 'Jonas W.', beruf: 'Anlagenmechaniker SHK', erfahrung: '3–5 Jahre', fuehrerschein: true, anfahrt: '8 km', start: 'In 1–3 Monaten', quelle: 'Facebook', eingang: 'vor 5 Std.', spalte: 'neu' },
  { id: 'b3', name: 'Kevin S.', beruf: 'Elektroniker', erfahrung: 'über 10 Jahre', fuehrerschein: true, anfahrt: '21 km', start: 'Sofort', quelle: 'Instagram', eingang: 'gestern', spalte: 'kontaktiert' },
  { id: 'b4', name: 'Marco B.', beruf: 'Anlagenmechaniker SHK', erfahrung: '5–10 Jahre', fuehrerschein: true, anfahrt: '15 km', start: 'Sofort', quelle: 'Instagram', eingang: 'vor 2 Tagen', spalte: 'gespraech' },
  { id: 'b5', name: 'Daniel K.', beruf: 'Anlagenmechaniker SHK', erfahrung: '3–5 Jahre', fuehrerschein: true, anfahrt: '6 km', start: 'In 1–3 Monaten', quelle: 'Facebook', eingang: 'vor 3 Tagen', spalte: 'gespraech' },
  { id: 'b6', name: 'Tim R.', beruf: 'Elektroniker', erfahrung: '5–10 Jahre', fuehrerschein: true, anfahrt: '18 km', start: 'Sofort', quelle: 'Instagram', eingang: 'vor 5 Tagen', spalte: 'probe' },
  { id: 'b7', name: 'Patrick H.', beruf: 'Anlagenmechaniker SHK', erfahrung: 'über 10 Jahre', fuehrerschein: true, anfahrt: '10 km', start: 'Sofort', quelle: 'Facebook', eingang: 'vor 6 Tagen', spalte: 'eingestellt' },
  { id: 'a1', name: 'Sven L.', beruf: 'Anlagenmechaniker SHK', erfahrung: 'unter 3 Jahre', fuehrerschein: false, anfahrt: '9 km', start: 'Sofort', quelle: 'Instagram', eingang: 'gestern', spalte: 'neu', absage: 'Kein Führerschein Klasse B' },
  { id: 'a2', name: 'Florian G.', beruf: 'Anderer Beruf', erfahrung: '3–5 Jahre', fuehrerschein: true, anfahrt: '64 km', start: 'Später', quelle: 'Facebook', eingang: 'vor 4 Tagen', spalte: 'neu', absage: 'Anfahrt über 30 km' },
];

/* Kommen während der Demo herein, sobald das Cockpit zu sehen ist: erst
   eine passende Bewerbung, dann eine, die automatisch abgesagt wird. */
export const cockpitNachschub: CockpitBewerber[] = [
  { id: 'n1', name: 'Niklas F.', beruf: 'Anlagenmechaniker SHK', erfahrung: '5–10 Jahre', fuehrerschein: true, anfahrt: '14 km', start: 'Sofort', quelle: 'Instagram', eingang: 'gerade eben', spalte: 'neu' },
  { id: 'n2', name: 'Dennis A.', beruf: 'Elektroniker', erfahrung: '3–5 Jahre', fuehrerschein: false, anfahrt: '11 km', start: 'Sofort', quelle: 'Facebook', eingang: 'gerade eben', spalte: 'neu', absage: 'Kein Führerschein Klasse B' },
];
