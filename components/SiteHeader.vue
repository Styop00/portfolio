<script setup lang="ts">
import { site } from '~/data/site'

defineProps<{ active?: string }>()

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const panel = ref<HTMLElement | null>(null)

const links = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

const onHome = computed(() => route.path === '/')
const href = (id: string) => (onHome.value ? `#${id}` : `/#${id}`)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.style.removeProperty('overflow')
})

watch(open, async (isOpen) => {
  document.documentElement.style.overflow = isOpen ? 'hidden' : ''
  if (!isOpen) return
  await nextTick()
  panel.value?.querySelector<HTMLAnchorElement>('a')?.focus()
})

watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft lg:left-[var(--rail)]"
    :class="
      scrolled
        ? 'border-b border-[var(--line)] bg-ink-950/85'
        : 'border-b border-transparent'
    "
  >
    <!-- The bar's own background/blur tracks scroll position only, not `open`:
         the full-screen menu below (z-65) completely covers this header
         (z-50) while it's open, so toggling the bar's backdrop-filter on
         every open/close was pure wasted paint — and it only fired when the
         page was scrolled, which is why the menu felt slow specifically then. -->
    <div class="shell flex h-[4.5rem] items-center justify-between gap-6">
      <NuxtLink to="/" class="flex items-center gap-2.5 lg:hidden">
        <span
          class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-violet text-sm font-bold text-white"
          aria-hidden="true"
          >S</span
        >
        <span class="text-sm font-semibold tracking-tight">Stepan</span>
      </NuxtLink>

      <!-- Sits right on desktop; the rail carries the identity on the left. -->
      <nav class="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.id"
          :href="href(link.id)"
          class="relative px-3.5 py-2 text-sm transition-colors duration-300"
          :class="active === link.id ? 'text-accent-400' : 'text-ice-dim hover:text-ice'"
          :aria-current="active === link.id ? 'true' : undefined"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-accent-500
              transition-transform duration-500 ease-soft"
            :class="active === link.id ? 'scale-x-100' : 'scale-x-0'"
            aria-hidden="true"
          />
        </a>
      </nav>

      <button
        type="button"
        class="relative z-[70] grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)]
          text-ice transition-colors duration-300 hover:border-accent-500/50 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" :size="19" />
      </button>
    </div>

    <div
      v-show="open"
      id="mobile-nav"
      ref="panel"
      class="fixed inset-0 z-[65] flex flex-col bg-ink-950/98 lg:hidden"
    >
      <nav class="shell flex flex-1 flex-col justify-center backdrop-blur-xl gap-2 py-24" aria-label="Mobile">
        <a
          v-for="(link, i) in links"
          :key="link.id"
          :href="href(link.id)"
          class="group flex items-center justify-between rounded-card border border-[var(--line)]
            bg-ink-850/60 px-5 py-4 transition-colors duration-300 hover:border-accent-500/45"
          :class="open ? 'rise' : ''"
          :style="{ '--rise-delay': `${i * 55}ms` }"
          @click="open = false"
        >
          <span class="flex items-baseline gap-3">
            <span class="font-mono text-[0.65rem] text-accent-500">{{
              String(i + 1).padStart(2, '0')
            }}</span>
            <span class="text-lg font-medium">{{ link.label }}</span>
          </span>
          <AppIcon
            name="arrowUpRight"
            :size="16"
            class="text-ice-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        <a
          :href="`mailto:${site.email}`"
          class="btn-primary mt-4"
          :class="open ? 'rise' : ''"
          style="--rise-delay: 340ms"
        >
          <AppIcon name="send" :size="15" />
          Contact me
        </a>
      </nav>
    </div>
  </header>
</template>
