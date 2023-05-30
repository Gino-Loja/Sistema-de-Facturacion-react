import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ProductosModule,MongooseModule.forRoot('mongodb+srv://gino:12345@cluster0.qmbvrgo.mongodb.net/sistema_facturacion_test?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule { }
