/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Producto } from './interface/producto.interface';
import { CrearProductoDto } from './dto/producto.dto';
export declare class ProductosService {
    private modeloProducto;
    constructor(modeloProducto: Model<Producto>);
    obtenerTodosLosProductos(): Promise<(import("mongoose").Document<unknown, {}, Producto> & Omit<Producto & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    crearUnProducto(crearProductoDto: CrearProductoDto): Promise<import("mongoose").Document<unknown, {}, Producto> & Omit<Producto & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    actualizarUnProducto(productoId: string, crearProductoDto: CrearProductoDto): Promise<import("mongoose").Document<unknown, {}, Producto> & Omit<Producto & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    eliminarUnProducto(productoId: string): Promise<import("mongoose").Document<unknown, {}, Producto> & Omit<Producto & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
