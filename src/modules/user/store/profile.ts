import { Api } from '@/axios_instance'
import type { Education, Profile } from '@/types'
import { raiseToast, removeEmptyKeyFromObject } from '@/utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { toast } from 'vue3-toastify'

/**
 * Profile store
 */
export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile | null>(null)
  const loading = ref(false)

  // url
  const userProfileUrl = '/user/profile'
  const profileUrl = '/profile'

  async function loggedInUserProfile() {
    try {
      const { data } = await Api.get<Profile>(userProfileUrl)
      profile.value = data
    } catch (error) {
      raiseToast(error)
    }
  }

  async function addProfile(requestBody: Profile) {
    try {
      loading.value = true
      const response = await Api.post<Profile>(profileUrl, requestBody)
      if (response.status === 201) {
        profile.value = response.data
        toast.success('Profile added!')
      }
      return response.data
    } catch (error) {
      raiseToast(error)
    } finally {
      loading.value = false
    }
  }

  async function updateProfile(requestBody: Profile) {
    try {
      loading.value = true
      const response = await Api.put<Profile>('/profile/' + requestBody.id, requestBody)
      profile.value = response.data
      if (response.status === 200) {
        toast.success('Profile updated successfully!')
      }
      return response.data
    } catch (error) {
      raiseToast(error)
    } finally {
      loading.value = false
    }
  }

  async function addEducation(profileId: string, requestBody: Education) {
    try {
      const response = await Api.post<Education[]>(
        `/profile/${profileId}/education`,
        removeEmptyKeyFromObject(requestBody)
      )
      if (response.status === 201) {
        toast.success('Education added successfully!')
      }

      profile.value = {
        ...profile.value,
        education: response.data
      } as Profile
    } catch (error) {
      raiseToast(error)
    }
  }

  async function updateEducation(profileId: string, requestBody: Education) {
    try {
      profile.value?.education?.map((education) =>
        education.id === requestBody.id ? { ...education, ...requestBody } : education
      )

      const response = await Api.put(
        `/profile/${profileId}/education/${requestBody.id}`,
        removeEmptyKeyFromObject(requestBody)
      )
      if (response.status === 200) {
        toast.success('Education updated successfully!')
      }

      profile.value = {
        ...profile.value,
        education: response.data
      } as Profile
    } catch (error) {
      raiseToast(error)
    }
  }

  async function deleteEducation(profileId: string, educationId: string) {
    try {
      const confirm = window.confirm('Are you sure?')
      if (!confirm) return

      const response = await Api.delete(`/profile/${profileId}/education/${educationId}`)
      if (response.status === 200) {
        toast.success('Education deleted successfully!')
      }
      profile.value = computed(
        () =>
          ({
            ...profile.value,
            education: profile.value?.education?.filter((edu) => edu.id !== educationId)
          }) as Profile
      ).value
    } catch (error) {
      raiseToast(error)
    }
  }

  return {
    loading,
    profile,
    loggedInUserProfile,
    addProfile,
    updateProfile,
    addEducation,
    updateEducation,
    deleteEducation
  }
})
