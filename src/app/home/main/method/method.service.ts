import {EventEmitter, Injectable} from '@angular/core';
import {Method} from '../../../models/method.model';
import {HttpService} from '../../../services/http/http.service';
import {Observable} from 'rxjs/Observable';
import {Rating} from '../../../models/rating.model';

@Injectable()
export class MethodService {
  public detailPageSelected: EventEmitter<boolean>;
  public methodListChanged: EventEmitter<Method[]>;
  public favoritesChanged: EventEmitter<string[]>;
  public checkedMethods: string[] = [];
  public cachedFavorites: string[] = [];

  private searchQuery = '';
  private selectedPhases: string[] = [];
  private selectedSubPhases: string[] = [];
  private selectedCourseTypes: string[] = [];
  private selectedGroupMin = 0;
  private selectedGroupMax = 0;
  private selectedMinTime = 0;
  private selectedMaxTime = 0;
  private selectedMinRating = 0;
  private selectedSocialForms: string[] = [];

  constructor(private httpService: HttpService) {
    this.detailPageSelected = new EventEmitter();
    this.methodListChanged = new EventEmitter();
    this.favoritesChanged = new EventEmitter();
  }

  private refreshMethods(): void {
    this.httpService.getMethods(
      this.searchQuery,
      this.selectedPhases,
      this.selectedSubPhases,
      this.selectedCourseTypes,
      this.selectedGroupMin, this.selectedGroupMax,
      this.selectedMinTime, this.selectedMaxTime,
      this.selectedMinRating,
      this.selectedSocialForms)
      .subscribe(
        (methods: Method[]) => {
          this.methodListChanged.emit(methods);
        }
      );
  }

  public setQuery(query: string): void {
    this.searchQuery = query;
    this.refreshMethods();
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

  updateFavoriteIds(): void {
    this.httpService.getFavoritesIds().subscribe(
      (favorites: string[]) => {
        this.favoritesChanged.emit(favorites);
        this.cachedFavorites = favorites;
      }
    );
  }

  addFavorite(id: string): void {
    this.httpService.addFavorite(id).subscribe(
      () => this.updateFavoriteIds()
    );
  }

  deleteFavorite(id: string): void {
    this.httpService.deleteFavorite(id).subscribe(
      () => this.updateFavoriteIds()
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

  addCourseTypeSelection(courseType: string) {
    this.selectedCourseTypes.push(courseType);
    this.refreshMethods();
  }

  removeCourseTypeSelection(courseType: string) {
    this.selectedCourseTypes.splice(this.selectedCourseTypes.indexOf(courseType), 1);
    this.refreshMethods();
  }

  addSocialFormSelection(socialForm: string) {
    this.selectedSocialForms.push(socialForm);
    this.refreshMethods();
  }

  removeSocialFormSelection(socialForm: string) {
    this.selectedSocialForms.splice(this.selectedSocialForms.indexOf(socialForm), 1);
    this.refreshMethods();
  }
}
