# Handoff: Stolz Marketing Website

## Overview
Marketing-Website für Stolz Marketing (Agentur für Handwerksbetriebe und Dienstleister an der Bergstraße / Südhessen). Vier Seiten: Startseite, "Kunden gewinnen", "Mitarbeiter einstellen", "Projekte". Ziel der Seite: Erstgespräche generieren — für Kundengewinnung und für Personalgewinnung.

## About the Design Files
Die Dateien in `design/` sind **Design-Referenzen in HTML** — Prototypen, die Aussehen und Verhalten zeigen. Sie sind **kein Produktionscode zum direkten Übernehmen**.

Aufgabe: diese Designs im Zielsystem mit dessen etablierten Mustern nachbauen (React/Next.js, Astro, Vue, WordPress-Theme o.ä.). Wenn noch keine Umgebung existiert: passendes Framework wählen — für diese Seite ist ein statischer Generator (Astro oder Next.js mit SSG) ausreichend, es gibt keinen Applikationszustand außer UI-Toggles.

Technische Eigenheit der Prototypen: Sie basieren auf einem hauseigenen Streaming-Runtime (`support.js`, `<x-dc>`, `{{ platzhalter }}`, `<sc-for>`, `style-hover`). **Diese Syntax nicht übernehmen** — sie ist nur das Vehikel der Prototypen. Relevant sind Layout, Maße, Farben, Typografie, Copy und Verhalten. `style-hover="…"` entspricht einem `:hover`-Zustand, `{{ x }}` einem berechneten Wert (siehe "State Management").

Alternativ liegen im Projekt unter `export/` vier eigenständige HTML-Dateien (alle Assets inline) — nützlich als visuelle Referenz im Browser ohne Build.

## Fidelity
**High-fidelity.** Farben, Typografie, Abstände, Radien und Interaktionen sind final. Pixelgenau nachbauen. Ausnahmen, die noch Platzhalter sind:
- Hero-Video auf der Startseite (16:9-Fläche, aktuell leer)
- Porträt "Moritz" im Team (kein Bild vorhanden)
- Branchen-Slider: 11 Bildflächen sind leere Drop-Zonen (`image-slot`) — Bilder folgen
- FAQ-Texte sind Entwürfe, noch nicht freigegeben
- Seite "Mitarbeiter einstellen" ist erst Hero + Logo-Marquee, restliche Sektionen fehlen (`data-screen-label="TODO: weitere Sektionen"`)

## Design Tokens

### Farben
| Rolle | Hex |
|---|---|
| Dunkelgrün (Primärfläche, Hero, Footer) | `#0D2118` |
| Dunkelgrün tiefer (Footer-Grund) | `#0C1B10` |
| Dunkelgrün Karten | `#143026` |
| Dunkelgrün Karten (Alternative) | `#0F281E`, `#0B1712` |
| Rahmen auf dunkel | `#1E3B2E`, `#21382B` |
| Rahmen Akzent auf dunkel | `rgba(228, 245, 63, 0.12)` |
| Akzentgelb (CTA, Icons, Highlights) | `#E4F53F` |
| Akzentgelb Hover | `#D6E731` |
| Akzentgelb Rahmen | `#4D5C3B`, `#66774A` (Hover) |
| Tinte auf Gelb | `#0C1B10` |
| Text dunkel (auf hell) | `#141A15` |
| Text hell (auf dunkel) | `#F3F6F1`, `#FFFFFF` |
| Sekundärtext auf dunkel | `#9DB3A6`, `#C4D3C8`, `#8A9A8D`, `#A9BBAE` |
| Sekundärtext auf hell | `#5C665E`, `#3F4A41`, `#7E8A80` |
| Flächen hell | `#FFFFFF`, `#F1F1EF`, `#F4F4F4`, `#F4F4F2` |
| Rahmen auf hell | `#E2E4DD`, `#C6D0C5` |
| Skizzen-Grau (Illustrationen) | `#8A968B`, `#B4BEB5` |

Maximal zwei Hintergrundfarben pro Seite: `#FFFFFF` und `#0D2118`. Gelb ist ausschließlich Akzent (CTA, Textmarker, Icon-Flächen), niemals Fläche.

### Typografie
- **Inter** (Google Fonts), Gewichte 400 / 500 / 700 — gesamte UI
- **Playfair Display** italic (Gewichte 500 / 600) — nur für einzelne hervorgehobene Wörter in Überschriften ("Ihr Gewerk", "wofür Ihr Betrieb steht")
- Monospace (System) — Eyebrows im Footer/FAQ, Copyright, 12px, `letter-spacing: 0.06em`–`0.1em`, uppercase

