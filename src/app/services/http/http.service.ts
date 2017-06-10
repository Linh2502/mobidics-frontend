import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../auth/user/user.model';
import {Method} from '../../home/main/method/method.model';
import {TokenStorageService} from '../auth/token-storage.service';

@Injectable()
export class HttpService {
  private baseUri = 'http://localhost:8080/mobidics/api/';

  constructor(private http: Http, private tokenStorageService: TokenStorageService) {
  }

  login(username: string, password: string) {
    const headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(this.baseUri + 'auth', {headers});
  }

  getUserByUsername(username: string): Observable<User> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users/' + username, {headers})
      .map(response => response.json());
  }

  getUserMe(): Observable<User> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users/me', {headers})
      .map(response => response.json());
  }

  getAllMethodsByName(searchedName: string): Observable<Method[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods' + '?name=' + searchedName, {headers})
      .map(response => response.json());
  }

  getMethodById(id: string): Observable<Method> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/' + id, {headers})
      .map(response => response.json());
  }

  addMethod(method: Method): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.post(this.baseUri + 'methods/', method, {headers});
  }

  getFavoritesIds(): Observable<string[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/favoritesIds', {headers})
      .map(response => response.json());
  }

  getFavorites(): Observable<Method[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/favorites', {headers})
      .map(response => response.json());
  }

  private generateHeaders(): Headers {
    const headers: Headers = new Headers();
    headers.append('X-mobidics-jwt-token', this.tokenStorageService.getJwtToken());
    return headers;
  }
}
