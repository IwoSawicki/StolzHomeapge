/* Texte der Landingpage /korbaktion.

   Wer hier landet, hat gerade den QR-Code auf der Rückseite des Flyers
   gescannt, der in einem Brötchenkörbchen lag. Die Seite muss deshalb
   nicht erklären, wer wir sind — sie muss dort weitermachen, wo der Flyer
   aufgehört hat, und dem Chef eine Sache anbieten, die ihn nichts kostet.

   Der Flyer sagt vorne „An die letzte Werbeanzeige erinnern Sie sich
   nicht" und hinten „An dieses Körbchen erinnern Sie sich aber bestimmt".
   Die Seite nimmt genau diesen Faden auf. */

export const hero = {
  eyebrow: 'Korbaktion',
  titelVorn: 'Wir hoffen, die Brötchen haben ',
  titelKursiv: 'geschmeckt',
  titelHinten: '.',
  lead: 'Sie haben den Code auf der Rückseite gescannt — und damit gerade selbst bewiesen, was darauf stand. Genau das ist unsere Arbeit: Marketing, an das man sich erinnert. Für Ihre Kunden und für Ihre künftigen Mitarbeiter.',
  vertrauen: 'Über 50 Projekte seit 2022',
};

/* Das Formular ist der eigentliche Zweck der Seite: ein Angebot, das
   nichts kostet und bei dem der Chef nur ein Feld ausfüllen muss, das er
   im Kopf hat. Name und Telefon stehen darunter, weil das Ergebnis im
   Gespräch kommt — nicht als automatische PDF-Auswertung, die wir nicht
   liefern. */
export const formular = {
  titel: 'Kostenloser Sichtbarkeits-Check',
  lead: 'Tragen Sie Ihre Webseite ein. Wir schauen nach, wonach Ihre Kunden in Ihrer Region suchen und wo Sie dabei stehen.',
  knopf: 'Check anfordern',
  nachsatz: 'Antwort in der Regel am selben Tag.',
};

export interface CheckPunkt {
  titel: string;
  text: string;
}

/* Was im Check steht. Bewusst nur das, was Iwo ohnehin im Erstgespräch
   macht (siehe /kunden-gewinnen) — hier ist nichts versprochen, was
   danach nicht kommt. */
export const checkPunkte: CheckPunkt[] = [
  {
    titel: 'Wonach gesucht wird',
    text: 'Welche Begriffe Ihre Kunden in Ihren Orten tatsächlich bei Google eingeben — und wie oft im Monat.',
  },
  {
    titel: 'Wo Sie stehen',
    text: 'Ihre Position zu diesen Begriffen. Und wer gefunden wird, wenn Sie es nicht werden.',
  },
  {
    titel: 'Was sich lohnt',
    text: 'Welcher Schritt bei Ihnen den größten Unterschied macht. Auch dann, wenn Sie ihn ohne uns gehen.',
  },
];

export const checkNachsatz =
  'Eine Stunde, kostenlos, ohne Verpflichtung. Danach wissen Sie, was in Ihrer Region zu holen ist — unabhängig davon, wie Sie sich entscheiden.';

/* Die Erklärung der Aktion. Sie steht hier, weil die Frage „warum steht
   morgens jemand mit einem Körbchen vor meiner Tür?" sonst im Raum bleibt
   — und weil die Antwort zufällig genau das ist, was wir verkaufen. */
export const warum = {
  titelVorn: 'Warum wir mit einem Körbchen ',
  titelKursiv: 'vorbeikommen',
  titelHinten: '',
  absaetze: [
    'Wir hätten Ihnen eine E-Mail schreiben können. Die wäre zwischen elf anderen gelandet, und Sie hätten sie heute Abend nicht mehr gewusst.',
    'Also sind wir hingegangen. Das ist aufwendiger, langsamer und lässt sich nicht automatisieren — und genau deshalb funktioniert es. Sie haben den Code gescannt, Sie lesen das hier. Der Beweis lag in Ihrer Küche.',
    'Und nein, wir sind kein Catering. Wir sorgen dafür, dass Betriebe an der Bergstraße gefunden werden — von Kunden, die einen Auftrag zu vergeben haben, und von Leuten, die einen neuen Arbeitgeber suchen.',
  ],
};

export interface Weg {
  eyebrow: string;
  titel: string;
  text: string;
  href: string;
  linkText: string;
}

/* Zwei Wege statt einer Leistungsliste: der Chef soll in einem Blick
   erkennen, welche der beiden Fragen seine ist. */
export const wege: Weg[] = [
  {
    eyebrow: 'Kunden gewinnen',
    titel: 'Ihnen fehlen die richtigen Aufträge',
    text: 'Eine Webseite, die bei Google gefunden wird, und eine Positionierung, die Sie aus dem Preisvergleich holt. Damit Anfragen von Leuten kommen, die schon kaufen wollen.',
    href: '/kunden-gewinnen',
    linkText: 'Zum Platzhirsch-System',
  },
  {
    eyebrow: 'Mitarbeiter gewinnen',
    titel: 'Ihnen fehlen die richtigen Leute',
    text: 'Ein Drehtag bei Ihnen im Betrieb, Anzeigen dort, wo Ihre Leute abends unterwegs sind, und ein Bewerbungsformular, das aussortiert, bevor es auf Ihrem Schreibtisch landet.',
    href: '/mitarbeiter-gewinnen',
    linkText: 'Zum Meistermagnet-System',
  },
];

export const ansprechpartner = {
  titelVorn: 'Sie sprechen mit ',
  titelMarker: 'mir',
  text: 'Das Körbchen habe ich selbst vorbeigebracht, und den Check mache ich auch selbst. Mein Büro liegt im Gewerbegebiet Bensheim — nah genug, um für Fotos und Videos in Ihren Betrieb zu kommen. Was Ihr Betrieb besser kann als die anderen im Ort und woran wir messen, ob es funktioniert, besprechen Sie mit mir, nicht mit einem Kundenberater.',
  rolle: 'Inhaber · Stolz Marketing, Bensheim',
};

export const abschluss = {
  titelVorn: 'Wenn Sie es ',
  titelMarker: 'kurz machen',
  titelMitte: ' wollen: rufen Sie an. Sonst schreiben Sie ',
  titelKursiv: 'hier drüben',
  titelHinten: '.',
  lead: 'Zehn Minuten am Telefon reichen, um zu klären, ob sich der Check für Ihren Betrieb überhaupt lohnt. Wenn nicht, sagen wir das auch.',
};
