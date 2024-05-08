<template>
  <div class="absolute left-6 -bottom-16 group flex items-center space-x-4">
    <div
      class="w-32 h-32 group ring-4 p-2 ring-white/70 relative group-hover:ring-white rounded-full overflow-hidden"
    >
      <base-avatar />
    </div>
    <div class="pt-12">
      <h6 class="font-medium text-purple-800 leading-5">
        {{ fullName }}
        <small class="flex items-center">
          <Smartphone :size="14" class="mr-2" /> {{ user?.mobile }}
        </small>
      </h6>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseAvatar from '@/components/ui/BaseAvatar.vue'
import useAuth from '@/composable/useAuth'
import { Smartphone } from 'lucide-vue-next'

const { user, fullName } = useAuth()
</script>

<style>
</style>