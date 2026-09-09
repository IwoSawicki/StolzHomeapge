# Abweichungen von der Design-Vorlage

Alles, was im Nachbau bewusst anders ist als in `design/`. Nichts davon wurde
still geändert. Punkte mit **[Rückfrage]** brauchen eine Entscheidung von Iwo.

Stand: alle vier Seiten der Vorlage plus Kontakt, Impressum und Datenschutz.

---

## 1. Die Prototypen widersprechen dem Handoff-Dokument

`design/README.md` beschreibt den Hero mit der H1 „Wir bringen Ihren Betrieb
online nach vorne". In `design/STARTSEITE.dc.html` steht
„Volle Auftragsbücher & passende Bewerber".

Auch bei den Größen weicht das README ab (H1 `clamp(36px, 4.8vw, 60px)` statt
`clamp(38px, 5vw, 60px)`, H2 bis 44px statt 42px in den Leistungen).

**Umgesetzt:** Der Prototyp gilt, weil er der gerenderte Entwurf ist und
CLAUDE.md „Vorlage gewinnt" festlegt. Das README ist als Regelwerk verwendet
worden (Farbrollen, Animationsdauern, Breakpoints), nicht als Wertetabelle.

**[Rückfrage]** Falls die README-H1 die neuere Fassung ist, bitte kurz sagen —
dann tausche ich Überschrift und Größen.

---

## 2. Vierte Team-Kachel „Name / Rolle" weggelassen

Die Vorlage zeigt im Team-Raster vier Kacheln: Timon, Gintas, Moritz (Porträt
fehlt) und eine vierte, komplett leere mit dem Text „PORTRÄT · Name",
„Name", „Rolle".

**Umgesetzt:** Drei Kacheln. Die vierte ist ein Layout-Platzhalter für eine
künftige Person und würde auf einer Live-Seite wie ein Fehler aussehen.

Das ist der einzige strukturelle Unterschied zur Vorlage und erklärt die
gesamte verbleibende Höhendifferenz (Desktop +118px, Tablet −502px, weil das
Raster dort von vier auf drei Spalten wechselt).

**[Rückfrage]** Soll die vierte Kachel rein (dann kommt sie zurück), oder gibt
es eine vierte Person mit Name und Rolle? Moritz' Porträt fehlt ebenfalls noch
(`design/README.md`, Offene Punkte Nr. 8) — bis dahin steht dort die
schraffierte Platzhalterfläche der Vorlage.

---

## 3. Einleitungsabsatz „Warum Stolz funktioniert" normalisiert

In der Vorlage steht dort:

```html
<p style="font-size: 19px; color: #000000; …">
  <span style="color: #00000080; font-family: Roboto, sans-serif;
               font-size: 18px; white-space: pre-wrap">…</span>
</p>
```

Roboto gehört nicht zum Schriftsystem (Inter, Playfair Display, Monospace),
`#00000080` nicht zur Farbpalette, und `white-space: pre-wrap` erzwingt einen
Zeilenumbruch mitten im Satz. Das sind Spuren von eingefügtem Text.

**Umgesetzt:** Wie jeder andere Lead-Absatz der Seite — Inter, `text-18`,
`leading-body`, `text-ink-muted`, `max-w-680`, zentriert. Der Wortlaut ist
unverändert.

---

## 4. Zeilenumbrüche in Überschriften und Absätzen

`design/README.md` nennt als Regel: „`text-wrap: balance` auf Überschriften,
`text-wrap: pretty` auf Absätzen". Die Prototypen setzen das nur an einzelnen
Elementen inline.

**Umgesetzt:** Als globale Regel im Basis-Layer, also für alle `h1`/`h2`/`h3`
und alle `p`.

Folge: einzelne Überschriften brechen an anderer Stelle um als im Prototyp,
zum Beispiel „Eine Webseite, die drei / Geschäfte sauber trennt" statt
„… die drei Geschäfte sauber / trennt". Typografisch ist das Ergebnis besser
und entspricht der ausgeschriebenen Regel.

**[Rückfrage]** Falls die Umbrüche exakt wie im Prototyp sein sollen, nehme ich
die globale Regel raus und setze sie nur dort, wo der Prototyp sie hat.

---

## 5. `#E3F53F` mit `#E4F53F` zusammengefasst

Die Vorlage nutzt an fünf Stellen `#E3F53F` statt des sonst durchgängigen
`#E4F53F` — ein Unterschied von einem Wert im Grünkanal, nicht wahrnehmbar.

**Umgesetzt:** Ein einziges Token `--color-lime: #E4F53F`.

---

## 6. Deutschlandkarte ohne iframe und ohne CDN

Die Vorlage bindet `design/karte-deutschland.html` per `<iframe>` ein. Diese
Datei lädt zur Laufzeit d3 und topojson von unpkg und die Geodaten von jsDelivr
und zeichnet die Karte im Browser.

