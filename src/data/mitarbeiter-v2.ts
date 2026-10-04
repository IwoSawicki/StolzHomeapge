/* Meistermagnet v2 — Texte und Daten für /mitarbeiter-gewinnen-v2.

   ENTWURF (03.10.2026, nur dev, noindex). Grundlage ist Iwos Briefing
   „meistermagnet-v2-briefing.md" (Claude Cowork, nach einer Analyse von
   persox.de, hioffice.com und mission-connect.de). Texte aus dem
   Briefing, kein Satz von dort wörtlich übernommen.

   Platzhalter in doppelten geschweiften Klammern — z. B.
   „{{60}} Tagen" — sind Werte, die nur Iwo liefern kann. Sie bleiben
   sichtbar stehen (Komponente PlatzhalterText) und sind zusätzlich in
   docs/TODO-IWO.md gesammelt. Nichts davon durch erfundene Werte
   ersetzen.

   Bewusst anders als auf der bisherigen Seite: hier steht ein Ort —
   „Bergstraße und Rhein-Neckar" (laut Briefing festgelegt). Auf
   /mitarbeiter-gewinnen gilt weiter „kein Ortsname" (Entscheidung
   08.09.); vor dem Live-Gang klären. */

export const REGION = 'Bergstraße und Rhein-Neckar';
export const CTA = 'Kostenloses Erstgespräch';

/* --- S1 · Hero ------------------------------------------------------------ */

/* Drei Fassungen der Überschrift; auf dev umschaltbar mit ?h=a|b|c */
export const heroTitel = {
  a: ['Fachkräfte einstellen.', 'Aus Ihrer Region. Mit Garantie.'],
  b: ['Bewerbungen von Fachkräften, die zu Ihnen passen.', 'Mit Garantie.'],
  c: ['Gelernte Leute für Ihren Betrieb.', 'Mit Garantie.'],
} as const;

export type HeroVariante = keyof typeof heroTitel;

export const hero = {
  eyebrow: 'Personal fürs Handwerk',
  fuer: 'Für',
  lead: 'Wir zeigen Ihren Betrieb, wie er wirklich ist, und bringen ihn zu den Handwerkern im Umkreis, die einen Job haben – aber wechseln würden. Sie führen nur noch die Gespräche.',
  zweiterLink: 'So funktioniert es',
  vertrauen: ['5,0 Sterne aus 20 Bewertungen', 'Über 50 Projekte seit 2022', REGION],
  kartenLabel: 'So kommt es bei Ihnen an',
  /* Bildunterschrift zum Foto im Hero */
  fotoText: 'Drehtag bei SAAN Wasserstrahltechnik',
  selbstProbieren: 'Selbst ausprobieren',
};

export const garantieBadge = ['Schriftliche Bewerbungs-Garantie', 'Vorher ehrliche Einschätzung Ihrer Stelle'];

/* Die Antworten, die das Handy im Hero antippt — Fragen aus dem
   Bewerbungs-Simulator (src/data/bewerbungs-simulator.ts). Der Beruf
   richtet sich nach dem Gewerk aus ?g=. */
export const heroAntworten = {
  erfahrung: '5 bis 10 Jahre',
  fuehrerschein: 'Ja',
  start: 'In 1 bis 3 Monaten',
  weg: 'Bis 15 km',
};

/** Beispiel-Kandidat — klar als Beispiel gekennzeichnet */
export const kandidat = {
  stufe: 'Geselle',
  erfahrung: '5–10 Jahre Erfahrung',
  fuehrerschein: 'Führerschein B',
  anfahrt: 'Wohnt 14 km entfernt',
  start: 'Kann in 1–3 Monaten anfangen',
  status: 'Passt – Rückruf vereinbaren',
  beispiel: 'Beispiel',
};

/* --- S3 · Was Sie bekommen ------------------------------------------------- */

