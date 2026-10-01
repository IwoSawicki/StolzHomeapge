/* SEO & KI-Sichtbarkeit — Texte und Daten.

   ENTWURF (01.10.2026). Iwo will SEO und die Sichtbarkeit in KI-Antworten
   als eigene Leistung ausbauen und dafür seine Keyword-Analysen zeigen.
   Bis zur Freigabe noindex, nicht in der Sitemap, im Footer ausgegraut.

   Alle Zahlen im Report-Auszug stammen aus Iwos Keyword-Analyse für einen
   Malerbetrieb an der Bergstraße (Stand 1. Oktober 2026, Datenbasis
   Google Keyword-Planer, Zeitraum September 2025 bis August 2026,
   Deutschland). Übernommen sind nur Marktdaten — Suchvolumen,
   Klickpreise, Wettbewerb — und die Seitenstruktur. Kundenname, Budget
   und Strategie des Kunden stehen bewusst nicht auf der Seite. */

export const hero = {
  eyebrow: 'SEO & KI-Sichtbarkeit',
  titelVorn: 'Gefunden werden, ',
  titelKursiv: 'ohne für jeden Klick zu zahlen',
  titelHinten: '.',
  lead: 'Anzeigen bringen Anfragen, solange Sie bezahlen. Eine Webseite, die bei Google und in KI-Antworten vorne steht, bringt sie weiter — auch wenn das Budget einmal pausiert. Wir bauen sie auf echten Suchdaten auf: was in Ihrer Region gesucht wird, wie oft und was ein Klick kostet.',
};

/* --- Unabhängig von Klickpreisen ---------------------------------------- */

export const klickpreise = {
  eyebrow: 'Warum SEO',
  titelVorn: 'Langfristig ',
  titelKursiv: 'unabhängig',
  titelHinten: ' von Klickpreisen',
  absaetze: [
    'Mit Anzeigen mieten Sie Sichtbarkeit. Jeder Klick kostet, und wenn das Budget stoppt, stoppen auch die Anfragen — am selben Tag.',
    'Eine Webseite, die zu den richtigen Suchbegriffen rankt, gehört Ihnen. Sie braucht Zeit, bis sie trägt, aber dann senkt sie die Kosten pro Anfrage dauerhaft. Am besten laufen beide zusammen: Anzeigen für sofort, SEO für später.',
  ],
  legendeAnzeigen: 'Anfragen über Anzeigen',
  legendeSeo: 'Anfragen über SEO',
  markeBudget: 'Budget pausiert',
  hinweis: 'Schematische Darstellung, keine Messwerte.',
};

/* --- Report-Auszug ------------------------------------------------------- */

export const analyse = {
  eyebrow: 'Aus einer echten Analyse',
  titelVorn: 'So sieht eine ',
  titelKursiv: 'Keyword-Analyse',
  titelHinten: ' bei uns aus',
  lead: 'Bevor wir eine Seite planen, prüfen wir jeden Suchbegriff rund um Ihre Leistungen: wie oft er gesucht wird, wie viele Betriebe dafür Anzeigen schalten und was ein Klick kostet. Hier ein Auszug aus der Analyse für einen Malerbetrieb an der Bergstraße.',
  quelle: 'Quelle: Google Keyword-Planer, September 2025 bis August 2026, Deutschland',
  kennzahlen: [
    { wert: '178', text: 'Suchbegriffe geprüft — bundesweit und für zehn Orte im Umkreis' },
    { wert: '42.600', text: 'Suchen im Monat rund um Fassade: Anstrich, Putz, Sanierung, Dämmung' },
    { wert: '1–8 €', text: 'kostet ein Klick auf eine Top-Anzeige zum Thema Fassade' },
  ],
  reiter: ['Klickpreise', 'Suchbegriffe', 'Seitenstruktur'],
};

/** Klickpreis-Spanne für die oberen Anzeigenplätze in Euro (unterer –
    oberer Bereich). `fassade` hebt das Kernthema des Beispiels hervor. */
