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

**[Rückfrage]** Bitte freigeben oder umformulieren. Ein OG-Bild fehlt noch
(die Vorlage liefert keins) — solange es fehlt, greift beim Teilen kein
Vorschaubild.

---

## 11. JSON-LD: Anschrift statt Arbeitsort

Die Vorlage nennt im Kontaktbereich und im Footer „Gewerbegebiet Bensheim",
das Copyright lautet „© 2026 Stolz Marketing · Bensheim". CLAUDE.md führt als
Anschrift Heidelbergerstraße 15D, 64385 Reichelsheim.

**Umgesetzt:** Sichtbar steht überall der Text der Vorlage. Im JSON-LD
(`ProfessionalService`) steht die Anschrift aus CLAUDE.md, weil strukturierte
Daten die eingetragene Adresse erwarten.

**[Rückfrage]** Ist Bensheim ein zweiter Standort oder die neue Anschrift?
Falls Reichelsheim gilt, müsste auch der sichtbare Text angepasst werden.

---

## 12. Social-Links

Die Vorlage verlinkt die nackten Portal-Startseiten
(`https://www.instagram.com/`, `.../linkedin.com/`, `.../youtube.com/`), hat
dort also noch keine echten Profile hinterlegt.

**Umgesetzt:** Instagram zeigt auf das aus CLAUDE.md bekannte Profil
`https://www.instagram.com/stolz.marketing/`. LinkedIn und YouTube stehen
unverändert auf der Portal-Startseite.

**[Rückfrage]** Die richtigen URLs für LinkedIn und YouTube — oder die beiden
Links entfernen, wenn es die Profile nicht gibt.

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

## 18. Datenschutztext beschreibt nicht den heutigen Stand

Der Text ist 1:1 von der alten Seite übernommen, wie gewünscht. Inhaltlich
passt er aber nicht mehr auf den Neuaufbau:

- Er beschreibt **Google Analytics, Google Ads, Umami Analytics, Calendly und
  Font Awesome**. Der Neuaufbau lädt derzeit nichts davon — die Startseite
  stellt keinen einzigen Fremdrequest.
- Er nennt **den Versanddienst des Kontaktformulars nicht**. Das Formular
  sendet über Web3Forms; als Auftragsverarbeiter gehört der Dienst in die
  Erklärung. Das war schon auf der alten Seite so.
- Der Abschnitt „Cookies" beschreibt Cookies, die der Neuaufbau nicht setzt.

**[Rückfrage]** Sobald feststeht, was tatsächlich zum Einsatz kommt
(Analytics ja/nein, Calendly für die Terminbuchung, Web3Forms), ziehe ich den
Text nach. Bis dahin steht die alte Fassung unverändert.

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

**Mitarbeiter einstellen.** Die Vorlage enthält nur Hero und Logo-Marquee; der
Rest steht dort als Platzhalter „TODO · Copy folgt" mit der Liste der geplanten
Sektionen (`design/README.md`, Offene Punkte Nr. 3). Genau so ist die Seite
nachgebaut — sie ist bewusst unfertig, weil die Inhalte fehlen.

**[Rückfrage]** Die Texte für „Mitarbeiter einstellen" fehlen komplett. Sobald
sie da sind, baue ich die Seite analog zu „Kunden gewinnen" fertig.

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

## 21. Noch offen aus der Vorlage selbst

Aus `design/README.md`, „Offene Punkte" — im Nachbau stehen dort die
Platzhalterflächen der Vorlage:

1. **Hero-Video** fehlt — 16:9-Fläche mit Play-Kreis und Beschriftung
   „PLATZHALTER · VIDEO / Iwo stellt den Betrieb vor, 60–90 Sekunden"
2. **Bilder der 11 Branchen-Kacheln** fehlen — schraffierte Flächen mit
   „Bild SHK" usw.
3. **Porträt Moritz** fehlt
4. **Kundenfotos in den Bewertungen** fehlen — 48×48-Kachel mit „FOTO"
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
- FAQ öffnet den ersten Eintrag, immer genau einer offen, Zeichen wechselt +/−
