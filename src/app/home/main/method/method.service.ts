import { Injectable } from "@angular/core";
import { Method } from "./method.model";
import { HttpService } from "../../../services/http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class MethodService {

  constructor(private httpService: HttpService) {
  }

  getAllMethods(): Observable<Method[]> {
    return this.httpService.getAllMethods();
  }

  getMethodById(id): Observable<Method> {
    return this.httpService.getMethodById(id);
  }

}
