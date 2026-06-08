<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'primary' | 'ghost'
  icon?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'default',
  icon: false,
  type: 'button',
})
</script>

<template>
  <button
    :type="type"
    class="pixq-btn"
    :class="{
      'pixq-btn--primary': variant === 'primary',
      'pixq-btn--ghost': variant === 'ghost',
      'pixq-btn--icon': icon,
    }"
  >
    <slot />
  </button>
</template>
