// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: ['~/assets/css/main.css'],

  site: {
    // No path here: nuxt-site-config appends `app.baseURL` itself when
    // building sitemap/canonical URLs. Including '/portfolio' here as well
    // double-prefixes every generated URL to '/portfolio/portfolio/...'.
    url: 'https://styop00.github.io',
    name: 'Stepan Hambardzumyan — Full-Stack Developer'
  },

  robots: {
    // The module refuses to generate a robots.txt at all when `baseURL` is
    // set, and rightly so: a project site's robots.txt would live at
    // /portfolio/robots.txt, but crawlers only ever check the domain root
    // (/robots.txt), which this repo doesn't control on the shared
    // *.github.io domain. Generating one here would be silently ignored.
    robotsTxt: false
  },

  app: {
    // Repo is a GitHub Pages *project* site (styop00.github.io/portfolio/),
    // not a root `Styop00.github.io` user site — every asset URL needs this
    // prefix or it 404s once deployed under the subpath.
    baseURL: '/portfolio/',
    head: {
      htmlAttrs: { lang: 'en' },
      // Hardcoded absolute paths — unlike Nuxt's own emitted assets — are
      // never rewritten with `baseURL`, so they 404 under the `/portfolio/`
      // subpath unless prefixed here explicitly.
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/portfolio/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/portfolio/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'theme-color', content: '#05050a' },
        { name: 'author', content: 'Stepan Hambardzumyan' }
      ]
    }
  },

  fonts: {
    // Latin-only, upright-only: the site has no italics and no Cyrillic/Greek
    // copy, and every extra subset ships another inlined @font-face block.
    defaults: { subsets: ['latin'], styles: ['normal'] },
    families: [
      // Headlines are set in the display serif, so Inter only ever runs at
      // body and UI weights — and the mono is label-only at a single weight.
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
      // Mono is label- and code-only, at one weight.
      { name: 'JetBrains Mono', provider: 'google', weights: [400] }
    ]
  },

  image: {
    format: ['avif', 'webp'],
    // No explicit `quality`: it adds a `q_80&` modifier, and the resulting `&`
    // in every _ipx URL gets double-escaped by the sitemap's image entries.
    // Sharp's own WebP default is 80 anyway, and the sources are already WebP.
    screens: { xs: 360, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 }
  },

  // GitHub Pages serves static files only — everything is prerendered at build time.
  ssr: true,
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects', '/404.html'],
      failOnError: true
    }
  },

  routeRules: {
    '/**': { prerender: true }
  },

  experimental: {
    payloadExtraction: false
  },

  typescript: {
    strict: true
  },

  features: {
    // Omitting this key leaves Nuxt on its function-shaped default,
    // `(id) => id.includes('.vue')` — which only inlines Vue SFC <style>
    // blocks and does NOT reliably fall back to a linked stylesheet for
    // global CSS (like this project's `assets/css/main.css`) under static
    // generation. Explicit `false` is required to get a normal
    // `<link rel="stylesheet">` for the compiled Tailwind CSS at all.
    inlineStyles: false
  }
})
