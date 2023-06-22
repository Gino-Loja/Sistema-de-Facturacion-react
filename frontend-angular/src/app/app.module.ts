import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms'
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { NavComponent } from './component/nav/nav.component';
import { ModalProductoAddComponent } from './component/modal/modal-producto-add/modal-producto-add.component';
import { ModalEditarProductoComponent } from './component/modal/modal-editar-producto/modal-editar-producto.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { UsuarioEditarModalComponent } from './component/modal/usuario-editar-modal/usuario-editar-modal.component';
import { UsuarioAddModalComponent } from './component/modal/usuario-add-modal/usuario-add-modal.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { NuevaFacturaComponent } from './paginas/facturas/nueva-factura/nueva-factura.component';
import { VerFacturasComponent } from './paginas/facturas/ver-facturas/ver-facturas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavComponent,
    ModalProductoAddComponent,
    ModalEditarProductoComponent,
    UsuariosComponent,
    UsuarioEditarModalComponent,
    UsuarioAddModalComponent,
    DashboardComponent,
    ClientesComponent,
    CategoriasComponent,
    NuevaFacturaComponent,
    VerFacturasComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    NgChartsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
