import {Injectable} from '@angular/core';

@Injectable()
export class DataConverterService {

  constructor() {
  }

  singleColonDataToArray(data: string): number[] {
    const result: number[] = [];
    data.split(':').forEach(
      (element: string) => result.push(+element)
    );
    return result;
  }
}
