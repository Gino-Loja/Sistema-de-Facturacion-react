import { CategoriasService } from './categorias.service';
import { CrearCategoriaDto } from './dto/categoria.dto';
export declare class CategoriasController {
    private serviciosCategoria;
    constructor(serviciosCategoria: CategoriasService);
    obtenerTodasLasCategorias(res: any): Promise<any>;
    crearUnaCategoria(res: any, crearCategoriaDto: CrearCategoriaDto): Promise<any>;
}
