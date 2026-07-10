# PLAN – STOLZ Marketing (Framer → Astro-Nachbau)

Analysebasis: Framer-Export vom 09.07.2026 (`original/index.html` 405 KB,
`kontakt.html` 326 KB, `impressum.html` 218 KB — alle mit vollem SSR-Inhalt;
`datenschutz.html` ist eine leere JS-Shell, siehe offene Frage F).

---

## 1. Seiten & Komponenten

| Datei | Verantwortlich für |
|---|---|
| `src/layouts/BaseLayout.astro` | `<head>`: Charset, Viewport, Title, Description, Canonical, OG/Twitter, Favicon (SVG), Font-Preload, JSON-LD LocalBusiness |
| `src/components/Header.astro` | Nav: Logo „STOLZ", 5 Anker-Links, Kontakt-Button (dunkel); Mobil: Hamburger + Overlay-Menü (Vanilla JS) |
| `src/components/Button.astro` | CTA-Button mit Varianten `dark` / `light` / `text` (im Original: „Dark", „Light", „Nur Text") |
| `src/components/SectionLabel.astro` | Label-Pill mit Icon (z. B. „Einblicke", „Probleme", „Warum wir?", „Prozess", „Resultate", „Kunden") |
| `src/components/SectionHeading.astro` | Label + H2 + optionale Beschreibung (Framer: „Component / Heading Content 2") |
| `src/components/sections/Hero.astro` | Sektion 1 |
| `src/components/sections/Einblicke.astro` | Sektion 2 (Video-Beispiele) |
| `src/components/sections/PainpointTabs.astro` | Sektion 3 (Tabs, Vanilla JS) |
| `src/components/sections/Probleme.astro` | Sektion 4 |
| `src/components/sections/Leistungen.astro` | Sektion 5 |
| `src/components/sections/Prozess.astro` | Sektion 6 |
| `src/components/sections/Ergebnis.astro` | Sektion 7 |
| `src/components/sections/Projekte.astro` | Sektion 8 |
| `src/components/sections/Statistics.astro` | Sektion 9 |
| `src/components/FooterCta.astro` | CTA-Block „Kostenlose Analyse anfragen" (auf allen Seiten vor dem Footer) |
| `src/components/Footer.astro` | Footer mit Logo, Claim, Status-Badge, Link-Spalten, Copyright |
| `src/pages/index.astro` | Startseite |
| `src/pages/kontakt.astro` | Kontakt: Intro + Kontaktdaten, Formular, Ablauf (3 Steps), FAQ-Akkordeon (8 Fragen) |
| `src/pages/impressum.astro` | Impressum (Texte 1:1 aus original/impressum.html) |
| `src/pages/datenschutz.astro` | Datenschutz — Text fehlt im Export (offene Frage F) |

---

## 2. Sektionen der Startseite (Inhalt exakt aus `original/index.html`)

### 2.1 Header/Nav
- Logo-Wortmarke „STOLZ" → `/`
- Links: Startseite `/#start`, Leistungen `/#leistungen`, Prozess `/#prozess`,
  Ergebnis `/#ergebnis`, Projekte `/#projekte`
- Kontakt-Button (Variante Dark) → `/kontakt`
- Zwei Framer-Varianten: „Desktop" und „Phone" (Hamburger mit Top/Bottom-Linie).
  Umschaltpunkt gemäß Breakpoints (Phone < 810).

### 2.2 Hero (`#start`)
- H1: „Mehr Anfragen für Ihr Unternehmen. Messbar & Planbar."
- Subline: „Wir bringen Handwerksbetrieben im Rhein-Neckar-Raum planbare
  Anfragen – ohne Marketingblabla. Nur Ergebnisse, die auf deiner Rechnung auftauchen."
- CTA 1 (dark): „Jetzt Potenzial checken lassen" → /kontakt
- CTA 2 (text): „Direkt anrufen – 0178 444 156" → `tel:+491784444156`
  (⚠ Schreibweise inkonsistent, offene Frage A)
- Hero-Bild: Dashboard-Mockup (`sGKta004kQytOPjOrm4SRWFkv0.png`, 1672×941)

### 2.3 Einblicke (Video-Beispiele)
- Label „Einblicke", H2 „So sieht gute Sichtbarkeit in der Praxis aus."
- Beschreibung: „Vier kurze Video-Beispiele zeigen später, wie Kampagnen,
  Inhalte und Ergebnisse für Handwerksbetriebe greifbar werden."
- 4 Spalten, je Badge + Hochformat-Medium (aktuell **Bilder**, keine `<video>`-Tags):
  1. „125.000+ Aufrufe im ersten Monat"
  2. „610.000 Aufrufe mit Ads & organischem Content"
  3. „Überzeugende Anzeigen für die Zielgruppe"
  4. „182% Profilwachstum in einem Monat"

### 2.4 Painpoint-Tabs („Deine Herausforderungen")
- H2 zweizeilig: „Deine" / „Heraus­forderungen" (mit Soft-Hyphen im Original)
- 5 Tabs: Keine Ergebnisse · Zu teuer · Wo anfangen? · Keine Ideen · Keine Zeit
- Inhalt Tab „Keine Zeit" (einziger im SSR-HTML, offene Frage D):
  - Chips: „Wir übernehmen" → Idee, Produktion, Veröffentlichung, Analyse
  - „Du kümmerst dich um deinen Betrieb. Wir kümmern uns um den Rest."
  - H3: „Du weißt, dass du Content brauchst – hast aber keine Zeit dafür?"
  - Text: „Dein Betrieb braucht deine volle Energie. Wir übernehmen den
    kompletten Prozess – von der Idee über Produktion und Postproduktion bis
    zu Veröffentlichung und Analyse. So wächst deine Sichtbarkeit, während du
    dich auf dein Handwerk konzentrierst."
- Interaktion: Tab-Klick wechselt Inhalt (Vanilla JS, gleiche Optik/Transition
  wie Framer-Variante).

### 2.5 Probleme
- Label „Probleme", H2 „Kennen Sie das?"
- Intro: „Wer online nicht sichtbar ist, verliert täglich Aufträge an
  Mitbewerber – die online besser auftreten, aber nicht zwangsläufig besser arbeiten."
- 6 Karten (H3 + Text, Wortlaut in original/index.html):
  1. Online kommt nichts rein · 2. Werbebudget verpufft · 3. Die Konkurrenz
  wirkt größer · 4. Falsche Anfragen · 5. Keine guten Bewerbungen ·
  6. Marketing als Blackbox
- Abschluss: „Klingt bekannt? Genau dafür sind wir da – und wir zeigen dir in
  30 Minuten, was bei deinem Betrieb konkret möglich ist."
- CTA (light): „Jetzt unverbindlich anfragen" → /kontakt

### 2.6 Leistungen (`#leistungen`)
- Label „Warum wir?", H2 „Wir bauen, was funktioniert. Den Rest lassen wir weg."
- 3 Karten mit Bild (H3 + Text in original/index.html):
  1. Kundengewinnung · 2. Mitarbeitergewinnung · 3. Mehr Sichtbarkeit auf Google & KI

### 2.7 Prozess (`#prozess`)
- Label „Prozess", H2 „Unser Prozess zum Erfolg" + Intro
- 3 Steps: 01 Workshop & Strategie · 02 Umsetzung · 03 Skalierung & Optimierung

### 2.8 Ergebnis (`#ergebnis`)
- Label „Resultate", H2 „Das Ergebnis"
- 6 Karten: Qualifizierte Anfragen · Kalkulierbare Kosten pro Anfrage ·
  Bewerbungen, die passen · Monatlicher Klartext-Report · Werbebudget mit
  Wirkung · Planbares Wachstum

### 2.9 Projekte (`#projekte`)
- Label „Kunden", H2 „Erfolgreiche Projekte"
- 3 Projekt-Karten (Bild + Titel + Text), **href ist leer** (offene Frage E):
  1. S-Tech Fahrzeugbau — „Mehr passende Fachkräfte durch gezielte Kampagnen für technische Berufe."
  2. SAAN Wasserstrahl — „Mehr qualifizierte Mitarbeiter-Anfragen für Wasserstrahlschneidarbeiten."
  3. raum.Konzept — „Mehr Projektanfragen und Bewerbungen durch eine klare Online-Positionierung."
- CTAs: „Jetzt unverbindlich anfragen" → /kontakt · „Direkt anrufen –
  0173 4388519" → `tel:+491734388519` (⚠ andere Nummer als Hero, offene Frage A)

### 2.10 Statistics
- Statement: „Dein Handwerk spricht für sich." / „Wir sorgen dafür, dass die
  richtigen Leute das wissen."
- 3 Werte: Messbar · Planbar · Transparent (je mit Beschreibungssatz)

### 2.11 FooterCta + Footer
- CTA-Block: H2 „Kostenlose Analyse anfragen", Text „Unverbindlich,
  verständlich und mit konkreten Empfehlungen für Ihre Website, Google-Präsenz
  und Werbekampagnen.", Button „Website & Sichtbarkeit prüfen lassen" → /kontakt,
  Background-Pattern, riesige „STOLZ"-Wortmarke (~216px, skaliert)
- Footer: Logo, „STOLZ Marketing – Für Handwerksbetriebe im Rhein-Main-Gebiet"
  (⚠ Widerspruch zum Hero „Rhein-Neckar-Raum", offene Frage B),
  Status-Badge „Alle Systeme live" (grüner Punkt #3FD400),
  Spalte Navigation: Vorteile, Anwendung, Branchen, Preise (→ index.html OHNE
  Anker, offene Frage C), Ablauf → /#prozess,
  Spalte Kontakt: iwo@stolz-marketing.de, 0178 4444 156,
  Spalte Stolz Marketing: Impressum, Datenschutz. Copyright „©Stolz Marketing".

---

## 3. Kontakt-Seite (`original/kontakt.html`)

1. **Intro:** H2 „Kostenlose Potenzial-Analyse anfragen" + Text; Kontaktlinks
   `+49 178 4444 156` (tel) und `iwo@stolz-marketing.de` (mailto)
2. **Formular** „Ihre Analyse-Anfrage" (dunkle Karte, #0F172A-Bereich):
   - Felder: Name* (text) · E-Mail* (email) · Telefonnummer* (tel) ·
     „Ihre Webseite (optional)" (text) · „Nachricht (optional)" (textarea)
   - Submit-Button: „Analyse anfragen"; Hinweistext mit Link „Datenschutzerklärung"
   - Framer-Honeypot-Felder (website/company/…) NICHT nachbauen; eigener
     einfacher Honeypot ok
   - Backend: Framer-Forms fällt weg → Platzhalter-Endpoint, klar kommentiert
     (offene Frage G2)
3. **Ablauf:** „Von der ersten Einschätzung bis zur Umsetzung…", 3 Steps:
   Website einreichen · Analyse erhalten · Nächste Schritte klären
4. **FAQ** „FAQ zur Potenzial-Analyse", 8 Akkordeon-Items (Antworten stehen im
   SSR-HTML, aufgeklappt nur Item 1):
   Ist die Analyse wirklich kostenlos? · Für wen ist STOLZ Marketing geeignet? ·
   Muss ich bereits Werbung schalten? · Arbeiten Sie nur im Rhein-Neckar-Raum? ·
   Was brauche ich für den Start? · Wie schnell bekomme ich eine Rückmeldung? ·
   Was passiert nach der Anfrage? · Bin ich danach zu einer Zusammenarbeit verpflichtet?
5. FooterCta + Footer (identisch zur Startseite)

---

## 4. Design-Tokens (extrahiert; finale Ablage in docs/DESIGN-SYSTEM.md)

### Farben (Original → Token-Vorschlag)

| Token-Vorschlag | Original-Werte | Verwendung |
|---|---|---|
| `--color-white` | #FFFFFF | Flächen, Text auf Dunkel |
| `--color-dark` | #0A0A0A (+ #0F0F0F, #141414 zusammenfassen) | Dunkle Sektionen, Buttons, Text |
| `--color-slate` | #0F172A | Formular-/Kontaktbereich |
| `--color-blue` | #0571FF | Primär-Blau (Framer-Token) |
| `--color-blue-bright` | #0099FF (+ #0084FF zusammenfassen) | Akzente, Glow, Links |
| `--color-blue-glow` | rgba(4,69,255,.65) | Schein hinter Elementen |
| `--color-lime` | #CCFC7E (+ #C2FA69 zusammenfassen) | Akzent-Grün (u. a. Inset-Glow der Chips) |
| `--color-green-status` | #3FD400 | Status-Punkt „Alle Systeme live" |
| `--color-gray` | #636363 (+ #6C6B6B) | Sekundärtext |
| `--color-gray-slate` | #5A6272 | Sekundärtext auf hell |
| `--color-bg-soft` | #FAFAFA | Heller Sektions-Hintergrund |
| `--color-bg-green` | #F8FAF5 / #EDFFE3 | Grünstichige Flächen |
| `--color-bg-blue` | #F4F7FA / #E5EAF0 | Blaustichige Flächen |
| `--color-border` | #DDE0E3 / #E5EAF0 | Rahmen |
| (prüfen) | #FF4400 / #FF5100, #133475, rgba(255,149,0,.09) | Framer-Tokens, Verwendung im Build verifizieren |

### Typografie
- Familien: **Inter** (Body; 400/500/600/700, Italic 400/500/700),
  **Inter Display** (Headlines; 800, Italic 500), **Geist** (500/600/700),
  **Plus Jakarta Sans** (600, punktuell). Selbst hosten.
- Größen (Original px → Tailwind): 12→`text-xs` · 13→`text-xs` (dok.) ·
  14→`text-sm` · 15→`text-base/16` (dok.) · 16→`text-base` · 17/18→`text-lg` ·
  20→`text-xl` · 22/23/25→`text-2xl/24` (dok.) · 28/30→`text-3xl/30` ·
  34→`text-4xl/36` · 38/40→custom `--text-40` · 44/46/48/50→`text-5xl/48` ·
  52→custom oder 48 (Sichtprüfung) · 60→`text-6xl` · 85→custom `--text-85`
  (Hero-Display) · ~216px Footer-Wortmarke→fluid custom (`clamp`/vw).
- Letter-Spacing: -0.01em bis -0.06em je Stufe (aus Original je Element übernehmen).
- Line-Heights: 1 / 1.05 / 1.1 / 1.3 / 1.4 / 1.5.

### Radius, Schatten, Layout
- Radius: 10 · 14 · 20 · 25→24 (dok.) · 28 · 30 (Karten) · 100/9999 (Pills) · 50 %.
- Schatten: mehrstufige weiche Framer-Shadows (Karten), Blau-Glow
  `0 0 39px -10px rgba(4,69,255,.65)`, Lime-Inset `inset 0 0 13px -8px #CCFC7E`,
  Karten-Shadow `0 20px 40px rgba(15,23,42,.08)`. Als Shadow-Tokens anlegen.
- Container: `max-width` 1200px (Standard), 1240/1280 (einzeln), 1520px (breite
  Medienzeile); Section-Paddings typisch 100/80/70/60/58/35px → auf 4px-Raster.
- Breakpoints: Phone < 810 · Tablet 810–1199 · Desktop ≥ 1200 → als
  `--breakpoint-md: 810px`, `--breakpoint-xl: 1200px` (exakt, nicht 768/1280).

### Animationen/Interaktionen
- **Keine Scroll-Appear-Animationen** (Export: `data-framer-appear-animation="reduce"`).
- Hover: Buttons/Links/Karten — Werte beim Build aus den Framer-Varianten
  (`framer-v-*`) bzw. am lokalen Original im Browser ablesen und dokumentieren.
- JS-Bausteine: Hamburger-Menü · Painpoint-Tabs · FAQ-Akkordeon ·
  Formular-Submit (Platzhalter). Alles Vanilla-`<script>` im jeweiligen `.astro`.

---

## 5. Assets (von framerusercontent.com herunterladen, deutsch benennen)

- Favicon SVG: `2C8IrIx7QAKpXrItlw3ji4Ms2yA.svg` · Apple-Touch: `B93zwhmOBw8e45vkC6CAatwlJ7c.png`
- OG-Image: `7sUkiGMPAINKhFQUVwpFkQvCCwk.png`
- Hero: `sGKta004kQytOPjOrm4SRWFkv0.png` (1672×941)
- Einblicke (4 Hochformat): `aYgMfimlHcPCGWKxNr32g9oGyvY.png`, `ZJapR4hJ1ypWXF7uRVXdHLOkR8.png`,
  `Za6hHwGHvKvFYT0XRSZ476WUsA.png` (+ viertes beim Build aus HTML ziehen)
- Leistungen/Projekte: `MSEgnmYfk3YCG5Q92etBwkI6tM.png`, `DcpfTXNhMMqeiUYKPZKBW342AUA.png`,
  `GCl9FUkRRgOwAZGbcXzc3CG4Gw.png`, `nNyHDv8BNGHKAVZYuRQnU.png`,
  `Q5r7fpAq13uQIpsgMW4HOugIBg.jpg`, `PKIazMQyiejlgMtrHhyFbsAbGQ.png`
- Fonts: WOFF2-URLs stehen in den `@font-face`-Blöcken der HTML-Köpfe
  (framerusercontent.com + fonts.gstatic.com) → herunterladen, subsetten nicht
  nötig, in `public/fonts/` (nur die tatsächlich genutzten Gewichte).
- Vollständige Liste beim Build per Skript aus `original/*.html` extrahieren
  (src/srcset/`@font-face`), nichts manuell abtippen.

---

## 6. Baureihenfolge

1. **Setup** – Astro + `@tailwindcss/vite`, `@astrojs/sitemap`, Ordnerstruktur,
   `original/` vom Build ausschließen, Tokens als `@theme` in global.css
2. **Assets** – Download-Skript für Bilder/Fonts aus original/*.html, deutsche
   Dateinamen, `public/fonts/` + `src/assets/`
3. **docs/DESIGN-SYSTEM.md** – Tokens finalisieren (inkl. Hover-Werte aus dem
   Original im Browser ablesen), Normalisierungen protokollieren
4. **BaseLayout** – Head komplett, Fonts + Preload, JSON-LD, Meta aus Original
5. **Header** (Desktop + Mobil) → Screenshot-Abgleich
6. **Hero** → Abgleich · 7. **Einblicke** · 8. **PainpointTabs** (sobald Frage D
   geklärt) · 9. **Probleme** · 10. **Leistungen** · 11. **Prozess** ·
   12. **Ergebnis** · 13. **Projekte** · 14. **Statistics** ·
   15. **FooterCta + Footer**
16. **kontakt.astro** (Formular-Platzhalter, FAQ-Akkordeon)
17. **impressum.astro** · 18. **datenschutz.astro** (sobald Text da, Frage F)
19. **SEO-Feinschliff** – Sitemap, robots.txt, OG, Alt-Texte, Lighthouse-Run
20. **End-Abnahme** – Side-by-Side-Screenshots aller Seiten in 1440/1024/390

Jede Sektion gilt erst als fertig nach Screenshot-Vergleich gegen
`original/*.html` (lokal im Browser geöffnet) in Desktop + Mobil.

---

## 7. Offene Fragen an Iwo (vor dem Build klären)

**A) Telefonnummer(n):** Im Original stehen drei Varianten:
`tel:+491784444156` mit Anzeige „0178 444 156" (Hero), „0178 4444 156"
(Footer/Kontakt), und 0173 4388519 (Projekte-Sektion + Impressum).
→ Welche Nummer(n) sind korrekt, und wo soll welche stehen?

**B) Region:** Hero sagt „Rhein-Neckar-Raum", Footer „Für Handwerksbetriebe im
Rhein-Main-Gebiet". → 1:1 übernehmen oder vereinheitlichen? Wenn ja, welche?

**C) Footer-Navigation:** „Vorteile", „Anwendung", „Branchen", „Preise"
verlinken auf die Startseite OHNE Anker (tote Links, vermutlich
Template-Reste); die Sektions-Anker heißen im Original #start/#leistungen/
#prozess/#ergebnis/#projekte. → Footer-Links auf die echten Sektionen umbiegen
(Empfehlung) oder exakt wie im Original lassen?

**D) Painpoint-Tabs:** Nur der Tab „Keine Zeit" ist im Export enthalten — die
Inhalte von „Keine Ergebnisse", „Zu teuer", „Wo anfangen?", „Keine Ideen"
werden bei Framer erst per JS geladen. → Bitte die 4 fehlenden Tab-Texte
liefern (Framer-Editor: Headline + Fließtext + ggf. Chips pro Tab), oder wir
ziehen sie live von der Seite, sobald Netzwerkzugriff auf die Domain besteht.

**E) Projekt-Karten:** Die 3 Karten haben leere Links (`href=""`).
→ Vorerst ohne Link bauen und später auf Projekt-Unterseiten
(`/projekte/s-tech`, …) verlinken?

**F) Datenschutz-Seite:** `datenschutz.html` ist im Export leer (reine
JS-Shell). → Bitte Datenschutztext liefern (aus Framer kopieren) oder live
ziehen, sobald Netzwerkzugriff besteht.

**G) Tracking/DSGVO:**
1. Das Original lädt Google Analytics (G-ZK7F06197Z) + Framer-Analytics ohne
   Consent-Banner. → GA übernehmen mit Consent-Banner, GA ersatzlos streichen,
   oder cookielose Alternative (z. B. selbst gehostetes, bannerfreies Tool)?
2. Formular-Backend: Framer-Forms fällt weg. → Welcher Versandweg später
   (eigener Endpoint, Formspree, E-Mail-Service)? Bis dahin Platzhalter.

**H) Scroll-Animationen:** Der Export deaktiviert Appear-Animationen
(„reduce"). → Bestätigen, dass die Live-Seite beim Scrollen tatsächlich keine
Einblend-Animationen hat (kurz auf dem Handy prüfen). Falls doch: welche
Sektionen?

**I) Alt-Texte:** Fast alle Bilder haben im Original leere alt-Attribute.
→ Wir schreiben deutsche, beschreibende Alt-Texte (SEO). Freigabe der
Formulierungen im Zuge des jeweiligen Sektions-Reviews, ok?

---

*Warte auf Antworten zu A–I und Freigabe, dann startet der Build mit Schritt 1.*
