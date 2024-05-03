<template>
  <auth-form
    to="/signup"
    :title="AppContent.signin"
    :link-text="AppContent.signup"
    :subtitle="AppContent.loginSubtitle"
    @submit="onSubmit"
  >
    <base-input name="email" placeholder="Enter email id" />
    <base-input name="password" type="password" placeholder="Password" />

    <div class="flex items-center justify-between text-xs">
      <label class="py-2 space-x-2 block">
        <input type="checkbox" /> <span>{{ AppContent.rememberMe }}</span>
      </label>
      <router-link class="text-rose-600 flex items-center font-medium" to="/forgot-password">
        <KeyRound :size="14" class="mr-2" /> Forgot Password</router-link
      >
    </div>
    <base-button class="bg-slate-900 px-6 py-2 rounded-md text-white w-full" type="submit">{{
      AppContent.signin
    }}</base-button>
  </auth-form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AuthForm from '../widgets/AuthForm.vue'
import { KeyRound } from 'lucide-vue-next'
import { AppContent } from '@/utils/content'
import { useAuthStore, type LoginRequest } from '../store/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { loading, user } = storeToRefs(authStore)
const { login } = authStore

const validation = object({
  email: string().email().required('Email is required!'),
  password: string().required('Password is required')
})

const { handleReset, handleSubmit, meta } = useForm({
  validationSchema: validation
})

const onSubmit = handleSubmit((values) => {
  authStore.login(values as LoginRequest)
  handleReset()
})
</script>

<style>
</style>