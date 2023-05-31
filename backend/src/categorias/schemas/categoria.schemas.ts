import { Schema } from 'mongoose';

//especificar el nombre por defecto crea con una s al final
export const CategoriaSchemas = new Schema(
    {
        "codigo": String,
        "descripcion": String
    }, { collection: 'categoria',versionKey: false }
)