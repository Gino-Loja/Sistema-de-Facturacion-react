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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsuariosService = class UsuariosService {
    constructor(modeloUsuario) {
        this.modeloUsuario = modeloUsuario;
    }
    async obtenerTodosLosUsuarios() {
        const usuarios = await this.modeloUsuario.find();
        return usuarios;
    }
    async crearUnUsuario(crearUsuarioDto) {
        const nuevoUsuarios = new this.modeloUsuario(crearUsuarioDto);
        return await nuevoUsuarios.save();
    }
    async actualizarUnUsuario(productoId, crearUsuarioDto) {
        const actualizaUsuario = await this.modeloUsuario.findByIdAndUpdate(productoId, crearUsuarioDto, { new: true, versionKey: false });
        return actualizaUsuario;
    }
    async eliminarUnUsuario(productoId) {
        const elimarUsuario = await this.modeloUsuario.findByIdAndDelete(productoId);
        return elimarUsuario;
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('usuarios')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map