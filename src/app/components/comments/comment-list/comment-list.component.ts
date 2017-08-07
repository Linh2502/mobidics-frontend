import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[];

  constructor() {
  }

  ngOnInit() {
  }

}
