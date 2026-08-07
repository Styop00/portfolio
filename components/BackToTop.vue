<script setup lang="ts">
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 1000
}

function toTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    type="button"
    aria-label="Back to top"
    class="group fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-xl border
      border-[var(--line-strong)] bg-ink-850/90 text-ice-dim shadow-card backdrop-blur transition-all
      duration-500 ease-soft hover:border-accent-500/60 hover:text-accent-400 sm:right-8"
    :class="visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'"
    :tabindex="visible ? 0 : -1"
    @click="toTop"
  >
    <AppIcon
      name="arrowUp"
      :size="18"
      class="transition-transform duration-500 ease-soft group-hover:-translate-y-0.5"
    />
  </button>
</template>
