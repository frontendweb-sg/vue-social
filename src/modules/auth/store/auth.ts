import { Api } from '@/axios_instance'
import type { Signin } from '@/types'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  getters() {},
  actions: {
    async login(payload: Signin) {
      try {
        const response = await Api.post('/auth', payload)
      } catch (error) {}
    },
    async register() {},
    logout() {}
  }
})
