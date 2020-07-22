import { Component, OnInit } from '@angular/core';
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
    private router: Router) { }

  ngOnInit(): void {
    this.datosJuanda = this._datosService.getDatos();
  }

  public verParte(parteEspecifica: string){
    const parte = parteEspecifica.toLowerCase();
     this.router.navigate([parte]);
  }

}
