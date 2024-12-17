import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from '../../../environments/enviroment';
import { ServerMessage } from '../models/server.message';
import { LoadingService } from '../../shared/organismos/loader/loader.service';

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

  constructor(
    private readonly _http: HttpClient,
    private readonly _loadingService: LoadingService
  ) {}

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
    const carteraToken = 'TokenValidado';
    const accessToken = localStorage.getItem('access_token');

    this._httpOptions.headers = this._httpOptions.headers.set(
      'cartera-token',
      carteraToken
    );

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

    this._loadingService.show();

    return this._http
      .request(method, `${this.BASE_URL}${endPoint}`, options)
      .pipe(
        map((res: any) => res),
        catchError(this.handleError),
        finalize(() => this._loadingService.hide())
      );
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
    this._loadingService.show();
    return this._http
      .post(`${this.BASE_URL}${endPoint}`, reqData, {
        headers: new HttpHeaders({
          'x-access-token': localStorage.getItem('access_token') ?? '',
        }),
      })
      .pipe(
        map((res: any) => res),
        catchError(this.handleError),
        finalize(() => this._loadingService.hide())
      );
  }

  /**
   * Sube un archivo al servidor a un endpoint específico.
   * @param reqData Los datos del archivo a subir.
   * @param endPoint El endpoint de la API.
   * @returns Un Observable con la respuesta de la solicitud.
   */
  commonFileUpload(reqData: any, endPoint: string): Observable<any> {
    this._loadingService.show();
    return this._http
      .post(`${this.BASE_URL}${endPoint}`, reqData, {
        headers: new HttpHeaders({
          'x-access-token': localStorage.getItem('access_token') ?? '',
        }),
      })
      .pipe(
        map((res: any) => res),
        catchError(this.handleError),
        finalize(() => this._loadingService.hide())
      );
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
