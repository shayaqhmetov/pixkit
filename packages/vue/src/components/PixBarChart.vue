<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  data: number[]
  color?: string
  width?: number
  height?: number
  labels?: string[]
}>(), {
  color: 'var(--brand-500)',
  width: 320,
  height: 100,
})

const max = computed(() => Math.max(...props.data, 1))
const bw = computed(() => props.width / props.data.length)

const bars = computed(() =>
  props.data.map((v, i) => {
    const h = (v / max.value) * (props.height - 18)
    return { x: i * bw.value + 4, y: props.height - h - 14, w: bw.value - 8, h, cx: i * bw.value + bw.value / 2 }
  }),
)
</script>

<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" style="display: block">
    <g v-for="(b, i) in bars" :key="i">
      <rect :x="b.x" :y="b.y" :width="b.w" :height="b.h" :fill="color" opacity="0.85" rx="2" shape-rendering="crispEdges" />
      <text
        v-if="labels"
        :x="b.cx" :y="height - 2"
        fill="var(--fg-subtle)" font-size="10" text-anchor="middle" font-family="var(--font-mono)"
      >{{ labels[i] }}</text>
    </g>
  </svg>
</template>
