<template>
  <div
    v-if="verify"
    class="px-6 flex items-center justify-center py-12 shadow-md min-h-96 max-w-[360px] min-w-[360px] bg-white rounded-md break-words"
  >
    <div class="text-center" v-if="verify">
      <div>
        <div
          class="w-10 h-10 mx-auto mb-5 rounded-full bg-green-500 text-white flex items-center justify-center"
        >
          <CheckIcon />
        </div>
        <h1 class="text-green-500 text-lg font-bold">Verified</h1>
        <span class="text-green-600 mb-3 mt-3 block text-sm">{{ verify }}</span>
        <p class="text-gray-500 text-sm">Your have successfully verified account.</p>
        <router-link to="/" class="bg-slate-900 px-6 py-2 rounded-md text-white w-full block mt-5">
          {{ AppContent.signin }}
        </router-link>
      </div>
    </div>
    <div v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppContent } from '@/utils/content'
import { CheckIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const verify = route.query?.verify
const message = route.query?.message

defineProps<{
  token: string
}>()
</script>

<style>
</style>