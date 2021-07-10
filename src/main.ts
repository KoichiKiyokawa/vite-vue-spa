import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import 'virtual:windi-devtools'
import 'virtual:windi.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHistory(),
})

const app = createApp(App)
Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
  i.install?.({ app, router })
)
app.mount('#app')
