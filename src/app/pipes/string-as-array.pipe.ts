import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringAsArray'
})
export class StringAsArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string[] = [];
    if (value) {
      result = value.split(':');
    }
    return result;
  }

}
