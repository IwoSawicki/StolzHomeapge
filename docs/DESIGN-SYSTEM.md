# DESIGN-SYSTEM – STOLZ Marketing (Framer → Astro/Tailwind v4)

Quelle aller Werte: `original/*.html` (Framer-Export vom 09.07.2026).
Tokens liegen als `@theme`-Variablen in `src/styles/global.css`.
Dieses Dokument protokolliert **jede** bewusste Abweichung/Normalisierung.

---

## 1. Breakpoints (exakt wie Framer, KEINE Normalisierung)

| Token | Wert | Framer-Äquivalent |
|---|---|---|
| `--breakpoint-md` | 810px | Tablet ab 810px |
| `--breakpoint-xl` | 1200px | Desktop ab 1200px |

Phone < 810 · Tablet 810–1199 · Desktop ≥ 1200. Tailwind-Defaults (768/1280)
werden bewusst NICHT verwendet.

---

## 2. Farben

| Token | Wert | Zusammengefasste Original-Werte | Verwendung |
|---|---|---|---|
| `--color-white` | #FFFFFF | – | Flächen, Text auf Dunkel |
| `--color-dark` | #0A0A0A | **#0A0A0A + #0F0F0F + #141414** | Dunkle Sektionen, Buttons, Text |
| `--color-slate` | #0F172A | – | Formular-/Kontaktbereich, Badge-Text |
| `--color-blue` | #0571FF | – | Primär-Blau (Framer-Token) |
| `--color-blue-bright` | #0099FF | **#0099FF + #0084FF** | Akzente, Icon-Chips (10 %-Flächen), Links |
| `--color-blue-soft` | #6F8EFF | – | Akzent hell (Framer-Token) |
| `--color-lime` | #CCFC7E | **#CCFC7E + #C2FA69** | Akzent-Grün, Lime-Inset-Glow |
| `--color-green-status` | #3FD400 | – | Status-Punkt „Alle Systeme live" |
| `--color-green-dark` | #1F3630 | – | Framer-Token (dunkles Grün) |
| `--color-cream` | #FDFCEE | – | Framer-Token (Cremeton) |
| `--color-gray` | #636363 | **#636363 + #6C6B6B** | Sekundärtext |
| `--color-gray-slate` | #5A6272 | – | Sekundärtext auf hell |
| `--color-bg-soft` | #FAFAFA | – | Heller Sektions-Hintergrund |
| `--color-bg-green` | #F8FAF5 | – | Grünstichige Fläche |
| `--color-bg-green-bright` | #EDFFE3 | – | Grünstichige Fläche (kräftiger) |
| `--color-bg-blue` | #F4F7FA | – | Blaustichige Fläche |
| `--color-border` | #E5EAF0 | – | Rahmen (häufigster Border-Ton) |
| `--color-border-gray` | #DDE0E3 | – | Rahmen (grauer Ton) |

Transparenzwerte wie `rgba(5,113,255,0.15)`, `#0084FF1A` (→ `--color-blue-bright`
mit `/10`…`/15`), `rgba(255,149,0,0.09)` (Orange-Hauch, Painpoint-Chips) und
`rgba(255,255,255,0.15)` werden als Tailwind-Opacity-Modifier auf den Tokens
abgebildet; Sonderfälle direkt am Element mit Kommentar.

---

## 3. Typografie

### Familien (alle selbst gehostet, `public/fonts/`, Latin-Subset)

| Familie | Schnitte | Quelle der WOFF2 |
|---|---|---|
| Inter | 400/500/600/700 + Italic 400/500/700 | npm `@fontsource/inter` (identische Google-Fonts-Dateien) |
| Inter Display | 800, 500 Italic | npm `inter-ui` (offizielles rsms-Paket) |
| Geist | 500/600/700 | npm `@fontsource/geist-sans` |
| Plus Jakarta Sans | 600 | npm `@fontsource/plus-jakarta-sans` |

**Grund:** `framerusercontent.com` und `fonts.gstatic.com` sind aus der
Build-Umgebung nicht erreichbar (Egress-Policy 403). Die npm-Pakete enthalten
dieselben Schriftdateien der jeweiligen Foundries. Original lädt zusätzlich
etliche Unicode-Range-Subsets (Cyrillic, Greek, Vietnamese) — für die rein
deutsche Seite genügt Latin (bewusste Entscheidung, kleinerer Payload).

### Größen-Mapping (Original-px → Tailwind)

