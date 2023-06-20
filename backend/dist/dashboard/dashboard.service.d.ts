import { Connection } from 'mongoose';
export declare class DashboardService {
    private connection;
    constructor(connection: Connection);
    contarTodosLosProductos(): Promise<number>;
    contarTodosLosUsuarios(): Promise<number>;
    contarTodosLosClientes(): Promise<number>;
    contarTodosLasCategorias(): Promise<number>;
}
