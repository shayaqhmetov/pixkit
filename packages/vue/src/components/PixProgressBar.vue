<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  max?: number
  color?: string
  height?: number
  pixel?: boolean
  segments?: number
}>(), {
  max: 100,
  color: 'var(--brand-500)',
  height: 8,
  pixel: false,
  segments: 20,
})

const pct = computed(() => Math.max(0, Math.min(100, (props.value / props.max) * 100)))
const filled = computed(() => Math.round((pct.value / 100) * props.segments))
</script>

<template>
  <div
    v-if="pixel"
    class="pixq-progress pixq-progress--pixel"
    :style="{ height: `${height}px` }"
  >
    <div
      v-for="i in segments"
      :key="i"
      class="pixq-progress__seg"
      :style="{ background: i <= filled ? color : 'var(--bg-elev-3)' }"
    />
  </div>
  <div v-else class="pixq-progress" :style="{ height: `${height}px` }">
    <div
      class="pixq-progress__fill"
      :style="{ width: `${pct}%`, background: color }"
    />
  </div>
</template>
