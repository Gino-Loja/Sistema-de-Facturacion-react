import { ClientesService } from './clientes.service';
import { CrearClienteDto } from './dto/clientes.dto';
export declare class ClientesController {
    private servicioClientes;
    constructor(servicioClientes: ClientesService);
    ObtenerTodosLosUsuario(res: any): Promise<any>;
    crearUnUsuario(res: any, crearClienteDto: CrearClienteDto): Promise<any>;
    eliminarUnUsuario(res: any, clienteId: any): Promise<any>;
    actualizarUnProducto(res: any, crearClienteDto: CrearClienteDto, clienteId: any): Promise<any>;
}
