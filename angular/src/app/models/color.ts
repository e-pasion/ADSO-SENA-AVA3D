export class color{
    _id?:number;
    nombre:string;
    codigo:string;
    estado:boolean;

    constructor(nombre:string,codigo:string,estado:boolean){
        this.nombre=nombre;
        this.codigo=codigo;
        this.estado=estado;
    }
}