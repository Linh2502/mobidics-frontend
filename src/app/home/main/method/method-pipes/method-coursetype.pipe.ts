import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'courseType'
})
export class MethodCourseTypePipe implements PipeTransform {

  static mapCourseType(courseType: number): string {
    switch (courseType) {
      case 0:
        return 'Seminar';
      case 1:
        return 'Übung';
      case 2:
        return 'Vorlesung';
    }
    return null;
  }

  transform(value: any, args?: any): any {
    let result: string = null;
    if (value && value.length !== 0) {
      result = MethodCourseTypePipe.mapCourseType(value[0]);
      for (let i = 1; i < value.length; i++) {
        result += ', ' + MethodCourseTypePipe.mapCourseType(value[i]);
      }
    }
    return result;
  }


}
