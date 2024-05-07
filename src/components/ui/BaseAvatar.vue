<template>
  <div :class="['relative', $attrs.class]">
    <span
      v-if="loading"
      class="rounded-full bg-black/70 flex items-center justify-center absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <LoaderIcon class="animate-spin text-white" :size="20" />
    </span>
    <img
      class="object-cover overflow-hidden rounded-full bg-transparent"
      v-bind="$attrs"
      :src="src"
    />
  </div>
</template>

<script setup lang="ts">
import { LoaderIcon } from 'lucide-vue-next'
const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    size?: number
    rounded?: boolean
    loading?: boolean
  }>(),
  {
    src: '/avatar.png',
    alt: 'Avatar'
  }
)
</script>

<style>
</style>