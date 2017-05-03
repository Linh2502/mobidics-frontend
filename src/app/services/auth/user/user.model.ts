import { University } from "./university.model";
import { Faculty } from "./faculty.model";
export class User {
  constructor(public firstname: string,
              public lastname: string,
              public username: string,
              public email: string,
              public language: string,
              public gender: string,
              public userStatus: string,
              public userType: string,
              public university: University,
              public faculty: Faculty,
              public favorites: string[],
              public experience: number,
              public profileImage: string,
              public department: string,
              public isApproved: boolean,
              public userLevel: number) {
  }
}
