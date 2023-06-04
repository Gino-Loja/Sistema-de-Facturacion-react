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
exports.ClientesController = void 0;
const common_1 = require("@nestjs/common");
const clientes_service_1 = require("./clientes.service");
const clientes_dto_1 = require("./dto/clientes.dto");
let ClientesController = class ClientesController {
    constructor(servicioClientes) {
        this.servicioClientes = servicioClientes;
    }
    async ObtenerTodosLosUsuario(res) {
        const clientes = await this.servicioClientes.obtenerTodosLosClientes();
        return res.status(common_1.HttpStatus.OK).json({
            clientes
        });
    }
    async crearUnUsuario(res, crearClienteDto) {
        const clientes = await this.servicioClientes.crearUnCliente(crearClienteDto);
        return res.status(common_1.HttpStatus.OK).json({
            clientes
        });
    }
    async eliminarUnUsuario(res, clienteId) {
        const clienteEliminado = await this.servicioClientes.eliminarUnCliente(clienteId);
        if (!clienteEliminado) {
            return { estado: "usuario no existe" };
        }
        return res.status(common_1.HttpStatus.OK).json(clienteEliminado);
    }
    async actualizarUnProducto(res, crearClienteDto, clienteId) {
        const actualizarCliente = await this.servicioClientes.actualizarUnCliente(clienteId, crearClienteDto);
        if (!actualizarCliente) {
            return { estado: "usuario no existe" };
        }
        return res.status(common_1.HttpStatus.OK).json({
            actualizarCliente
        });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "ObtenerTodosLosUsuario", null);
__decorate([
    (0, common_1.Post)('/crear'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clientes_dto_1.CrearClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "crearUnUsuario", null);
__decorate([
    (0, common_1.Delete)('/eliminar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "eliminarUnUsuario", null);
__decorate([
    (0, common_1.Put)('/actualizar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clientes_dto_1.CrearClienteDto, Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "actualizarUnProducto", null);
ClientesController = __decorate([
    (0, common_1.Controller)('clientes'),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map