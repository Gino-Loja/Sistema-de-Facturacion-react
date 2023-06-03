import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from './interfaces/clientes.interface';
import { CrearClienteDto } from './dto/clientes.dto';

@Injectable()
export class ClientesService {
    constructor(@InjectModel('clientes') private modeloClientes:Model<Cliente>){}
    async obtenerTodosLosClientes() {
        const clientes = await this.modeloClientes.find();
        return clientes;
    }

    async crearUnCliente(crearClienteDto: CrearClienteDto) {
        const nuevoClientes = new this.modeloClientes(crearClienteDto);
        return await nuevoClientes.save();
    }
    async actualizarUnCliente(clienteId: string, crearClienteDto: CrearClienteDto) {
        const actualizar = await this.modeloClientes.findByIdAndUpdate(clienteId, crearClienteDto, { new: true, versionKey: false });
        return actualizar;
    }
    async eliminarUnCliente(clienteId: string) {
        const elimarCliente = await this.modeloClientes.findByIdAndDelete(clienteId);
        return elimarCliente;
    }
}