**Umgesetzt:** `src/components/KarteDeutschland.astro`. Der Umriss ist einmalig
mit **derselben** Projektion vorberechnet (`geoMercator`,
`fitExtent([[30,30],[530,690]])`, viewBox 560×720) und als Pfad fest im Bauteil
hinterlegt. Markerposition, Verlauf, Schlagschatten und Beschriftung sind
unverändert.

Gründe: keine Requests an fremde Server (DSGVO), kein Laufzeit-JavaScript,
kein iframe, und die Karte ist auch offline da. Die Farben liegen als Tokens
(`karte-oben`, `karte-unten`, `karte-kante`).

---

## 7. Fehlende Projekt-Screenshots wiederbeschafft

Die Vorlage verweist auf `design/uploads/pasted-1788262317870-0.png` und zwei
weitere — der Ordner `design/uploads/` ist nicht mit ausgeliefert worden.

Über die `alt`-Texte und die Seitenverhältnisse ließen sich alle drei im Branch
`main` wiederfinden, in höherer Auflösung und identischem Zuschnitt:

| Vorlage                        | verwendet                                        | Verhältnis   |
| ------------------------------ | ------------------------------------------------ | ------------ |
| „Startseite HePa Baut"         | `src/assets/projekte/hepa-baut-startseite.png`   | 1,657 ✓      |
| „Startseite J Hoch 2"          | `src/assets/projekte/jhoch2-startseite.png`      | 1,659 ✓      |
| „Startseite NKN und PV Elektrik" | `src/assets/projekte/nkn-pv-elektrik-startseite.png` | 1,660 ✓ |

Der Screenshot für DMK Bau fehlt auch in der Vorlage — dort steht die
Platzhalterfläche „SCREENSHOT · DMK Bau", die übernommen wurde.

---

## 8. `alt`-Texte ergänzt

Die Vorlage hat bei den Porträts knappe `alt`-Texte („Timon", „Gintas"). Für
Bildersuche und Screenreader sind sie ausgeschrieben:
„Timon, Foto- und Videoproduktion bei Stolz Marketing".

Die zweite, nur dekorative Hälfte des Logo-Marquees ist `aria-hidden` und trägt
ein leeres `alt`.

**[Rückfrage]** Die Formulierungen sind mein Vorschlag und sollten freigegeben
werden.

---

## 9. Barrierefreiheit über die Vorlage hinaus

Die Vorlage regelt das nicht; ergänzt wurden:

- sichtbarer Tastaturfokus (`:focus-visible`, Lime-Outline)
- `prefers-reduced-motion: reduce` schaltet Endlosanimationen ab
- Burger-Menü: `aria-expanded`, `aria-controls`, `inert` im geschlossenen
  Zustand, Fokus auf den Schließen-Button, Schließen per Escape und beim
  Überschreiten von 1040px
- FAQ: die Fragen sind Buttons in `h3`, mit `aria-expanded`, `aria-controls`
  und `role="region"` auf der Antwort
- Slider-Pfeile mit `aria-label` und `aria-controls`
- Bewertungen als `<figure>`/`<blockquote>`/`<figcaption>`
- die Schritte in „Zusammenarbeit" als `<ol>`
- Footer-Spalten als `<nav>` mit `aria-label`; die Spaltenköpfe bleiben
  `<span>`, damit sie nicht mit den Sektionsüberschriften konkurrieren
- „UNSER TEAM" ist ein `<h2>` (in der Vorlage ein `<span>`), weil es das
  Team-Raster tatsächlich überschreibt — optisch identisch

---

## 10. Meta-Angaben abgeleitet

Die Vorlage macht keine Angaben zu `<title>`, Description oder OG-Tags. Aus
H1 und Lead der Startseite gebildet:

- **Title:** „Stolz Marketing | Volle Auftragsbücher & passende Bewerber"
- **Description:** „Marketing für Handwerksbetriebe an der Bergstraße und in
  Südhessen: Wunschprojekte gewinnen, offene Stellen besetzen und den Betrieb
  online so zeigen, wie er wirklich ist."

Das OG-Bild ist aus dem Branch `main` übernommen (1200×630, das von Open Graph
empfohlene Maß) und liegt unter `src/assets/og-image-stolz-marketing.png`.

**[Rückfrage]** Title und Description bitte noch freigeben oder umformulieren.

---

## 11. JSON-LD: Anschrift statt Arbeitsort

Die Vorlage nennt im Kontaktbereich und im Footer „Gewerbegebiet Bensheim",
das Copyright lautet „© 2026 Stolz Marketing · Bensheim". CLAUDE.md führt als
Anschrift Heidelbergerstraße 15D, 64385 Reichelsheim.

**Umgesetzt:** Sichtbar steht überall der Text der Vorlage. Im JSON-LD
(`ProfessionalService`) steht die Anschrift aus CLAUDE.md, weil strukturierte
Daten die eingetragene Adresse erwarten.

**Geklärt:** Das Büro steht in Bensheim und damit wird geworben; die Firma ist
offiziell in Reichelsheim gemeldet. Die jetzige Aufteilung ist also richtig —
sichtbar Bensheim, in den strukturierten Daten und im Impressum Reichelsheim.

