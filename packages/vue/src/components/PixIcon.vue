<script setup lang="ts">
import { computed } from 'vue'
import { ICON_PATHS, type PixIconName } from '../icons'

const props = withDefaults(defineProps<{ name: PixIconName; size?: number | string }>(), {
  size: '1em',
})

const inner = computed(() => ICON_PATHS[props.name] ?? '')
const dim = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    :width="dim"
    :height="dim"
    aria-hidden="true"
    v-html="inner"
  />
</template>
