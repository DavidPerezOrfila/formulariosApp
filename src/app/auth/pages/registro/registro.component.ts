import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApelllidoPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
      ],
      username: ['', [Validators.required, this.vs.noDebeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password', 'password2')],
    }
  );

  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'David Pérez',
      email: 'test@test1.com',
      username: 'test',
    });
  }
  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
