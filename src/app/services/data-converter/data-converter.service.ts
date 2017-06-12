import { Injectable } from '@angular/core';

@Injectable()
export class DataConverterService {

  constructor() {
  }

  singleColonDataToArray(data: string): number[] {
    let result: number[];
    data.split(":").forEach(
      (element: string) => result.push(+element)
    );
    console.log(result);
    return result;
  }
}
