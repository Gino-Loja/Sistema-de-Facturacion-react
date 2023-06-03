import { Controller, Get, Res, HttpStatus, Put, Delete, Body, Post, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CrearClienteDto } from './dto/clientes.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private servicioClientes: ClientesService) { }
    @Get('/')
    async ObtenerTodosLosUsuario(@Res() res) {
        const clientes = await this.servicioClientes.obtenerTodosLosClientes();

        return res.status(HttpStatus.OK).json({
            clientes
        })
    }
    @Post('/crear')
    async crearUnUsuario(@Res() res, @Body() crearClienteDto: CrearClienteDto) {
        const clientes = await this.servicioClientes.crearUnCliente(crearClienteDto);
        return res.status(HttpStatus.OK).json({
            clientes
        });
    }

    @Delete('/eliminar')
    async eliminarUnUsuario(@Res() res, @Query('clienteId') clienteId) {
        const clienteEliminado = await this.servicioClientes.eliminarUnCliente(clienteId)
        if (!clienteEliminado) {
            return { estado: "usuario no existe" }
        }
        return res.status(HttpStatus.OK).json(
            clienteEliminado
        )
    }

    @Put('/actualizar')
    async actualizarUnProducto(@Res() res, @Body() crearClienteDto: CrearClienteDto, @Query('clienteId') clienteId) {
        const actualizarCliente = await this.servicioClientes.actualizarUnCliente(clienteId, crearClienteDto);
        if (!actualizarCliente) {
            return { estado: "usuario no existe" }
        }
        return res.status(HttpStatus.OK).json(
            {
                actualizarCliente
            }
        )

    }
}
