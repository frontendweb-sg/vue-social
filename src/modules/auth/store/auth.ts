import { Api } from '@/axios_instance'
import { defineStore } from 'pinia'
import type { LoginResponse, LoginRequest } from '@/types'
import { toast } from 'vue3-toastify'
import { useRoute, useRouter } from 'vue-router'

/**
 * Auth store
 */
export const useAuthStore = defineStore('auth', {
  state() {
    return {
      loading: false,
      user: null
    }
  },
  actions: {
    async login(request: LoginRequest) {
      this.loading = true
      try {
        const {
          data: { accessToken, expireIn, user }
        } = await Api.post<LoginResponse>('/auth', request)

        const expireTime = new Date(Date.now()).getTime() + expireIn * 1000
        localStorage.setItem('expireTime', String(expireTime))
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('user', JSON.stringify(user))

        if (user.role == 'admin') {
          this.router.replace('/admin')
        }
        if (user.role === 'user') {
          this.router.replace('/user')
        }
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      } finally {
        this.loading = false
      }
    }
  }
})
