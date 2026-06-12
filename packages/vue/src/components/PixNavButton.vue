<script setup lang="ts">
import PixIcon from './PixIcon.vue'
import type { PixIconName } from '../icons'

// Pixel-art nav / menu item. Presentational only — the consumer owns
// navigation via a native click (no router coupling). Models a side-menu
// entry: leading icon + label, an active state carrying a per-item accent,
// and a 'cta' variant (e.g. "Add module") with an optional trailing badge.
withDefaults(defineProps<{
  label?: string
  icon?: PixIconName
  active?: boolean
  accent?: string
  variant?: 'default' | 'cta'
}>(), {
  active: false,
  accent: 'var(--brand-500)',
  variant: 'default',
})
</script>

<template>
  <button
    type="button"
    class="pixq-nav"
    :class="{ 'pixq-nav--active': active, 'pixq-nav--cta': variant === 'cta' }"
  >
    <span
      v-if="active && variant !== 'cta'"
      class="pixq-nav__bar"
      :style="{ background: accent }"
    />
    <span
      v-if="icon"
      class="pixq-nav__icon"
      :style="active ? { color: accent } : undefined"
    >
      <PixIcon :name="icon" :size="18" />
    </span>
    <span class="pixq-nav__label"><slot>{{ label }}</slot></span>
    <span v-if="$slots.badge" class="pixq-nav__badge"><slot name="badge" /></span>
  </button>
</template>
