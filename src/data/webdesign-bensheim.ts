/* Inhalte der Landingpage /webdesign-bensheim.

   Die Seite hat einen anderen Auftrag als die beiden Leistungsseiten: dort
   kommt jemand an, der uns schon kennt. Hier kommt jemand über eine
   Google-Suche, will eine Webseite und vergleicht gerade drei bis fünf
   Agenturen. Deshalb steht zuerst, was er gesucht hat — und erst danach
   das, was er noch nicht wusste.

   Bewusst KEIN Branchenfilter: eine Anfrage aus einer Kanzlei oder Praxis
   ist ein warmer Lead und wird angenommen (Entscheidung Iwo). Das Handwerk
   steht deshalb als Kompetenzbeleg auf der Seite, nicht als Hürde.

   Zur Formulierung „Platz 1": eine Position bei Google kann niemand
   zusichern, und ein Versprechen wäre nach § 5 UWG angreifbar. Die Seite
   nennt Platz 1 deshalb überall als Ziel und Arbeitsweise, nie als Zusage —
   und sagt das an einer Stelle auch ausdrücklich. */

/** Drei Projekte aus der Region. Alle drei sind echte Kunden; die Orte
    stimmen. Kein Projekt bekommt hier eine Zahl, die nicht belegt ist. */
export const regionaleProjekte = [
  {
    kunde: 'Zehner Immobilien',
    ort: 'Bensheim',
    text: 'Neue Website mit klarer Positionierung für mehr Verkäufer-Anfragen.',
    domain: 'zehner-immobilien.de',
    href: '/projekte',
  },
  {
    kunde: 'Umzüge Bergstraße',
    ort: 'Bergstraße',
    text: 'Unser eigener Betrieb — und damit der Fall, an dem wir zuerst ausprobiert haben, was wir heute für andere bauen.',
    domain: 'umzuege-bergstrasse.de',
    href: '/projekte',
  },
  {
    kunde: 'HePa Baut',
    ort: 'Weinheim',
    text: 'Eine eigene Startseite je Leistung, dazu über 150 Ortsseiten im Umkreis — jede auf ihre Stadt ausgerichtet.',
    domain: 'hepa-baut.de',
    href: '/projekte/hepa-baut',
  },
];

/** Die Leiter in der Sichtbarkeits-Sektion. Bewusst ohne Firmennamen in den
    unteren Plätzen — es geht um die Position, nicht um Wettbewerber. */
export const rangliste = [
  { platz: 1, label: 'Hier will Ihr Betrieb stehen', ziel: true },
  { platz: 2, label: 'Wird noch angeklickt', ziel: false },
  { platz: 3, label: 'Wird noch angeklickt', ziel: false },
  { platz: 4, label: 'Wird selten angeklickt', ziel: false },
  { platz: 5, label: 'Wird selten angeklickt', ziel: false },
];

/** Die drei Hebel, mit denen wir an der Position arbeiten. */
export const sichtbarkeitHebel = [
  {
    titel: 'Die Seite selbst',
    text: 'Aufbau, Texte und Technik so, dass Google versteht, worum es geht und für wen. Eine eigene Seite je Leistung statt einer Seite, die alles gleichzeitig sein will.',
  },
  {
    titel: 'Der Ort',
    text: 'Wer „in Bensheim" sucht, bekommt anderes zu sehen als jemand aus Heppenheim. Dafür braucht es Seiten, die den Ort wirklich meinen — und ein gepflegtes Google-Unternehmensprofil dahinter.',
  },
  {
    titel: 'Der Beweis',
    text: 'Bewertungen, echte Projekte, echte Bilder. Google bevorzugt, was Menschen bevorzugen. Deshalb bauen wir Bewertungen systematisch auf, statt zu hoffen.',
  },
];

/** „Was Sie erhalten" — dieselbe Dreiteilung wie auf /kunden-gewinnen,
    aber auf jemanden zugeschnitten, der eine Webseite sucht. */
