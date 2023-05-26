export class usuario {
    _id?: number;
    nombre: string;
    user: string;
    contrasena: string;
    rol: string;
    estado: boolean;
  
    constructor(nombre: string, user: string, contrasena: string, rol: string, estado: boolean) {
      this.nombre = nombre;
      this.user = user;
      this.contrasena = contrasena;
      this.rol = rol;
      this.estado = estado;
    }
  }