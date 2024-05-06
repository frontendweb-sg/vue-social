<template>
  <button class="px-6 py-1 rounded-md flex items-center justify-center">
    <LoaderIcon class="mr-2 animate-spin" v-if="loading" /> <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { Color, Size } from '@/types'
import { LoaderIcon } from 'lucide-vue-next'
withDefaults(
  defineProps<{
    color?: Color
    size?: Size
    loading?: boolean
  }>(),
  {
    loading: false,
    color: 'primary',
    size: 'sm'
  }
)
</script>

<style>
</style>