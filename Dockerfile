# Statische Astro-Site: Build mit Node, Auslieferung über nginx.
# Dokploy: Build Type „Dockerfile", Container-Port 80.

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
# Schlüssel für den Website-Check (PageSpeed-Insights-API). Kommt in
# Dokploy als Build-Argument, weil Astro ihn beim Bauen in das Skript
# schreibt — zur Laufzeit im nginx-Container wäre es zu spät.
ARG PUBLIC_PAGESPEED_KEY=""
ENV PUBLIC_PAGESPEED_KEY=$PUBLIC_PAGESPEED_KEY
RUN npm run build

FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
