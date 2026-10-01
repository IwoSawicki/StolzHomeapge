#!/bin/sh
# Schreibt beim Start des Containers den Schlüssel für den Website-Check
# in eine kleine Skriptdatei, die /website-check lädt.
#
# Warum zur Laufzeit: Der Schlüssel kam als Build-Argument nicht zuverlässig
# im Build an — Dokploy reicht Umgebungsvariablen je nach Einstellung nur an
# den laufenden Container weiter. Das offizielle nginx-Image führt Skripte
# aus /docker-entrypoint.d/ beim Start aus; damit genügt eine ganz normale
# Umgebungsvariable PUBLIC_PAGESPEED_KEY.
#
# Erlaubt sind nur Zeichen, die in Google-API-Schlüsseln vorkommen — so
# kann über die Variable nichts anderes ins Skript gelangen.
set -eu
schluessel=$(printf '%s' "${PUBLIC_PAGESPEED_KEY:-}" | tr -cd 'A-Za-z0-9_-')
printf 'window.__PAGESPEED_KEY__="%s";\n' "$schluessel" > /usr/share/nginx/html/website-check-key.js
if [ -n "$schluessel" ]; then
  echo "Website-Check: Schlüssel gesetzt"
else
  echo "Website-Check: PUBLIC_PAGESPEED_KEY fehlt — Abfragen laufen ohne Schlüssel"
fi
