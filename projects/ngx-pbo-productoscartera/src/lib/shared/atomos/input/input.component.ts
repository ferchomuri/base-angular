import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRIMENG_MODULES } from '../../libreria-estilos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [PRIMENG_MODULES, FormsModule],
})
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() type: string = 'text';

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
