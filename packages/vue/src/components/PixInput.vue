<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

withDefaults(defineProps<{
  modelValue?: string | number
  type?: string
  placeholder?: string
  autofocus?: boolean
  inputmode?: InputHTMLAttributes['inputmode']
}>(), {
  type: 'text',
})

defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <input
    class="pixq-input"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :autofocus="autofocus"
    :inputmode="inputmode"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
