import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './pages/color/color.component';
import { ColorListaComponent } from './pages/color-lista/color-lista.component';

const routes: Routes = [
  {path:'dashboard/colores',component:ColorComponent},
  {path:'dashboard/verColores',component:ColorListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
