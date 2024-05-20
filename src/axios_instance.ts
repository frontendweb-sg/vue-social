import axios from 'axios'
import { raiseToast } from './utils'
import { useAuthStore } from './modules/auth/store/auth'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  } else {
    delete config.headers['Authorization']
  }
  return config
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const store = useAuthStore()
    if (error.response.status === 401) {
      store.logout()
    }
  }
)

export { instance as Api }
