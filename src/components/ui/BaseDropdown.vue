<template>
  <div class="relative" ref="elment">
    <slot name="button" :toggle="handleToggle">
      <button @click="handleToggle">
        <EllipsisVertical />
      </button>
    </slot>
    <div
      :class="[
        'absolute bg-white right-0 p-2 border border-gray-100 shadow-md min-w-52 text-sm font-lato rounded-sm top-full'
      ]"
      v-if="open"
    >
      <slot />
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { useToggle } from '@/composable/useToggle'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { EllipsisVertical } from 'lucide-vue-next'

const elment = ref(null) // element ref
const { open, handleClose, handleToggle } = useToggle()

onClickOutside(elment, handleClose)
</script>

<style>
</style>