<template>
  <form @submit="onSubmit">
    <div class="grid grid-cols-2 gap-4">
      <base-input name="instituteName" placeholder="Institute name" />
      <base-input name="degree" placeholder="Degree" />
      <base-input name="fieldOfStudy" placeholder="Field of study" />
      <base-checkbox :options="{
        checkedValue: true,
        uncheckedValue: false
      }" name="current" label="Current" />
      <base-input name="activityAndSocial" placeholder="Institute name" />
      <base-input name="from" type="date" placeholder="Institute name" />
      <base-input name="to" type="date" placeholder="Institute name" />
      <base-input name="location" placeholder="Institute name" />
      <base-input name="grade" placeholder="Institute name" />
      <base-textarea name="summary" placeholder="Institute name" />
    </div>
    <div class="flex justify-end space-x-4 mt-5">
      <base-button type="button" @click="onCancel" color="secondary">
        {{ AppContent.cancel }}
      </base-button>
      <base-button :loading="loading" :disabled="loading" type="submit">
        {{ data ? AppContent.update : AppContent.save }}
      </base-button>
    </div>
    {{ data }}
  </form>
</template>

<script setup lang="ts">
import type { Education } from '@/types'
import { AppContent } from '@/utils/content'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { useProfileStore } from '../store/profile'
import { storeToRefs } from 'pinia'
import { format } from 'date-fns'
import { onBeforeMount } from 'vue'

const profileStore = useProfileStore()
const { loading } = storeToRefs(profileStore)

const emit = defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps<{
  profileId: string
  data?: Education
}>()

const { handleReset, handleSubmit, setValues } = useForm({
  validationSchema: object({
    instituteName: string().required('Field is required!'),
    degree: string().default(''),
    fieldOfStudy: string().default(''),
    activityAndSocial: string().default('')
  }),
  initialValues: {
    instituteName: '',
    degree: '',
    fieldOfStudy: '',
    current: false,
    activityAndSocial: '',
    from: format(new Date(), 'yyyy-MM-dd'),
    to: null,
    location: '',
    summary: '',
    grade: ''
  } as Education
})

const onCancel = () => {
  emit('close')
  handleReset()
}

onBeforeMount(() => {
  if (props.data) {
    setValues({ ...props.data, to: props.data?.to ? format(props.data.to, 'yyyy-MM-dd') : null, from: format(props.data?.from!, 'yyyy-MM-dd') })
  }
});


const onSubmit = handleSubmit(async (values) => {
  if (values.id) {
    console.log("UPdate")
  } else {

    await profileStore.addEducation(props.profileId, values as unknown as Education)
  }
})
</script>

<style></style>