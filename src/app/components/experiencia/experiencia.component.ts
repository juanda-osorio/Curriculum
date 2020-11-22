import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnChanges, OnInit } from '@angular/core';
import { DatosService, Experiencia } from 'src/app/servicios/datos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent implements OnInit, OnChanges{
  experiencias: Experiencia[];
  ordenar: boolean;

  constructor(
    private _datosService: DatosService,
    private _router: Router,
    private _breakPointObserver: BreakpointObserver) {
      
      this.ordenar = false;
  }

  ngOnChanges(){
    if( this._breakPointObserver.isMatched('(max-width:500px)') ){
      const botonOrdenarExp = document.querySelector('.boton_exp');
      botonOrdenarExp.className += " btn-block";      
    }
  }
  
  ngOnInit(): void {
    this.experiencias = this._datosService.getExperiencia();
  }

  public verParte(parteEspecifica: string){
    const parte = parteEspecifica.toLowerCase();
     this._router.navigate([parte]);
  }  

}