| Original | Tailwind | Abweichung |
|---|---|---|
| 12 | `text-xs` (12px) | 0 |
| 13 | `text-xs` (12px) | **−1px** |
| 14 | `text-sm` (14px) | 0 |
| 15 | `text-base` (16px) | **+1px** |
| 16 | `text-base` (16px) | 0 |
| 17 | `text-lg` (18px) | **+1px** |
| 18 | `text-lg` (18px) | 0 |
| 20 | `text-xl` (20px) | 0 |
| 22 | `text-2xl` (24px) | **+2px** |
| 23 | `text-2xl` (24px) | **+1px** |
| 25 | `text-2xl` (24px) | **−1px** |
| 28 | `text-3xl` (30px) | **+2px** |
| 30 | `text-3xl` (30px) | 0 |
| 34 | `text-4xl` (36px) | **+2px** |
| 38 | `--text-40` (40px) | **+2px** |
| 40 | `--text-40` (40px) | 0 (Custom-Token) |
| 46 | `text-5xl` (48px) | **+2px** |
| 48 | `text-5xl` (48px) | 0 |
| 50 | `text-5xl` (48px) | **−2px** |
| 52 | `--text-52` (52px) | 0 (Custom-Token, 48 wäre sichtbar kleiner) |
| 60 | `text-6xl` (60px) | 0 |
| 85 | `--text-85` (85px) | 0 (Custom-Token, Hero-Display) |
| ~215.8 (Footer-Wortmarke) | fluid `clamp()`/vw am Element | fluid wie Original (skaliert mit Viewport) |

Letter-Spacing (−0.01em … −0.06em) und Line-Heights (1 / 1.05 / 1.1 / 1.15 /
1.2 / 1.3 / 1.4 / 1.45 / 1.5 / 1.55) werden **exakt** je Element übernommen
(Tailwind arbitrary values bzw. Token-Line-Height der Custom-Größen).

---

## 4. Radius

| Original | Token | Abweichung |
|---|---|---|
| 10px | `--radius-10` | 0 |
| 14px | `--radius-14` | 0 |
| 20px | `--radius-20` | 0 |
| 25px | `--radius-24` (24px) | **−1px** (Tailwind-Rundung) |
| 28px | `--radius-28` | 0 |
| 30px | `--radius-30` | 0 |
| 100px / 9999px | `rounded-full` | identische Wirkung (Pill) |
| 50% | `rounded-full` | 0 (Kreise) |

---

## 5. Schatten (exakt übernommen)

| Token | Wert |
|---|---|
| `--shadow-card` | `0 20px 40px rgba(15,23,42,.08)` |
| `--shadow-blue-glow` | `0 0 39px -10px rgba(4,69,255,.65)` |
| `--shadow-white-glow` | `0 0 39px -10px rgba(255,255,255,.65)` |
| `--shadow-lime-inset` | `inset 0 0 13px -8px #CCFC7E` |
| `--shadow-stack` | 8-stufiger weicher Framer-Karten-Schatten (Werte gerundet auf 2 Nachkommastellen) |
| `--shadow-stack-strong` | 8-stufiger stärkerer Framer-Schatten (dito) |

---

## 6. Abstände & Container

- Abstände/Größen werden auf das 4px-Raster der Tailwind-Spacing-Skala
  gerundet (±4px max.), z. B. 15→16, 39→40, 58→56/60, 70→72.
  Jede konkrete Rundung wird beim Bau der jeweiligen Sektion hier ergänzt.
- Container: Standard `max-width: 1200px`; Einzelfälle 1240/1280;
  breite Medienzeile 1520px.

### Protokoll der Abstands-Normalisierungen (laufend ergänzt)

| Sektion | Element | Original (gemessen) | Nachbau | Abweichung |
|---|---|---|---|---|
| Header | Leisten-Padding Desktop | 10px 40px | `py-2.5 xl:px-10` | 0 |
| Header | Inhaltsbreite Desktop | 1200px zentriert | `max-w-[1280px]` inkl. `px-10` | 0 |
| Header | Höhe Phone-Leiste | 64px | `h-16` | 0 |
| Header | Padding Phone | 0 12px 0 20px | `pl-5 pr-3` | 0 |
| Header | Nav-Pill | Padding 6px, Radius 10, blur(5px) | `p-1.5 rounded-10 backdrop-blur-[5px]` | 0 |
| Header | Nav-Link | 0 12px, Höhe 30, Radius 11 | `px-3 h-[30px] rounded-[11px]` | 0 |
| Header | Nav-Link-Schrift | Inter 500 15px/-0.02em/1.5 | `text-base font-medium tracking-[-0.02em]` | +1px (15→16) |
| Header | Kontakt-Button | Padding 10px 30px, Radius 50, Blau #0571FF, Text #F5FFFD 15px | `py-2.5 px-[30px] rounded-full bg-blue text-white-soft` | Schrift +1px |
| Header | Hamburger | 44×44, Radius 10, #0A0A0A, Linien 20×2 weiß | identisch | 0 |
| Header | Sticky | top −1px, z-index 10 | `sticky -top-px z-10` | 0 |
| Header | Logo | Inter Display 800 30px/−0.05em + Sparkle-SVG (33×22, absolut rechts −15/unten −10) | identisch (SVG inline übernommen) | 0 |

---

## 7. Bilder (Platzhalter → Austausch ausstehend)

