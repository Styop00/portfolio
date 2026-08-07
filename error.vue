<script setup lang="ts">
import type { NuxtError } from '#app'
import { site } from '~/data/site'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

useHead({
  titleTemplate: null,
  title: is404.value ? `Page not found · ${site.name}` : `Something went wrong · ${site.name}`,
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<template>
  <div class="relative min-h-screen">
    <div
      class="pointer-events-none fixed inset-0 -z-10"
      style="
        background:
          radial-gradient(900px 520px at 78% -8%, rgba(59, 91, 255, 0.16), transparent 70%),
          radial-gradient(700px 420px at 8% 12%, rgba(124, 92, 255, 0.09), transparent 70%);
      "
      aria-hidden="true"
    />

    <SiteHeader />

    <div class="flex min-h-screen flex-col lg:pl-[var(--rail)]">
      <main class="shell flex flex-1 items-center py-36">
        <div class="w-full max-w-2xl">
          <p class="rise font-mono text-[0.68rem] uppercase tracking-label text-accent-400">
            Error {{ error?.statusCode ?? 500 }}
          </p>

          <h1 class="rise mt-5 text-display-lg font-bold" style="--rise-delay: 80ms">
            {{ is404 ? 'This page took a' : 'Something broke on' }}
            <span class="text-gradient">{{ is404 ? 'wrong turn' : 'the way here' }}</span>
          </h1>

          <p
            class="rise mt-5 text-base leading-relaxed text-ice-dim"
            style="--rise-delay: 160ms"
          >
            {{
              is404
                ? "The page you're after doesn't exist — it may have moved, or never been here at all."
                : 'An unexpected error occurred. Try reloading, or head back to the homepage.'
            }}
          </p>

          <div class="rise mt-9 flex flex-wrap gap-3" style="--rise-delay: 240ms">
            <NuxtLink to="/" class="btn-primary" @click="clearError({ redirect: '/' })">
              <AppIcon name="home" :size="16" />
              Back to homepage
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="btn-ghost"
              @click="clearError({ redirect: '/projects' })"
            >
              Browse projects
            </NuxtLink>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  </div>
</template>
