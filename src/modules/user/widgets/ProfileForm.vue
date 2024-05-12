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
      <base-button type="button" @click="onCancel" color="secondary">
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
import { Gender } from '@/utils/enums'
import { watch } from 'vue'
import { format } from 'date-fns'
import { storeToRefs } from 'pinia'
import type { Profile } from '@/types'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const profileStore = useProfileStore()
const { loading, profile } = storeToRefs(profileStore)

const { handleReset, handleSubmit, setValues } = useForm<Profile>({
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
    gender: Gender.male,
    dob: '',
    designation: '',
    website: '',
    address: '',
    qualification: '',
    gitusername: '',
    totalExp: 0,
    noticeperiod: 0,
    salary: 0,
    summary: ''
  }
})

const onCancel = () => {
  emit('close')
  handleReset()
}

const onSubmit = handleSubmit(async (values) => {
  if ((profile.value as Profile)?.id) {
    await profileStore.updateProfile(values as any)
  } else {
    await profileStore.addProfile(values as any)
    handleReset()
  }
  emit('close')
})

watch(
  () => profile.value as Profile,
  (v: Profile) => {
    if (v) setValues({ ...v, dob: format(new Date(v.dob), 'yyyy-MM-dd') })
  },
  { immediate: true }
)
</script>

<style>
</style>