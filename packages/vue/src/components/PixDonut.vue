<script setup lang="ts">
import { computed } from 'vue'

type Segment = { value: number; color: string }

const props = withDefaults(defineProps<{
  segments: Segment[]
  size?: number
  thickness?: number
  label?: string
  sublabel?: string
}>(), {
  size: 120,
  thickness: 16,
})

const r = computed(() => (props.size - props.thickness) / 2)
const circ = computed(() => 2 * Math.PI * r.value)
const total = computed(() => props.segments.reduce((s, x) => s + x.value, 0) || 1)

const arcs = computed(() => {
  let acc = 0
  return props.segments.map((s) => {
    const len = (s.value / total.value) * circ.value
    const dash = `${len} ${circ.value - len}`
    const off = circ.value - acc
    acc += len
    return { color: s.color, dash, off }
  })
})
</script>

<template>
  <div class="pixq-donut" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
      <circle :cx="size / 2" :cy="size / 2" :r="r" fill="none" stroke="var(--bg-elev-3)" :stroke-width="thickness" />
      <circle
        v-for="(a, i) in arcs"
        :key="i"
        :cx="size / 2" :cy="size / 2" :r="r"
        fill="none" :stroke="a.color" :stroke-width="thickness"
        :stroke-dasharray="a.dash" :stroke-dashoffset="a.off"
        :transform="`rotate(-90 ${size / 2} ${size / 2})`"
        stroke-linecap="butt"
      />
    </svg>
    <div class="pixq-donut__center">
      <div v-if="label" class="pixq-donut__label">{{ label }}</div>
      <div v-if="sublabel" class="pixq-donut__sub">{{ sublabel }}</div>
    </div>
  </div>
</template>

<style scoped>
.pixq-donut { position: relative; }
.pixq-donut__center {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center;
}
.pixq-donut__label { font-size: 18px; font-weight: 600; color: var(--fg); }
.pixq-donut__sub { font-size: 11px; color: var(--fg-subtle); }
</style>
