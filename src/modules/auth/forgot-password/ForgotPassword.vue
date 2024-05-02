<template>
  <auth-form
    to="/"
    :title="AppContent.forgotPassword"
    :link-text="AppContent.signin"
    :subtitle="AppContent.loginSubtitle"
    @submit="onSubmit"
  >
    <base-input name="email" placeholder="Enter email id" />
    <base-button class="bg-slate-900 px-6 py-2 rounded-md text-white w-full" type="submit">{{
      AppContent.send
    }}</base-button>
  </auth-form>
</template>


<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AuthForm from '../widgets/AuthForm.vue'
import { AppContent } from '@/utils/content'
const validation = object({
  email: string().email().required('Email is required!')
})

const { handleReset, handleSubmit, meta } = useForm({
  validationSchema: validation
})

const onFormReset = () => {
  handleReset()
}

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
  handleReset()
})
</script>

<style>
</style>