<script setup lang="ts">
import type AppIcon from './AppIcon.vue'

defineProps<{
  value: string
  label: string
  icon: InstanceType<typeof AppIcon>['$props']['name']
  tint: string
}>()
</script>

<template>
  <div
    class="card-interactive group flex items-start justify-between gap-4 p-5 sm:p-6"
  >
    <div>
      <p class="text-2xl font-bold tracking-tight sm:text-[1.75rem]">
        <CountUp :value="value" />
      </p>
      <p class="mt-1.5 text-sm text-ice-dim">{{ label }}</p>
    </div>
    <span
      class="grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-transform duration-500 ease-soft group-hover:scale-110"
      :class="tint"
      aria-hidden="true"
    >
      <AppIcon :name="icon" :size="17" />
    </span>
  </div>
</template>
