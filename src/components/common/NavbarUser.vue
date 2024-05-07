<template>
  <base-dropdown>
    <template #button="{ toggle }">
      <div class="flex items-center" @click="toggle">
        <base-avatar class="w-8 h-8" :loading="loading" />
        <span class="ml-2 font-lato font-bold text-rose-700" v-if="shortName">{{ shortName }}</span>
      </div>
    </template>
    <dropdown-item :icon="User" :to="path + AppRoute.profile"
      >{{ AppContent.profile }}
    </dropdown-item>
    <dropdown-item :icon="Key" :to="path + AppRoute.profile">{{
      AppContent.changePassword
    }}</dropdown-item>
    <dropdown-item :icon="Settings" :to="path + AppRoute.settings">
      {{ AppContent.settings }}
    </dropdown-item>
    <base-divider />
    <dropdown-item @click="logout" :icon="LogOut">{{ AppContent.logout }}</dropdown-item>
  </base-dropdown>
</template>

<script lang="ts" setup>
import { User, Key, Settings, LogOut } from 'lucide-vue-next'
import useAuth from '@/composable/useAuth'
import BaseAvatar from '../ui/BaseAvatar.vue'
import BaseDropdown from '../ui/BaseDropdown.vue'
import DropdownItem from '../ui/DropdownItem.vue'
import BaseDivider from '../ui/BaseDivider.vue'
import { AppContent } from '@/utils/content'
import { AppRoute } from '@/utils/route'
import { computed } from 'vue'

const { shortName, loading, isAdmin, logout } = useAuth()
const path = computed(() => (isAdmin.value ? '/admin' : '/user'))
</script>

<style>
</style>