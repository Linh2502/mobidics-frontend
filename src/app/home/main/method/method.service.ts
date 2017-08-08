import {EventEmitter, Injectable} from '@angular/core';
import {Method} from '../../../models/method.model';
import {HttpService} from '../../../services/http/http.service';
import {ConnectableObservable} from 'rxjs/observable/ConnectableObservable';
import {Observable} from 'rxjs/Observable';
import {Rating} from '../../../models/rating.model';

@Injectable()
export class MethodService {
  public detailPageSelected: EventEmitter<boolean>;
  public methodListChanged: EventEmitter<Method[]>;
  public favoritesChanged: EventEmitter<string[]>;
  public checkedMethods: string[] = [];
  cachedFavorites: string[] = [];
  private lastQuery = '';

  constructor(private httpService: HttpService) {
    this.detailPageSelected = new EventEmitter();
    this.methodListChanged = new EventEmitter();
    this.favoritesChanged = new EventEmitter();
  }

  getAllMethodsByQuery(searchQuery: string): void {
    this.lastQuery = searchQuery;
    this.httpService.getAllMethodsByName(searchQuery).subscribe(
      (methods: Method[]) => {
        this.methodListChanged.emit(methods);
      }
    );
  }

  private refreshMethods(): void {
    this.getAllMethodsByQuery(this.lastQuery);
  }

  getMethodById(id): Observable<Method> {
    return this.httpService.getMethodById(id);
  }

  getFavorites(): void {
    this.httpService.getFavorites().subscribe(
      (methods: Method[]) => {
        this.methodListChanged.emit(methods);
      }
    );
  }

  addMethod(method: Method): Observable<any> {
    return this.httpService.addMethod(method)
      .do(() => this.refreshMethods());
  }

  editMethod(method: Method): Observable<any> {
    return Observable.create();
  }

  deleteMethod(method: Method): Observable<any> {
    return this.httpService.deleteMethod(method.id)
      .do(() => this.refreshMethods());
  }

  getFavoritesIds(): void {
    this.httpService.getFavoritesIds().subscribe(
      (favorites: string[]) => {
        this.favoritesChanged.emit(favorites);
        this.cachedFavorites = favorites;
      }
    );
  }

  addFavorite(id: string): void {
    this.httpService.addFavorite(id).subscribe(
      () => this.getFavoritesIds()
    );
  }

  deleteFavorite(id: string): void {
    this.httpService.deleteFavorite(id).subscribe(
      () => this.getFavoritesIds()
    );
  }

  getUserrating(id: string): Observable<Rating> {
    return this.httpService.getUserrating(id);
  }

  updateUserrating(methodId: string, rating: number): Observable<any> {
    return this.httpService.updateUserrating(methodId, rating);
  }

  notifyDetailPagedSelected(detailIsSelected: boolean) {
    this.detailPageSelected.emit(detailIsSelected);
  }
}
