import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPboProductosComponent } from './ngx-pbo-productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: NgxPboProductosComponent,
  },
];

@NgModule({
  declarations: [NgxPboProductosComponent],
  imports: [CommonModule, RouterModule.forChild(routes), InicioComponent],
  exports: [RouterModule],
})
export class NgxPboProductosModule {}
