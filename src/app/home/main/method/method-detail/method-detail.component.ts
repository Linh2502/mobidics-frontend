import { Component, OnDestroy, OnInit } from '@angular/core';
import { Method } from "../method.model";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { MethodService } from "../method.service";

@Component({
  selector: 'app-method-detail',
  templateUrl: './method-detail.component.html',
  styleUrls: ['./method-detail.component.css']
})
export class MethodDetailComponent implements OnInit, OnDestroy {

  method: Method;
  subscription: Subscription;

  constructor(private methodService: MethodService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.methodService.getMethodById(params['id']).subscribe(
          method =>
            this.method = method
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
