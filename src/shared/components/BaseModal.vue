<script setup lang="ts">
import { onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { X } from 'lucide-vue-next'
const props = defineProps<{ open: boolean; title: string }>()
const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement>()
let previousFocus: HTMLElement | null = null
let previousOverflow = ''
watch(
  () => props.open,
  async (open) => {
    await nextTick()
    if (open) {
      previousFocus = document.activeElement as HTMLElement
      previousOverflow = document.body.style.overflow
      dialog.value?.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialog.value?.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  },
)
onBeforeUnmount(() => {
  document.body.style.overflow = previousOverflow
})
</script>
<template>
  <dialog
    ref="dialog"
    class="modal"
    :aria-label="title"
    @cancel.prevent="emit('close')"
    @click="$event.target === dialog && emit('close')"
  >
    <div class="modal-body">
      <button class="modal-close icon-button" aria-label="Tutup dialog" @click="emit('close')">
        <X :size="22" /></button
      ><slot />
    </div>
  </dialog>
</template>
<style scoped>
.modal {
  border: 0;
  border-radius: 20px;
  padding: 0;
  width: min(820px, calc(100% - 32px));
  max-height: 90dvh;
  background: var(--paper);
  color: var(--ink);
}
.modal::backdrop {
  background: #021024a6;
  backdrop-filter: blur(5px);
}
.modal-body {
  position: relative;
  padding: 38px;
}
.modal-close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 2;
  background: var(--paper);
}
@media (max-width: 600px) {
  .modal-body {
    padding: 28px 20px;
  }
}
</style>