Skala (alles fluid via `clamp()`):
| Element | Größe |
|---|---|
| H1 Hero | `clamp(36px, 4.8vw, 60px)`, weight 700, `line-height: 1.05`, `letter-spacing: -0.025em` |
| H2 Sektion | `clamp(30px, 3.6vw, 44px)`, weight 700, `line-height: 1.12`, `letter-spacing: -0.015em` |
| H2 Footer-Claim | `clamp(38px, 6vw, 78px)`, weight 700, `line-height: 0.98`, `letter-spacing: -0.035em` |
| H3 Karte | 22–26px, weight 700, `line-height: 1.25` |
| Lead-Text | 18–19px, `line-height: 1.6–1.65` |
| Body | 15–17px, `line-height: 1.6–1.7` |
| Eyebrow (Pill) | 13px, weight 500, `letter-spacing: 0.14em`, uppercase |
| Footer-Wortmarke | SVG-Text, `font-size: 128`, weight 700, `letter-spacing: -4`, auf 1000px Breite gestreckt (`textLength` + `lengthAdjust="spacingAndGlyphs"`) |

`text-wrap: balance` auf Überschriften, `text-wrap: pretty` auf Absätzen.

### Abstände
- Sektions-Padding vertikal: `clamp(64px, 9vw, 96px)` bis `clamp(64px, 9vw, 112px)`
- Seitenrand: `clamp(20px, 5.5vw, 100px)` (Header/Footer), 20–24px (Sektionen)
- Contentbreite: `max-width: 1160px` (Sektionen), `1240px` (Footer, breite Karten)
- Grid-/Flex-Gaps: 10, 12, 16, 20, 24, 32, 40, 56, 64, 72px
- Footer-Spaltenabstand: 72px

### Radien
6px (kleine Pills) · 8px (Buttons, Nav-Links) · 10–12px (größere Buttons, Karten-Innenflächen) · 16px (Karten) · 18px (Branchen-Kacheln) · 20–24px (große Karten, CTA-Blöcke) · 999px / 50% (Eyebrow-Pills, Icon-Kreise)

### Schatten / Glow
- Gelbe Buttons (Glow): `0 0 22px rgba(228, 245, 63, 0.32), 0 2px 8px rgba(228, 245, 63, 0.18)`
- Gelbe Buttons im hellen Header (stärker): `0 0 20px rgba(228, 245, 63, 0.45), 0 0 56px rgba(228, 245, 63, 0.22)`
- Karten hell: `0 1px 2px rgba(13, 33, 24, 0.08)`
- Sticky Header: `backdrop-filter: blur(14px) saturate(160%)` über `rgba(13, 33, 24, 0.72)` (dunkel) bzw. `rgba(255, 255, 255, 0.82)` (hell)

## Screens / Views

### 1. Startseite (`design/STARTSEITE.dc.html`)
Sektionsreihenfolge (entspricht `data-screen-label`):

