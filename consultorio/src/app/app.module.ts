import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { RegistroComponent } from './features/registro/registro.component';
import { EmpresaComponent } from './features/empresa/empresa.component';
import { PedidoComponent } from './features/pedido/pedido.component';
import { TrabajadorComponent } from './features/trabajador/trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
      FooterComponent,
    HomeComponent,
    RegistroComponent,
    EmpresaComponent,
    PedidoComponent,
    TrabajadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
