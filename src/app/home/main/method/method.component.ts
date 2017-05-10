import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MethodService } from "./method.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {
  @Input() detailPageSelected: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }
}
