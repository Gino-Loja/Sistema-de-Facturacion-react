"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ClienteSchema = new mongoose_1.Schema({
    "nombre": String,
    "apellido": String,
    "email": String,
    "telefono": String,
    "direccion": {
        "calle": String,
        "ciudad": String,
        "region": String,
        "pais": String
    }
}, { versionKey: false });
//# sourceMappingURL=clientes.schemas.js.map