import { Component } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent {
  listEmpleados:usuario[]= [];

  constructor(private _service: CrudServiceService){}

  ngOnInit():void{
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this._service.obtenerTodos(`usuarios`).subscribe({
      next:(data)=>{
        this.listEmpleados=data;
      },
      error:()=>{

      },
      complete:()=>{
        console.log(this.listEmpleados)
      }
    })
  }


  actualizarEstado(estadoValor:boolean,empleadoId:any){
    const valor= {estado:estadoValor}
    this._service.actualizar(valor,"usuarios",empleadoId).subscribe({
      complete:()=>{
        this.obtenerEmpleados();
      }
    });

  }


}
