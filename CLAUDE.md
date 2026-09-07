# STOLZ Marketing – Website (Neuaufbau)

## Ausgangslage
Die Seite wird **komplett neu gebaut**. Das alte Design ist Geschichte —
neue Farben, neue Typografie, neue Abstände, neue Sprache. Der alte Stand
liegt weiterhin in den Branches `main` und `dev` und ist damit jederzeit
abrufbar; im Branch `redesign` fangen wir bei null an.

Das Repository bleibt bewusst dasselbe, weil Docker/Dokploy darauf schon
eingerichtet ist.

## Quelle der Wahrheit
Der Entwurf kommt aus **Claude Design** und liegt vollständig in `design/`:

- `design/README.md` — **das Handoff-Dokument.** Enthält alle Tokens
  (Farben, Typo-Skala, Abstände, Radien, Schatten), die Sektionsreihenfolge
  jeder Seite, sämtliche Interaktionen und Animationen mit exakten Werten,
  die Breakpoints und die offenen Punkte. Immer zuerst lesen.
- `design/STARTSEITE.dc.html` — Startseite, 14 Sektionen
- `design/Kunden gewinnen.dc.html` — Serviceseite Kundengewinnung
- `design/Mitarbeiter einstellen.dc.html` — Serviceseite Personal (nur Hero
  und Logo-Marquee, Rest fehlt noch)
- `design/Projekte.dc.html` — Referenzenseite, heller Header
- `design/karte-deutschland.html` — Deutschlandkarte, im Entwurf als iframe
- `design/logos/mono/` — die grau aufbereiteten Kundenlogos fürs Marquee
- `design/portrait-*.jpg`, `design/projekt-umzuege.png` — Bildmaterial

Diese Dateien werden **nicht verändert** und **nicht deployed**
(`design/` steht in der `.dockerignore`).

**Wichtig:** Die `.dc.html` sind Prototypen einer hauseigenen Runtime.
`support.js`, `image-slot.js`, `<x-dc>`, `<sc-for>`, `{{ platzhalter }}` und
`style-hover="…"` sind nur das Vehikel und werden **nicht übernommen**.
Relevant sind Layout, Maße, Farben, Typografie, Texte und Verhalten.
`style-hover` entspricht `:hover`, `{{ x }}` einem abgeleiteten Wert — im
Nachbau als CSS-Klasse oder Media Query lösen, nicht als Inline-Style aus JS.

Bei Widersprüchen zwischen Vorlage und eigener Einschätzung: **Vorlage
gewinnt.** Abweichungen nur nach Rückfrage, und dann dokumentiert in
`docs/ABWEICHUNGEN.md`.

## Typografie und Breakpoints
- **Inter** 400/500/700 für die gesamte UI, **Playfair Display italic**
  500/600 nur für einzelne hervorgehobene Wörter in Überschriften,
  System-Monospace für Eyebrows und Copyright.
  Beide über Google Fonts im Entwurf — **für Produktion selbst hosten**.
- Das Layout skaliert intrinsisch über `clamp()`, `min()`, `minmax()` und
  `flex-wrap`. Es gibt nur drei echte Breakpoints: **1040px** (Burger-Menü),
  **720px** (Buttongrößen), **390px** (Hero-Buttons untereinander).
- `prefers-reduced-motion` fehlt im Entwurf und wird beim Nachbau ergänzt.

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
1. **Tokens zuerst.** Alle Werte aus dem Token-Teil von `design/README.md`
   nach `src/styles/global.css` als `@theme`-Variablen übertragen, bevor
   eine einzige Sektion entsteht. Ergebnis in `docs/DESIGN-SYSTEM.md`
   festhalten. Fonts selbst hosten und einbinden.
2. **Grundgerüst**: BaseLayout, Header (statisch + sticky ab 500px),
   Burger-Overlay, Footer.
3. **Startseite Sektion für Sektion** in der Reihenfolge aus dem Handoff,
   jede einzeln gegen die Vorlage geprüft (Desktop, Tablet, Mobil), dann
   die nächste.
4. Danach Projekte, Kunden gewinnen, Mitarbeiter einstellen.
5. Wiederkehrende Elemente sofort als Komponente mit Props bauen.

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
