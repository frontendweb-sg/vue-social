<template>
  <div
    class="px-6 flex items-center justify-center py-12 shadow-md min-h-96 max-w-[360px] min-w-[360px] bg-white rounded-md break-words"
  >
    <div class="text-center">
      <div
        class="w-10 h-10 mx-auto mb-5 rounded-full bg-green-500 text-white flex items-center justify-center"
      >
        <CheckIcon />
      </div>
      <h1 class="text-green-500 text-lg font-bold">Verified</h1>
      <p class="text-gray-500 text-sm">Your have successfully verified account.</p>
      <router-link
        to="/"
        class="bg-slate-600 text-white px-4 py-2 rounded-md block text-center mt-5"
        >Login application</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { CheckIcon } from 'lucide-vue-next'
defineProps<{
  token: string
}>()
</script>

<style>
</style>