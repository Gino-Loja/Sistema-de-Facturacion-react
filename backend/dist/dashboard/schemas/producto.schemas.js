"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoSchemas = void 0;
const mongoose_1 = require("mongoose");
exports.ProductoSchemas = new mongoose_1.Schema({
    "codigo": String,
    "descripcion": String,
    "precio": Number,
    "cantidad": Number,
    "categoria": String,
}, { versionKey: false });
//# sourceMappingURL=producto.schemas.js.map