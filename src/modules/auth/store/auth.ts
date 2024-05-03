import { Api } from '@/axios_instance'
import { defineStore } from 'pinia'
import type { IUser, LoginRequest, LoginResponse } from '@/types'
import { toast } from 'vue3-toastify'
import { useRoute, useRouter } from 'vue-router'

interface AuthState {
  loading: boolean
  user: null | IUser
  accessToken: null | string
}
/**
 * Auth store
 */
let time: ReturnType<typeof setTimeout>
export const useAuthStore = defineStore('auth', {
  state(): AuthState {
    return {
      loading: false,
      user: null,
      accessToken: null
    }
  },
  getters: {
    isAuth(state) {
      return !!state.accessToken
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

        this.autoLogout(expireIn)
        this.checkUserIsLoggedIn()

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
    },

    logout() {
      if (time) {
        clearTimeout(time)
      }

      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('expireTime')

      this.user = null
      this.accessToken = null
    },

    autoLogout(timer: number) {
      time = setTimeout(() => this.logout(), timer * 1000)
    },

    checkUserIsLoggedIn() {
      const accessToken = localStorage.getItem('accessToken')
      const expireTime = Number(localStorage.getItem('expireTime'))
      const user = JSON.parse(localStorage.getItem('user') as string) as IUser

      if (new Date().getTime() > expireTime || !accessToken) {
        return this.logout()
      }

      this.user = user
      this.accessToken = accessToken

      this.autoLogout((expireTime - Date.now()) / 1000)
    }
  }
})
