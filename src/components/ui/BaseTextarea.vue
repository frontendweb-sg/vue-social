<template>
  <base-form-group
    :label="label"
    :invalid="meta.touched && !meta.valid"
    :valid="meta.touched && meta.valid"
    :class="[$attrs.class]"
    :errorMessage="errorMessage"
  >
    <textarea
      cols="5"
      rows="4"
      v-on="handlers"
      v-bind="$attrs"
      :value="value"
      class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
    ></textarea>
    <span class="absolute bottom-0 left-0 px-4 text-xs py-2 text-slate-600">
      {{ AppContent.words }}
      {{ String(value).split(' ').length }}
      - {{ AppContent.length }}
      {{ String(value).length }}
    </span>
  </base-form-group>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'
import { AppContent } from '@/utils/content'

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