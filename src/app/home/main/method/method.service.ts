import { EventEmitter, Injectable } from "@angular/core";
import { Method } from "./method.model";
import { HttpService } from "../../../services/http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class MethodService {
  public $detailPagedCalled: EventEmitter<boolean>;

  constructor(private httpService: HttpService) {
    this.$detailPagedCalled = new EventEmitter();
  }

  getAllMethods(): Observable<Method[]> {
    return this.httpService.getAllMethods();
  }

  getMethodById(id): Observable<Method> {
    return this.httpService.getMethodById(id);
  }

  onRouterParamsChanged(detailIsSelected: boolean) {
    this.$detailPagedCalled.emit(detailIsSelected);
  }
}
