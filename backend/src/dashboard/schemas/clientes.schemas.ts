import { Schema } from 'mongoose'

export const ClienteSchema = new Schema(
    {
        "nombre": String,
        "apellido": String,
        "email": String,
        "telefono": String,
        "direccion": {
            "calle": String,
            "ciudad": String,
            "region":String,
            "pais":String
        }



    },
    { versionKey: false }

);