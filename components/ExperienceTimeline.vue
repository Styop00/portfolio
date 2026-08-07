<script setup lang="ts">
import { experience } from '~/data/site'
</script>

<template>
  <ol class="grid gap-8 lg:grid-cols-3 lg:gap-0">
    <li
      v-for="(job, i) in experience"
      :key="job.company"
      v-reveal="i * 110"
      class="reveal group relative lg:px-7 lg:first:pl-0 lg:last:pr-0"
      :class="i > 0 ? 'lg:border-l lg:border-[var(--line)]' : ''"
    >
      <!-- Marker -->
      <span class="flex items-center gap-3">
        <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span
            v-if="job.current"
            class="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-accent-500"
          />
          <span
            class="relative inline-flex h-2.5 w-2.5 rounded-full"
            :class="job.current ? 'bg-accent-500' : 'bg-ice-faint/60'"
          />
        </span>
        <h3 class="text-base font-semibold">{{ job.role }}</h3>
      </span>

      <p class="mt-2.5 pl-[1.4rem] text-sm text-accent-400">{{ job.company }}</p>
      <p class="mt-1 pl-[1.4rem] font-mono text-[0.68rem] tracking-wide text-ice-faint">
        {{ job.period }}
      </p>

      <ul class="mt-4 space-y-2.5 pl-[1.4rem]">
        <li
          v-for="point in job.points"
          :key="point"
          class="flex gap-3 text-sm leading-relaxed text-ice-dim"
        >
          <span class="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent-500/70" aria-hidden="true" />
          {{ point }}
        </li>
      </ul>
    </li>
  </ol>
</template>
