import { EventEmitter, Injectable } from "@angular/core";
import { Method } from "./method.model";
import { HttpService } from "../../../services/http/http.service";
import { Observable, ConnectableObservable } from "rxjs";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../services/auth/user/user.model";

@Injectable()
export class MethodService {
  public detailPageSelected: EventEmitter<boolean>;
  public methodListChanged: EventEmitter<Method[]>;
  public favoritesObservable: ConnectableObservable<string[]>;

  constructor(private httpService: HttpService) {
    this.detailPageSelected = new EventEmitter();
    this.methodListChanged = new EventEmitter();
  }

  getAllMethodsByQuery(searchQuery: string): void {
    this.httpService.getAllMethodsByName(searchQuery).subscribe(
      (methods: Method[]) => {
        this.methodListChanged.emit(methods);
      }
    );
  }

  getMethodById(id): Observable<Method> {
    return this.httpService.getMethodById(id);
  }

  getFavorites(): void {
    this.httpService.getFavorites().subscribe(
      (methods: Method[]) => {
        this.methodListChanged.emit(methods)
      }
    );
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
