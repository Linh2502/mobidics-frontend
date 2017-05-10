import { Component, OnDestroy, OnInit } from '@angular/core';
import { MethodService } from "./method/method.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MethodService]
})
export class MainComponent implements OnInit, OnDestroy {
  sideBarCollapsed: boolean = true;
  detailPageSelected: boolean = false;

  private detailPageSubscription: Subscription;

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.detailPageSubscription = this.methodService.detailPageSelected.subscribe(
      (methodDetailSelected: boolean) => {
        this.detailPageSelected = methodDetailSelected;
        this.sideBarCollapsed = true;
      });
  }

  ngOnDestroy() {
    this.detailPageSubscription.unsubscribe();
  }
}
