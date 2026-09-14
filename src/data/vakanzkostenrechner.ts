/* Vakanzkostenrechner — Werte, Presets und Texte.

   ┌───────────────────────────────────────────────────────────────────┐
   │  ACHTUNG: Die Gewerk-Presets weiter unten sind NICHT bestätigt.   │
   │  Sie stammen aus der Build-Spec und sind dort ausdrücklich als     │
   │  Platzhalter gekennzeichnet. Solange WERTE_BESTAETIGT auf false    │
   │  steht, trägt die Seite noindex und bleibt aus der Sitemap.        │
   │  Ein Rechner mit falschen Branchenwerten schadet mehr als keiner.  │
   │  Nach Freigabe durch Iwo: Werte prüfen, dann die Konstante auf     │
   │  true setzen — mehr ist nicht zu tun.                              │
   └───────────────────────────────────────────────────────────────────┘ */
export const WERTE_BESTAETIGT = false;

/* --- Rechenkonstanten ----------------------------------------------------
   Stehen hier und nicht im Script, damit sie an einer Stelle prüfbar sind
   und im Abschnitt „Wie wir rechnen" denselben Ursprung haben wie die
   Rechnung selbst. */
export const ARBEITSTAGE_PRO_MONAT = 21;
/** Zuschlagssatz auf Überstunden — nicht der volle Stundenlohn. */
export const UEBERSTUNDEN_ZUSCHLAG = 0.25;
/** Arbeitgeberanteil an den Lohnnebenkosten, fällt auch auf den Zuschlag an. */
export const LOHNNEBENKOSTEN = 0.21;

export interface Gewerk {
  /** Wert im Auswahlfeld und in der Adresszeile */
  schluessel: string;
  name: string;
  /** Netto-Verrechnungssatz je Stunde in Euro */
  satz: number;
  /** fakturierbare Stunden im Monat */
  stunden: number;
  /** Deckungsbeitrag in Prozent */
  db: number;
}

/* Die Reihenfolge folgt dem Branchen-Raster der Startseite. Ob die Liste
   bei den sechs Kernbranchen bleiben oder breiter werden soll, ist noch
   offen (Frage 4 der Spec) — breiter bringt mehr Suchanfragen, schmaler
   stützt die Positionierung. */
export const gewerke: Gewerk[] = [
  { schluessel: 'sanierung', name: 'Sanierung & Renovierung', satz: 65, stunden: 125, db: 35 },
  { schluessel: 'elektro', name: 'Elektro / Photovoltaik', satz: 72, stunden: 125, db: 45 },
  { schluessel: 'maler', name: 'Maler & Lackierer', satz: 58, stunden: 130, db: 40 },
  { schluessel: 'shk', name: 'SHK & Heizungsbau', satz: 75, stunden: 120, db: 35 },
  { schluessel: 'industrie', name: 'Industrie- & Anlagenbau', satz: 75, stunden: 130, db: 30 },
  { schluessel: 'produktion', name: 'Produktion & Fertigung', satz: 68, stunden: 135, db: 30 },
  { schluessel: 'dach', name: 'Dachdecker', satz: 70, stunden: 120, db: 32 },
  { schluessel: 'zimmerer', name: 'Zimmerer / Holzbau', satz: 72, stunden: 120, db: 30 },
  { schluessel: 'maurer', name: 'Maurer / Betonbau', satz: 65, stunden: 125, db: 28 },
  { schluessel: 'tiefbau', name: 'Tiefbau / Straßenbau', satz: 68, stunden: 130, db: 22 },
  { schluessel: 'metallbau', name: 'Metallbau / Schlosser', satz: 70, stunden: 120, db: 35 },
  { schluessel: 'tischler', name: 'Tischler / Schreiner', satz: 68, stunden: 120, db: 33 },
];

/** Vorauswahl, wenn nichts in der Adresszeile steht */
export const GEWERK_STANDARD = 'shk';

/* Grenzen der Eingabefelder. Werte außerhalb werden auf die Grenze
   gezogen, statt die Rechnung mit Unsinn zu füttern. */
export const grenzen = {
  stellen: { min: 1, max: 20, standard: 1 },
  monate: { min: 1, max: 24, standard: 3 },
  satz: { min: 35, max: 150 },
  stunden: { min: 60, max: 170 },
  db: { min: 15, max: 60 },
  kfz: { min: 0, max: 5000, standard: 450 },
  ueberstunden: { min: 0, max: 400, standard: 0 },
  bruttolohn: { min: 0, max: 120, standard: 26 },
  recruiting: { min: 0, max: 200000, standard: 0 },
  verkuerzung: { min: 2, max: 12, standard: 6 },
};

export const hero = {
  titelVorn: 'Was kostet Sie eine ',
  titelKursiv: 'offene Stelle',
  titelHinten: ' wirklich?',
  lead: 'Eine unbesetzte Stelle kostet nicht erst dann etwas, wenn jemand kündigt. Sie kostet jeden Arbeitstag, an dem die Arbeit liegen bleibt oder jemand anders sie mitmacht. Hier rechnen Sie es für Ihren Betrieb aus.',
  hinweisDaten:
    'Ihre Zahlen bleiben in Ihrem Browser. Wir übertragen und speichern nichts.',
};

export const ergebnisTexte = {
  konservativ:
    'Wir rechnen bewusst konservativ. Die tatsächlichen Kosten liegen meist höher — Kundenverluste, abgelehnte Anfragen und Kündigungen durch Überlastung sind hier nicht eingerechnet.',
  recruitingHinweis:
    'Nicht im Schaden enthalten: diese Kosten fallen an, sobald Sie suchen — unabhängig davon, wie lange die Stelle offen bleibt.',
  ctaTitel: 'Wir schauen uns Ihre Stellenausschreibung an und sagen Ihnen, woran es liegt.',
  ctaKnopf: 'Kostenloses Erstgespräch',
};


