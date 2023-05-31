import { Injectable } from '@nestjs/common';
import { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { Categoria } from './interface/categoria.interface';
import { CrearCategoriaDto } from './dto/categoria.dto'
@Injectable()
export class CategoriasService {
    constructor(@InjectModel('categoria') private modeloCategoria: Model<Categoria>) { }
    async obtenerTodasLasCategorias() {
        const categoria = await this.modeloCategoria.find();
        return categoria;
    }

    async crearUnaCategoria(crearCategoriaDto: CrearCategoriaDto){
        const nuevaCategoria =  new this.modeloCategoria(crearCategoriaDto);
        return await nuevaCategoria.save();
    }
    async actualizarUnaCategoria(productoId: string, crearProductoDto: CrearCategoriaDto) {
        const actualizaCategoria = await this.modeloCategoria.findByIdAndUpdate(productoId, crearProductoDto, {new: true});
        return actualizaCategoria;
    }
    async eliminarUnaCategoria(productoId: string) {
        const elimarCategoria = await this.modeloCategoria.findByIdAndDelete(productoId);
        return elimarCategoria;
    }

}
