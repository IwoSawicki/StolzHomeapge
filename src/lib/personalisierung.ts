/* Personalisierung der Meistermagnet-Seite v2 über die Adresszeile —
   für den Link, den Iwo nach dem Besuch an der Haustür per WhatsApp
   schickt (Generator unter /intern/link).

     ?b=<Betriebsname>  „Für Malerbetrieb Yilmaz" über der Überschrift,
                        vorbelegt im Formular
     ?g=<gewerk>        Beruf in Simulator und Kandidaten-Karte, Gewerk-Chip,
                        Rechner — nur Schlüssel aus gewerkeV2
     ?h=a|b|c           Fassung der Überschrift (nur zum Vergleichen)

   Alles nur im Browser. Der Betriebsname wird ausschließlich per
   textContent gesetzt, von Steuerzeichen und spitzen Klammern befreit und
   auf 60 Zeichen gekürzt. */
import { gewerkeV2, type GewerkV2, type HeroVariante } from '../data/mitarbeiter-v2';

export interface Personalisierung {
  betrieb: string | null;
  gewerk: GewerkV2 | null;
  ueberschrift: HeroVariante | null;
}

export function personalisierung(): Personalisierung {
  const p = new URLSearchParams(window.location.search);
  const betrieb = (p.get('b') ?? '')
    .replace(/[\u0000-\u001f\u007f<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
  const gewerk = gewerkeV2.find((g) => g.schluessel === p.get('g')) ?? null;
  const h = p.get('h');
  const ueberschrift = h === 'a' || h === 'b' || h === 'c' ? h : null;
  return { betrieb: betrieb || null, gewerk, ueberschrift };
}
