/**
 * `v-reveal` — adds `.is-in` to an element the first time it scrolls into view,
 * which is what the `.reveal` CSS class transitions against.
 *
 * The hidden state is defined in CSS, so users with `prefers-reduced-motion`
 * (and anyone without JS) see the content immediately and this never runs.
 *
 * Optional binding value is a stagger delay in milliseconds: `v-reveal="120"`.
 */
let observer: IntersectionObserver | undefined

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal on intersection, but also for anything already scrolled
          // past — after scroll restoration or a deep link, content above the
          // viewport should simply be there, not wait to be scrolled back to.
          const alreadyPassed = entry.boundingClientRect.bottom < 0
          if (!entry.isIntersecting && !alreadyPassed) continue
          entry.target.classList.add('is-in')
          observer!.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    )
  }
  return observer
}

export default defineNuxtPlugin((nuxtApp) => {
  // Registered on both server and client so SSR can resolve the directive;
  // `mounted`/`unmounted` only ever run in the browser.
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('is-in')
        return
      }
      if (typeof binding.value === 'number' && binding.value > 0) {
        el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      }
      getObserver().observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    }
  })
})
