<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <h2>Profiel</h2>
      <base-button @click="handleOpen" variant="text" as="icon">
        <EditIcon :size="16" />
      </base-button>
    </div>
    <base-divider />
    <profile-info :loading="loading" :profile="profile"></profile-info>
    <base-modal v-if="open" @close="handleClose">
      <div v-if="loading"></div>
      <profile-form v-else @close="handleClose" />
    </base-modal>
  </div>
</template>

<script setup lang="ts">
import ProfileInfo from '../../widgets/ProfileInfo.vue'
import ProfileForm from '../../widgets/ProfileForm.vue'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '../../store/profile'
import { EditIcon, PlusIcon } from 'lucide-vue-next'
import { useToggle } from '@/composable/useToggle'
import type { Profile } from '@/types'
import { watch } from 'vue'
const { handleClose, handleOpen, open } = useToggle()

const profileStore = useProfileStore()
const { profile, loading } = storeToRefs(profileStore)
</script>

<style>
</style>