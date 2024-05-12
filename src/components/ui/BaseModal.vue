<template>
  <Teleport :to="telportId" v>
    <div
      @click="$emit('close')"
      class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"
    ></div>
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto shadow-md overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div :class="['relative p-4 w-full max-h-full', modalSize]">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3
              class="text-md font-semibold text-rose-700 dark:text-white relative before:h-full before:absolute before:content-[''] before:w-1 before:-left-5 before:bg-rose-500"
            >
              {{ label }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              @click="$emit('close')"
            >
              <X :size="20" />
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <slot />
          </div>
          <!-- Modal footer -->
          <div
            v-if="$slots.footer"
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import type { Size } from '@/types'
import { X } from 'lucide-vue-next'
import { computed } from 'vue'
interface Props {
  label?: string
  telportId?: string
  size?: Size
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  label: 'Modal',
  telportId: 'body'
})
defineEmits<{
  (e: 'close'): void
}>()

const sizeClass = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl'
}

const modalSize = computed(() => sizeClass[props.size as keyof typeof sizeClass])
</script>

<style>
</style>