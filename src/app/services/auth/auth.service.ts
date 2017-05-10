import { User } from "./user/user.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class AuthService {
  public loggedInStatusChanged: EventEmitter<boolean>;
  public isLoggedIn = false;

  constructor(private httpService: HttpService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
    this.loggedInStatusChanged = new EventEmitter();
    let authCache = JSON.parse(localStorage.getItem('authCache'));
    this.isLoggedIn = !!authCache;
    this.tokenStorage.setJwtToken(authCache && authCache.jwtToken);
  }

  public login(username: string, password: string, persist: boolean): Observable<any> {
    return this.httpService.login(username, password).do(
      response => {
        this.tokenStorage.setJwtToken(response.headers.get('X-mobidics-jwt-token'));
        this.isLoggedIn = true;
        this.loggedInStatusChanged.emit(true);
        if (persist) {
          localStorage.setItem('authCache', JSON.stringify({
            "jwtToken": this.tokenStorage.getJwtToken()
          }))
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
}
