import { Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { codigo } from 'src/app/models/codigo';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear-codigo',
  templateUrl: './crear-codigo.component.html',
  styleUrls: ['./crear-codigo.component.css']
})
export class CrearCodigoComponent implements OnInit {
  codigoForm: FormGroup;
  id: string | null;
  botonTexto = "Ingresar Codigo";

  constructor(private fb:FormBuilder,private _service:CrudServiceService,private router:Router,private aRoute:ActivatedRoute){
    this.codigoForm=this.fb.group({
      clave:['',Validators.required],
      fechaInicio:['',Validators.required],
      fechaFinal:['',Validators.required],
      descuento:['',Validators.required],
      estado:['']
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(){
    if(this.id===null){
    }else{
    this.esEditar();
    }
  }




  agregarCodigo(){
    console.log(this.codigoForm)

    const CODIGO: codigo = {
      clave:this.codigoForm.get('clave')?.value,
      fechaInicio:this.codigoForm.get('fechaInicio')?.value,
      fechaFinal:this.codigoForm.get('fechaFinal')?.value,
      descuento:this.codigoForm.get('descuento')?.value,
      estado:true
    }

    if(this.id===null){

    this._service.guardar(CODIGO,"codigos").subscribe({
      complete: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'El codigo ha sido creado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.codigoForm.reset()

      },
      error: (e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al crear el codigo intentelo denuevo',
          showConfirmButton: false,
          timer: 2000
        })
        this.codigoForm.reset()
      },
    }
    )
  }else{
    this._service.actualizar(CODIGO,"codigos",this.id).subscribe({
      complete: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'El codigo ha sido actualizado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/admin/listar-codigo']);

      },
      error: (e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al actualizar el codigo intentelo denuevo',
          showConfirmButton: false,
          timer: 2000
        })
      },
    }
    )

  }
  }


  esEditar(){
    if (this.id!==null){
      this.botonTexto='Editar Codigo'
      this._service.obtenerUno("codigos",this.id).subscribe({
        next: (data)=>{
          this.codigoForm.setValue({
            clave:data.clave,
            fechaInicio:data.fechaInicio,
            fechaFinal:data.fechaFinal,
            descuento:data.descuento,
            estado:data.estado
          })
        }

      })
    }
  
}


}
