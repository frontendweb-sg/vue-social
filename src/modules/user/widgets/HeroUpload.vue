<template>
  <div class="absolute right-0 bottom-4 invisible group-hover:visible">
    <base-button color="default">
      <Camera :size="16" class="mr-2" /> {{ AppContent.changeCover }}</base-button
    >
  </div>
</template>

<script setup lang="ts">
import { AppContent } from '@/utils/content'
import { Camera } from 'lucide-vue-next'
</script>

