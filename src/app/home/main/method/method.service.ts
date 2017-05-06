import { EventEmitter, Injectable } from "@angular/core";
import { Method } from "./method.model";
import { HttpService } from "../../../services/http/http.service";
import { Observable } from "rxjs";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../services/auth/user/user.model";

@Injectable()
export class MethodService {
  public $detailPagedCalled: EventEmitter<boolean>;

  constructor(private httpService: HttpService,
              private authService: AuthService) {
    this.$detailPagedCalled = new EventEmitter();
  }

  getAllMethodsByName(searchedName: string): Observable<Method[]> {
    return this.httpService.getAllMethodsByName(searchedName);
  }

  getMethodById(id): Observable<Method> {
    return this.httpService.getMethodById(id);
  }

  methodIsFavorite(methodId) {
    let user: User = this.authService.getLoggedinUser();
    return user.favorites.includes(methodId);
  }

  onRouterParamsChanged(detailIsSelected: boolean) {
    this.$detailPagedCalled.emit(detailIsSelected);
  }
}
