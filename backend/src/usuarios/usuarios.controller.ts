import { Controller, Get, Res ,HttpStatus, Put, Delete, Body, Post, Query} from '@nestjs/common';
import { UsuariosService } from './usuarios.service'
import { CrearUsuariosDto } from './dto/usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private servicioUsuario: UsuariosService) { }

    @Get('/')
    async ObtenerTodosLosUsuario(@Res() res ) {
        const usuarios = await this.servicioUsuario.obtenerTodosLosUsuarios();
      
       return res.status(HttpStatus.OK).json({
            usuarios
        })
    }
    @Post('/crear')
    async crearUnUsuario(@Res() res, @Body() crearUsuarioDto: CrearUsuariosDto) {
        const usuario = await this.servicioUsuario.crearUnUsuario(crearUsuarioDto);
        return res.status(HttpStatus.OK).json({
            usuario
        });
    }

    @Delete('/eliminar')
    async eliminarUnUsuario(@Res() res, @Query('usuarioId') prodductoId) {
        const usuarioEliminado = await this.servicioUsuario.eliminarUnUsuario(prodductoId)
        if (!usuarioEliminado) {
            return { estado: "usuario no existe" }
        }
        return res.status(HttpStatus.OK).json(
            usuarioEliminado
        )
    }

    @Put('/actualizar')
    async actualizarUnProducto(@Res() res, @Body() crearUsuarioDto: CrearUsuariosDto, @Query('usuarioId') productoId) {
        const actualizarUsuario = await this.servicioUsuario.actualizarUnUsuario(productoId, crearUsuarioDto);
        if (!actualizarUsuario) {
            return { estado: "usuario no existe" }
        }
        return res.status(HttpStatus.OK).json(
            {
                actualizarUsuario
            }
        )

    }

}
