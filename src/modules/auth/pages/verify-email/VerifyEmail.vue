<template>
  <div
    v-if="verify"
    class="px-6 flex items-center justify-center py-12 shadow-md min-h-96 max-w-[360px] min-w-[360px] bg-white rounded-md break-words"
  >
    <div class="text-center">
      <div>
        <div
          class="w-10 h-10 mx-auto mb-5 rounded-full bg-green-500 text-white flex items-center justify-center"
        >
          <CheckIcon />
        </div>
        <h1 class="text-green-500 text-lg font-bold">Verified</h1>
        <span class="text-green-600 mb-3 mt-3 block text-sm">{{ verify }}</span>
        <p class="text-gray-500 text-sm">Your have successfully verified account.</p>
        <router-link
          to="/"
          class="bg-slate-900 px-6 py-2 rounded-md text-white w-full block mt-5"
          >{{ AppContent.signin }}</router-link
        >
      </div>
    </div>
  </div>

  <base-form title="Verification mail" v-else @submit="onSubmit" class="text-center">
    <template #header>
      <div
        class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-10"
      >
        <MailOpen :size="30" class="text-gray-700" />
      </div>
    </template>
    <base-input name="email" placeholder="Enter email" type="email" />
    <base-button class="bg-slate-900 px-6 py-2 rounded-md text-white w-full" type="submit">
      {{ AppContent.send }}
    </base-button>
  </base-form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseForm from '../../widgets/AuthForm.vue'
import { AppContent } from '@/utils/content'
import { CheckIcon, MailOpen } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { useRoute } from 'vue-router'
import { object, string } from 'yup'
import { onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import { useAuthStore } from '../../store/auth'

const route = useRoute()
const verify = route.query?.verify
const message = route.query?.message

defineProps<{
  token: string
}>()

const authStore = useAuthStore()

// onMounted(() => {
//   toast.error(message)
// })

const { values, handleSubmit } = useForm({
  initialValues: {
    email: ''
  },
  validationSchema: object().shape({
    email: string().email('Invalid email').required('')
  })
})

const onSubmit = handleSubmit((value) => {
  console.log(values)
  // authStore.forgotPassword(values as { email: string })
})
</script>

<style>
</style>