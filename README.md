# Personal Page — Filippo Bratti

Sito personale/CV, multi-pagina, bilingue (IT/EN), costruito con [Astro](https://astro.build).

**Live:** https://filippobratti.com

## Stack

- Astro 7 (static output)
- `@astrojs/sitemap` — sitemap automatica
- `@vercel/analytics` — analytics su Vercel
- Nessun framework JS lato client: componenti Astro + script vanilla dove serve (tema, lingua, menu)

## Struttura

```
src/
├── data/site.ts         # tutti i contenuti (IT/EN): testi, esperienze, progetti, CV...
├── components/          # un componente per sezione (Hero, About, Experience, Projects, Cv, ...)
├── layouts/Layout.astro # <head> comune: meta tag, SEO, JSON-LD, tema/lingua, View Transitions
└── pages/                # una pagina per sezione (/experience, /education, /skills, /projects, /cv, /contact)
public/
├── logos/                # loghi aziende (esperienza lavorativa)
├── projects/             # screenshot progetti
└── CV_Filippo_Bratti(.pdf|_EN.pdf)
```

## Come funziona IT/EN

Niente routing per lingua: ogni pagina renderizza **entrambe** le lingue nel markup (blocchi `data-lang-block="it"|"en"`), e il CSS mostra solo quella attiva in base a `data-lang` su `<html>`. La scelta si salva in `localStorage` (vedi `LangSwitch.astro` e `Layout.astro`). Stesso meccanismo per il tema chiaro/scuro.

Per aggiungere o modificare contenuti: **modifica solo `src/data/site.ts`**, ricordandoti di aggiornare sia il blocco `it` che `en`.

## Comandi

```sh
npm install       # installa le dipendenze
npm run dev       # dev server su localhost:4321
npm run build     # build di produzione in ./dist
npm run preview   # anteprima della build
npx astro check   # type-check
```

## Deploy

Push su `main` → deploy automatico su Vercel. Se cambia il dominio, aggiorna `site` in `astro.config.mjs` e la riga `Sitemap:` in `public/robots.txt`.
