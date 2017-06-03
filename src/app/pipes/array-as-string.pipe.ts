import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayAsString'
})
export class ArrayAsStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = '';
    if (value) {
      result = value[0];
      for (let arrayValue of value) {
        result += ', ' + arrayValue;
      }
    }
    return result;
  }

}
