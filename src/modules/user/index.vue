<template>
  <h1>User page - {{ user }}</h1>
  <email-alert :verify-email="!user?.emailVerify" />
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from './store/user'
import { onMounted } from 'vue'
import { useAuthStore } from '../auth/store/auth'
import EmailAlert from '@/components/common/EmailAlert.vue'
const authStore = useAuthStore()
const { logout } = authStore

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(() => {
  userStore.fetchLoggedInUser()
})
</script>

<style>
</style>