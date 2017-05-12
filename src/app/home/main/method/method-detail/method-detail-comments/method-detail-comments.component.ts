import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-detail-comments',
  templateUrl: './method-detail-comments.component.html',
  styleUrls: ['./method-detail-comments.component.scss']
})
export class MethodDetailCommentsComponent implements OnInit {
  @Input() methodId: string;

  constructor() {
  }

  ngOnInit() {
  }

}
