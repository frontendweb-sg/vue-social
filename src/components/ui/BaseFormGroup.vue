<template>
  <div>
    <label
      v-if="label && !(type === 'checkbox' || type === 'radio')"
      class="block text-slate-500 text-xs font-medium mb-2"
    >
      {{ label }}
    </label>
    <div class="flex py-3 items-center space-x-3" v-if="type === 'checkbox' || type === 'radio'">
      <slot />
      <label class="block text-slate-500 text-xs font-medium mb-1" :for="name">{{ label }}</label>
      <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >I agree with the
        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a
        >.</label
      >
    </div>
    <div
      v-else
      :class="[
        ' ring-slate-800  hover:bg-gray-50 border border-gray-150 rounded-md relative',
        invalid && 'border-red-600 placeholder:text-red-600 text-red-600',
        valid && 'border-green-600 placeholder:text-green-600 text-green-600',
        $attrs.class
      ]"
    >
      <slot />
      <CircleX
        v-if="invalid"
        :size="16"
        class="absolute right-2 -translate-y-1/2 top-2/4"
        v-bind="iconProps"
      />
      <CircleCheck
        v-if="valid"
        :size="16"
        class="absolute right-2 -translate-y-1/2 top-2/4"
        v-bind="iconProps"
      />
    </div>
    <span class="block text-xs text-red-500 mt-1" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { CircleX, CircleCheck, type LucideProps } from 'lucide-vue-next'
import type { InputTypeHTMLAttribute } from 'vue'

interface Props {
  label?: string
  valid?: boolean
  invalid?: boolean
  errorMessage?: string
  iconProps?: LucideProps & SVGAElement
  type?: InputTypeHTMLAttribute
  name?: string
}
withDefaults(defineProps<Props>(), {
  valid: false,
  invalid: false
})
</script>
