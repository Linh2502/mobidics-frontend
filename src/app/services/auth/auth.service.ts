import { User } from "./user.model";
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

  private loggedInUser = new User(
    'Max',
    'Mustermann',
    'admin',
    'root@mobidics.org',
    [
      'Deutsch',
      'Englisch'
    ],
    'männlich',
    'Prof.',
    'Fest angestellt',
    'Technische Universität München',
    'Informatik',
    20,
    'http://www.castlehearing.co.uk/wp-content/uploads/2016/03/profile-placeholder.jpg');

  public isLoggedIn: boolean = false;

  constructor(private http: Http,
              private router: Router) {
  }

  public login(userId: string, password: string) {
    //TODO: get live url of login
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(userId + ':' + password));
    return this.http.get('http://localhost:4200', { headers })
      .map(res => res.json())
      .catch(this.handleError)
      .do(data => {
        this.isLoggedIn = true;
      });
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
