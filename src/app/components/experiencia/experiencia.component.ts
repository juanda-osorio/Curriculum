import { Component, OnInit } from '@angular/core';
import { DatosService, Experiencia } from 'src/app/servicios/datos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[];
  ordenar: boolean;

  constructor(
    private _datosService: DatosService,
    private _router: Router) {
      
      this.ordenar = false;
  }
  
  ngOnInit(): void {
    this.experiencias = this._datosService.getExperiencia();
  }

  public verParte(parteEspecifica: string){
    const parte = parteEspecifica.toLowerCase();
     this._router.navigate([parte]);
  }  

}
