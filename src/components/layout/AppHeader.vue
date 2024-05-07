<template>
  <header class="bg-white shadow-md">
    <base-container class="flex items-center justify-between">
      <app-logo to="/user"></app-logo>
      <app-navigation></app-navigation>
    </base-container>
  </header>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import BaseContainer from '../ui/BaseContainer.vue'
import AppNavigation from './AppNavigation.vue'
</script>

<style>
</style>