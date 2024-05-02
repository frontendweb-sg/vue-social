<template>
  <button class="px-6 py-1 rounded-md">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { Color, Size } from '@/types'

withDefaults(
  defineProps<{
    color?: Color
    size?: Size
  }>(),
  {
    color: 'primary',
    size: 'sm'
  }
)
</script>

<style>
</style>