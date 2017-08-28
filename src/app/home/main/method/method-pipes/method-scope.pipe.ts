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
    return null;
  }

  transform(value: any, args?: any): any {
    return MethodScopePipe.mapScopes(value);
  }

}
