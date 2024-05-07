<template>
  <auth-form to="/" @submit="onSubmit">
    <div v-if="message" class="bg-green-600 rounded-md text-white px-3 py-2 text-xs">
      <p>Email sent!, Please check your mail and click on confirm.</p>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div><base-input name="firstname" placeholder="First name" /></div>
      <div><base-input name="lastname" placeholder="Last name" /></div>
    </div>
    <base-input type="email" name="email" placeholder="Enter email id" />
    <base-input type="password" name="password" placeholder="Password" />
    <base-input name="mobile" placeholder="Mobile no" />

    <base-button
      :disabled="loading"
      :loading="loading"
      class="bg-slate-900 px-6 py-2 rounded-md text-white w-full"
      type="submit"
    >
      {{ AppContent.signup }}
    </base-button>
  </auth-form>
</template>

<script setup lang="ts">
import AuthForm from '../../widgets/AuthForm.vue'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { AppContent } from '@/utils/content'
import { useAuthStore, type RegisterRequest } from '../../store/auth'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const authStore = useAuthStore()
const { loading } = storeToRefs(authStore)
const message = ref(false)
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

const onSubmit = handleSubmit(async (values) => {
  const response = await authStore.register(values as RegisterRequest)
  if (response) {
    message.value = true
  }
  handleReset()
})
</script>

<style>
</style>