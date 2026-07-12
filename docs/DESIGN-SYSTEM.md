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
| Hero | Abstand Header→H1 | 100 (Desktop) / 50 (Tablet) / 40 (Phone) | `pt-25` / `md:pt-12` (48) / `pt-10` | 0 / −2 / 0 |
| Hero | H1 | Inter 500, 85/60/40px, −0.06em, lh 1, `text-wrap: balance` | `xl:text-85 md:text-6xl text-40 text-balance` | 0 |
| Hero | Zeile 2 („Messbar & Planbar.") | Inter 400, #6C6B6B | `font-normal text-gray` (#636363) | Farb-Merge dokumentiert |
| Hero | Subline | 18px 500, lh 1.4, −0.01em, max 600px, Gap 20 | identisch (`mt-5`) | 0 |
| Hero | CTA-Reihe | Gap 10px, mt 24 | `gap-2.5 mt-6` | 0 |
| Hero | CTA 1 | Blau, Padding 10×30, Radius 50, Blau-Glow, Text 15px weiß | Button `blue` + `shadow-blue-glow` | Schrift +1px → Button +1,5px höher |
| Hero | CTA 2 | transparent, 1px Rahmen #222 (::after), Text 15px dunkel | Button `light` (Rahmen direkt am Element) | Schrift +1px |
| Hero | Bild-Abstand | 26,4 / 31,7 / 69,7 | `xl:mt-6` (24) / `md:mt-7` (28) / `mt-17` (68) | −2,4 / −3,7 / −1,7 (kompensiert Buttonhöhe) |
| Hero | Bild-Breite | 95% (Desktop) / ~106% (Tablet/Phone), Aspect 1.54993 | identisch, `max-w-[1520px]` Desktop | 0 |
| Einblicke | Section-Padding | 80/40/100 (D) · 70/28/90 (T) · 56/18/72 (P) | `pt-20 px-10 pb-25` / `md: 72/28/88` / `56/18/72` | ≤2px |
| Einblicke | Label-Pill | Radius 100, #0084FF/8%, Pad 4/9/4/7, Gap 7, Icon 14 blau, Text 13/600 | identisch, Text 12px (`text-xs`) | Schrift −1px |
| Einblicke | H2 | 48/40/34, 700, −0.06em, 1.05, balance | `xl:text-5xl md:text-40 text-4xl` | Phone +2px (34→36) |
| Einblicke | Abstand Desc→Badges | 39 (D/T) / 28 (P) | `md:mt-10 mt-7` | +1 / 0 |
| Einblicke | Spaltenreihe | max 1240, Gap 24/16/12, Spalte 292/230/47% | identisch (`flex-1` bzw. `w-[47%]`) | 0 |
| Einblicke | Stagger | D+T: Spalten 2+3 (+70/+50), P: Spalten 2+4 (+70) | `pt-17`/`md:pt-12`/`xl:pt-17` je Spalte | −2 (70→68), −2 (50→48) |
| Einblicke | Badge | Radius 14, ::after-Rahmen #0084FF/35%, Shadow 0 6 16 slate/6%, Chip 34 rund #0084FF/10, Text 14/600 slate | identisch (Rahmen direkt) | 0 |
| Einblicke | Video-Frame | 9/16, Radius 20, Gradient 160° #0A0D12→#232A36, Play 58 weiß/14% | identisch | 0 |
| Painpoints | Box | max 1240, Radius 32, #E8F3FF, Pad 40/36/48 | identisch (`rounded-[32px]`, Token bg-blue-light) | 0 |
| Painpoints | H2 | „Deine" ID 500 Italic + „Heraus­forderungen" ID 800, 46px/1.05/−0.04em, max 300px | `text-5xl` (48px) | +2px (46→48) |
| Painpoints | Tab-Pill | weiß, Pad 10×15, Radius 100, 14/600 slate; aktiv: Slate-BG, weiß | identisch | 0 |
| Painpoints | Weiße Karte | Radius 24, Pad 28, Breite 475 (Desktop) | identisch | 0 |
| Painpoints | Chips | bg #F4F7FA, Radius 10, Pad 10/14/10/12, 14/600, Check-Icon blau | identisch | 0 |
| Painpoints | H3 | ID 800 34px/1.15/−0.03em (34→36 würde Umbruch ändern) | Custom-Token `--text-34` | 0 (bewusst kein Mapping) |
| Painpoints | Fließtext | 17/500, lh 1.55, slate/65 %, max 560 | `text-lg` (18px) | +1px |
| Painpoints | Karten-Fußnote | 14/500 slate/50 % | identisch | 0 |
| Painpoints | Tab-Inhalte 1–4 | nicht im Export (JS-nachgeladen) | Texte von Iwo (Frage D); linke Karte bleibt bei allen Tabs konstant | inhaltlich ergänzt |
| Probleme | Section-Padding | 100/40 (D/T) · 50/12 (P) | `md:py-25 md:px-10` / `py-12 px-3` | −2 (50→48) |
| Probleme | Container | 1200, Radius 30, Pad 20, Shadow-Stack, bg #F9FAFB | identisch, bg → `--color-bg-soft` #FAFAFA | Farb-Merge #F9FAFB→#FAFAFA |
| Probleme | Grid | 3 (D) / 2 (T) / 1 (P) Spalten, Gap 7 | identisch, Gap 8 | +1 |
| Probleme | Karte | weiß, Radius 30, Pad 20, Rahmen (::after) #E5EAF0 | identisch (Rahmen direkt) | 0 |
| Probleme | Icon-Quadrat | 36×36, Radius 12, rgba(255,149,0,.09), ohne Grafik | identisch (Token orange-soft) | 0 |
| Probleme | Karten-H3 | 20/500/−0.03em, Gap Icon→H3 7 | `text-xl font-medium mt-[7px]` | 0 |
| Probleme | Karten-Text | 15/500, lh 1.55, Opacity 0.6, Gap 50 | `text-base text-dark/60 mt-12` | +1px Schrift, −2 Gap |
| Probleme | Abschluss + CTA | 18/500 zentriert; CTA blau mit Blau-Glow, Gap 15 | identisch, `mt-4` | +1 |
| Label-Pills | Icon je Sektion | Einblicke: Play · übrige: Plus (2 weiße Balken) | Play-SVG per Slot, Plus als Default | 0 |
| Leistungen | Bento-Grid | Container wie Probleme; links 382×600, rechts 2× 771×295, Gaps 7/10 | `xl:grid-cols-[382px_1fr]`, `gap-2`/`gap-2.5` | +1 |
| Leistungen | Karten-H3 | 25/500/−0.03em/1.3 | `text-2xl` (24px) | −1px |
| Leistungen | Karten-Text | 15/500/1.5, Opacity 0.6 | `text-base text-dark/60` | +1px |
| Leistungen | Bilder | Karte 1: 232 unten mittig · Karte 2: 270×148,5 rechts · Karte 3: 270×221,7 rechts (Original beschnitten dargestellt) | identisch (object-cover), Platzhalter bis Original-Assets verfügbar | 0 |
| Leistungen | H2→Grid-Abstand | 59 | `mt-15` (60) | +1 |
| Prozess | Section-Padding | 58/0 | `py-14` (56) | −2 |
| Prozess | Step | 1000×365; Bild 431×295 Radius 28; Timeline-Spalte 138 | identisch | 0 |
| Prozess | Timeline | Dot 30 blau, Nummer 14 weiß; Linien 2px blau 20 % (erste/letzte mit Weiß-Verlauf), Segmente 68/247, Gaps 10 | identisch (`opacity-20`, `bg-linear-to-b`) | 0 |
| Prozess | H4→h3 | 28/500/1.2/−0.05em | `text-3xl` (30px), als h3 (H-Hierarchie) | +2px |
| Prozess | Step-Text | 16/500/1.5/−0.05em, #636363 | identisch (`text-gray`) | 0 |
| Prozess | Phone-Layout | Rail links (Dot 30), Inhalt ab x84; Bild 261 hoch | identisch (`ml-[34px]`) | 0 |
| Ergebnis | Aufbau | identisch zu Probleme (Container/Grid/Karten), Icon-Quadrate Blau 15 % | identisch (`bg-blue/15`) | 0 |
| global | 15px-Karten-Fließtexte | 15px | Custom-Token `--text-15` statt 16px-Mapping (16px erzeugte zusätzliche Zeilen → sichtbar höhere Karten) | 0 (bewusste Ausnahme) |
| Projekte | Section-Padding | 150/36/100 | `md:pt-[150px] md:px-9 md:pb-25` | 0 |
| Projekte | Karte | Header-Box Radius 18 (Pad 24/18), Bild-Box Radius 18 + 4px-Frame, Gap 4 | identisch | 0 |
| Projekte | Bildhöhen | 501,8 (D) / 611,9 (T) / 413,7 (P) | 494+8 Frame / 604+8 / 406+8 | ≤2 |
| Projekte | Karten-Abstand H2→Container | 70 | `mt-17` (68) | −2 |
| Projekte | CTA-Reihe | Gap 10, mt 50; Tel-CTA 0173 4388519 | `mt-12` (48); Tel einheitlich 0178 4444 156 | −2; Nummer gemäß Antwort A |
| Statistics | Statement | 2× p, 52/600/1em/−0.04em, balance; Phone 40 | `md:text-52 text-40 text-balance` | 0 |
| Statistics | Werte | 50px Inter 400 blau, lh 1.3; Text 20px | `text-5xl` (48) / `text-xl` | −2 |
| Statistics | Grid | 3 Spalten à 360, Gap 60; T: 2 Spalten; P: 1 | identisch | 0 |
| FooterCta | Box | Ränder 20 (P: 10), Radius oben 30, blau; Inhalt max 1200, Pad ~94/100/74 | `pt-24 px-25 pb-18` | +2/0/−2 |
| FooterCta | Muster | getiltes SVG (framerusercontent, 26,5px) — nicht abrufbar | dezentes CSS-Gitter 26,5px weiß/6 % als Näherung | Platzhalter |
| FooterCta | Button | weiß, Weiß-Glow, Text 15 dunkel | Button-Variante `white` | Schrift +1px |
| Footer | Dunkle Box | Radius unten 30, #0A0A0A, Pad 60/40; Inhalt max 1160 | identisch | 0 |
| Footer | Wortmarke | „Stolz Marketing" via SVG auf 1320 skaliert (eff. ~194,6px bei 1440) | `<p>` mit `calc((100vw−120px)·0.14743)` | 0 (gleicher Effekt) |
| Footer | Spalten | Links max 300; Navigation 192; Kontakt 368 | `md:grid-cols-[192px_368px]` | 0 |
| Footer | Navigation | tote Links Vorteile/Anwendung/Branchen/Preise/Ablauf | echte Anker Startseite/Leistungen/Prozess/Ergebnis/Projekte | Antwort Iwo (Frage C) |
| Footer | Export-Artefakt | Footer überlappt Statistics um 170px (main-Höhe im Export fehlerhaft) | ohne Überlappung gebaut | bewusste Korrektur |
| Kontakt | Hero | Container 1170; links 610 (H1 48, Intro 18, Trennlinie, Tel/Mail 22–24 mit blauen Icons); rechts Karte 500, bg #FAFAFA, Radius 10, Pad 30 | identisch | 0 |
| Kontakt | Formular | Felder bg #F5F5F5, Radius 10, Pad 12/16, Text 18; Submit blau, Pill, H 58; Hinweis 13px mit Link | identisch; Backend = Platzhalter (Frage G2), einfacher Honeypot | 0 |
| Kontakt | Formulartitel | 38px/600 | `--text-40` (40px) | +2 |
| Kontakt | Ablauf | bg #F2F2F2, Karten-Container wie Probleme; H2 30/700/balance max 800 | identisch; Steps 1/2/3 statt „1/1/1" (Original-Bug) | Nummern-Fix, s. Bericht |
| Kontakt | FAQ | H2 38/600 #133475; 2 Spalten (spaltenweise), Fragen 20/600 navy, Pad 30/0, Divider 2px blau/grau alternierend, Pfeil 8×12 | identisch; **Antworten fehlen im Export → Platzhalter, Texte von Iwo** | Frage-Region → Rhein-Main (Antwort B) |
| Impressum | Layout | max 1300: links H1 60/600 („." blau), rechts 810; H6→h2 40/500; Text 18/500 #767676 | identisch (h2 statt h6, SEO) | 0 |
| Impressum | Korrekturen | tel:-Link defekt; mailto → florian@rebland-marketing.de (Template-Rest); Nummer 0173 4388519 | tel:+491784444156, mailto:iwo@…, Nummer 0178 4444 156 | Antwort A + offensichtliche Bugs |
| Datenschutz | Inhalt | leere JS-Shell im Export | Platzhalter-Seite im Impressum-Layout, Text folgt von Iwo | Frage F |

---

## 7. Bilder (Platzhalter → Austausch ausstehend)

**Stand 12.07.2026: Alle 10 Inhaltsbilder wurden von Iwo geliefert und
ersetzen die Platzhalter** (Hero heißt jetzt `stolz-marketing-team.png` —
Team-Foto statt des im PLAN vermuteten Dashboard-Mockups). Das OG-Bild ist
ein 1200×630-Ausschnitt aus dem Team-Foto (Original-OG lag nicht vor).
Noch Platzhalter: Favicon, Apple-Touch-Icon, CTA-Hintergrund-Muster.

Ursprüngliche Situation: `framerusercontent.com` war aus der Build-Umgebung
nicht erreichbar (Egress-Policy 403, ebenso Live-Domain), daher exakt
dimensionierte Platzhalter via `scripts/make-placeholders.mjs`.

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
