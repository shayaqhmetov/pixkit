<script setup lang="ts">
import { computed } from 'vue'

let _uid = 0

const props = withDefaults(defineProps<{
  data: number[]
  color?: string
  width?: number
  height?: number
  fill?: boolean
}>(), {
  color: 'var(--brand-500)',
  width: 280,
  height: 64,
  fill: true,
})

const gid = `pixq-spark-${(_uid += 1)}`

const path = computed(() => {
  const d = props.data
  if (!d.length) return ''
  const min = Math.min(...d)
  const max = Math.max(...d)
  const range = max - min || 1
  const stepX = props.width / (d.length - 1 || 1)
  const pts = d.map((v, i) => [
    i * stepX,
    props.height - ((v - min) / range) * (props.height - 6) - 3,
  ])
  return pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ')
})

const area = computed(() => `${path.value} L ${props.width} ${props.height} L 0 ${props.height} Z`)
</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    style="display: block"
  >
    <defs>
      <linearGradient :id="gid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" :stop-color="color" stop-opacity="0.30" />
        <stop offset="100%" :stop-color="color" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path v-if="fill" :d="area" :fill="`url(#${gid})`" />
    <path :d="path" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
