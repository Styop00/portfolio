<script setup lang="ts">
import { site } from '~/data/site'
// Imported explicitly rather than relying on Nuxt's auto-import registry: a
// dev server that was already running when this file was added serves a stale
// registry and throws "useActiveSection is not defined" at runtime.
import { useActiveSection } from '~/composables/useActiveSection'

const route = useRoute()

const sectionIds = ['top', 'about', 'skills', 'work', 'experience', 'contact'] as const
const spy = useActiveSection(sectionIds, () => route.path)

// Off the home page there are no tracked sections, so highlight the section
// the current page belongs to instead.
const active = computed(() =>
  route.path === '/' ? spy.value : route.path.startsWith('/projects') ? 'work' : ''
)

useHead({
  titleTemplate: (title) => (title ? `${title} · ${site.name}` : `${site.name} — ${site.title}`)
})

useSeoMeta({
  ogSiteName: site.name,
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <div class="relative min-h-screen">
    <a
      href="#main"
      class="sr-only rounded-lg text-sm font-medium focus:not-sr-only focus:fixed focus:left-4 focus:top-4
        focus:z-[80] focus:bg-accent-500 focus:px-5 focus:py-3 focus:text-white"
    >
      Skip to content
    </a>

    <!-- Ambient wash behind the whole page. Fixed, so it never re-paints on
         scroll, and gradient-only so there is no blur filter to rasterise. -->
    <div
      class="pointer-events-none fixed inset-0 -z-10"
      style="
        background:
          radial-gradient(900px 520px at 78% -8%, rgba(59, 91, 255, 0.16), transparent 70%),
          radial-gradient(700px 420px at 8% 12%, rgba(124, 92, 255, 0.09), transparent 70%);
      "
      aria-hidden="true"
    />

    <ScrollProgress />
    <SideRail :active="active" />
    <SiteHeader :active="active" />

    <div class="flex min-h-screen flex-col lg:pl-[var(--rail)]">
      <main id="main" tabindex="-1" class="flex-1 focus:outline-none">
        <NuxtPage />
      </main>
      <SiteFooter />
    </div>

    <BackToTop />
  </div>
</template>