---

## 12. Social-Links

Die Vorlage verlinkt die nackten Portal-Startseiten
(`https://www.instagram.com/`, `.../linkedin.com/`, `.../youtube.com/`), hat
dort also noch keine echten Profile hinterlegt.

**Umgesetzt und geklärt:** Instagram und LinkedIn
(`https://www.linkedin.com/in/iwo-sawicki/`) zeigen auf die echten Profile.
YouTube ist entfallen — es gibt keinen Kanal.

---

## 13. Grauer Merksatz in der mittleren Karte

In „Warum es funktioniert" ist der kursive Merksatz der zweiten Karte
`#5C665E`, bei Karte 1 und 3 hat er keine Farbangabe und erbt Tinte.

**Umgesetzt:** Exakt wie die Vorlage, inklusive der Ungleichheit.

**[Rückfrage]** Vermutlich ein Versehen im Entwurf. Sollen alle drei gleich
aussehen — und wenn ja, grau oder schwarz?

---

## 14. Glow am CTA „Zusammenarbeit anfragen" ergänzt

Der gelbe CTA unter den Bewertungen ist in der Vorlage der einzige gelbe
Button **ohne** `box-shadow` — auf der Startseite wie auf der Projekte-Seite.
Alle übrigen (Header, Burger-Menü, Zusammenarbeit, Footer) haben den Glow.

**Umgesetzt:** Auf Wunsch von Iwo bekommt er `shadow-glow` wie alle anderen.
Maße, Farbe, Schriftgröße und Innenabstände bleiben unverändert.

Da der Button auf der Projekte-Seite mit identischen Maßen wiederkommt, ist er
als Variante `lime-fest` in `Button.astro` hinterlegt und nicht zweimal von
Hand gebaut.

---

## 15. Schrift-Stack: generischer Fallback statt system-ui

Ursprünglich stand `--font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI',
sans-serif`. Die Vorlage nutzt schlicht `'Inter', sans-serif`.

Das ist nicht kosmetisch: Der Pfeil `→` (U+2192) liegt **nicht** in Inters
Latin-Subset und wird deshalb aus der nächsten Schrift im Stack geholt. Mit
`system-ui` davor war der Pfeil in allen CTAs 15,09px statt 18px breit.

**Umgesetzt:** Stack exakt wie die Vorlage. Damit stimmen alle Buttonmaße
wieder auf den Pixel.

---

## 16. Kopfbereich nach dem bisherigen Auftritt

Die Design-Vorlage sieht als Sticky-Leiste dieselbe Anordnung wie im
Seitenkopf vor und unter 1040px ein Vollbild-Overlay. Iwo bevorzugt die
Lösung des bisherigen Auftritts (Branch `main`), deshalb ist sie übernommen —
Aufbau und Verhalten von dort, Farben und Maße aus dem neuen Designsystem:

- **Desktop:** oben weiterhin die statische Navigation der Vorlage. Ab 500px
  Scrolltiefe schwebt eine Pille von oben ein — weiß-transparentes Glas mit
  Blur, Rahmen, weichem Schatten und runden Ecken, auf Inhaltsbreite (1160px)
  zentriert statt über die volle Fensterbreite. Sie ist auch auf der dunklen
  Startseite hell, damit sie sich vom Grund abhebt.
- **Mobil:** oben ein Balken mit Logo und Menü-Knopf, dessen Menü nach unten
  aufklappt. Sobald er aus dem Blick scrollt, erscheint unten eine schwebende
  Glas-Pille; ihre Links klappen nach oben auf, gestaffelt, mit geblurrtem
  Hintergrund. Das Vollbild-Overlay der Vorlage entfällt dafür.

Die Umschaltschwelle bleibt der Breakpoint 1040px aus dem Designsystem (der
alte Auftritt schaltete bei 1200px).

Die Glas-Optik ist für beide — Sticky-Pille oben und Mobil-Pille unten — in
**einer** Klasse `.glaspille` definiert, damit sie nicht auseinanderlaufen
kann. Der Blur steht bewusst als Utility am Element und nicht im Scoped-CSS:
dort verwarf der Minifier die unpräfixierte `backdrop-filter`-Zeile und ließ
nur `-webkit-` übrig, wodurch der Blur in Chromium wirkungslos war.

---

## 17. Kontaktseite ist nicht Teil der Vorlage

`design/` enthält vier Seiten, eine Kontaktseite ist nicht dabei. Die Seite
folgt der Vorlage, die Iwo geschickt hat (zentrierte Spalte, beschriftete
Felder, leuchtender CTA, Kontaktzeile darunter), umgesetzt mit den Tokens des
Stolz-Designsystems auf hellem Grund.

Abweichungen von jener Vorlage:

- **Kein Telefonfeld mit Ländervorwahl-Auswahl.** Das braucht eine
  zusätzliche Bibliothek; CLAUDE.md verlangt dafür eine Rückfrage. Aktuell ein
  normales `tel`-Feld.
