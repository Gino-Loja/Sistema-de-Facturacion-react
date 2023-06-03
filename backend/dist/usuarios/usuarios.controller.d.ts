import { UsuariosService } from './usuarios.service';
import { CrearUsuariosDto } from './dto/usuarios.dto';
export declare class UsuariosController {
    private servicioUsuario;
    constructor(servicioUsuario: UsuariosService);
    ObtenerTodosLosUsuario(res: any): Promise<any>;
    crearUnUsuario(res: any, crearUsuarioDto: CrearUsuariosDto): Promise<any>;
    eliminarUnUsuario(res: any, prodductoId: any): Promise<any>;
    actualizarUnProducto(res: any, crearUsuarioDto: CrearUsuariosDto, productoId: any): Promise<any>;
}
