
<template>
  <div class="flex items-center">
    <input
      lass="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      v-bind="$attrs"
      type="checkbox"
      :id="name"
      :name="name"
      :checked="checked"
      :value="value"
      @change="handleChange"
    />
    <label :for="name" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup generic="T">
import { useField, type FieldOptions, type RuleExpression } from 'vee-validate'
import type { LucideProps } from 'lucide-vue-next'
import type { MaybeRef } from 'vue'

interface Props {
  name: string
  label?: string
  isPassowrd?: boolean
  iconProps?: LucideProps & SVGAElement
  rules?: MaybeRef<RuleExpression<any>>
  options?: Partial<FieldOptions<any>>
}
const props = defineProps<Props>()

const { value, checked, handleChange } = useField(props.name, props.rules, {
  type: 'checkbox',
  validateOnValueUpdate: true,
  ...props.options
})
</script>


<style scoped>
button {
  background: none;
  border: none;
  font-size: 22px;
}
</style>
