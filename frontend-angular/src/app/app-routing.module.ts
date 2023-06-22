import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { NuevaFacturaComponent } from './paginas/facturas/nueva-factura/nueva-factura.component';
import { VerFacturasComponent } from './paginas/facturas/ver-facturas/ver-facturas.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path:'clientes',

    component:ClientesComponent
  },{
    path:'categorias',

    component:CategoriasComponent
  },
  {
    path:'nueva-factura',

    component:NuevaFacturaComponent
  },
  {
    path:'ver-facturas',

    component:VerFacturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
