import { Component } from '@angular/core';
import { codigo } from 'src/app/models/codigo';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-listar-codigo',
  templateUrl: './listar-codigo.component.html',
  styleUrls: ['./listar-codigo.component.css']
})
export class ListarCodigoComponent {
  listCodigos:codigo[]= [];

  constructor(private _service: CrudServiceService){}

  ngOnInit():void{
    this.obtenerCodigos();
  }

  obtenerCodigos(){
    this._service.obtenerTodos(`codigos`).subscribe({
      next:(data)=>{
        this.listCodigos=data;
      },
      error:()=>{

      },
      complete:()=>{
        console.log(this.listCodigos)
      }
    })
  }


  actualizarEstado(estadoValor:boolean,colorId:any){
    const valor= {estado:estadoValor}
    this._service.actualizar(valor,"codigos",colorId).subscribe({
      complete:()=>{
        this.obtenerCodigos();
      }
    });

  }



}
