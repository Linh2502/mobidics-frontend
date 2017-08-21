import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../../models/comment.model';
import {AuthService} from '../../../services/auth/auth.service';
import {CommentService} from '../comment.service';
import {Animations} from '../../../animations';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  @Input() inResponseTo: string = null;
  @Input() rootCommentId: string = null;
  @Output() aborted: EventEmitter<any> = new EventEmitter();
  comment: Comment;

  constructor(private authService: AuthService,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.comment = new Comment('', '', 0, '', '', this.inResponseTo, this.rootCommentId, 0, 0);
  }

  onSubmit() {
    this.commentService.addComment(this.comment);
  }

  onAbortButtonClicked() {
    this.aborted.emit();
  }
}
