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
    url: 'https://styop00.github.io',
    name: 'Stepan Hambardzumyan — Full-Stack Developer'
  },

  app: {
    baseURL: '/portfolio/',
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
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

  features: {
    // No third-party CSS-in-JS or inline style deps — keeps the CSP-friendly output small.
    inlineStyles: true
  },

  experimental: {
    payloadExtraction: false
  },

  hooks: {
    /**
     * Drop the `modulepreload`/`prefetch` hints Nuxt emits into <head>.
     * The pages are fully prerendered, so nothing above the fold needs JS —
     * but the hints make the browser pull the whole bundle at high priority,
     * which competes with the document and fonts and pushes First Contentful
     * Paint out by ~0.7s on a throttled mobile connection. The entry script
     * still loads from its normal <script type="module"> tag, just after paint.
     */
    'build:manifest': (manifest) => {
      for (const entry of Object.values(manifest)) {
        entry.preload = false
        entry.prefetch = false
      }
    }
  },

  typescript: {
    strict: true
  }
})
