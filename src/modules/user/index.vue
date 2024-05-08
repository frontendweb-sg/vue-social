<template>
  <div class="bg-gray-50 flex-col flex min-h-full">
    <app-header></app-header>
    <hero />
    <base-container class="flex-1 w-full">
      <main class="flex-1 my-6 mx-auto">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-3"><sidebar /></div>
          <div class="col-span-9">
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </div>
      </main>
    </base-container>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import Hero from './widgets/Hero.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import Sidebar from './widgets/Sidebar.vue'
</script>

<style>
</style>