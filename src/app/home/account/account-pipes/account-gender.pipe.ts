import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'accountGender'
})
export class AccountGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0) {
      return 'Männlich';
    } else {
      return 'Weiblich';
    }
  }
}
