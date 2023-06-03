import { Schema } from "mongoose";



export const UsuarioSchema = new Schema(
    {
        "nombres": String,
        "usuario": String,
        "password": String,
        "cargo": {
            "empleado": { type: Boolean, default: false },
            "administrador":  { type: Boolean, default: false }
        },
        "contacto": {
            "email": String,
            "telefono": String,
            "direccion": String
        }

    },
    { versionKey: false }

);