export const klickpreisBalken = [
  { begriff: 'schimmel entfernen lassen', von: 3.56, bis: 13.21, fassade: false },
  { begriff: 'wasserschaden sanierung', von: 3.05, bis: 10.55, fassade: false },
  { begriff: 'fassadenanstrich firma', von: 1.85, bis: 7.98, fassade: true },
  { begriff: 'fassadenarbeiten', von: 1.51, bis: 6.65, fassade: true },
  { begriff: 'renovierung firma', von: 1.24, bis: 5.46, fassade: false },
  { begriff: 'maler mannheim', von: 1.56, bis: 4.46, fassade: false },
  { begriff: 'fassade sanieren', von: 1.08, bis: 4.28, fassade: true },
  { begriff: 'malerbetrieb', von: 1.15, bis: 4.12, fassade: false },
  { begriff: 'maler', von: 1.08, bis: 3.53, fassade: false },
  { begriff: 'fassade streichen lassen', von: 0.96, bis: 3.13, fassade: true },
  { begriff: 'fassade streichen', von: 0.18, bis: 2.44, fassade: true },
  { begriff: 'maler heppenheim', von: 0.64, bis: 1.66, fassade: false },
];

export const klickpreisLesebeispiel =
  'Lesebeispiel: Für „fassadenanstrich firma" bieten Wettbewerber bis knapp 8 € pro Klick, für „fassade streichen" nur bis 2,44 €. Wer zu den günstigen Begriffen über SEO gefunden wird, spart sich diese Klicks ganz.';

export type Empfehlung = 'Ads + SEO' | 'Ads' | 'SEO' | 'Ratgeber';

/** Auszug aus der Tabelle „Fassade — Anstrich & Renovierung".
    `stufe` steuert die Balkenanzeige für die Größenordnung (1–4).
    Lange Begriffe tragen ein weiches Trennzeichen (U+00AD) an der
    Wortfuge — auf dem Handy passen sie sonst nicht in ihre Spalte. */
export const suchbegriffe: {
  begriff: string;
  suchen: string;
  stufe: 1 | 2 | 3 | 4;
  wettbewerb: 'Gering' | 'Mittel' | 'Hoch';
  klickpreis: string;
  empfehlung: Empfehlung;
}[] = [
  { begriff: 'fassade streichen', suchen: '1.900', stufe: 3, wettbewerb: 'Mittel', klickpreis: '0,18 – 2,44 €', empfehlung: 'Ads + SEO' },
  { begriff: 'fassade streichen kosten', suchen: '1.600', stufe: 3, wettbewerb: 'Mittel', klickpreis: '0,69 – 2,21 €', empfehlung: 'Ratgeber' },
  { begriff: 'fassaden­gestaltung', suchen: '1.300', stufe: 3, wettbewerb: 'Mittel', klickpreis: '0,61 – 1,89 €', empfehlung: 'SEO' },
  { begriff: 'hausfassade streichen', suchen: '1.000', stufe: 3, wettbewerb: 'Mittel', klickpreis: '0,50 – 2,20 €', empfehlung: 'Ads + SEO' },
  { begriff: 'fassaden­anstrich', suchen: '720', stufe: 2, wettbewerb: 'Mittel', klickpreis: '1,07 – 3,38 €', empfehlung: 'Ads + SEO' },
  { begriff: 'fassaden­arbeiten', suchen: '480', stufe: 2, wettbewerb: 'Gering', klickpreis: '1,51 – 6,65 €', empfehlung: 'Ads + SEO' },
  { begriff: 'fassade sanieren', suchen: '320', stufe: 2, wettbewerb: 'Hoch', klickpreis: '1,08 – 4,28 €', empfehlung: 'Ads + SEO' },
  { begriff: 'fassade streichen lassen', suchen: '90', stufe: 1, wettbewerb: 'Hoch', klickpreis: '0,96 – 3,13 €', empfehlung: 'Ads' },
];

export const empfehlungErklaerung: Record<Empfehlung, string> = {
  'Ads + SEO': 'sofort mit Anzeigen, dauerhaft über die Seite',
  Ads: 'kaufbereite Suche — Anzeige lohnt sich',
  SEO: 'viele Suchen, eher Inspiration — über Inhalte holen',
  Ratgeber: 'Kosten-Frage — mit einem Ratgeber auf der Seite abholen',
};

