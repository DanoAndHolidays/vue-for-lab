import { componentSizes } from 'element-plus'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Hardwave from '../views/Home/components/Hardwave.vue'
import Data from '../views/Home/components/Data.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      children:
        [{
          path: '',
          component: Hardwave
        },
        {
          path: 'Data',
          component: Data
        }]
    },
    {
      path: '/Store',
      component: Hardwave
    }
  ]
})

export default router
