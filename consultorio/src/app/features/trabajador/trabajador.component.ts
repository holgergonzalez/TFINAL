import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html'
})
export class TrabajadorComponent {
  saved?: any;
  form = this.fb.group({
      nombres: ['',[Validators.required]] ,
      apellidos: ['',[Validators.required]] ,
      cargo: ['',] 
  });

  constructor(private fb: FormBuilder) {}
  onSubmit(){ if(this.form.invalid) { this.form.markAllAsTouched(); return; } this.saved = this.form.value; }
}
