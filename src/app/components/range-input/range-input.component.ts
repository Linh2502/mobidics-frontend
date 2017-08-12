import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {
  @Input() min = 0;
  @Input() max = 0;
  @Input() step = 5;
  @Input() inputTitle = '';
  @Input() unit = '';
  @Input() minLabel;
  @Input() maxLabel;
  @Output() selected: EventEmitter<number> = new EventEmitter();

  private currentSelection = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onReset() {
    this.currentSelection = 0;
    this.onSelect();
  }

  onSelect() {
    this.selected.emit(this.currentSelection);
  }
}
