import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { DatosService, Persona } from './../../servicios/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
})
export class DatosComponent implements OnInit {

  datosJuanda: Persona;

  constructor(
    private _datosService: DatosService,
    private router: Router,
    private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.datosJuanda = this._datosService.getDatos();

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
     this.router.navigate([parte]);
  }
  */
}
