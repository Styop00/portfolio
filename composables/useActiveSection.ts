/**
 * Tracks which section is currently in view so the nav and rail can highlight
 * it. Re-scans whenever `trigger` changes, so client-side route changes get a
 * fresh set of targets instead of a stale observer.
 *
 * Uses a band across the upper-middle of the viewport rather than a plain
 * threshold, so short sections still register and the highlight doesn't
 * flicker between neighbours mid-scroll.
 */
export function useActiveSection(ids: readonly string[], trigger: () => unknown) {
  const active = ref('')

  if (import.meta.server) return active

  let observer: IntersectionObserver | undefined
  const visible = new Map<string, number>()

  function setup() {
    observer?.disconnect()
    visible.clear()

    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!targets.length) {
      active.value = ''
      return
    }

    active.value = targets[0].id

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio)
          else visible.delete(entry.target.id)
        }
        if (!visible.size) return
        active.value = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0]
      },
      { rootMargin: '-18% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    targets.forEach((el) => observer!.observe(el))
  }

  onMounted(() => {
    watch(
      trigger,
      async () => {
        await nextTick()
        setup()
      },
      { immediate: true }
    )
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}
