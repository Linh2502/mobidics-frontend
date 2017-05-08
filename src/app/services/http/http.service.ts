import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../auth/user/user.model';
import { Method } from '../../home/main/method/method.model';
import { AuthService } from "../auth/auth.service";
import { TokenStorageService } from "../auth/token-storage.service";

@Injectable()
export class HttpService {
  private baseUri = 'http://localhost:8080/mobidics/api/';
  private jwtHeader = 'X-mobidics-jwt-token';

  constructor(private http: Http, private tokenStorageService: TokenStorageService) {
  }

  login(username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(this.baseUri + 'auth', { headers });
  }

  getUserByUsername(username: string): Observable<User> {
    let headers: Headers = new Headers();
    headers.append(this.jwtHeader, this.tokenStorageService.getJwtToken());
    return this.http.get(this.baseUri + 'users/' + username)
      .map(response => response.json());
  }

  getAllMethodsByName(searchedName: string): Observable<Method[]> {
    let headers: Headers = new Headers();
    headers.append(this.jwtHeader, this.tokenStorageService.getJwtToken());
    return this.http.get(this.baseUri + 'methods' + '?name=' + searchedName)
      .map(response => response.json());
  }

  getMethodById(id: string): Observable<Method> {
    let headers: Headers = new Headers();
    headers.append(this.jwtHeader, this.tokenStorageService.getJwtToken());
    return this.http.get(this.baseUri + 'methods/' + id)
      .map(response => response.json());
  }
}
