import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestService } from '../../../core/services/rest.service';
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private readonly _restService: RestService) {}

  obtenerUsuarios() {
    return this._restService
      .get('parametrizacion-productos-banca/pantalla-principal-parametrizacion')
      .pipe(map((res: any) => res));
  }
}
