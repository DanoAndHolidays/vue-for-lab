import { componentSizes } from 'element-plus'
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Hardwave from '../views/Home/components/Hardware.vue'
import Data from '../views/Data/index.vue'
const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
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
