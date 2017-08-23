import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable, ObservableInput} from 'rxjs/Observable';
import {User} from '../../models/user/user.model';
import {Method} from '../../models/method.model';
import {Comment} from '../../models/comment.model';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';
import {Rating} from '../../models/rating.model';
import {MinMaxSummary} from '../../models/minMaxes.model';
import {University} from '../../models/user/university.model';
import {Faculty} from '../../models/user/faculty.model';

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

  register(user: User) {
    return this.http.post(this.baseUri + 'users', user);
  }

  deleteUser(user: User) {
    const headers: Headers = this.generateHeaders();
    return this.http.delete(this.baseUri + 'users/' + user.username, {headers})
      .catch(error => this.processError(error));
  }

  approveUser(user: User) {
    const headers: Headers = this.generateHeaders();
    return this.http.put(this.baseUri + 'users/' + user.username + '/approve', null, {headers});
  }

  disapproveUser(user: User) {
    const headers: Headers = this.generateHeaders();
    return this.http.put(this.baseUri + 'users/' + user.username + '/disapprove', null, {headers});
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

  getMethods(searchQuery: string,
             phases: string[],
             subPhases: string[],
             courseTypes: string[],
             groupType: number,
             maxGroupSize: number,
             maxTime: number,
             minRating: number,
             socialForms: string[]): Observable<Method[]> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(
      this.buildMethodQueryUri(
        searchQuery, phases, subPhases, courseTypes,
        groupType,
        maxGroupSize,
        maxTime,
        minRating, socialForms), {headers})
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

  updateUserrating(methodId: string, rating: number): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.put(this.baseUri + 'methods/' + methodId + '/rating/' + rating, null, {headers})
      .catch(error => this.processError(error));
  }

  getUserrating(methodId: string): Observable<Rating> {
    const headers: Headers = this.generateHeaders();
    return this.http.get(this.baseUri + 'methods/' + methodId + '/rating', {headers})
      .map(response => response.json())
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
    return this.http.delete(this.baseUri + 'comments/' + commentId, {headers})
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  postCommentVote(commentId: string, value: number): Observable<any> {
    const headers: Headers = this.generateHeaders();
    return this.http.post(this.baseUri + 'comments/' + commentId + '/votes', {value: value}, {headers})
      .catch(error => this.processError(error));
  }

  getMinMaxes(): Observable<MinMaxSummary> {
    return this.http.get(this.baseUri + 'methods/mins-maxes')
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getUniversities(): Observable<University[]> {
    return this.http.get(this.baseUri + 'universities')
      .map(response => response.json())
      .catch(error => this.processError(error));
  }

  getFaculties(): Observable<Faculty[]> {
    return this.http.get(this.baseUri + 'faculties')
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

  private buildMethodQueryUri(searchString: string,
                              phases: string[],
                              subPhases: string[],
                              courseTypes: string[],
                              groupType: number,
                              maxGroupSize: number,
                              maxTime: number,
                              minRating: number,
                              socialForms: string[]): string {
    let resultUri = this.baseUri + 'methods';
    if (searchString || phases || subPhases || courseTypes || groupType || maxGroupSize || maxTime || minRating || socialForms) {
      resultUri += '?search=' + searchString;
      phases.forEach(phase => resultUri += '&phase=' + phase);
      subPhases.forEach(subPhase => resultUri += '&subphase=' + subPhase);
      courseTypes.forEach(courseType => resultUri += '&coursetype=' + courseType);
      resultUri += '&grouptype' + groupType;
      resultUri += '&groupmax=' + maxGroupSize;
      resultUri += '&maxtime=' + maxTime;
      resultUri += '&minrating=' + minRating;
      socialForms.forEach(socialform => resultUri += '&socialform=' + socialform);
    }
    return resultUri;
  }
}
