<template>
  <h1>User page - {{ user }}</h1>

  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from './store/user'
import { onMounted } from 'vue'
import { useAuthStore } from '../auth/store/auth'

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