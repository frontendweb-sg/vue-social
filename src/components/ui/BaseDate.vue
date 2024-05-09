<template>
  <span>
    {{ format(date, formatString) }}
  </span>
</template>

<script lang="ts" setup>
import { format } from 'date-fns'
withDefaults(
  defineProps<{
    label?: string
    date: string
    formatString?: string
  }>(),
  {
    formatString: 'MM/dd/yyyy'
  }
)
</script>

<style>
</style>