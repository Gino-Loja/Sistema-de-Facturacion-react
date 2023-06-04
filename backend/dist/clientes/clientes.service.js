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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientesService = class ClientesService {
    constructor(modeloClientes) {
        this.modeloClientes = modeloClientes;
    }
    async obtenerTodosLosClientes() {
        const clientes = await this.modeloClientes.find();
        return clientes;
    }
    async crearUnCliente(crearClienteDto) {
        const nuevoClientes = new this.modeloClientes(crearClienteDto);
        return await nuevoClientes.save();
    }
    async actualizarUnCliente(clienteId, crearClienteDto) {
        const actualizar = await this.modeloClientes.findByIdAndUpdate(clienteId, crearClienteDto, { new: true, versionKey: false });
        return actualizar;
    }
    async eliminarUnCliente(clienteId) {
        const elimarCliente = await this.modeloClientes.findByIdAndDelete(clienteId);
        return elimarCliente;
    }
};
ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('clientes')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map