<template>
  <base-loader v-if="useLoader.visible" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import BaseLoader from './components/ui/BaseLoader.vue'
import { onMounted } from 'vue'
import { useAuthStore } from './modules/auth/store/auth'
import { useLoaderStore } from './store/loader'

const authStore = useAuthStore()

const useLoader = useLoaderStore()

onMounted(() => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    authStore.checkUserIsLoggedIn()
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>