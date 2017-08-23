import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../models/comment.model';
import {CommentService} from '../../comment.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {Animations} from '../../../../animations';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  animations: [Animations.pushInOut]
})
export class CommentListItemComponent implements OnInit {
  @Input('comment') comment: Comment;
  respondMode = false;

  constructor(public authService: AuthService,
              private commentService: CommentService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onUsernameClicked() {
    this.router.navigate(['account', this.comment.username]);
  }

  onRespondButtonClicked() {
    this.respondMode = true;
  }

  onAbort() {
    this.respondMode = false;
  }

  onAcceptDeletion() {
    this.commentService.deleteComment(this.comment.id);
  }

  onThumbsUpButtonClicked() {
    // TODO: add comment vote
  }

  onThumbsDownButtonClicked() {
    // TODO: remove comment vote
  }

}