export const bekommen = {
  eyebrow: 'Was Sie bekommen',
  titel: 'Vorsortierte Bewerbungen aus dem Umkreis – und Material, das Ihnen gehört.',
  karten: [
    {
      titel: 'Bewerbungen aus dem Umkreis',
      text: 'Wir erreichen Fachkräfte im Umkreis von rund 30 Kilometern, die gerade nicht suchen – abends auf dem Handy, wo sie ohnehin unterwegs sind.',
    },
    {
      titel: 'Nur, was passt',
      text: 'Bewerben dauert unter einer Minute, ohne Anschreiben. Vier kurze Fragen sortieren vorher aus – wer nicht passt, bekommt gleich eine freundliche Absage.',
    },
    {
      titel: 'Material, das Ihnen gehört',
      text: 'Fotos und Videos vom Drehtag bleiben bei Ihnen – für Karriereseite, Social Media und jede Stelle, die danach kommt.',
    },
  ],
  filterStufen: ['Erfahrung', 'Führerschein', 'Wohnort', 'Verfügbarkeit'],
  radiusLabel: 'rund 30 km',
  betriebLabel: 'Ihr Betrieb',
  drehtagAlt: 'Drehtag bei DMK Bau: Kamera und Team auf der Baustelle',
};

/* --- S4 · Garantie ---------------------------------------------------------- */

export const garantie = {
  eyebrow: 'Die Garantie',
  titel: 'Wir sagen vorher, ob es klappt. Und dann stehen wir dafür ein.',
  absaetze: [
    'Bevor irgendetwas läuft, prüfen wir Ihre Stelle: welche Qualifikation, welcher Umkreis, wie viele passende Leute es dort gibt.',
    'Halten wir sie für machbar, bekommen Sie das schriftlich – als Garantie. Halten wir sie nicht für machbar, sagen wir Ihnen das im Erstgespräch. Bevor Sie einen Euro ausgeben.',
  ],
  kopfzeile: 'Stolz Marketing · Meistermagnet',
  kartenTitel: 'Bewerbungs-Garantie',
  kernsatz:
    'Kommen innerhalb von {{60}} Tagen nach Kampagnenstart nicht mindestens {{X}} vorqualifizierte Bewerbungen, arbeiten wir ohne Agenturhonorar weiter, bis sie da sind.',
  unterschrift: 'Iwo Sawicki',
  unterschriftRolle: 'Inhaber',
  stempel: 'Schriftlich',
  ctaZeile: 'Inklusive Einschätzung, ob wir Ihre Stelle garantieren können.',
};

/* Entwurf B der Garantie (04.10.2026): die Zusage als Versprechen statt
   als Dokument — dunkelgrünes Band, Siegel, große Überschrift, drei Schritte.
   Auf dev mit ?garantie=b. Werte wie in Entwurf A als Platzhalter. */
export const garantieB = {
  eyebrow: 'Die Bewerbungs-Garantie',
  /* Richtung nach mission-connect.de („Wir garantieren, was andere nur
     versprechen"), aber in eigenen Worten — laut Briefing steht kein Satz
     von dort auf der Seite */
  titelVorn: 'Andere versprechen Bewerbungen. ',
  titelHinten: 'Wir unterschreiben sie.',
  zusage: '{{X}} vorqualifizierte Bewerbungen in {{60}} Tagen nach Kampagnenstart. Schriftlich, im Vertrag.',
  siegel: 'Schriftliche Bewerbungs-Garantie · Stolz Marketing · ',
  siegelMitte: 'Garantiert',
  schritte: [
    {
      titel: 'Vorher prüfen',
      text: 'Bevor irgendetwas läuft, schauen wir uns Ihre Stelle an. Halten wir sie nicht für machbar, sagen wir es im Erstgespräch – bevor Sie einen Euro ausgeben.',
    },
    {
      titel: 'Schriftlich festhalten',
      text: 'Was wir zusagen, steht im Vertrag: wie viele Bewerbungen, in welcher Zeit, unter welchen Bedingungen. Schwarz auf weiß.',
    },
    {
      titel: 'Dafür einstehen',
      text: 'Kommen die Bewerbungen nicht, arbeiten wir ohne Agenturhonorar weiter, bis sie da sind.',
    },
  ],
  ctaZeile: 'Im Erstgespräch sagen wir Ihnen, ob wir Ihre Stelle garantieren können.',
};

/* --- S5 · Ihr Aufwand -------------------------------------------------------- */

