# Design-System

Alle Tokens stammen aus der Design-Vorlage in `design/` — aus den Prototypen
`*.dc.html` (verbindlich für die konkreten Werte) und aus `design/README.md`
(Handoff-Dokument, verbindlich für die Regeln dahinter).

Gepflegt werden sie an genau einer Stelle: **`src/styles/global.css`** im
`@theme`-Block. In Komponenten stehen keine Hex- oder px-Werte.

Bewusste Abweichungen von der Vorlage: **`docs/ABWEICHUNGEN.md`**.

---

## Wie die Tokens benannt sind

Tailwind v4 leitet die Utility-Klassen direkt aus den Variablennamen ab:

| Variable                | Klasse            | Ergebnis                     |
| ----------------------- | ----------------- | ---------------------------- |
| `--color-forest`        | `bg-forest`       | `background: #0D2118`        |
| `--text-17`             | `text-17`         | `font-size: 17px`            |
| `--radius-16`           | `rounded-16`      | `border-radius: 16px`        |
| `--spacing-section-y`   | `py-section-y`    | `padding-block: clamp(…)`    |
| `--breakpoint-nav`      | `nav:flex`        | ab 1040px                    |

Die Tailwind-Standardpaletten sind mit `--color-*: initial`,
`--text-*: initial`, `--radius-*: initial`, `--shadow-*: initial`,
`--leading-*: initial`, `--tracking-*: initial` und `--breakpoint-*: initial`
entfernt. Es gilt ausschließlich, was hier steht — `bg-blue-500` oder `text-lg`
gibt es nicht mehr und schlägt beim Build sichtbar fehl.

> **Achtung bei neuen `--spacing-*`-Tokens:** Der Name landet als Utility im
> selben Namensraum wie `inline-*`, `w-*`, `h-*`. Ein Token `--spacing-block`
> erzeugt die Klasse `inline-block` als `inline-size`-Utility und hebelt damit
> das gleichnamige Display-Utility aus. Deshalb heißen die Spaltenabstände
> `--spacing-spalten-block` und `--spacing-spalten-faq`, nicht `--spacing-block`.
> Keine Token-Namen verwenden, die einem CSS-Schlüsselwort entsprechen
> (`block`, `flex`, `grid`, `none`, `contents`, `table`).

---

## Farben

