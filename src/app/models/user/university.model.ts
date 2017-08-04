export class University {
  constructor(public id: string,
              public hsnr: number,
              public name: string,
              public city: string,
              public state: string,
              public country: string,
              public operator: string,
              public type: string,
              public dateModified: Date) {
  }
}
