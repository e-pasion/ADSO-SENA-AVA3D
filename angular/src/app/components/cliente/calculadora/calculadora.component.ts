import { Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { color } from 'src/app/models/color';
import { producto } from 'src/app/models/producto';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import Swal from 'sweetalert2';
declare const StlViewer:any;
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  listColores:color[]= [];

  productoForm: FormGroup;
  id: string | null;
  botonTexto = "Ingresar Color";

  constructor(private fb:FormBuilder,private _service:CrudServiceService,private router:Router,private aRoute:ActivatedRoute){
    this.productoForm=this.fb.group({
      color:[''],
      relleno:[''],
      tamano:[''],
      estado:['']
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
  }

  

  @ViewChild('stlCont',{static:true}) stlCont!:ElementRef<HTMLDivElement>;
  stl_viewer:any;
  colorSeleccionado: string= "#70f0ae";
  ngOnInit(){
    this.initStlViewer(this.colorSeleccionado);
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


  
  initStlViewer(colorCodigo:string) {
    this.stl_viewer = new StlViewer(this.stlCont.nativeElement,{models: [{ id: 0, filename: "dino.stl",color:colorCodigo,rotationx:Math.PI*1.5 }],auto_rotate:true});
  }

  cambiarColor(color:string){
    this.colorSeleccionado=color;
    this.stl_viewer.set_color(0,color);
  }


  agregarProducto(){
    const PRODUCTO: producto = {
      color:this.productoForm.get('color')?.value,
      relleno:this.productoForm.get('relleno')?.value || 50,
      tamano:this.productoForm.get('tamano')?.value || 1,
      volumen:this.productoForm.get('relleno')?.value*this.productoForm.get('tamano')?.value || 50,
      estado:true
    }
    console.log(PRODUCTO)

    if(this.id===null){

    this._service.guardar(PRODUCTO,"productos").subscribe({
      complete: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'El producto ha sido creado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.productoForm.reset()

      },
      error: (e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al crear el producto intentelo denuevo',
          showConfirmButton: false,
          timer: 2000
        })
        this.productoForm.reset()
      },
    }
    )
  }
  }
  


}
