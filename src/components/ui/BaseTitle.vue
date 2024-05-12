<template>
  <div class="flex items-center justify-between">
    <h1>
      {{ title }}
      <small v-if="subtitle">
        {{ subtitle }}
      </small>
    </h1>
    <div class="flex items-center justify-end">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<style>
</style>