import { Component, Input, OnInit } from '@angular/core';
import { Method } from "../method.model";

@Component({
  selector: 'app-method-item',
  templateUrl: './method-item.component.html',
  styleUrls: ['./method-item.component.css']
})
export class MethodItemComponent implements OnInit {

  @Input("method") method: Method;
  max = 5;
  image = "https://app.crownmakers.com/media/2013/12/19/47d5b24fb5fce429a64804ca1b782581-test.jpg";

  constructor() {
  }

  ngOnInit() {
  }

}
