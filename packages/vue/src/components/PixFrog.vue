<script setup lang="ts">
import { computed } from 'vue'

type Rect = [number, number, number, number, string]

const props = withDefaults(defineProps<{
  size?: number
  mood?: 'happy' | 'sleepy' | 'focused'
}>(), {
  size: 64,
  mood: 'happy',
})

const G1 = 'var(--brand-700)'
const G2 = 'var(--brand-500)'
const G3 = 'var(--brand-300)'
const W = '#fff'
const K = '#0a0a0a'
const P = 'var(--c-sport)'

const u = computed(() => props.size / 16)

const rects = computed<Rect[]>(() => {
  const body: Rect[] = [
    [4, 3, 1, 1, G2], [5, 2, 2, 1, G2], [7, 2, 2, 1, G2], [9, 2, 2, 1, G2], [11, 3, 1, 1, G2],
    [4, 4, 2, 1, G2], [10, 4, 2, 1, G2],
    [3, 5, 10, 1, G2],
    [2, 6, 12, 1, G2],
    [2, 7, 12, 1, G2],
    [2, 8, 12, 1, G2],
    [3, 9, 10, 1, G3],
    [3, 10, 10, 1, G3],
    [2, 11, 3, 1, G2], [11, 11, 3, 1, G2], [5, 11, 6, 1, G3],
    [1, 12, 4, 1, G2], [11, 12, 4, 1, G2], [5, 12, 6, 1, G3],
    [1, 13, 2, 1, G1], [13, 13, 2, 1, G1], [5, 13, 6, 1, G2],
    [1, 14, 1, 1, G1], [3, 14, 1, 1, G1], [12, 14, 1, 1, G1], [14, 14, 1, 1, G1],
    [3, 15, 10, 1, G1],
  ]
  const eyeWhites: Rect[] = [
    [4, 4, 2, 1, W], [5, 5, 2, 1, W],
    [10, 4, 2, 1, W], [10, 5, 2, 1, W],
  ]
  const happyPupils: Rect[] = [[5, 5, 1, 1, K], [10, 5, 1, 1, K]]
  const sleepyPupils: Rect[] = [[4, 5, 2, 1, K], [10, 5, 2, 1, K]]
  const focusedPupils: Rect[] = [[6, 5, 1, 1, K], [10, 5, 1, 1, K]]
  const pupils =
    props.mood === 'sleepy' ? sleepyPupils : props.mood === 'focused' ? focusedPupils : happyPupils
  const mouth: Rect[] =
    props.mood === 'happy'
      ? [[6, 8, 4, 1, G1], [5, 8, 1, 1, G1], [10, 8, 1, 1, G1]]
      : [[7, 8, 2, 1, G1]]
  const blush: Rect[] = [[3, 7, 1, 1, P], [12, 7, 1, 1, P]]
  return [...body, ...eyeWhites, ...pupils, ...mouth, ...blush]
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    class="pixq-pixelated"
  >
    <rect
      v-for="(r, i) in rects"
      :key="i"
      :x="r[0] * u"
      :y="r[1] * u"
      :width="r[2] * u"
      :height="r[3] * u"
      :fill="r[4]"
      shape-rendering="crispEdges"
    />
  </svg>
</template>
