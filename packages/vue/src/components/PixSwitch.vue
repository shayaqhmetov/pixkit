<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: boolean
  color?: string
  disabled?: boolean
}>(), {
  color: 'var(--brand-500)',
  disabled: false,
})

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

function toggle() {
  if (!props.disabled) emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    type="button"
    class="pixq-switch"
    role="switch"
    :aria-checked="modelValue"
    :data-on="modelValue ? '1' : '0'"
    :disabled="disabled"
    :style="{
      background: modelValue ? color : 'var(--bg-elev-3)',
      borderColor: modelValue ? color : 'var(--line)',
    }"
    @click="toggle"
  >
    <span class="pixq-switch__knob" :style="{ left: modelValue ? '20px' : '2px' }" />
  </button>
</template>

<style scoped>
.pixq-switch {
  width: 42px; height: 24px; border-radius: 999px;
  border: 1px solid var(--line); position: relative; cursor: pointer; flex-shrink: 0;
  transition: all 0.15s ease; padding: 0;
}
.pixq-switch:disabled { cursor: default; }
.pixq-switch__knob {
  position: absolute; top: 2px; width: 18px; height: 18px; border-radius: 50%;
  background: #fff; transition: left 0.15s ease; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
