import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  constructor(private readonly messageService: MessageService) {}

  mostrar(severity: string, summary: string, detail: string) {
    const existenErrores = this.extraerMensajesDeError(detail);

    if (!existenErrores) {
      this.messageService.add({
        severity: severity,
        summary: summary,
        detail: detail,
      });
      return;
    }

    for (const mensaje of existenErrores) {
      this.messageService.add({
        severity: severity,
        summary: summary,
        detail: mensaje,
      });
    }
  }

  private extraerMensajesDeError(texto: string) {
    // regex para extraer el mensaje de error del servidor desde 'Mensaje de Error Servidor:'
    // hasta 'Revisar Proceso:'
    try {
      const regex = /\. Mensaje de Error Servidor: (.+?)\. Revisar Proceso:/;
      const match = regex.exec(texto);

      if (!match) {
        return false;
      }

      if (!match[1].startsWith('{')) {
        return [match[1]];
      }

      const mensajeErrorServidor = match[1];
      const mensajeParseado = JSON.parse(mensajeErrorServidor);

      const errores: Array<string> = [];
      for (const key in mensajeParseado) {
        if (mensajeParseado.hasOwnProperty(key)) {
          errores.push(mensajeParseado[key]);
        }
      }

      return errores.flat();
    } catch (error) {
      return ['Error al realizar la operación'];
    }
  }
}
