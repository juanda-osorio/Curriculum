import { Component, OnInit } from '@angular/core';
import { DatosService, Persona } from './../../servicios/datos.service';


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
})
export class FormacionComponent implements OnInit {

  obj_persona: Persona;
  arr_formacion: string[];
  

  constructor(private _datosService: DatosService) { }

  ngOnInit(): void {
    this.obj_persona = this._datosService.getDatos();
    this.arr_formacion = this.obj_persona.formacion;
  }

}
