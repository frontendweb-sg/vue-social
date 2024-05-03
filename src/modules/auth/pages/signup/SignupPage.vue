<template>
  <auth-form to="/" @submit="onSubmit">
    <div class="grid gap-4 grid-cols-2">
      <div><base-input name="firstname" placeholder="First name" /></div>
      <div><base-input name="lastname" placeholder="Last name" /></div>
    </div>
    <base-input name="email" placeholder="Enter email id" />
    <base-input name="password" type="password" placeholder="Password" />
    <base-input name="mobile" placeholder="Mobile no" />

    <base-button class="bg-slate-900 px-6 py-2 rounded-md text-white w-full" type="submit">{{
      AppContent.signup
    }}</base-button>
  </auth-form>
</template>

<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AuthForm from '../../widgets/AuthForm.vue'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { AppContent } from '@/utils/content'

const validation = object({
  firstname: string().required('First name is required'),
  lastname: string().required('Last name is required'),
  email: string().email().required('Email is required!'),
  password: string().required('Password is required'),
  mobile: string().min(10).max(10).required('Mobile is required!')
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