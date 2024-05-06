<template>
  <auth-form
    :title="AppContent.resetPasword"
    :subtitle="AppContent.authForgetText"
    @submit="onSubmit"
  >
    <base-input type="password" name="password" placeholder="Password" />
    <base-input type="password" name="confirmPassword" placeholder="Confirm password" />
    <base-button
      :disabled="loading"
      :loading="loading"
      class="bg-slate-900 px-6 py-2 rounded-md text-white w-full"
      type="submit"
    >
      {{ AppContent.resetPasword }}
    </base-button>
  </auth-form>
</template>

<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AuthForm from '../../widgets/AuthForm.vue'
import { AppContent } from '@/utils/content'
import { useForm } from 'vee-validate'
import { object, string, ref } from 'yup'
import { useAuthStore } from '../../store/auth'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const token = useRoute().params.token

const authStore = useAuthStore()
const { loading } = storeToRefs(authStore)

const { handleSubmit, errors } = useForm({
  initialValues: {
    password: '',
    confirmPassword: ''
  },
  validationSchema: object().shape({
    password: string().required('Password is required'),
    confirmPassword: string()
      .required()
      .oneOf([ref('password')], 'Passwords must match')
  })
})

const onSubmit = handleSubmit(async (values) => {
  await authStore.resetPassword({ password: values.password, token } as { password: string })
})
</script>

<style>
</style>