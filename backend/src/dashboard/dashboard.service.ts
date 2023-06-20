import { Injectable } from '@nestjs/common';
import {Connection}  from 'mongoose'
import { InjectConnection  } from '@nestjs/mongoose'
import { ProductoD } from './interfaces/producto.interface';
import { Usuario } from './interfaces/usuarios.interfaces';
import { Cliente } from './interfaces/clientes.interface';
import { Categoria } from './interfaces/categoria.interface';
@Injectable()
export class DashboardService {
    constructor(@InjectConnection() private connection: Connection) {

     }
    
    async contarTodosLosProductos() {
        const productos = await this.connection.db.collection('productos').find().count()
        return productos;
    }
    async contarTodosLosUsuarios() {
        const usuarios = await this.connection.db.collection('usuarios').find().count()
        return usuarios;
    }
    async contarTodosLosClientes() {
        const cliente = await this.connection.db.collection('clientes').find().count()
        return cliente;
    }
    async contarTodosLasCategorias() {
        const categoria = await this.connection.db.collection('categoria').find().count()
        return categoria;
    }

}
