/* Website-Check — Texte und Einstellungen.

   Gemessen wird mit der PageSpeed-Insights-API von Google (Lighthouse).
   Der Aufruf geht direkt aus dem Browser des Besuchers an Google; es gibt
   keinen eigenen Server dazwischen, und wir speichern die geprüfte
   Adresse nicht. Der Schlüssel kommt beim Build aus der Umgebung
   (PUBLIC_PAGESPEED_KEY, in Dokploy als Build-Argument hinterlegt) und
   ist in der Google Cloud auf stolz-marketing.de beschränkt. */

export const hero = {
  titelVorn: 'Wie schnell ist Ihre Webseite ',
  titelKursiv: 'auf dem Handy',
  titelHinten: '?',
  lead: 'Adresse eingeben, prüfen lassen. In unter einer Minute sehen Sie Ladezeit, technische Fehler und die Grundlagen für Google — gemessen mit demselben Werkzeug, das Google selbst verwendet. Kostenlos, ohne Anmeldung.',
};

/** Die vier Lighthouse-Kategorien, in der Reihenfolge der Anzeige.
    `schluessel` ist die ID in der API-Antwort. */
export const kategorien = [
  { schluessel: 'performance', name: 'Ladezeit', zusatz: 'Wie schnell die Seite steht' },
  { schluessel: 'seo', name: 'Google-Grundlagen', zusatz: 'Was Google zum Einordnen braucht' },
  {
    schluessel: 'best-practices',
    name: 'Technik',
    zusatz: 'Sicherheit und saubere Umsetzung',
  },
  {
    schluessel: 'accessibility',
    name: 'Barrierefreiheit',
    zusatz: 'Lesbar und bedienbar für alle',
  },
] as const;

/** Messwerte aus dem Leistungsteil. Angezeigt wird der Wert, den Google
    selbst formatiert (deutsches Zahlenformat über locale=de). */
export const messwerte = [
  {
    schluessel: 'largest-contentful-paint',
    name: 'Hauptinhalt sichtbar',
    erklaerung: 'Bis das größte Bild oder der größte Textblock steht.',
  },
  {
    schluessel: 'first-contentful-paint',
    name: 'Erster Inhalt sichtbar',
    erklaerung: 'Bis überhaupt etwas auf dem Bildschirm erscheint.',
  },
  {
    schluessel: 'total-blocking-time',
    name: 'Blockierzeit',
    erklaerung: 'Wie lange die Seite auf Tippen nicht reagiert.',
  },
  {
    schluessel: 'cumulative-layout-shift',
    name: 'Verrutschen beim Laden',
    erklaerung: 'Wie stark Inhalte springen, während die Seite lädt.',
  },
  {
    schluessel: 'speed-index',
    name: 'Geschwindigkeitsindex',
    erklaerung: 'Wie schnell sich die Seite insgesamt aufbaut.',
  },
] as const;

/** Zwischenschritte, die während der Messung durchlaufen. Sie sind
    Beschäftigung fürs Auge, keine echte Fortschrittsanzeige — die API
    meldet keinen Zwischenstand. */
export const ladeTexte = [
  'Seite wird aufgerufen …',
  'Ladezeit wird gemessen …',
  'Technik wird geprüft …',
  'Google-Grundlagen werden geprüft …',
  'Ergebnis wird ausgewertet …',
];

export const fehlerTexte = {
  adresse: 'Das sieht nicht nach einer Webadresse aus. Bitte so eingeben: meinbetrieb.de',
  nichtErreichbar:
    'Die Seite ließ sich nicht laden. Stimmt die Adresse? Ist die Seite gerade erreichbar?',
  zuViele: 'Gerade laufen zu viele Prüfungen gleichzeitig. Bitte in einer Minute noch einmal.',
  zeitUeberschritten:
    'Die Messung hat zu lange gedauert. Das passiert bei sehr langsamen Seiten — bitte noch einmal versuchen.',
  allgemein: 'Die Messung hat nicht geklappt. Bitte noch einmal versuchen.',
};

export const ergebnisTexte = {
  verbesserungenTitel: 'Was die Seite am meisten bremst',
  verbesserungenLeer: 'Google findet an der Ladezeit nichts Wesentliches zu verbessern.',
  befundeTitel: 'Was Google außerdem bemängelt',
  hinweis:
    'Jede Messung ist eine Momentaufnahme. Zwei Prüfungen hintereinander können ein paar Punkte auseinanderliegen.',
  ctaTitel: 'Sollen wir uns das ansehen?',
  ctaText:
    'Wir gehen das Ergebnis mit Ihnen durch und sagen Ihnen, was davon Sie Anfragen kostet und was nur Kosmetik ist.',
  ctaKnopf: 'Kostenloses Erstgespräch',
};

export const faqs = [
  {
    frage: 'Was wird hier geprüft?',
    antwort:
      'Ihre Seite läuft durch Google Lighthouse, dasselbe Werkzeug, das auch in Google PageSpeed Insights steckt. Gemessen werden Ladezeit, technische Sauberkeit, Barrierefreiheit und die Grundlagen, die Google braucht, um Ihre Seite einzuordnen.',
  },
  {
    frage: 'Warum ist das Ergebnis auf dem Handy schlechter als am Computer?',
    antwort:
      'Google simuliert für die Handy-Messung ein Mittelklasse-Smartphone mit gedrosselter Mobilfunkverbindung. Das ist strenger als das WLAN im Büro — aber so sind viele Ihrer Kunden unterwegs, und Google bewertet Seiten für die Suche vorrangig in der Handy-Ansicht.',
  },
  {
    frage: 'Warum schwankt das Ergebnis zwischen zwei Prüfungen?',
    antwort:
      'Jede Messung ist eine Momentaufnahme. Auslastung des Servers, eingebundene Dienste von Drittanbietern, Werbung — schon zwei Prüfungen direkt hintereinander können ein paar Punkte auseinanderliegen. Aussagekräftig sind große Abstände, nicht einzelne Punkte.',
  },
  {
    frage: 'Brauche ich überall 100 Punkte?',
    antwort:
      'Nein. Eine Seite, die klar sagt, was Sie machen, und auf dem Handy in zwei Klicks eine Anfrage erlaubt, bringt mehr Aufträge als eine leere Seite mit 100 Punkten. Die Werte zeigen, wo es technisch hakt — nicht, ob Ihre Seite überzeugt. Das sehen wir uns im Erstgespräch an.',
  },
  {
    frage: 'Was passiert mit der Adresse, die ich eingebe?',
    antwort:
      'Sie geht zur Messung direkt aus Ihrem Browser an Google. Wir speichern sie nicht und sehen nicht, wer welche Seite geprüft hat. Einzelheiten stehen in der Datenschutzerklärung.',
  },
];

export const abschluss = {
  titelVorn: 'Die Werte zeigen, ',
  titelMarker: 'wo es hakt',
  titelMitte: '. Wir sagen Ihnen, ',
  titelKursiv: 'was davon zählt',
  titelHinten: '.',
  lead: 'Eine Stunde, kostenlos, ohne Verpflichtung. Wir gehen das Ergebnis mit Ihnen durch und sagen Ihnen, was Sie Anfragen kostet und was nur Kosmetik ist — auch wenn Sie es am Ende selbst beheben.',
};
