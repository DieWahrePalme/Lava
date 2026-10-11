# LAVA – Webseite

Einseitige Webseite der Band LAVA (Handpan, Akustikgitarre, Percussion).
Live: https://lava-musik.de

## Starten
```
npm install
npm run dev      # http://localhost:4400/
npm run build    # fertige Seite in dist/
```

## Inhalte ändern
Alle Texte, Links, News, Videos und Termine stehen in `src/content.ts`.
Bilder liegen in `src/assets/`, Icons (Favicon) in `public/`.

## Veröffentlichen
Jeder Push auf `main` baut die Seite automatisch und stellt sie über GitHub Pages
online (`.github/workflows/deploy.yml`). Die Domain steht in `public/CNAME`.

## Technik
Astro + TypeScript, statische Ausgabe, reines CSS, WebGL-Hintergrund.
Stand der Arbeit und offene Aufgaben: `docs/HANDOFF.md`.
