<template>
  <base-form-group
    :label="label"
    :valid="meta.touched && !meta.valid"
    :invalid="meta.touched && meta.valid"
  >
    <input
      v-on="handlers"
      v-bind="$attrs"
      :value="value"
      :type="type"
      class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
    />
  </base-form-group>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

defineOptions({ inheritAttrs: false })

type DateType = 'time' | 'weak' | 'month' | 'date' | 'datetime' | 'datetime-local'
const props = withDefaults(
  defineProps<{
    name: string
    label?: string
    formatString?: string
    type?: DateType
  }>(),
  {
    type: 'datetime-local',
    formatString: 'MM/dd/yyyy'
  }
)

const { meta, value, errorMessage, handleBlur, handleChange } = useField(
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