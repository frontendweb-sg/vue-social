<template>
  <form @submit="onSubmit">
    <div class="grid grid-cols-3 gap-4">
      <base-input type="datetime-local" name="dob" label="Date of birth" />
      <base-select name="gender" label="Gender" :options="GenderOptions" />
      <base-input name="company" placeholder="Company name" label="Company name" />
      <base-input name="designation" placeholder="Designation" label="Designation" />
      <base-input name="website" placeholder="Website" label="Website" />
      <base-input name="address" placeholder="Address" label="Address" />
      <base-input name="qualification" placeholder="qualification" label="Website" />
      <base-input name="gitusername" placeholder="gitusername" label="Website" />
      <base-input name="totalExp" placeholder="totalExp" label="Website" />
      <base-input name="noticeperiod" placeholder="noticeperiod" label="Website" />
      <base-input name="salary" placeholder="salary" label="Website" />
      <base-textarea name="summary" placeholder="Summary" class="col-span-3" />
    </div>
    <div class="flex justify-end space-x-4">
      <base-button type="submit">Save</base-button>
      <base-button type="submit">{{ AppContent.save }}</base-button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { GenderOptions } from '@/utils/constants'
import { AppContent } from '@/utils/content'
const { handleReset, handleSubmit } = useForm({
  initialValues: {
    gender: 'male',
    dob: ''
  }
})

const onSubmit = handleSubmit((values) => {
  console.log('values', values)
})
</script>

<style>
</style>