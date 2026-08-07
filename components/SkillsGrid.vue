<script setup lang="ts">
import { skillGroups } from '~/data/site'

const primary = [
  { icon: 'laravel', label: 'Laravel' },
  { icon: 'php', label: 'PHP' },
  { icon: 'vue', label: 'Vue' },
  { icon: 'nuxt', label: 'Nuxt.js' },
  { icon: 'react', label: 'React' },
  { icon: 'next', label: 'Next.js' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'node', label: 'Node.js' },
  { icon: 'tailwind', label: 'Tailwind' },
  { icon: 'postgres', label: 'PostgreSQL' },
  { icon: 'mysql', label: 'MySQL' },
  { icon: 'redis', label: 'Redis' },
  { icon: 'git', label: 'Git' }
] as const
</script>

<template>
  <div>
    <ul class="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
      <li
        v-for="(tech, i) in primary"
        :key="tech.label"
        v-reveal="i * 45"
        class="reveal-scale reveal"
      >
        <div
          class="card-interactive group flex h-full flex-col items-center gap-2.5 px-2 py-5 text-center"
        >
          <TechIcon
            :name="tech.icon"
            class="transition-transform duration-500 ease-soft group-hover:-translate-y-1 group-hover:scale-110"
          />
          <span class="text-[0.72rem] text-ice-dim transition-colors group-hover:text-ice">
            {{ tech.label }}
          </span>
        </div>
      </li>
    </ul>

    <!-- Full inventory, grouped — the tiles above are only the headline set. -->
    <dl class="mt-8 grid gap-4 sm:grid-cols-2">
      <div
        v-for="(group, i) in skillGroups"
        :key="group.title"
        v-reveal="i * 70"
        class="reveal card p-5"
      >
        <dt class="label">{{ group.title }}</dt>
        <dd class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="chip hover:border-accent-500/40 hover:text-ice"
            >{{ item }}</span
          >
        </dd>
      </div>
    </dl>
  </div>
</template>
