# STOLZ Marketing – Website

## Stand
Der Neuaufbau ist **fertig und seit dem 09.09.2026 live** auf
stolz-marketing.de. Alles, was hier steht, beschreibt eine laufende
Seite — nicht mehr ein Projekt im Bau.

Der bisherige Auftritt liegt vollständig im Branch `alter-auftritt` und
wird nicht deployed. `main` und `dev` tragen beide den neuen Stand.

Diese Seiten gibt es:

| Adresse | |
|---|---|
| `/` | Startseite |
| `/kunden-gewinnen` | Leistungsseite Kundengewinnung |
| `/mitarbeiter-gewinnen` | Leistungsseite Personal |
| `/projekte` | Referenzen und Kundenwand |
| `/projekte/dmk-bau`, `/projekte/hepa-baut` | zwei Projekt-Unterseiten |
| `/alle-projekte` | **intern**: `noindex`, nicht in der Sitemap, nirgends verlinkt |
| `/kontakt` | Formular über Web3Forms |
| `/impressum`, `/datenschutz`, `/404` | |

Verlinkt, aber noch **nicht gebaut** (im Footer ausgegraut, `nochNicht: true`
in `src/data/navigation.ts`): `/ueber-uns`, die Branchenseiten unter
`/branchen/*`, die drei Tools (Vakanzkostenrechner, Website-Check,
Sichtbarkeits-Check) und die sechs geplanten Ortsseiten (Webdesign
Bergstraße/Bensheim/Heppenheim, SEO Bergstraße, Online-Marketing Bensheim,
Website-Betreuung Bensheim). Die Ortsseiten sind aus dem
Search-Console-Export abgeleitet; die Begründung steht als Kommentar in
`navigation.ts`.

## Messung
- **Umami** (selbst gehostet, cookielos) läuft ohne Einwilligung direkt im
  BaseLayout.
- **Google Analytics** und **Microsoft Clarity** liegen hinter dem
  Cookie-Banner (`src/components/CookieBanner.astro`). Vor der Zustimmung
  wird kein Skript geladen und kein Cookie gesetzt. Beide laden außerdem
  nur auf der Produktionsdomain, nicht auf Staging oder lokal.
- Wer hier einen Dienst ergänzt, ergänzt **gleichzeitig** den passenden
  Abschnitt in `src/data/rechtstexte/datenschutz.html`.

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
  Beide sind selbst gehostet (`public/fonts/`, eingebunden über
  `@font-face` in `global.css`) — kein Google-Fonts-Request.
- Das Layout skaliert intrinsisch über `clamp()`, `min()`, `minmax()` und
  `flex-wrap`. Es gibt nur drei echte Breakpoints: **1040px** (Burger-Menü),
  **720px** (Buttongrößen), **390px** (Hero-Buttons untereinander).
- `prefers-reduced-motion` fehlte im Entwurf und ist ergänzt.

## Stack
- **Astro** (aktuelle Major-Version), statisches Output (`output: 'static'`)
- **Tailwind CSS v4** über `@tailwindcss/vite`
- Design-Tokens als `@theme`-Variablen in `src/styles/global.css` —
  **keine hartcodierten Hex- oder px-Werte in Komponenten**
- Interaktivität als `<script>` im `.astro`-File (Vanilla JS), nur wo die
  Vorlage sie vorsieht. Kein React/Vue/Alpine.
- Bilder über `astro:assets` (`<Image />`)
- Keine zusätzlichen Libraries ohne Rückfrage

## Beim Weiterbauen
- Tokens stehen in `src/styles/global.css`, dokumentiert in
  `docs/DESIGN-SYSTEM.md`. Neue Werte kommen dort hinein, nicht in die
  Komponente.
- Wiederkehrende Elemente sofort als Komponente mit Props. Die
  Leistungsseiten teilen sich bereits `src/components/sections/leistung/`.
- Texte liegen in `src/data/`, nicht im Markup. Eine Datei pro Seite.
- **Jede Änderung auf vier Breiten prüfen: 1440, 820, 390 und 320px.**
  Der Fehler, der hier zweimal durchgerutscht ist, war seitliches
  Scrollen auf schmalen Geräten — Ursache jedes Mal eine feste
  Mindestbreite, die breiter ist als der verbleibende Platz. Deshalb:
  `minmax(min(240px,100%),1fr)` statt `minmax(240px,1fr)`,
  `min-w-[min(280px,100%)]` statt `min-w-280`, und kein `box-content` an
  Elementen mit Innenabstand.
- `overflow-wrap: break-word` ist **kein** zulässiger Notnagel gegen
  Überlauf: es zerlegt Wörter an beliebiger Stelle und ohne Trennstrich
  („Dachdec/ker"). Entweder passt der Platz, oder das Wort bekommt ein
  weiches Trennzeichen (U+00AD) an einer echten Trennstelle.

## Genauigkeit
Für alles, was aus dem Entwurf stammt, gilt weiterhin die Vorlage. Was
seither dazugekommen ist, steht in `docs/ABWEICHUNGEN.md` — dort steht
auch, warum.

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
  data/                 # alle Texte, eine Datei pro Seite
  data/rechtstexte/     # Impressum und Datenschutz als HTML
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
- `alter-auftritt` = Archiv des bisherigen Auftritts, wird nicht deployed
- **Ablauf:** Änderungen entstehen auf `dev`, werden auf
  dev.stolz-marketing.de angesehen und erst danach nach `main` vorgespult.
  Beide Branches stehen auf demselben Commit, jeder Merge ist deshalb ein
  konfliktfreier Fast-Forward.
- **Nichts ungefragt live nehmen.** Auf `main` wird nur gepusht, wenn Iwo
  es für die konkrete Änderung gesagt hat.
- Alte Adressen, die es nicht mehr gibt, sind in `deploy/nginx.conf` als
  301 hinterlegt. `/korbaktion` ist der QR-Code des Door-to-Door-Flyers und
  leitet mit UTM-Parametern auf die Startseite — die Parameter dürfen dabei
  nicht verlorengehen.

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
