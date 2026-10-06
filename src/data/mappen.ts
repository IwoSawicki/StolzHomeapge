/* Persönliche Mappen — Seiten unter /einblick/<name>, die Iwo einem
   möglichen Kunden schickt: Videos und Webseiten aus unserer Arbeit,
   passend zu dieser einen Firma ausgewählt.

   Wie /alle-projekte: noindex, nicht in der Sitemap, nirgends verlinkt.
   Wer den Link nicht hat, findet die Seite nicht.

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
  /** Adresse: /einblick/<slug> */
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
  {
    schluessel: 'stech',
    titel: 'Recruiting',
    ueberschrift: 'Drei Einstiege, eine Stelle.',
    lead: 'S-Tech Fahrzeugbau sucht Monteure für Kran-Sonderaufbauten. Drei Videos von einem Drehtag im Betrieb, jedes mit eigenem Einstieg: klare Ansage, Frage oder Empfehlung.',
  },
  { schluessel: 'Recruiting', titel: 'Recruiting' },
  { schluessel: 'Kundengewinnung', titel: 'Kundengewinnung' },
];

/** Überschrift über den Webseiten */
export const mappenWebseiten = {
  titel: 'Webseiten',
  ueberschrift: 'Und so sehen unsere Webseiten aus.',
  lead: 'Ein paar Auftritte aus unserer Arbeit, alle live. Ein Klick öffnet die Webseite.',
  knopfWebseite: 'Webseite ansehen',
  knopfProjekt: 'Zum Projekt',
  /** Kleine Zeile über dem Merkmal, bei Videos und Webseiten */
  labelMerkmal: 'Was es ausmacht',
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
       die SAAN-Kampagne, dann der A/B-Test von raum.Konzept, dann die drei
       Einstiege von S-Tech, zuletzt zwei Videos für die Kundengewinnung.
       S-Tech Hook 1 steht bewusst hinten: Iwo findet ihn am schwächsten. Die Zahlen bei SAAN und DMK sind dieselben
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
        gruppe: 'stech',
        merkmal: 'Klare Ansage sofort',
        text: '„Wir suchen Monteure für Kran-Sonderaufbauten“ steht in der ersten Sekunde im Bild. Wer gemeint ist, bleibt dran.',
      },
      {
        datei: 'S-Tech-Recruiting-Hook-2.mp4',
        kunde: 'S-Tech Fahrzeugbau',
        art: 'Recruiting',
        gruppe: 'stech',
        merkmal: 'Frage statt Ansage',
        text: '„Viel Technik im Blut?“ holt Mechaniker über ihr Interesse ab. Danach Kipper, Hydraulik, Feierabend mit dem Team und: bewerben ohne Papierkram.',
      },
      {
        datei: 'S-Tech-Recruiting-Hook-1.mp4',
        kunde: 'S-Tech Fahrzeugbau',
        art: 'Recruiting',
        gruppe: 'stech',
        merkmal: 'Einstieg über Empfehlung',
        text: '„Du kennst jemanden, der gerne schraubt?“ spricht Freunde und Kollegen an und zeigt dann den vielfältigen Arbeitsalltag im Betrieb.',
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
    /* Die vier Webseiten, die Iwo Lulay in der Mail verlinkt hat
       (06.10.2026). Texte aus alle-projekte.ts und
       webdesign-bergstrasse.ts; GDM steht dort noch nicht, der Text
       beschreibt die Seite selbst. */
    webseiten: [
      {
        name: 'GDM Gebäudeservice',
        domain: 'gdm.stolz-marketing.de',
        bild: 'projekte-intern/gdm-startseite.webp',
        merkmal: 'Vier Leistungen, klar getrennt',
        text: 'Gebäudereinigung, Gebäudeservice, Sonderreinigung und Baureinigung aus Lorsch, jede mit eigenem Bereich.',
      },
      {
        name: 'Jhoch2 Wasserschaden',
        domain: 'jhoch2-wasserschaden.de',
        bild: 'projekte-intern/website-jhoch2-wasserschaden.webp',
        merkmal: 'Gebaut für den Notfall',
        text: 'Website für schnelle Notfall-Anfragen bei Wasserschäden.',
      },
      {
        name: 'Umzüge Bergstraße',
        domain: 'umzuege-bergstrasse.de',
        bild: 'projekte/umzuege-bergstrasse-startseite.png',
        merkmal: 'Name, Logo, Website, Google-Profil',
        text: 'Unser eigener Betrieb — und damit der Fall, an dem wir zuerst ausprobiert haben, was wir heute für andere bauen.',
      },
      {
        name: 'Zehner Immobilien',
        domain: 'www.zehner-immobilien.de',
        bild: 'projekte/zehner-immobilien-startseite.webp',
        merkmal: 'Klare Positionierung',
        text: 'Neue Website mit klarer Positionierung für mehr Verkäufer-Anfragen.',
      },
    ],
  },
];
