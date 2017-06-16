import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'scope'
})
export class MethodScopePipe implements PipeTransform {
  static mapScopes(scope: string): string {
    switch (scope) {
      case '0':
        return 'Global';
      case '1':
        return 'Nur ich habe Zugriff auf diese Methode';
      case '2':
        return 'Jeder kann sich diese Methode anschauen';
    }
    return 'Unbekannt';
  }

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      const splitString: string[] = value.split(':');
      result = MethodScopePipe.mapScopes(splitString[0]);
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + MethodScopePipe.mapScopes(splitString[i]);
      }
    }
    return result;
  }

}
