/* Persönliche Mappen — Seiten unter /fuer/<name>, die Iwo einem
   möglichen Kunden schickt: Videos und Webseiten aus unserer Arbeit,
   passend zu dieser einen Firma ausgewählt.

   Wie /alle-projekte: noindex, nicht in der Sitemap, nirgends verlinkt.
   Wer den Link nicht hat, findet die Seite nicht. Bis 06.10.2026 lagen
   die Mappen unter /videos/<name>; deploy/nginx.conf leitet um.

   Neue Mappe: einen Eintrag in `mappen` unten ergänzen.
   - Videos liegen als .mp4 irgendwo unter src/assets/, das Standbild
     dazu heißt <dateiname>-standbild.jpg (der Ordner ist egal, gesucht
     wird nach dem Dateinamen).
   - Webseiten-Bilder liegen unter src/assets/, angegeben wird der Pfad
     ab dort. */

export interface MappenVideo {
  /** Dateiname der .mp4, ohne Ordner */
  datei: string;
  kunde: string;
  art: 'Recruiting' | 'Kundengewinnung';
  /** Gruppe auf der Seite, wenn nicht die nach `art` (z. B. 'ab-test') */
  gruppe?: string;
  /** Marke auf dem Video in der A/B-Test-Gruppe, z. B. 'Variante A' */
  variante?: string;
  /** Was das Video ausmacht, in drei, vier Wörtern */
  merkmal: string;
  /** Ein, höchstens zwei kurze Sätze dazu */
  text: string;
}

export interface MappenWebseite {
  name: string;
  /** ohne https:// */
  domain: string;
  /** Pfad ab src/assets/ */
  bild: string;
  merkmal: string;
  text: string;
  /** Eigene Projektseite, falls es eine gibt */
  projektseite?: string;
}

export interface Mappe {
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
  webseiten?: MappenWebseite[];
}

export interface MappenGruppe {
  /** `art` oder `gruppe` der Videos, die hier stehen */
  schluessel: string;
  /** Kleine Zeile zwischen den Trennlinien */
  titel: string;
  /** Optional: größere Überschrift und Absatz darunter */
  ueberschrift?: string;
  lead?: string;
}

/** Gruppen in der Reihenfolge auf der Seite. Leere Gruppen fallen weg. */
export const mappenGruppen: MappenGruppe[] = [
  {
    schluessel: 'saan',
    titel: 'Recruiting',
    ueberschrift: 'Eine Kampagne, drei Videos.',
    lead: 'SAAN Wasserstrahltechnik suchte Monteure. Drei Videos mit drei Einstiegen, gedreht auf echten Baustellen. Die Kampagne brachte zehn neue Mitarbeiter in wenigen Wochen.',
  },
  {
    /* Wunsch Iwo (06.10.2026): drei Fassungen derselben Anzeige als
       Vorführung, damit man sieht, wie ähnlich und doch verschieden sie
       sind */
    schluessel: 'ab-test',
    titel: 'A/B-Test',
    ueberschrift: 'So sieht zum Beispiel ein A/B-Test aus.',
    lead: 'Drei Recruiting-Videos für raum.Konzept aus demselben Material: gleiche Botschaft, anderer Einstieg. Im Test laufen alle drei gleichzeitig. Weiter läuft die Variante, die die meisten Bewerbungen bringt.',
  },
  { schluessel: 'Recruiting', titel: 'Recruiting' },
  { schluessel: 'Kundengewinnung', titel: 'Kundengewinnung' },
];

/** Überschrift über den Webseiten */
export const mappenWebseiten = {
  titel: 'Webseiten',
  ueberschrift: 'Und so sehen unsere Webseiten aus.',
  lead: 'Ein paar Auftritte für Handwerksbetriebe, alle live. Ein Klick öffnet die Webseite.',
  knopfWebseite: 'Webseite ansehen',
  knopfProjekt: 'Zum Projekt',
};

/** Kontaktblock am Ende jeder Mappe */
export const mappenKontakt = {
  eyebrow: 'Ihr Ansprechpartner',
  titel: 'Fragen zu den Videos? Rufen Sie mich einfach an.',
  name: 'Iwo Sawicki',
  rolle: 'Inhaber Stolz Marketing',
};

