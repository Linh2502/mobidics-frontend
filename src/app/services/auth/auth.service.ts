import { User } from "./user/user.model";
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";

@Injectable()
export class AuthService {

  private loggedInUser: User;

  public isLoggedIn: boolean = false;

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  public login(username: string, password: string): Observable<any> {
    return this.httpService.getUserByUsername(username).map(
      (user: User) => {
        this.loggedInUser = user;
        this.isLoggedIn = true;
      }
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  private handleError(err) {
    return Observable.throw(err);
  }

  public getLoggedinUser(): User {
    return this.loggedInUser;
  }
}
