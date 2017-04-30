export class Method {

  constructor(public id: string,
              public title: string,
              public images: string[],
              public alternativeTitles: string,
              public socialForm: string,
              public phase: string,
              public subPhase: string,
              public result: string,
              public courseType: string,
              public groupSizeMin: number,
              public groupSizeMax: number,
              public proceeding: string,
              public timeMax: number,
              public timeMin: number,
              public timeComment: string,
              public variations: string,
              public tips: string,
              public experiences: string,
              public creationDate: Date,
              public lastModifiedDate: Date,
              public rating: string,
              public citations: string,
              public userRating: number,
              public visualization: string) {
  }
}
