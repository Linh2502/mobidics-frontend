import {Component, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment.model';
import {AuthService} from '../../../services/auth/auth.service';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  comment: Comment;

  constructor(private authService: AuthService,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.comment = new Comment('', '', new Date(), '', '', '', '', 0, 0);
  }

  onSubmit() {
    this.commentService.addComment(this.comment);
  }
}
