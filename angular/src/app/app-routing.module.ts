import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/cliente/inicio/inicio.component';
import { CalculadoraComponent } from './components/cliente/calculadora/calculadora.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { LoginComponent } from './components/cliente/login/login.component';
import { PerfilComponent } from './components/cliente/perfil/perfil.component';
import { CrearCodigoComponent } from './components/admin/codigos/crear-codigo/crear-codigo.component';
import { ListarCodigoComponent } from './components/admin/codigos/listar-codigo/listar-codigo.component';
import { CrearColorComponent } from './components/admin/colores/crear-color/crear-color.component';
import { ListarColorComponent } from './components/admin/colores/listar-color/listar-color.component';
import { CrearEmpleadoComponent } from './components/admin/empleados/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './components/admin/empleados/listar-empleado/listar-empleado.component';
import { ListarPedidoComponent } from './components/admin/pedidos/listar-pedido/listar-pedido.component';

const routes: Routes = [
  //cliente
  {path:"",component:InicioComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"carrito",component:CarritoComponent},
  {path:"login",component:LoginComponent},
  {path:"perfil",component:PerfilComponent},

  //admin
  {path:"admin/crear-codigo",component:CrearCodigoComponent},
  {path:"admin/listar-codigo",component:ListarCodigoComponent},
  {path:"admin/editar-codigo/:id",component:CrearCodigoComponent},
  {path:"admin/editar-empleado/:id",component:CrearEmpleadoComponent},
  {path:"admin/crear-color",component:CrearColorComponent},
  {path:"admin/listar-color",component:ListarColorComponent},
  {path:"admin/crear-empleado",component:CrearEmpleadoComponent},
  {path:"admin/listar-empleado",component:ListarEmpleadoComponent},
  {path:"admin/listar-pedido",component:ListarPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
