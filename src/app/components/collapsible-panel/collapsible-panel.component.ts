import {Component, Input, OnInit} from '@angular/core';
import {Animations} from '../../animations';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss'],
  animations: [Animations.pushInOut]
})
export class CollapsiblePanelComponent implements OnInit {
  @Input() title: string;
  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
