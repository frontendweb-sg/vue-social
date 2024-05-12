<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="(value, key) in profile" :key="key" class="flex items-center">
        <span class="w-28">{{ key }}</span>
        <base-date v-if="key === 'dob'" :date="value" />
        <template v-else-if="key === 'skills'">
          <span v-for="skill in value" :key="skill">
            {{ skill }}
          </span>
        </template>
        <span v-else class="text-slate-600">{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Profile } from '@/types'
import { computed } from 'vue'

interface Props {
  loading: boolean
  profile: Profile | object
}
const props = defineProps<Props>()
</script>
<style></style>
