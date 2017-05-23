import { Component, OnInit } from '@angular/core';
import { Animations } from "../../animations";

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css'],
  animations: [Animations.slideInOut]
})
export class AdminCenterComponent implements OnInit {

  toggleState: string = 'closed';

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    if (this.toggleState == 'closed') {
      this.toggleState = 'open';
    } else {
      this.toggleState = 'closed';
    }
    console.log(this.toggleState);
  }

}
