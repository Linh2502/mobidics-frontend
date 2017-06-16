import {EventEmitter, Injectable} from '@angular/core';
import {Method} from './method.model';
import {HttpService} from '../../../services/http/http.service';
import {ConnectableObservable} from 'rxjs/observable/ConnectableObservable';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MethodService {
  public detailPageSelected: EventEmitter<boolean>;
  public methodListChanged: EventEmitter<Method[]>;
  public favoritesObservable: ConnectableObservable<string[]>;
  public checkedMethods: string[] = [];
  private lastQuery = '';

  constructor(private httpService: HttpService) {
    this.detailPageSelected = new EventEmitter();
    this.methodListChanged = new EventEmitter();
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

  getFavoritesIds(): Observable<string[]> {
    if (!this.favoritesObservable) {
      this.favoritesObservable = this.httpService.getFavoritesIds()
        .share()
        .publishReplay();
      this.favoritesObservable.connect();
    }
    return this.favoritesObservable;
  }

  notifyDetailPagedSelected(detailIsSelected: boolean) {
    this.detailPageSelected.emit(detailIsSelected);
  }


}
