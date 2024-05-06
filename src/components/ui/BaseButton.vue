<template>
  <button
    :class="['px-6 py-1 rounded-md flex items-center justify-center', variant, isFull && 'w-full']"
  >
    <LoaderIcon class="mr-2 animate-spin" v-if="loading" /> <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { Color, Size } from '@/types'
import { LoaderIcon } from 'lucide-vue-next'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    color?: Color
    size?: Size
    loading?: boolean
    isFull: boolean
  }>(),
  {
    isFull: false,
    loading: false,
    color: 'primary',
    size: 'sm'
  }
)

const variant = computed(() => ({
  'bg-slate-900 text-white': props.color === 'primary',
  'bg-gray-500 text-white': props.color === 'secondary',
  'bg-gray-600 text-white': props.color === 'gray',
  'bg-blue-500 text-white': props.color === 'info',
  'bg-yellow-500 text-white': props.color === 'warning',
  'bg-red-900 text-white': props.color === 'danger'
}))
</script>

<style>
</style>