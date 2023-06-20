"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.Schema({
    "nombres": String,
    "usuario": String,
    "password": String,
    "cargo": {
        "empleado": { type: Boolean, default: false },
        "administrador": { type: Boolean, default: false }
    },
    "contacto": {
        "email": String,
        "telefono": String,
        "direccion": String
    }
}, { versionKey: false });
//# sourceMappingURL=usuarios.schemas.js.map