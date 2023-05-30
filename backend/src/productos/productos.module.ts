import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductoSchemas } from './schemas/producto.schemas';
@Module({
  imports: [MongooseModule.forFeature([{ name:'productos', schema: ProductoSchemas }])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule { }
