<template>
  <div>
    <label v-if="label" class="block text-slate-600 text-sm font-medium mb-2">
      {{ label }}
    </label>

    <div
      :class="[
        ' ring-slate-800 hover:bg-gray-50 border border-gray-100 rounded-md',
        valid && 'border-red-600 placeholder:text-red-600 text-red-600',
        invalid && 'border-green-600 placeholder:text-green-600 text-green-600',
        $attrs.class
      ]"
    >
      <slot />
    </div>
    <span class="block text-xs text-red-500 mt-1" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
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
