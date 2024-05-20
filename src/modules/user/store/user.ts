import { Api } from '@/axios_instance'
import type { IUser } from '@/types'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useProfileStore } from './profile'

export const useUserStore = defineStore('userStore', () => {
  const userInfo = ref<IUser | null>(null)
  const loading = ref(false)

  const profileStore = useProfileStore()

  async function fetchLoggedInUser() {
    try {
      loading.value = true
      const { data } = await Api.get('/user/me')
      await profileStore.loggedInUserProfile()
      userInfo.value = data
      return data
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, userInfo, fetchLoggedInUser }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
