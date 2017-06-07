import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayAsString'
})
export class ArrayAsStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    if (value) {
      result = value[0];
      for (const arrayValue of value) {
        result += ', ' + arrayValue;
      }
    }
    return result;
  }

}
