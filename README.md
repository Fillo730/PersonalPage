# Personal Page — Filippo Bratti

Personal/CV site, multi-page, bilingual (IT/EN), built with [Astro](https://astro.build).

**Live:** https://filippobratti.com

## Stack

- Astro 7 (static output)
- `@astrojs/sitemap` — automatic sitemap
- `@vercel/analytics` — analytics on Vercel
- No client-side JS framework: Astro components + vanilla scripts where needed (theme, language, menu)

## Structure

```
src/
├── data/site.ts         # all content (IT/EN): copy, work experience, projects, CV, plus
│                         # localePath()/stripLocalePrefix() helpers for locale-aware links
├── components/          # one component per section (Hero, About, Experience, Projects, Cv, ...)
│                         # every component takes a `lang` prop and renders a single language
├── layouts/Layout.astro # shared <head>: meta tags, SEO, JSON-LD, hreflang, theme, View Transitions
└── pages/
    ├── it/               # Italian routes: /it/, /it/experience, /it/education, ...
    ├── en/                # English routes: /en/, /en/experience, /en/education, ...
    └── 404.astro          # fallback for URLs outside /it and /en
public/
├── logos/                # company logos (work experience)
├── projects/             # project screenshots
└── CV_Filippo_Bratti(.pdf|_EN.pdf)
```

## How IT/EN works

Real per-language routing via Astro's built-in i18n (`astro.config.mjs`): each page exists once under `src/pages/it/` and once under `src/pages/en/`, both thin wrappers that pass `lang="it"|"en"` down to the shared components. Only the active language is ever rendered/shipped — no client-side hiding. `/` redirects to `/it` (see `vercel.json`). Language switching is a real link to the equivalent page in the other locale (see `LangSwitch.astro`, built with `localePath()`/`stripLocalePrefix()` from `site.ts`). Theme (light/dark) still works client-side via `localStorage`, independent of the language.

To add or edit content: **only edit `src/data/site.ts`**, remembering to update both the `it` and `en` blocks.

## Commands

```sh
npm install       # install dependencies
npm run dev       # dev server at localhost:4321
npm run build     # production build into ./dist
npm run preview   # preview the build
npx astro check   # type-check
```

## Deploy

Push to `main` → automatic deploy on Vercel. If the domain changes, update `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`.
