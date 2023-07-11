import { createRouter, createWebHistory } from 'vue-router'

import DashBoard from '../views/DashBoard.vue'
import PagesProductos from '../views/PageProductos.vue'
import PageUsuarios from '../views/PageUsuarios.vue'
import PageClientes from '../views/PageClientes.vue'
import PageCategorias from '../views/PageCategorias.vue'
import NuevaFactura from '../views/facturas/NuevaFactura.vue'
import VerFacturas from '../views/facturas/VerFacturas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashBoard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/productos',
      name: 'productos',
      component: PagesProductos
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: PageUsuarios
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: PageClientes
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: PageCategorias
    },
    {
      path: '/nueva-factura',
      name: 'nueva-factura',
      component: NuevaFactura
    },
    {
      path: '/ver-facturas',
      name: 'ver-facturas',
      component: VerFacturas
    },
    
  ]
})

export default router
