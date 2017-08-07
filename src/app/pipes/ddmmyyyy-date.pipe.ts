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
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return 'am ' +
      (day < 10 ? '0' + day : day) + '.' + monthNames[monthIndex] + ' ' + year +
      ' um ' + (hours < 10 ? '0' + hours : hours) + ':' +
      (minutes < 10 ? '0' + minutes : minutes);
  }

}
