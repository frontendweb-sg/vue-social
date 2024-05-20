<template>
  <button :class="['flex items-center  justify-center', variant, isFull && 'w-full']">
    <LoaderIcon class="mr-2 animate-spin" v-if="loading" /> <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { Color, Size } from '@/types'
import { LoaderIcon } from 'lucide-vue-next'
import { computed } from 'vue'
interface Props {
  color?: Color
  size?: Size
  loading?: boolean
  isFull?: boolean
  as?: 'button' | 'icon'
  variant?: 'filled' | 'outlined' | 'text'
}
const props = withDefaults(defineProps<Props>(), {
  isFull: false,
  loading: false,
  color: 'primary',
  size: 'sm',
  as: 'button',
  variant: 'filled'
})

const variant = computed(() => {
  let classes = {}

  switch (props.variant) {
    case 'outlined':
      classes = {
        'bg-slate-900 text-white': props.color === 'primary',
        'bg-gray-500 text-white': props.color === 'secondary',
        'bg-gray-600 text-white': props.color === 'gray',
        'bg-blue-500 text-white': props.color === 'info',
        'bg-yellow-500 text-white': props.color === 'warning',
        'bg-red-900 text-white': props.color === 'danger',
        'bg-white text-black': props.color === 'default'
      }
      break
    case 'text':
      classes = {
        'text-slate-900 hover:bg-slate-900 hover:text-white': props.color === 'primary',
        'text-gray-500 hover:bg-slate-700': props.color === 'secondary',
        'text-gray-600 hover:bg-slate-400': props.color === 'gray',
        'text-blue-500 hover:bg-blue-600  hover:text-white': props.color === 'info',
        'text-yellow-500 hover:bg-slate-400': props.color === 'warning',
        'text-red-900 hover:bg-slate-400': props.color === 'danger',
        'text-white bg-gray-100': props.color === 'default'
      }
      break
    default:
      classes = {
        'bg-slate-900 text-white': props.color === 'primary',
        'bg-gray-500 text-white': props.color === 'secondary',
        'bg-gray-600 text-white': props.color === 'gray',
        'bg-blue-500 text-white': props.color === 'info',
        'bg-yellow-500 text-white': props.color === 'warning',
        'bg-red-900 text-white': props.color === 'danger',
        'bg-white text-black': props.color === 'default'
      }
      break
  }
  return {
    'px-6 py-2 rounded-md text-sm font-lato': props.as === 'button',
    'rounded-full': props.as === 'icon',
    'w-6 h-6': props.as === 'icon' && props.size === 'xs',
    'w-8 h-8': props.as === 'icon' && props.size === 'sm',
    ...classes
  }
})
</script>

<style>
</style>