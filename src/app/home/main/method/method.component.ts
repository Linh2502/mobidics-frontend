import { Component, OnInit } from '@angular/core';
import { MethodService } from "./method.service";

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css'],
  providers: [MethodService]
})
export class MethodComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
