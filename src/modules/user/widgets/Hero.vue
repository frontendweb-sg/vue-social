<template>
  <div
    class="bg-slate-100 group h-80 bg-cover bg-center before:absolute before:content-[''] before:w-full before:h-full before:bg-slate-900/60 relative"
    :style="{ backgroundImage: `url('/bg.jpg')` }"
  >
    <base-container class="relative h-full">
      <hero-avatar />
      <hero-upload />
    </base-container>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import HeroAvatar from './HeroAvatar.vue'
import HeroUpload from './HeroUpload.vue'
</script>

<style>
</style>