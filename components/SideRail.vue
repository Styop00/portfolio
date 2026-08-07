<script setup lang="ts">
import { site } from '~/data/site'

defineProps<{ active?: string }>()

const route = useRoute()
const onHome = computed(() => route.path === '/')
const href = (id: string) => (onHome.value ? `#${id}` : `/#${id}`)

const items = [
  { id: 'top', label: 'Home', icon: 'home' as const },
  { id: 'about', label: 'About', icon: 'user' as const },
  { id: 'skills', label: 'Skills', icon: 'layers' as const },
  { id: 'work', label: 'Projects', icon: 'folder' as const },
  { id: 'experience', label: 'Experience', icon: 'code' as const },
  { id: 'contact', label: 'Contact', icon: 'mail' as const }
]

const socials = [
  { name: 'GitHub', href: site.github, icon: 'github' as const },
  { name: 'LinkedIn', href: site.linkedin, icon: 'linkedin' as const },
  { name: 'Telegram', href: site.telegram, icon: 'telegram' as const }
]
</script>

<template>
  <!-- Fixed icon rail. Desktop only: on narrow screens the same destinations
       live in the header menu, so this is redundant navigation and is hidden
       from assistive tech there too. -->
  <aside
    class="fixed inset-y-0 left-0 z-40 hidden w-[var(--rail)] flex-col items-center justify-between
      border-r border-[var(--line)] bg-ink-900/60 py-6 backdrop-blur-sm lg:flex"
  >
    <NuxtLink
      to="/"
      class="group grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-violet
        text-base font-bold text-white transition-transform duration-500 ease-soft hover:scale-110"
      aria-label="Home"
    >
      S
    </NuxtLink>

    <nav aria-label="Section shortcuts">
      <ul class="flex flex-col items-center gap-1.5">
        <li v-for="item in items" :key="item.id" class="group relative">
          <a
            :href="href(item.id)"
            class="relative grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300"
            :class="
              active === item.id
                ? 'bg-accent-500/15 text-accent-400'
                : 'text-ice-faint hover:bg-white/[0.04] hover:text-ice'
            "
          >
            <span class="sr-only">{{ item.label }}</span>
            <AppIcon :name="item.icon" :size="19" />
            <span
              v-show="active === item.id"
              class="absolute -left-[13px] h-6 w-[3px] rounded-r-full bg-accent-500"
              aria-hidden="true"
            />
          </a>

          <!-- Hover label, decorative: the link already has an accessible name. -->
          <span
            class="pointer-events-none absolute left-[3.4rem] top-1/2 z-10 -translate-y-1/2 translate-x-[-6px]
              whitespace-nowrap rounded-lg border border-[var(--line)] bg-ink-800 px-2.5 py-1.5 font-mono
              text-[0.65rem] uppercase tracking-label text-ice-dim opacity-0 transition-all duration-300
              ease-soft group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            {{ item.label }}
          </span>
        </li>
      </ul>
    </nav>

    <ul class="flex flex-col items-center gap-1">
      <li v-for="social in socials" :key="social.name">
        <a
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${site.name} on ${social.name}`"
          class="grid h-10 w-10 place-items-center rounded-xl text-ice-faint transition-all duration-300
            hover:-translate-y-0.5 hover:text-accent-400"
        >
          <AppIcon :name="social.icon" :size="16" />
        </a>
      </li>
    </ul>
  </aside>
</template>
