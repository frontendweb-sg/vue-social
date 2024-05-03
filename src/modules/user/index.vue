<template>
  <h1>User page - {{ user }}</h1>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from './store/user'
import { onMounted } from 'vue'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(() => {
  userStore.fetchLoggedInUser()
})
</script>

<style>
</style>