<template>
  <div class="bg-white shadow-sm rounded-sm">
    <slot name="header">
      <div class="border-b p-2 text-sm font-lato border-gray-50 flex justify-between items-center">
        <h6 class="font-medium">
          {{ title }}
        </h6>
      </div>
    </slot>
    <div class="body p-2"><slot /></div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style>
</style>