export interface Luecke {
  /* Verbindet den Eintrag mit seinem Icon in WasFehlt.astro. Das Icon
     selbst ist Markup und steht deshalb nicht hier. */
  schluessel: 'abgesprungen' | 'ueberlastung' | 'kuendigung';
  titel: string;
  text: string;
}

/* Was der Rechner nicht kann. Das offen zu sagen kostet nichts und ist
   glaubwürdiger als eine Zahl, die alles behauptet. */
export const luecken: Luecke[] = [
  {
    schluessel: 'abgesprungen',
    titel: 'Kunden, die nicht wiederkommen',
    text: 'Wer vier Wochen auf einen Termin wartet, ruft beim nächsten Mal jemand anderen an. Dieser Verlust taucht in keiner Rechnung auf, weil die Anfrage nie gestellt wurde.',
  },
  {
    schluessel: 'ueberlastung',
    titel: 'Arbeit unter Druck',
    text: 'Wenn zu wenige zu viel schaffen müssen, leidet die Ausführung. Nacharbeit, Reklamationen und ein Ruf, der Jahre gebraucht hat, stehen hier nicht drin.',
  },
  {
    schluessel: 'kuendigung',
    titel: 'Die nächste Kündigung',
    text: 'Dauerhafte Überlastung ist der häufigste Grund, warum gute Leute gehen. Aus einer offenen Stelle werden dann zwei.',
  },
];

export interface Faq {
  frage: string;
  antwort: string;
}

export const faqs: Faq[] = [
  {
    frage: 'Was sind Vakanzkosten?',
    antwort:
      'Die Kosten, die entstehen, solange eine Stelle unbesetzt ist. Dazu gehört der Umsatz, den der fehlende Mitarbeiter erwirtschaftet hätte, ebenso wie Kosten, die weiterlaufen — etwa ein Fahrzeug, das steht, oder Überstunden, die das übrige Team leistet. Nicht dazu gehören die Kosten der Suche selbst.',
  },
  {
    frage: 'Warum ist der entgangene Umsatz höher als der Schaden am Betriebsergebnis?',
    antwort:
      'Weil vom Umsatz auch Material und Lohn abgegangen wären. Übrig geblieben wäre nur der Deckungsbeitrag, und genau der fehlt Ihnen am Ende. Den vollen Umsatz als Schaden auszuweisen wäre eine schöne Zahl, aber betriebswirtschaftlich falsch.',
  },
  {
    frage: 'Warum rechnen Sie nur mit 120 bis 135 produktiven Stunden im Monat?',
    antwort:
      'Weil das die Stunden sind, die Sie tatsächlich abrechnen. Von rund 165 Arbeitsstunden im Monat gehen Fahrtzeit, Rüstzeit, Werkstatt, Dokumentation und Leerlauf ab. Wer mit 165 Stunden rechnet, bekommt ein Ergebnis, das im Erstgespräch niemand ernst nimmt.',
  },
  {
    frage: 'Warum sind die Recruitingkosten nicht im Gesamtschaden enthalten?',
    antwort:
      'Weil sie nicht von der Vakanzdauer abhängen. Eine Stellenanzeige, ein Personalvermittler oder Zeitarbeit kosten dasselbe, ob die Stelle sechs Wochen oder sechs Monate offen ist. Sie sind Kosten der Besetzung, nicht der Vakanz — deshalb weisen wir sie getrennt aus.',
  },
  {
    frage: 'Warum zählen Überstunden nur mit dem Zuschlag?',
    antwort:
      'Die Überstunden ersetzen Arbeit, die der fehlende Mitarbeiter sonst gemacht hätte — und für die Sie ihn bezahlt hätten. Die Mehrkosten sind deshalb nur die Differenz: der Zuschlag und die Lohnnebenkosten darauf. Den vollen Stundenlohn anzusetzen würde dieselbe Arbeit doppelt berechnen.',
  },
  {
    frage: 'Wie genau ist diese Berechnung?',
    antwort:
      'Sie ist eine Näherung, und sie ist bewusst vorsichtig gerechnet. Jeder Wert, mit dem wir rechnen, steht im Rechner selbst und lässt sich überschreiben. Für eine belastbare Zahl brauchen Sie Ihre echten Werte aus der Nachkalkulation — dafür ist der Rechner der Einstieg, nicht der Ersatz.',
  },
  {
    frage: 'Ab wann lohnt es sich, etwas zu ändern?',
    antwort:
      'Sobald die Kosten der Vakanz über den Kosten der Besetzung liegen. Der Rechner zeigt Ihnen weiter oben, was Sie sparen, wenn die Suche kürzer ausfällt — halten Sie diese Zahl neben das, was eine bessere Ausschreibung kostet.',
  },
];

/* Dieselbe Überschrift wie auf /mitarbeiter-gewinnen. Der vorherige Text
   („Die Stelle kostet jeden Tag") hat den Druck aus dem Rechner in den
   Abschluss verlängert — nach einer vierstelligen Schadenssumme ist das
   zu viel. Hier soll stattdessen jemand sitzen, dem man die Sache
   zutraut. */
export const abschluss = {
  titelVorn: 'Wir wissen zu gut, dass die Suche nach der ',
  titelMarker: 'richtigen Agentur',
  titelMitte: ' mindestens genauso schwer ist wie die Suche nach ',
  titelKursiv: 'den richtigen Leuten',
  titelHinten: '.',
  lead: 'Eine Stunde, kostenlos, ohne Verpflichtung. Wir schauen uns Ihre Stellenausschreibung an und sagen Ihnen, woran es liegt — auch wenn Sie sich am Ende gegen uns entscheiden.',
};