export const aufwand = {
  eyebrow: 'Ihr Aufwand',
  titel: 'Ein Gespräch, ein Drehtag. Den Rest machen wir.',
  lead: 'Dunkel markiert ist, wofür wir Sie brauchen. Alles dazwischen läuft, während Sie arbeiten.',
  zaehler: 'Ihre Zeit insgesamt: ca. {{X}} Stunden',
  schritte: [
    {
      wann: 'Woche 1',
      was: 'Erstgespräch',
      wer: 'Sie + Iwo, ca. {{1}} Std.',
      sie: true,
      text: 'Welche Stelle, welcher Mensch dazu passt – und warum Ihre besten Leute damals gekommen und geblieben sind.',
    },
    {
      wann: 'Woche 1–2',
      was: 'Positionierung',
      wer: 'wir',
      sie: false,
      text: 'Wir schreiben auf, wofür Ihr Betrieb als Arbeitgeber steht, und machen daraus die Kampagne. Sie geben frei.',
    },
    {
      wann: 'Woche 2–3',
      was: 'Drehtag',
      wer: 'Sie + Team, {{½–1}} Tag',
      sie: true,
      text: 'Wir filmen Arbeit, Team und Betrieb so, wie es bei Ihnen wirklich ist.',
    },
    {
      wann: 'Woche {{3–4}}',
      was: 'Kampagne live',
      wer: 'wir',
      sie: false,
      text: 'Anzeigen auf Instagram, Facebook und TikTok, dazu Karriereseite und Handy-Formular.',
    },
    {
      wann: 'ab dann',
      was: 'Gespräche',
      wer: 'Sie',
      sie: true,
      text: 'Bei Ihnen kommen nur vorsortierte Bewerbungen an. Sie führen die Kennenlerngespräche.',
    },
  ],
};

/* --- S6 · Gewerke ------------------------------------------------------------- */

export interface GewerkV2 {
  /** Wert in ?g= — nur diese Schlüssel werden angenommen */
  schluessel: string;
  name: string;
  /** Beruf im Simulator und auf der Kandidaten-Karte */
  beruf: string;
  rollen: string[];
  wechselgruende: string[];
  /** Schwierigkeitsstufe 1–4 wie in S8 */
  stufe: 1 | 2 | 3 | 4;
  /** passendes Preset im Vakanzkostenrechner (src/data/vakanzkostenrechner.ts) */
  vakanz: string | null;
}

