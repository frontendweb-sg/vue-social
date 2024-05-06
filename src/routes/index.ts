import { useAuthStore } from '@/modules/auth/store/auth'
import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

// Routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/index.vue'),
    alias: ['/signin'],
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "auth-signin" */ '@/modules/auth/pages/signin/SigninPage.vue')
      },
      {
        path: 'signup',
        component: () =>
          import(/* webpackChunkName: "auth-signup" */ '@/modules/auth/pages/signup/SignupPage.vue')
      },
      {
        path: 'forgot-password',
        component: () =>
          import(
            /* webpackChunkName: "auth-forgot-password" */ '@/modules/auth/pages/forgot-password/ForgotPassword.vue'
          )
      },
      {
        path: 'auth/verify-email/:token?',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "verify-email" */ '@/modules/auth/pages/verify-email/VerifyEmail.vue'
          )
      }
    ]
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '@/modules/user/index.vue'),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'profile',
        component: () => import(/* */ '@/modules/user/pages/profile/Profile.vue')
      }
    ]
  },
  {
    path: '/:matchPath(.*)',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, scrollBehavior) {
    if (scrollBehavior) {
      return scrollBehavior
    }
  }
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some((route) => route.meta.requireAuth) && !authStore.isAuth) {
    return next(`/?redirectUrl=${to.path}`)
  } else {
    if (authStore.isAuth && !authStore.isAdmin && to.path === '/admin') {
      return next('/user')
    } else if (authStore.isAuth && !authStore.isUser && to.path === '/user') {
      return next('/admin')
    } else {
      return next()
    }
  }
})

export default router
