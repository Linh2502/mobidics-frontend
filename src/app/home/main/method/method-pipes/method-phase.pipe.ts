import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phase'
})
export class MethodPhasePipe implements PipeTransform {

  static mapPhases(phase: number): string {
    switch (phase) {
      case 0:
        return '(Lern-)Atmosphäre fördern';
      case 1:
        return 'Ausrichten';
      case 2:
        return 'Vorwissen aktivieren';
      case 3:
        return 'Informieren';
      case 4:
        return 'Verarbeiten';
      case 5:
        return 'Auswerten';
    }
    return 'Unbekannt';
  }

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      result = MethodPhasePipe.mapPhases(value[0]);
      for (let i = 1; i < value.length; i++) {
        result += ', ' + MethodPhasePipe.mapPhases(value[i]);
      }
    }
    return result;
  }
}
