<template>
  <form @submit="onSubmit">
    <div class="grid grid-cols-3 gap-4">
      <base-input type="date" name="dob" label="Date of birth" :iconProps="{ class: 'right-8' }" />
      <base-select name="gender" label="Gender" :options="GenderOptions" />
      <base-input name="company" placeholder="Company name" label="Company name" />
      <base-input name="designation" placeholder="Designation" label="Designation" />
      <base-input name="website" placeholder="Website" label="Website" />
      <base-input name="address" placeholder="Address" label="Address" />
      <base-input name="qualification" placeholder="Qualification" label="Qualification" />
      <base-input name="gitusername" placeholder="Github username" label="Github name" />
      <base-input name="totalExp" placeholder="totalExp" label="Total Experience" />
      <base-input name="noticeperiod" placeholder="noticeperiod" label="Notice period" />
      <base-input name="salary" placeholder="salary" label="Salary" />
      <base-textarea name="summary" placeholder="Summary" class="col-span-3" />
    </div>
    <div class="flex justify-end space-x-4 mt-5">
      <base-button type="button" @click="handleReset" color="secondary">
        {{ AppContent.cancel }}
      </base-button>
      <base-button :loading="loading" :disabled="loading" type="submit">
        {{ AppContent.save }}
      </base-button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { GenderOptions } from '@/utils/constants'
import { AppContent } from '@/utils/content'
import { date, number, object, string } from 'yup'
import { useProfileStore } from '../store/profile'
import { storeToRefs } from 'pinia'

const { handleReset, handleSubmit } = useForm({
  validationSchema: object().shape({
    company: string().required('Company is required!'),
    gender: string().required('Gender is required!'),
    dob: date().required('Date of birth is required!'),
    designation: string().required('Designation is required!'),
    website: string().default(''),
    address: string().default(''),
    qualification: string().default(''),
    gitusername: string().default(''),
    totalExp: number().default(0).typeError('Number is requried'),
    noticeperiod: string().default(''),
    salary: string().default(''),
    summary: string().default('')
  }),
  initialValues: {
    company: '',
    gender: 'male',
    dob: '',
    designation: '',
    website: '',
    address: '',
    qualification: '',
    gitusername: '',
    totalExp: 0,
    noticeperiod: '',
    salary: '',
    summary: ''
  }
})

const profileStore = useProfileStore()
const { loading } = storeToRefs(profileStore)
const onSubmit = handleSubmit(async (values) => {
  await profileStore.addProfile(values as any)
})
</script>

<style>
</style>