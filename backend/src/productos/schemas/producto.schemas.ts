import mongoose ,{ Schema } from 'mongoose';


export const ProductoSchemas = new Schema(
    {
        "codigo": String,
        "descripcion": String,
        "precio": Number,
        "cantidad": Number,
        "categoria": String,
    },
    { versionKey: false }
)



