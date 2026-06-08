<script setup lang="ts">
type Option = { id: string; label: string }

defineProps<{ modelValue: string; options: Option[] }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <div class="pixq-seg">
    <button
      v-for="opt in options"
      :key="opt.id"
      class="pixq-seg__btn"
      :class="{ 'pixq-seg__btn--on': modelValue === opt.id }"
      @click="$emit('update:modelValue', opt.id)"
    >{{ opt.label }}</button>
  </div>
</template>

<style scoped>
.pixq-seg {
  display: flex; gap: 0; padding: 2px;
  background: var(--bg-elev-2); border-radius: 8px; border: 1px solid var(--line-soft);
}
.pixq-seg__btn {
  padding: 6px 12px; border-radius: 6px; font-size: 12px;
  background: transparent; color: var(--fg-muted); cursor: pointer; white-space: nowrap;
}
.pixq-seg__btn--on { background: var(--bg-elev-3); color: var(--fg); font-weight: 600; }
</style>
