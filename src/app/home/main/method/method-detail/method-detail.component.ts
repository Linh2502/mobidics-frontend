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
          method => {
            this.method = method;
            this.method.images = [
              'http://www.letsgomobile.org/images/reviews/0147/n86-test-images.jpg',
              'https://app.crownmakers.com/media/2013/12/19/47d5b24fb5fce429a64804ca1b782581-test.jpg',
              'http://hh-solution.com/wp-content/uploads/2016/06/testimage-4.jpg'
            ];
          })
        ;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
