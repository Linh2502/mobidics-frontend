import {Pipe, PipeTransform} from '@angular/core';
import {userStatuses} from '../../../models/constants';

@Pipe({
  name: 'accountUserstatus'
})
export class AccountUserstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
      case 1:
      case 2:
        return userStatuses[value + 1].label;
      default:
        return '--';
    }
  }

}
