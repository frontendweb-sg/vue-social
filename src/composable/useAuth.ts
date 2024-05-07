import { useAuthStore } from '@/modules/auth/store/auth'
import { storeToRefs } from 'pinia'

export default function useAuth() {
  const authStore = useAuthStore()
  const { shortName, fullName, accessToken, isAdmin, isAuth, isUser, loading, user } =
    storeToRefs(authStore)

  const { logout } = authStore
  return {
    shortName,
    fullName,
    accessToken,
    isAdmin,
    isAuth,
    isUser,
    loading,
    user,
    logout
  }
}
