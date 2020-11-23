import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { DatosService, Persona } from './../../servicios/datos.service';


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
})
export class FormacionComponent implements OnInit {

  obj_persona: Persona;
  arr_formacion: string[];
  

  constructor(private _datosService: DatosService,
              private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.obj_persona = this._datosService.getDatos();
    this.arr_formacion = this.obj_persona.formacion;

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
