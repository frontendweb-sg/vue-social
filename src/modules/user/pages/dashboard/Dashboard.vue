<template>
  <div>
    <h1>User Dashboard {{ values }}</h1>
    <base-checkbox
      name="current"
      label="Current"
      :options="{
        checkedValue: true,
        uncheckedValue: false
      }"
    />

    <div v-for="name in ['jack', 'van', 'can', 'man']" :key="name">
      <base-checkbox :label="name" :value="name" name="title" />
    </div>

    <base-button @click="onSubmit">Save</base-button>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'

const { values, handleSubmit } = useForm({
  initialValues: {
    current: false,
    title: ''
  }
})

const onSubmit = handleSubmit(async (values) => {
  console.log(values, 'v')
})
</script>

<style>
</style>