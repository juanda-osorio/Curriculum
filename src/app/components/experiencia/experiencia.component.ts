import { Component, HostListener, OnInit } from '@angular/core';
import { DatosService, Experiencia } from 'src/app/servicios/datos.service';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent implements OnInit{

  experiencias: Experiencia[];
  ordenar: boolean;

  constructor(
    private _datosService: DatosService,
    private _router: Router,
    private breakPointObserver: BreakpointObserver) {
      
      this.ordenar = false;
  }

    
  ngOnInit(): void {
    this.experiencias = this._datosService.getExperiencia();

    if( this.breakPointObserver.isMatched('(max-width:990px)') ){
      this._datosService.muestraBreadCrum("migaPan");
    }
  }

  @HostListener('window:resize', ['event'])
  onResize(event){
    let tamanyoPantalla: number = 0;
    tamanyoPantalla = window.innerWidth;
    if (tamanyoPantalla <= 990) {
      this._datosService.muestraBreadCrum("migaPan");
    }else
      this._datosService.ocultaBreadCrum("migaPan");
  }
  
  /*
  public verParte(parteEspecifica: string){
    const parte = parteEspecifica.toLowerCase();
     this._router.navigate([parte]);
  }*/

}
