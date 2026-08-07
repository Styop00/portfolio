<script setup lang="ts">
import { experience, languages, site, softSkills, stats } from '~/data/site'
import { projects } from '~/data/projects'
import { useJsonLd } from '~/composables/useJsonLd'

const description = `Full-stack developer in ${site.location} with 4+ years building scalable web platforms — Laravel, Vue, Nuxt, React, Next.js and Node. Case studies from Bookera, Tournik, OpenPadel, BioPrintHub and more.`

useHead({ titleTemplate: null })

useSeoMeta({
  title: `${site.name} — ${site.title}`,
  description,
  ogTitle: `${site.name} — ${site.title}`,
  ogDescription: description,
  ogUrl: `${site.url}/`,
  ogImage: `${site.url}/images/og-default.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${site.name}, ${site.title}`,
  twitterTitle: `${site.name} — ${site.title}`,
  twitterDescription: description,
  twitterImage: `${site.url}/images/og-default.png`
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/` }] })

const statCards = [
  { ...stats[0], icon: 'calendar' as const, tint: 'bg-accent-500/12 text-accent-400' },
  { ...stats[1], icon: 'folder' as const, tint: 'bg-violet/12 text-violet' },
  { ...stats[2], icon: 'trending' as const, tint: 'bg-mint/12 text-mint' },
  { ...stats[3], icon: 'users' as const, tint: 'bg-amber/12 text-amber' }
]

useJsonLd([
  {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    telephone: site.phone,
    url: `${site.url}/`,
    image: `${site.url}/images/og-default.png`,
    description: site.summary,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yerevan',
      addressCountry: 'AM'
    },
    worksFor: experience
      .filter((job) => job.current)
      .map((job) => ({ '@type': 'Organization', name: job.company })),
    knowsLanguage: languages.map((language) => language.name),
    knowsAbout: [
      'Laravel',
      'PHP',
      'Vue.js',
      'Nuxt.js',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'REST API design',
      'PostgreSQL',
      'MySQL',
      'CI/CD'
    ],
    sameAs: [site.github, site.linkedin, site.telegram]
  },
  {
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    url: `${site.url}/`,
    name: `${site.name} — ${site.title}`,
    description,
    about: { '@id': `${site.url}/#person` },
    primaryImageOfPage: `${site.url}/images/og-default.png`
  }
])
</script>

<template>
  <div class="pb-16">
    <HeroSection />

    <div class="shell space-y-6 sm:space-y-8">
      <!-- About -->
      <section id="about" class="panel scroll-mt-24 p-6 sm:p-9">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <div v-reveal class="reveal">
            <SectionLabel text="About me" />
            <h2 class="mt-4 text-display-md font-bold">Who I Am</h2>

            <div class="mt-5 space-y-4 text-sm leading-relaxed text-ice-dim">
              <p>
                I'm a full-stack developer based in {{ site.location }} with more than four years of
                experience building web applications that have to hold up in production — not just
                in a demo.
              </p>
              <p>
                Laravel and Node on the back end, Vue/Nuxt and React/Next on the front, carefully
                designed REST APIs in between, and the database work that keeps it fast as the data
                grows. I own the delivery side too: CI/CD, deployments and server configuration.
              </p>
            </div>

            <ul class="mt-6 flex flex-wrap gap-2">
              <li v-for="skill in softSkills" :key="skill" class="chip">{{ skill }}</li>
            </ul>

            <a href="#experience" class="btn-ghost mt-7">
              See my experience
              <AppIcon name="arrowRight" :size="15" />
            </a>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <StatCard
              v-for="(stat, i) in statCards"
              :key="stat.label"
              v-reveal="i * 80"
              class="reveal"
              :value="stat.value"
              :label="stat.label"
              :icon="stat.icon"
              :tint="stat.tint"
            />
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="panel scroll-mt-24 p-6 sm:p-9">
        <div v-reveal class="reveal">
          <SectionLabel text="My skills" />
          <h2 class="mt-4 text-display-md font-bold">Technologies I Work With</h2>
          <p class="mt-4 max-w-measure text-sm leading-relaxed text-ice-dim">
            The stack behind the platforms below — and the tooling that ships them.
          </p>
        </div>

        <div class="mt-9">
          <SkillsGrid />
        </div>
      </section>

      <!-- Work -->
      <section id="work" class="panel scroll-mt-24 p-6 sm:p-9">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div v-reveal class="reveal">
            <SectionLabel text="Featured projects" />
            <h2 class="mt-4 text-display-md font-bold">Some Things I've Built</h2>
            <p class="mt-4 max-w-measure text-sm leading-relaxed text-ice-dim">
              Five products running in production. Each one has a case study covering what it does
              and exactly what I built.
            </p>
          </div>
          <NuxtLink v-reveal="80" to="/projects" class="reveal btn-ghost">
            View all projects
            <AppIcon name="arrowRight" :size="15" />
          </NuxtLink>
        </div>

        <ul class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(project, i) in projects"
            :key="project.slug"
            v-reveal="(i % 3) * 90"
            class="reveal"
          >
            <ProjectCard :project="project" />
          </li>
        </ul>
      </section>

      <!-- Experience -->
      <section id="experience" class="panel scroll-mt-24 p-6 sm:p-9">
        <div v-reveal class="reveal">
          <SectionLabel text="Experience" />
          <h2 class="mt-4 text-display-md font-bold">Work Experience</h2>
        </div>

        <div class="mt-9">
          <ExperienceTimeline />
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="panel scroll-mt-24 p-6 sm:p-9">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <div v-reveal class="reveal">
            <SectionLabel text="Contact" />
            <h2 class="mt-4 text-display-md font-bold">Let's Build Something</h2>
            <p class="mt-4 max-w-measure text-sm leading-relaxed text-ice-dim">
              Open to full-time roles and freelance projects. Email or Telegram reach me fastest —
              tap any card to copy.
            </p>
            <p class="mt-6 flex items-center gap-2.5 text-sm text-ice-dim">
              <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span
                  class="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-mint"
                />
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
              </span>
              Available for work
            </p>
          </div>

          <ContactLinks />
        </div>
      </section>
    </div>
  </div>
</template>
