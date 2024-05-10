<template>
  <base-form-group
    :label="label"
    :invalid="meta.touched && !meta.valid"
    :valid="meta.touched && meta.valid"
    :class="[$attrs.class]"
    :errorMessage="errorMessage"
    :iconProps="iconProps"
  >
    <input
      v-on="handlers"
      v-bind="$attrs"
      :value="value"
      :type="type"
      class="text-sm font-lato bg-transparent w-full p-3 outline-none placeholder:font-normal"
    />
  </base-form-group>
</template>

<script setup lang="ts">
import type { LucideProps } from 'lucide-vue-next'
import { useField } from 'vee-validate'
import type { InputTypeHTMLAttribute } from 'vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    name: string
    label?: string
    type?: InputTypeHTMLAttribute
    isPassowrd?: boolean
    iconProps?: LucideProps & SVGAElement
  }>(),
  {
    type: 'text',
    isPassowrd: false
  }
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