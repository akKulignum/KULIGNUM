# Kulignum Holzbau — Astro Website für GitHub Pages

Dieses Repository enthält eine moderne, statische Astro-Version der Website **Zimmerei Kulignum Holzbau**. Es ist für GitHub Pages vorbereitet und kann entweder unter einer GitHub-Subdomain oder mit der Custom Domain `www.kulignum.de` veröffentlicht werden.

## Lokal starten

```bash
npm install
npm run dev
```

Danach öffnest du die lokale Astro-URL, die im Terminal angezeigt wird.

## Build testen

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Neues GitHub Repository erstellen, z. B. `kulignum-website`.
2. Alle Dateien dieses Ordners in das Repository pushen.
3. In GitHub öffnen: **Settings → Pages**.
4. Unter **Build and deployment** als Source **GitHub Actions** auswählen.
5. Auf den Branch `main` pushen.
6. Der Workflow `.github/workflows/deploy.yml` baut Astro und veröffentlicht den Inhalt von `dist/`.

## Custom Domain `www.kulignum.de`

Die Datei `public/CNAME` enthält bereits:

```txt
www.kulignum.de
```

Für GitHub Pages muss DNS beim Domainanbieter entsprechend gesetzt werden:

- `www` als `CNAME` auf `<github-user>.github.io`
- Optional Apex-Domain `kulignum.de` per A-Records auf GitHub Pages IPs weiterleiten

Nach dem ersten Deployment in GitHub unter **Settings → Pages → Custom domain** `www.kulignum.de` prüfen und HTTPS aktivieren.

## Ohne Custom Domain

Wenn die Website nur unter einer GitHub-Pages-URL wie `https://<github-user>.github.io/kulignum-website/` laufen soll:

1. Datei `public/CNAME` löschen.
2. `astro.config.mjs` kann so bleiben, weil der GitHub Actions Workflow `site` und `base` automatisch setzt.

## Projektstruktur

```txt
src/
  components/        Wiederverwendbare UI-Komponenten
  data/              Kontaktdaten und Leistungsinhalte
  layouts/           BaseLayout mit SEO und JSON-LD
  pages/             Astro-Seiten und Routen
  styles/            Globale Styles
public/
  images/            Platzhalterbilder
  CNAME              Custom Domain für GitHub Pages
  .nojekyll          Deaktiviert Jekyll-Verarbeitung auf GitHub Pages
.github/workflows/
  deploy.yml         Automatisches Deployment auf GitHub Pages
```

## Inhalte bearbeiten

Die wichtigsten Inhalte liegen zentral in:

- `src/data/site.ts` — Kontaktdaten, Navigation, Footer
- `src/data/services.ts` — Leistungsseiten und Texte
- `src/pages/index.astro` — Startseite
- `src/pages/kontakt.astro` — Kontaktseite

## Bilder ersetzen

Die SVG-Platzhalter liegen in `public/images/`. Du kannst sie durch echte Fotos ersetzen und die Dateinamen beibehalten, zum Beispiel:

- `hero-holzbau.svg`
- `holzbau.svg`
- `dach.svg`
- `balkon.svg`
- `terrasse.svg`
- `carport.svg`
- `meister.svg`

Bei echten Fotos empfiehlt sich `.webp` oder optimierte `.jpg`-Dateien. Passe dann die Bildpfade in `src/data/services.ts` und `src/pages/index.astro` an.

## Formular

Das Kontaktformular ist als Frontend-Struktur vorbereitet. Für den produktiven Versand muss noch ein Backend oder ein Formularservice ergänzt werden, zum Beispiel:

- Netlify Forms
- Formspree
- eigener API-Endpunkt
- serverseitiger Mailversand

Bis dahin verhindert `preventDefault()` den echten Versand und zeigt eine Demo-Meldung.
