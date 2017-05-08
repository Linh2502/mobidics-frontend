import { Component, OnDestroy, OnInit } from '@angular/core';
import { MethodService } from '../method/method.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit, OnDestroy {

  methodServiceSubscription: Subscription;

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.methodServiceSubscription = this.methodService.detailPagedChanged.subscribe(
      () => console.log("TODO")
    )
  }

  ngOnDestroy() {
    this.methodServiceSubscription.unsubscribe();
  }
}
