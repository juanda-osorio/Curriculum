import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SugerenciaModel } from './../models/sugerencia.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SugerenciasFirebaseService {
  
  //propiedades
  private url = "https://curriculum-924a4.firebaseio.com/";

  constructor(private http: HttpClient) { }

  guardarSugerencia(sugerencia: SugerenciaModel){
    return this.http.post(`${this.url}/sugerencias.json`, sugerencia).
      pipe(
        map(resp =>{
          /* El operador map es para modificar o hacer algo a la respuesta del post */
          // console.log(resp);
        })
      )
  }


}
