<template>
  <auth-form @submit="onSubmit" class="relative">
    <template v-if="message" #header>
      <div
        class="bg-green-100 text-black px-2 py-4 rounded-md flex items-center absolute top-5 left-5 right-5 text-sm"
      >
        <div
          class="bg-green-600 flex items-center justify-center w-6 h-6 rounded-full mr-2 text-white"
        >
          <CheckIcon :size="18" />
        </div>
        An email has been sent to your mailbox.
      </div>
    </template>
    <base-input name="email" placeholder="Enter email id" />
    <base-button class="bg-slate-900 px-6 py-2 rounded-md text-white w-full" type="submit">
      {{ AppContent.request }}
    </base-button>
  </auth-form>
</template>


<script lang="ts" setup>
import AuthForm from '../../widgets/AuthForm.vue'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { AppContent } from '@/utils/content'
import { CheckIcon } from 'lucide-vue-next'
import { useAuthStore } from '../../store/auth'
import { ref } from 'vue'

const message = ref(false)
const authStore = useAuthStore()

const validation = object({
  email: string().email().required('Email is required!')
})

const { handleReset, handleSubmit } = useForm({
  initialValues: {
    email: ''
  },
  validationSchema: validation
})

const onSubmit = handleSubmit(async (values) => {
  message.value = true

  await authStore.forgotPassword(values as { email: string })
  message.value = false
  handleReset()
})
</script>

<style>
</style>