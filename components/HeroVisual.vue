<script setup lang="ts">
/**
 * Focal visual for the hero.
 *
 * The reference layout puts a portrait here. There is no photo of Stepan in
 * this repo, so rather than dropping in a stock face this holds a glass code
 * panel inside the same glow-and-rings composition. To use a real portrait
 * instead, replace the <figure> below with:
 *
 *   <NuxtImg src="/images/portrait.webp" alt="Stepan Hambardzumyan"
 *            width="720" height="720" sizes="xs:80vw lg:440px"
 *            class="relative z-10 mx-auto w-[78%] rounded-full object-cover" />
 */
const codeLines = [
  [
    { t: 'const', c: 'text-violet' },
    { t: ' stepan', c: 'text-ice' },
    { t: ' = {', c: 'text-ice-faint' }
  ],
  [
    { t: '  role', c: 'text-accent-400' },
    { t: ': ', c: 'text-ice-faint' },
    { t: "'Full-Stack Developer'", c: 'text-mint' },
    { t: ',', c: 'text-ice-faint' }
  ],
  [
    { t: '  stack', c: 'text-accent-400' },
    { t: ': [', c: 'text-ice-faint' },
    { t: "'Laravel'", c: 'text-mint' },
    { t: ', ', c: 'text-ice-faint' },
    { t: "'Nuxt'", c: 'text-mint' },
    { t: '],', c: 'text-ice-faint' }
  ],
  [
    { t: '  ships', c: 'text-accent-400' },
    { t: ': [', c: 'text-ice-faint' },
    { t: "'API'", c: 'text-mint' },
    { t: ', ', c: 'text-ice-faint' },
    { t: "'UI'", c: 'text-mint' },
    { t: ', ', c: 'text-ice-faint' },
    { t: "'CI/CD'", c: 'text-mint' },
    { t: '],', c: 'text-ice-faint' }
  ],
  [
    { t: '  open', c: 'text-accent-400' },
    { t: ': ', c: 'text-ice-faint' },
    { t: 'true', c: 'text-amber' },
    { t: ',', c: 'text-ice-faint' }
  ],
  [{ t: '}', c: 'text-ice-faint' }]
]

/**
 * Chips orbit the code panel in two bands — above it and below it — because
 * the panel itself spans almost the full width at the vertical centre. The
 * two mid-band chips drop out below `sm`, where there isn't room for four
 * across without them touching.
 */
const chips = [
  // Four corners — always visible.
  { name: 'laravel' as const, label: 'Laravel', pos: 'left-0 top-[2%] sm:top-[13%]', delay: '0s', wide: false },
  { name: 'next' as const, label: 'Next.js', pos: 'right-0 top-[2%] sm:top-[14%]', delay: '2.7s', wide: false },
  { name: 'react' as const, label: 'React', pos: 'left-0 bottom-[2%] sm:bottom-[13%]', delay: '1.4s', wide: false },
  {
    name: 'typescript' as const,
    label: 'TypeScript',
    pos: 'right-0 bottom-[2%] sm:bottom-[13%]',
    delay: '0.5s',
    wide: false
  },
  // Mid-band — only from `sm` up, where there is room for three across.
  { name: 'vue' as const, label: 'Vue', pos: 'left-[26%] top-[0%]', delay: '0.9s', wide: true },
  { name: 'nuxt' as const, label: 'Nuxt', pos: 'right-[24%] top-[0%]', delay: '1.8s', wide: true },
  { name: 'nest' as const, label: 'Nest.js', pos: 'left-[32%] bottom-[0%]', delay: '2.2s', wide: true }
]
</script>

<template>
  <div class="relative mx-auto aspect-square w-full max-w-[30rem]">
    <!-- Glow. A radial gradient rather than a blurred element: same look, a
         fraction of the raster cost on mobile. -->
    <div
      class="absolute inset-[6%] animate-breathe rounded-full"
      style="
        background: radial-gradient(
          circle at 50% 45%,
          rgba(59, 91, 255, 0.42),
          rgba(124, 92, 255, 0.16) 45%,
          transparent 68%
        );
      "
      aria-hidden="true"
    />

    <!-- Concentric rings, with the outer one drifting. -->
    <svg
      class="absolute inset-0 h-full w-full text-accent-500/25"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="196" stroke="currentColor" stroke-width="1" />
      <circle cx="200" cy="200" r="152" stroke="currentColor" stroke-width="1" opacity=".7" />
      <circle cx="200" cy="200" r="108" stroke="currentColor" stroke-width="1" opacity=".45" />
    </svg>
    <!-- The rotation is applied to the <g>, not the <svg>. Spinning the
         element itself would rotate its square CSS box: at 45° the bounding
         box grows by ~41%, which pushes real horizontal scroll onto the page
         on narrow screens. An SVG-internal transform never touches the box. -->
    <svg
      class="absolute inset-0 h-full w-full text-accent-400/40"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <g class="animate-spin-slow [transform-box:view-box] [transform-origin:center]">
        <circle
          cx="200"
          cy="200"
          r="174"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-dasharray="3 14"
          stroke-linecap="round"
        />
      </g>
    </svg>

    <!-- Code panel -->
    <figure
      class="absolute left-1/2 top-1/2 z-10 w-[92%] max-w-[24rem] -translate-x-1/2 -translate-y-1/2
        overflow-hidden rounded-card border border-[var(--line-strong)] bg-ink-850/95 shadow-card backdrop-blur"
    >
      <div class="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
        <span class="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span class="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span class="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <span class="ml-2 font-mono text-[0.66rem] text-ice-faint">stepan.ts</span>
      </div>

      <figcaption class="sr-only">
        A code snippet describing Stepan Hambardzumyan as a full-stack developer working with
        Laravel and Nuxt, building APIs, interfaces and CI/CD pipelines, and open to work.
      </figcaption>

      <pre
        class="overflow-x-auto px-4 py-4 font-mono text-[0.7rem] leading-[1.85] sm:text-xs"
        aria-hidden="true"
      ><code class="block"><span
          v-for="(line, i) in codeLines"
          :key="i"
          class="type-line"
          :class="i === codeLines.length - 1 ? 'caret' : ''"
          :style="{ '--type-delay': `${700 + i * 420}ms` }"
        ><span v-for="(part, j) in line" :key="j" :class="part.c">{{ part.t }}</span></span></code></pre>
    </figure>

    <!-- Floating tech chips -->
    <div
      v-for="chip in chips"
      :key="chip.label"
      class="absolute z-20 flex animate-floaty items-center gap-1.5 rounded-xl border border-[var(--line-strong)]
        bg-ink-800/90 px-2.5 py-1.5 shadow-card backdrop-blur"
      :class="[chip.pos, chip.wide ? 'hidden sm:flex' : '']"
      :style="{ animationDelay: chip.delay }"
      aria-hidden="true"
    >
      <TechIcon :name="chip.name" class="!h-4 !w-4" />
      <span class="font-mono text-[0.6rem] text-ice-dim">{{ chip.label }}</span>
    </div>
  </div>
</template>
