<script setup lang="ts">
withDefaults(defineProps<{ dot?: boolean }>(), { dot: false })
</script>

<template>
  <span class="pixq-tag">
    <span v-if="dot" class="pixq-tag__dot" />
    <slot />
  </span>
</template>
