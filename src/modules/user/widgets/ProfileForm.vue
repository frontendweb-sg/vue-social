<template>
  <form @submit="onSubmit">
    <div class="grid grid-cols-3 gap-4">
      <div>
        <base-select name="gender" label="Gender" :options="GenderOptions" />
      </div>
      <div>
        <base-input name="company" placeholder="Company name" label="Company name" />
      </div>
      <div>
        <base-input name="designation" placeholder="Designation" label="Designation" />
      </div>
      <div>
        <base-input name="website" placeholder="Website" label="Website" />
      </div>
      <div>
        <base-input name="address" placeholder="Address" label="Address" />
      </div>
      <div>
        <base-input name="qualification" placeholder="qualification" label="Website" />
      </div>
      <div>
        <base-input name="gitusername" placeholder="gitusername" label="Website" />
      </div>
      <div>
        <base-input name="totalExp" placeholder="totalExp" label="Website" />
      </div>
      <div>
        <base-input name="noticeperiod" placeholder="noticeperiod" label="Website" />
      </div>
      <div>
        <base-input name="salary" placeholder="salary" label="Website" />
      </div>

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
    gender: 'male'
  }
})

const onSubmit = handleSubmit((values) => {
  console.log('values', values)
})
</script>

<style>
</style>