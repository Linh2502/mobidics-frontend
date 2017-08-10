import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckboxState} from '../checkbox-state.model';

@Component({
  selector: 'app-checkbox-options',
  templateUrl: './checkbox-options.component.html',
  styleUrls: ['./checkbox-options.component.scss']
})
export class CheckboxOptionsComponent implements OnInit {
  @Input() options: any[];
  @Input() preSelection: string[] = [];
  @Output() selectionChanged: EventEmitter<CheckboxState> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectionChanged(checkboxState: CheckboxState) {
    this.selectionChanged.emit(checkboxState);
  }

}
