import { CategoriasService } from './categorias.service';
import { CrearCategoriaDto } from './dto/categoria.dto';
export declare class CategoriasController {
    private serviciosCategoria;
    constructor(serviciosCategoria: CategoriasService);
    obtenerTodasLasCategorias(res: any): Promise<any>;
    crearUnaCategoria(res: any, crearCategoriaDto: CrearCategoriaDto): Promise<any>;
    eliminarUnProducto(res: any, prodductoId: any): Promise<any>;
    actualizarUnProducto(res: any, crearCategoriaDto: CrearCategoriaDto, productoId: any): Promise<any>;
}
