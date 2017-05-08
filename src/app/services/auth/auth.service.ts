import { User } from "./user/user.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";

@Injectable()
export class AuthService {
  private loggedInUser: User;
  public loggedInStatusChanged: EventEmitter<boolean>;

  constructor(private httpService: HttpService,
              private router: Router) {
    this.loggedInStatusChanged = new EventEmitter();
  }

  public login(username: string, password: string, persist: boolean): Observable<any> {
    return this.httpService.getUserByUsername(username).map(
      (user: User) => {
        this.loggedInUser = user;
        this.loggedInStatusChanged.emit(true);
      }
    ).catch(error => {
      return Observable.throw(error);
    });
  }

  public logout(): void {
    this.loggedInUser = null;
    this.loggedInStatusChanged.emit(false);
    this.router.navigate(['/login']);
  }

  public getLoggedinUser(): User {
    return this.loggedInUser;
  }
}
