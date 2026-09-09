/* Inhalte der Seite „Kunden gewinnen" – Texte 1:1 aus
   design/Kunden gewinnen.dc.html. Nichts umformuliert. */

export const ausgangslage = [
  {
    titel: 'Er holt mehr als ein Angebot',
    text: 'Zwei, drei Angebote sind der Normalfall, nicht das Misstrauen. Wer dabei aussieht wie die anderen, wird über den Preis verglichen — auch wenn er besser arbeitet.',
  },
  {
    titel: 'Er schaut nach, bevor er anruft',
    text: 'Google, die Karte, die Bewertungen, die Webseite. Was er dort findet, entscheidet, ob Ihr Betrieb überhaupt auf der Liste landet.',
  },
  {
    titel: 'Er entscheidet nicht allein',
    text: 'Bei größeren Aufträgen sitzt jemand daneben — Ehepartner, Familie, jemand mit einer zweiten Meinung. Diese Person kennt Sie nicht. Sie kennt nur Ihre Seite.',
  },
];

export const systemSchritte = [
  {
    titel: 'Platzhirsch-Positionierung',
    text: 'Wir verstehen zuerst, wonach Ihre Kunden entscheiden. Dann legen wir fest, was Sie besser können als die anderen im Ort — und welche Aufträge Sie eigentlich wollen. Wer das zeigen kann, wird nicht mehr nur über den Preis verglichen.',
    merksatz: 'Erst wissen, wofür Sie stehen.',
    hervorgehoben: false,
  },
  {
    /* Hieß in der Vorlage „Vorzeige-Webseite". Der Schritt umfasst mehr als
       die Seite — Google-Profil, Bewertungen, Bilder — und soll nicht so
       wirken, als bauten wir nur Homepages (Entscheidung Iwo). „Auftritt"
       ist zudem das Wort, das auf der Seite ohnehin schon steht
       („Der komplette Auftritt aus einer Hand"). */
    titel: 'Vorzeige-Auftritt',
    /* Die „automatische Sofort-Antwort" stand auch hier — dieselbe Zusage,
       dieselbe Streichung. */
    text: 'Ihre Projekte, Bewertungen und Erfahrung so gezeigt, dass auch der Mitentscheider keine Zweifel mehr hat. Mit Anfrageformular und Terminbuchung.',
    merksatz: 'Zeigen statt behaupten.',
    hervorgehoben: true,
  },
  {
    titel: 'Omnipräsenz',
    text: 'Egal wo Ihr Kunde sucht: Sie tauchen auf. In der Google-Suche, auf der Karte, bei den Bewertungen — und in den Antworten von ChatGPT und Co.',
    merksatz: 'Da sein, wo gesucht wird.',
    hervorgehoben: false,
  },
];

export const leistungsumfang = [
  {
    titel: 'Positionierung',
    punkte: [
      'Schriftliche Positionierung Ihres Betriebs',
      'Festgelegter Zielauftrag: Gewerk, Auftragswert, Radius',
      'Ihre Kernbotschaften und was Sie von den anderen im Ort unterscheidet',
      'Struktur und Textgerüst der Webseite',
    ],
  },
  {
    titel: 'Webseite',
    punkte: [
      'Webseite, gebaut für Ihren Zielauftrag',
      'Echte Bilder von Ihrem Betrieb statt gekaufter Motive',
      'Anfrageformular und Terminbuchung',
      /* „Automatische Sofort-Antwort" und „Automatische Bewertungsanfrage"
         sind gestrichen: die Leistungen bieten wir nicht an
         (Entscheidung Iwo). */
      'Tracking ab dem ersten Tag: Sie sehen, woher Anfragen kommen',
    ],
  },
  {
    titel: 'Sichtbarkeit',
    punkte: [
      'Google Ads, eingerichtet und laufend betreut',
      'Google-Unternehmensprofil aufgebaut und gepflegt',
      'Systematischer Aufbau Ihrer Bewertungen',
      'Sichtbarkeit in ChatGPT, Perplexity und anderen KI-Antworten',
      'SEO auf Basis der Ads-Daten, nicht auf Verdacht',
    ],
  },
];

