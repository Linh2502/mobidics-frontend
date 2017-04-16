export class User {
  constructor(public firstname: string,
              public lastname: string,
              public username: string,
              public eMail: string,
              public languages: string[],
              public gender: string,
              public userStatus: string,
              public userType: string,
              public university: string,
              public faculty: string,
              public experience: number,
              public profileImage: string) {
  }
}
