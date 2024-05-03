import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from './routes'
import type { Router } from 'vue-router'

const pinia = createPinia()

// plugin
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

declare module 'pinia' {
  interface PiniaCustomProperties {
    router: Router
  }
}

export { pinia }
