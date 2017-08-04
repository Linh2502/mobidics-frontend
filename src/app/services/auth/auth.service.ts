import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../http/http.service';
import {TokenStorageService} from './token-storage.service';
import {User} from '../../models/user/user.model';

@Injectable()
export class AuthService {
  public loggedInStatusChanged: EventEmitter<boolean>;
  public isLoggedIn = false;
  public loggedInUser: User;

  constructor(private httpService: HttpService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
    this.loggedInStatusChanged = new EventEmitter();
    const authCache = JSON.parse(localStorage.getItem('authCache'));
    this.isLoggedIn = !!authCache;
    this.tokenStorage.setJwtToken(authCache && authCache.jwtToken);
    this.loggedInUser = (authCache && authCache.user);
  }

  public login(username: string, password: string, persist: boolean): Observable<any> {
    return this.httpService.login(username, password).do(
      response => {
        this.tokenStorage.setJwtToken(response.headers.get('X-mobidics-jwt-token'));
        this.isLoggedIn = true;
        this.loggedInStatusChanged.emit(true);
        this.loggedInUser = response.json();
        if (persist) {
          localStorage.setItem('authCache', JSON.stringify({
            'jwtToken': this.tokenStorage.getJwtToken(),
            'user': this.loggedInUser
          }));
        }
      }
    ).catch(error => {
      return Observable.throw(error);
    });
  }

  public logout(): void {
    this.tokenStorage.setJwtToken(null);
    localStorage.removeItem('authCache');
    this.isLoggedIn = false;
    this.loggedInStatusChanged.emit(false);
    this.router.navigate(['/login']);
  }

  public getUserLevel(): number {
    return this.loggedInUser.userLevel;
  }
}
