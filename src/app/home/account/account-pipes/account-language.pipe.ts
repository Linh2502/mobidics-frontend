import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'accountLanguage'
})
export class AccountLanguagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string;
    const languageArray: string[] = value.split('::');
    result = this.mapLanguage(languageArray[0]);
    for (let i = 1; i < languageArray.length; i++) {
      result = result.concat(', ', this.mapLanguage(languageArray[i]));
    }
    return result;
  }

  mapLanguage(language) {
    switch (language) {
      case 'de':
        return 'Deutsch';
      case 'en':
        return 'Englisch';
      case 'fr':
        return 'Französisch';
      case 'es':
        return 'Spanisch';
    }
  }
}
