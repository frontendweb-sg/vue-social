import { Api } from '@/axios_instance'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IUser } from '@/types'
import { toast } from 'vue3-toastify'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { raiseToast } from '@/utils'

/**
 * Auth store
 */
let time: ReturnType<typeof setTimeout>

export const useAuthStore = defineStore('auth', () => {
  // reactive state
  const loading = ref(false)
  const user = ref<IUser | null>(null)
  const accessToken = ref<null | string>(null)

  // router
  const router = useRouter()

  // handlers
  function logout() {
    if (time) clearTimeout(time)
    $reset()
    router.push('/')
  }

  function autoLogout(timer: number) {
    time = setTimeout(() => logout(), timer * 1000)
  }

  function checkUserIsLoggedIn() {
    const token = localStorage.getItem('accessToken')
    const expireTime = Number(localStorage.getItem('expireTime'))
    const userData = JSON.parse(localStorage.getItem('user') as string) as IUser

    if (new Date().getTime() > expireTime || !token) {
      logout()
    } else {
      user.value = userData
      accessToken.value = token
      autoLogout((expireTime - Date.now()) / 1000)
    }
  }

  async function login(requestBody: LoginRequest) {
    try {
      loading.value = true
      const { data } = await Api.post<LoginResponse>('/auth', requestBody)
      const { accessToken, expireIn, user } = data

      const expireTime = new Date(Date.now()).getTime() + expireIn * 1000

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('expireTime', String(expireTime))

      autoLogout(expireIn)
      checkUserIsLoggedIn()

      if (user.role === 'admin') {
        router.replace('/admin')
      } else {
        router.replace('/user')
      }
    } catch (error) {
      raiseToast(error as Error)
    } finally {
      loading.value = false
    }
  }

  async function register(requestBody: RegisterRequest) {
    try {
      loading.value = true

      const response = await Api.post('/auth/signup', requestBody)
      toast.success('Account created successfully!, please login')

      setTimeout(() => {
        router.replace('/')
      }, 3000)

      return response.data
    } catch (error) {
      raiseToast(error as Error)
    } finally {
      loading.value = false
    }
  }

  async function forgotPassword(requestBody: { email: string }) {
    try {
      loading.value = true
      const response = await Api.post('/auth/forgot-password', requestBody)

      return response.data
    } catch (error) {
      raiseToast(error as Error)
    } finally {
      loading.value = false
    }
  }

  async function resetPassword(requestBody: { password: string }) {
    try {
      loading.value = true
      const response = await Api.post('/auth/reset-password', requestBody)
      toast.success('Password updated successfully!')

      setTimeout(() => {
        router.replace('/')
      }, 3000)

      return response.data
    } catch (error) {
      raiseToast(error as Error)
    } finally {
      loading.value = false
    }
  }

  function $reset() {
    loading.value = false
    user.value = null
    accessToken.value = null

    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('expireTime')
  }

  // computed properties
  const isAuth = computed(() => !!accessToken.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const isUser = computed(() => user.value?.role === 'user')

  return {
    isAuth,
    loading,
    user,
    accessToken,
    isAdmin,
    isUser,
    logout,
    checkUserIsLoggedIn,
    login,
    register,
    forgotPassword,
    resetPassword,
    $reset
  }

  // state(): AuthState {
  //   return {
  //     loading: false,
  //     user: null,
  //     accessToken: null
  //   }
  // },
  // getters: {
  //   isAuth(state) {
  //     return !!state.accessToken
  //   }
  // },
  // actions: {
  //   async login(request: LoginRequest) {
  //     this.loading = true
  //     try {
  //       const {
  //         data: { accessToken, expireIn, user }
  //       } = await Api.post<LoginResponse>('/auth', request)
  //       const expireTime = new Date(Date.now()).getTime() + expireIn * 1000
  //       localStorage.setItem('expireTime', String(expireTime))
  //       localStorage.setItem('accessToken', accessToken)
  //       localStorage.setItem('user', JSON.stringify(user))
  //       this.autoLogout(expireIn)
  //       this.checkUserIsLoggedIn()
  //       if (user.role == 'admin') {
  //         this.router.replace('/admin')
  //       }
  //       if (user.role === 'user') {
  //         this.router.replace('/user')
  //       }
  //     } catch (error) {
  //       if (error instanceof Error) toast.error(error.message)
  //     } finally {
  //       this.loading = false
  //     }
  //   },
  //   logout() {
  //     if (time) {
  //       clearTimeout(time)
  //     }
  //     localStorage.removeItem('user')
  //     localStorage.removeItem('accessToken')
  //     localStorage.removeItem('expireTime')
  //     this.$reset()
  //   },
  //   autoLogout(timer: number) {
  //     time = setTimeout(() => this.logout(), timer * 1000)
  //   },
  //   checkUserIsLoggedIn() {
  //     const accessToken = localStorage.getItem('accessToken')
  //     const expireTime = Number(localStorage.getItem('expireTime'))
  //     const user = JSON.parse(localStorage.getItem('user') as string) as IUser
  //     if (new Date().getTime() > expireTime || !accessToken) {
  //       return this.logout()
  //     }
  //     this.user = user
  //     this.accessToken = accessToken
  //     this.autoLogout((expireTime - Date.now()) / 1000)
  //   }
  // }
})

interface AuthState {
  loading: boolean
  user: null | IUser
  accessToken: null | string
}
export interface LoginRequest {
  email: string
  password: string
}
export interface LoginResponse {
  user: IUser
  accessToken: string
  expireIn: number
}

export interface RegisterRequest {
  firstname: string
  lastname: string
  email: string
  password: string
  mobile: string
}
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
