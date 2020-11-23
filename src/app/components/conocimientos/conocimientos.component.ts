import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { DatosService, Conocimientos } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
})
export class ConocimientosComponent implements OnInit {
  objeto_conocimiento: Conocimientos;

  constructor(private _datosService: DatosService,
              private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.objeto_conocimiento = this._datosService.getConocimientos();

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

}
