<script setup lang="ts">
/**
 * Counts a stat up when it scrolls into view.
 *
 * The server renders the final value, so no-JS and reduced-motion visitors see
 * the real number. On the client the count only kicks in for elements that
 * start below the fold — otherwise hydration would visibly reset a number the
 * visitor is already looking at.
 */
const props = defineProps<{ value: string }>()

const el = ref<HTMLElement | null>(null)
const display = ref(props.value)

// e.g. "+30%" -> ["+", "30", "%"], "4+" -> ["", "4", "+"]
const parts = props.value.match(/^(\D*)(\d+)(.*)$/)

onMounted(() => {
  if (!parts || !el.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (el.value.getBoundingClientRect().top < window.innerHeight) return

  const [, prefix, digits, suffix] = parts
  const target = Number(digits)
  display.value = `${prefix}0${suffix}`

  let frame = 0
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      observer.disconnect()
      const started = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - started) / 1100)
        const eased = 1 - Math.pow(1 - progress, 3)
        display.value = `${prefix}${Math.round(target * eased)}${suffix}`
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    },
    { threshold: 0.4 }
  )

  observer.observe(el.value)
  onBeforeUnmount(() => {
    observer.disconnect()
    cancelAnimationFrame(frame)
  })
})
</script>

<template>
  <span ref="el" class="tabular-nums">{{ display }}</span>
</template>
