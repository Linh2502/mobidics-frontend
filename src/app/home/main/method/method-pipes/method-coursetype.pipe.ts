import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'courseType'
})
export class MethodCourseTypePipe implements PipeTransform {

  static mapCourseType(courseType: string): string {
    switch (courseType) {
      case '0':
        return 'Seminar';
      case '1':
        return 'Übung';
      case '2':
        return 'Vorlesung';
    }
    return 'Unbekannt';
  }

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      const splitString: string[] = value.split(':');
      result = MethodCourseTypePipe.mapCourseType(splitString[0]);
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + MethodCourseTypePipe.mapCourseType(splitString[i]);
      }
    }
    return result;
  }


}
