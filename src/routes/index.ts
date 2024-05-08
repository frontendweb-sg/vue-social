import { useAuthStore } from '@/modules/auth/store/auth'
import { useLoaderStore } from '@/store/loader'
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
        path: 'reset-password/:token?',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "auth-reset-password" */ '@/modules/auth/pages/reset-password/ResetPassword.vue'
          )
      },
      {
        path: 'auth/verify-email/:token?',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "auth-verify-email" */ '@/modules/auth/pages/verify-email/VerifyEmail.vue'
          )
      }
    ]
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '@/modules/user/index.vue'),
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "user-dash" */ '@/modules/user/pages/dashboard/Dashboard.vue')
      },
      {
        path: 'posts',
        component: () =>
          import(/* webpackChunkName: "user-posts" */ '@/modules/user/pages/posts/Posts.vue')
      },
      {
        path: 'photos',
        component: () =>
          import(/* webpackChunkName: "user-photos" */ '@/modules/user/pages/photos/Photos.vue')
      },
      {
        path: 'videos',
        component: () =>
          import(/* webpackChunkName: "user-videos" */ '@/modules/user/pages/videos/Videos.vue')
      },
      {
        path: 'friend',
        component: () =>
          import(/* webpackChunkName: "user-friend" */ '@/modules/user/pages/friends/Friends.vue')
      },
      {
        path: 'group',
        component: () =>
          import(/* webpackChunkName: "user-group" */ '@/modules/user/pages/groups/Groups.vue')
      },
      {
        path: 'media',
        component: () =>
          import(/* webpackChunkName: "user-media" */ '@/modules/user/pages/media/Media.vue')
      },
      {
        path: 'settings',
        component: () =>
          import(
            /* webpackChunkName: "user-settings" */ '@/modules/user/pages/settings/Setting.vue'
          )
      },
      {
        path: 'profile',
        component: () =>
          import(/* webpackChunkName: "user-profile" */ '@/modules/user/pages/profile/Profile.vue')
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
  strict: true,
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

router.beforeResolve((to, from, next) => {
  const useLoader = useLoaderStore()

  if (to.path) {
    useLoader.loadingStart()
  }
  next()
})

router.afterEach(() => {
  const useLoader = useLoaderStore()
  useLoader.loadingEnd()
})
export default router
