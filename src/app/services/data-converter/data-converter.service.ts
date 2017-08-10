import {Injectable} from '@angular/core';

@Injectable()
export class DataConverterService {

  constructor() {
  }

  singleColonDataToArray(data: string): string[] {
    const result: string[] = [];
    data.split(':').forEach(
      (element: string) => result.push(element)
    );
    return result;
  }
}
