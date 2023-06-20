import { Controller,Get ,Res,HttpStatus} from '@nestjs/common';
import { DashboardService } from './dashboard.service'
@Controller('dashboard')
export class DashboardController {
        constructor(private servicioDashboard: DashboardService) { }

    @Get('/clientes')
    async contarTodosLosClientes(@Res() res) {
        const clientes = await this.servicioDashboard.contarTodosLosClientes();
        return res.status(HttpStatus.OK).json({
            clientes
        });
    }
    @Get('/usuarios')
    async contarTodosLosUsuarios(@Res() res) {
        const usuarios = await this.servicioDashboard.contarTodosLosUsuarios();
        return res.status(HttpStatus.OK).json({
            usuarios
        });
    }
    @Get('/categorias')
    async contarTodosLasCategorias(@Res() res) {
        const categoria = await this.servicioDashboard.contarTodosLasCategorias();
        return res.status(HttpStatus.OK).json({
            categoria
        });
    }
    @Get('/productos')
    async obtenerTodosLosProductos(@Res() res) {
        const productos = await this.servicioDashboard.contarTodosLosProductos();
        console.log(productos)
        return res.status(HttpStatus.OK).json({
            productos
        });
    }
    

}
