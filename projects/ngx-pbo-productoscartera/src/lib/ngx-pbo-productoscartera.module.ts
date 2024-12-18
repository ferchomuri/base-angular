import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPboProductosCarteraComponent } from './ngx-pbo-productoscartera.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoaderModule } from './shared/organismos/loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: NgxPboProductosCarteraComponent,
  },
];

@NgModule({
  declarations: [NgxPboProductosCarteraComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InicioComponent,
    LoaderModule,
  ],
  exports: [RouterModule],
})
export class NgxPboProductosCarteraModule {}
