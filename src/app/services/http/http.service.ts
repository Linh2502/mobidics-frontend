import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from "../auth/user.model";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get('http://localhost:4200', { headers })
      .map(res => res.json());
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get("http://localhost:8080/api/users/" + username)
      .map(response => response.json());
  }
}
