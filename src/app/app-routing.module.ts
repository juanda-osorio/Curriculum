import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//MIS COMPONENTES
import { InicioComponent } from './components/inicio/inicio.component';
import { DatosComponent } from './components/datos/datos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ContactoComponent } from './components/contacto/contacto.component';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'conocimientos', component: ConocimientosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  //Se exporta el Routermodule para poder colocar <router-outlet></router-outlet> en el app.component.html
  exports: [RouterModule]
})
export class AppRoutingModule { }
