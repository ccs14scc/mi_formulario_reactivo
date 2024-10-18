import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] 
})
export class InicioComponent {
formularioForm;
mensaje: string = '';

constructor(private formBuilder: FormBuilder){
  this.formularioForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    edad: '',
    email: ''
  });
}
ngOnInit(){
  console.log("hola")
}
enviarDatos(){
  let datos_formulario = this.formularioForm.value;
  console.log(this.formularioForm.value);
  const datos = this.formularioForm.value;
  this.mensaje = `${datos.nombre} ${datos.apellido}.`;
  }
}
