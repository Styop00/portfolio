<script setup lang="ts">
import { site } from '~/data/site'
import { findProject, projectNeighbours } from '~/data/projects'
import { useJsonLd } from '~/composables/useJsonLd'

const route = useRoute()
const slug = String(route.params.slug)
const project = findProject(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const { previous, next } = projectNeighbours(slug)
const canonical = `${site.url}/projects/${project.slug}`
const ogImage = `${site.url}${project.screenshot}`

useSeoMeta({
  title: `${project.name} — case study`,
  description: project.metaDescription,
  ogTitle: `${project.name} — case study · ${site.name}`,
  ogDescription: project.metaDescription,
  ogUrl: canonical,
  ogType: 'article',
  ogImage,
  ogImageAlt: project.screenshotAlt,
  twitterTitle: `${project.name} — case study · ${site.name}`,
  twitterDescription: project.metaDescription,
  twitterImage: ogImage
})

useHead({ link: [{ rel: 'canonical', href: canonical }] })

useJsonLd([
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${site.url}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name, item: canonical }
    ]
  },
  {
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: `${project.name} — case study`,
    description: project.metaDescription,
    primaryImageOfPage: ogImage,
    mainEntity: { '@id': `${canonical}#work` }
  },
  {
    '@type': 'CreativeWork',
    '@id': `${canonical}#work`,
    name: project.name,
    description: project.tagline,
    url: project.liveUrl,
    image: ogImage,
    author: { '@id': `${site.url}/#person` },
    creator: { '@id': `${site.url}/#person` },
    keywords: project.stack.join(', ')
  }
])
</script>

<template>
  <article v-if="project" class="pb-16">
    <ProjectHero :project="project" />

    <div class="shell mt-8 space-y-6 sm:space-y-8">
      <!-- Overview -->
      <section class="panel p-6 sm:p-9">
        <div class="grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-12">
          <div v-reveal class="reveal">
            <SectionLabel text="Overview" />
            <h2 class="mt-4 text-display-sm font-bold">What it is</h2>
          </div>
          <div v-reveal="80" class="reveal space-y-4">
            <p
              v-for="(paragraph, i) in project.overview"
              :key="paragraph"
              class="leading-relaxed"
              :class="i === 0 ? 'text-base text-ice' : 'text-sm text-ice-dim'"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="mt-9">
          <ProjectGallery :project="project" />
        </div>
      </section>

      <!-- Contribution -->
      <section class="panel p-6 sm:p-9">
        <div class="grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-12">
          <div v-reveal class="reveal">
            <SectionLabel text="What I built" />
            <h2 class="mt-4 text-display-sm font-bold">My contribution</h2>
            <ul class="mt-6 flex flex-wrap gap-2">
              <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
            </ul>
          </div>

          <ol class="space-y-3">
            <li
              v-for="(item, i) in project.contributions"
              :key="item"
              v-reveal="i * 70"
              class="reveal card flex gap-4 p-5 transition-colors duration-500 hover:border-accent-500/40"
            >
              <span
                class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent-500/12 font-mono text-[0.68rem] text-accent-400"
                aria-hidden="true"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <p class="text-sm leading-relaxed text-ice-dim">{{ item }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- Highlights -->
      <section class="panel p-6 sm:p-9">
        <div v-reveal class="reveal">
          <SectionLabel text="Highlights" />
          <h2 class="mt-4 text-display-sm font-bold">What stands out</h2>
        </div>

        <dl class="mt-8 grid gap-4 sm:grid-cols-2">
          <div
            v-for="(highlight, i) in project.highlights"
            :key="highlight.label"
            v-reveal="i * 70"
            class="reveal card-interactive p-5"
          >
            <dt class="label text-accent-400">{{ highlight.label }}</dt>
            <dd class="mt-2.5 text-sm leading-relaxed text-ice">{{ highlight.value }}</dd>
          </div>
        </dl>

        <a
          v-reveal="140"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="reveal card-interactive group mt-5 flex items-center justify-between gap-6 p-6"
        >
          <span>
            <span class="label">Live site</span>
            <span
              class="mt-2 block text-display-sm font-bold transition-colors duration-300 group-hover:text-accent-400"
            >
              {{ project.displayUrl }}
            </span>
          </span>
          <AppIcon
            name="arrowUpRight"
            :size="26"
            class="text-ice-faint transition-all duration-500 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-400"
          />
        </a>
      </section>

      <!-- Prev / next -->
      <nav class="grid gap-5 sm:grid-cols-2" aria-label="Case study navigation">
        <NuxtLink
          v-if="previous"
          :to="`/projects/${previous.slug}`"
          class="card-interactive group flex items-center gap-4 p-6"
        >
          <AppIcon
            name="arrowLeft"
            :size="18"
            class="text-ice-faint transition-transform duration-500 ease-soft group-hover:-translate-x-1 group-hover:text-accent-400"
          />
          <span>
            <span class="label">Previous</span>
            <span class="mt-1.5 block font-semibold group-hover:text-accent-400">{{
              previous.name
            }}</span>
          </span>
        </NuxtLink>

        <NuxtLink
          v-if="next"
          :to="`/projects/${next.slug}`"
          class="card-interactive group flex items-center justify-end gap-4 p-6 text-right sm:col-start-2"
        >
          <span>
            <span class="label">Next</span>
            <span class="mt-1.5 block font-semibold group-hover:text-accent-400">{{
              next.name
            }}</span>
          </span>
          <AppIcon
            name="arrowRight"
            :size="18"
            class="text-ice-faint transition-transform duration-500 ease-soft group-hover:translate-x-1 group-hover:text-accent-400"
          />
        </NuxtLink>
      </nav>
    </div>
  </article>
</template>
