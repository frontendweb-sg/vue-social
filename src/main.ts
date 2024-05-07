import { createApp, markRaw } from 'vue'
import App from './App.vue'

import router from './routes'
import { pinia } from './pinia'
import { GlobalComponents } from './plugins/components'

import 'vue3-toastify/dist/index.css'
import './assets/main.css'

const app = createApp(App)

// global component

// global directives

// global provider

// plugins
app.use(GlobalComponents, {})

// pinia
app.use(pinia)

// routes
app.use(router)

// app configuration

// mount app
app.mount('#app')
