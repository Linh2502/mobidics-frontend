import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckboxState} from './checkbox-state.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() value: number;
  @Input() isSelected = false;

  @Output() selected: EventEmitter<CheckboxState> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect() {
    this.isSelected = !this.isSelected;
    this.selected.emit(new CheckboxState(this.value, this.isSelected));
  }
}
