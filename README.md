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
├── data/site.ts         # all content (IT/EN): copy, work experience, projects, CV...
├── components/          # one component per section (Hero, About, Experience, Projects, Cv, ...)
├── layouts/Layout.astro # shared <head>: meta tags, SEO, JSON-LD, theme/lang, View Transitions
└── pages/                # one page per section (/experience, /education, /skills, /projects, /cv, /contact)
public/
├── logos/                # company logos (work experience)
├── projects/             # project screenshots
└── CV_Filippo_Bratti(.pdf|_EN.pdf)
```

## How IT/EN works

No per-language routing: every page renders **both** languages in the markup (`data-lang-block="it"|"en"` blocks), and CSS shows only the active one based on `data-lang` on `<html>`. The choice is saved in `localStorage` (see `LangSwitch.astro` and `Layout.astro`). Same mechanism for light/dark theme.

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
