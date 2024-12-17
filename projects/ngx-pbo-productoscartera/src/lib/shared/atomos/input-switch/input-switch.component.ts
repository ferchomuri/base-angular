import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'at-input-switch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputSwitchModule, CommonModule],
  templateUrl: './input-switch.component.html',
  styleUrl: './input-switch.component.scss',
})
export class InputSwitchComponent {
  @Input() checked: boolean = false;
  @Input() etiqueta: string = '';

  nameGroup: FormGroup | undefined;

  // ngOnInit() {
  //     this.formGroup = new FormGroup({
  //         checked: new FormControl<boolean>(false)
  //     });
  // }

  mostrarOcultarDivReajuste() {
    this.checked = !this.checked;
  }
}
