import {EventEmitter, Injectable} from '@angular/core';
import {Method} from '../../../models/method.model';
import {HttpService} from '../../../services/http/http.service';
import {Observable} from 'rxjs/Observable';
import {Rating} from '../../../models/rating.model';
import {CheckboxState} from '../../../components/checkbox/checkbox-state.model';
import {mapSubphaseToPhaseIndex, updateSelectionArray} from '../../../functions';
import {MinMaxSummary} from '../../../models/minMaxes.model';

@Injectable()
export class MethodService {
  public detailPageSelected: EventEmitter<boolean>;
  public methodListChanged: EventEmitter<Method[]>;
  public favoritesChanged: EventEmitter<string[]>;
  public checkedMethods: string[] = [];
  public cachedFavorites: string[] = [];

  private searchQuery = '';
  private selectedPhases: string[] = [];
  private selectedSubphases: string[][] = [[], [], [], [], [], []];
  private selectedCourseTypes: string[] = [];
  private selectedSocialForms: string[] = [];
  private selectedGroupType = 0;
  private selectedMaxGroupSize = 0;
  private selectedMaxTime = 0;
  private selectedMinRating = 0;

  constructor(private httpService: HttpService) {
    this.detailPageSelected = new EventEmitter();
    this.methodListChanged = new EventEmitter();
    this.favoritesChanged = new EventEmitter();
  }

  private refreshMethods(): void {
    this.httpService.getMethods(
      this.searchQuery,
      this.selectedPhases,
      [].concat(this.selectedSubphases),
      this.selectedCourseTypes,
      this.selectedGroupType,
      this.selectedMaxGroupSize,
      this.selectedMaxTime,
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

  updateCourseTypeSelection(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedCourseTypes, checkBoxState);
    this.refreshMethods();
  }

  updateSocialFormSelection(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedSocialForms, checkBoxState);
    this.refreshMethods();
  }

  updatePhaseSelection(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedPhases, checkBoxState);
    if (!checkBoxState.selectionState) {
      this.selectedSubphases[+checkBoxState.value] = [];
    }
    this.refreshMethods();
  }

  updateSubphaseSelection(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedSubphases[mapSubphaseToPhaseIndex(checkBoxState.value)], checkBoxState);
    this.refreshMethods();
  }

  updateGroupTypeSelection(groupType: number) {
    this.selectedGroupType = groupType;
    this.refreshMethods();
  }

  updateMaxGroupSizeSelection(maxGroupSize: number) {
    this.selectedMaxGroupSize = maxGroupSize;
    this.refreshMethods();
  }

  updateMaxTimeSelection(maxTime: number) {
    this.selectedMaxTime = maxTime;
    this.refreshMethods();
  }

  updateMinRatingSelection(minRating: number) {
    this.selectedMinRating = minRating;
    this.refreshMethods();
  }

  getMinMaxes(): Observable<MinMaxSummary> {
    return this.httpService.getMinMaxes();
  }
}
