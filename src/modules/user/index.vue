<template>
  <div class="bg-gray-50 flex-col flex min-h-full">
    <app-header></app-header>
    <hero />
    <user-nav-menu />
    <base-container class="flex-1 w-full">
      <div class="grid grid-cols-12 gap-6 min-h-full">
        <div class="col-span-3 py-6"><sidebar /></div>
        <div class="col-span-9 border-l pl-6 py-6">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </base-container>
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Hero from './widgets/Hero.vue'
import UserNavMenu from './widgets/UserNavMenu.vue'
import Sidebar from './widgets/Sidebar.vue'
</script>

<style>
</style>