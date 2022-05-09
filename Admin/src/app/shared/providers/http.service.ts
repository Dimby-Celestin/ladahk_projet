import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as ENV } from '../../../environments/environment';


@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  public get(url: string, params = {}, headers?): Observable<any> {
    const options: any = {params};
    if (headers) {
      headers = new HttpHeaders(headers);
      options.headers = headers;
    }

    return this._http.get(`${ENV.API_URL}${url}`, options)
      .pipe(catchError(this.formatErrors));
  }

  public post(url: string, body = {}): Observable<any> {
    return this._http.post(`${ENV.API_URL}${url}`, body)
      .pipe(catchError(this.formatErrors));
  }

  public patch(url: string, body = {}): Observable<any> {
    return this._http.patch(`${ENV.API_URL}${url}`, body)
      .pipe(catchError(this.formatErrors));
  }

  public put(url: string, body = {}): Observable<any> {
    return this._http.put(`${ENV.API_URL}${url}`, body)
      .pipe(catchError(this.formatErrors));
  }

  public delete(url: string): Observable<any> {
    return this._http.delete(`${ENV.API_URL}${url}`)
      .pipe(catchError(this.formatErrors));
  }
}
