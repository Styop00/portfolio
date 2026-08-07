<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="top" class="relative scroll-mt-28 pb-16 pt-28 sm:pb-24 sm:pt-36">
    <div class="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <div>
        <p class="rise text-base text-ice-dim">Hello, I'm</p>

        <h1 class="rise mt-3 text-display-xl font-bold" style="--rise-delay: 90ms">
          {{ site.name.split(' ')[0] }}
          <span class="mt-1 block text-gradient">Full-Stack Developer</span>
        </h1>

        <p
          class="rise mt-6 max-w-measure text-base leading-relaxed text-ice-dim sm:text-[1.05rem]"
          style="--rise-delay: 180ms"
        >
          I build scalable web platforms end to end — Laravel and Node on the back, Vue, Nuxt and
          Next on the front, and the CI/CD that ships them.
        </p>

        <div class="rise mt-9 flex flex-wrap items-center gap-3" style="--rise-delay: 270ms">
          <NuxtLink to="/projects" class="btn-primary">
            <AppIcon name="folder" :size="16" />
            View my work
          </NuxtLink>
          <a :href="`mailto:${site.email}`" class="btn-ghost">
            <AppIcon name="send" :size="15" />
            Contact me
          </a>
        </div>

        <div class="rise mt-8 flex flex-wrap items-center gap-6" style="--rise-delay: 360ms">
          <p class="flex items-center gap-2.5 text-sm text-ice-dim">
            <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span class="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-mint" />
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
            </span>
            Available for work
          </p>
          <p class="flex items-center gap-2 text-sm text-ice-faint">
            <AppIcon name="pin" :size="15" />
            {{ site.location }}
          </p>
        </div>
      </div>

      <div class="rise" style="--rise-delay: 240ms">
        <HeroVisual />
      </div>
    </div>
  </section>
</template>
