import {Component, OnInit} from '@angular/core';
import {User} from '../../services/auth/user/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Animations} from '../../animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [Animations.fadeInOut]
})
export class AccountDetailsComponent implements OnInit {

  userForm: FormGroup;
  userFormBackup: FormGroup;
  editModeOn = false;
  profileImage = 'assets/avatar_male.png';

  static
  convertGender(gender) {
    if (gender === 0) {
      return 'Männlich';
    } else {
      return 'Weiblich';
    }
  }

  static
  convertLanguages(languages) {
    let result: string;
    const languageArray: string[] = languages.split('::');
    result = this.mapLanguage(languageArray[0]);
    for (let i = 1; i < languageArray.length; i++) {
      result = result.concat(', ', this.mapLanguage(languageArray[i]));
    }
    return result;
  }

  static mapLanguage(language) {
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

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'email': new FormControl('',
        [Validators.required,
          Validators.email]),
      'languages': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'userStatus': new FormControl('', Validators.required),
      'userType': new FormControl('', Validators.required),
      'university': new FormControl('', Validators.required),
      'faculty': new FormControl('', Validators.required),
      'experience': new FormControl('',
        [Validators.required,
          Validators.pattern('\\d+'),
          Validators.maxLength(2)])
    });
    const user: User = this.authService.loggedInUser;
    this.profileImage = user.profileImage ? user.profileImage : this.profileImage;
    this.userForm.get('firstname').setValue(user.firstname);
    this.userForm.get('lastname').setValue(user.lastname);
    this.userForm.get('username').setValue(user.username);
    this.userForm.get('email').setValue(user.email);
    this.userForm.get('languages').setValue(AccountDetailsComponent.convertLanguages(user.language));
    this.userForm.get('gender').setValue(AccountDetailsComponent.convertGender(user.gender));
    this.userForm.get('userStatus').setValue(user.userStatus);
    this.userForm.get('userType').setValue(user.userType);
    this.userForm.get('university').setValue(user.university.name);
    this.userForm.get('faculty').setValue(user.faculty.name);
    this.userForm.get('experience').setValue(user.experience);
  }

  onEditButtonClicked(): void {
    this.editModeOn = !this.editModeOn;
    this.userFormBackup = this.userForm;
  }

  onSubmit() {
    console.log(this.userForm);
    this.editModeOn = !this.editModeOn;
  }

  onAbortEdit() {
    this.editModeOn = !this.editModeOn;
    this.userForm = this.userFormBackup;
  }

  onUploadButtonClicked() {
  }
}
