import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'socialform'
})
export class MethodDetailSocialformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      let splitString: string[] = value.split(':');
      result = MethodDetailSocialformPipe.mapSocialForm(splitString[0]);
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + MethodDetailSocialformPipe.mapSocialForm(splitString[i]);
      }
    }
    return result;
  }

  static mapSocialForm(value: string): string {
    switch (value) {
      case '0':
        return 'Plenum interaktiv';
      case '1':
        return 'Partner/Gruppenarbeit';
      case '2':
        return "Plenum untereinander";
      case '3':
        return 'Einzelarbeit';
      case '4':
        return 'Plenum frontal';
    }
    return 'Unbekannt';
  }

}
