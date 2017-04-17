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

  constructor() { }

  ngOnInit() {
  }

}
