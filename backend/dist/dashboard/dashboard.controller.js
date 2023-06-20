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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
let DashboardController = class DashboardController {
    constructor(servicioDashboard) {
        this.servicioDashboard = servicioDashboard;
    }
    async contarTodosLosClientes(res) {
        const clientes = await this.servicioDashboard.contarTodosLosClientes();
        return res.status(common_1.HttpStatus.OK).json({
            clientes
        });
    }
    async contarTodosLosUsuarios(res) {
        const usuarios = await this.servicioDashboard.contarTodosLosUsuarios();
        return res.status(common_1.HttpStatus.OK).json({
            usuarios
        });
    }
    async contarTodosLasCategorias(res) {
        const categoria = await this.servicioDashboard.contarTodosLasCategorias();
        return res.status(common_1.HttpStatus.OK).json({
            categoria
        });
    }
    async obtenerTodosLosProductos(res) {
        const productos = await this.servicioDashboard.contarTodosLosProductos();
        console.log(productos);
        return res.status(common_1.HttpStatus.OK).json({
            productos
        });
    }
};
__decorate([
    (0, common_1.Get)('/clientes'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "contarTodosLosClientes", null);
__decorate([
    (0, common_1.Get)('/usuarios'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "contarTodosLosUsuarios", null);
__decorate([
    (0, common_1.Get)('/categorias'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "contarTodosLasCategorias", null);
__decorate([
    (0, common_1.Get)('/productos'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "obtenerTodosLosProductos", null);
DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map