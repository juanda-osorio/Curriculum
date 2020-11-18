import { SugerenciasFirebaseService } from './../../servicios/sugerencias-firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal  from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
    
  formulario: FormGroup;  

  constructor(private formBuilder: FormBuilder,
              private _sugerenciaService: SugerenciasFirebaseService) { 
    this.crearForm();
     this.cargarInfoFormulario();
  }

  ngOnInit(): void {
  }


  campoNoValido( campo: string ){    
    return this.formulario.get(campo).invalid && this.formulario.get(campo).touched;
  }


  crearForm(){
    this.formulario = this.formBuilder.group({
      nombre    : ['', Validators.required],
      apellido  : [''],
      correo    : ['', [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")] ],
      comentario: ['', [Validators.required, Validators.minLength(10)] ]
    })
  }
  
  /*Aqui en el 'setValue' irían los campos por defecto que quiero que aparezcan en el form.
  * Aunque para eso está el primer parámetro de 'crarForm', no???
  */
  cargarInfoFormulario(){
    this.formulario.setValue({
      nombre    : "Juanda",
      apellido  : "Osorio",
      correo    : "j@j.es",
      comentario: "Comentario de prueba",
    })
  }


  guardar(){

    let peticionGuardar: Observable<any>;

    if (this.formulario.invalid) {
      return this.formulario.markAllAsTouched();
    }else{

      Swal.fire({
        position: 'top',
        icon  : 'info',
        title : 'Espere',
        text  : 'Guardando información',
        // allowOutsideClick: false
      });
      Swal.showLoading();
    
      peticionGuardar = this._sugerenciaService.guardarSugerencia(this.formulario.value);
      
      peticionGuardar.subscribe( resp=> {
        Swal.fire({
          position: "top",
          icon  : 'success',
          title : 'Bien!',
          text  : 'Se han enviado los comentarios correctamente'
        });
      })

      
    }
    
    this.formulario.reset();

  }

}
