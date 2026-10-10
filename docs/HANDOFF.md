# Handoff: Lava web page

Status: template is running locally. Nothing committed yet.

## Run it
```
cd ~/Programming/Lava
npm install
npm run dev      # http://localhost:4400  (phone: http://100.117.131.14:4400)
npm run build    # static files in dist/ (GitHub Pages / Cloudflare Pages)
```

## Live
- Repo: https://github.com/DieWahrePalme/Lava (public), branch `main`.
- Site: https://diewahrepalme.github.io/Lava/
- Every push to `main` deploys automatically (`.github/workflows/deploy.yml`,
  Pages source = GitHub Actions). `astro.config.mjs` has `site` and `base: '/Lava'`.
- The public site shows the band's phone number (Moritz agreed). Remove it in
  `src/content.ts` (`contact.phone`) if that changes.

## Done
- Astro + TypeScript, static output, port 4400 (not 8081 / 4321).
- All copy and links in one file: `src/content.ts`.
- Sections: Hero (LAVA), About, Buddha/Shiva, Instruments (handpan, guitar),
  Music, Live, Follow (Instagram, YouTube, Facebook), Contact (incl. phone
  from the band's business card), Footer.
- Look (current): light, calm ivory and gold, based on research of yoga and
  spiritual sites (cream, white space, soft gold, thin serif). Slow golden
  marble background (WebGL, `src/scripts/lava.ts`), LAVA as a clean,
  widely spaced thin serif title (Cinzel) in flat gold with a slow colour flow,
  framed by four corner mandalas, all fading out after ~0.4 screens of scrolling, few slow golden dust specks (`src/scripts/embers.ts`),
  fine gold lotus mandala centred behind content (`src/components/Mandala.astro`).
- Mobile: renders at up to 2x for crisp letters, checked in an iPhone 15
  emulation (Chromium, not real Safari). `prefers-reduced-motion` gives a
  static background and no animation. Fallback if WebGL is missing.
- Tried and removed: a Three.js 3D figure (too futuristic), the dark red-gold look, 3D and rounded title styles (too playful).
- `demo/index.html` = the original red-lava demo by boss. Kept on purpose as a
  visual reference (not part of the build).

## Next
- Test on a real iPhone/Android (smoothness, letter sharpness); check desktop width, full scroll. Optional: install WebKit for Playwright (`playwright-cli install-browser webkit`) for closer iPhone tests.
- Real band content: texts, photos, logo, audio/video, tour dates.
- Logo (SVG or transparent PNG) into hero or Buddha/Shiva section.
- Music section: real YouTube/Spotify links or embeds.
- Live section: real dates.
- Imprint and privacy pages (legal text needed, Germany).
- Run `npm run build` and test the static output; set `site`/`base` in
  `astro.config.mjs` for GitHub Pages.
- Commit and push only when Moritz asks.

## Open questions (ask the band)
- Exact Facebook page URL (current link is only a Facebook search for "LAVA MeditationMusic").
- The band's Instagram handle is `lava_spiritual_music` (the business card has a typo without the t).
- Is the phone number allowed to be public on the site?
- Instagram, Facebook and YouTube could not be read automatically (login
  walls). Real bio/post texts would help to write better copy.
- Singer / percussion on the site, or only handpan and guitar?
- May we use the forest video (handpan + guitar) and the circular logo?
- Final colours (ivory and gold now; maybe a light cream section or warmer/cooler tone), domain, languages (German/English).
- Real Buddha/Shiva wording.

## Notes
- No real band assets are in the repo. All text is placeholder.
- No secrets in the repo.
