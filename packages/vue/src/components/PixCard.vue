<script setup lang="ts">
withDefaults(defineProps<{ tight?: boolean; flat?: boolean }>(), {
  tight: false,
  flat: false,
})
</script>

<template>
  <div class="pixq-card" :class="{ 'pixq-card--tight': tight, 'pixq-card--flat': flat }">
    <slot />
  </div>
</template>
