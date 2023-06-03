import { Controller, Get, Res, HttpStatus, Post, Body, Delete, Query, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CrearCategoriaDto } from './dto/categoria.dto';

@Controller('categorias')
export class CategoriasController {
    constructor(private serviciosCategoria: CategoriasService) { }
    @Get('/')
    async obtenerTodasLasCategorias(@Res() res) {
        const categoria = await this.serviciosCategoria.obtenerTodasLasCategorias();
        console.log(categoria)
        return res.status(HttpStatus.OK).json({
            categoria
        });
    }

    @Post('/crear')
    async crearUnaCategoria(@Res() res, @Body() crearCategoriaDto: CrearCategoriaDto) {
        const producto = await this.serviciosCategoria.crearUnaCategoria(crearCategoriaDto);
        return res.status(HttpStatus.OK).json({
            producto
        });
    }
    @Delete('/eliminar')
    async eliminarUnProducto(@Res() res, @Query('categoriaId') prodductoId) {
        const categoriaEliminada = await this.serviciosCategoria.eliminarUnaCategoria(prodductoId)
        if (!categoriaEliminada) {
            return { estado: "producto no existe" }
        }
        return res.status(HttpStatus.OK).json(
            categoriaEliminada
        )
    }

    @Put('/actualizar')
    async actualizarUnProducto(@Res() res, @Body() crearCategoriaDto: CrearCategoriaDto, @Query('categoriaId') productoId) {
        const actualizarCategoria = await this.serviciosCategoria.actualizarUnaCategoria(productoId, crearCategoriaDto);
        if (!actualizarCategoria) {
            return { estado: "producto no existe" }
        }
        return res.status(HttpStatus.OK).json(
            {
                actualizarCategoria
            }
        )

    }

}
