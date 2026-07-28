// Die zwei Leistungs-Säulen der Startseite: Kundengewinnung und
// Mitarbeitergewinnung. Einzelne Leistungen (Google Ads, Social Media,
// SEO, …) tauchen NICHT mehr einzeln auf der Startseite auf — sie sind
// die „Werkzeuge" auf den beiden Unterseiten /leistungen/[slug].
// Texte = Vorschläge, bitte von Iwo prüfen.
import type { ImageMetadata } from 'astro';
// Kundengewinnung: echtes Dreh-Foto (Alpha-Baustelle) statt des alten
// Framer-Stock-Mockups (das war ein englisches Fremdprodukt-Bild).
// Mitarbeitergewinnung: deutsches Bewerber-UI-Mockup aus dem Original.
import bildKundengewinnung from '../assets/projekte/video-dreh-alpha-gruppe-1.jpg';
import bildMitarbeitergewinnung from '../assets/leistung-mitarbeitergewinnung.png';

export interface Werkzeug {
  name: string;
  text: string;
}

export interface Saeule {
  slug: string;
  /** Name der Säule, z. B. „Kundengewinnung" */
  name: string;
  href: string;
  nummer: string;
  /** Headline der Karte/Unterseite */
  claim: string;
  /** Kurztext für die Startseiten-Sektion */
  kurz: string;
  /** kompakte Werkzeug-Pills für die Startseiten-Sektion */
  pills: string[];
  bild: ImageMetadata;
  /** Bildausschnitt: Fotos meist 'center', UI-Mockups 'top' */
  fokus: 'top' | 'center';
  /** Intro-Absätze der Unterseite */
  intro: string[];
  /** die Werkzeuge & Techniken dahinter (Inhalt der Unterseite) */
  werkzeuge: Werkzeug[];
  /** echte Zahlen für die Unterseite */
  zahlen: { wert: string; label: string }[];
}

export const saeulen: Saeule[] = [
  {
    slug: 'kundengewinnung',
    name: 'Kundengewinnung',
    href: '/leistungen/kundengewinnung',
    nummer: '01',
    claim: 'Mehr Anfragen von den richtigen Kunden.',
    kurz: 'Website, Google und Social Media arbeiten zusammen — damit aus Sichtbarkeit planbar Anfragen werden.',
    pills: ['Webseiten & SEO', 'Google Ads', 'Social Media Ads', 'Foto & Video'],
    bild: bildKundengewinnung,
    fokus: 'center',
    intro: [
      'Die meisten Betriebe haben kein Leistungs-Problem — sie haben ein Sichtbarkeits-Problem. Wer Sie findet, beauftragt Sie. Nur finden Sie zu wenige.',
      'Deshalb bauen wir keinen Bauchladen aus Einzelmaßnahmen, sondern ein System: Ihre Website, Google und Social Media greifen ineinander und ziehen alle in eine Richtung — mehr qualifizierte Anfragen.',
    ],
    werkzeuge: [
      {
        name: 'Webseiten & Landingpages',
        text: 'Schnelle, klare Seiten, die aus Besuchern Anfragen machen. Jede Seite hat genau eine Aufgabe — und führt dorthin.',
      },
      {
        name: 'Lokales SEO & Google Business',
        text: 'Sichtbar in genau den Orten, in denen Sie wirklich arbeiten — inklusive gepflegtem Google-Profil mit Bewertungen.',
      },
      {
        name: 'Google Ads',
        text: 'Ganz oben stehen, wenn jemand aktiv nach Ihrer Leistung sucht. Budget geht nur in Suchanfragen, die zu Aufträgen passen.',
      },
      {
        name: 'Social Media Ads',
        text: 'Menschen erreichen, die noch gar nicht suchen — mit Kampagnen auf Instagram und Facebook, die Ihren Betrieb echt zeigen.',
      },
      {
        name: 'Sichtbarkeit in KI-Suchen',
        text: 'Immer mehr Kunden fragen ChatGPT statt Google. Wir bauen Ihre Inhalte so, dass Sie auch dort empfohlen werden.',
      },
      {
        name: 'Foto- & Videoproduktion',
        text: 'Echtes Material von Ihren Baustellen, Ihrem Team und Ihren Ergebnissen — statt austauschbarer Stockfotos.',
      },
    ],
    zahlen: [
      { wert: '14', label: 'umgesetzte Projekte' },
      { wert: '450+', label: 'gebaute Unterseiten' },
      { wert: '100 %', label: 'messbar & transparent' },
    ],
  },
  {
    slug: 'mitarbeitergewinnung',
    name: 'Mitarbeitergewinnung',
    href: '/leistungen/mitarbeitergewinnung',
    nummer: '02',
    claim: 'Bewerbungen von Leuten, die wirklich passen.',
    kurz: 'Recruiting-Kampagnen mit Vorqualifizierung — damit Sie mit Kandidaten sprechen statt Bewerbungen zu sortieren.',
    pills: ['Recruiting-Kampagnen', 'Vorqualifizierung', 'Karriere-Landingpages', 'Video vom Team'],
    bild: bildMitarbeitergewinnung,
    fokus: 'top',
    intro: [
      'Stellenanzeigen auf den üblichen Portalen erreichen nur die, die aktiv suchen — und das sind die wenigsten. Die guten Leute haben einen Job. Aber sie scrollen jeden Abend durch Social Media.',
      'Genau dort holen wir sie ab: mit Kampagnen, die Ihren Betrieb ehrlich zeigen, und einem Bewerbungsweg, der in zwei Minuten vom Handy funktioniert — inklusive Vorqualifizierung, damit nur passende Bewerbungen bei Ihnen landen.',
    ],
    werkzeuge: [
      {
        name: 'Social-Media-Recruiting',
        text: 'Kampagnen auf Instagram und Facebook — dort, wo Ihre künftigen Mitarbeiter täglich sind. Auch die, die nicht aktiv suchen.',
      },
      {
        name: 'Vorqualifizierung im Formular',
        text: 'Pflichtkriterien wie Führerschein, Sprachkenntnisse oder Belastbarkeit werden direkt im Bewerbungsformular abgefragt. Wer nicht passt, kommt gar nicht erst rein.',
      },
      {
        name: 'Karriere-Landingpages',
        text: 'Eine Job-Seite, die Ihren Betrieb ehrlich zeigt — Team, Arbeit, Konditionen. Bewerbung in zwei Minuten, ohne Anschreiben.',
      },
      {
        name: 'Video-Content vom Team',
        text: 'Ihr echtes Team vor der Kamera statt Stockfoto-Handwerker. Das überzeugt Bewerber mehr als jede Stellenanzeige.',
      },
      {
        name: 'Strukturierter Bewerber-Prozess',
        text: 'Alle Bewerbungen laufen sortiert an einem Ort zusammen. Schnelle Rückmeldung, klarer Ablauf — vom ersten Kontakt bis zum Probearbeiten in unter einer Woche.',
      },
    ],
    zahlen: [
      { wert: '10', label: 'besetzte Stellen in einer Kampagne' },
      { wert: '< 1 Woche', label: 'bis zum ersten Probearbeiten' },
      { wert: '0', label: 'unpassende Bewerbungen im Postfach' },
    ],
  },
];
