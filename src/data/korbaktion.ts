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
  titelAkzent: 'geschmeckt',
  titelHinten: '.',
  lead: 'Sie haben den Code auf der Rückseite gescannt — und damit gerade selbst bewiesen, was darauf stand. Genau das ist unsere Arbeit: Marketing, an das man sich erinnert. Für Ihre Kunden und für Ihre künftigen Mitarbeiter.',
  vertrauen: 'Über 50 Projekte seit 2022',
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

/* Die Erklärung der Aktion — als Gegenüberstellung statt als Fließtext.

   Die beiden Tafeln zeigen dasselbe Argument, das der Flyer macht: der
   eine Weg wird vergessen, der andere nicht. Weil der Leser den zweiten
   Weg gerade selbst gegangen ist, braucht die Sektion keine Behauptung —
   sie muss den Vorgang nur benennen. */
export const warum = {
  titelVorn: 'Zwei Wege, Ihnen etwas zu ',
  titelKursiv: 'schicken',
  titelHinten: '',
  lead: 'Einer davon hat funktioniert. Sie lesen das hier.',
  emailTafel: {
    label: 'Die E-Mail',
    titel: 'Wäre heute Abend vergessen',
    text: 'Sie wäre zwischen elf anderen gelandet. Vielleicht geöffnet, wahrscheinlich nicht. Morgen wüssten Sie unseren Namen nicht mehr.',
  },
  koerbchenTafel: {
    label: 'Das Körbchen',
    titel: 'Lag in Ihrer Küche',
    text: 'Aufwendiger, langsamer, nicht automatisierbar. Und Sie haben den Code gescannt. Genau das ist der Unterschied, den wir für Ihren Betrieb bauen.',
  },
  nachsatz:
    'Und nein, wir sind kein Catering. Wir sorgen dafür, dass Betriebe an der Bergstraße gefunden werden — von Kunden, die einen Auftrag zu vergeben haben, und von Leuten, die einen neuen Arbeitgeber suchen.',
};

export const ansprechpartner = {
  titelVorn: 'Hallo, ich bin ',
  titelMarker: 'Iwo',
  text: 'Wahrscheinlich haben wir uns heute Morgen kurz gesehen — das Körbchen habe ich selbst vorbeigebracht. Mein Büro liegt im Gewerbegebiet Bensheim, nah genug, um für Fotos und Videos in Ihren Betrieb zu kommen. Was Ihr Betrieb besser kann als die anderen im Ort und woran wir messen, ob es funktioniert, besprechen Sie mit mir, nicht mit einem Kundenberater.',
  rolle: 'Inhaber · Stolz Marketing, Bensheim',
};

export const abschluss = {
  titelVorn: 'Tragen Sie Ihre Webseite ein — den ',
  titelMarker: 'Check',
  titelMitte: ' bekommen Sie ',
  titelKursiv: 'kostenlos',
  titelHinten: '.',
  lead: 'Wenn Ihnen ein Anruf lieber ist: Die Nummer steht daneben. Zehn Minuten reichen, um zu klären, ob sich der Check für Ihren Betrieb überhaupt lohnt.',
};
