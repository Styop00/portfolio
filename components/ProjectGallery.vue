<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-3">
    <figure v-reveal class="reveal lg:col-span-2">
      <div class="overflow-hidden rounded-card border border-[var(--line)] bg-ink-900">
        <NuxtImg
          :src="project.screenshotDetail"
          :alt="project.screenshotDetailAlt"
          width="1440"
          height="900"
          sizes="xs:100vw sm:100vw md:100vw lg:640px xl:700px"
          loading="lazy"
          decoding="async"
          class="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.1s] ease-soft hover:scale-[1.03]"
        />
      </div>
      <figcaption class="label mt-3">Content section — desktop</figcaption>
    </figure>

    <figure v-reveal="120" class="reveal">
      <div class="overflow-hidden rounded-card border border-[var(--line)] bg-ink-900">
        <NuxtImg
          :src="project.screenshotMobile"
          :alt="project.screenshotMobileAlt"
          width="600"
          height="1300"
          sizes="xs:62vw sm:42vw md:36vw lg:320px xl:340px"
          loading="lazy"
          decoding="async"
          class="aspect-[9/13] w-full object-cover object-top"
        />
      </div>
      <figcaption class="label mt-3">Responsive — mobile</figcaption>
    </figure>
  </div>
</template>