- **Nachrichtenfeld ergänzt** (optional), damit Anfragen gleich Kontext haben.
- Der gelbe Akzent in der Überschrift ist der Textmarker des Designsystems,
  weil Lime als Schriftfarbe auf Weiß nicht lesbar wäre.

**[Rückfrage]** Soll das Telefonfeld die Ländervorwahl-Auswahl bekommen?

---

## 18. Datenschutztext an den heutigen Stand angepasst

Der Text kam 1:1 von der alten Seite und passte nicht mehr. Nach Klärung mit
Iwo:

- **Web3Forms ergänzt** — der Versanddienst beider Kontaktformulare, mit
  Rechtsgrundlagen und dem Hinweis auf die Drittlandübermittlung.
- **Calendly und Font Awesome entfernt** — beides kommt nicht zum Einsatz.
- **Google Analytics und Umami bleiben**, weil beide weiterhin laden.

---

## 19. Unterseiten: was dort fehlt oder abweicht

**Projekte.** Vollständig nach Vorlage. Der Projekte-Band steht dort auf Weiß
statt auf Dunkelgrün (die Karten bleiben dunkel) und hat keine Hinweiszeile zu
den Kampagnenzahlen — beides jetzt über Props gesteuert, damit sich Startseite
und Projekte-Seite dieselbe Sektion teilen.

**Kunden gewinnen.** Alle neun Sektionen umgesetzt. Zwei Punkte:

- **Das Hero-Bild fehlt.** Die Vorlage verweist auf
  `screenshot-2026-09-01-at-13-18-02-mti7v13x-1hkw.png`, die Datei ist im
  Export nicht enthalten. Bis dahin steht dort die schraffierte
  Platzhalterfläche.
- **Pflichtfelder im Abschlussformular ergänzt.** Die Vorlage markiert kein
  Feld als Pflicht, ein leeres Formular wäre absendbar. Name und Telefonnummer
  sind jetzt Pflicht, Betrieb und Nachricht optional.

**Mitarbeiter gewinnen.** Die Design-Vorlage enthält nur Hero und
Logo-Marquee; der Rest stand dort als Platzhalter „TODO · Copy folgt". Die
Inhalte kamen später als eigenes Handoff-Dokument
(`BUILDmitarbeitergewinnen.md`, Stand 02.09.2026). Die Seite ist danach
gebaut — siehe Punkt 27.

---

## 20. Wiederverwendung statt Kopien

Beim Bau der Unterseiten sind mehrere Bausteine zusammengelegt worden, damit
Inhalte nicht doppelt gepflegt werden müssen:

- `LogoRail` — die laufende Logoreihe, genutzt von allen drei
  Marquee-Ausprägungen (Startseite mit Verlauf, Projekte-Seite ohne, dunkles
  Band der Leistungsseiten)
- `Akkordeon` — die Auf-/Zuklapp-Mechanik, genutzt von der FAQ der Startseite
  (mit Nummern) und der Leistungsseiten (ohne)
- `Web3Formular` — Felder, Honeypot, Absenden und Statusmeldung, genutzt von
  der Kontaktseite und dem Abschlussblock
- `HeroLeistung` — der Hero beider Leistungsseiten, Texte über Props
- `Projekte` — dieselbe Sektion auf Startseite und Projekte-Seite

---

## 21. Änderungen auf Wunsch von Iwo

- **Alle Erstgespräch-Buttons zeigen auf `/kontakt`.** Die Vorlage verlinkt
  `/erstgespraech`; diese Seite gibt es nicht. Das Ziel steht jetzt an einer
  Stelle in `src/data/navigation.ts`. Ebenso die CTAs unter den Bewertungen und
  in der FAQ, die vorher auf den Anker `#kontakt` zeigten — der lief auf der
  Projekte-Seite ins Leere, weil es dort keine Kontaktsektion gibt. Nur der
  Button im Abschnitt „Der Einstieg" springt weiterhin zum Formular auf
  derselben Seite (`#anfrage`).
- **Footer-Links ohne Seite sind ausgegraut und nicht klickbar** statt ins Leere
  zu führen: Über uns, die drei Tools, alle elf Branchen, AGB und
  Cookie-Einstellungen. Gesteuert über `nochNicht: true` in
  `src/data/navigation.ts` — Flag entfernen, sobald die Seite steht.
- **Logo-Icon auf hellem Grund in Tinte statt Lime.** Die Vorlage nutzt dort
  `logo-stolz-dark.svg` mit gelbem Icon; auf Weiß trägt das Gelb nicht.
- **Beweisfall-Karte:** Innenabstand von festen 48px auf
  `clamp(32px, 5vw, 48px)`, damit sie mobil denselben Rand hat wie die
  Projektkarten daneben (32px). Ab 960px unverändert 48px.
- **FAQ-Kopf läuft nur zweispaltig mit.** Die Vorlage setzt `position: sticky`
  ohne Bedingung; sobald die Spalten umbrechen (unter rund 776px), schob sich
  der Kopf über das Akkordeon. Jetzt erst ab 800px sticky.

---

