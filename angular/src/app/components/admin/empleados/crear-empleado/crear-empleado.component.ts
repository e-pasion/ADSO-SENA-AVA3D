import { Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit{
  empleadoForm: FormGroup;
  id: string | null;
  botonTexto = "Ingresar Empleado";

  constructor(private fb:FormBuilder,private _service:CrudServiceService,private router:Router,private aRoute:ActivatedRoute){
    this.empleadoForm=this.fb.group({
      nombre:['',Validators.required],
      user:['',Validators.required],
      contrasena:['',Validators.required],
      rol:[''],
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




  agregarEmpleado(){
    console.log(this.empleadoForm)

    const EMPLEADO: usuario = {
      nombre:this.empleadoForm.get('nombre')?.value,
      user:this.empleadoForm.get('user')?.value,
      contrasena:this.empleadoForm.get('contrasena')?.value,
      rol:'empleado',
      estado:true
    }

    if(this.id===null){

    this._service.guardar(EMPLEADO,"usuarios").subscribe({
      complete: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'El empleado ha sido creado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.empleadoForm.reset()

      },
      error: (e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al crear el empleado intentelo denuevo',
          showConfirmButton: false,
          timer: 2000
        })
        this.empleadoForm.reset()
      },
    }
    )
  }else{
    this._service.actualizar(EMPLEADO,"usuarios",this.id).subscribe({
      complete: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'El empleado ha sido actualizado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/admin/listar-empleado']);

      },
      error: (e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al actualizar el empleado intentelo denuevo',
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
      this._service.obtenerUno("usuarios",this.id).subscribe({
        next: (data)=>{
          this.empleadoForm.setValue({
            nombre:data.nombre,
            user:data.user,
            contrasena:data.contrasena,
            rol:data.rol,
            estado:data.estado
          })
        }

      })
    }
  
}


}
