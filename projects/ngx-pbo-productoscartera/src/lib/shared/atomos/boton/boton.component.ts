import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

export type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'at-boton',
  standalone: true,
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss',
  imports: [ButtonModule, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BotonComponent {
  /**
   * Indica si el botón está deshabilitado.
   */
  @Input() disabled: boolean = false;

  /**
   * El icono del botón.
   */
  @Input() icon: string = '';

  /**
   * La posición del icono del botón.
   */
  @Input() iconPos: ButtonIconPosition = 'left';

  /**
   * El texto del botón.
   */
  @Input() label: string = '';

  /**
   * El tipo del botón.
   */
  @Input() type: string = 'button';

  /**
   * La función a ejecutar cuando se hace clic en el botón.
   */
  @Input() onClick: () => void = () => {};

  /**
   * Indica si el botón es un enlace.
   */
  @Input() link: boolean = false;

  /**
   * Indica si el botón está en estado de carga.
   */
  @Input() loading: boolean = false;

  /**
   * Indica si el botón tiene un estilo elevado.
   */
  @Input() raised: boolean = false;

  /**
   * Indica si el botón tiene bordes redondeados.
   */
  @Input() rounded: boolean = false;

  /**
   * Indica si el botón tiene un estilo de texto.
   */
  @Input() text: boolean = false;

  /**
   * Clase CSS adicional para el botón.
   */
  @Input() className: string = '';

  /**
   * CSS personalizado para el botón.
   */
  @Input() overrideCSS: string = '';

  constructor() {}

  /**
   * Inicializa el componente.
   * Lanza un error si el botón no tiene un label o un icono.
   * Lanza un error si se usan las propiedades className y overrideCSS al mismo tiempo.
   */
  ngOnInit() {
    if (this.label === '' && this.icon === '') {
      throw new Error('El botón debe tener un label o un icono');
    }

    if (this.overrideCSS !== '' && this.className !== '') {
      throw new Error(
        'No se puede usar la propiedad className y overrideCSS al mismo tiempo'
      );
    }
  }
}
