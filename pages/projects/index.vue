<script setup lang="ts">
import { site } from '~/data/site'
import { projects } from '~/data/projects'
import { useJsonLd } from '~/composables/useJsonLd'

const title = 'Projects'
const description =
  'Five production platforms built by Stepan Hambardzumyan — Bookera, Tournik, OpenPadel AI, BioPrintHub and leobaghdasaryan.com — each with a case study covering the product and the work behind it.'

useSeoMeta({
  title,
  description,
  ogTitle: `${title} · ${site.name}`,
  ogDescription: description,
  ogUrl: `${site.url}/projects`,
  ogImage: `${site.url}/images/og-default.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `Projects by ${site.name}`,
  twitterTitle: `${title} · ${site.name}`,
  twitterDescription: description,
  twitterImage: `${site.url}/images/og-default.png`
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/projects` }] })

useJsonLd([
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${site.url}/projects` }
    ]
  },
  {
    '@type': 'CollectionPage',
    '@id': `${site.url}/projects#webpage`,
    url: `${site.url}/projects`,
    name: `${title} · ${site.name}`,
    description,
    about: { '@id': `${site.url}/#person` },
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.name,
      description: project.tagline,
      url: `${site.url}/projects/${project.slug}`
    }))
  }
])
</script>

<template>
  <div class="pb-16 pt-28 sm:pt-32">
    <div class="shell">
      <div class="rise">
        <SectionLabel text="Portfolio" />
        <h1 class="mt-4 text-display-lg font-bold">
          Things I've <span class="text-gradient">Built</span>
        </h1>
        <p class="mt-5 max-w-measure text-base leading-relaxed text-ice-dim">
          Five products running in production — a multi-tenant SaaS, a sports ERP, an API
          marketplace, a research repository and a composer's portfolio. Open any one for the full
          case study.
        </p>
      </div>

      <ul class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(project, i) in projects"
          :key="project.slug"
          v-reveal="(i % 3) * 90"
          :class="i === 0 ? '' : 'reveal'"
        >
          <ProjectCard :project="project" :heading-level="2" :priority="i === 0" />
        </li>
      </ul>

      <section v-reveal class="reveal panel mt-8 p-8 text-center sm:p-12">
        <h2 class="text-display-sm font-bold">Got something you want built?</h2>
        <p class="mx-auto mt-3 max-w-measure text-sm text-ice-dim">
          I'm open to full-time roles and freelance projects.
        </p>
        <NuxtLink to="/#contact" class="btn-primary mt-7">
          <AppIcon name="send" :size="15" />
          Get in touch
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
