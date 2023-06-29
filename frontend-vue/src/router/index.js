import { createRouter, createWebHistory } from 'vue-router'

import DashBoard from '../views/DashBoard.vue'
import PagesProductos from '../views/PageProductos.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:DashBoard
  

    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path:'/productos',
      name:'productos',
      component: PagesProductos

    }
  ]
})

export default router
