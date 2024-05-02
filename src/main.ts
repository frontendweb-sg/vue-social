import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import 'vue3-toastify/dist/index.css'
import router from './routes'

const app = createApp(App)

// global component

// global directives

// global provider

// pinia
const pinia = createPinia()
app.use(pinia)

// routes
app.use(router)

// app configuration

// mount app
app.mount('#app')
