<template>
  <div>
    <label v-if="label" class="block text-slate-500 text-xs font-medium mb-2">
      {{ label }}
    </label>

    <div
      :class="[
        ' ring-slate-800  hover:bg-gray-50 border border-gray-150 rounded-md relative',
        invalid && 'border-red-600 placeholder:text-red-600 text-red-600',
        valid && 'border-green-600 placeholder:text-green-600 text-green-600',
        $attrs.class
      ]"
    >
      <slot />
      <CircleX v-if="invalid" :size="16" class="absolute right-2 -translate-y-1/2 top-2/4" />
      <CircleCheck v-if="valid" :size="16" class="absolute right-2 -translate-y-1/2 top-2/4" />
    </div>
    <span class="block text-xs text-red-500 mt-1" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { CircleX, CircleCheck } from 'lucide-vue-next'
withDefaults(
  defineProps<{
    label?: string
    valid?: boolean
    invalid?: boolean
    errorMessage?: string
  }>(),
  {
    valid: false,
    invalid: false
  }
)
</script>
