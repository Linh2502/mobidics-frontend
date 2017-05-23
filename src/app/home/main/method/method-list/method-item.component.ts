import { Component, Input, OnInit } from '@angular/core';
import { Method } from "../method.model";
import { MethodService } from "../method.service";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-method-item',
  templateUrl: './method-item.component.html',
  styleUrls: ['./method-item.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class MethodItemComponent implements OnInit {

  @Input("method") method: Method;
  checked: boolean = false;
  isFavorite: boolean = false;

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.methodService.getFavoritesIds().subscribe(
      (favorites: string[]) => this.isFavorite = favorites.includes(this.method.id)
    )
  }

  checkboxClicked() {
    if (this.checked) {
      let methodIndex = this.methodService.checkedMethods.indexOf(this.method.id);
      this.methodService.checkedMethods.splice(methodIndex, 1);
    } else {
      this.methodService.checkedMethods.push(this.method.id);
    }
    this.checked = !this.checked;
  }
}
