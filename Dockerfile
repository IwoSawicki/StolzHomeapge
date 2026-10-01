# Statische Astro-Site: Build mit Node, Auslieferung über nginx.
# Dokploy: Build Type „Dockerfile", Container-Port 80.

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
# Schlüssel für den Website-Check (PageSpeed-Insights-API), erster Weg:
# als Build-Argument. Der zweite Weg zur Laufzeit steht weiter unten und
# greift, wenn Dokploy die Variable nur an den Container gibt.
ARG PUBLIC_PAGESPEED_KEY=""
ENV PUBLIC_PAGESPEED_KEY=$PUBLIC_PAGESPEED_KEY
RUN npm run build

FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
# Schreibt beim Start den Schlüssel für den Website-Check (siehe Skript)
COPY deploy/40-website-check-key.sh /docker-entrypoint.d/40-website-check-key.sh
RUN chmod +x /docker-entrypoint.d/40-website-check-key.sh
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
