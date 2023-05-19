import { Component, OnInit } from '@angular/core';
import { color } from 'src/app/models/color';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-tabla-colores',
  templateUrl: './tabla-colores.component.html',
  styleUrls: ['./tabla-colores.component.css']
})
export class TablaColoresComponent {
  listColores:color[]= [];

  constructor(private _service: CrudServiceService){}

  ngOnInit():void{
    this.ObtenerProductos();
  }

  ObtenerProductos(){
    this._service.obtenerTodos("colores").subscribe({
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

}
