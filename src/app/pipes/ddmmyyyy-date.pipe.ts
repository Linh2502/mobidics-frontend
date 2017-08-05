import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ddmmyyyyDate'
})
export class DdmmyyyyDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    const monthNames = [
      'Januar', 'Februar', 'März',
      'April', 'Mai', 'Juni', 'Juli',
      'August', 'September', 'Oktober',
      'November', 'Dezember'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return (day < 10 ? '0' + day : day) + '.' + monthNames[monthIndex] + ' ' + year;
  }

}
