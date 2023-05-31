"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const productos_service_1 = require("./productos.service");
const producto_dto_1 = require("./dto/producto.dto");
let ProductosController = class ProductosController {
    constructor(serviciosProductos) {
        this.serviciosProductos = serviciosProductos;
    }
    async obtenerTodosLosProductos(res) {
        const productos = await this.serviciosProductos.obtenerTodosLosProductos();
        console.log(productos);
        return res.status(common_1.HttpStatus.OK).json({
            productos
        });
    }
    async crearUnProducto(res, crearUnProductDto) {
        const producto = await this.serviciosProductos.crearUnProducto(crearUnProductDto);
        return res.status(common_1.HttpStatus.OK).json({
            producto
        });
    }
    async eliminarUnProducto(res, prodductoId) {
        const productoEliminado = await this.serviciosProductos.eliminarUnProducto(prodductoId);
        if (!productoEliminado) {
            return { estado: "producto no existe" };
        }
        return res.status(common_1.HttpStatus.OK).json(productoEliminado);
    }
    async actualizarUnProducto(res, createProductDto, productoId) {
        const actualizarProducto = await this.serviciosProductos.actualizarUnProducto(productoId, createProductDto);
        if (!actualizarProducto) {
            return { estado: "producto no existe" };
        }
        return res.status(common_1.HttpStatus.OK).json({
            actualizarProducto
        });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "obtenerTodosLosProductos", null);
__decorate([
    (0, common_1.Post)('/crear'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, producto_dto_1.CrearProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "crearUnProducto", null);
__decorate([
    (0, common_1.Delete)('/eliminar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('productoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "eliminarUnProducto", null);
__decorate([
    (0, common_1.Put)('/actualizar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('productoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, producto_dto_1.CrearProductoDto, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "actualizarUnProducto", null);
ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
exports.ProductosController = ProductosController;
//# sourceMappingURL=productos.controller.js.map