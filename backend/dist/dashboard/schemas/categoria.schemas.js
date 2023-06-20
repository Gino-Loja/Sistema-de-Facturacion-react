"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaSchemas = void 0;
const mongoose_1 = require("mongoose");
exports.CategoriaSchemas = new mongoose_1.Schema({
    "codigo": String,
    "descripcion": String
}, { collection: 'categoria', versionKey: false });
//# sourceMappingURL=categoria.schemas.js.map