1. **Sticky Header** — fixed, erscheint erst ab Scroll > 500px (slide-in von oben). Dunkel, blur. Logo links, Nav mittig-rechts, gelber CTA "Kostenloses Erstgespräch" rechts.
2. **Hero (dunkel, zentriert)** — eigener statischer Nav in gleicher Anordnung; H1 "Wir bringen Ihren Betrieb online nach vorne", Lead, zwei Sekundär-Buttons nebeneinander ("Neue Aufträge gewinnen" / "Neue Mitarbeiter einstellen"), darunter 16:9-Videofläche, die per negativem `margin-bottom` in die nächste Sektion überlappt (`clamp(-326px, -28vw, -100px)`).
3. **Übergang + Logo-Marquee** — Gradient dunkel → weiß, Caption "50+ Partnerbetriebe vertrauen uns seit 2022", horizontal laufende Logoreihe (siehe Interaktionen).
4. **Leistungen** — zwei Karten (`#F4F4F4`, radius 16, padding 40) mit CSS-Illustrationen: links ein rotierender Orbit mit 8 Personen-Icons um einen Betrieb, rechts eine Bewerbungsliste mit pulsierenden Verbindungslinien und schwebender Bewerberkarte. Je H3, Absatz, Sekundär-Button.
5. **Projekte (dunkles Band)** — Beweisfall "Umzüge Bergstraße" (gestapelt, dunkelgrüne Karte mit Browser-Frame-Mockup), darunter vier Projektkarten im Grid mit Browser-Chrome (drei Punkte + URL-Leiste) und Screenshot.
6. **Hinweis Kampagnenzahlen** — einzeiliger, zentrierter Hinweis, 15px, `#7E9488`: "Konkrete Kampagnenzahlen teilen wir aus Datenschutzgründen nicht auf der Homepage — im persönlichen Gespräch gehen wir gerne auf die Ergebnisse ein."
7. **Branchen (Slider)** — 11 Hochformat-Kacheln (`aspect-ratio: 3/4`, `width: min(330px, 78vw)`, radius 18) in horizontaler Scroll-Rail mit `scroll-snap-type: x mandatory`; Bild + dunkler Verlauf (`rgba(9,24,17,0.62)` → `0.12` bei 42% → `0.72`), Gewerkname 28px/700 und Untertitel oben, "Branche ansehen" + gelber Pfeil-Kreis (40px) unten. Pfeil-Buttons oben rechts (48px, Kreis) scrollen kartenweise.
8. **Warum es funktioniert** — helle Karten mit gelben Icon-Kacheln (48px, radius 12, Rahmen `#D6E731`).
9. **Über uns** — hell, Porträt + Name 26px/700 + Rolle; Team-Grid bleibt auch mobil zweispaltig (`minmax(min(240px, calc(50% - 10px)), 1fr)`).
10. **Bewertungen** — dunkel, Google-Sterne, Zitate, Namen/Betriebe.
11. **Hier finden Sie uns** — Text links, rechts `<iframe src="karte-deutschland.html">` (Deutschlandkarte mit Standort Bergstraße), `min-height: clamp(420px, 62vw, 780px)`.
12. **FAQ** — zweispaltig: links Sticky-Kopf (Eyebrow "FAQ", H2, Hinweistext), rechts Akkordeon, eines offen, Zeichen `+` / `−`, Höhenanimation über `max-height` + `opacity`.
13. **Zusammenarbeit / Kontakt** — dunkler Block mit Kontaktdaten (Telefon `0178 4444 156`, E-Mail `iwo@stolz-marketing.de`, "Gewerbegebiet Bensheim") und gelbem CTA.
14. **Footer** — Awwwards-Stil: Spalten (Logo + Kurztext + Kontakt / Seitenlinks), großer Claim mit gelbem CTA (radius 12), darunter die auf volle Breite gestreckte SVG-Wortmarke "Stolz Marketing" (`#12281B`), die direkt auf der Trennlinie sitzt (`margin-bottom: -72px` gegen den 72px-Spaltenabstand), dann Trennlinie + Copyright + Social-Links (monospace, uppercase).

### 2. Kunden gewinnen (`design/Kunden gewinnen.dc.html`)
Weißer Grund, nur Bewertungen auf dunkelgrün. Sektionen: Hero + Logo-Marquee · Ausgangslage (Problembeschreibung) · Das System (Vorher/Nachher) · Leistungsumfang · Erstgespräch · Aufnahmekriterien · Ausbau · FAQ · Abschluss-CTA · Footer.

### 3. Mitarbeiter einstellen (`design/Mitarbeiter einstellen.dc.html`)
Aktuell nur Hero + Logo-Marquee. Struktur soll "Kunden gewinnen" spiegeln, Inhalte fehlen noch.

### 4. Projekte (`design/Projekte.dc.html`)
**Heller** Header (weiß, blur) — hier wird `logo-stolz-dark.svg` verwendet (Icon gelb, Schriftzug schwarz), auf dunklem Grund `logo-stolz.svg` (Icon gelb, Schriftzug weiß). Sektionen: Kopf mit Nav · Hero "Was wir für Betriebe gebaut haben" · Logo-Marquee · Projekte-Band (Beweisfall + Kartenraster, identisch zur Startseite) · Bewertungen (dunkel) · Zusammenarbeit · Footer.

## Interactions & Behavior