`framerusercontent.com` ist aus der Build-Umgebung nicht erreichbar
(Egress-Policy 403, ebenso Live-Domain). Alle Bilder liegen daher als
**exakt dimensionierte Platzhalter** unter `src/assets/` (generiert via
`scripts/make-placeholders.mjs`). Beim Austausch die Originaldatei einfach
unter gleichem Namen ablegen — kein Code-Change nötig.

| Zieldatei (src/assets/) | Maße | Original-URL (framerusercontent.com/images/…) | Verwendung |
|---|---|---|---|
| `stolz-marketing-dashboard-auswertung.png` | 1672×941 | `sGKta004kQytOPjOrm4SRWFkv0.png` | Hero |
| `leistung-kundengewinnung.png` | 645×931 | `MSEgnmYfk3YCG5Q92etBwkI6tM.png` | Leistungen Karte 1 |
| `leistung-mitarbeitergewinnung.png` | 1228×712 | `DcpfTXNhMMqeiUYKPZKBW342AUA.png` | Leistungen Karte 2 |
| `leistung-sichtbarkeit-google-ki.png` | 1448×1086 | `GCl9FUkRRgOwAZGbcXzc3CG4Gw.png` | Leistungen Karte 3 |
| `prozess-workshop-strategie.png` | 538×740 | `nNyHDv8BNGHKAVZYuRQnU.png` | Prozess Step 01 |
| `prozess-umsetzung.jpg` | 2268×4032 | `Q5r7fpAq13uQIpsgMW4HOugIBg.jpg` | Prozess Step 02 |
| `prozess-skalierung-optimierung.png` | 2342×1561 | `PKIazMQyiejlgMtrHhyFbsAbGQ.png` | Prozess Step 03 |
| `projekt-s-tech-fahrzeugbau.png` | 952×1690 | `aYgMfimlHcPCGWKxNr32g9oGyvY.png` | Projekte Karte 1 |
| `projekt-saan-wasserstrahl.png` | 1024×1826 | `ZJapR4hJ1ypWXF7uRVXdHLOkR8.png` | Projekte Karte 2 |
| `projekt-raum-konzept.png` | 1020×1812 | `Za6hHwGHvKvFYT0XRSZ476WUsA.png` | Projekte Karte 3 |
| `og-image-stolz-marketing.png` | 1200×630 | `7sUkiGMPAINKhFQUVwpFkQvCCwk.png` | OG-Image (public/) |
| `public/favicon.svg` | – | `2C8IrIx7QAKpXrItlw3ji4Ms2yA.svg` | Favicon (Platzhalter „S") |
| (offen) | 96×96 | `wGAHOWhVswEtWkOKTJN6s2CW0.svg` | Background-Pattern FooterCta |
| (offen) | – | `B93zwhmOBw8e45vkC6CAatwlJ7c.png` | Apple-Touch-Icon |

Die „Einblicke"-Sektion hat im Original **keine Bilder/Videos** — nur leere
Video-Frames mit Play-Icon (Videos „folgen später" laut Text). Wird 1:1 so
nachgebaut.

---

## 8. Sonstige bewusste Abweichungen vom Original

| # | Abweichung | Begründung / Freigabe |
|---|---|---|
| 1 | Telefonnummer überall `0178 4444 156` / `tel:+491784444156` | Antwort Iwo (Frage A), Original hatte 3 Schreibweisen |
| 2 | Region einheitlich „Rhein-Main-Gebiet" | Antwort Iwo (Frage B), Original: Hero „Rhein-Neckar-Raum" vs. Footer „Rhein-Main-Gebiet" |
| 3 | Footer-Links auf echte Anker (#start/#leistungen/#prozess/#ergebnis/#projekte) statt toter Links „Vorteile/Anwendung/Branchen/Preise" | Antwort Iwo (Frage C) |
| 4 | Projekt-Karten ohne Links | Antwort Iwo (Frage E), Original `href=""` |
| 5 | Beschreibende deutsche `alt`-Texte statt leerer `alt` | Antwort Iwo (Frage I), SEO |
| 6 | Keine Framer-Honeypot-Felder; einfacher eigener Honeypot | CLAUDE.md |
| 7 | Formular ohne Backend (klar kommentierter Platzhalter) | Antwort Iwo (Frage G2) |
| 8 | Google Analytics G-ZK7F06197Z wie Original eingebaut | Antwort Iwo (Frage G1); cookielose Alternative später |
| 9 | Keine Scroll-Appear-Animationen | Export auf „reduce", Antwort Iwo (Frage H) |
| 10 | ein `<h1>` pro Seite, semantisches HTML, keine DOM-Duplikate pro Breakpoint | CLAUDE.md (SEO) |
| 11 | Hover-States sind dezente Näherungen (Framer-Hover-Varianten sind JS-generiert, nicht im Export enthalten; Live-Seite aus Umgebung nicht erreichbar) | technisch bedingt; bei Zugriff aufs Original nachschärfen |
| 12 | Geöffnetes Mobilmenü ist eine Näherung (weißes Overlay, Linkliste, Kontakt-Button, Hamburger→X): Framer lädt das Menü erst clientseitig, nicht im Export | technisch bedingt |
