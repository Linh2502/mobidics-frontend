import {University} from './university.model';
import {Faculty} from './faculty.model';

export class User {
  constructor(public gender: number = 0,
              public firstname?: string,
              public lastname?: string,
              public username?: string,
              public password?: string,
              public email?: string,
              public language: string = 'de',
              public approved?: boolean,
              public userStatus: number = -1,
              public userStatusOther?: string,
              public userType: number = -1,
              public userTypeOther?: string,
              public university?: University,
              public faculty?: Faculty,
              public userLevel?: number,
              public lastActionDate?: number,
              public department?: string,
              public experience?: number,
              public profileImage?: string) {
  }
}
