# [Projektname] – Website

<!--
  VORLAGE FÜR NEUE KUNDENPROJEKTE (STOLZ Marketing)
  ------------------------------------------------------------------------
  Entstanden aus dem Projekt stolz-marketing.de (live seit 09.09.2026).
  Jede Regel hier ist dort in der Praxis entstanden — meistens, weil
  etwas schiefgelaufen ist.

  So verwenden:
  1. Datei als CLAUDE.md in die Wurzel des neuen Repos kopieren.
  2. Alle Stellen in [eckigen Klammern] ausfüllen (Suche nach „[").
  3. Abschnitte, die für das Projekt nicht gelten (z. B. Ratgeber,
     Relaunch), löschen statt stehen lassen.
  4. Diesen Kommentarblock entfernen.

  Verbesserungen, die in einem Kundenprojekt entstehen, zurück in die
  Vorlage tragen (StolzHomeapge: docs/vorlagen/CLAUDE-vorlage.md).
-->

## Stand
`[Neuaufbau | Relaunch von …]`. Der Entwurf kommt aus **Claude Design** und
liegt als ZIP vor. Die Seite wird laufend erweitert (Leistungsseiten mit
SEO-Fokus, Ratgeber, Ortsseiten, Tools). Deshalb gilt von Tag eins an:
alles als wiederverwendbarer Block, alle Werte als Token, alle Texte als
Daten.

| Adresse | |
|---|---|
| `/` | Startseite |
| `[…]` | `[weitere Seiten aus dem Entwurf eintragen]` |
| `/kontakt` | Formular |
| `/impressum`, `/datenschutz`, `/404` | |
| `/styleguide` | **intern**: `noindex`, nicht in der Sitemap, nirgends verlinkt |

Diese Tabelle wird bei jeder neuen Seite gepflegt.

---

## Quelle der Wahrheit
Das ZIP aus Claude Design wird **unverändert** nach `design/` entpackt:

- `design/README.md` — **das Handoff-Dokument.** Tokens, Sektionsreihenfolge,
  Interaktionen, Animationen, Breakpoints, offene Punkte. **Immer zuerst
  lesen.**
- `design/*.dc.html` — die gerenderten Prototypen, eine Datei pro Seite
- Bilder, Logos, Grafiken aus dem Export

`design/` wird **nie verändert** und **nie deployed** (steht in
`.dockerignore`).

**Die `.dc.html` sind Prototypen einer hauseigenen Runtime.** `support.js`,
`image-slot.js`, `<x-dc>`, `<sc-for>`, `{{ platzhalter }}` und
`style-hover="…"` sind nur das Vehikel und werden **nicht übernommen**.
Relevant sind Layout, Maße, Farben, Typografie, Texte und Verhalten.
`style-hover` entspricht `:hover`, `{{ x }}` einem abgeleiteten Wert — im
Nachbau als CSS-Klasse oder Media Query, nie als Inline-Style aus JS.

### Rangfolge bei Widersprüchen
1. **Prototyp (`.dc.html`)** — er ist der gerenderte Entwurf und gewinnt bei
   konkreten Werten (Größen, Texte, Farben).
2. **`design/README.md`** — gilt für die Regeln dahinter (Farbrollen,
   Animationsdauern, Breakpoints, Prinzipien).
3. Eigene Einschätzung — nur nach Rückfrage, und dann dokumentiert in
   `docs/ABWEICHUNGEN.md`.

Bei Stolz haben sich README und Prototyp mehrfach widersprochen (andere H1,
andere Clamp-Werte). Nicht still auflösen, sondern als **[Rückfrage]** in
`ABWEICHUNGEN.md` notieren.

### Erste Schritte nach dem Entpacken
1. `design/README.md` vollständig lesen.
2. **Inventur:** Prüfen, ob alle referenzierten Dateien im ZIP sind
   (bei Stolz fehlte der komplette Ordner `uploads/`). Fehlendes sofort
   melden, nicht durch Platzhalter ersetzen und vergessen.
3. **Alle Werte aus allen Prototypen extrahieren** (Farben, Größen,
   Abstände, Radien, Schatten, Clamp-Kurven, Animationen) und dedupliziert
   in `@theme` überführen — **bevor** die erste Komponente entsteht.
4. Fast gleiche Werte (z. B. `#E3F53F` neben `#E4F53F`) nicht still
   zusammenlegen: auflisten, zusammenlegen, in `ABWEICHUNGEN.md` notieren.
5. `docs/DESIGN-SYSTEM.md` anlegen, `/styleguide` bauen (siehe unten).
6. Erst dann Basiskomponenten, dann Sektionen, dann Seiten.

---

## Stack
- **Astro** (aktuelle Major-Version), statisches Output (`output: 'static'`),
  `trailingSlash: 'never'`
- **Tailwind CSS v4** über `@tailwindcss/vite` (kein `tailwind.config.js`)
- **TypeScript strict** (`astro/tsconfigs/strict`)
- Design-Tokens als `@theme`-Variablen in `src/styles/global.css` —
  **keine hartcodierten Hex- oder px-Werte in Komponenten**
- Interaktivität als `<script>` im `.astro`-File (Vanilla JS), nur wo die
  Vorlage sie vorsieht. **Kein React/Vue/Alpine.**
- Bilder über `astro:assets` (`<Image />` / `<Picture />`)
- Ratgeber und andere Massen-Inhalte über **Astro Content Collections**
  (Markdown + Zod-Schema)
- `@astrojs/sitemap` für die Sitemap
- **Keine zusätzlichen Libraries ohne Rückfrage** (auch nicht MDX, Icon-Packs,
  Slider, Animations-Libraries)

### `astro.config.mjs` — bewährte Grundeinstellung
```js
export default defineConfig({
  site: 'https://[domain]',
  output: 'static',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // CSS inline ins HTML: spart den render-blockierenden Stylesheet-Request
  build: { inlineStylesheets: 'always' },
  // Bild-Cache an einem Ort, den Dokploy als Build-Cache mountet —
  // optimierte Bilder überleben so den nächsten Deploy
  cacheDir: './node_modules/.cache/astro',
  integrations: [
    sitemap({ filter: (seite) => !seite.includes('/styleguide') }),
  ],
  vite: {
    plugins: [tailwindcss()],
    preview: { allowedHosts: ['[domain]', 'www.[domain]', 'dev.[domain]'] },
  },
});
```

---

## Projektstruktur
```
design/                     # ZIP aus Claude Design (Referenz, nie ändern, nie deployen)
src/
  layouts/
    BaseLayout.astro        # <head>, Meta, OG, JSON-LD, Fonts, Analytics
    RatgeberLayout.astro    # Artikel: Breadcrumb, Inhaltsverzeichnis, Autor, Datum
    RechtstextLayout.astro  # Impressum, Datenschutz
  components/
    ui/                     # Atome: Button, Eyebrow, Icon, Logo, Badge, Akkordeon …
    blocks/                 # wiederverwendbare Sektionen mit Props (Hero, FAQ, CTA …)
    sections/<seite>/       # Sektionen, die es wirklich nur einmal gibt
    seo/                    # Breadcrumb, JsonLd, Inhaltsverzeichnis
  content/
    ratgeber/               # ein Markdown-File pro Artikel
  content.config.ts         # Zod-Schemas der Collections
  data/                     # alle Texte, eine Datei pro Seite
    navigation.ts           # Haupt- und Footer-Navigation, zentrale CTA-Ziele
    firma.ts                # Eckdaten (Adresse, Telefon …) — EINE Quelle
    leistungen/             # eine Datei pro Leistungsseite
    rechtstexte/            # Impressum und Datenschutz als HTML
  pages/
  styles/global.css         # Tailwind + @theme-Tokens + Basis-Layer
  assets/                   # Bilder (via astro:assets optimiert)
public/                     # Fonts, Favicons, robots.txt
docs/
  DESIGN-SYSTEM.md          # alle Tokens mit Verwendung
  ABWEICHUNGEN.md           # jede bewusste Abweichung vom Entwurf, mit Grund
  BLOECKE.md                # Katalog der Blöcke mit Props und Einsatzort
deploy/nginx.conf
Dockerfile
```

---

## Wiederverwendbare Blöcke (das Wichtigste für eine wachsende Seite)

**Grundsatz:** Eine Seite ist eine Folge von Blöcken, die ihre Texte aus
`src/data/` bekommen. Eine neue Leistungsseite soll im Normalfall **nur
eine neue Datei in `src/data/leistungen/` und eine kurze Seite** sein —
kein neues Markup.

### Regeln
- **Ab dem zweiten Vorkommen ist es ein Block.** Sobald eine Sektion auf
  einer zweiten Seite auftaucht — auch leicht abgewandelt — wird sie nach
  `components/blocks/` gezogen und die Unterschiede werden zu Props
  (hell/dunkel, mit/ohne Nummern, mit/ohne Hinweiszeile). Nie kopieren und
  anpassen.
- **Varianten als typisierte Union**, nicht als Freitext-Klassen:
  `variante: 'primaer' | 'sekundaer-hell' | 'sekundaer-dunkel'`. Die
  Klassen je Variante stehen als `Record<Variante, string>` im Block.
- **Mechanik und Aussehen trennen.** Bei Stolz teilen sich z. B. FAQ der
  Startseite (mit Nummern) und FAQ der Leistungsseiten (ohne) ein
  `Akkordeon`; Kontaktseite und Abschlussformular teilen sich ein
  `Formular` (Felder per Prop, Honeypot, Absenden, Statusmeldung).
- **Jeder Block ist selbst verantwortlich** für sein Sektions-Padding und
  seine Contentbreite (über Tokens). Seiten setzen keine Abstände zwischen
  Blöcken.
- **Props mit JSDoc** dokumentieren (`/** … */`), damit sie im Editor
  sichtbar sind. Jeder neue Block kommt in `docs/BLOECKE.md`.
- **Listen ableiten statt abtippen.** Wenn dieselbe Liste an zwei Stellen
  steht (Leistungen im Menü, im Footer, auf der Startseite), gibt es eine
  Quelle in `src/data/` und die anderen leiten ab. Zwei gepflegte Listen
  laufen auseinander.
- **Zentrale Ziele.** Der Haupt-CTA („Angebot anfragen" o. ä.) zeigt überall
  auf ein Ziel, das an **einer** Stelle in `navigation.ts` steht.
- **Links auf Seiten, die es noch nicht gibt:** nicht ins Leere laufen
  lassen. In `navigation.ts` mit `nochNicht: true` markieren → wird im
  Footer ausgegraut und nicht klickbar. Flag entfernen, sobald die Seite
  steht.
- **Eckdaten** (Firmenname, Adresse, Telefon, E-Mail, Öffnungszeiten) stehen
  nur in `src/data/firma.ts` und werden von Footer, Kontakt, Impressum und
  JSON-LD importiert.

### Leistungsseiten (SEO)
- Eine Datei pro Leistung in `src/data/leistungen/<slug>.ts` mit einem
  gemeinsamen Typ (`Leistungsseite`): `title`, `description`, `h1`, Hero,
  Abschnitte, FAQ, verwandte Leistungen, verwandte Ratgeber.
- Die Seite setzt die Blöcke in der Reihenfolge des Entwurfs zusammen. Wenn
  alle Leistungsseiten identisch aufgebaut sind: eine dynamische Route
  `src/pages/leistungen/[slug].astro` mit `getStaticPaths()`.
- Jede Leistungsseite hat **ein Haupt-Keyword**, eine eigene H1, einen
  eigenen Title und eine eigene Description. Keine zwei Seiten zielen auf
  dasselbe Keyword.
- Ortsseiten (Leistung + Ort) nur mit echtem lokalem Inhalt, nie als
  Textbaustein mit ausgetauschtem Ortsnamen. Die Begründung für jede
  geplante Ortsseite (z. B. aus dem Search-Console-Export) steht als
  Kommentar in `navigation.ts`.

### Ratgeber
- Content Collection `ratgeber` mit Zod-Schema, mindestens:
  `titel`, `beschreibung`, `veroeffentlicht` (Datum), `aktualisiert?`,
  `autor`, `kategorie`, `bild`, `bildAlt`, `leistung?` (Verknüpfung zur
  passenden Leistungsseite), `entwurf?` (wird nicht gebaut).
- Übersicht `/ratgeber`, Kategorien `/ratgeber/<kategorie>`, Artikel
  `/ratgeber/<slug>` — Adressen von Anfang an festlegen, später nicht mehr
  ändern.
- Jeder Artikel verlinkt auf mindestens eine Leistungsseite, jede
  Leistungsseite auf ihre passenden Artikel (aus den Daten abgeleitet,
  nicht von Hand).
- Markdown-Elemente (`h2`, `p`, `ul`, `blockquote`, `table`, `img`) werden
  **einmal** im `RatgeberLayout` über die Tokens gestaltet — nicht pro
  Artikel.

---

## Design-System

Tokens stehen **ausschließlich** in `src/styles/global.css` im `@theme`-Block
und sind in `docs/DESIGN-SYSTEM.md` dokumentiert (Token, Wert, Verwendung).
Neue Werte kommen dort hinein, nie in die Komponente.

### Bewährte Konventionen
- **Tailwind-Standardwerte entfernen**, damit nur das Design-System gilt:
  `--color-*: initial`, `--text-*: initial`, `--radius-*: initial`,
  `--shadow-*: initial`, `--leading-*: initial`, `--tracking-*: initial`,
  `--breakpoint-*: initial`. Danach `--color-transparent` und
  `--color-current` wieder anlegen. `bg-blue-500` oder `text-lg` gibt es
  dann nicht mehr — Fehlgriffe fallen sofort auf.
- **`--spacing: 1px`.** Dann ist `p-40` exakt 40px wie im Entwurf, ohne
  Umrechnen.
- **Schriftgrößen nach px benannt** (`text-17` = 17px). Der Abgleich mit der
  Vorlage beim Review ist dann trivial.
- **Zeilenhöhe nicht an die Schriftgröße koppeln** — Entwürfe kombinieren
  dieselbe Größe mit verschiedenen Zeilenhöhen. Immer separat über
  `leading-*` setzen.
- **Fluide Überschriften als Rollen** (`text-h1`, `text-h2-faq` …), jede mit
  ihrer exakten Clamp-Kurve aus dem Entwurf. Nicht auf eine gemeinsame
  Skala zwingen und nicht runden.
- **Sektionsabstände, Seitenränder, Contentbreiten** als benannte
  `--spacing-*`-Tokens (`section-y`, `page-x`, `content` …).
- **Farben nach Rolle benennen**, nicht nach Ton (`ink`, `ink-muted`,
  `paper`, `line` statt `grey-500`). Transparente Stufen über den
  Opacity-Modifier (`bg-akzent/10`), nicht als eigenes Token.
- **Achtung bei `--spacing-*`-Namen:** Der Name landet im selben Namensraum
  wie `inline-*`, `w-*`, `h-*`. `--spacing-block` erzeugt `inline-block` als
  Größen-Utility und hebelt das Display-Utility aus. **Keine Token-Namen,
  die einem CSS-Schlüsselwort entsprechen** (`block`, `flex`, `grid`,
  `none`, `contents`, `table`).
- Eigene Utilities (Textmarker, Masken, Muster) in `@layer utilities` in
  `global.css`, mit Kommentar, wo sie im Entwurf vorkommen.

### `/styleguide` (intern)
Eine Seite, die alle Tokens und alle Blöcke mit ihren Varianten zeigt:
Farben, Typo-Skala, Abstände, Buttons, Karten, jeder Block einmal hell und
einmal dunkel. `noindex`, nicht in der Sitemap, nirgends verlinkt. Wird mit
jedem neuen Block ergänzt. Sie ist der schnellste Weg, Regressionen zu
sehen, bevor sie auf einer echten Seite landen.

---

## 1:1-Nachbau: die Fallgruben aus dem Stolz-Projekt

Jede dieser Stellen hat bei Stolz einen messbaren Unterschied zur Vorlage
verursacht.

1. **Box-Sizing.** Die Prototypen haben **keinen CSS-Reset** — dort gilt für
   `<div>` und `<a>` `content-box`, Padding und Rahmen kommen *zusätzlich*
   zur Breite. Tailwind setzt global `border-box`. Folge bei Stolz: Karten
   464 statt 488px, Buttons 50 statt 52px hoch.
   **Regel:** Gibt die Vorlage an einem `<div>`/`<a>` gleichzeitig
   Breite/Höhe *und* Padding/Rahmen an und setzt kein `box-sizing`, gehört
   `box-content` daran. `<button>`, `input`, `select`, `textarea` sind schon
   im Browser `border-box` — dort **nicht**.
   **Aber:** Auf schmalen Geräten verursacht `box-content` an Elementen mit
   Innenabstand seitliches Scrollen. Dann `max-w-full` dazu oder die
   Breite anders lösen — auf 320px prüfen.
2. **Zeilenhöhe.** Tailwinds Preflight setzt `html { line-height: 1.5 }`, die
   Prototypen erben `normal`. Im Basis-Layer `html { line-height: normal }`
   setzen, sonst werden Pills, Buttons und Labels höher (bei Stolz 38 statt
   34px).
3. **Schrift-Stack exakt wie die Vorlage**, z. B. `'Inter', sans-serif` —
   **kein** `system-ui` dazwischen. Zeichen außerhalb des Font-Subsets (der
   Pfeil `→` in jedem CTA) kommen aus dem Fallback; mit `system-ui` war der
   Pfeil 3px schmaler und jeder Button falsch breit.
4. **Fonts selbst hosten** (`public/fonts/`, Variable Fonts als woff2,
   getrennt nach `latin` und `latin-ext` mit `unicode-range`,
   `font-display: swap`). Die kritischen Dateien im `<head>` per
   `preload` laden. **Kein Request an Google Fonts** (DSGVO).
5. **`text-wrap: balance`** auf `h1–h3`, **`text-wrap: pretty`** auf `p` —
   global im Basis-Layer, wenn das Handoff es als Regel nennt. Umbrüche
   weichen dann vom Prototyp ab; das in `ABWEICHUNGEN.md` notieren.
6. **Feste Abzüge wie `calc(100vh - 182px)`** stimmen im Nachbau nicht, weil
   Kopfzeile und Bänder andere Höhen haben. Stattdessen das ganze Band auf
   `min-h-svh` und den Hero auf `flex-1`. **`svh` statt `vh`**, damit auf
   dem Handy nichts springt, wenn die Adressleiste ein- und ausfährt.
7. **Bilder, die bis an den Rand laufen** (negative Margins, fehlendes
   Padding auf einer Seite), beim ersten Bau genau ansehen — das wurde bei
   Stolz übersehen und musste nachgebaut werden.
8. **`position: sticky` nur, solange das Layout mehrspaltig ist.** Sobald
   Spalten umbrechen, schiebt sich das Sticky-Element über den Inhalt.
9. **Kein `overflow-wrap: break-word` als Notnagel** gegen Überlauf: Es
   zerlegt Wörter ohne Trennstrich („Dachdec/ker"). Entweder passt der
   Platz, oder das Wort bekommt ein **weiches Trennzeichen (U+00AD)** an
   einer echten Trennstelle. Lange deutsche Komposita in schmalen Kacheln
   (zweispaltig auf dem Handy) sind der häufigste Auslöser.
10. **Bilder deckeln.** Originalfotos mit 5000px+ nie ungedeckelt
    ausliefern: `widths`/`sizes` an `<Image>` setzen, größte Fassung passend
    zur tatsächlichen Darstellungsbreite × 2, Qualität um 70. Bei Stolz:
    Hero 111 KB statt 2,5 MB. Hochkant/Quer der Vorlage prüfen; falsches
    Format melden, statt still zu beschneiden.
11. **Helles Bild hinter heller Navigation:** Verlauf über den oberen Rand
    legen, sonst ist die Navigation nicht lesbar.

---

## Responsive
- Das Layout skaliert **intrinsisch** über `clamp()`, `min()`, `minmax()`
  und `flex-wrap`. Echte Breakpoints nur die aus dem Handoff, als benannte
  Tokens (`--breakpoint-nav: …` → `nav:flex`). **Keine weiteren anlegen.**
- **Jede Änderung auf vier Breiten prüfen: 1440, 820, 390 und 320px.**
- Der Fehler, der bei Stolz zweimal durchgerutscht ist: **seitliches Scrollen
  auf schmalen Geräten** — Ursache jedes Mal eine feste Mindestbreite, die
  breiter ist als der verbleibende Platz. Deshalb:
  - `minmax(min(240px,100%),1fr)` statt `minmax(240px,1fr)`
  - `min-w-[min(280px,100%)]` statt `min-w-280`
  - `flex-basis` mit `min()` statt fester Basis
  - kein `box-content` an Elementen mit Innenabstand ohne `max-w-full`
- **Richtig testen:** Nicht nur `scrollWidth` mit `clientWidth` vergleichen,
  sondern prüfen, ob sich das Dokument **tatsächlich** seitlich scrollen
  lässt (`window.scrollTo(100, 0)` → `scrollX` muss 0 bleiben). Bei Stolz
  wurde ein echter Überlauf als „7px vom Marquee" abgetan.

---

## Barrierefreiheit (immer ergänzen, auch wenn der Entwurf es nicht zeigt)
- Sichtbarer Tastaturfokus über `:focus-visible` (Akzentfarbe, Outline mit
  Offset)
- `prefers-reduced-motion: reduce` schaltet Endlosanimationen ab und kürzt
  Übergänge — fehlt in Entwürfen fast immer
- Burger-Menü: `aria-expanded`, `aria-controls`, `inert` im geschlossenen
  Zustand, Fokus auf den Schließen-Button, Escape schließt, schließt beim
  Überschreiten des Nav-Breakpoints
- Akkordeon/FAQ: Fragen sind `<button>` in `<h3>`, mit `aria-expanded`,
  `aria-controls`, Antwort mit `role="region"`
- Slider-Pfeile mit `aria-label` und `aria-controls`
- Bewertungen als `<figure>`/`<blockquote>`/`<figcaption>`, Schritte als
  `<ol>`, Footer-Spalten als `<nav aria-label>`
- Genau **eine H1 pro Seite**, Überschriften lückenlos. Was optisch eine
  Überschrift ist und Inhalt überschreibt, wird `h2`/`h3`, auch wenn der
  Entwurf `<span>` nutzt.
- `alt`-Texte beschreibend und vollständig; rein dekorative Bilder `alt=""`
  und doppelte Marquee-Hälften `aria-hidden="true"`. Formulierungen als
  Vorschlag in `ABWEICHUNGEN.md` zur Freigabe.
- Kontrast prüfen, besonders bei Verläufen und Markern auf dunklem Grund
  (bei Stolz lag Schrift am Ende eines Marker-Verlaufs bei 1,5 : 1).

---

## SEO-Grundgerüst
- **`BaseLayout`** nimmt `title`, `description`, `canonical?`, `noindex?`,
  `bild?` und erzeugt: Title, Description, Canonical (absolut, aus
  `Astro.site`), Open Graph und Twitter-Card (absolute Bild-URL,
  Breite/Höhe/Typ, 1200×630), `og:locale de_DE`, `theme-color`, Favicons
  (SVG + ICO + Apple-Touch).
- **Strukturierte Daten** als JSON-LD aus `firma.ts`:
  `LocalBusiness` (bzw. passender Untertyp) mit **eingetragener Anschrift**
  auf allen Seiten, `BreadcrumbList` auf Unterseiten, `FAQPage` wo FAQ
  steht, `Article` im Ratgeber, `Service` auf Leistungsseiten. Nur Angaben,
  die auch sichtbar auf der Seite stehen.
- **Breadcrumb** sichtbar auf allen Unterseiten (als Block).
- **Sitemap** über `@astrojs/sitemap`; interne Seiten (`/styleguide`,
  Danke-Seiten, QR-Weiterleitungen) per `filter` ausschließen **und**
  `noindex` setzen.
- **Staging nie im Index:** `noindex` per nginx am Host-Header
  (`X-Robots-Tag`), nicht im Build — der Build ist für alle Umgebungen
  identisch.
- **Adressen sind für immer.** Kleinbuchstaben, Bindestriche, deutsch, ohne
  Umlaute (`ae`, `oe`, `ue`, `ss`). Einmal live, wird eine Adresse nicht
  mehr geändert — wenn doch, **301** in `deploy/nginx.conf`.
- Title ≤ 60 Zeichen, Description ≤ 155 Zeichen, jeweils eindeutig. Wenn der
  Entwurf keine Meta-Texte hat: aus H1 und Lead ableiten und als
  **[Rückfrage]** zur Freigabe vorlegen.
- **Interne Verlinkung** aus den Daten ableiten (verwandte Leistungen,
  passende Ratgeber), nicht von Hand pflegen.
- Lighthouse auf Mobil: Performance, Barrierefreiheit, Best Practices und
  SEO jeweils ≥ 95 als Ziel vor jedem Livegang.

---

## Messung und Datenschutz
- `[Analytics-Setup festlegen]` — bewährt bei Stolz:
  - **Umami** (selbst gehostet, cookielos) ohne Einwilligung direkt im
    `BaseLayout`, mit `data-domains` auf die Produktionsdomain begrenzt.
  - **Google Analytics / Microsoft Clarity** nur hinter dem Cookie-Banner.
    Vor der Zustimmung wird **kein Skript geladen und kein Cookie gesetzt**.
    Wahl in `localStorage`, „Cookie-Einstellungen" im Footer öffnet das
    Banner erneut. Beide laden nur auf der Produktionsdomain.
  - Prüfen: Beim Erstbesuch geht **kein** Request an Drittanbieter.
- Keine externen Ressourcen zur Laufzeit (CDNs, Google Fonts, eingebettete
  Karten, iframes mit Fremdinhalten), wo es eine statische Lösung gibt.
  Beispiel Stolz: Die Deutschlandkarte lud d3 und topojson vom CDN — jetzt
  ist der Umriss einmal vorberechnet und als SVG-Pfad im Bauteil.
- **Wer einen Dienst ergänzt, ergänzt gleichzeitig** den passenden Abschnitt
  in `src/data/rechtstexte/datenschutz.html`.

---

## Formulare
- Ein gemeinsamer Formular-Block (`[Web3Forms o. ä.]`) mit Feldern per
  Prop, Honeypot gegen Spam, Statusmeldung nach dem Absenden.
- **Pflichtfelder bewusst setzen** — Entwürfe markieren oft keines, dann
  wäre ein leeres Formular absendbar.
- **Kein `type="url"`** für Webseiten-Felder: Browser verlangen dann
  „https://", die Prüfung blockiert das ganze Formular und es kommt nichts
  an. Stattdessen `type="text"` mit `inputmode="url"` und beim Absenden
  `https://` ergänzen.
- `autocomplete`-Attribute setzen (`name`, `tel`, `email`, `organization`).
- **Jedes Formular nach dem Bau einmal echt absenden** und den Eingang
  prüfen.

---

## Code-Konventionen
- **Deutsche Bezeichner und deutsche Kommentare** (`variante`, `nochNicht`,
  `setzen`). Kommentare erklären das **Warum** — besonders bei jeder Stelle,
  die von der Vorlage abweicht oder einen Fehler behebt.
- Klassen, die sich bedingen, über `class:list`. Lange Klassenketten je
  Variante als `Record` im Frontmatter, nicht inline im Markup.
- JS-Hooks über `data-*`-Attribute (`data-akkordeon`), nicht über Klassen.
  Skripte arbeiten für **alle** Vorkommen auf der Seite
  (`querySelectorAll(...).forEach`).
- Animationen, die nur im Sichtbereich laufen sollen, über
  `IntersectionObserver`; nie bei `prefers-reduced-motion`.
- Externe Links mit `target="_blank" rel="noopener"` über eine Prop
  (`extern`), nicht von Hand.
- Sauberes, semantisches Markup **ohne tote Reste**: keine
  auskommentierten Blöcke, keine ungenutzten Komponenten, keine
  Platzhalter-Kacheln der Vorlage („Name / Rolle") auf einer Live-Seite.

---

## Genauigkeit
- Texte **1:1** aus der Vorlage, nichts umformulieren
- Farben, Schriftgrößen und Abstände **exakt** — die Vorlage ist bereits
  normalisiert, es wird **nicht** nachträglich gerundet
- Hover-Zustände, Übergänge und Animationen wie in der Vorlage (Dauer,
  Easing, Verzögerung)
- Auch offensichtliche Ungleichheiten im Entwurf erst einmal **exakt**
  übernehmen und als **[Rückfrage]** notieren, statt still zu
  „korrigieren"
- **Nach dem Bau messen**, nicht schätzen: Elementmaße im Nachbau mit dem
  Prototyp vergleichen (Breite, Höhe, Abstand), z. B. per Playwright auf
  beiden Seiten nebeneinander.

---

## `docs/ABWEICHUNGEN.md`
Alles, was bewusst anders ist als in `design/`, steht dort — nummeriert,
mit **Vorlage**, **Umgesetzt** und **Grund**. Nichts wird still geändert.

- Offene Entscheidungen tragen **[Rückfrage]** und bleiben stehen, bis
  `[Ansprechpartner]` entschieden hat; danach **Geklärt:** dazuschreiben.
- Änderungswünsche des Kunden mit Datum und „Wunsch `[Name]`".
- **Eigene Fehler** als solche benennen („Das war ein Fehler von mir, keine
  bewusste Abweichung") und beschreiben, wie sie künftig auffallen.
- Abschnitt „Was ausdrücklich *nicht* abweicht", damit niemand später
  Absicht für Versehen hält.

---

## Deployment
- **Dokploy** baut über das `Dockerfile`: Node-Build (`node:22-alpine`,
  `npm ci`, `npm run build`) → `nginx:alpine`, Port 80.
- `main` = Produktion (`[domain]`)
- `dev` = Staging (`dev.[domain]`)
- **Ablauf:** Änderungen entstehen auf `dev`, werden auf Staging angesehen
  und erst danach nach `main` vorgespult. Beide Branches stehen auf
  demselben Commit, jeder Merge ist ein konfliktfreier Fast-Forward.
- **Nichts ungefragt live nehmen.** Auf `main` wird nur gepusht, wenn
  `[Ansprechpartner]` es für die konkrete Änderung gesagt hat.
- `.dockerignore`: `node_modules`, `dist`, `.astro`, `.git`, `docs`,
  `design/`.

### `deploy/nginx.conf` — bewährte Bausteine
- `try_files $uri $uri/index.html $uri/ =404;` (passt zu
  `trailingSlash: 'never'`)
- Eigene 404-Seite: `error_page 404 /404.html;` — die Seite trägt `noindex`
  und führt zurück auf Startseite und Hauptnavigation.
- `map $host $robots_tag { … }` → `noindex, nofollow` nur für Staging.
- **`add_header` vererbt sich nicht** in Blöcke mit eigenem `add_header` —
  `X-Robots-Tag` in jedem `location` mit eigenen Headern wiederholen.
- `/_astro/` und `/fonts/`:
  `Cache-Control "public, max-age=31536000, immutable"`.
- `gzip` für CSS, JS, JSON, SVG, XML.
- **301-Weiterleitungen als regulärer Ausdruck** mit `~*` und `/?$`
  (`location ~* ^/alte-seite/?$ { return 301 /neue-seite; }`): fängt
  abschließenden Schrägstrich und Großschreibung ab — `location =` lief bei
  Stolz mit `/archiv/` in einen 404.
- **Gedruckte Adressen** (QR-Codes, Flyer, Fahrzeugbeschriftung) als
  **echte Seite im Build** anlegen, nicht nur als nginx-Regel — dann
  funktionieren sie auch, wenn die Konfiguration einmal nicht ankommt.
  UTM-Parameter dürfen dabei nicht verlorengehen.

### Bei einem Relaunch (falls es einen alten Auftritt gibt)
- Alten Stand vollständig in einen Archiv-Branch sichern, nicht deployen.
- **Alle alten Adressen** aus der Search Console exportieren. Was weiter
  rankt, behält seine Adresse; alles andere bekommt eine 301 auf das
  inhaltlich passende Ziel.

---

## Eckdaten
- Firma: `[…]`
- Inhaber / Ansprechpartner: `[…]`
- Adresse: `[…]`
- E-Mail: `[…]`
- Telefon: `[…]`
- USt-ID: `[…]`
- Domain: `[…]`, Staging: `dev.[…]`
- Social: `[…]`

Diese Daten stehen im Code **nur** in `src/data/firma.ts`.

---

## Arbeitsweise
- **Bei Unklarheiten nachfragen, statt zu raten.**
- **Keine Zahlen, Auszeichnungen, Bewertungen oder Kundenstimmen
  erfinden** — nur verwenden, was geliefert wurde. Platzhalter der Vorlage
  bleiben sichtbar Platzhalter oder werden weggelassen, nie mit
  ausgedachten Inhalten gefüllt.
- Vor jedem Commit: `npm run build` ohne Fehler und Warnungen, die vier
  Breiten (1440/820/390/320) angesehen, kein seitliches Scrollen.
- Neue Werte → `global.css` + `DESIGN-SYSTEM.md`. Neuer Block →
  `BLOECKE.md` + `/styleguide`. Abweichung → `ABWEICHUNGEN.md`. Neue Seite
  → Tabelle oben in dieser Datei. Neuer Dienst → Datenschutzerklärung.
- Commit-Nachrichten auf Deutsch, aus Sicht der Seite formuliert
  („Leistungsseite `[Leistung]` live", „FAQ: Antwort klappte auf dem
  Handy nicht auf").
