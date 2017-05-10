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

  constructor(private http: Http, private tokenStorageService: TokenStorageService) {
  }

  login(username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(this.baseUri + 'auth', { headers });
  }

  getUserByUsername(username: string): Observable<User> {
    let headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users/' + username, { headers })
      .map(response => response.json());
  }

  getUserMe(): Observable<User> {
    let headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users/me', { headers })
      .map(response => response.json());
  }

  getAllMethodsByName(searchedName: string): Observable<Method[]> {
    let headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods' + '?name=' + searchedName, { headers })
      .map(response => response.json());
  }

  getMethodById(id: string): Observable<Method> {
    let headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/' + id, { headers })
      .map(response => response.json());
  }

  getFavoritesIds(): Observable<string[]> {
    let headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/favoritesIds', { headers })
      .map(response => response.json());
  }

  getFavorites(): Observable<Method[]> {
    let headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/favorites', { headers })
      .map(response => response.json());
  }

  private generateHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.append('X-mobidics-jwt-token', this.tokenStorageService.getJwtToken());
    return headers;
  }
}
