import { Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { codigo } from 'src/app/models/codigo';
import { producto } from 'src/app/models/producto';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  listProductos:producto[]= [];
  total=0;

  constructor(private _service: CrudServiceService){}

  ngOnInit():void{
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._service.obtenerTodos(`productos`).subscribe({
      next:(data)=>{
        console.log(data)
        this.listProductos=data;
        this.total = data.reduce((acumulador:any, objeto:any) => acumulador + objeto.volumen*10000, 0);
        console.log(this.total)


      },
      error:()=>{

      },
      complete:()=>{

        console.log(this.listProductos)
      }
    })
  }


}
