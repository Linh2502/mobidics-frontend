import { EventEmitter, Injectable } from "@angular/core";
import { Method } from "./method.model";
import { HttpService } from "../../../services/http/http.service";
import { Observable } from "rxjs";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../services/auth/user/user.model";

@Injectable()
export class MethodService {
  public detailPagedChanged: EventEmitter<boolean>;

  constructor(private httpService: HttpService,
              private authService: AuthService) {
    this.detailPagedChanged = new EventEmitter();
  }

  getAllMethodsByQuery(searchQuery: string): Observable<Method[]> {
    return this.httpService.getAllMethodsByName(searchQuery);
  }

  getMethodById(id): Observable<Method> {
    return this.httpService.getMethodById(id);
  }

  methodIsFavorite(methodId): boolean {
    let user: User = this.authService.getLoggedinUser();
    return user.favorites.includes(methodId);
  }

  notifyDetailPagedChanged(detailIsSelected: boolean) {
    this.detailPagedChanged.emit(detailIsSelected);
  }
}
