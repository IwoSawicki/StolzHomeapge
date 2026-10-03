/* Die Rechnung des Vakanzkostenrechners — eine einzige Quelle für
   /vakanzkostenrechner und den Mini-Rechner der Meistermagnet-Seite v2.
   Herleitung der Werte: src/data/vakanzkostenrechner.ts. */

export interface VakanzEingabe {
  stellen: number;
  monate: number;
  /** Netto-Verrechnungssatz je Stunde */
  satz: number;
  /** fakturierbare Stunden im Monat */
  stunden: number;
  /** Deckungsbeitrag in Prozent */
  db: number;
  /** Fixkosten Fahrzeug je Monat — 0, wenn kein Fahrzeug steht */
  kfz: number;
  /** Überstunden im Monat, die das Team auffängt */
  ueberstunden: number;
  /** Bruttostundenlohn für den Überstundenzuschlag */
  lohn: number;
  arbeitstage: number;
  zuschlag: number;
  lohnnebenkosten: number;
}

export interface VakanzErgebnis {
  umsatz: number;
  dbVerlust: number;
  fixkosten: number;
  ueberMehr: number;
  gesamt: number;
  proTag: number;
}

export function vakanzkosten(e: VakanzEingabe): VakanzErgebnis {
  const umsatz = e.stellen * e.monate * e.stunden * e.satz;
  const dbVerlust = umsatz * (e.db / 100);
  const fixkosten = e.kfz * e.monate;
  const ueberMehr = e.ueberstunden * e.monate * e.lohn * e.zuschlag * (1 + e.lohnnebenkosten);
  const gesamt = dbVerlust + fixkosten + ueberMehr;
  const proTag = gesamt / (e.monate * e.arbeitstage);
  return { umsatz, dbVerlust, fixkosten, ueberMehr, gesamt, proTag };
}
