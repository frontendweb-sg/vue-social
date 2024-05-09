import { Api } from '@/axios_instance'
import type { Education, Employment, Profile } from '@/types'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<null | Profile>(null)

  // url
  // logged in user profile
  async function loggedInUserProfile() {
    try {
      const { data } = await Api.get<Profile>('/user/profile')
      profile.value = data
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function getProfileByUserId(userId: string) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function addProfile(requestBody: Profile) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function updateProfile(requestBody: Profile) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function addResume(requestBody: any) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function addEducation(requestBody: Education) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function deleteEducation(eduId: string) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function addEmployment(requestBody: Employment) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  function deleteEmployment(empId: string) {
    try {
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  return {
    profile,
    loggedInUserProfile,
    getProfileByUserId,
    addProfile,
    updateProfile,
    addResume,
    addEducation,
    deleteEducation,
    addEmployment,
    deleteEmployment
  }
})