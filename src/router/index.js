import { componentSizes } from 'element-plus'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Hardwave from '../views/Home/components/Hardwave.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Store',
      component: Hardwave
    }
  ]
})

export default router
