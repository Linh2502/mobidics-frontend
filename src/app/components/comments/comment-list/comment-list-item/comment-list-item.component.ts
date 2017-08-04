import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../models/comment.model';
import {CommentService} from '../../comment.service';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {
  @Input('comment') comment: Comment;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
  }

}