export const leistungsumfang = [
  {
    titel: 'Positionierung',
    punkte: [
      'Schriftliche Positionierung: wofür Sie stehen und für wen',
      'Festgelegter Zielkunde: Auftragsart, Auftragswert, Radius',
      'Ihre Kernbotschaften und was Sie von den anderen im Ort unterscheidet',
      'Struktur und Textgerüst der Webseite',
    ],
  },
  {
    titel: 'Webseite',
    punkte: [
      'Individuelles Design, kein Baukasten und keine gekaufte Vorlage',
      'Texte, die wir schreiben — Sie müssen nichts vorformulieren',
      'Echte Bilder von Ihnen und Ihrer Arbeit statt gekaufter Motive',
      'Auf dem Handy zuerst gedacht, dort kommen die meisten an',
      'Ladezeit als Vorgabe, nicht als Zufallsergebnis',
      'Anfrageformular und Terminbuchung',
      'Impressum, Datenschutz und Einwilligung rechtssicher eingerichtet',
    ],
  },
  {
    titel: 'Sichtbarkeit',
    punkte: [
      'Technisches Fundament für Google von Tag eins',
      'Eigene Seiten für Ihre Leistungen und Ihre Orte',
      'Google-Unternehmensprofil aufgebaut und gepflegt',
      'Systematischer Aufbau Ihrer Bewertungen',
      'Sichtbarkeit in ChatGPT, Perplexity und anderen KI-Antworten',
      'Google Ads, wenn es schneller gehen soll als über die Suche',
      'Tracking: Sie sehen, woher Anfragen kommen',
    ],
  },
];

/** Ablauf in vier Schritten. Zeitangaben bewusst offen gelassen — es steht
    nur da, was ohne Rückfrage bei Iwo zugesagt werden kann. */
export const ablaufSchritte = [
  {
    titel: 'Erstgespräch',
    text: 'Eine Stunde, kostenlos. Wir schauen uns an, wonach in Ihrer Region tatsächlich gesucht wird, wie Sie neben den zwei stärksten Betrieben im Ort dastehen und was eine Anfrage bei Ihnen ungefähr wert ist.',
    merksatz: 'Erst rechnen, dann bauen.',
    hervorgehoben: false,
  },
  {
    titel: 'Positionierung',
    text: 'Bevor eine Zeile Design entsteht, steht fest, wofür Sie stehen, welche Aufträge Sie wollen und was Ihre Kunden entscheiden lässt. Das ist die Arbeit, die später den Unterschied macht.',
    merksatz: 'Erst wissen, wofür Sie stehen.',
    hervorgehoben: true,
  },
  {
    titel: 'Umsetzung',
    text: 'Aufbau, Texte, Bilder, Technik. Sie sehen Zwischenstände und sagen dazu etwas, bevor irgendetwas online geht. Fotos und Videos machen wir bei Ihnen im Betrieb.',
    merksatz: 'Zeigen statt behaupten.',
    hervorgehoben: false,
  },
  {
    titel: 'Sichtbarkeit',
    text: 'Nach dem Start beginnt der Teil, den die meisten Agenturen nicht mehr machen: Position beobachten, nachschärfen, Bewertungen aufbauen, Anfragen messen.',
    merksatz: 'Online gehen ist der Anfang.',
    hervorgehoben: false,
  },
];

