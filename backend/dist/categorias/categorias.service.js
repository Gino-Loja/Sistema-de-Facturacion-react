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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CategoriasService = class CategoriasService {
    constructor(modeloCategoria) {
        this.modeloCategoria = modeloCategoria;
    }
    async obtenerTodasLasCategorias() {
        const categoria = await this.modeloCategoria.find();
        return categoria;
    }
    async crearUnaCategoria(crearCategoriaDto) {
        const nuevaCategoria = new this.modeloCategoria(crearCategoriaDto);
        return await nuevaCategoria.save();
    }
    async actualizarUnaCategoria(productoId, crearProductoDto) {
        const actualizaCategoria = await this.modeloCategoria.findByIdAndUpdate(productoId, crearProductoDto, { new: true });
        return actualizaCategoria;
    }
    async eliminarUnaCategoria(productoId) {
        const elimarCategoria = await this.modeloCategoria.findByIdAndDelete(productoId);
        return elimarCategoria;
    }
};
CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('categoria')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoriasService);
exports.CategoriasService = CategoriasService;
//# sourceMappingURL=categorias.service.js.map