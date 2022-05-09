import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
const getOptions = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};
@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(
    private _localStorageService: LocalStorageService
  ) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with bearer auth credentials if available
    const token: string = this._localStorageService.get('token');
    if (token) {
      request = request.clone({
        setHeaders: getOptions(token)
      });
    }
    return next.handle(request);
  }
}
