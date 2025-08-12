import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent {
  saved?: any;
  form = this.fb.group({
      descripcion: ['',[Validators.required]] ,
      cantidad: ['',[Validators.required]] ,
      precioUnitario: ['',[Validators.required]] 
  });

  constructor(private fb: FormBuilder) {}
  onSubmit(){ if(this.form.invalid) { this.form.markAllAsTouched(); return; } this.saved = this.form.value; }
}
