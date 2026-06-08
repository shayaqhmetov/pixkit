<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  open: boolean
  width?: number
  align?: 'center' | 'top'
  closeOnBackdrop?: boolean
}>(), {
  width: 560,
  align: 'center',
  closeOnBackdrop: true,
})

const emit = defineEmits<{ (e: 'close'): void }>()

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) emit('close')
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

function onBackdrop() {
  if (props.closeOnBackdrop) emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="qurbaqa pixq-dialog__backdrop"
      :class="`pixq-dialog__backdrop--${align}`"
      @click="onBackdrop"
    >
      <div
        class="pixq-dialog__card"
        :style="{ width: `${width}px` }"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.pixq-dialog__backdrop {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex; justify-content: center;
}
.pixq-dialog__backdrop--center { align-items: center; padding: 40px; }
.pixq-dialog__backdrop--top { align-items: flex-start; padding-top: 100px; }
.pixq-dialog__card {
  max-width: calc(100vw - 32px);
  max-height: 90vh;
  background: var(--bg-elev-1);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow-3);
  display: flex; flex-direction: column; overflow: hidden;
}
</style>