### Navigation / Header
- **Sticky Header**: `position: fixed`, erscheint ab `scrollTop > 500` — `transform: translateY(-104%) → translateY(0)`, `opacity: 0 → 1`, `pointer-events: none → auto`; Transition `transform 380ms cubic-bezier(0.22, 1, 0.36, 1)`, `opacity 260ms ease`.
- **Breakpoint 1040px**: darunter werden Nav-Links und CTA ausgeblendet, ein Burger-Button (42×42, radius 10) erscheint. Kein Zeilenumbruch der Nav.
- **Burger-Overlay**: `position: fixed; inset: 0`, Grund `#0D2118`, Logo + Schließen-Button (×), Menüpunkte 22px/500 mit Trennlinien `#21382B`, gelber CTA am Ende. Beim Öffnen `document.body.style.overflow = "hidden"`, beim Schließen zurücksetzen. Jeder Link schließt das Menü.
- Nav-Link-Hover: Hintergrund `rgba(228, 245, 63, 0.1)` (dunkel) bzw. `#F1F1EF` / `#F4F4F2` (hell).

### Animationen (alle CSS-Keyframes, langsam, endlos)
| Name | Verwendung | Definition |
|---|---|---|
| `marquee` | Logoreihe | `translateX(0) → translateX(-50%)`, 38s linear infinite; Inhalt doppelt gerendert (zweite Kopie `aria-hidden="true"`), Container mit `mask-image: linear-gradient(90deg, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)` |
| `spin` | Orbit-Ring Leistungen | `rotate(360deg)`, 48s linear infinite |
| `spin-rev` | Icons im Orbit (halten Ausrichtung) | `rotate(-360deg)`, 48s linear infinite |
| `pulse-line` | Verbindungslinien Bewerbungskarte | 2,6s ease-in-out infinite, Versatz 0 / 0,3s / 0,6s |
| `floaty` | Bewerberkarte | 6s ease-in-out infinite |
| `sheen` | Lichtschimmer in den beiden Hero-Buttons | `0% { translateX(-130%) skewX(-12deg) } 23%, 100% { translateX(260%) skewX(-12deg) }`, **7,8s ease-in-out 0.6s infinite** — ergibt 1,8s Durchlauf, dann 6s Pause. Beide Buttons haben identische Dauer und Verzögerung, laufen also synchron. Umsetzung: `<span aria-hidden>` im Button, `position: absolute; inset-block: 0; left: 0; width: 45%`, `background: linear-gradient(100deg, rgba(228,245,63,0) 0%, rgba(228,245,63,0.22) 50%, rgba(228,245,63,0) 100%)`; Button braucht `position: relative; overflow: hidden` |

`prefers-reduced-motion` ist noch nicht berücksichtigt — beim Nachbau ergänzen.

