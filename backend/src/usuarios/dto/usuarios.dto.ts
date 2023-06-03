
export class CrearUsuariosDto{
    readonly nombres: string;
    readonly usuario: string;
    readonly password: string;
    readonly cargo: {
        readonly empleado: boolean,
        readonly administrador: boolean,

    };
    readonly contacto: {
        readonly email:string;
        readonly telefono : string ;
        readonly direccion: string;

    }

}