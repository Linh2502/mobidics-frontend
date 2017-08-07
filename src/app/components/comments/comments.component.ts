import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommentService} from './comment.service';
import {Comment} from '../../models/comment/comment.model';
import {Subscription} from 'rxjs/Subscription';
import {Animations} from '../../animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [
    CommentService
  ]
})
export class CommentsComponent implements OnInit, OnDestroy {
  @Input('methodId') methodId: string;
  commentEmitterSubscription: Subscription;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.commentService.methodId = this.methodId;
    this.commentEmitterSubscription = this.commentService.commentEmitter.subscribe(
      (comments: Comment[]) =>
        this.comments = comments
    );
    this.commentService.getComments();
  }

  ngOnDestroy() {
    this.commentEmitterSubscription.unsubscribe();
  }
}
