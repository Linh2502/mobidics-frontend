import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Comment} from '../../models/comment/comment.model';

@Injectable()
export class CommentService {
  public commentEmitter: EventEmitter<Comment[]>;
  public methodId: string;

  constructor(private httpService: HttpService) {
    this.commentEmitter = new EventEmitter();
  }

  getComments() {
    this.httpService.getCommentsByMethodId(this.methodId).subscribe(
      (comments: Comment[]) => {
        this.commentEmitter.emit(comments);
      }
    );
  }

  addComment(comment: Comment) {
    this.httpService.addCommentByMethodId(this.methodId, comment).subscribe(
      () => {
        this.getComments();
      }
    );
  }

  deleteComment(commentId: string) {
    this.httpService.deleteCommentById(this.methodId, commentId).subscribe(
      () => {
        this.getComments();
      });
  }
}
