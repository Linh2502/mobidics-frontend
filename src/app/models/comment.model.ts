export class Comment {
  constructor(public id: string,
              public methodId: string,
              public creationDate: number,
              public username: string,
              public text: string,
              public inResponseTo: string,
              public rootCommentId: string,
              public thumbsUp: number,
              public thumbsDown: number) {
  }
}
