import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/producto.dto';
export declare class ProductosController {
    private serviciosProductos;
    constructor(serviciosProductos: ProductosService);
    obtenerTodosLosProductos(res: any): Promise<any>;
    crearUnProducto(res: any, crearUnProductDto: CrearProductoDto): Promise<any>;
}
