import { Component, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm

  nombreValido(): boolean {
    return this.miFormulario?.controls.nombre?.invalid
      && this.miFormulario?.controls.nombre?.touched
  }

  guardar() {
    console.log('Formulario posteado');
  }


}
