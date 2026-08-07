# Stepan Hambardzumyan — Portfolio

Personal portfolio for **Stepan Hambardzumyan, Full-Stack Developer** (Yerevan, Armenia).
Built with Nuxt 3 and generated as a fully static site for free hosting on GitHub Pages.

Live target: **https://styop00.github.io**

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Nuxt 3 + Vue 3 + TypeScript, output via `nuxt generate` (static) |
| Styling | Tailwind CSS with a custom design system (`tailwind.config.ts`) |
| Images | `@nuxt/image` — responsive `srcset`, prerendered at build |
| Fonts | `@nuxt/fonts` — Inter + JetBrains Mono, self-hosted, latin subset |
| Motion | CSS keyframes + two small `IntersectionObserver` helpers |
| SEO | `@nuxtjs/sitemap`, `@nuxtjs/robots`, hand-written JSON-LD (`composables/useJsonLd.ts`) |
| Hosting | GitHub Pages, static only — no server, no database, no contact-form backend |

There is deliberately **no animation library**. Everything moves via CSS, so
`prefers-reduced-motion` is honoured in pure CSS and the site stays fully
readable without JavaScript.

## Design system

Deep navy-black (`#05070F`) rather than neutral grey — the blue in the base
tone is what lets the electric accent (`#3B5BFF`) sit naturally on top of it.
Content lives in rounded panels over an ambient blue/violet gradient wash, with
a fixed icon rail down the left on desktop and a top nav that highlights the
section you're reading.

Colour roles: `ice` (`#E8ECF5`) for text, `ice-dim` for secondary copy,
`ice-faint` (`#7A8299`, the lightest tone that still clears 4.5:1 on the
brightest card) for metadata. The accent appears as `accent-500` on filled
buttons with white text, and `accent-400` wherever it carries text itself.
Mint, violet and amber tint the stat-card icons only.

### Motion inventory

| Effect | Mechanism | Cost |
|---|---|---|
| Hero entrance, staggered | CSS `@keyframes` with per-element delay | none |
| Typed code panel | CSS `clip-path` reveal in `steps()` | none |
| Gradient shimmer on the headline | animated `background-position` | none |
| Drifting ring, floating tech chips, breathing glow | CSS `@keyframes` | none |
| Scroll-triggered section reveals | `IntersectionObserver` adds one class | ~1 KB JS |
| Active-section nav + rail highlight | `IntersectionObserver` band | ~1 KB JS |
| Stat counters | `requestAnimationFrame`, only for stats below the fold | ~1 KB JS |
| Reading-progress bar | `animation-timeline: scroll()` | none |
| Hover: card lift, image zoom, arrow travel, icon scale | CSS transitions | none |

Counters only animate for stats that start below the fold — otherwise
hydration would visibly reset a number the visitor is already looking at.

### The hero visual

The layout has a portrait-shaped slot on the right. There is no photo of
Stepan in this repo, so `components/HeroVisual.vue` fills it with a glass code
panel inside the glow-and-rings composition instead. To use a real portrait,
replace the `<figure>` in that component with a `<NuxtImg>` — the file has the
exact snippet in a comment at the top.

## Commands

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run generate
```

`npm run generate` writes the complete static site to `.output/public`.

To preview the production output exactly as it will be served:

```bash
npx serve .output/public
```

---

## Project layout

```
app.vue                     Shell: skip link, gradient wash, rail, header, footer
error.vue                   Custom 404 / error page
assets/css/main.css         Tokens, component classes, motion + reduced-motion rules
components/
  SideRail.vue              Fixed desktop icon rail with active indicator
  SiteHeader.vue            Top nav with sliding underline + full-screen mobile menu
  HeroSection.vue           Headline, CTAs, availability
  HeroVisual.vue            Glow, rings, typed code panel, floating tech chips
  SectionLabel.vue          Dot + accent label above each section heading
  StatCard.vue / CountUp    Stat tiles with count-up on scroll
  SkillsGrid.vue            Tech logo tiles + the grouped inventory
  TechIcon.vue              Brand marks for the skills grid
  ProjectCard.vue           Screenshot card linking to a case study
  ProjectHero.vue           Case-study header and cover
  ProjectGallery.vue        Detail + mobile screenshots
  ExperienceTimeline.vue    Three-column work history
  ContactLinks.vue          Click-to-copy email/phone, profile links
  ScrollProgress / BackToTop / AppIcon / SiteFooter
composables/                useCopyToClipboard, useJsonLd, useActiveSection
data/site.ts                Contact details, stats, skills, experience, languages
data/projects.ts            The five case studies, including all image paths
pages/index.vue             Home: hero, about, skills, work, experience, contact
pages/projects/index.vue    Portfolio index
pages/projects/[slug].vue   Case-study template — 5 static pages at build time
plugins/reveal.ts           v-reveal scroll directive
public/images/projects/     Real screenshots: homepage, detail and mobile view
                            of each of the five live sites
