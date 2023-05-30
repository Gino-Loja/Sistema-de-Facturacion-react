import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { ProductoSchemas } from './schemas/producto.schemas'
import { Producto } from './interface/producto.interface'
import { CrearProductoDto } from './dto/producto.dto'

@Injectable()
export class ProductosService {
    constructor(@InjectModel('productos') private modeloProducto: Model<Producto>) { }
    async obtenerTodosLosProductos() {
        const productos = await this.modeloProducto.find();
        return productos;
    }

    async crearUnProducto(crearProductoDto: CrearProductoDto){
        const nuevoProducto =  new this.modeloProducto(crearProductoDto);
        return await nuevoProducto.save();
    }
    async actualizarUnProducto(productoId: string, crearProductoDto: CrearProductoDto) {
        const actualizaProducto = await this.modeloProducto.findByIdAndUpdate(productoId, crearProductoDto, {new: true});
        return actualizaProducto;
    }
    async eliminarUnProducto(productoId: string) {
        const elimarProducto = await this.modeloProducto.findByIdAndDelete(productoId);
        return elimarProducto;
    }

}