## 22. Zwei URLs für dasselbe Gewerk

Der Branchen-Slider und der Footer verlinken teils unterschiedlich:

| Slider | Footer |
| --- | --- |
| `/branchen/galabau` | `/branchen/garten-landschaftsbau` |
| `/branchen/zimmerer` | `/branchen/zimmerei` |

Dazu kennt der Slider `/branchen/umzuege`, das der Footer nicht führt, und der
Footer `/branchen/photovoltaik`, das im Slider fehlt. Beides steht so in der
Vorlage.

**[Rückfrage]** Welche Schreibweise gilt? Solange die Seiten fehlen, fällt es
nicht auf — sobald sie gebaut werden, braucht es eine Entscheidung.

---

## 23. Analytics und Einwilligung

Vom bisherigen Auftritt übernommen, Gestaltung neu:

- **Umami** (`analytics.stolz-marketing.de`) läuft ohne Einwilligung — cookielos.
  `data-domains` begrenzt die Zählung auf die Produktionsdomain, die Vorschau
  unter `redesign.stolz-marketing.de` zählt also nicht mit.
- **Google Analytics** (`G-ZK7F06197Z`) lädt **erst nach Zustimmung** im
  Einwilligungsbanner, mit `anonymize_ip`, und ebenfalls nur auf der
  Produktionsdomain. Die Wahl liegt in `localStorage`; „Cookie-Einstellungen"
  im Footer öffnet sie erneut.

Geprüft: Beim Erstbesuch erscheint das Banner und es geht **kein** Request an
`googletagmanager.com`; nach Ablehnen bleibt das Banner weg; der Footer-Schalter
öffnet es wieder.

---

## 24. Branchen: Raster statt Slider, ohne Links

Der Slider ist entfallen, die Sektion ist jetzt das Raster ohne Bilder. Die
Kacheln sind **nicht verlinkt und tragen keinen Pfeilkreis**, weil es die
Branchenseiten vorerst nicht geben wird (Entscheidung Iwo). Dazu passend ist
der Einleitungssatz von „Wählen Sie Ihre Branche und sehen Sie, wie wir dort
arbeiten." auf „Das sind die Gewerke, mit denen wir arbeiten." geändert — die
alte Formulierung fordert zu einem Klick auf, den es nicht gibt.

Damit erledigt sich auch Punkt 22: die abweichenden Branchen-URLs spielen
keine Rolle mehr, solange keine Seiten existieren.

---

## 25. 404-Seite ergänzt

Die Vorlage sieht keine vor; ohne sie liefert nginx seine nackte
Standardmeldung. Die Seite trägt `noindex`, führt zurück auf Startseite und
Erstgespräch und listet die Hauptnavigation.

---

## 26. Noch offen aus der Vorlage selbst

Aus `design/README.md`, „Offene Punkte" — im Nachbau stehen dort die
Platzhalterflächen der Vorlage:

1. ~~**Hero-Video** fehlt~~ — erledigt, siehe Punkt 28
2. **Bilder der 11 Branchen-Kacheln** fehlen — schraffierte Flächen mit
   „Bild SHK" usw.
3. **Porträt Moritz** fehlt
4. ~~**Kundenfotos in den Bewertungen** fehlen~~ — entfallen, siehe Punkt 29
5. **Screenshot DMK Bau** fehlt
6. **FAQ-Texte sind Entwürfe** und laut Handoff nicht freigegeben — sie stehen
   trotzdem schon drin, damit die Sektion vollständig ist
7. **Verlinkte, aber nicht gebaute Seiten:** `/erstgespraech`, `/ueber-uns`,
   `/kunden-gewinnen`, `/mitarbeiter-gewinnen`, `/projekte`,
   `/branchen/*` (11 Seiten), `/vakanzkostenrechner`, `/website-check`,
   `/sichtbarkeits-check`, `/impressum`, `/datenschutz`, `/agb`, `/cookies`.
   Die Links stehen wie in der Vorlage und laufen aktuell ins Leere.
8. **Rechtliches** (Impressum, Datenschutz, Cookie-Hinweis) fehlt komplett

---

## Was ausdrücklich *nicht* abweicht

Gegen den gerenderten Prototyp gemessen (Desktop 1440, Tablet 1024, Mobil 390):

- Schriftgrößen, Zeilenhöhen, Laufweiten, Schriftschnitte und Textfarben:
  in allen geprüften Elementen identisch
- Sektionspositionen: durchgehend innerhalb von 5px, abgesehen von Punkt 2
- kein horizontaler Überlauf auf allen drei Breiten
- Sticky-Header ab genau 500px, Burger unter 1040px, Buttongrößen unter 720px,
  Hero-Buttons untereinander unter 390px
- Branchen-Slider scrollt um exakt 350px (330px Karte + 20px Gap), gleiche
  Snap-Ausgangsposition wie die Vorlage
- FAQ: höchstens einer offen, Zeichen wechselt +/−. Startseite und
  „Kunden gewinnen" öffnen den ersten Eintrag wie die Vorlage;
  „Mitarbeiter gewinnen" startet komplett geschlossen, so verlangt es das
  eigene Handoff dieser Seite.

---

## 27. „Mitarbeiter gewinnen" nach eigenem Handoff

Grundlage ist nicht `design/Mitarbeiter einstellen.dc.html` (dort steht nur
Hero und Marquee), sondern `BUILDmitarbeitergewinnen.md` — Texte wörtlich,
Hell/Dunkel-Wechsel und Sektionsreihenfolge wie dort vorgegeben.

Umgesetzt sind Sektion 1, 1b, 2, 3, 4, 5, 6, 8 und 9. **Sektion 7
(Referenzfälle) ist bewusst nicht angelegt** — auch nicht als Platzhalter,
so steht es im Handoff. Damit stehen drei helle Sektionen am Stück (5, 6, 8),
was das Handoff ausdrücklich zulässt.

Neu gebaut, weil es dafür kein Vorbild in `design/` gibt:

- **Sektion 5 „Im Vergleich"** — dreispaltige Tabelle, die Meistermagnet-Spalte
  über hellen Kartengrund und eine Akzentlinie oben hervorgehoben, nicht
  flächig in Akzentfarbe.
- **Sektion 6 „Was Sie besetzen wollen"** — vier Zeilen als Leiter, nur durch
  Linien getrennt (keine Karten, kein Raster). Der Anstieg wird über vier
  Balken links und die von Stufe zu Stufe wachsende Überschrift gezeigt.

### Punkte, bei denen ich vom Handoff abgewichen bin

**a) Sektion 1b bleibt drin, obwohl nur sieben Logos vorliegen.**
Das Handoff verlangt acht freigegebene Kundenlogos und sonst die ersatzlose
Streichung der Sektion. Vorhanden sind sieben aufbereitete Logos, sechs davon
laufen im Marquee. Gestrichen wäre die Sektion aber auch der einzige Bruch
gegenüber `/kunden-gewinnen`, wo dieselbe Leiste steht — und das Handoff
verlangt im selben Atemzug, dass sich beide Seiten „nebeneinander wie ein Paar
lesen". Weil es ein Marquee ist und keine statische Achterreihe, fällt die
Anzahl optisch nicht auf.
**Geklärt:** Die Leiste bleibt.

**b) Die H1 steht nicht auf drei Zeilen.**
Bei 1440px sind es fünf Zeilen, bei 1040px drei. Der Satz hat 76 Zeichen; drei
Zeilen bräuchten bei der Größe `clamp(36px, 4.8vw, 60px)` rund 1040px
Textbreite, die Hero-Spalte hat aber 626px. Entweder deutlich kleinere Schrift
(dann bricht die Schwesterseiten-Parität) oder eine kürzere Überschrift.
`/kunden-gewinnen` steht zum Vergleich auf vier Zeilen.
**Geklärt:** Bleibt so, die Überschrift wird nicht gekürzt.

**c) Trust-Zeile verlinkt.**
„Google · 5,0 Sterne aus 20 Bewertungen" führt aufs Google-Unternehmensprofil
(`https://share.google/0GWPnrbiuxQtM4OO7`, in `src/data/navigation.ts` unter
`kontakt.googleProfil`). Der Block auf `/kunden-gewinnen` ist mitverlinkt,
steht dort aber weiterhin ohne Anzahl — die Vorlage nennt dort keine.

**d) Der Haupt-CTA im Hero springt zu Sektion 9, nicht auf `/kontakt`.**
So steht es im Handoff, und das Ziel gibt es auf der Seite. Die generelle Regel
„alle Buttons auf /kontakt" (Punkt 21) galt für Buttons ohne Ziel.

**e) Kursive Serif in den Sektionsüberschriften.**
Das Handoff markiert die Serif-Kursive nur in der H1. Die Sektionsüberschriften
2, 5 und 6 haben trotzdem einen kursiven Schlussteil bekommen, weil jede
Überschrift auf `/kunden-gewinnen` einen hat und die Seiten sonst nicht als
Paar lesbar sind.
**[Rückfrage]** Falls das zu viel ist, nehme ich sie in diesen drei
Überschriften raus.

**f) Die Vergleichstabelle klappt erst unter 1040px auf Karten um**, nicht
unter 720px. Vier Spalten brauchen Platz; bei 730px wurde es unleserlich eng.
1040px ist der Nav-Breakpoint des Designsystems, es kommt also keine neue
Schwelle dazu.

