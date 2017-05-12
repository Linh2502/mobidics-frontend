import { Component, Input, OnInit } from '@angular/core';
import { Method } from "../method.model";
import { AuthService } from "../../../../services/auth/auth.service";
import { User } from "../../../../services/auth/user/user.model";
import { MethodService } from "../method.service";
import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-method-item',
  templateUrl: './method-item.component.html',
  styleUrls: ['./method-item.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({
        opacity: 1,
        height: '*'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          height: 0
        }),
        animate(1000)
      ])
    ])
  ]
})
export class MethodItemComponent implements OnInit {

  @Input("method") method: Method;
  checked: boolean = false;
  isFavorite: boolean = false;
  max = 5;

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.methodService.getFavoritesIds().subscribe(
      (favorites: string[]) => this.isFavorite = favorites.includes(this.method.id)
    )
  }

  checkClicked($event) {
    console.log("HLLAO");
    $event.stopPropagation();
  }
}
