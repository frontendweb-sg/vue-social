<template>
  <auth-form @submit="onSubmit">
    <base-input name="password" placeholder="Password" />
    <base-input name="confirm-password" placeholder="Confirm password" />
    <base-button class="bg-slate-900 px-6 py-2 rounded-md text-white w-full" type="submit">
      {{ AppContent.request }}
    </base-button>
  </auth-form>
</template>

<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AuthForm from '../../widgets/AuthForm.vue'
import { useForm } from 'vee-validate'
import { object, string, ref } from 'yup'

const { handleSubmit } = useForm({
  initialValues: {
    password: '',
    confirmPassword: ''
  },
  validationSchema: object().shape({
    password: string().label('Password').required('Password is required'),
    confirmPassword: string()
      .label('confirm password')
      .required()
      .oneOf([ref('password')], 'Passwords must match')
  })
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<style>
</style>