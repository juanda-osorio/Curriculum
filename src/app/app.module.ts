import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//RUTAS
import { AppRoutingModule } from './app-routing.module';

//SERVICIOS

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatosComponent } from './components/datos/datos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosComponent,
    InicioComponent,
    ExperienciaComponent,
    FormacionComponent,
    ConocimientosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
