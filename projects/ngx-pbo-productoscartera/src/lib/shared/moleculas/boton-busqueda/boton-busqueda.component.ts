import { Component } from '@angular/core';
import { InputComponent } from '../../atomos/input/input.component';
import { BotonComponent } from '../../atomos/boton/boton.component';

@Component({
  selector: 'lib-boton-busqueda',
  standalone: true,
  imports: [InputComponent, BotonComponent],
  templateUrl: './boton-busqueda.component.html',
  styleUrl: './boton-busqueda.component.scss',
})
export class BotonBusquedaComponent {
  parentValue: string = '';

  clickBoton() {
    console.log('click en boton');
  }
}
