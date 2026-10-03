# Offen für Iwo — Meistermagnet v2

Stand 03.10.2026. Die Seite liegt auf dev unter `/mitarbeiter-gewinnen-v2`
(noindex, nicht in der Sitemap, nirgends verlinkt). Alles in doppelten
geschweiften Klammern steht dort sichtbar als Platzhalter
(gestrichelt umrandet) und ist hier gesammelt. Die Texte dazu stehen in
`src/data/mitarbeiter-v2.ts`.

## Vor dem Live-Gang zu entscheiden

1. **Garantie** (S4, FAQ, Hero, Badge unter jedem Knopf)
   - Wie viele vorqualifizierte Bewerbungen in welchem Zeitraum?
     Platzhalter: „innerhalb von {{60}} Tagen … mindestens {{X}}"
   - Was passiert, wenn es nicht klappt: ohne Agenturhonorar
     weiterarbeiten (so steht es jetzt) oder Geld zurück?
   - Bedingungen: Reaktionszeit bei Bewerbern {{48}} Std. und
     {{weitere Bedingungen}}
   - FAQ „Wie funktioniert die Garantie genau?" — Antwort fehlt
   - **Wortlaut juristisch prüfen lassen.** Solange es die Garantie nicht
     verbindlich gibt, darf weder „Mit Garantie" in der Überschrift noch
     „Schriftliche Bewerbungs-Garantie" online stehen.
2. **Ihr Aufwand** (S5): Stunden insgesamt {{X}}, Erstgespräch ca. {{1}}
   Std., Drehtag {{½–1}} Tag, Kampagne live in Woche {{3–4}}.
3. **Laufzeit / Kündbarkeit** — FAQ „Muss ich mich langfristig binden?"
4. **Überschrift**: Fassung A, B oder C — auf dev umschaltbar mit
   `?h=a`, `?h=b`, `?h=c`.
5. **Region**: Die v2 nennt „Bergstraße und Rhein-Neckar" (laut Briefing).
   Auf der bisherigen Seite gilt seit 08.09. „kein Ortsname" — was gilt?
6. **Referenzfälle Mitarbeitergewinnung** (S11): Welche Betriebe dürfen
   mit welchen Zahlen genannt werden? Bis dahin bleiben die Fallkarten
   weg (`FAELLE_FREIGEGEBEN = false`).
7. **Gewerke** (S6): Rollen, Wechselgründe und Schwierigkeitsstufen sind
   ein Entwurf — bitte prüfen (`gewerkeV2`).
8. **Drehtag-Clip** (S3), 6–8 s, 9:16 und 16:9. Bis dahin steht das Foto
   vom Dreh bei DMK Bau.
9. **QR-Code im Link-Generator** (`/intern/link`): braucht eine kleine
   zusätzliche Bibliothek — soll die rein?
10. **Unterschrift** im Garantie-Dokument ist ein angedeuteter Schriftzug,
    nicht Ihre echte Unterschrift. Auf Wunsch als SVG nachzeichnen.

## Abweichungen vom Briefing (bewusst)

- **Eigene Adresse statt eigener Branch:** Dokploy baut nur `dev` und
  `main`. Ein Branch `feature/mitarbeiter-v2` wäre auf
  dev.stolz-marketing.de nicht zu sehen. Die v2 liegt deshalb auf `dev`
  unter `/mitarbeiter-gewinnen-v2`, die bisherige Seite bleibt daneben.
- **Design-Tokens:** Das Briefing nennt „Variante F" mit `--ground`,
  `--alt`, `--band`, `--accent`. Die gibt es im Repo nicht; verwendet sind
  die bestehenden Tokens (paper, paper-soft, forest, lime).
- **Simulator im Hero:** Das Handy spielt eine Vorführung mit denselben
  Fragen ab; ein Tipp darauf öffnet den echten Simulator. Den Simulator
  selbst ein zweites Mal einzubauen hätte seine Logik verdoppelt.
- **Vakanzrechner:** Die Formel steht jetzt in `src/lib/vakanzkosten.ts`
  und wird vom großen Rechner und vom Mini-Rechner benutzt. Ergebnisse
  des großen Rechners unverändert (geprüft: SHK 131 €/Tag, 8.269 €;
  Maler 8.694 €).
- **„Mehr Geld" (W-1)** wird beim Hinscrollen einmal durchgestrichen,
  nicht stufenlos an den Scroll gekoppelt — ruhiger und auf dem Handy
  verlässlicher.
- **Bewertungen:** zwei der drei echten Google-Bewertungen; die dritte
  trägt ein Emoji, das das Briefing ausschließt.
- **Lighthouse** ist hier nicht gelaufen (kein Lighthouse in der
  Testumgebung). Bilder laden verzögert, Videos gibt es auf der Seite
  keine.

## Nebenbefunde aus dem Briefing (bisherige Seiten, noch nicht angefasst)

Im Code nachgeprüft am 03.10.2026:

- **Bestätigt — Sätze nach mission-connect.de**, stammen aus der
  Design-Vorlage und stehen live:
  - `WarumEsFunktioniert.astro`: „… funktioniert, während andere
    scheitern." und „Wir haben das Rad nicht neu erfunden …"
  - `Zusammenarbeit.astro`: „Klicken Sie einfach auf den Button …",
    „Termin auswählen" und „Jede Woche halten wir uns ein begrenztes
    Kontigent an Terminen …" (künstliche Knappheit, dazu Tippfehler
    „Kontigent")
  - Abschluss der Leistungsseiten: „Wir wissen zu gut, dass die Suche
    nach der richtigen Agentur …"
- **Bestätigt — Region uneinheitlich:** „Bergstraße und Südhessen"
  (Footer), „Bergstraße in Südhessen" (Standort, Karte), „in Südhessen
  und an der Bergstraße" (FAQ Startseite).
- **Zu prüfen — Lieferzeit:** FAQ Startseite „vier bis sechs Wochen"
  (bezieht sich auf Webseiten, nicht auf Kampagnen).
- **Nicht gefunden — Du-Stelle** auf /kunden-gewinnen: dort steht
  „sagen wir Ihnen das — vor dem ersten Euro", also Sie-Form.
- **Erledigt — Footer-Tools:** inzwischen auf allen Seiten gleich.
