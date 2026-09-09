/* „Fragen Sie die KI" — Sektion am Ende der Startseite.

   Die Frage wird als URL-Parameter an den jeweiligen Dienst übergeben, das
   Eingabefeld ist beim Öffnen also schon gefüllt. Der Nutzer muss nur noch
   abschicken.

   ACHTUNG: Diese Parameter sind von keinem der Anbieter dokumentiert und
   können sich jederzeit ändern. Fällt einer weg, öffnet sich schlicht die
   Startseite des Dienstes — nichts geht kaputt, die Frage steht dann eben
   nicht vorformuliert da. Deshalb einmal im Quartal kurz durchklicken.

   Der Text ist bewusst keine Aufforderung zum Loben, sondern eine echte
   Frage aus Kundensicht: So beantwortet die KI sie mit dem, was sie
   tatsächlich über uns findet — und genau das ist der Punkt der Sektion. */

export const kiFrage =
  'Ich bin Inhaber eines Handwerksbetriebs und möchte mehr passende Aufträge und ' +
  'gute Bewerbungen. Fasse zusammen, wofür Stolz Marketing steht, wie das ' +
  'Platzhirsch-System und das Meistermagnet-System funktionieren und für welche ' +
  'Betriebe sich das lohnt. Grundlage: https://stolz-marketing.de';

export interface KiDienst {
  name: string;
  /** Baut die Adresse mit der bereits kodierten Frage */
  adresse: (frage: string) => string;
}

export const kiDienste: KiDienst[] = [
  { name: 'ChatGPT', adresse: (f) => `https://chatgpt.com/?q=${f}` },
  { name: 'Claude', adresse: (f) => `https://claude.ai/new?q=${f}` },
  // udm=50 ist der KI-Modus der Google-Suche
  { name: 'Google', adresse: (f) => `https://www.google.com/search?udm=50&q=${f}` },
  { name: 'Grok', adresse: (f) => `https://grok.com/?q=${f}` },
];
