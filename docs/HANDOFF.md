# Handoff: Lava web page

Status: template is running locally. Nothing committed yet.

## Run it
```
cd ~/Programming/Lava
npm install
npm run dev      # http://localhost:4400  (phone: http://100.117.131.14:4400)
npm run build    # static files in dist/ (GitHub Pages / Cloudflare Pages)
```

## Done
- Astro + TypeScript, static output, port 4400 (not 8081 / 4321).
- All copy and links in one file: `src/content.ts`.
- Sections: Hero (LAVA), About, Buddha/Shiva, Instruments (handpan, guitar),
  Music, Live, Follow (Instagram, YouTube, Facebook), Contact, Footer.
- Look: liquid copper-gold WebGL lava (`src/scripts/lava.ts`), 3D-look serif
  title (Cinzel) with bevel and side wall, title fades out fully after about
  0.7 screens of scrolling, embers on 3 depth layers with scroll parallax
  (`src/scripts/embers.ts`), slowly turning lotus mandala behind content
  (`src/components/Mandala.astro`).
- Mobile first: lower render resolution on phones, `prefers-reduced-motion`
  gives static lava and no animation, fallback if WebGL is missing.
- A 3D figure (Three.js) was tried and removed: too futuristic.
- `demo/index.html` = the original red-lava demo by boss. Kept on purpose as a
  visual reference (not part of the build).

## Next
- Look at the page on a real phone (smoothness) and at desktop width, full scroll.
- Real band content: texts, photos, logo, audio/video, tour dates.
- Logo (SVG or transparent PNG) into hero or Buddha/Shiva section.
- Music section: real YouTube/Spotify links or embeds.
- Live section: real dates.
- Imprint and privacy pages (legal text needed, Germany).
- Run `npm run build` and test the static output; set `site`/`base` in
  `astro.config.mjs` for GitHub Pages.
- Commit when Moritz agrees.

## Open questions (ask the band)
- Exact Facebook page URL (current link is only a Facebook search for "LAVA MeditationMusic").
- Instagram, Facebook and YouTube could not be read automatically (login
  walls). Real bio/post texts would help to write better copy.
- Singer / percussion on the site, or only handpan and guitar?
- May we use the forest video (handpan + guitar) and the circular logo?
- Final colours (copper-gold now), domain, languages (German/English).
- Real Buddha/Shiva wording.

## Notes
- No real band assets are in the repo. All text is placeholder.
- No secrets in the repo.
