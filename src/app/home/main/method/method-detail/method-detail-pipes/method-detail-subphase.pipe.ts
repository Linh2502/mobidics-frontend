import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subphase'
})
export class MethodDetailSubphasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      let splitString: string[] = value.split(':');
      result = MethodDetailSubphasePipe.mapSubphases(splitString[0]);
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + MethodDetailSubphasePipe.mapSubphases(splitString[i]);
      }
    }
    return result;
  }

  static mapSubphases(subphase: string): string {
    switch (subphase) {
      case '0':
        return 'Auf Thema einstimmen / Sensibilisieren';
      case '1':
        return 'Vorwissen erfragen';
      case '2':
        return 'Inhalte wiederholen';
      case '3':
        return 'Wissensinput';
      case '4':
        return 'Wissen generieren';
      case '5':
        return 'Kritische Auseinandersetzung mit Wissen';
      case '6':
        return 'Auflockerung';
      case '7':
        return 'Wissen anwenden / umsetzen';
      case '8':
        return 'Wissen festigen';
      case '9':
        return 'Wissen abfragen';
      case '10':
        return 'Lernprozess reflektieren';
      case '11':
        return 'Kennenlernen';
      case '12':
        return 'Persönlicher Austausch (Erfahrung';
      case '13':
        return 'Gruppengefühl stärken';
      case '14':
        return 'Ausklang';
      case '18':
        return 'Feedback einholen';
      case '19':
        return 'Auflockerung';
    }
    return 'Unbekannt';
  }
}
