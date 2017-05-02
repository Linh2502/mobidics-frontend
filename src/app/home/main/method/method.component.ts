import { Component, OnDestroy, OnInit } from '@angular/core';
import { MethodService } from "./method.service";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css'],
  providers: [MethodService]
})
export class MethodComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  detailPageSelected: boolean = true;

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.subscription = this.methodService.$detailPagedCalled.subscribe(
      (methodDetailSelected: boolean) =>
        this.detailPageSelected = methodDetailSelected
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
