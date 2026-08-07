<script setup lang="ts">
/**
 * Brand marks for the skills grid.
 *
 * Where a logo is simple enough to reproduce faithfully it is drawn properly;
 * where it is a detailed illustration (Laravel's origami L, MySQL's dolphin)
 * a brand-coloured letterform stands in rather than a bad tracing. The uniform
 * tile around each glyph is what makes the mix read as one set.
 *
 * `v-html` here only ever renders these hard-coded constants — no external or
 * user-supplied markup reaches it.
 */
defineProps<{ name: keyof typeof marks }>()

const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace'
const sans = 'Inter, ui-sans-serif, system-ui, sans-serif'

/** Letterform fallback: brand-coloured monogram, no fake logo. */
function monogram(text: string, color: string, size = 13) {
  return `<text x="16" y="16" text-anchor="middle" dominant-baseline="central" font-family="${sans}" font-size="${size}" font-weight="700" fill="${color}" letter-spacing="-0.5">${text}</text>`
}

const marks = {
  laravel: monogram('LV', '#FF2D20'),
  filament: monogram('FL', '#FDAE4B'),
  livewire: monogram('LW', '#FB70A9'),
  nest: monogram('NS', '#E0234E'),
  mysql: monogram('My', '#00758F'),
  postgres: monogram('PG', '#4E8FD6'),
  redis: monogram('RD', '#E4574C'),
  antdesign: monogram('AD', '#1677FF'),

  vue: `<path fill="#41B883" d="M25.6 4h5.4L16 29 1 4h11.4L16 10.2 19.5 4z"/><path fill="#8FDCB4" d="M12.4 4 16 10.2 19.5 4h5L16 19 7.4 4z"/>`,

  nuxt: `<path fill="#00DC82" d="M12.6 5.4 24.2 26H1z"/><path fill="#00DC82" opacity=".55" d="M23.4 11.6 31 26h-8.6l-3.8-7z"/>`,

  react: `<circle cx="16" cy="16" r="2.6" fill="#61DAFB"/>
    <g fill="none" stroke="#61DAFB" stroke-width="1.5">
      <ellipse cx="16" cy="16" rx="13" ry="5"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/>
    </g>`,

  next: `<circle cx="16" cy="16" r="13.5" fill="none" stroke="#E8ECF5" stroke-width="1.6"/>
    <path fill="#E8ECF5" d="M11 10h2.1l9.2 12.9-1.7 1.2L11 10.6z"/>
    <path fill="#E8ECF5" d="M10.6 10H12v12h-1.4zM20 10h1.4v8.4H20z"/>`,

  typescript: `<rect x="1.5" y="1.5" width="29" height="29" rx="5" fill="#3178C6"/>
    <text x="16" y="17" text-anchor="middle" dominant-baseline="central" font-family="${sans}" font-size="13" font-weight="700" fill="#fff">TS</text>`,

  javascript: `<rect x="1.5" y="1.5" width="29" height="29" rx="5" fill="#F7DF1E"/>
    <text x="16" y="17" text-anchor="middle" dominant-baseline="central" font-family="${sans}" font-size="13" font-weight="700" fill="#12130F">JS</text>`,

  php: `<ellipse cx="16" cy="16" rx="15" ry="8.2" fill="#777BB4"/>
    <text x="16" y="16.5" text-anchor="middle" dominant-baseline="central" font-family="${sans}" font-size="9.5" font-weight="700" font-style="italic" fill="#fff">php</text>`,

  tailwind: `<path fill="#38BDF8" d="M11 12.6c.8-3.3 2.9-4.9 6.2-4.9 5 0 5.6 3.7 8.1 4.3 1.6.4 3.1-.2 4.3-1.8-.8 3.3-2.9 4.9-6.2 4.9-5 0-5.6-3.7-8.1-4.3-1.6-.4-3.1.2-4.3 1.8Zm-6.6 7.5c.8-3.3 2.9-4.9 6.2-4.9 5 0 5.6 3.7 8.1 4.3 1.6.4 3.1-.2 4.3-1.8-.8 3.3-2.9 4.9-6.2 4.9-5 0-5.6-3.7-8.1-4.3-1.6-.4-3.1.2-4.3 1.8Z"/>`,

  node: `<path fill="#5FA04E" d="M16 2.2 28.6 9.4v14.2L16 30.8 3.4 23.6V9.4z"/>
    <text x="16" y="17" text-anchor="middle" dominant-baseline="central" font-family="${mono}" font-size="9" font-weight="700" fill="#0B1A08">n</text>`,

  git: `<g fill="none" stroke="#F05032" stroke-width="2" stroke-linecap="round">
      <path d="M8 4v14a4 4 0 0 0 4 4h8"/>
    </g>
    <circle cx="8" cy="5" r="3.4" fill="#F05032"/>
    <circle cx="8" cy="26" r="3.4" fill="#F05032"/>
    <circle cx="24" cy="22" r="3.4" fill="#F05032"/>`,

  api: `<g fill="none" stroke="#7C97FF" stroke-width="1.8" stroke-linecap="round">
      <path d="M12 8 5 16l7 8M20 8l7 8-7 8"/>
    </g>`,

  cicd: `<g fill="none" stroke="#34D399" stroke-width="1.8" stroke-linecap="round">
      <path d="M27 16a11 11 0 1 1-3.6-8.1"/><path d="M27 5v6h-6"/>
    </g>`
} as const
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    viewBox="0 0 32 32"
    width="30"
    height="30"
    aria-hidden="true"
    focusable="false"
    class="shrink-0"
    v-html="marks[name]"
  />
</template>
