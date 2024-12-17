import { Component } from '@angular/core';
import { InputTextComponent } from '../../atomos/input-text/input-text.component';
import { BotonComponent } from '../../atomos/boton/boton.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RadioButtonComponent } from '../../atomos/radio-button/radio-button.component';
import { InputSwitchComponent } from '../../atomos/input-switch/input-switch.component';
import { CheckBoxComponent } from '../../atomos/check-box/check-box.component';

@Component({
  selector: 'lib-boton-busqueda',
  standalone: true,
  imports: [
    InputTextComponent,
    BotonComponent,
    RadioButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchComponent,
    CheckBoxComponent,
  ],
  templateUrl: './boton-busqueda.component.html',
  styleUrl: './boton-busqueda.component.scss',
})
export class BotonBusquedaComponent {
  value: string = '';
  selectedCategory: any = null;
  form: FormGroup;
  selectedCategories: any[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  constructor(private readonly _fb: FormBuilder) {
    this.form = this._fb.group({
      testF: new FormControl('', [Validators.required]),
      tipo: new FormControl(''),
      checkCategory: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.form = this._fb.group({
    //   searchText: new FormControl(''),
    // });
  }

  clickBoton() {
    console.log('click en boton');
    console.log(this.form.controls);
  }
}