export const mappen: Mappe[] = [
  {
    /* Für Lulay (06.10.2026). Iwo schickt den Link per Mail. Erst
       die SAAN-Kampagne, dann der A/B-Test von raum.Konzept, dann S-Tech,
       zuletzt zwei Videos für die Kundengewinnung. Die Zahlen bei SAAN und DMK sind dieselben
       wie auf der Social-Media-Seite (geliefert von Iwo). Die Merkmale
       beschreiben, was im Video zu sehen und zu lesen ist. */
    slug: 'lulay',
    fuer: 'Lulay',
    eyebrow: 'Für Lulay zusammengestellt',
    titelVorn: 'Ein paar ',
    titelKursiv: 'Beispiele',
    titelHinten: ' aus unserer Arbeit.',
    lead: 'Videos für Recruiting und Kundengewinnung, gedreht direkt in den Betrieben, dazu ein paar unserer Webseiten. Klicken Sie auf ein Video, es startet mit Ton.',
    videos: [
      {
        datei: 'SAAN-RecruitingAD-01.mp4',
        kunde: 'SAAN Wasserstrahltechnik',
        art: 'Recruiting',
        gruppe: 'saan',
        merkmal: 'Einstieg über Wünsche',
        text: '„Du willst arbeiten? Du willst gutes Geld verdienen?“ Danach zeigt das Video, wo es hingeht: Brücken, Parkhäuser, Maschinen mit 3000 Bar.',
      },
      {
        datei: 'SAAN-RecruitingAD-02.mp4',
        kunde: 'SAAN Wasserstrahltechnik',
        art: 'Recruiting',
        gruppe: 'saan',
        merkmal: 'Fakten statt Floskeln',
        text: '„Wir suchen 10 neue Monteure“: Gehalt, Arbeitszeiten, Hotel und Frühstück stehen direkt im Video.',
      },
      {
        datei: 'SAAN-RecruitingAD-03.mp4',
        kunde: 'SAAN Wasserstrahltechnik',
        art: 'Recruiting',
        gruppe: 'saan',
        merkmal: 'Die ausführliche Fassung',
        text: '„Unzufrieden mit deinem aktuellen Job?“ Knapp 50 Sekunden für alle, die es genau wissen wollen: Einsatzorte, Arbeitszeiten, Hotel und Spesen.',
      },
      {
        datei: 'S-Tech-Recruiting-Hook-3.mp4',
        kunde: 'S-Tech Fahrzeugbau',
        art: 'Recruiting',
        merkmal: 'Klare Ansage sofort',
        text: '„Wir suchen Monteure für Kran-Sonderaufbauten“ steht in der ersten Sekunde im Bild. Wer gemeint ist, bleibt dran.',
      },
      {
        datei: 'S-Tech-Recruiting-Hook-2.mp4',
        kunde: 'S-Tech Fahrzeugbau',
        art: 'Recruiting',
        merkmal: 'Frage statt Ansage',
        text: 'Gleiche Kampagne, anderer Einstieg: „Viel Technik im Blut?“ holt Mechaniker über ihr Interesse ab und zeigt dann Werkstatt, Fahrzeuge und Team.',
      },
      {
        datei: 'raumKonzept-Recruiting-01.mp4',
        kunde: 'raum.Konzept',
        art: 'Recruiting',
        gruppe: 'ab-test',
        variante: 'Variante A',
        merkmal: 'Einstieg über Empfehlung',
        text: '„Du kennst jemanden …?“ spricht nicht den Maler an, sondern seine Freunde und Kollegen. Am Ende: Schick ihm dieses Video.',
      },
      {
        datei: 'raumKonzept-Recruiting-02.mp4',
        kunde: 'raum.Konzept',
        art: 'Recruiting',
        gruppe: 'ab-test',
        variante: 'Variante B',
        merkmal: 'Direkt an den Maler',
        text: '„Du bist gelernter Maler …“ spricht die Fachkraft selbst an und zeigt mehr vom Arbeitsalltag auf der Baustelle.',
      },
      {
        datei: 'raumKonzept-Recruiting-03.mp4',
        kunde: 'raum.Konzept',
        art: 'Recruiting',
        gruppe: 'ab-test',
        variante: 'Variante C',
        merkmal: 'Die Kurzfassung',
        text: 'Zehn Sekunden: Beruf, drei Gründe (cooles Team, Spaß, faire Bezahlung), Aufruf. Für alle, die schnell weiterscrollen.',
      },
      {
        datei: 'raumKonzept-Kundengewinnung-FugenlosesBad.mp4',
        kunde: 'raum.Konzept',
        art: 'Kundengewinnung',
        merkmal: 'Erst der Wunsch, dann der Betrieb',
        text: '„Sie träumen von einem fugenlosen Bad?“ Danach echte Projekte und ein zuverlässiger Ansprechpartner, der sich selbst vorstellt.',
      },
      {
        datei: 'DMK-SM-01-5Handwerker_1.mp4',
        kunde: 'DMK Bau',
        art: 'Kundengewinnung',
        merkmal: 'Alles aus einer Hand',
        text: 'Renovierung ohne fünf verschiedene Handwerker: Das Video zeigt jeden Schritt auf der Baustelle. Über 100.000 Aufrufe in den ersten Wochen.',
      },
    ],
    /* Beschreibungen aus src/data/alle-projekte.ts, Merkmal und Zahl
       aus der Projektseite von HEPA Baut */
    webseiten: [
      {
        name: 'HEPA Baut',
        domain: 'hepabaut.de',
        bild: 'projekte-intern/website-hepabaut.webp',
        merkmal: 'Über 150 Ortsseiten',
        text: 'Website-Relaunch mit Fokus auf planbare Projektanfragen.',
        projektseite: '/projekte/hepa-baut',
      },
      {
        name: 'Jhoch2 Wasserschaden',
        domain: 'jhoch2-wasserschaden.de',
        bild: 'projekte-intern/website-jhoch2-wasserschaden.webp',
        merkmal: 'Gebaut für den Notfall',
        text: 'Website für schnelle Notfall-Anfragen bei Wasserschäden.',
      },
      {
        name: 'NKN PV Elektrik',
        domain: 'nkn-pv-elektrik.de',
        bild: 'projekte/nkn-pv-elektrik-startseite.png',
        merkmal: 'Lokal sichtbar',
        text: 'Neuer Auftritt für Photovoltaik & Elektrotechnik mit lokaler Sichtbarkeit.',
      },
    ],
  },
];
