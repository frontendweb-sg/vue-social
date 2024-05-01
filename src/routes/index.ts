import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/modules/auth/index.vue'),
    alias: ['/signin'],
    children: [
      {
        path: '',
        component: () => import('@/modules/auth/signin/SigninPage.vue')
      },
      {
        path: 'signup',
        component: () => import('@/modules/auth/signup/SignupPage.vue')
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
    } else {
    }
  }
})

export default router
