/* Inhalte der Landingpage /webdesign-bergstrasse.

   Diese Seite liegt eine Ebene über /webdesign-bensheim und muss sich
   davon inhaltlich unterscheiden — sonst wären es zwei Seiten mit
   getauschtem Ortsnamen, und genau das wertet Google als Doorway.

   Die Abgrenzung: Bensheim beantwortet „gibt es hier bei mir jemanden?",
   die Bergstraße beantwortet „wer deckt die Region ab?". Deshalb steht
   hier die Streuung der Projekte im Mittelpunkt, nicht die Nähe zu einem
   Ort — und deshalb gibt es hier den Abschnitt über Ortsseiten, den es auf
   der Bensheim-Seite nicht gibt. Kein Textbaustein ist übernommen.

   Zu den Orten: die Bergstraße ist die alte Straße von Darmstadt bis
   Wiesloch. Die Darmstädter Projekte liegen also an ihrem nördlichen Ende
   und gehören dazu. Reichelsheim gehört NICHT dazu — das ist Odenwald,
   anderer Kreis, hinter dem Bergrücken. Es steht deshalb als eigene
   Gruppe da und wird nicht als Bergstraße ausgegeben. */

/** Die Projekte als Stationen entlang der Achse, von Nord nach Süd.
    Alle sind öffentlich zeigbar: sechs stehen bereits auf /projekte,
    Shiraz hat Iwo ausdrücklich freigegeben. */
export const stationen = [
  {
    ort: 'Mühltal',
    zusatz: 'bei Darmstadt',
    kunde: 'Nieder-Ramstädter Weinmacher',
    was: 'Auftritt für Weine, Events und Verleih',
  },
  {
    ort: 'Darmstadt',
    zusatz: '',
    kunde: 'Shiraz Restaurant',
    was: 'Fotoshooting im Restaurant',
  },
  {
    ort: 'Bensheim',
    zusatz: '',
    kunde: 'Zehner Immobilien',
    was: 'Website mit klarer Positionierung',
  },
  {
    ort: 'Einhausen',
    zusatz: '',
    kunde: 'Tierbestattung Memoria',
    was: 'Website für einen würdevollen Abschied',
  },
  {
    ort: 'Bergstraße',
    zusatz: 'eigener Betrieb',
    kunde: 'Umzüge Bergstraße',
    was: 'Name, Logo, Website, Google-Profil',
  },
  {
    ort: 'Weinheim',
    zusatz: '',
    kunde: 'HePa Baut',
    was: 'Website mit über 150 Ortsseiten',
  },
];

/** Hinter dem Bergrücken. Bewusst getrennt ausgewiesen: Reichelsheim ist
    Odenwaldkreis, nicht Bergstraße. Wer hier wohnt, merkt den Unterschied
    sofort — und auf einer Seite, die mit regionaler Verwurzelung wirbt,
    wäre das der teuerste Fehler. */
export const odenwald = [
  { ort: 'Reichelsheim', kunde: 'DMK Bau', was: 'Kampagnen für Aufträge und Fachkräfte' },
  { ort: 'Reichelsheim', kunde: 'NKN & PV Elektrik', was: 'Kompletter Auftritt aus einer Hand' },
];

/** Was eine Agentur aus der Region anders macht. Bewusst keine
    Behauptungen über Qualität, sondern nur Dinge, die aus der Entfernung
    folgen. */
export const verankerung = [
  {
    titel: 'Wir kommen zu Ihnen',
    text: 'Fotos und Videos entstehen in Ihrem Betrieb, auf Ihrer Baustelle, mit Ihren Leuten. Kein gekauftes Motiv, auf dem ein fremder Handwerker in eine fremde Kamera lächelt. Bei einer Anfahrt von zwanzig Minuten ist das eine Selbstverständlichkeit und keine Kostenfrage.',
  },
  {
    titel: 'Wir kennen die Orte',
    text: 'Wir wissen, dass Lorsch anders tickt als Weinheim und dass ein Betrieb aus Einhausen andere Kunden hat als einer aus Darmstadt. Das steckt in der Positionierung, bevor die erste Zeile Text entsteht.',
  },
  {
    titel: 'Sie erreichen uns',
    text: 'Kein Kundenberater in einer anderen Stadt, keine Rückrufbitte im Ticketsystem. Wenn etwas dringend ist, gehen wir ans Telefon — und wenn es sein muss, fahren wir vorbei.',
  },
];

/** Der Abschnitt, den es nur auf dieser Seite gibt: warum eine Seite nicht
    reicht, wenn man die ganze Region bedienen will. */
export const ortsseiten = {
  punkte: [
    {
      titel: 'Die Karte holt Ihr Google-Profil',
      text: 'In den Kartenergebnissen entscheidet vor allem, wie weit Sie vom Suchenden entfernt sind und wie bekannt Sie sind. Ein gut gepflegtes Profil in Bensheim taucht deshalb auch bei einer Suche in Heppenheim auf — fünf Kilometer sind für Google nichts.',
    },
    {
      titel: 'Die Plätze darunter holt Ihre Seite',
      text: 'Unter der Karte stehen die normalen Suchergebnisse, und dort hat Ihr Unternehmensprofil kaum Einfluss. Da gewinnt die Seite, die die Suchanfrage am genauesten trifft. Gegen eine Seite, die tatsächlich vom Ort handelt, kommt eine allgemeine Seite schwer an.',
    },
    {
      titel: 'Deshalb beides',
      text: 'Das Profil bringt Ihnen die Karte in der Nachbarstadt, eigene Ortsseiten bringen Ihnen die Plätze darunter. Zwei verschiedene Flächen auf derselben Suchergebnisseite — wer nur eine bespielt, verschenkt die andere.',
    },
  ],
  beleg:
    'Für HePa Baut aus Weinheim haben wir genau das gebaut: eine eigene Startseite je Leistung und dazu über 150 Ortsseiten im Umkreis, jede auf ihre Stadt ausgerichtet.',
};

