<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <p class="flex items-center gap-2.5">
    <span class="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
    <span class="font-mono text-[0.68rem] uppercase tracking-label text-accent-400">{{ text }}</span>
  </p>
</template>
