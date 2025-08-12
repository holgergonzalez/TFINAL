import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent {
  saved?: any;
  form = this.fb.group({
      nombre: ['',[Validators.required]] ,
      ruc: ['',[Validators.required]] ,
      direccion: ['',] 
  });

  constructor(private fb: FormBuilder) {}
  onSubmit(){ if(this.form.invalid) { this.form.markAllAsTouched(); return; } this.saved = this.form.value; }
}
