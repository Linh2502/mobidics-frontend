import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from "../auth/user.model";
import { Method } from "../../home/main/method/method.model";

@Injectable()
export class HttpService {
  private baseUri = "http://localhost:8080/mobidics/api/";

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get('http://localhost:4200', { headers })
      .map(res => res.json());
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get(this.baseUri + "users/" + username)
      .map(response => response.json());
  }

  getAllMethods(): Observable<Method[]> {
    return this.http.get(this.baseUri + "methods")
      .map(response => response.json());
  }

  getMethodById(id: string): Observable<Method> {
    return this.http.get(this.baseUri + "methods/" + id)
      .map(response => response.json());
  }
}
