<script setup lang="ts">
/** Small inline UI + brand icon set. Kept hand-drawn so nothing extra ships. */
const props = withDefaults(
  defineProps<{
    name: keyof typeof icons
    size?: number | string
  }>(),
  { size: 18 }
)

const icons = {
  github: {
    fill: true,
    d: 'M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.18 9.06 7.6 10.53.56.1.76-.24.76-.53v-2.07c-3.09.67-3.74-1.3-3.74-1.3-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.76 1.02.76 2.06v3.05c0 .3.2.64.77.53 4.41-1.47 7.59-5.63 7.59-10.53C23.1 5.33 18.27.5 12 .5Z'
  },
  linkedin: {
    fill: true,
    d: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z'
  },
  telegram: {
    fill: true,
    d: 'M23.07 3.32a1.5 1.5 0 0 0-1.55-.24L1.6 11.03a1.5 1.5 0 0 0 .1 2.82l4.6 1.5 1.75 5.44a1.5 1.5 0 0 0 2.47.6l2.6-2.45 4.5 3.3a1.5 1.5 0 0 0 2.36-.9l4-16.5a1.5 1.5 0 0 0-.9-1.52ZM9.4 14.3l-.62 4.05-1.24-3.86 9.5-6.5-7.64 6.3Z'
  },

  // Rail / navigation
  home: { d: 'M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z' },
  user: { d: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.5a7.5 7.5 0 0 1 15 0' },
  layers: { d: 'M12 3 2.5 8 12 13l9.5-5L12 3ZM3 12.5 12 17l9-4.5M3 16.8 12 21.3l9-4.5' },
  folder: { d: 'M3 6.5h6l2 2.5h10V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z' },
  code: { d: 'm9 8-5 4 5 4m6-8 5 4-5 4' },
  mail: { d: 'M3 6.5h18v11H3zM3.6 7l8.4 6 8.4-6' },
  calendar: { d: 'M4 6.5h16V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM8 3v5m8-5v5M4 11h16' },
  users: { d: 'M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20a6.5 6.5 0 0 1 13 0M16 5.5a3.5 3.5 0 0 1 0 7M17.5 14.2A6.5 6.5 0 0 1 21.5 20' },
  star: { d: 'm12 3.5 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.8l6-.8z' },
  trending: { d: 'M3 17.5 9.5 11l4 4L21 7.5m0 0h-5.5M21 7.5V13' },

  // Arrows and utility
  arrowRight: { d: 'M4 12h15m0 0-6-6m6 6-6 6' },
  arrowLeft: { d: 'M20 12H5m0 0 6-6m-6 6 6 6' },
  arrowUp: { d: 'M12 20V5m0 0-6 6m6-6 6 6' },
  arrowUpRight: { d: 'M6 18 18 6m0 0H8m10 0v10' },
  download: { d: 'M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 19h16' },
  send: { d: 'M21 3 10.5 13.5M21 3l-6.6 18-3.9-7.5L3 9.6 21 3Z' },
  external: { d: 'M14 4h6v6M20 4l-8.5 8.5M18 14.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5' },
  copy: { d: 'M9 9h11v11H9zM5 15V4h11v1' },
  check: { d: 'm4 12.5 5.5 5.5L20 6.5' },
  menu: { d: 'M4 7h16M4 12h16M4 17h16' },
  close: { d: 'M5 5l14 14M19 5 5 19' },
  pin: { d: 'M12 21s7-5.4 7-10.6A7 7 0 0 0 5 10.4C5 15.6 12 21 12 21Zm0-8.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z' }
} as const

const icon = computed(() => icons[props.name])
const filled = computed(() => 'fill' in icon.value && icon.value.fill)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="filled ? 'currentColor' : 'none'"
    :stroke="filled ? 'none' : 'currentColor'"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    class="shrink-0"
  >
    <path :d="icon.d" />
  </svg>
</template>
