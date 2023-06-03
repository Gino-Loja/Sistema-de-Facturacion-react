import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Usuario } from './interfaces/usuarios.interfaces';
import { CrearUsuariosDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel('usuarios') private modeloUsuario: Model<Usuario>) { }

    async obtenerTodosLosUsuarios() {
        const usuarios = await this.modeloUsuario.find();
        return usuarios;
    }

    async crearUnUsuario(crearUsuarioDto: CrearUsuariosDto) {
        const nuevoUsuarios = new this.modeloUsuario(crearUsuarioDto);
        return await nuevoUsuarios.save();
    }
    async actualizarUnUsuario(productoId: string, crearUsuarioDto: CrearUsuariosDto) {
        const actualizaUsuario = await this.modeloUsuario.findByIdAndUpdate(productoId, crearUsuarioDto, { new: true, versionKey: false });
        return actualizaUsuario;
    }
    async eliminarUnUsuario(productoId: string) {
        const elimarUsuario = await this.modeloUsuario.findByIdAndDelete(productoId);
        return elimarUsuario;
    }
}