/** Seitenstruktur, abgeleitet aus den Keyword-Clustern. Stufe 1 ist der
    schlanke Start, 2 und 3 wachsen nach, wenn erste Daten da sind. */
export const seitenstruktur: {
  seite: string;
  begriff?: string;
  stufe: 1 | 2 | 3;
  unter?: { seite: string; begriff?: string; stufe: 1 | 2 | 3 }[];
}[] = [
  { seite: 'Startseite', begriff: 'maler heppenheim', stufe: 1 },
  {
    seite: 'Fassade',
    begriff: 'fassade streichen · 1.900',
    stufe: 1,
    unter: [
      { seite: 'Fassadensanierung', begriff: 'fassadensanierung · 1.300', stufe: 1 },
      { seite: 'Dämmung & WDVS', begriff: 'fassadendämmung · 8.100', stufe: 2 },
      { seite: 'Ratgeber: Was kostet ein Fassadenanstrich?', begriff: 'fassade streichen kosten · 1.600', stufe: 2 },
    ],
  },
  {
    seite: 'Innenräume',
    begriff: 'malerarbeiten · 3.600',
    stufe: 1,
    unter: [
      { seite: 'Tapezieren', begriff: 'tapezieren · 5.400', stufe: 2 },
      { seite: 'Wandgestaltung', begriff: 'wandgestaltung · 4.400', stufe: 2 },
    ],
  },
  {
    seite: 'Trockenbau',
    begriff: 'trockenbau · 22.200',
    stufe: 1,
  },
  {
    seite: 'Sanierung',
    begriff: 'renovierung, altbausanierung',
    stufe: 1,
    unter: [{ seite: 'Schimmelsanierung', begriff: 'schimmelsanierung · 880', stufe: 2 }],
  },
  {
    seite: 'Einsatzgebiet',
    stufe: 2,
    unter: [{ seite: 'Ortsseiten für die Orte, in denen der Betrieb wirklich arbeitet', stufe: 3 }],
  },
];

export const strukturHinweis =
  'Die Zahl hinter dem Suchbegriff ist das monatliche Suchvolumen in Deutschland. Stufe 1 geht mit der Seite live, Stufe 2 und 3 kommen dazu, sobald die ersten Daten zeigen, was trägt.';

/* --- Vorgehen ------------------------------------------------------------ */

export const vorgehen = {
  eyebrow: 'Vorgehen',
  titelVorn: 'Was wir ',
  titelKursiv: 'konkret',
  titelHinten: ' machen',
  schritte: [
    {
      titel: 'Keyword-Analyse',
      text: 'Jeder Suchbegriff rund um Ihre Leistungen, mit Suchvolumen, Wettbewerb und Klickpreis — für Deutschland und die Orte, in denen Sie arbeiten.',
    },
    {
      titel: 'Eine Seite pro Leistung',
      text: 'Statt einer Sammelseite „Leistungen" bekommt jedes Thema mit Suchvolumen eine eigene Seite, mit eigenem Titel und eigener Überschrift.',
    },
    {
      titel: 'Ratgeber für Kosten-Fragen',
      text: 'Viele suchen zuerst nach dem Preis: „fassade streichen kosten". Ein ehrlicher Ratgeber holt sie in genau dieser Phase ab — bevor sie einen Betrieb anrufen.',
    },
    {
      titel: 'Ortsseiten mit Substanz',
      text: 'Nur für Orte, in denen Sie wirklich arbeiten, mit eigener Referenz und Anfahrt. Reine Kopien mit ausgetauschtem Ortsnamen wertet Google ab.',
    },
    {
      titel: 'Google-Profil & Bewertungen',
      text: 'Bei lokalen Suchen zeigt Google zuerst die Karte. Gepflegtes Profil, Fotos von Baustellen und echte Bewertungen entscheiden, wer dort oben steht.',
    },
    {
      titel: 'Technik, die Google lesen kann',
      text: 'Schnelle Ladezeit auf dem Handy, saubere Seitentitel, strukturierte Firmendaten und Weiterleitungen, damit beim Umzug keine Rankings verloren gehen.',
    },
  ],
};

