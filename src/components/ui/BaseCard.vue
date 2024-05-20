<template>
  <div>
    <div
      class="border-b text-rose-600 py-2 px-1 text-sm border-gray-150 flex justify-between items-center"
    >
      <h6 class="font-medium">
        {{ title }}
      </h6>
      <slot name="header" />
    </div>
    <div class="body py-2 px-1"><slot /></div>
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