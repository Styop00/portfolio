<script setup lang="ts">
import type { Project } from '~/data/projects'

withDefaults(
  defineProps<{
    project: Project
    /** Keeps the outline sequential: h3 under a section h2, h2 under a page h1. */
    headingLevel?: 2 | 3
    /** The one card that can be the LCP element loads its image eagerly. */
    priority?: boolean
  }>(),
  { headingLevel: 3, priority: false }
)
</script>

<template>
  <article class="card-interactive group relative flex h-full flex-col overflow-hidden">
    <div class="relative overflow-hidden border-b border-[var(--line)]">
      <NuxtImg
        :src="project.screenshot"
        :alt="project.screenshotAlt"
        width="1200"
        height="750"
        sizes="xs:100vw sm:100vw md:50vw lg:400px xl:420px"
        :loading="priority ? 'eager' : 'lazy'"
        :fetchpriority="priority ? 'high' : 'auto'"
        :preload="priority"
        decoding="async"
        class="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.1s] ease-soft group-hover:scale-[1.06]"
      />
      <span
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/25 to-transparent
          transition-opacity duration-700 group-hover:opacity-60"
        aria-hidden="true"
      />
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex items-start justify-between gap-4">
        <component :is="`h${headingLevel}`" class="text-lg font-semibold tracking-tight">
          <!-- Stretched link: the whole card is clickable, the accessible name
               stays just the project name. -->
          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="transition-colors duration-300 after:absolute after:inset-0 after:content-[''] group-hover:text-accent-400"
          >
            {{ project.name }}
          </NuxtLink>
        </component>
        <AppIcon
          name="arrowUpRight"
          :size="16"
          class="mt-1 shrink-0 text-ice-faint transition-all duration-500 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400"
        />
      </div>

      <p class="mt-3 text-sm leading-relaxed text-ice-dim">{{ project.tagline }}</p>

      <ul class="mt-5 flex flex-wrap gap-2 pt-1">
        <li v-for="tech in project.stack.slice(0, 3)" :key="tech" class="chip">{{ tech }}</li>
      </ul>

      <p class="mt-auto pt-5 font-mono text-[0.66rem] uppercase tracking-label text-ice-faint">
        {{ project.displayUrl }}
      </p>
    </div>
  </article>
</template>
