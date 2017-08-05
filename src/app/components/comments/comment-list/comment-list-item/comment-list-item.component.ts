import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../models/comment.model';
import {CommentService} from '../../comment.service';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {
  @Input('comment') comment: Comment;
  respondMode = false;

  constructor(private commentService: CommentService,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  onRespondButtonClicked() {
    this.respondMode = true;
  }

  onDeleteButtonClicked() {
    // TODO: Modal with accept and decline button
  }

  onThumbsUpButtonClicked() {
    // TODO: add comment vote
  }

  onThumbsDownButtonClicked() {
    // TODO: remove comment vote
  }

}