export const faqs = [
  {
    frage: 'Was kostet eine Webseite bei Ihnen?',
    antwort:
      'Das hängt vom Umfang ab — eine Seite für einen Betrieb mit einer Leistung ist etwas anderes als ein Auftritt mit mehreren Leistungen und Ortsseiten. Wir schicken keine Preisliste, weil sie ohne Ihre Zahlen nichts aussagt. Nach dem Erstgespräch bekommen Sie ein Angebot mit einem festen Preis, keine Stundenabrechnung.',
  },
  {
    frage: 'Wie lange dauert das?',
    antwort:
      'Der Großteil der Zeit hängt nicht an uns, sondern an den Inhalten: Fotos, Freigaben, Rückmeldungen. Wenn das läuft, geht es zügig. Einen konkreten Termin nennen wir im Erstgespräch, wenn wir den Umfang kennen — vorher wäre es geraten.',
  },
  {
    frage: 'Arbeiten Sie mit WordPress oder Joomla?',
    antwort:
      'Wir bauen unsere Seiten nicht mit WordPress oder Joomla, sondern mit moderner Webtechnik. Der Grund ist Geschwindigkeit und Sicherheit: es gibt keine Plugins, die veralten, und nichts, was regelmäßig aktualisiert werden muss, damit die Seite nicht gehackt wird. Sie können Inhalte trotzdem selbst ändern. Wenn Sie eine bestehende WordPress- oder Joomla-Seite haben und nur jemanden für die Pflege suchen, sind wir ehrlicherweise nicht die Richtigen.',
  },
  {
    frage: 'Kann ich auch nur eine Webseite bekommen, ohne Marketing?',
    antwort:
      'Ja. Manche wollen erst die Seite und schauen dann weiter. Das ist völlig in Ordnung, und wir bauen sie so, dass alles Weitere später darauf aufsetzen kann. Wir sagen Ihnen nur vorher, was eine Seite allein leisten kann und was nicht.',
  },
  {
    frage: 'Arbeiten Sie nur mit Handwerksbetrieben?',
    antwort:
      'Nein. Der größte Teil unserer Kunden kommt aus Handwerk und Bau, und dort kennen wir das Geschäft besonders genau. Gearbeitet haben wir aber genauso für Immobilienvermittlung, Weinbau, Gastronomie und Dienstleister. Was zählt, ist nicht die Branche, sondern ob Ihre Kunden Sie über die Suche finden können.',
  },
  {
    frage: 'Betreuen Sie die Seite auch nach dem Start?',
    antwort:
      'Ja, und wir empfehlen es. Eine Webseite ist kein Möbelstück, das einmal aufgebaut wird. Änderungen, neue Leistungen, neue Projekte, Auswertung der Anfragen — das läuft weiter. Sie bekommen keine Seite und dann Funkstille.',
  },
  {
    frage: 'Kommen Sie auch nach Heppenheim, Weinheim oder Lorsch?',
    antwort:
      'Ja. Wir sitzen in Bensheim und arbeiten im gesamten Kreis Bergstraße und im Rhein-Neckar-Raum — Heppenheim, Weinheim, Lorsch, Zwingenberg, Hemsbach, Einhausen und die Orte dazwischen. Für den Foto- und Videodreh kommen wir zu Ihnen in den Betrieb.',
  },
  {
    frage: 'Muss ich Texte und Bilder liefern?',
    antwort:
      'Nein. Die Texte schreiben wir, die Bilder machen wir bei Ihnen vor Ort. Was wir von Ihnen brauchen, ist Ihre Zeit im Erstgespräch und beim Dreh — und dass Sie uns sagen, wenn etwas nicht stimmt.',
  },
];

/** Abschlussblock. Aufbau wie auf den Leistungsseiten: „richtigen Agentur"
    trägt den Marker, der kursive Teil unterscheidet die Seite. */
export const abschluss = {
  titelVorn: 'Die Suche nach der ',
  titelMarker: 'richtigen Agentur',
  titelMitte: ' ist anstrengender als sie sein müsste. Fangen wir mit ',
  titelKursiv: 'einem Gespräch',
  titelHinten: ' an.',
  lead: 'Eine Stunde, kostenlos, ohne Verpflichtung. Danach wissen Sie, wie Sie in Ihrer Region dastehen — auch wenn Sie sich gegen uns entscheiden.',
};