Grundsatz aus dem Handoff: **maximal zwei Flächenfarben pro Seite** —
`paper` (#FFFFFF) und `forest` (#0D2118). Lime ist ausschließlich Akzent
(CTA, Textmarker, Icon-Flächen), niemals großflächiger Hintergrund.

### Dunkle Flächen

| Token                    | Hex       | Verwendung                                 |
| ------------------------ | --------- | ------------------------------------------ |
| `forest`                 | `#0D2118` | Hero, dunkle Bänder, Zusammenarbeit-Block  |
| `forest-deep`            | `#0C1B10` | Footer- und Kontaktgrund, Tinte auf Lime   |
| `forest-card`            | `#143026` | Karten auf dunkel                          |
| `forest-card-alt`        | `#0F281E` | Browser-Chrome, zweiter Schraffur-Streifen |
| `forest-well`            | `#0B1712` | Fläche hinter Screenshots                  |
| `forest-review`          | `#123122` | Bewertungskarten                           |
| `forest-tint` / `-alt`   | `#17392A` / `#143224` | Foto-Platzhalter Bewertungen   |
| `forest-panel`           | `#1A3B2C` | Panels auf dunkel (Unterseiten)            |
| `wordmark`               | `#12281B` | gestreckte SVG-Wortmarke im Footer         |

### Rahmen auf dunkel

| Token       | Hex       | Verwendung                    |
| ----------- | --------- | ----------------------------- |
| `edge`      | `#1E3B2E` | Standardrahmen auf dunkel     |
| `edge-soft` | `#21382B` | Trennlinien, Browser-Chrome   |
| `dot`       | `#3A4E42` | die drei Punkte im Mockup     |

### Akzent

| Token              | Hex       | Verwendung                                 |
| ------------------ | --------- | ------------------------------------------ |
| `lime`             | `#E4F53F` | CTA, Textmarker, Icon-Flächen, Pfeilkreise |
| `lime-hover`       | `#D6E731` | Hover Header-CTA, Rahmen der Icon-Kacheln  |
| `lime-bright`      | `#EEFA6E` | Hover der großen CTAs                      |
| `lime-edge`        | `#4D5C3B` | Rahmen Sekundärbuttons auf dunkel          |
| `lime-edge-hover`  | `#66774A` | derselbe Rahmen im Hover                   |
| `lime-link-hover`  | `#48582A` | Link-Hover auf hellem Grund                |

Transparente Lime-Stufen entstehen über den Opacity-Modifier: `bg-lime/7`
(Sekundärbutton), `bg-lime/8` (Burger), `bg-lime/10` und `bg-lime/14`
(Hover), `border-lime/12` (Sticky-Header), `border-lime/28` (Burger).

### Text auf hell

| Token              | Hex       | Verwendung                        |
| ------------------ | --------- | --------------------------------- |
| `ink`              | `#141A15` | Überschriften, Fließtext          |
| `ink-soft`         | `#3F4A41` | Kartentext, FAQ-Antworten         |
| `ink-muted`        | `#5C665E` | Lead-Texte, Rollen, Eyebrows      |
| `ink-faint`        | `#7E8A80` | FAQ-Nummern, Monospace-Marken     |
| `ink-body`         | `#4A4E49` | Fließtext Über uns                |
| `ink-label`        | `#5E625C` | Rolle im Über-uns-Panel           |
| `ink-quiet`        | `#4A544B` | Fließtext Unterseiten             |
| `ink-quieter`      | `#6B756D` | Sekundärtext Unterseiten          |
| `ink-placeholder`  | `#8A8F89` | Monospace-Platzhalter             |
| `ink-btn-hover`    | `#2A3A2C` | Hover des schwarzen FAQ-Buttons   |

### Text auf dunkel

| Token               | Hex       | Verwendung                        |
| ------------------- | --------- | --------------------------------- |
| `cream`             | `#F3F6F1` | Navigationslinks, Kartentitel     |
| `mint`              | `#9DB3A6` | Fließtext auf dunkel, Eyebrows    |
| `mint-light`        | `#C4D3C8` | Zitate, Lead-Texte auf dunkel     |
| `mint-link`         | `#D8E2DA` | Footer-Links                      |
| `mint-dim`          | `#8A9A8D` | Footer-Fließtext, Social-Links    |
| `mint-dimmer`       | `#6F8377` | Footer-Spaltenköpfe, Copyright    |
| `mint-note`         | `#7E9488` | Hinweiszeile Kampagnenzahlen      |
| `mint-contact`      | `#A9BBAE` | Kontaktdaten                      |
| `mint-caption`      | `#D3E0D6` | Untertitel der Branchen-Kacheln   |
| `mint-placeholder`  | `#7E9184` | Monospace-Platzhalter auf dunkel  |

### Helle Flächen, Rahmen, Linien

| Token           | Hex       | Verwendung                                  |
| --------------- | --------- | ------------------------------------------- |
| `paper`         | `#FFFFFF` | Seitengrund                                 |
| `paper-warm`    | `#F1F1EF` | Karten „Warum es funktioniert", Über uns    |
| `paper-grey`    | `#F4F4F4` | Leistungskarten                             |
| `paper-hover`   | `#F4F4F2` | Nav-Hover auf hellem Header                 |
| `paper-soft`    | `#F7F7F5` | Flächen Unterseiten                         |
| `paper-band`    | `#EBEBE7` | Bänder Unterseiten                          |
| `photo-bg`      | `#E2E8DF` | Grund hinter Porträts                       |
| `line`          | `#E2E4DD` | Kartenrahmen auf hell                       |
| `line-strong`   | `#C6D0C5` | Buttonrahmen, Pills, Pfeilbuttons           |
| `rule`          | `#D6DED4` | Trennlinien Über uns und FAQ                |
| `rule-soft`     | `#C9C9C4` | Pill-Rahmen im Über-uns-Panel               |
| `rule-faint`    | `#E7E9E3` | feine Linien Unterseiten                    |

### Illustrationen und Fremdmarken

`sketch` `#8A968B`, `sketch-light` `#A9B4A8` — Striche der CSS-Illustrationen.
`hatch-light` `#E7EBE5` / `hatch-light-alt` `#DFE4DC` und
`hatch-grey` `#EDEDEB` / `hatch-grey-alt` `#E4E4E2` — Schraffuren der
Platzhalterflächen.

`star` `#FBBC04`, `star-alt` `#F5B301`, `google-blue` `#4285F4`,
`google-green` `#34A853`, `google-red` `#EA4335` — Google-Sterne und
Google-Logo. Fremdmarken, werden nicht angefasst.

`karte-oben` `#42603F`, `karte-unten` `#8FA85F`, `karte-kante` `#16281B` —
Verlauf und Kontur der Deutschlandkarte.

---

## Schriften

Beide Familien liegen als **Variable Font** in `public/fonts/`, je einmal für
`latin` und `latin-ext`. Vier Dateien, zusammen rund 195 KB, decken sämtliche
Schnitte ab. Kein Request an Google (DSGVO), die kritischen Schnitte werden
im `<head>` vorgeladen.

| Token          | Familie                                  | Verwendung                                     |
| -------------- | ---------------------------------------- | ---------------------------------------------- |
| `font-sans`    | Inter (100–900)                          | gesamte UI                                     |
| `font-display` | Playfair Display Italic (400–900)        | einzelne hervorgehobene Wörter in Überschriften |
| `font-mono`    | System-Monospace                         | Eyebrows im Footer/FAQ, Copyright, Platzhalter |

---

## Schriftgrößen

Die statischen Stufen sind nach ihrem px-Wert benannt (`text-17` = 17px). Das
macht den Abgleich mit der Vorlage beim Review trivial.

`text-9` · `text-11` · `text-12` · `text-13` · `text-14` · `text-15` ·
`text-16` · `text-17` · `text-18` · `text-19` · `text-20` · `text-21` ·
`text-22` · `text-23` · `text-26` · `text-28`

**Zeilenhöhe ist bewusst nicht an die Größe gekoppelt** — die Vorlage
kombiniert dieselbe Größe mit verschiedenen Zeilenhöhen (17px mit 1.6 *und*
mit 1.65). Sie wird immer separat über `leading-*` gesetzt.

### Fluide Überschriften

Jede Sektion hat in der Vorlage ihre eigene Clamp-Kurve. Sie sind deshalb
einzeln als Rolle hinterlegt, nicht auf eine gemeinsame Skala gezwungen:

| Token                 | Wert                        | Verwendung                             |
| --------------------- | --------------------------- | -------------------------------------- |
| `text-h1`             | `clamp(38px, 5vw, 60px)`    | Hero Startseite                        |
| `text-h1-sub`         | `clamp(36px, 4.8vw, 60px)`  | Hero Unterseiten                       |
| `text-h2`             | `clamp(30px, 3.4vw, 44px)`  | Projekte, Bewertungen, Zusammenarbeit  |
| `text-h2-leistungen`  | `clamp(30px, 3.6vw, 42px)`  | Leistungen                             |
| `text-h2-branchen`    | `clamp(30px, 3.6vw, 44px)`  | Branchen                               |
| `text-h2-system`      | `clamp(34px, 4.4vw, 56px)`  | „Warum Stolz funktioniert"             |
| `text-h2-about`       | `clamp(34px, 4vw, 52px)`    | Über uns                               |
| `text-h2-contact`     | `clamp(38px, 4.8vw, 62px)`  | „Hier finden Sie uns"                  |
| `text-h2-faq`         | `clamp(32px, 3.8vw, 48px)`  | FAQ                                    |
| `text-h2-claim`       | `clamp(38px, 6vw, 78px)`    | Footer-Claim                           |
| `text-h2-sub`         | `clamp(30px, 3.6vw, 46px)`  | Sektionen Unterseiten                  |
| `text-h2-sub-lg`      | `clamp(32px, 4vw, 50px)`    | Sektionen Unterseiten, große Variante  |
| `text-h3-proof`       | `clamp(26px, 2.6vw, 34px)`  | Beweisfall                             |

### Zeilenhöhen

`leading-claim` 0.98 · `leading-contact` 1.02 · `leading-hero` 1.05 ·
`leading-tightest` 1.06 · `leading-system` 1.08 · `leading-tile` 1.1 ·
`leading-h2` 1.12 · `leading-h2-dark` 1.15 · `leading-proof` 1.2 ·
`leading-card` 1.25 · `leading-card-wide` 1.3 · `leading-caption` 1.4 ·
`leading-tight-body` 1.5 · `leading-body` 1.6 · `leading-quote` 1.65 ·
`leading-prose` 1.7

### Laufweiten

`tracking-claim` -0.035em · `tracking-contact` -0.03em ·
`tracking-faq` -0.025em · `tracking-system` -0.02em ·
`tracking-heading` -0.015em · `tracking-name` -0.01em · `tracking-none` 0 ·
`tracking-badge` 0.04em · `tracking-caps` 0.06em · `tracking-mono` 0.1em ·
`tracking-footer` 0.12em · `tracking-eyebrow` 0.14em ·
`tracking-eyebrow-wide` 0.16em

---

## Abstände

Die Basiseinheit ist auf **1px** gesetzt (`--spacing: 1px`). Dadurch bedeutet
`p-40` exakt 40px — die Klasse im Markup nennt denselben Wert wie die Vorlage,
ohne Umrechnung im Kopf.

### Sektions-Padding (vertikal)

| Token                  | Wert                          | Sektion                                |
| ---------------------- | ----------------------------- | -------------------------------------- |
| `section-y`            | `clamp(64px, 9vw, 96px)`      | Leistungen, Projekte, Footer oben      |
| `section-y-lg`         | `clamp(64px, 9vw, 112px)`     | Warum es funktioniert, Bewertungen, FAQ|
| `section-y-xl`         | `clamp(72px, 10vw, 120px)`    | Bewertungen unten                      |
| `section-y-md`         | `clamp(56px, 8vw, 96px)`      | Zusammenarbeit                         |
| `section-y-sm`         | `clamp(56px, 8vw, 88px)`      | Über uns                               |
| `section-y-branchen`   | `clamp(64px, 9vw, 104px)`     | Branchen                               |
| `section-y-contact`    | `clamp(64px, 9vw, 100px)`     | Hier finden Sie uns                    |
| `hero-top`             | `clamp(56px, 9vw, 88px)`      | Hero, oberer Abstand                   |

### Seitenränder und Innenabstände

| Token           | Wert                            | Verwendung                        |
| --------------- | ------------------------------- | --------------------------------- |
| `page-x`        | `clamp(20px, 5.5vw, 100px)`     | Header, Burger-Menü, Footer       |
| `rail-x`        | `clamp(20px, 5vw, 24px)`        | Branchen-Slider                   |
| `innen-block`   | `clamp(28px, 5vw, 76px)`        | Zusammenarbeit-Block              |
| `panel`         | `clamp(28px, 5vw, 56px)`        | Über-uns-Panel                    |
| `card-y` / `card-x` / `card-b` | `clamp(24px, 4vw, 32px)` / `clamp(22px, 4vw, 28px)` / `clamp(26px, 4vw, 34px)` | Karten „Warum es funktioniert" |
| `quote-y` / `quote-x` | `clamp(24px, 4vw, 34px)` / `clamp(22px, 4vw, 32px)` | Bewertungskarten |

### Spaltenabstände, Höhen, Breiten

| Token             | Wert                              | Verwendung                          |
| ----------------- | --------------------------------- | ----------------------------------- |
| `spalten-faq`     | `clamp(36px, 5vw, 72px)`          | FAQ, Abstand der beiden Spalten     |
| `spalten-block`   | `clamp(36px, 6vw, 96px)`          | Zusammenarbeit, Spaltenabstand      |
| `hero-overlap`    | `clamp(-326px, -28vw, -100px)`    | Überlappung der Hero-Videofläche    |
| `map`             | `clamp(420px, 62vw, 780px)`       | Mindesthöhe der Karte               |
| `portrait`        | `clamp(360px, 52vw, 520px)`       | Mindesthöhe des Porträts            |
| `content`         | `1160px`                          | Contentbreite der Sektionen         |
| `content-wide`    | `1240px`                          | Footer, Zusammenarbeit, Kontakt     |

Feste Gaps kommen direkt aus der Skala: 10, 12, 16, 20, 24, 32, 40, 56, 64, 72px.

---

## Radien

`rounded-2` bis `rounded-24` in den Stufen 2, 3, 4, 5, 6, 8, 10, 12, 14, 16,
18, 20, 24 sowie `rounded-full` (999px).

| Radius | Verwendung                                        |
| ------ | ------------------------------------------------- |
| 6px    | FAQ-Eyebrow                                       |
| 8px    | Nav-Links, Header-CTA, Hero-Buttons               |
| 10px   | Sekundärbuttons, Burger, Browser-Rahmen in Karten |
| 12px   | große CTAs, Icon-Kacheln, Browser-Rahmen          |
| 16px   | Karten, Videofläche, Porträts im Team             |
| 18px   | Branchen-Kacheln, Bewertungskarten                |
| 20px   | Karten „Warum es funktioniert", Über-uns-Panel    |
| 24px   | Zusammenarbeit-Block                              |
| `full` | Eyebrow-Pills, Icon-Kreise, Adressleiste          |

---

## Schatten und Glow

| Token                | Wert                                                                  |
| -------------------- | --------------------------------------------------------------------- |
| `shadow-glow`        | `0 0 22px rgb(228 245 63 / .32), 0 2px 8px rgb(228 245 63 / .18)`      |
| `shadow-glow-strong` | `0 0 20px rgb(228 245 63 / .45), 0 0 56px rgb(228 245 63 / .22)`       |
| `shadow-glow-play`   | `0 0 32px rgb(228 245 63 / .35)`                                       |
| `shadow-card`        | `0 1px 2px rgb(13 33 24 / .08)`                                        |
| `shadow-card-light`  | `0 10px 28px rgb(20 26 21 / .05)`                                      |
| `shadow-badge`       | `0 2px 12px rgb(0 0 0 / .35)`                                          |

`shadow-glow-strong` gilt nur für den CTA im statischen Seitenkopf, `shadow-glow`
für alle übrigen gelben Buttons.

---

## Breakpoints

Das Layout skaliert intrinsisch über `clamp()`, `min()`, `minmax()` und
`flex-wrap`. Es gibt genau **drei** echte Schwellen — weitere werden nicht
angelegt:

| Token             | Breite   | Was umschaltet                              |
| ----------------- | -------- | ------------------------------------------- |
| `hero:`           | 390px    | Hero-Buttons nebeneinander statt untereinander |
| `btn:`            | 720px    | Buttongrößen auf Desktop-Maß                |
| `nav:`            | 1040px   | Navigation statt Burger-Menü                |

---

## Übergänge und Animationen

`--ease-sticky: cubic-bezier(0.22, 1, 0.36, 1)` — Einfahren des Sticky-Headers
(`transform 380ms`, `opacity 260ms ease`).

| Klasse                    | Definition                                                     |
| ------------------------- | -------------------------------------------------------------- |
| `animate-marquee`         | `translateX(0 → -50%)`, 38s linear infinite                    |
| `animate-spin-orbit`      | `rotate(360deg)`, 48s linear infinite                          |
| `animate-spin-orbit-rev`  | `rotate(-360deg)`, 48s linear infinite                         |
| `animate-sheen`           | 7.8s ease-in-out 0.6s infinite (1,8s Lauf, dann 6s Pause)      |
| `animate-floaty`          | 4s ease-in-out infinite                                        |
| `animate-pulse-line`      | 1.8s ease-in-out infinite, versetzt um 0 / 0,3s / 0,6s         |

Unter `prefers-reduced-motion: reduce` werden alle Endlosanimationen auf einen
Durchlauf reduziert und Übergänge praktisch abgeschaltet. Das fehlt in der
Vorlage und ist laut `design/README.md` (Offene Punkte Nr. 9) beim Nachbau zu
ergänzen.

---

## Eigene Utilities

| Klasse           | Zweck                                                              |
| ---------------- | ------------------------------------------------------------------ |
| `.no-scrollbar`  | blendet die Scrollbar des Branchen-Sliders aus                     |
| `.marquee-mask`  | weiche Kanten des Logo-Marquees (64px Verlauf links und rechts)    |
| `.marker`        | gelber Textmarker mit Innenabstand und Radius, bricht sauber um    |
| `.marker-flach`  | gelbe Hinterlegung ohne Innenabstand und ohne Radius               |

Die Vorlage nutzt beide Marker-Varianten: `.marker` in den Leistungen und im
Beweisfall, `.marker-flach` bei „funktioniert" und „Ansprechpartner".

---

## Box-Sizing: die wichtigste Fallgrube

Die Prototypen haben **keinen CSS-Reset**. Dort gilt für `<div>` und `<a>` der
Browser-Standard `content-box` — Padding und Rahmen kommen also *zusätzlich*
zur angegebenen Breite bzw. Höhe. Tailwind setzt dagegen global `border-box`.

Ohne Korrektur wird der Nachbau an diesen Stellen zu schmal bzw. zu niedrig
(gemessen: Leistungskarten 464px statt 488px, Über-uns-Panel 699px statt 736px,
Sekundärbuttons 50px statt 52px hoch).

Betroffene Stellen tragen deshalb `box-content`:

| Element                                             | Vorlage                              |
| --------------------------------------------------- | ------------------------------------ |
| Container Leistungen, Branchen, Zusammenarbeit      | `max-width` + horizontales Padding   |
| Über-uns-Panel                                       | `flex: 2 1 440px` + Padding          |
| Textteil der Projektkarten                           | `flex: 1` + Padding                  |
| Adressleiste im Browser-Mockup                       | `flex: 1` + Padding                  |
| Sekundärbuttons (`hell`, `dunkel`) und Hero-Buttons  | `height`/`min-height` + 1px Rahmen   |
| Icon-Kachel, FAQ-Zeichen, Schritt-Nummer             | feste Größe + 1px Rahmen             |
| Karten der beiden CSS-Illustrationen                 | feste Größe + 1,5px Rahmen           |

**`<button>` gehört ausdrücklich nicht dazu**: Elemente mit UA-Stylesheet
(`button`, `input`, `select`, `textarea`) sind schon im Browser-Standard
`border-box`. Burger-Button (42×42) und die Slider-Pfeile (48×48) bleiben
deshalb `border-box`.

Die Illustrationen setzen in der Vorlage teilweise selbst
`box-sizing: border-box` — diese Elemente behalten `box-border`.

**Regel für neue Sektionen:** Wenn die Vorlage an einem `<div>` oder `<a>`
gleichzeitig eine Breite/Höhe *und* Padding oder Rahmen angibt und kein
`box-sizing` setzt, gehört `box-content` an das Element.

---

## Zeilenhöhe im Basis-Layer

Tailwinds Preflight setzt `html { line-height: 1.5 }`. Die Vorlage hat keinen
solchen Reset — dort erbt alles ohne eigene Angabe `normal`. Damit Pills,
Buttons, Namen und Labels dieselbe Höhe bekommen, setzt `global.css`
`html { line-height: normal }` zurück. Konkrete Zeilenhöhen stehen als
`leading-*` an den Elementen selbst.

Ohne diese Korrektur waren die Eyebrow-Pills 38px statt 34px hoch.
