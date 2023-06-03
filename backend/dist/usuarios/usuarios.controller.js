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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const usuarios_dto_1 = require("./dto/usuarios.dto");
let UsuariosController = class UsuariosController {
    constructor(servicioUsuario) {
        this.servicioUsuario = servicioUsuario;
    }
    async ObtenerTodosLosUsuario(res) {
        const usuarios = await this.servicioUsuario.obtenerTodosLosUsuarios();
        return res.status(common_1.HttpStatus.OK).json({
            usuarios
        });
    }
    async crearUnUsuario(res, crearUsuarioDto) {
        const usuario = await this.servicioUsuario.crearUnUsuario(crearUsuarioDto);
        return res.status(common_1.HttpStatus.OK).json({
            usuario
        });
    }
    async eliminarUnUsuario(res, prodductoId) {
        const usuarioEliminado = await this.servicioUsuario.eliminarUnUsuario(prodductoId);
        if (!usuarioEliminado) {
            return { estado: "usuario no existe" };
        }
        return res.status(common_1.HttpStatus.OK).json(usuarioEliminado);
    }
    async actualizarUnProducto(res, crearUsuarioDto, productoId) {
        const actualizarUsuario = await this.servicioUsuario.actualizarUnUsuario(productoId, crearUsuarioDto);
        if (!actualizarUsuario) {
            return { estado: "usuario no existe" };
        }
        return res.status(common_1.HttpStatus.OK).json({
            actualizarUsuario
        });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "ObtenerTodosLosUsuario", null);
__decorate([
    (0, common_1.Post)('/crear'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, usuarios_dto_1.CrearUsuariosDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "crearUnUsuario", null);
__decorate([
    (0, common_1.Delete)('/eliminar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('usuarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "eliminarUnUsuario", null);
__decorate([
    (0, common_1.Put)('/actualizar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('usuarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, usuarios_dto_1.CrearUsuariosDto, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "actualizarUnProducto", null);
UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map