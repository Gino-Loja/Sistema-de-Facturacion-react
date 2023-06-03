import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose'
import { CategoriasModule } from './categorias/categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gino:12345@cluster0.qmbvrgo.mongodb.net/sistema_facturacion_test?retryWrites=true&w=majority'),ProductosModule,CategoriasModule, UsuariosModule, ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
