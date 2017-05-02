import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phase'
})
export class MethodDetailPhasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      let splitString: string[] = value.split(':');
      result = MethodDetailPhasePipe.mapPhases(splitString[0]);
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + MethodDetailPhasePipe.mapPhases(splitString[i]);
      }
    }
    return result;
  }

  static mapPhases(phase: string): string {
    switch (phase) {
      case '0':
        return '(Lern-)Atmosphäre fördern';
      case '1':
        return 'Ausrichten';
      case '2':
        return 'Vorwissen aktivieren';
      case '3':
        return 'Informieren';
      case '4':
        return 'Verarbeiten';
      case '5':
        return 'Auswerten';
    }
    return 'Unbekannt';
  }
}
