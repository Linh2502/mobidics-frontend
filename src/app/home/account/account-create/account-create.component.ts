import {Component, OnInit} from '@angular/core';
import {Animations} from '../../../animations';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  animations: [Animations.fadeInOut]
})
export class AccountCreateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
