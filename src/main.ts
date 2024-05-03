import { createApp, markRaw } from 'vue'
import App from './App.vue'

import router from './routes'
import { pinia } from './pinia'

import 'vue3-toastify/dist/index.css'
import './assets/main.css'

const app = createApp(App)

// global component

// global directives

// global provider

// pinia
app.use(pinia)

// routes
app.use(router)

// app configuration

// mount app
app.mount('#app')
