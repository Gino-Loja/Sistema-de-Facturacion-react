import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private servicioDashboard;
    constructor(servicioDashboard: DashboardService);
    contarTodosLosClientes(res: any): Promise<any>;
    contarTodosLosUsuarios(res: any): Promise<any>;
    contarTodosLasCategorias(res: any): Promise<any>;
    obtenerTodosLosProductos(res: any): Promise<any>;
}