/** „Was Sie erhalten" — dieselbe Dreiteilung wie auf den anderen Seiten,
    hier aber mit dem regionalen Schwerpunkt in der dritten Spalte. */
export const leistungsumfang = [
  {
    titel: 'Positionierung',
    punkte: [
      'Schriftliche Positionierung: wofür Sie stehen und für wen',
      'Festgelegter Zielkunde: Auftragsart, Auftragswert, Radius',
      'Welche Orte sich für Sie überhaupt lohnen — und welche nicht',
      'Struktur und Textgerüst der Webseite',
    ],
  },
  {
    titel: 'Webseite',
    punkte: [
      'Individuelles Design, kein Baukasten und keine gekaufte Vorlage',
      'Texte schreiben wir, Sie müssen nichts vorformulieren',
      'Foto- und Videodreh bei Ihnen im Betrieb',
      'Auf dem Handy zuerst gedacht, dort kommen die meisten an',
      'Anfrageformular und Terminbuchung',
      'Impressum, Datenschutz und Einwilligung rechtssicher eingerichtet',
    ],
  },
  {
    titel: 'Sichtbarkeit in der Region',
    punkte: [
      'Google-Unternehmensprofil aufgebaut und gepflegt',
      'Eigene Seiten für die Orte, die sich für Sie lohnen',
      'Systematischer Aufbau Ihrer Bewertungen',
      'Sichtbarkeit in ChatGPT, Perplexity und anderen KI-Antworten',
      'Google Ads, wenn es schneller gehen soll als über die Suche',
      'Tracking: Sie sehen, woher Anfragen kommen',
    ],
  },
];

export const faqs = [
  {
    frage: 'Welche Orte deckt ihr ab?',
    antwort:
      'Die Achse von Darmstadt bis Weinheim, also Bensheim, Heppenheim, Lorsch, Zwingenberg, Einhausen, Lampertheim, Bürstadt und die Orte dazwischen — dazu den Odenwald dahinter. Nach Heidelberg, Mannheim und Darmstadt fahren wir ebenfalls. Wenn Sie unsicher sind, ob Sie noch dazugehören: rufen Sie an, die Antwort ist meistens ja.',
  },
  {
    frage: 'Reicht mein Google-Profil nicht, um in der Nachbarstadt gefunden zu werden?',
    antwort:
      'Für die Karte oben in den Ergebnissen reicht es oft tatsächlich — ein starkes Profil in Bensheim taucht auch bei einer Suche in Heppenheim auf. Für die normalen Suchergebnisse darunter reicht es nicht: dort hat das Profil kaum Einfluss, und es gewinnt die Seite, die den Ort wirklich behandelt. Beides zusammen deckt die ganze Suchergebnisseite ab, eines allein nur die Hälfte.',
  },
  {
    frage: 'Brauche ich für jeden Ort eine eigene Seite?',
    antwort:
      'Nur für die, die sich rechnen. Wir sehen uns im Erstgespräch an, wo tatsächlich gesucht wird und wo Sie realistisch hinkommen. Eine Seite für ein Dorf, aus dem im Jahr drei Anfragen kämen, bauen wir nicht — die kostet Pflege und bringt nichts.',
  },
  {
    frage: 'Kommt ihr für Fotos und Videos zu uns in den Betrieb?',
    antwort:
      'Ja, immer. Echte Bilder von Ihren Leuten und Ihrer Arbeit sind der Teil, der auf einer Webseite am meisten unterscheidet — und der einzige, den man nicht kaufen kann. Innerhalb der Region ist die Anfahrt für uns kein Thema.',
  },
  {
    frage: 'Arbeitet ihr auch außerhalb der Region?',
    antwort:
      'Ja. Ein Teil unserer Projekte liegt außerhalb, bis nach Freiburg und Berlin. Der Schwerpunkt liegt aber hier, und für alles, was mit Fotos, Videos und Vor-Ort-Terminen zu tun hat, ist die Nähe ein echter Vorteil.',
  },
  {
    frage: 'Was kostet das?',
    antwort:
      'Das hängt davon ab, wie viel Fläche Sie abdecken wollen — ein Auftritt für einen Ort ist etwas anderes als einer für zehn. Deshalb gibt es bei uns keine Pauschale von der Stange. Sie bekommen nach dem Erstgespräch ein Angebot mit festem Preis, in dem steht, was gebaut wird und was es kostet.',
  },
  {
    frage: 'Arbeitet ihr nur mit Handwerksbetrieben?',
    antwort:
      'Nein. Der größte Teil unserer Kunden kommt aus Handwerk und Bau, dort kennen wir das Geschäft besonders genau. Gearbeitet haben wir aber genauso für Immobilienvermittlung, Gastronomie, Weinbau und Dienstleister. Was zählt, ist, ob Ihre Kunden Sie über die Suche finden können.',
  },
];

export const abschluss = {
  titelVorn: 'Sie suchen jemanden aus der ',
  titelMarker: 'Region',
  titelMitte: ', der nicht nur eine Webseite baut. Fangen wir mit ',
  titelKursiv: 'einem Gespräch',
  titelHinten: ' an.',
  lead: 'Eine Stunde, kostenlos, ohne Verpflichtung. Danach wissen Sie, wo in Ihrem Umkreis tatsächlich gesucht wird und was davon für Sie erreichbar ist.',
};
