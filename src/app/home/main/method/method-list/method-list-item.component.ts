import {Component, Input, OnInit} from '@angular/core';
import {Method} from '../../../../models/method.model';
import {MethodService} from '../method.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-method-list-item',
  templateUrl: './method-list-item.component.html',
  styleUrls: ['./method-list-item.component.scss'],
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
export class MethodListItemComponent implements OnInit {

  @Input('method') method: Method;
  @Input('isFavorite') isFavorite;
  checked = false;

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
  }

  checkboxClicked() {
    if (this.checked) {
      const methodIndex = this.methodService.checkedMethods.indexOf(this.method.id);
      this.methodService.checkedMethods.splice(methodIndex, 1);
    } else {
      this.methodService.checkedMethods.push(this.method.id);
    }
    this.checked = !this.checked;
  }
}
