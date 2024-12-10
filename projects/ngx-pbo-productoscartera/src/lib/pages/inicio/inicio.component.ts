import { Component } from '@angular/core';
import { UsuariosComponent } from '../../features/usuarios/usuarios.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  title = 'angular-template';
}