/* TODO Iwo prüfen: Rollen, Wechselgründe und Stufen sind ein Entwurf. */
export const gewerkeV2: GewerkV2[] = [
  {
    schluessel: 'maler',
    name: 'Maler',
    beruf: 'Maler und Lackierer',
    rollen: ['Maler- und Lackierergeselle', 'Vorarbeiter', 'Auszubildende'],
    wechselgruende: ['Zeitdruck, der saubere Arbeit verhindert', 'Wechselnde Baustellen mit langen Anfahrten', 'Kein Wort, wenn etwas gut geworden ist'],
    stufe: 3,
    vakanz: 'maler',
  },
  {
    schluessel: 'elektro',
    name: 'Elektro & PV',
    beruf: 'Elektroniker',
    rollen: ['Elektroniker für Energie- und Gebäudetechnik', 'PV-Monteur', 'Obermonteur'],
    wechselgruende: ['Dauernd Montage weit weg von zu Hause', 'Veraltetes Messgerät und Werkzeug', 'Keine Weiterbildung, obwohl die Technik sich ändert'],
    stufe: 4,
    vakanz: 'elektro',
  },
  {
    schluessel: 'shk',
    name: 'SHK & Heizung',
    beruf: 'Anlagenmechaniker SHK',
    rollen: ['Anlagenmechaniker SHK', 'Kundendiensttechniker', 'Bauleiter'],
    wechselgruende: ['Notdienst ohne klare Regel', 'Wärmepumpe ja – Schulung nein', 'Kein eigenes Fahrzeug'],
    stufe: 4,
    vakanz: 'shk',
  },
  {
    schluessel: 'sanierung',
    name: 'Sanierung & Bad',
    beruf: 'Fliesenleger',
    rollen: ['Fliesenleger', 'Trockenbauer', 'Allrounder Sanierung'],
    wechselgruende: ['Jeden Tag ein anderes Gewerk ohne Einarbeitung', 'Pfusch vom Vorgänger ausbaden', 'Keine Planbarkeit, weil Material fehlt'],
    stufe: 3,
    vakanz: 'sanierung',
  },
  {
    schluessel: 'boden',
    name: 'Bodenleger',
    beruf: 'Bodenleger',
    rollen: ['Bodenleger', 'Parkettleger', 'Helfer mit Erfahrung'],
    wechselgruende: ['Knie und Rücken, weil Hilfsmittel fehlen', 'Akkorddruck statt sauberer Arbeit', 'Lange Fahrten zu Großbaustellen'],
    stufe: 3,
    vakanz: 'sanierung',
  },
  {
    schluessel: 'tischler',
    name: 'Tischler & Schreiner',
    beruf: 'Tischler',
    rollen: ['Tischlergeselle', 'Monteur Innenausbau', 'CNC-Fachkraft'],
    wechselgruende: ['Nur Montage, nie mehr in der Werkstatt', 'Alte Maschinen', 'Keine Abwechslung zwischen Serie und Einzelstück'],
    stufe: 3,
    vakanz: 'tischler',
  },
  {
    schluessel: 'galabau',
    name: 'GaLaBau',
    beruf: 'Landschaftsgärtner',
    rollen: ['Landschaftsgärtner', 'Vorarbeiter', 'Maschinenführer'],
    wechselgruende: ['Saisonarbeit ohne Planung im Winter', 'Maschinen, die ständig ausfallen', 'Kein fester Trupp'],
    stufe: 2,
    vakanz: null,
  },
  {
    schluessel: 'dach',
    name: 'Dach & Zimmerei',
    beruf: 'Dachdecker',
    rollen: ['Dachdeckergeselle', 'Zimmerer', 'Vorarbeiter'],
    wechselgruende: ['Sicherheit auf dem Dach, die nur auf dem Papier steht', 'Wetter entscheidet, Lohn schwankt', 'Kein Ausblick auf Meister oder Vorarbeiter'],
    stufe: 4,
    vakanz: 'dach',
  },
  {
    schluessel: 'industrie',
    name: 'Industrie- & Anlagenbau',
    beruf: 'Industriemechaniker',
    rollen: ['Industriemechaniker', 'Schweißer', 'Servicetechniker'],
    wechselgruende: ['Wochenlang auf Montage', 'Schichtpläne, die sich ständig ändern', 'Keine Verantwortung für eigene Projekte'],
    stufe: 4,
    vakanz: 'industrie',
  },
  {
    schluessel: 'produktion',
    name: 'Produktion',
    beruf: 'Maschinen- und Anlagenführer',
    rollen: ['Maschinen- und Anlagenführer', 'Produktionshelfer', 'Schichtleiter'],
    wechselgruende: ['Wechselschicht ohne Mitsprache', 'Lautes, unaufgeräumtes Umfeld', 'Keine Chance aufzusteigen'],
    stufe: 2,
    vakanz: 'produktion',
  },
];

export const GEWERK_V2_STANDARD = 'shk';

export const gewerkKopf = {
  eyebrow: 'Ihr Gewerk',
  titel: 'Für Ihr Gewerk',
  lead: 'Ein Maler wechselt aus anderen Gründen als ein Anlagenmechaniker. Genau dort setzt die Kampagne an.',
  rollen: 'Typische Rollen',
  gruende: 'Warum hier gewechselt wird',
  stufe: 'Schwierigkeit',
  karte: 'So käme eine Bewerbung an',
};

/* --- S7 · Warum Handwerker wechseln ------------------------------------------ */

export const wechsel = {
  eyebrow: 'Warum Handwerker wechseln',
  titel: 'Die besten Handwerker schreiben keine Bewerbungen',
  /* Davor steht der erste Absatz der Ausgangslage der bisherigen Seite */
  uebergang:
    'Wenn man sie fragt, warum sie gewechselt sind, sagen fast alle: mehr Geld. Das ist der Grund, den man sagen kann. Der echte steht meistens darunter.',
  aufkleber: 'Mehr Geld',
  schluss: 'Genau damit werben wir: mit dem, was bei Ihnen wirklich anders ist.',
};

/* --- S8 · Wie schwer ist Ihre Stelle? ------------------------------------------ */

export const schwierigkeit = {
  eyebrow: 'Ehrlich vorab',
  titel: 'Nicht jede Stelle ist gleich schwer',
  intro:
    'Eine Bürokraft findet man mit einer guten Anzeige. Einen Anlagenmechaniker mit Führerschein und Montagebereitschaft nicht – je kleiner die Zielgruppe, desto genauer muss die Ansprache sitzen.',
  reglerLabel: 'Wie schwer ist die Stelle zu besetzen?',
  drehtag: ['optional', 'empfohlen', 'Voraussetzung', 'Voraussetzung'],
  drehtagLabel: 'Drehtag',
  aufwandLabel: 'Aufwand',
  schluss: 'Wo Ihre Stelle liegt, sagen wir Ihnen im Erstgespräch – vorher, nicht in der Rechnung.',
};