```

### Editing content

Almost everything lives in two files:

- **`data/site.ts`** — contact details, the stats row, skill groups, work history, languages.
- **`data/projects.ts`** — one object per case study. Adding a sixth project means adding one
  object plus a screenshot in `public/images/projects/`; the grid, the home page, the case-study
  page, the footer links, the sitemap and the prev/next navigation all pick it up automatically.

The canonical domain is set once in `nuxt.config.ts` under `site.url` and in `data/site.ts`.
If the site ever moves to a custom domain, change it in both places.

---

## Deploying to GitHub Pages

The repository name matters: for a **user site** served at `https://styop00.github.io/`
(no sub-path), the repo must be named exactly `Styop00.github.io`.

### 1. Create the repository

On GitHub, create a new public repository named **`Styop00.github.io`**.

### 2. Push this project

```bash
git init && git add . && git commit -m "Initial portfolio"
```

```bash
git branch -M main && git remote add origin https://github.com/Styop00/Styop00.github.io.git && git push -u origin main
```

### 3. Choose a publishing method

**Option A — GitHub Actions (recommended, redeploys on every push)**

In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
GitHub offers a Nuxt workflow template; accept it. It runs `npm ci && npm run generate`
and publishes `.output/public` on every push to `main`.

**Option B — manual `gh-pages` branch**

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"deploy": "gh-pages -d .output/public --dotfiles"
```

Then publish with:

```bash
npm run generate && npm run deploy
```

…and set **Settings → Pages → Source** to the `gh-pages` branch.

> `--dotfiles` matters: it keeps `.nojekyll`, without which GitHub Pages runs Jekyll and
> strips the `_nuxt/` and `_fonts/` directories. `.nojekyll` already lives in `public/`,
> so `npm run generate` always copies it into the output.

### 4. Verify

The first deploy takes a minute or two. The site is then live at `https://styop00.github.io/`.

---

## Lighthouse

Measured against the generated output served with gzip (as GitHub Pages does),
Chrome headless, Lighthouse CLI:

| Page | Desktop | Mobile |
|---|---|---|
| `/` | **100 / 100 / 100 / 100** | 98 / 100 / 100 / 100 |
| `/projects` | **100 / 100 / 100 / 100** | 98 / 100 / 100 / 100 |
| `/projects/bookera` | **100 / 100 / 100 / 100** | 96–98 / 100 / 100 / 100 |

*(Performance / Accessibility / Best Practices / SEO)*

Accessibility, Best Practices and SEO are 100 on every page, desktop and
mobile, and desktop Performance is 100 everywhere.

Mobile Performance is 96–98 — the case-study pages vary run to run as their
cover image competes for bandwidth. First Contentful Paint is the stable
constraint: under Lighthouse's simulated Slow-4G profile the document, two
self-hosted font files and the Vue/Nuxt bundle share a 1.6 Mbps pipe, putting
FCP at ~1.8s, right on the threshold for a perfect sub-score. Total Blocking
Time and Cumulative Layout Shift score 1.0 on every page.

The residual layout shift (~0.05 on the home page, well inside the 0.1 budget)
comes from the webfont swap reflowing the hero paragraph. `@nuxt/fonts` already
emits `size-adjust` fallback metrics; closing the gap entirely would mean
inlining the font, which costs more than it saves.

## Responsive checks

Two failure modes here are easy to introduce and easy to miss, so both are
worth re-checking after layout changes:

**Horizontal overflow.** A single element wider than the viewport makes the
whole page scroll sideways on a phone. Two real causes have already been fixed:
an unbreakable email address inside a grid item with the default
`min-width: auto`, and a rotating square SVG whose bounding box grows ~41% at
45° and pushed 53px of scroll onto narrow screens. The second only appears part
way through the animation, so measuring once at load will not catch it — the
audit script pauses every CSS animation and scrubs each across its full cycle
while measuring, at fifteen widths from 320px up.

**Scroll reveals.** Sections start at `opacity: 0` and are revealed by an
`IntersectionObserver`. When scripting a scroll to test them, recompute
`document.documentElement.scrollHeight` on every step — lazy images grow the
page as they load, so a height captured up front stops the sweep short and
makes perfectly working sections look broken.

### Re-running the audit

```bash
npm run generate && npx serve .output/public
```

```bash
npx lighthouse http://localhost:3000/ --view
```

Note that measuring against a server without gzip (for example `python3 -m http.server`)
understates Performance by roughly 13 points, because Lighthouse then flags the
uncompressed HTML, CSS and JS.
