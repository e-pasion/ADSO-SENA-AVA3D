export class pedido {
    _id?: number;
    usuario: string;
    fecha: Date;
    productos: string[];
    precio: number;
    estado: string;
  
    constructor(usuario: string, fecha: Date, productos: string[], precio: number, estado: string) {
      this.usuario = usuario;
      this.fecha = fecha;
      this.productos = productos;
      this.precio = precio;
      this.estado = estado;
    }
  }