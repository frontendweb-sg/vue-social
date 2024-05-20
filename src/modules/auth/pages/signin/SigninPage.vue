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
        <KeyRound :size="14" class="mr-2" />
        {{ AppContent.forgotPassword }}
      </router-link>
    </div>
    <base-button
      :is-full="true"
      :disabled="loading"
      :loading="loading"
      class="px-6 py-2 rounded-md"
      type="submit"
    >
      {{ AppContent.signin }}
    </base-button>
  </auth-form>
</template> 
  
<script setup lang="ts">
import AuthForm from '../../widgets/AuthForm.vue'
import { AppContent } from '@/utils/content'
import { useAuthStore, type LoginRequest } from '../../store/auth'
import { storeToRefs } from 'pinia'
import { object, string } from 'yup'
import { useForm } from 'vee-validate'
import { KeyRound } from 'lucide-vue-next'

const authStore = useAuthStore()
const { loading, user } = storeToRefs(authStore)
const { login } = authStore

const validation = object({
  email: string().email().required('Email is required!'),
  password: string().required('Password is required')
})

const { handleReset, handleSubmit, meta } = useForm({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: validation
})

const onSubmit = handleSubmit((values) => {
  authStore.login(values as LoginRequest)
  handleReset()
})

authStore.$subscribe((mutation, state) => {})
</script>
  
