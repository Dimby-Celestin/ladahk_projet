import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private checkIsInProgress = false;
  public user: User = {} as User;
  public type: string;
  public role: string;
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private _httpService: HttpService,
    private _localStorageService: LocalStorageService
  ) { }

  getSessionStatus(): Observable<boolean> {
    return Observable.create(async (observer) => {
      try {
        const token: string = this._localStorageService.get('token');
        if (!this.type) {
          this.type = this._localStorageService.get('type');
        }
        if (!token) {
          this.logout();
          observer.next(false);
        } else {
          await this.initSession(token);
          observer.next(true);
        }
      } catch (e) {
        observer.next(false);
      }
      observer.complete();
    });

  }

  async initSession(token: string) {
    this._localStorageService.set('token', token);
    try {
      // Check if token is expired
      if (jwt.isTokenExpired(token)) {
        await this.regenerate(token).toPromise();
        return;
      }

      const decodedToken = jwt.decodeToken(token);
      // Retrieve user data
      if (!this.user || !this.user.id) {
        const type = this._localStorageService.get('type') === 'business' ? 'business' : 'users';
        const user = await this._httpService.get(`${type}/me`).toPromise();
        this.type = type;
        console.log('got user' + type, user)
        // Set current user data into observable
       this.setAuth(new User(user));
      }
      this.programNextRegenerate();
    } catch (e) {
      console.error(e);
    }
  }

  login(user: any): Observable<any> {
    return this._httpService.post('login', user).pipe(
      tap(sessionUser => {
        if (sessionUser.type) {
          this._localStorageService.set('type', sessionUser.type);
        }
        this.setAuth(new User(sessionUser.user));
        this.initSession(sessionUser.token);
      })
    );
  }
  register(user: any): Observable<any> {
    return this._httpService.post('register', user).pipe(
      tap(sessionUser => {
        if (sessionUser.type) {
          this._localStorageService.set('type', sessionUser.type);
        }
        this.setAuth(new User(sessionUser.user));
        this.initSession(sessionUser.token);
      })
    );
  }
  registerPro(user: any): Observable<any> {
    return this._httpService.post('registerPro', user).pipe(
      tap(sessionUser => {
        if (sessionUser.type) {
          this._localStorageService.set('type', sessionUser.type);
        }
        this.setAuth(new User(sessionUser.user));
        this.initSession(sessionUser.token);
      })
    );
  }
  updatePro(user: any): Observable<any> {
    return this._httpService.put('business/me', user).pipe(
      tap(sessionUser => {
        this.setAuth(new User(sessionUser.user));
      })
    );
  }
  forgotPassword(data: any): Observable<any> {
    return this._httpService.post('forgot'  , data);
  }

  public logout() {
    this._localStorageService.removeAll();
    this.purgeAuth();
  }

  regenerate(token: string): Observable<any> {
    return Observable.create(async (observer) => {
      try {
        const datas = await this._httpService.get('regenerate?token=' + token).toPromise();
        await this.initSession(datas.token);
        observer.next(datas);
      } catch (e) {
        observer.error(e);
      }
      observer.complete();
    });
  }

  setAuth(user: User) {
    // Set current user
    this.user = new User({...user});
    if (this.user.type) {
      this.type = this.user.type;
    }
    if (this.type) {
      this._localStorageService.set('type', this.type);
    }
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Set current user to an empty object
    this.user = undefined;
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  private programNextRegenerate = () => {
    if (this.checkIsInProgress === true) {
      return;
    }
    const token = this._localStorageService.get('token');
    const expirationDate = moment(jwt.getTokenExpirationDate(token)).subtract(10, 'minutes');
    this.checkIsInProgress = true;
    let delay = (expirationDate.valueOf() - moment().valueOf()) / 1000;

    if (delay < 10) {
      delay = 10;
    }

    setTimeout(async () => {
      try {
        // await this.regenerate(token);
      } catch (e) {
        console.log(e);
      }

      this.checkIsInProgress = false;

      this.programNextRegenerate();
    }, delay * 1000);
  }

}
