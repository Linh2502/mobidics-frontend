import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const seconds = Math.floor(Date.now() / 1000 - value);

    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval + (interval > 1 ? ' Jahren' : ' Jahr');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + (interval > 1 ? ' Monaten' : ' Monat');
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + (interval > 1 ? ' Tagen' : ' Tag');
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + (interval > 1 ? ' Stunden' : ' Stunde');
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + (interval > 1 ? ' Minuten' : ' Minute');
    }
    return Math.floor(seconds) + (seconds > 1 ? ' Sekunden' : ' Sekunde');
  }

}
