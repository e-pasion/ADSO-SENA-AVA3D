import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ColorComponent } from './pages/color/color.component';
import { NavbarAdminLateralComponent } from './components/navbar-admin-lateral/navbar-admin-lateral.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ColorListaComponent } from './pages/color-lista/color-lista.component';
import { TablaColoresComponent } from './components/tabla-colores/tabla-colores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    ColorComponent,
    NavbarAdminLateralComponent,
    ColorFormComponent,
    TablaComponent,
    ColorListaComponent,
    TablaColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
