<template>
  <base-card title="Educations">
    <template #header>
      <base-button as="icon" @click="handleOpen">
        <EditIcon :size="16" />
      </base-button>
    </template>

    <div v-for="education in educations" :key="education.id">
      {{ education }} <base-button @click="onEditing(education)">
        <EditIcon :size="16" />
      </base-button>
      <base-button @click="profileStore.deleteEducation(profileId!, education.id!)">
        <EditIcon :size="16" />
      </base-button>
    </div>
  </base-card>

  <base-modal :open="open" @close="handleClose" :label="educationData ? 'Update education' : 'Add education'">
    <education-form :data="educationData!" :profile-id="profileId!" @close="handleClose" />
  </base-modal>
</template>

<script setup lang="ts">
import type { Education } from '@/types'
import EducationForm from './EducationForm.vue'
import { useToggle } from '@/composable/useToggle'
import { EditIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue';
import { useProfileStore } from '../store/profile';

const educationData = ref<null | Education>(null)

const profileStore = useProfileStore()

interface Props {
  educations: Education[],
  profileId: string | undefined
}

defineProps<Props>()

const { open, handleClose, handleOpen } = useToggle()

const onEditing = (education: Education) => {
  educationData.value = education
  handleOpen()
}

watch(open, (v) => {
  if (!v) { educationData.value = null; }
})


</script>

<style></style>