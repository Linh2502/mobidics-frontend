import { EventEmitter, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class AuthService {
  public loggedInStatusChanged: EventEmitter<boolean>;
  public isLoggedIn = false;
  public userFirstname;

  constructor(private httpService: HttpService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
    this.loggedInStatusChanged = new EventEmitter();
    let authCache = JSON.parse(localStorage.getItem('authCache'));
    this.isLoggedIn = !!authCache;
    this.tokenStorage.setJwtToken(authCache && authCache.jwtToken);
    this.userFirstname = (authCache && authCache.firstname);
  }

  public login(username: string, password: string, persist: boolean): Observable<any> {
    return this.httpService.login(username, password).do(
      response => {
        this.tokenStorage.setJwtToken(response.headers.get('X-mobidics-jwt-token'));
        this.isLoggedIn = true;
        this.loggedInStatusChanged.emit(true);
        this.userFirstname = response.json().firstname;
        if (persist) {
          localStorage.setItem('authCache', JSON.stringify({
            'jwtToken': this.tokenStorage.getJwtToken(),
            'firstname': this.userFirstname
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
