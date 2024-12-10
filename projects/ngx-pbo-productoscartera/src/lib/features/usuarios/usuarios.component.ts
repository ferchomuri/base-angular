import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuarios.service';
import { BotonComponent } from '../../shared/atomos/boton/boton.component';
import { BotonBusquedaComponent } from '../../shared/moleculas/boton-busqueda/boton-busqueda.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  providers: [UsuarioService],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  imports: [BotonComponent, BotonBusquedaComponent],
})
export class UsuariosComponent implements OnInit {
  className = 'test-button';

  constructor(private readonly usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe((res) => {
      console.log(res);
    });
  }

  clickBoton() {
    console.log('click en boton');
  }
}
