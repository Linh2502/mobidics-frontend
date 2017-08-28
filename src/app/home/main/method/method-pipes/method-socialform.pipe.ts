import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'socialform'
})
export class MethodSocialformPipe implements PipeTransform {

  static mapSocialForm(value: number): string {
    switch (value) {
      case 0:
        return 'Plenum interaktiv';
      case 1:
        return 'Partner/Gruppenarbeit';
      case 2:
        return 'Plenum untereinander';
      case 3:
        return 'Einzelarbeit';
      case 4:
        return 'Plenum frontal';
    }
    return null;
  }

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value && value.length !== 0) {
      result = MethodSocialformPipe.mapSocialForm(value[0]);
      for (let i = 1; i < value.length; i++) {
        result += ', ' + MethodSocialformPipe.mapSocialForm(value[i]);
      }
    }
    return result;
  }
}
