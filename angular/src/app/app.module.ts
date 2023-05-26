import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/cliente/inicio/inicio.component';
import { CalculadoraComponent } from './components/cliente/calculadora/calculadora.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { LoginComponent } from './components/cliente/login/login.component';
import { PerfilComponent } from './components/cliente/perfil/perfil.component';
import { CrearColorComponent } from './components/admin/colores/crear-color/crear-color.component';
import { ListarColorComponent } from './components/admin/colores/listar-color/listar-color.component';
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { CrearCodigoComponent } from './components/admin/codigos/crear-codigo/crear-codigo.component';
import { ListarCodigoComponent } from './components/admin/codigos/listar-codigo/listar-codigo.component';
import { ListarPedidoComponent } from './components/admin/pedidos/listar-pedido/listar-pedido.component';
import { CrearEmpleadoComponent } from './components/admin/empleados/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './components/admin/empleados/listar-empleado/listar-empleado.component';
import { NavbarLateralComponent } from './components/admin/navbar/navbar-lateral/navbar-lateral.component';
import { NavbarSuperiorComponent } from './components/admin/navbar/navbar-superior/navbar-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CalculadoraComponent,
    CarritoComponent,
    LoginComponent,
    PerfilComponent,
    CrearColorComponent,
    ListarColorComponent,
    NavbarComponent,
    CrearCodigoComponent,
    ListarCodigoComponent,
    ListarPedidoComponent,
    CrearEmpleadoComponent,
    ListarEmpleadoComponent,
    NavbarLateralComponent,
    NavbarSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
