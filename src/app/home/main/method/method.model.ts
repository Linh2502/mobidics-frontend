export class Method {

  constructor(public id: string,
              public images: string[],
              public title: string,
              public alternativeTitles: string,
              public socialForm: string,
              public phase: string,
              public subPhase: string,
              public result: string,
              public courseType: string,
              public groupType: string,
              public groupSizeMin: number,
              public groupSizeMax: number,
              public groupSizeComment: string,
              public proceeding: string,
              public phaseProceeding: string,
              public seating: string,
              public material: string,
              public methodMaterial: string,
              public timeMin: number,
              public timeMax: number,
              public timeComment: string,
              public rating: string,
              public experiences: string,
              public variations: string,
              public examples: string,
              public tips: string,
              public visualization: string,
              public weblinks: string,
              public citations: string,
              public scope: string,
              public userRating: number,
              public thumbnail: string,
              public creationDate: Date,
              public lastModifiedDate: Date,
              public language: string) {
  }
}
