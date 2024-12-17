import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'at-radio-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RadioButtonModule, FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {
  @Input() useFormModel: boolean = false;
  @Input() nameForm!: FormGroup;
  @Input() categories: any[] = [];
  @Input() clave: string = '';
  @Input() nombreVisible: string = '';
  @Input() formControlName: string = '';
  @Input() selectedCategory: any = null;
  @Input() hasError: boolean = false;
  formGroup!: FormGroup;

  private onChange: any = () => {};
  private onTouched: any = () => {};
  private _value: any;

  get value() {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
