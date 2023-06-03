export interface Cliente{
    readonly nombres: string;
    readonly apellidos: string;
    readonly email:string;
    readonly telefono : string ;

    readonly direccion: {
        readonly calle: string,
        readonly ciudad: string,
        readonly region:string,
        readonly pais:string

    };
    
}