import { Component, OnInit } from '@angular/core';
import { DatosService, Conocimientos } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
})
export class ConocimientosComponent implements OnInit {
  objeto_conocimiento: Conocimientos;

  constructor(private _datosService: DatosService) { }

  ngOnInit(): void {
    this.objeto_conocimiento = this._datosService.getConocimientos();
  }

}
