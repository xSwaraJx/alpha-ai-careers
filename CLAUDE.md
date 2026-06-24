# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A fictional "Alpha.AI" careers website demo, styled after JPMorgan's careers site: classy/corporate (deep navy, white, muted gold accent, serif headings) — explicitly not a generic "AI startup" gradient/glow look. Fully static frontend demo: no backend, no database, no real form submissions.

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

There is no test suite configured in this project.

## Architecture

React + Vite + Tailwind CSS v4 + React Router v6 + Framer Motion. Tailwind v4 is configured via the `@tailwindcss/vite` plugin (`vite.config.js`) rather than a `tailwind.config.js` — theme tokens (colors, fonts) are declared with an `@theme` block directly in `src/index.css`.

**Data layer is the source of truth for Careers content.** `src/data/jobs.js` exports the full list of mock job postings (id, title, sector, location, employmentType, description, responsibilities, qualifications, tags). `src/utils/filterJobs.js` is a pure function that filters that array by keyword/location/sector. The Careers page (`src/pages/Careers.jsx`) derives its Location and Sector filter options directly from `jobs.js` (`new Set(jobs.map(...))`) rather than hardcoding them — adding a job with a new sector/location automatically surfaces it as a filter option.

**Routing/pages** (`src/pages/`): `Home`, `Careers`, `JobDetail` (`/careers/:id`, looks up the job by id from `jobs.js`), `About`, `NotFound`. Route shell and global layout (`Navbar`, `Footer`, `ScrollProgressBar`) live in `src/App.jsx`.

**Scroll-driven motion is the site's signature interaction** and is implemented in two places:
- `src/components/layout/ScrollProgressBar.jsx` — a fixed top bar using `useScroll()` + `useSpring()` from Framer Motion, mounted once in `App.jsx` so it persists across all pages.
- `src/components/shared/SectionHeading.jsx` and `src/components/shared/SectionWrapper.jsx` — reusable wrappers providing the `whileInView` fade/slide-in and the gold "drawn underline" effect used under every section heading. New sections should reuse these rather than re-implementing `whileInView` animations inline.

**Job application flow is mock-only by design**: `src/components/job-detail/ApplyModal.jsx` validates input client-side (required fields, email regex) and on success swaps in `ApplySuccess.jsx` — there is no network call. Do not wire this up to a real backend without an explicit request, since the no-backend constraint is intentional for this demo.

**Component organization** under `src/components/` is grouped by the page/feature that owns them (`home/`, `careers/`, `job-detail/`, `about/`, `layout/`), with `shared/` for cross-page primitives (`SectionWrapper`, `SectionHeading`, `PillButton`, `AnimatedBorderCard`).

## Style constraints

- Color palette is restricted to the navy/gold/white theme tokens defined in `src/index.css` (`--color-navy*`, `--color-gold*`, `--color-slate*`). Do not introduce gradients, neon colors, or glassmorphism — the brief explicitly calls for a restrained, corporate-financial aesthetic, not an "AI startup" look.
- Headings use the serif font (`font-serif`, Source Serif 4); body text uses Inter (`font-sans`). Both are loaded via Google Fonts in `index.html`.
