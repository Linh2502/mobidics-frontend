import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommentService} from './comment.service';
import {Comment} from '../../models/comment.model';
import {Subscription} from 'rxjs/Subscription';

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
      (comments: Comment[]) => {
        this.comments = comments;
        console.log(this.comments);
        this.comments.sort(
          (c1: Comment, c2: Comment) =>
            -(c1.creationDate - c2.creationDate)
        );
        console.log(this.comments);
      }
    );
    this.commentService.getComments();
  }

  ngOnDestroy() {
    this.commentEmitterSubscription.unsubscribe();
  }
}
