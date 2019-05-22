import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductoComponent} from './producto/producto.component';
import {ProductoAddComponent} from './producto-add/producto-add.component';
import {ProductoDetalleComponent} from './producto-detalle/producto-detalle.component';
import {ProductoEditarComponent} from './producto-editar/producto-editar.component';

const routes: Routes = [

  {
    path: 'producto',
    component: ProductoComponent,
    data: { title: 'Lista de Productos' }
  },
  {
    path: 'producto-detalles/:id',
    component: ProductoDetalleComponent,
    data: { title: 'Producto Detalles' }
  },
  {
    path: 'producto-add',
    component: ProductoAddComponent,
    data: { title: 'Añadir Producto' }
  },
  {
    path: 'producto-editar/:id',
    component: ProductoEditarComponent,
    data: { title: 'Editar Producto' }
  },
  { path: '',
    redirectTo: '/producto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
