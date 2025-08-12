import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
    showPwd = false;
  saving = false;
  savedId?: string;
  error?: string;

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(2)]],
    usuario: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    telefono: ['']
  });

  constructor(private fb: FormBuilder, private regSrv: RegistroService) {}

  onSubmit(): void {
    this.error = undefined;
    this.savedId = undefined;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.regSrv.create(this.form.value as any).subscribe({
      next: (resp) => {
        // En Firebase, la respuesta trae { name: "-NAbC123..." } como id generado
        this.savedId = resp?.name ?? '(sin id)';
      },
      error: () => {
        this.error = 'No se pudo guardar. Revisa tu conexión o la URL del backend.';
      },
      complete: () => (this.saving = false),
    });
  }
}
