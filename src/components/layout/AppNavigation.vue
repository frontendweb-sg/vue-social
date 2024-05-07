<template>
  <nav>
    <ul class="flex items-center space-x-5">
      <li>
        <router-link to="/" class="hover:text-rose-600">
          <Newspaper :size="20" />
        </router-link>
      </li>
      <li>
        <router-link to="/" class="hover:text-rose-600">
          <BellIcon :size="20" />
        </router-link>
      </li>
      <li>
        <navbar-user class="py-4" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { BellIcon, Newspaper } from 'lucide-vue-next'

import NavbarUser from '../common/NavbarUser.vue'
import BaseDropdown from '../ui/BaseDropdown.vue'
import DropdownItem from '../ui/DropdownItem.vue'
import { AppContent } from '@/utils/content'
</script>
