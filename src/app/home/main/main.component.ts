import { Component, OnInit } from '@angular/core';
import { MethodService } from "./method/method.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MethodService]
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