export const erstgespraechPunkte = [
  'Wie oft im Monat im Umkreis nach Ihren Leistungen gesucht wird',
  'Was eine Anfrage über Google bei Ihnen ungefähr kosten würde',
  'Wie Ihr Google-Profil gegen die zwei stärksten Betriebe im Ort dasteht',
  'Wie schnell Ihre Seite auf dem Handy lädt und wie viele Wege zur Anfrage es gibt',
  'Ob Sie heute sehen können, woher Ihre Anfragen kommen',
];

export const passt = [
  'Privatkunden, die Geld in ihr eigenes Haus stecken — Sanierung, Renovierung, Innenausbau, Bad, Maler, Boden, Garten, Schreiner',
  'Auftragswerte etwa zwischen 3.000 und 30.000 €',
  'Der Kunde entscheidet allein oder zu zweit, nicht in einem Gremium',
  'Sie arbeiten in einem festen Umkreis, nicht bundesweit',
  'Sie können mehr Anfragen auch annehmen und zeitnah zurückrufen',
];

export const passtNicht = [
  'Werkstätten und KFZ: Auftragswerte zu niedrig, Portale beherrschen die Suche',
  'Industrie und Ausschreibungsgeschäft: Dort läuft der Einkauf nicht über die Suche',
  'Betriebe, bei denen Anfragen heute schon drei Tage liegenbleiben',
];

export const ausbau = [
  {
    titel: 'Meistermagnet',
    zusatz: '— wenn Aufträge da sind, aber Leute fehlen',
    href: '/mitarbeiter-gewinnen',
  },
  { titel: 'Social-Präsenz', zusatz: '— wenn die Suche ausgeschöpft ist' },
  { titel: 'Anfrage-Annahme', zusatz: '— wenn Anfragen liegenbleiben' },
];

export const faqs = [
  {
    frage: 'Wir haben eigentlich genug Arbeit. Lohnt sich das trotzdem?',
    antwort:
      'Kommt darauf an, ob Sie mit den Aufträgen zufrieden sind, die reinkommen. Bei den meisten Betrieben, mit denen wir sprechen, geht es nicht um die Menge, sondern darum, dass die kleinen Reparaturaufträge den Kalender füllen und die großen Projekte woanders landen. Wenn das bei Ihnen nicht so ist, sagen wir Ihnen im Gespräch ehrlich, dass Sie uns gerade nicht brauchen.',
  },
  {
    frage: 'Wir hatten schon eine Agentur. Das hat nichts gebracht.',
    antwort:
      'Das hören wir oft, und meistens liegt es an der Reihenfolge. Wenn Werbung geschaltet wird, bevor feststeht, wofür der Betrieb steht und wohin die Anfragen laufen, ist das Geld weg — unabhängig davon, wie gut die Anzeigen sind. Deshalb fängt bei uns nichts mit Werbung an.',
  },
  {
    frage: 'Was kostet das?',
    antwort:
      'Das hängt vom Umfang ab und davon, wie viel Werbebudget in Ihrer Region sinnvoll ist. Beides steht nach dem Erstgespräch fest, weil wir dann Ihre Zahlen kennen. Wir schicken keine Preisliste, weil sie ohne Ihre Zahlen nichts aussagt.',
  },
  {
    frage: 'Machen Sie auch Social Media?',
    antwort:
      'Nicht als Standard. Wir arbeiten dort, wo Ihre Kunden aktiv suchen — das ist die Suche, die Karte und die Bewertungen. Social Media kann sinnvoll sein, wenn in Ihrer Region kaum gesucht wird. Das sehen wir in der Marktanalyse und sprechen es dann an.',
  },
  {
    frage: 'Arbeiten Sie mit jedem Betrieb?',
    antwort:
      'Nein. Die Kriterien stehen weiter oben auf dieser Seite. Wenn einer davon nicht passt, sagen wir das im Erstgespräch, statt Ihnen etwas zu verkaufen, das nicht greift.',
  },
];
