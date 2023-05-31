import { Controller ,Get, Res, HttpStatus, Post, Body, Delete, Query, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CrearCategoriaDto } from './dto/categoria.dto';

@Controller('categorias')
export class CategoriasController {
    constructor( private serviciosCategoria: CategoriasService){}
    @Get('/')
    async obtenerTodasLasCategorias(@Res() res){
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

}
