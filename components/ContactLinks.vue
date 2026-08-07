<script setup lang="ts">
import { site } from '~/data/site'
import { useCopyToClipboard } from '~/composables/useCopyToClipboard'

const { copiedKey, copy } = useCopyToClipboard()

const direct = [
  {
    key: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: 'mail' as const,
    tint: 'bg-accent-500/12 text-accent-400',
    copyLabel: 'Copy email address'
  },
  {
    key: 'Phone',
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    icon: 'send' as const,
    tint: 'bg-mint/12 text-mint',
    copyLabel: 'Copy phone number'
  }
]

const socials = [
  {
    key: 'LinkedIn',
    value: site.linkedinHandle,
    href: site.linkedin,
    icon: 'linkedin' as const,
    tint: 'bg-accent-500/12 text-accent-400'
  },
  {
    key: 'GitHub',
    value: site.githubHandle,
    href: site.github,
    icon: 'github' as const,
    tint: 'bg-white/[0.07] text-ice'
  },
  {
    key: 'Telegram',
    value: site.telegramHandle,
    href: site.telegram,
    icon: 'telegram' as const,
    tint: 'bg-violet/12 text-violet'
  }
]
</script>

<template>
  <div class="space-y-4">
    <p class="sr-only" role="status" aria-live="polite">
      {{ copiedKey ? `${copiedKey} copied to clipboard` : '' }}
    </p>

    <!-- Full width, not two-up: the email address is long enough that a half
         column would truncate the one thing people came here to read. -->
    <div class="grid gap-4">
      <div
        v-for="(item, i) in direct"
        :key="item.key"
        v-reveal="i * 80"
        class="reveal card group flex min-w-0 items-center gap-4 p-5 transition-colors duration-500 hover:border-accent-500/45"
      >
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl" :class="item.tint" aria-hidden="true">
          <AppIcon :name="item.icon" :size="18" />
        </span>

        <div class="min-w-0 flex-1">
          <p class="label">{{ item.key }}</p>
          <a
            :href="item.href"
            class="mt-1 block truncate text-sm font-medium transition-colors duration-300 hover:text-accent-400"
          >
            {{ item.value }}
          </a>
        </div>

        <button
          type="button"
          :aria-label="item.copyLabel"
          class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--line)]
            text-ice-faint transition-colors duration-300 hover:border-accent-500/50 hover:text-accent-400"
          @click="copy(item.key, item.value)"
        >
          <AppIcon :name="copiedKey === item.key ? 'check' : 'copy'" :size="15" />
        </button>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <a
        v-for="(item, i) in socials"
        :key="item.key"
        v-reveal="i * 80"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="reveal card-interactive group flex min-w-0 items-center gap-4 p-5"
      >
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl" :class="item.tint" aria-hidden="true">
          <AppIcon :name="item.icon" :size="18" />
        </span>
        <span class="min-w-0 flex-1">
          <span class="label block">{{ item.key }}</span>
          <span class="mt-1 block truncate text-sm font-medium">{{ item.value }}</span>
        </span>
        <AppIcon
          name="arrowUpRight"
          :size="15"
          class="text-ice-faint transition-all duration-500 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400"
        />
      </a>
    </div>
  </div>
</template>
