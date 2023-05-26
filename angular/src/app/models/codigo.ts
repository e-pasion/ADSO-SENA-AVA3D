export class codigo{
    _id?:number;
    clave:string;
    fechaInicio:Date;
    fechaFinal:Date;
    descuento:number;
    estado:boolean;

    constructor(clave:string,fechaInicio:Date,fechaFinal:Date,descuento:number,estado:boolean){
        this.clave=clave;
        this.fechaInicio=fechaInicio;
        this.fechaFinal=fechaFinal;
        this.descuento=descuento;
        this.estado=estado;
    }
}