<template>
  <div :class="[$attrs.class]">
    <label v-if="props.label" class="block text-slate-600 text-sm font-medium mb-2">
      {{ label }}
    </label>
    <div
      :class="[
        ' ring-slate-800 relative hover:bg-gray-50 border border-gray-200 rounded-md',
        meta.touched && !meta.valid && 'border-red-600 placeholder:text-red-600 text-red-600',
        meta.touched && meta.valid && 'border-green-600 placeholder:text-green-600 text-green-600',
        $attrs.class
      ]"
    >
      <textarea
        cols="5"
        rows="4"
        v-on="handlers"
        v-bind="$attrs"
        :value="value"
        class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
      >
      </textarea>
      <span class="absolute bottom-0 left-0 px-4 text-xs py-2 text-slate-600">
        Words: {{ String(value).split(' ').length }}Total Char: {{ String(value).length }}
      </span>
    </div>
    <span class="block text-xs text-red-500 mt-1" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    name: string
    label?: string
  }>(),
  {}
)

const { meta, value, errorMessage, handleBlur, handleChange } = useField<string>(
  props.name,
  {},
  {
    validateOnValueUpdate: false
  }
)

const handlers = {
  blur: handleBlur,
  change: handleChange,
  input: (e: InputEvent) => handleChange(e, !!errorMessage.value)
}
</script>

<style>
</style>