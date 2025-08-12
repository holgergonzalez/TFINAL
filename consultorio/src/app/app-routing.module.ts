import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RegistroComponent } from './features/registro/registro.component';
import { EmpresaComponent } from './features/empresa/empresa.component';
import { PedidoComponent } from './features/pedido/pedido.component';
import { TrabajadorComponent } from './features/trabajador/trabajador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'trabajador', component: TrabajadorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
