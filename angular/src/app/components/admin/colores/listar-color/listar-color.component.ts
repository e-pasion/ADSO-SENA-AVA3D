import { Component, OnInit } from '@angular/core';
import { color } from 'src/app/models/color';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-listar-color',
  templateUrl: './listar-color.component.html',
  styleUrls: ['./listar-color.component.css']
})
export class ListarColorComponent {
  listColores:color[]= [];
  pagActual=1;
  pagNum=5;
  totalPages=0;
  opcion:any="";

  constructor(private _service: CrudServiceService){}

  ngOnInit():void{
    this.obtenerColores();
  }

  obtenerColores(){
    this._service.obtenerTodos(`colores`).subscribe({
      next:(data)=>{
        this.listColores=data;
      },
      error:()=>{

      },
      complete:()=>{
        console.log(this.listColores)
      }
    })
  }


  actualizarEstado(estadoValor:boolean,colorId:any){
    const valor= {estado:estadoValor}
    this._service.actualizar(valor,"colores",colorId).subscribe({
      complete:()=>{
        this.obtenerColores();
      }
    });

  }



}
