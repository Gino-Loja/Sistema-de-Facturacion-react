import mongoose from 'mongoose';
export declare const ProductoSchemas: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
}, {
    codigo?: string;
    descripcion?: string;
    precio?: number;
    cantidad?: number;
    categoria?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    codigo?: string;
    descripcion?: string;
    precio?: number;
    cantidad?: number;
    categoria?: string;
}>> & Omit<mongoose.FlatRecord<{
    codigo?: string;
    descripcion?: string;
    precio?: number;
    cantidad?: number;
    categoria?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