/* --- S9 · Mini-Rechner ------------------------------------------------------------ */

export const miniRechner = {
  eyebrow: 'Vakanzkosten',
  titel: 'Was eine offene Stelle jeden Tag kostet',
  lead: 'Jeder Tag ohne Fachkraft ist Arbeit, die liegen bleibt, und Umsatz, der nicht entsteht. Die Rechnung dahinter ist einfach – und bewusst vorsichtig.',
  gewerk: 'Gewerk',
  stellen: 'Offene Stellen',
  monate: 'Seit wie vielen Monaten',
  proTag: 'je Arbeitstag',
  umsatz: 'Entgangener Umsatz',
  schaden: 'Schaden am Betriebsergebnis',
  konservativ: 'Wir rechnen bewusst konservativ.',
  browser: 'Ihre Zahlen bleiben in Ihrem Browser.',
  ausfuehrlich: 'Ausführlich rechnen',
};

/* --- S10 · Vergleich: zusätzliche Zeile ---------------------------------------------- */

export const vergleichAbsicherung = {
  zeile: 'Absicherung',
  werte: ['keine', 'meist Nachbesetzungsklausel', 'schriftliche Bewerbungs-Garantie'],
};

/* --- S11 · Aus der Praxis ------------------------------------------------------------ */

/* Fallkarten nur mit Freigabe. Solange false, bleibt der Block weg —
   keine ausgedachten Fälle. */
export const FAELLE_FREIGEGEBEN = false;

export const referenzen = {
  eyebrow: 'Referenzen',
  titel: 'Aus der Praxis',
  dmkArt: 'Projekt',
  dmkTitel: 'DMK Bau',
  dmkText: 'Kampagnen für Kunden- und Mitarbeitergewinnung – gedreht auf der Baustelle, mit dem eigenen Team vor der Kamera.',
  dmkLink: 'Projekt ansehen',
};

/* --- S12 · Ansprechpartner -------------------------------------------------------- */

export const ansprechpartner = {
  eyebrow: 'Ihr Ansprechpartner',
  name: 'Iwo Sawicki',
  rolle: 'Inhaber · Stolz Marketing',
  text: 'Ich komme bei Ihnen vorbei, schaue mir den Betrieb an und sage Ihnen ehrlich, ob wir Ihre Stelle besetzen können. Den Drehtag macht unser Team, die Kampagne betreuen wir laufend – Ihr Ansprechpartner bleibt derselbe.',
  direkt: 'Direkt anrufen',
  team: 'Mit im Team',
};

/* --- S13 · FAQ: Ergänzungen --------------------------------------------------------- */

export const faqZusatz = [
  {
    frage: 'Wie funktioniert die Garantie genau?',
    antwort: '{{Antwort, nach Iwos Entscheidung zur Garantie}}',
  },
  {
    frage: 'Was passiert, wenn Sie meine Stelle nicht garantieren können?',
    antwort:
      'Dann sagen wir Ihnen das im Erstgespräch. Manchmal liegt es am Umkreis, manchmal an der Qualifikation. Oft gibt es einen Weg – etwa eine angrenzende Rolle oder einen größeren Radius. Wenn nicht, sparen Sie sich das Geld.',
  },
  {
    frage: 'Muss ich mich langfristig binden?',
    antwort: '{{Laufzeit und Kündbarkeit – Iwo}}',
  },
];

/* --- S14 · Erstgespräch ---------------------------------------------------------------- */

export const erstgespraech = {
  eyebrow: 'Erstgespräch',
  titel: 'Reden wir über Ihre Stelle.',
  text: '20 Minuten am Telefon oder bei Ihnen im Betrieb. Wir sprechen über die Stelle und sagen Ihnen danach, ob und wie wir sie besetzen können – mit Garantie oder ehrlich ohne.',
  anrufen: 'Lieber direkt anrufen?',
  stellePlatzhalter: 'z. B. Anlagenmechaniker SHK',
};

/* --- Leiste unten auf dem Handy ------------------------------------------------------------ */

export const leiste = {
  anrufen: 'Anrufen',
};
