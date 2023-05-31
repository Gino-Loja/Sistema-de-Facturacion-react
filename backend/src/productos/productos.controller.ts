import { Controller, Get, Res, HttpStatus, Post, Body, Delete, Query, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/producto.dto'

@Controller('productos')
export class ProductosController {

    constructor(private serviciosProductos: ProductosService) { }
    @Get('/')
    async obtenerTodosLosProductos(@Res() res) {
        const productos = await this.serviciosProductos.obtenerTodosLosProductos();
        console.log(productos)
        return res.status(HttpStatus.OK).json({
            productos
        });
    }
    @Post('/crear')
    async crearUnProducto(@Res() res, @Body() crearUnProductDto: CrearProductoDto) {
        const producto = await this.serviciosProductos.crearUnProducto(crearUnProductDto);
        return res.status(HttpStatus.OK).json({
            producto
        });
    }

    @Delete('/eliminar')
    async eliminarUnProducto(@Res() res, @Query('productoId') prodductoId) {
        const productoEliminado = await this.serviciosProductos.eliminarUnProducto(prodductoId)
        if (!productoEliminado) {
            return { estado: "producto no existe" }
        }
        return res.status(HttpStatus.OK).json(
            productoEliminado
        )
    }

    @Put('/actualizar')
    async actualizarUnProducto(@Res() res, @Body() createProductDto: CrearProductoDto, @Query('productoId') productoId) {
        const actualizarProducto = await this.serviciosProductos.actualizarUnProducto(productoId, createProductDto);
        if (!actualizarProducto){
            return { estado: "producto no existe" }
        }
        return res.status(HttpStatus.OK).json(
            {
                actualizarProducto
            }
        )

    }
}
