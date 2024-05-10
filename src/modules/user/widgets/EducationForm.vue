<template>
  <div>
    <h1>Add Education</h1>
    <form @submit="onSubmit">
      <div class="grid grid-cols-2 gap-4">
        <base-input name="instituteName" placeholder="Institute name" />
        <base-input name="degree" placeholder="Institute name" />
        <base-input name="fieldOfStudy" placeholder="Institute name" />
        <base-input name="current" placeholder="Institute name" />
        <base-input name="activityAndSocial" placeholder="Institute name" />
        <base-input name="from" placeholder="Institute name" />
        <base-input name="to" placeholder="Institute name" />
        <base-input name="location" placeholder="Institute name" />
        <base-input name="grade" placeholder="Institute name" />
        <base-textarea name="summary" placeholder="Institute name" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object } from 'yup'

const { handleReset, handleSubmit } = useForm({
  validationSchema: object({}),
  initialValues: {
    instituteName: '',
    degree: '',
    fieldOfStudy: '',
    current: false,
    activityAndSocial: '',
    from: Date.now(),
    to: null,
    location: '',
    summary: '',
    grade: ''
  }
})

const onSubmit = handleSubmit((values) => {
  console.log('education values', values)
})
</script>

<style>
</style>