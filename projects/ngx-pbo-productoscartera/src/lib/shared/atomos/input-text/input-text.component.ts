import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'at-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [InputTextModule, CommonModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  @Input() value: string = '';
  @Input() formControlName: string = '';
  @Input() nameForm!: FormGroup;
  @Input() deshabilitado: boolean = false;
  @Input() hasError: boolean = false;
  @Input() etiqueta: string = '';
  @Input() textoAyuda: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() useFormModel: boolean = false;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    if (this.useFormModel && this.deshabilitado) {
      const existingControl = this.nameForm.get(this.formControlName);
      if (existingControl) {
        const validators = existingControl.validator
          ? [existingControl.validator]
          : [];
        const asyncValidators = existingControl.asyncValidator
          ? [existingControl.asyncValidator]
          : [];
        this.nameForm.setControl(
          this.formControlName,
          new FormControl(
            {
              value: this.value,
              disabled: this.deshabilitado,
            },
            validators,
            asyncValidators
          )
        );
      }
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (!this.formControlName && !this.nameForm) {
      const inputElement = document.querySelector('input[pInputText]');
      if (inputElement) {
        (inputElement as HTMLInputElement).disabled = isDisabled;
      }
    }
  }
}