### Branchen-Slider
Horizontale Rail mit `overflow-x: auto`, `scroll-snap-type: x mandatory`, `scroll-behavior: smooth`, Scrollbar ausgeblendet (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`). Pfeil-Buttons scrollen um Kartenbreite + 20px Gap (`scrollBy({ left: ±step, behavior: "smooth" })`). Auf Touch wischbar.

### FAQ
Ein Eintrag offen (Standard: der erste). Klick auf eine Frage öffnet sie und schließt die vorige. Öffnen über `max-height: 0 → 300px` und `opacity: 0 → 1`, Zeichen wechselt `+` / `−`.

### Buttons
| Typ | Höhe/Padding Desktop | Mobil (< 720px) |
|---|---|---|
| Hero-Sekundär | `min-height: 52px`, `padding: 0 18px` | `min-height: 46px`, `padding: 8px 12px` |
| Standard-Sekundär | `height: 50px`, `padding: 0 24px`, 16px | `height: 42px`, `padding: 0 16px`, 14px |
| Großer CTA (gelb) | `padding: 18px 30px` | `padding: 13px 20px` |
| Header-CTA | `height: 40px` (sticky) / `44px` (statisch), `padding: 0 16–18px` | ausgeblendet, im Burger-Menü |

Hero-Buttons liegen nebeneinander (`flex: 1 1 0`, `flex-wrap: nowrap`) und brechen erst unter 390px auf zwei Zeilen um (`flex: 1 1 100%`, `flex-wrap: wrap`).

### Responsive
Keine klassischen Media-Query-Sprünge — Layout skaliert intrinsisch über `clamp()`, `min()`, `minmax()` und `flex-wrap`. Zwei JS-gesteuerte Schwellen: **1040px** (Burger-Menü) und **720px** (Buttongrößen), zusätzlich **390px** (Hero-Buttons untereinander). Beim Nachbau sind das die einzigen echten Breakpoints; alles andere über CSS-Funktionen lösen.

## State Management
Alles UI-lokal, keine Datenanbindung.

| State | Zweck |
|---|---|
| `stuck: boolean` | Sticky Header sichtbar (Scroll-Listener, `passive: true`, Schwelle 500px) |
| `vw: number` | Fensterbreite (Resize-Listener, `passive: true`) → leitet Burger-Sichtbarkeit und Buttongrößen ab |
| `menuOpen: boolean` | Burger-Overlay; steuert zusätzlich `body.overflow` |
| `faqOpen: number \| null` | offener FAQ-Eintrag (Default 0) |
| `active: number` | aktives Team-/Karten-Element |

Die `{{ platzhalter }}` in den Prototypen sind ausschließlich daraus abgeleitete Werte (`navLinksDisplay`, `burgerDisplay`, `menuDisplay`, `stickyTransform`, `btnH`, `btnPad`, `btnFont`, `ctaPad`, `heroBtnFlex`, `heroRowWrap`, `heroBtnH`, `heroBtnPad`) — im Zielsystem besser als CSS-Klassen bzw. Media Queries lösen, nicht als Inline-Styles aus JS.

Der Branchen-Slider hält keinen State; Scrollposition lebt im DOM.

## Assets
Alle in `design/`:

- `logo-stolz.svg` — Wortmarke weiß + Icon gelb `#E4F53F` (für dunkle Flächen)
- `logo-stolz-dark.svg` — Wortmarke `#141A15` + Icon gelb (für helle Flächen)
- `logos/` — Kundenlogos in Original (SVG/PNG); `logos/mono/` — dieselben einheitlich grau aufbereitet, **diese** werden im Marquee verwendet (`opacity: 0.75`, `max-height: 38–50px`, feste Slotbreiten 62–160px)
- `portrait-iwo.jpg`, `portrait-timon.jpg`, `portrait-gintas.jpg` — Team-Porträts (Moritz fehlt)
- `projekt-umzuege.png` und weitere Screenshots im Projektbereich
- `karte-deutschland.html` — eigenständige Deutschlandkarte (SVG aus Geodaten), wird per `<iframe>` eingebettet; kann im Zielsystem als Komponente übernommen werden
- `image-slot.js` — Drop-Zone-Platzhalter für die Branchenbilder; **nur ein Prototyping-Hilfsmittel**, im Produktionscode durch echte `<img>`/`<picture>` ersetzen
- `support.js` — Runtime der Prototypen, wird im Zielsystem **nicht** gebraucht

Fonts: Inter und Playfair Display über Google Fonts (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:ital,wght@1,500;1,600&display=swap`). Für Produktion selbst hosten.

Zehner-Immobilien-Logo braucht noch einen korrekten SVG-Export.

## Offene Punkte
1. Hero-Video (Startseite) fehlt
2. Bilder für die 11 Branchen-Kacheln fehlen
3. Seite "Mitarbeiter einstellen" ist inhaltlich unvollständig
4. Branchen-Unterseiten (`/branchen/shk`, `/elektro`, `/maler`, `/schreiner`, `/dachdecker`, `/zimmerer`, `/fliesenleger`, `/galabau`, `/bau`, `/metallbau`, `/umzuege`) existieren noch nicht
5. `/erstgespraech` und `/ueber-uns` sind verlinkt, aber nicht gebaut
6. Nebentools noch nicht verlinkt: Website-Check, Sichtbarkeits-Check, Vakanzkostenrechner
7. FAQ-Texte inhaltlich freigeben
8. Porträt Moritz fehlt
9. `prefers-reduced-motion` ergänzen
10. Rechtliches fehlt: Impressum, Datenschutz, Cookie-Hinweis

## Files
| Datei | Inhalt |
|---|---|
| `design/STARTSEITE.dc.html` | Startseite, alle 14 Sektionen |
| `design/Kunden gewinnen.dc.html` | Serviceseite Kundengewinnung |
| `design/Mitarbeiter einstellen.dc.html` | Serviceseite Personalgewinnung (unvollständig) |
| `design/Projekte.dc.html` | Referenzenseite, heller Header |
| `design/karte-deutschland.html` | Kartenkomponente (per iframe eingebettet) |
| `design/support.js`, `design/image-slot.js` | Prototyping-Runtime bzw. Bildplatzhalter — nicht übernehmen |
| `design/logos/`, `design/logos/mono/` | Kundenlogos (Original / grau) |
| `design/logo-stolz*.svg`, `design/portrait-*.jpg`, `design/projekt-umzuege.png` | Marken- und Bildmaterial |

Zum Ansehen im Browser: die Dateien in `export/` des Projekts (je eine eigenständige HTML mit allen Assets inline).
