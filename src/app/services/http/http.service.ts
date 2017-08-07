import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable, ObservableInput} from 'rxjs/Observable';
import {User} from '../../models/user/user.model';
import {Method} from '../../models/method.model';
import {Comment} from '../../models/comment/comment.model';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';

@Injectable()
export class HttpService {
  private baseUri = 'http://lb-staging.dynv6.net:8080/mobidics/api/';

  constructor(private http: Http,
              private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  login(username: string, password: string) {
    const headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(this.baseUri + 'auth', {headers})
      .catch(error => this.processError(error));
  }

  getUserByUsername(username: string): Observable<User> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users/' + username, {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getUserMe(): Observable<User> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users/me', {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getAllMethodsByName(searchedName: string): Observable<Method[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods' + '?name=' + searchedName, {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getMethodById(id: string): Observable<Method> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/' + id, {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  addMethod(method: Method): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.post(this.baseUri + 'methods/', method, {headers})
      .catch(error => this.processError(error));
  }

  deleteMethod(id: string): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.delete(this.baseUri + 'methods/' + id, {headers})
      .catch(error => this.processError(error));
  }

  getFavoritesIds(): Observable<string[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/favoriteIds', {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getFavorites(): Observable<Method[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/favorites', {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  addFavorite(id: string): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.put(this.baseUri + 'methods/favorites/' + id, null, {headers});
  }

  deleteFavorite(id: string): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.delete(this.baseUri + 'methods/favorites/' + id, {headers});
  }

  getAllUsers(): Observable<User[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'users', {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getCommentsByMethodId(id: string): Observable<Comment[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/' + id + '/comments', {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  addCommentByMethodId(id: string, comment: Comment): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.post(this.baseUri + 'methods/' + id + '/comments', comment, {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  deleteCommentById(methodId: string, commentId: string): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.delete(this.baseUri + 'methods/' + methodId + '/comments/' + commentId, {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  private generateHeaders(): Headers {
    const headers: Headers = new Headers();
    headers.append('X-mobidics-jwt-token', this.tokenStorageService.getJwtToken());
    return headers;
  }

  private processError(error: any): ObservableInput<any> {
    this.router.navigate(['/login']);
    return Observable.create();
  }
}
