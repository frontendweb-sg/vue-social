<template>
  <base-form-group
    :label="label"
    :valid="meta.touched && !meta.valid"
    :invalid="meta.touched && meta.valid"
    :class="[$attrs.class]"
  >
    <select
      class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
      v-bind="$attrs"
      v-on="handlers"
      :value="value"
    >
      <option v-for="option in options" :key="JSON.stringify(option)" :value="defaultValue(option)">
        {{ optionLabel(option) }}
      </option>
    </select>
  </base-form-group>
</template>

<script  setup lang="ts" generic="T">
import { useField } from 'vee-validate'
defineOptions({ inheritAttrs: false })

interface Fun {
  (option: T): string
}

const props = defineProps<{
  name: string
  label?: string
  options: T[]
  getOptionLabel?: Fun
  getOptionValue?: Fun
}>()

// option value
const optionLabel = (option: T) =>
  props?.getOptionLabel ? props.getOptionLabel(option) : option['label' as keyof typeof option]

// default value
const defaultValue = (option: T) =>
  props.getOptionValue ? props.getOptionValue(option) : option['value' as keyof typeof option]

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