import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'splitArray'
})
export class SplitArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      const splitString: string[] = value.split('::');
      result = splitString[0];
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + splitString[i];
      }
    }
    return result;
  }

}
