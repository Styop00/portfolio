<template>
  <!-- Reading progress, driven entirely by `animation-timeline: scroll()`.
       No scroll listener; browsers without support simply don't show it. -->
  <div
    class="progress-track pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
    aria-hidden="true"
  >
    <div
      class="progress-bar h-full w-full origin-left scale-x-0 bg-gradient-to-r from-accent-500 to-violet"
    />
  </div>
</template>

<style scoped>
.progress-track {
  display: none;
}

@supports (animation-timeline: scroll()) {
  .progress-track {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .progress-track {
    display: none;
  }
}
</style>
