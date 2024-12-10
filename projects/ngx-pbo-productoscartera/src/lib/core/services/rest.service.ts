import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/enviroment';
import { ServerMessage } from '../models/server.message';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly BASE_URL: string = environment.apiurl;
  private readonly _httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  /**
   * Realiza una solicitud HTTP.
   * @param method El método HTTP (get, post, put, delete).
   * @param endPoint El endpoint de la API.
   * @param data Los datos a enviar en la solicitud (opcional).
   * @returns Un Observable con la respuesta de la solicitud.
   */
  private request(
    method: string,
    endPoint: string,
    data: any = null
  ): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this._httpOptions.headers = this._httpOptions.headers.set(
        'x-access-token',
        accessToken
      );
    }
    let options = { ...this._httpOptions };
    if (method === 'post' || method === 'put' || method === 'delete') {
      options.body = JSON.stringify(data);
    }

    return this.http
      .request(method, `${this.BASE_URL}${endPoint}`, options)
      .pipe(map((res: any) => res))
      .pipe(catchError(this.handleError));
  }

  /**
   * Realiza una solicitud HTTP GET.
   * @param endPoint El endpoint de la API.
   * @param data Los datos a enviar en la solicitud (opcional).
   * @returns Un Observable con la respuesta de la solicitud.
   */
  get(endPoint: string, data: any = null): Observable<any> {
    return this.request('get', endPoint, data);
  }

  /**
   * Realiza una solicitud HTTP POST.
   * @param endPoint El endpoint de la API.
   * @param data Los datos a enviar en la solicitud.
   * @returns Un Observable con la respuesta de la solicitud.
   */
  post(endPoint: string, data: any): Observable<any> {
    return this.request('post', endPoint, data);
  }

  /**
   * Realiza una solicitud HTTP PUT.
   * @param endPoint El endpoint de la API.
   * @param data Los datos a enviar en la solicitud.
   * @returns Un Observable con la respuesta de la solicitud.
   */
  put(endPoint: string, data: any): Observable<any> {
    return this.request('put', endPoint, data);
  }

  /**
   * Realiza una solicitud HTTP DELETE.
   * @param endPoint El endpoint de la API.
   * @returns Un Observable con la respuesta de la solicitud.
   */
  delete(endPoint: string): Observable<any> {
    return this.request('delete', endPoint);
  }

  /**
   * Sube un archivo al servidor.
   * @param reqData Los datos del archivo a subir.
   * @returns Un Observable con la respuesta de la solicitud.
   */
  fileUpload(reqData: any): Observable<any> {
    let endPoint = 'UploadFile';
    return this.http
      .post(`${this.BASE_URL}${endPoint}`, reqData, {
        headers: new HttpHeaders({
          'x-access-token': localStorage.getItem('access_token') ?? '',
        }),
      })
      .pipe(map((res: any) => res))
      .pipe(catchError(this.handleError));
  }

  /**
   * Sube un archivo al servidor a un endpoint específico.
   * @param reqData Los datos del archivo a subir.
   * @param endPoint El endpoint de la API.
   * @returns Un Observable con la respuesta de la solicitud.
   */
  commonFileUpload(reqData: any, endPoint: string): Observable<any> {
    return this.http
      .post(`${this.BASE_URL}${endPoint}`, reqData, {
        headers: new HttpHeaders({
          'x-access-token': localStorage.getItem('access_token') ?? '',
        }),
      })
      .pipe(map((res: any) => res))
      .pipe(catchError(this.handleError));
  }

  /**
   * Maneja los errores de las solicitudes HTTP.
   * @param error El error de la solicitud.
   * @returns Un Observable que lanza un error con un mensaje de servidor.
   */
  private handleError(error: HttpErrorResponse | Error) {
    let errMsg: ServerMessage = new ServerMessage();
    if (error instanceof HttpErrorResponse) {
      errMsg.code = error.status;
      errMsg.message = error.error.message || error.statusText;
    } else {
      errMsg.code = 500; // Default status code for non-HTTP errors
      errMsg.message = error.message ? error.message : error.toString();
    }
    return throwError(() => errMsg);
  }
}
