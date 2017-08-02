import {Component, OnInit} from '@angular/core';
import {Animations} from '../../animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [Animations.fadeInOut]

})
export class AccountComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
