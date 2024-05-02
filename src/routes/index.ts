import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/index.vue'),
    alias: ['/signin'],
    children: [
      {
        path: '',
        component: () => import('@/modules/auth/signin/SigninPage.vue')
      },
      {
        path: 'signup',
        component: () => import('@/modules/auth/signup/SignupPage.vue')
      },
      {
        path: 'forgot-password',
        component: () => import('@/modules/auth/forgot-password/ForgotPassword.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '@/modules/user/index.vue'),
    meta: {
      requireAuth: true
    }
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
    } else {
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requireAuth)) {
    return next('/')
  } else next()
})

export default router
