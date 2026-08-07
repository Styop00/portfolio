<script setup lang="ts">
import { site } from '~/data/site'
import { projects } from '~/data/projects'

const year = new Date().getFullYear()

const socials = [
  { name: 'GitHub', href: site.github, icon: 'github' as const },
  { name: 'LinkedIn', href: site.linkedin, icon: 'linkedin' as const },
  { name: 'Telegram', href: site.telegram, icon: 'telegram' as const }
]
</script>

<template>
  <footer class="mt-8 border-t border-[var(--line)]">
    <div class="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2">
        <NuxtLink to="/" class="inline-flex items-baseline text-xl font-bold tracking-tight">
          Stepan<span class="text-accent-500">.</span>
        </NuxtLink>
        <p class="mt-4 max-w-measure text-sm leading-relaxed text-ice-dim">{{ site.tagline }}</p>
        <ul class="mt-6 flex gap-2.5">
          <li v-for="social in socials" :key="social.name">
            <a
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${site.name} on ${social.name}`"
              class="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] text-ice-faint
                transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-400"
            >
              <AppIcon :name="social.icon" :size="16" />
            </a>
          </li>
        </ul>
      </div>

      <nav aria-label="Case studies">
        <h2 class="label">Case studies</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="project in projects" :key="project.slug">
            <NuxtLink :to="`/projects/${project.slug}`" class="link-soft">{{ project.name }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="label">Get in touch</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li>
            <a :href="`mailto:${site.email}`" class="link-soft [overflow-wrap:anywhere]">{{
              site.email
            }}</a>
          </li>
          <li><a :href="`tel:${site.phoneHref}`" class="link-soft">{{ site.phone }}</a></li>
          <li class="text-ice-faint">{{ site.location }}</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-[var(--line)]">
      <div
        class="shell flex flex-col gap-2 py-5 text-xs text-ice-faint sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>Built with Nuxt · Deployed on GitHub Pages</p>
      </div>
    </div>
  </footer>
</template>
