import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestService } from '../../../core/services/rest.service';
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private readonly restService: RestService) {}

  obtenerUsuarios() {
    return this.restService
      .get('parametrizacion-productos-/pantalla-principal-parametrizacion')
      .pipe(map((res: any) => res));
  }
}
