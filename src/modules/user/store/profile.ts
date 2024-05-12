import { Api } from '@/axios_instance'
import type { Education, Employment, Profile } from '@/types'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile | object>({})
  const loading = ref(false)

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

  async function addProfile(requestBody: Profile) {
    try {
      loading.value = true
      const response = await Api.post<Profile>('/profile', requestBody)
      if (response.status === 201) {
        toast.success('Profile added!')
      }
      return response.data
    } catch (error) {
    } finally {
      loading.value = false
    }
  }

  async function updateProfile(requestBody: Profile) {
    try {
      loading.value = true
      const response = await Api.put<Profile>('/profile/' + requestBody.id, requestBody)
      profile.value = requestBody
      if (response.status === 200) {
        toast.success('Profile updated successfully!')
      }
      return response.data
    } catch (error) {
    } finally {
      loading.value = false
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
    loading,
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.url))
}
