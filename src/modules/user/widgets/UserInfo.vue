<template>
  <base-card title="User info">
    <base-list-skeleton v-if="loading" />
    <ul class="space-y-2 text-sm" v-else>
      <li class="flex justify-between items-center">
        <span>Name</span>
        <span>{{ fullName }}</span>
      </li>
      <li class="flex justify-between items-center">
        <span>Email</span>
        <span :title="user?.email">{{ user?.email.substring(0, user.email.indexOf('@')) }}</span>
      </li>
      <li class="flex justify-between items-center">
        <span>Mobile</span>
        <span>{{ user?.mobile }}</span>
      </li>
      <li class="flex justify-between items-center">
        <span>Joined Us:</span>
        <base-date :date="user?.createdAt" />
      </li>
    </ul>
  </base-card>
</template>

<script setup lang="ts">
import useAuth from '@/composable/useAuth'
import { format } from 'date-fns'
const { loading, user, fullName } = useAuth()
</script>
