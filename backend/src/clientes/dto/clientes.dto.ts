export class CrearClienteDto {
    readonly nombre: string;
    readonly apellido: string;
    readonly email: string;
    readonly telefono: string;
    direccion: {
        readonly calle: string,
        readonly ciudad: string,
        readonly region: string;
        readonly pais: string;
    }
}