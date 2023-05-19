import { Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { color } from 'src/app/models/color';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import Swal from 'sweetalert2';
declare const StlViewer:any;
@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm: FormGroup;
  id: string | null;

  constructor(private fb:FormBuilder,private _service:CrudServiceService,private router:Router,private aRoute:ActivatedRoute){
    this.colorForm=this.fb.group({
      nombre:['',Validators.required],
      codigo:['',[Validators.required,Validators.minLength(7),Validators.maxLength(7),Validators.pattern(/^#[0-9A-Fa-f]{6}$/)]],
      estado:['']
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
  }


  @ViewChild('stlCont',{static:true}) stlCont!:ElementRef<HTMLDivElement>;
  stl_viewer:any;
  colorSeleccionado: string= "#70f0ae";
  ngOnInit(){
    this.initStlViewer();
  }


  
  initStlViewer() {
    this.stl_viewer = new StlViewer(this.stlCont.nativeElement,{models: [{ id: 0, filename: "dino.stl",color:this.colorSeleccionado,rotationx:Math.PI*1.5 }],auto_rotate:true});
  }

  cambiarColor(color:string){
    this.colorSeleccionado=color;
    this.colorForm.get('codigo')!.setValue(color);
    this.colorForm.get('codigo')!.markAsTouched(); 
    this.stl_viewer.set_color(0,color);
  }


  agregarColor(){
    console.log(this.colorForm)

    const COLOR: color = {
      nombre:this.colorForm.get('nombre')?.value,
      codigo:this.colorSeleccionado,
      estado:true
    }

    this._service.guardar(COLOR,"colores").subscribe({
      complete: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'El color ha sido creado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.colorForm.reset()

      },
      error: (e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al crear el color intentelo denuevo',
          showConfirmButton: false,
          timer: 2000
        })
        this.colorForm.reset()
      },
    }
    )

  }
}
