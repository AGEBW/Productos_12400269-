import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductoDetalleComponent,
    ProductoAddComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

