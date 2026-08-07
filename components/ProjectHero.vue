<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{ project: Project }>()
</script>

<template>
  <section class="pt-28 sm:pt-32">
    <div class="shell">
      <NuxtLink
        to="/projects"
        class="rise group inline-flex items-center gap-2.5 text-sm text-ice-dim transition-colors duration-300 hover:text-accent-400"
      >
        <AppIcon
          name="arrowLeft"
          :size="15"
          class="transition-transform duration-500 ease-soft group-hover:-translate-x-1"
        />
        All projects
      </NuxtLink>

      <div class="rise mt-7 flex flex-wrap items-center gap-3" style="--rise-delay: 70ms">
        <span class="chip !border-accent-500/35 !text-accent-400">{{ project.context }}</span>
        <span class="chip">{{ project.period }}</span>
      </div>

      <h1 class="rise mt-5 text-display-lg font-bold" style="--rise-delay: 140ms">
        {{ project.name }}
      </h1>

      <p
        class="rise mt-5 max-w-2xl text-base leading-relaxed text-ice-dim sm:text-lg"
        style="--rise-delay: 210ms"
      >
        {{ project.tagline }}
      </p>

      <div class="rise mt-8 flex flex-wrap items-center gap-3" style="--rise-delay: 280ms">
        <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">
          Visit {{ project.displayUrl }}
          <AppIcon name="external" :size="15" />
        </a>
        <p class="text-sm text-ice-faint">{{ project.role }}</p>
      </div>

      <figure
        class="rise mt-12 overflow-hidden rounded-panel border border-[var(--line)] bg-ink-900 shadow-card"
        style="--rise-delay: 340ms"
      >
        <NuxtImg
          :src="project.screenshot"
          :alt="project.screenshotAlt"
          width="1600"
          height="1000"
          sizes="xs:100vw sm:100vw md:100vw lg:1100px xl:1200px"
          loading="eager"
          fetchpriority="high"
          preload
          class="aspect-[16/10] w-full object-cover object-top sm:aspect-[2/1]"
        />
      </figure>
    </div>
  </section>
</template>
