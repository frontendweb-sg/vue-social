<template>
  <div class="border-b border-gray-2000 w-full">
    <base-container class="relative w-full">
      <ul class="flex items-center justify-end space-x-8 text-sm text-gray-500">
        <nav-item :class="linkClass" :active-class="active" to="/user">
          <LayoutDashboard :size="iconSize" /> <span>{{ AppContent.dashboard }}</span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/posts">
          <Newspaper :size="iconSize" /> <span> {{ AppContent.posts }} </span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/profile">
          <BookUser :size="iconSize" /> <span> {{ AppContent.profile }} </span></nav-item
        >
        <nav-item :class="linkClass" :active-class="active" to="/user/friend">
          <UserRound :size="iconSize" /> <span>{{ AppContent.friends }}</span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/group">
          <UsersRound :size="iconSize" /> <span> {{ AppContent.groups }}</span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/media">
          <Images :size="iconSize" /> <span> {{ AppContent.media }}</span>
        </nav-item>
      </ul>
    </base-container>
  </div>
</template>

<script lang="ts" setup>
import BaseContainer from '../../../components/ui/BaseContainer.vue'
import { AppContent } from '@/utils/content'
import {
  LayoutDashboard,
  BookUser,
  UsersRound,
  UserRound,
  Newspaper,
  Images
} from 'lucide-vue-next'
const linkClass = 'flex flex-col items-center py-4 space-y-1'
const active = 'text-rose-500'

const iconSize = 16
</script>

<style>
</style>