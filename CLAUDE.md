# STOLZ Marketing – Website (Neuaufbau)

## Ausgangslage
Die Seite wird **komplett neu gebaut**. Das alte Design ist Geschichte —
neue Farben, neue Typografie, neue Abstände, neue Sprache. Der alte Stand
liegt weiterhin in den Branches `main` und `dev` und ist damit jederzeit
abrufbar; im Branch `redesign` fangen wir bei null an.

Das Repository bleibt bewusst dasselbe, weil Docker/Dokploy darauf schon
eingerichtet ist.

## Quelle der Wahrheit
Der komplette Entwurf entsteht in **Claude Design** und liegt als HTML in
`design/`:

- `design/styleguide.html` — alle Tokens: Farben, Schriftgrößen, Abstände,
  Radien, Schatten, Komponenten-Zustände
- `design/startseite.html` — die fertig ausgearbeitete Startseite
- weitere Seiten nach Bedarf

Diese Dateien werden **nicht verändert** und **nicht deployed**. Sie sind die
Referenz, gegen die gebaut und geprüft wird.

Bei Widersprüchen zwischen Vorlage und eigener Einschätzung: **Vorlage
gewinnt.** Abweichungen nur nach Rückfrage, und dann dokumentiert in
`docs/ABWEICHUNGEN.md`.

## Stack
- **Astro** (aktuelle Major-Version), statisches Output (`output: 'static'`)
- **Tailwind CSS v4** über `@tailwindcss/vite`
- Design-Tokens als `@theme`-Variablen in `src/styles/global.css` —
  **keine hartcodierten Hex- oder px-Werte in Komponenten**
- Interaktivität als `<script>` im `.astro`-File (Vanilla JS), nur wo die
  Vorlage sie vorsieht. Kein React/Vue/Alpine.
- Bilder über `astro:assets` (`<Image />`)
- Keine zusätzlichen Libraries ohne Rückfrage

## Reihenfolge beim Nachbau
1. **Styleguide zuerst.** Aus `design/styleguide.html` alle Tokens nach
   `src/styles/global.css` übertragen, bevor eine einzige Sektion entsteht.
   Ergebnis in `docs/DESIGN-SYSTEM.md` festhalten.
2. **Layout und Grundgerüst** (BaseLayout, Header, Footer).
3. **Sektion für Sektion**, jede einzeln gegen die Vorlage geprüft
   (Screenshot-Vergleich Desktop / Tablet / Mobil), dann die nächste.
4. Wiederkehrende Elemente sofort als Komponente mit Props bauen.

## Genauigkeit
- Texte 1:1 aus der Vorlage, nichts umformulieren
- Farben, Schriftgrößen und Abstände exakt aus dem Styleguide — die Vorlage
  ist bereits normalisiert, es wird **nicht** nachträglich gerundet
- Hover-Zustände, Übergänge und Animationen wie in der Vorlage
- Responsive: Breakpoints aus dem Styleguide übernehmen

## Projektstruktur
```
design/                 # HTML-Export aus Claude Design (Referenz, nie deployen)
src/
  layouts/              # BaseLayout
  components/           # wiederverwendbare Bausteine
  components/sections/  # eine Datei pro Sektion
  pages/                # eine Datei pro Seite
  styles/global.css     # Tailwind + @theme-Tokens
  assets/               # Bilder (via astro:assets optimiert)
public/                 # Fonts, favicon, robots.txt
docs/                   # DESIGN-SYSTEM.md, ABWEICHUNGEN.md
deploy/nginx.conf       # Auslieferung im Container
Dockerfile              # Dokploy: Build Type „Dockerfile", Port 80
```

## Deployment
- Dokploy baut über das `Dockerfile` (Node-Build → nginx, Port 80)
- `main` = Produktion (stolz-marketing.de)
- `dev` = Staging (dev.stolz-marketing.de)
- `redesign` = Neuaufbau, bis er abgenommen ist
- **Nur auf die Branch pushen, die abgesprochen ist.** Nichts ungefragt live
  nehmen.

## Eckdaten
- Inhaber: Iwo Sawicki, Einzelunternehmen
- Adresse: Heidelbergerstraße 15D, 64385 Reichelsheim
- E-Mail: iwo@stolz-marketing.de
- Telefon: 0178 4444 156
- USt-ID: DE350093785
- Instagram: https://www.instagram.com/stolz.marketing/

## Arbeitsweise
- Bei Unklarheiten nachfragen, statt zu raten
- Keine Zahlen, Auszeichnungen, Bewertungen oder Kundenstimmen erfinden —
  nur verwenden, was Iwo geliefert hat
- Sauberes, semantisches, wartbares Markup ohne tote Reste
- Deutsche Kommentare im Code
