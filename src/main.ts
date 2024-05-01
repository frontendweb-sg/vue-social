import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/main.css'

const app = createApp(App)

// global component

// global directives

// global provider

// pinia
const pinia = createPinia()
app.use(pinia)

// routes

// app configuration

// mount app
app.mount('#app')
