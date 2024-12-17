import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'at-check-box',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, CommonModule, FormsModule],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true,
    },
  ],
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor {
  @Input() nameForm!: FormGroup;
  @Input() selectedCategories: any[] = [];
  @Input() categories: any[] = [];
  @Input() useFormModel: boolean = false;
  @Input() formControlName: string = '';
  @Input() name: string = '';
  @Input() clave: string = '';
  @Input() nombreVisible: string = '';
  @Input() hasError: boolean = false;
  @Input() deshabilitado: boolean = false;

  private onChange: any = () => {};
  private onTouched: any = () => {};

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
              value: this.selectedCategories,
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
    this.selectedCategories = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  onCheckboxChange(event: any) {
    this.onChange(this.selectedCategories);
  }
}