**g) Die hervorgehobene Karte in Sektion 3 ist die mittlere** („Betriebs-
Einblick"). Das Handoff sagt dazu nichts; auf `/kunden-gewinnen` ist ebenfalls
die mittlere dunkel hervorgehoben.

### Sonstiges

- **Kein Ortsname auf der Seite** (Entscheidung 08.09.), auch nicht in Titel
  und Description. Die Zeile „Bergstraße und Rhein-Neckar" unter der
  Telefonnummer, die `/kunden-gewinnen` im Abschlussblock hat, entfällt hier
  deshalb. Geprüft: im `<main>` steht kein Ortsname.
  Übrig bleiben der seitenweite Footer („Gewerbegebiet Bensheim",
  „© 2026 Stolz Marketing · Bensheim", der Untertitel „… an der Bergstraße und
  in Südhessen") und die strukturierten Daten im `<head>`. Beides gilt für
  alle Seiten und lässt sich nicht für eine einzelne abschalten; das Handoff
  führt im Footer selbst eine Adresse auf, die Regel zielt also auf den
  Seiteninhalt.
  **Geklärt:** „Gewerbegebiet Bensheim" bleibt im Footer stehen. Wie die
  Region darüber genau heißen soll („… an der Bergstraße und in Südhessen"),
  legt Iwo noch fest.
- **Alle FAQ-Einträge starten geschlossen.** Dafür hat `Akkordeon` die neue
  Eigenschaft `ersterOffen`; Standard bleibt „erster offen", damit sich an
  Startseite und `/kunden-gewinnen` nichts ändert.
- **Sektion 9 und der Footer bilden ein Band** — beide auf `forest-deep`,
  keine Kante dazwischen. Das galt schon vorher.
- **„Kein zweiter Call-to-Action":** im Seiteninhalt gibt es keinen — kein
  Vakanzkostenrechner, kein Download, kein zweiter Anfrageblock. Der
  Claim-Block „Lassen Sie uns über Ihren Betrieb sprechen" mit Knopf gehört
  zum seitenweiten Footer und steht auf jeder Seite, auch auf
  `/kunden-gewinnen`.
- **Bild-Platzhalter im Hero** ist als solcher beschriftet („BILD · Betrieb,
  Halle, Fahrzeug, Team") und trägt bewusst einen anderen Text als der auf
  `/kunden-gewinnen`, damit dort nicht dasselbe Motiv landet.
- **Pflichtfelder im Formular** wie auf `/kunden-gewinnen`: Name und
  Telefonnummer Pflicht, Betrieb und „Welche Stelle wollen Sie besetzen?"
  optional.

### Zusammengelegt

Sektion 3 und 4 sind auf beiden Leistungsseiten baugleich. Sie liegen jetzt als
`SystemSchritte` und `Leistungsumfang` in
`src/components/sections/leistung/` und bekommen ihre Texte über Props; die
FAQ-Sektion ist mit umgezogen. Gegengeprüft: das gebaute Markup von
`/kunden-gewinnen` ist danach bis auf die Reihenfolge zweier CSS-Klassen
identisch, alle anderen Seiten sind unverändert.

---

## 28. Hero-Video: Showreel im Hochformat

Die Vorlage sieht im Hero eine 16:9-Fläche mit Play-Kreis vor und die
Beschriftung „PLATZHALTER · VIDEO / Iwo stellt den Betrieb vor, 60–90
Sekunden". Ein solches Querformat-Video gibt es nicht. Stattdessen läuft
jetzt dasselbe Showreel wie im bisherigen Auftritt (Branch `main`) —
800×1422, also 9:16, 22 Sekunden, mit Ton.

**Umgesetzt** (Entscheidung Iwo):

- **Unter 1040px** steht die Kachel hochkant (`aspect-[9/16]`, höchstens
  440px breit und 80vh hoch) und das Video füllt sie aus. Das Hochformat
  kommt damit voll zur Geltung.
- **Ab 1040px** bleibt es beim Querformat der Vorlage. Das Video steht darin
  mittig in voller Höhe, links und rechts liegt eine unscharfe, abgedunkelte
  Vergrößerung des Standbilds — sonst stünde neben dem Hochformat tote
  Fläche. Kein zweites Video-Element, nur das Standbild als Hintergrund.
- Der Play-Kreis der Vorlage (88px, Lime, Glow) bleibt und ist jetzt der
  Auslöser: **die ganze Kachel** öffnet das Showreel groß.

**Verhalten aus `main` übernommen:** In der Kachel läuft das Video stumm,
automatisch und in Schleife — ausdrücklich auch bei eingestellter
Bewegungsreduzierung (Vorgabe Iwo). Weil Browser Autoplay trotz
`autoplay`/`muted` nicht immer sofort starten (iOS im Stromsparmodus, oder
beim Laden sind noch keine Daten da), wird an mehreren Stellen nachgefasst:
bei `loadeddata`, bei `canplay`, beim Zurückwechseln auf den Tab und
spätestens bei der ersten Nutzergeste. Ein Klick öffnet es im Overlay über der
geblurrten Seite und spielt es **mit Ton von vorn**. Schließen über das X,
Klick auf den Hintergrund oder Escape.

Ergänzt gegenüber `main`:

- Beim Öffnen wandert der Fokus auf den Schließen-Knopf und beim Schließen
  zurück auf die Kachel.
- Das Overlay-Video trägt `width`/`height`, damit der Rahmen beim Öffnen
  nicht kurz von 300×150 aufspringt.

**Ladeverhalten:** Das Standbild wird als WebP ausgeliefert (49 KB statt
2,1 MB PNG) und per `preload` vorgezogen — es ist das LCP-Element der
Startseite. Die Videodatei ist 6,2 MB groß; sie lädt wie auf `main` mit
`preload="auto"`.

**[Rückfrage]** Falls die 6,2 MB auf dem Handy zu viel sind, kann ich eine
kleinere Fassung für schmale Bildschirme ausliefern — dafür bräuchte ich
einmal `ffmpeg` im Build oder eine zweite, vorab komprimierte Datei.

---

## 29. Bewertungen ohne Kundenfoto, Leistungskarten auf Mobil kleiner

Zwei Rückmeldungen von Iwo:

**Kundenfotos.** Zwischenzeitlich waren sie raus, weil es sie nicht gab;
Iwo hat sie dann nachgereicht. Die 48×48-Kachel der Vorlage ist damit
wieder da und gefüllt. Damit ist Punkt 26.4 erledigt.

Damit in der kleinen Kachel der Kopf sitzt und nicht das ganze Bild, liegt
das Foto vergrößert und absolut positioniert darin; der Ausschnitt steht als
drei Zahlen in `src/data/startseite.ts` (`ausschnitt: [x0, y0, Seitenlänge]`).
So bleiben die hochgeladenen Originale unangetastet und der Ausschnitt lässt
sich ohne Bildbearbeitung nachjustieren. Die Fotos tragen ein leeres
`alt`-Attribut: der Name steht unmittelbar daneben, das Bild würde ihn für
Screenreader nur wiederholen.

**Leistungskarten unter 720px zurückgenommen.** Einspaltig füllte jede Karte
fast den ganzen Bildschirm (342×650px bei 390px Breite), was die
Orientierung auf der Startseite erschwerte. Geändert nur unterhalb von
720px, also dort, wo die Karten untereinander stehen:

| | vorher | jetzt |
| --- | --- | --- |
| Innenabstand der Karte | 40px | 24px |
| Höhe der Illustration | 280px | 200px (Inhalt auf 72 % skaliert) |
| Abstand zwischen den Elementen | 20px | 16px |
| Abstand über der Überschrift | 12px | 4px |

Kartenhöhe damit 518px statt 650px, die Sektion 1613px statt 1877px.

Ab 720px — wo die Karten nebeneinander stehen — gelten unverändert die Maße
der Vorlage; auf dem Desktop hat sich nichts geändert (Kartenhöhe weiterhin
571px). Die Verkleinerung läuft über `transform: scale`, die Illustrationen
selbst sind unangetastet.

---

## 30. „50+" an „Projekte" in allen Menüs

Der bisherige Auftritt (Branch `main`) zeigt am Menüpunkt „Projekte" eine
kleine Blase mit der Anzahl der Projekte. Auf Wunsch von Iwo gibt es sie
jetzt auch hier — in allen vier Menüs des Kopfbereichs: statische Navigation,
Sticky-Pille, Aufklappmenü oben und Pille unten.

- **Inhalt „50+"**, nicht die Anzahl der gezeigten Projektkacheln. Die Zahl
  deckt sich mit der Zeile im Logo-Marquee („Über 50 Projekte für
  Handwerksbetriebe seit 2022"), damit auf der Seite nicht zwei
  unterschiedliche Zahlen stehen.
- **Farbe:** `main` nutzt dort Blau, also seine Akzentfarbe. Hier ist es
  entsprechend Lime — als Fläche mit dunkler Schrift, weil Lime laut Handoff
  nie Schriftfarbe sein darf.
- Auf dem Desktop schwebt die Blase wie bei `main` oben rechts am Wort, in
  den beiden Mobil-Menüs steht sie hinter dem Wort.

Gepflegt wird sie über `badge` in `src/data/navigation.ts` — ein Feld, vier
Menüs.

---

## 31. AGB, „Projekt ansehen" und der Bewertungs-Button

**AGB entfallen.** Der Footer führte „AGB" als ausgegraute, künftige Seite.
Es gibt keine, und für ein Dienstleistungsgeschäft sind sie auch nicht
vorgeschrieben — der Eintrag ist deshalb ganz raus statt auf eine Seite zu
warten, die nicht kommt (Entscheidung Iwo).

**„Projekt ansehen" entfallen.** Jede Projektkarte trug unten einen Link
„Projekt ansehen →". Projekt-Unterseiten gibt es nicht; der Link zeigte auf
`/projekte`, auf der Projekte-Seite also auf sich selbst. Er ist raus. Der
Knopf „Zum Projekt" in der Beweisfall-Karte darüber bleibt vorerst — auf der
Startseite führt er sinnvoll auf die Projekte-Seite.

**„Wir freuen uns auf Ihre Bewertung"** steht jetzt als Sekundärbutton neben
dem CTA unter den Bewertungen und führt direkt ins Bewertungsfenster des
Google-Profils (`https://g.page/r/CQIarxwxo9MmEBM/review`). `Button` hat
dafür die neue Eigenschaft `extern`, die `target="_blank"` und
`rel="noopener"` setzt.
