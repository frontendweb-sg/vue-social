import { Api } from '@/axios_instance'
import type { IUser } from '@/types'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { toast } from 'vue3-toastify'

export const useUserStore = defineStore('userStore', {
  state(): { user: null | IUser } {
    return {
      user: null
    }
  },
  actions: {
    async fetchLoggedInUser() {
      try {
        const { data } = await Api.get('/user/me')
        this.user = data
        return data
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    }
  }
})
