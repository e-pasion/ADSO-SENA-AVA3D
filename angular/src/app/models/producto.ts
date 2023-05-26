export class producto {
    _id?: number;
    color: string;
    relleno: number;
    tamano: number;
    volumen: number;
    estado: boolean;
  
    constructor(color: string, relleno: number, tamano: number, volumen: number, estado: boolean) {
      this.color = color;
      this.relleno = relleno;
      this.tamano = tamano;
      this.volumen = volumen;
      this.estado = estado;
    }
  }