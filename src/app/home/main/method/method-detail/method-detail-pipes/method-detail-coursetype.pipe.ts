import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseType'
})
export class MethodDetailCourseTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value) {
      let splitString: string[] = value.split(':');
      result = MethodDetailCourseTypePipe.mapCourseType(splitString[0]);
      for (let i = 1; i < splitString.length; i++) {
        result += ', ' + MethodDetailCourseTypePipe.mapCourseType(splitString[i]);
      }
    }
    return result;
  }

  static mapCourseType(courseType: string): string {
    switch (courseType) {
      case '0':
        return 'Seminar';
      case '1':
        return 'Übung';
      case '2':
        return 'Vorlesung';
    }
    return "Unbekannt";
  }

}
