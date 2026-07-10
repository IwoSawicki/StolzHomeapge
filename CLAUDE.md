# STOLZ Marketing – Website-Nachbau (Framer → Astro)

## Ziel
1:1-Nachbau der Framer-Website stolz-marketing.de.
Zuerst die **Startseite**, danach **Kontakt**, **Impressum**, **Datenschutz**.
Weitere Unterseiten (Leistungsseiten, Projekt-Unterseiten, Landing Pages, Blog)
kommen später in eigenen Phasen — die Architektur muss das von Anfang an
sauber vorbereiten.

Die Seite soll optisch und im Verhalten vom Original nicht zu unterscheiden
sein — mit **einer** bewussten Ausnahme: krumme Werte aus Framer werden auf
die Tailwind-Skala normalisiert (siehe „Normalisierungsregeln").

## Stack
- **Astro** (aktuelle Major-Version), statisches Output (`output: 'static'`). Kein SSR.
- **Tailwind CSS v4** über `@tailwindcss/vite`. Design-Tokens als `@theme`-Variablen
  in `src/styles/global.css` — KEINE hartcodierten Hex-/px-Werte in Komponenten.
- Interaktivität nur als `<script>` im `.astro`-File (Vanilla JS), und nur dort,
  wo das Original sie hat: Hamburger-Menü, Painpoint-Tabs, FAQ-Akkordeon,
  Kontaktformular. Kein React/Vue/Alpine. Sonst kein JS.
- Bilder über `astro:assets` (`<Image />`).
- Keine zusätzlichen Libraries ohne Rückfrage.

## Quelle
- Der Framer-Export liegt in `./original/` (index.html, kontakt.html,
  impressum.html, datenschutz.html). Das ist die **Wahrheit** für alle Texte,
  Farben, Abstände, Schriften und Bilder. Im Zweifel dort nachschauen, nicht raten.
- Achtung Framer: Markup ist generiert (verschachtelte `div`s, kryptische
  Klassen, Inline-Styles, `data-framer-*`, Desktop-/Tablet-/Phone-Varianten
  desselben Inhalts doppelt im DOM). Das Markup NICHT kopieren — nur die
  **berechneten Styles und Inhalte** extrahieren und in sauberes, semantisches
  HTML übersetzen. Pro Inhalt EIN Element, responsive über Tailwind-Klassen.
- Bekannte Lücken des Mirrors (siehe docs/PLAN.md, offene Fragen):
  `datenschutz.html` ist eine leere JS-Shell; von den 5 Painpoint-Tabs ist nur
  „Keine Zeit" im HTML enthalten. Diese Inhalte NICHT erfinden — nachfragen.
- Bilder/Fonts liegen auf `framerusercontent.com` bzw. `fonts.gstatic.com` —
  alle referenzierten Assets herunterladen, nach `src/assets/` bzw.
  `public/fonts/` übernehmen und mit sprechenden deutschen Dateinamen versehen
  (gut für Bilder-SEO), nicht die Framer-Hashnamen behalten.

## Genauigkeits- & Normalisierungsregeln
Grundsatz: **Layout, Texte, Farben, Schriften, Verhalten = exakt wie Original.
Maße = auf Tailwind-Skala gerundet.**

- **Texte:** Alle deutschen Texte 1:1 übernehmen, nichts umformulieren, keine
  Tippfehler „korrigieren" ohne Rückfrage (Ausnahme: die in docs/PLAN.md unter
  „Offene Fragen" gelisteten Inkonsistenzen — dort entscheidet Iwo).
- **Farben:** Exakte Hex-Werte aus dem Original. Fast identische Töne zu EINEM
  Token zusammenfassen (z. B. #0A0A0A/#0F0F0F/#141414 → ein Dunkel-Token;
  #CCFC7E/#C2FA69 → ein Lime-Token) und jede Zusammenfassung in
  `docs/DESIGN-SYSTEM.md` dokumentieren. Vorschlag siehe docs/PLAN.md.
- **Abstände/Größen:** Auf den nächstgelegenen Wert der Tailwind-Spacing-Skala
  runden (4px-Raster: 15→16, 39→40, 58→56 oder 60, 70→72). Abweichung max.
  ±4px; würde die Rundung sichtbar mehr verändern, Original-Wert als
  Custom-Token anlegen.
- **Schriftgrößen:** Auf die Tailwind-Type-Scale mappen; liegt das Original
  dazwischen, den näheren Wert nehmen (15→16, 17→18, 22/23/25→gemäß Mapping in
  docs/PLAN.md). Werte ohne sinnvollen Nachbarn (40px, 85px, Riesen-Wortmarke
  im Footer) als Custom-Token. Alles in `docs/DESIGN-SYSTEM.md` festhalten.
- **Schriften:** Wie das Original: **Inter** (400/500/600/700 + Italic),
  **Inter Display** (800, 500 Italic), **Geist** (500/600/700),
  **Plus Jakarta Sans** (600). Fonts **selbst hosten** (WOFF2 in
  `public/fonts/`, `@font-face` + Preload für die kritischen Schnitte) — nichts
  von framerusercontent.com oder fonts.gstatic.com laden (Performance + DSGVO).
- **Hover-States & Transitions:** identisch — gleiche Dauer, gleiches Easing.
- **Scroll-Animationen:** Der Framer-Export hat Appear-Animationen auf
  „reduce" — es gibt KEINE Einblend-Animationen beim Scrollen. Keine erfinden.
- **Responsive:** Framer-Breakpoints exakt übernehmen als Custom-Breakpoints
  in Tailwind: Phone < 810 / Tablet 810–1199 / Desktop ≥ 1200
  (`--breakpoint-md: 810px`, `--breakpoint-xl: 1200px`). NICHT auf 768/1280
  verbiegen — das sichtbare Umbruchverhalten muss dem Original entsprechen.

## Projektstruktur (auf Erweiterung ausgelegt)
```
src/
  layouts/BaseLayout.astro        # <head>, Meta/OG, JSON-LD, Fonts, Slot
  components/                     # Header, Footer, Button, SectionLabel, Card, …
  components/sections/            # Eine Datei pro Startseiten-Sektion
  pages/index.astro               # Startseite = Aneinanderreihung der Sektionen
  pages/kontakt.astro             # Kontakt (Formular, Ablauf, FAQ)
  pages/impressum.astro           # Impressum
  pages/datenschutz.astro         # Datenschutz (Text folgt, s. offene Fragen)
  pages/leistungen/[slug].astro   # später: Leistungsseiten
  pages/projekte/[slug].astro     # später: Projekt-Unterseiten
  pages/blog/[slug].astro         # später: Blog
  content/                        # Astro Content Collections (blog, projekte, leistungen)
  styles/global.css               # Tailwind + @theme Design-Tokens
  assets/                         # Bilder (von astro:assets optimiert)
public/fonts/                     # Selbst gehostete WOFF2
docs/DESIGN-SYSTEM.md             # Extrahierte Tokens + alle Normalisierungs-Entscheidungen
docs/PLAN.md                      # Sektionsliste, Tokens, Baureihenfolge, offene Fragen
original/                         # Framer-Export (Wahrheit, wird nie deployed)
```
- Wiederkehrende UI-Elemente sofort als Komponenten mit Props bauen, die
  Unterseiten sie später wiederverwenden: `Button` (Dark/Light/Nur-Text-
  Varianten), `SectionLabel` (Icon + Label-Pill), `SectionHeading`
  (Label + H2 + Beschreibung), `Card`, `FooterCta`.
- `original/` einchecken (Quelle versioniert), aber vom Build ausschließen.

## Sektionen der Startseite (Details in docs/PLAN.md)
1. **Header/Nav** – Logo „STOLZ", Links: Startseite/#start, Leistungen/#leistungen,
   Prozess/#prozess, Ergebnis/#ergebnis, Projekte/#projekte, Kontakt-Button →
   /kontakt. Mobil: Hamburger-Menü.
2. **Hero** (#start) – H1 „Mehr Anfragen für Ihr Unternehmen. Messbar & Planbar.",
   Subline, CTA „Jetzt Potenzial checken lassen" + „Direkt anrufen – …", Hero-Bild.
3. **Einblicke** – H2 „So sieht gute Sichtbarkeit in der Praxis aus.", 4 Hochformat-
   Beispiele mit Ergebnis-Badges (aktuell Bilder, Videos folgen laut Text „später").
4. **Painpoint-Tabs** – „Deine Herausforderungen": 5 Tabs (Keine Ergebnisse,
   Zu teuer, Wo anfangen?, Keine Ideen, Keine Zeit) mit wechselndem Inhalt.
5. **Probleme** – „Kennen Sie das?", 6 Problem-Karten, Abschlusstext + CTA.
6. **Leistungen** (#leistungen) – „Warum wir?": 3 Karten (Kundengewinnung,
   Mitarbeitergewinnung, Mehr Sichtbarkeit auf Google & KI).
7. **Prozess** (#prozess) – „Unser Prozess zum Erfolg": 3 nummerierte Steps.
8. **Ergebnis** (#ergebnis) – „Das Ergebnis": 6 Ergebnis-Karten.
9. **Projekte** (#projekte) – „Erfolgreiche Projekte": 3 Projekt-Karten
   (S-Tech Fahrzeugbau, SAAN Wasserstrahl, raum.Konzept) + 2 CTAs.
10. **Statistics** – Großes Statement + 3 Werte (Messbar, Planbar, Transparent).
11. **Footer** – CTA-Block „Kostenlose Analyse anfragen" mit Button „Website &
    Sichtbarkeit prüfen lassen", darunter Logo, Claim, Status „Alle Systeme
    live", Navigation, Kontakt, Impressum/Datenschutz, ©Stolz Marketing.

## Eckdaten (Quelle: Impressum im Original)
- Inhaber: Iwo Sawicki
- Adresse: Heidelbergerstraße 15D, 64385 Reichelsheim
- E-Mail: iwo@stolz-marketing.de
- Telefon: +49 173 4388519 (Impressum) — Achtung: Startseite/Footer nutzen
  +49 178 4444156 in unterschiedlichen Schreibweisen → offene Frage, nicht raten.
- USt-ID: DE350093785
- Meta-Title: „STOLZ Marketing | Mehr Anfragen für Handwerksbetriebe"
- Meta-Description: „STOLZ Marketing hilft Handwerksbetrieben mehr qualifizierte
  Anfragen und passende Bewerbungen zu gewinnen. Transparent, messbar und verständlich."

## SEO (von Anfang an, da Basis für alle künftigen Seiten)
- Pro Seite: sauberer `<title>`, `meta description`, Canonical, OG- + Twitter-Tags
  (Texte aus dem Original übernehmen; OG-Bild aus dem Original sichern).
- JSON-LD: `LocalBusiness`/`ProfessionalService` mit den Eckdaten; später
  `Service` für Leistungsseiten, `Article` für Blog.
- `@astrojs/sitemap` + `robots.txt`.
- Semantische Struktur: genau ein `<h1>` pro Seite, logische h2/h3-Hierarchie,
  `<nav>`, `<main>`, `<footer>`, sprechende deutsche `alt`-Texte (das Original
  hat fast überall leere `alt` — hier bewusst verbessern, Freigabe der
  Formulierungen durch Iwo).
- Bilder: WebP/AVIF über `astro:assets`, `loading="lazy"` außer Hero,
  `width`/`height` gegen Layout-Shift.
- Ziel: Lighthouse 95+ in allen Kategorien.

## DSGVO
- Fonts selbst hosten, keine Framer-/Google-CDN-Referenzen im Build.
- Das Original lädt Google Analytics (G-ZK7F06197Z) und Framer-Tracking OHNE
  Consent — das übernehmen wir NICHT stillschweigend: offene Frage an Iwo
  (Consent-Banner + GA, oder GA weglassen, oder cookielose Alternative).
- Kontaktformular: Framer-Backend fällt weg → Endpoint als klar kommentierter
  Platzhalter, Datenschutz-Hinweis wie im Original.

## Arbeitsweise
- Erst Analyse vervollständigen (`docs/DESIGN-SYSTEM.md`), offene Fragen aus
  docs/PLAN.md klären, dann Freigabe, dann Code.
- In kleinen Schritten: eine Sektion fertig, gegen das Original geprüft
  (Screenshot-Vergleich Desktop 1440 / Tablet 1024 / Mobil 390 gegen
  `original/*.html` im lokalen Browser), dann die nächste.
- **Bei Unklarheiten nachfragen, statt zu raten.**
- Sauberes, semantisches, wartbares Markup. Keine toten Reste, keine
  Framer-Artefakte im Output.
- Jede bewusste Abweichung vom Original in `docs/DESIGN-SYSTEM.md`
  protokollieren — nichts still ändern.
