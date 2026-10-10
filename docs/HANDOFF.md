# Handoff: Lava web page

Status: live with the band's real German content, Impressum and Datenschutz pages online.

## Run it
```
cd ~/Programming/Lava
npm install
npm run dev      # http://localhost:4400/Lava/  (phone: http://100.117.131.14:4400/Lava/)
npm run build    # static files in dist/
```
Note: the dev URL ends in `/Lava/` because of the GitHub Pages `base`.

## Live
- Repo: https://github.com/DieWahrePalme/Lava (public), branch `main`.
- Site: https://diewahrepalme.github.io/Lava/
- Every push to `main` deploys automatically (`.github/workflows/deploy.yml`,
  Pages source = GitHub Actions). `astro.config.mjs` has `site` and `base: '/Lava'`.
- The public site shows the band's phone number (Moritz agreed). Remove it in
  `src/content.ts` (`contact.phone`) if that changes.
- Commit and push only when Moritz asks.

## Done
- Astro + TypeScript, static output, port 4400 (not 8081 / 4321).
- All copy and links in one file: `src/content.ts` (German, from the band).
- Sections: Hero (LAVA, "Musik für die Seele", Innehalten · Atmen · Eintauchen ·
  Loslassen), Eintauchen/Loslassen/Ankommen (about), Raum zum Ankommen (yoga
  values with own SVG icons + Buddha-lava picture), Instruments (Akustikgitarre,
  Handpan, Percussion, ruhige Beats), Biografie (band photo, Gianni, Jimmy, how
  LAVA started), Für Yoga-Studios (the band's letter), Hören (3 YouTube
  previews), Live (no dates yet), Folge dem Fluss (Instagram, YouTube,
  Facebook), Kontakt (phone), Footer with Impressum and Datenschutz.
- Icons are own SVGs (`src/components/Icon.astro`), not text symbols (phones
  draw those differently).
- Impressum (`src/pages/impressum.astro`) and Datenschutz
  (`src/pages/datenschutz.astro`), layout `src/layouts/Legal.astro`. Data in
  `legal` in `src/content.ts`: Kirstattstraße 18, 89407 Dillingen an der Donau
  (OT Kicklingen), Jimmy0815@yahoo.de, two private persons (no GbR), phone.
  Privacy text covers GitHub Pages hosting, click-to-load YouTube, self-hosted
  fonts, social links, contact, rights. It is a draft: have it checked by a
  lawyer or generator (e.g. eRecht24). A yellow "Entwurf" box shows only while
  `legal` values contain [brackets].
- YouTube: click-to-load with `youtube-nocookie`, preview images stored locally
  (`src/assets/video-<id>.jpg`). Videos are listed in `music.videos`.
  Not used: "23. April 2026", short "12. April 2026".
- Images through `astro:assets` (webp, responsive, lazy). Files in `src/assets/`:
  `band.jpg`, `buddha-lava.jpg`, video previews.
- Look: light, calm ivory and gold (researched yoga/spiritual sites). Slow golden
  marble WebGL background (`src/scripts/lava.ts`, kept cheap for phones), LAVA
  title as real gradient text (Cinzel, clean, no 3D), four corner mandalas on
  the hero, centred mandala behind content (`src/components/*Mandala*.astro`),
  few golden dust specks (`src/scripts/embers.ts`). Title and hero mandalas fade
  out with scroll.
- Mobile: checked in an iPhone 15 emulation (Chromium, not real Safari), no
  sideways scroll at 320/393/430/768 px, safe-area insets, no backdrop blur
  (it made scrolling jerky). `prefers-reduced-motion` = static background, no
  animation.
- Tried and removed: Three.js 3D figure, dark red-gold look, 3D and rounded
  title styles, duplicate LAVA logo image.
- `demo/index.html` = original red-lava demo by boss, kept as visual reference
  (not part of the build).

## Next
- Exact Facebook page URL (now only a search link, see `follow.channels`).
- Live dates when the band has them (`live.dates`; section hides the list if empty).
- Own recordings (Spotify etc.) in `music`.
- Legal check of Impressum/Datenschutz (see above). Update Datenschutz if new
  services are added (analytics, forms, more embeds).
- Optional: English version, own domain, smaller logo in hero.
- Test on a real iPhone/Android (smoothness). If still jerky, lower effects
  further (fewer dust specks, lower background resolution).

## Open questions (ask the band)
- Are Gianni and Jimmy OK with the band photo being public? (Phone, address and
  email in the Impressum were approved by Moritz.)
- Percussion / "Schlagzeug": listed as instrument next to handpan. Correct?
- Final colours and the use of the red lava logo (now only as picture in
  "Raum zum Ankommen").

## Notes
- The Instagram handle is `lava_spiritual_music` (business card has a typo).
- Pictures and texts come from the band via Moritz; the Buddha-lava pictures
  look AI-generated, so check rights/labelling if needed.
- No secrets in the repo.
