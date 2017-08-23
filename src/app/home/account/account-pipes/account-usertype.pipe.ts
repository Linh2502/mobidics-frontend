import {Pipe, PipeTransform} from '@angular/core';
import {userTypes} from '../../../models/constants';

@Pipe({
  name: 'accountUsertype'
})
export class AccountUsertypePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    switch (value) {
      case 0:
      case 1:
      case 2:
      case 3:
        return userTypes[value + 1].label;
      default:
        return '--';
    }
  }
}
