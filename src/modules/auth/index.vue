<template>
  <div class="bg-gradient-to-r from-blue-600 to-violet-600 h-full">
    <base-container class="max-w-[1280px]">
      <div class="grid h-screen grid-cols-2">
        <div class="col flex justify-center items-center flex-col">
          <div class="max-w-[450px] mx-auto">
            <app-logo to="/" class="text-lg" type="white" />
            <h1 class="pt-4 text-[28px] text-white">{{ AppContent.authHeading }}</h1>
            <p class="mt-3 leading-5 text-sm text-slate-300">
              {{ AppContent.homePageContent }}
            </p>
            <ul class="flex items-center justify-between mt-5 text-white">
              <li>
                <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                  <Users class="mb-2" />
                </span>
                <h6>Registered User</h6>
                <span>10,000</span>
              </li>
              <li>
                <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                  <Newspaper class="mb-2" />
                </span>

                <h6>Post published</h6>
                <span>1,000</span>
              </li>
              <li>
                <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                  <Heart class="mb-2"
                /></span>
                <h6>Happy users</h6>
                <span>10,000</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col relative flex items-center justify-center">
          <router-view />
        </div>
      </div>
    </base-container>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '../../components/layout/AppLogo.vue'
import { AppContent } from '../../utils/content'
import { Heart, Newspaper, Users } from 'lucide-vue-next'
import { useAuthStore } from './store/auth'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const { user, loading } = storeToRefs(authStore)

if (user.value) {
  let routePath = '/user'
  if (user.value?.role == 'admin') {
    routePath = '/admin'
  }
  router.replace(routePath)
}
</script>

<style>
</style>