/* --- KI-Suche ------------------------------------------------------------- */

export const ki = {
  eyebrow: 'KI-Suche',
  titelVorn: 'Auch ',
  titelKursiv: 'ChatGPT & Co.',
  titelHinten: ' empfehlen Betriebe',
  absaetze: [
    'Immer mehr Menschen fragen nicht mehr Google, sondern eine KI: „Welcher Maler an der Bergstraße macht Fassaden?" Auch Google selbst setzt KI-Übersichten über die Suchergebnisse.',
    'Die Antworten stammen aus dem Netz. Genannt wird, wer klare Antworten auf echte Fragen gibt, dessen Firmendaten überall gleich sind und über den andere gut sprechen. Genau das bauen wir mit auf.',
  ],
  punkte: [
    'Ratgeber und FAQ, die echte Fragen Ihrer Kunden direkt beantworten',
    'Strukturierte Daten, damit Maschinen Leistungen, Ort und Bewertungen lesen können',
    'Gleiche Firmendaten auf Webseite, Google-Profil und Verzeichnissen',
  ],
  frage: 'Welcher Malerbetrieb an der Bergstraße macht Fassaden?',
  antwortVorn: 'An der Bergstraße bietet zum Beispiel ',
  antwortName: 'Ihr Betrieb',
  antwortHinten: ' Fassadenanstrich, Putz und Dämmung aus einer Hand an — mit eigener Fassaden-Seite, Referenzen aus der Region und guten Bewertungen.',
  beispielHinweis: 'Beispiel, wie eine KI-Antwort aussehen kann — keine Zusage.',
};

/* --- FAQ ------------------------------------------------------------------- */

export const faqs = [
  {
    frage: 'Wie lange dauert es, bis SEO wirkt?',
    antwort:
      'Monate, nicht Wochen. Eine neue Seite muss von Google erst gefunden, gelesen und eingeordnet werden. Deshalb starten wir oft parallel mit Anzeigen: Die bringen sofort Anfragen und zeigen nebenbei, welche Suchbegriffe wirklich zu Aufträgen werden — genau die bauen wir dann über die Seite aus.',
  },
  {
    frage: 'Brauche ich dann gar keine Anzeigen mehr?',
    antwort:
      'Kommt auf Ihr Ziel an. Für Begriffe, bei denen Sie organisch vorne stehen, können Sie das Budget zurückfahren. Für neue Leistungen, saisonale Spitzen oder Begriffe mit viel Wettbewerb bleiben Anzeigen oft sinnvoll. Wichtig ist, dass Sie nicht mehr davon abhängig sind.',
  },
  {
    frage: 'Können Sie Platz 1 garantieren?',
    antwort:
      'Nein — und wer das verspricht, weiß nicht, wie Google funktioniert. Was wir zusagen: eine Seite, die nach den Suchbegriffen aufgebaut ist, die in Ihrer Region wirklich gesucht werden, und Auswertungen, an denen Sie sehen, was sich bewegt.',
  },
  {
    frage: 'Was hat KI mit meiner Webseite zu tun?',
    antwort:
      'KI-Assistenten und die KI-Übersichten von Google bauen ihre Antworten aus Inhalten im Netz. Eine Seite mit klaren Antworten, sauberen Firmendaten und guten Bewertungen hat die besten Chancen, dort genannt zu werden. Das ist kein Zusatzprojekt, sondern gute SEO von Anfang an.',
  },
];

export const abschluss = {
  titelVorn: 'Wir zeigen Ihnen, ',
  titelMarker: 'wonach gesucht wird',
  titelMitte: ' — bevor Sie ',
  titelKursiv: 'einen Euro',
  titelHinten: ' ausgeben.',
  lead: 'Eine Stunde, kostenlos, ohne Verpflichtung. Wir schauen gemeinsam, wie Ihre Seite heute bei Google dasteht und wo die größten Chancen in Ihrer Region liegen.',
};
